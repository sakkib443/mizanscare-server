import { Types } from "mongoose";
import { ReadingTest, generateReadingTestId } from "./reading.model";
import {
    ICreateReadingTestInput,
    IReadingTestFilters,
    getReadingBandScore
} from "./reading.interface";
import { getCache, setCache, invalidateCache } from "../../utils/testCache";
import { stripAnswers } from "../../utils/stripAnswers";

// Create new reading test
const createReadingTest = async (
    data: ICreateReadingTestInput,
    adminId: string
) => {
    const { testId, testNumber } = await generateReadingTestId();

    // Calculate total questions
    let totalQuestions = 0;
    let totalMarks = 0;

    if (data.sections && data.sections.length > 0) {
        data.sections.forEach((section) => {
            totalQuestions += section.questions.length;
            section.questions.forEach((q) => {
                totalMarks += q.marks || 1;
            });
        });
    }

    const readingTest = await ReadingTest.create({
        ...data,
        testId,
        testNumber,
        totalQuestions,
        totalMarks,
        createdBy: new Types.ObjectId(adminId),
    });

    return readingTest;
};

// Get all reading tests
const getAllReadingTests = async (
    filters: IReadingTestFilters,
    page: number = 1,
    limit: number = 20
) => {
    const query: Record<string, unknown> = {};

    if (filters.testType) {
        query.testType = filters.testType;
    }

    if (filters.difficulty) {
        query.difficulty = filters.difficulty;
    }

    if (typeof filters.isActive === "boolean") {
        query.isActive = filters.isActive;
    }

    if (filters.searchTerm) {
        query.$or = [
            { title: { $regex: filters.searchTerm, $options: "i" } },
            { testId: { $regex: filters.searchTerm, $options: "i" } },
            { source: { $regex: filters.searchTerm, $options: "i" } },
        ];
    }

    const skip = (page - 1) * limit;

    // Default: active tests first, then alphabetical by name (A-Z)
    let sortOptions: Record<string, 1 | -1> = { isActive: -1, title: 1 };

    if (filters.sort) {
        if (filters.sort === 'name_asc') sortOptions = { title: 1 };
        else if (filters.sort === 'name_desc') sortOptions = { title: -1 };
        else if (filters.sort === 'newest') sortOptions = { createdAt: -1 };
        else if (filters.sort === 'oldest') sortOptions = { createdAt: 1 };
    }

    const [tests, total] = await Promise.all([
        ReadingTest.find(query)
            .select("-sections.questions.correctAnswer -sections.questions.acceptableAnswers -sections.questions.explanation")
            .sort(sortOptions)
            .skip(skip)
            .limit(limit)
            .lean(),
        ReadingTest.countDocuments(query),
    ]);

    return {
        tests,
        pagination: {
            page,
            limit,
            total,
            totalPages: Math.ceil(total / limit),
        },
    };
};

// Get reading test by ID
const getReadingTestById = async (id: string, includeAnswers: boolean = false) => {
    const selectFields = includeAnswers
        ? undefined
        : "-sections.questions.correctAnswer -sections.questions.acceptableAnswers -sections.questions.explanation";

    const test = selectFields
        ? await ReadingTest.findById(id).select(selectFields).lean()
        : await ReadingTest.findById(id).lean();

    if (!test) {
        throw new Error("Reading test not found");
    }

    return test;
};

// Get reading test by number
const getReadingTestByNumber = async (testNumber: number, includeAnswers: boolean = false) => {
    const selectFields = includeAnswers
        ? undefined
        : "-sections.questions.correctAnswer -sections.questions.acceptableAnswers -sections.questions.explanation";

    const test = selectFields
        ? await ReadingTest.findOne({ testNumber, isActive: true }).select(selectFields).lean()
        : await ReadingTest.findOne({ testNumber, isActive: true }).lean();

    if (!test) {
        throw new Error(`Reading Test #${testNumber} not found`);
    }

    await ReadingTest.findByIdAndUpdate(test._id, { $inc: { usageCount: 1 } });

    return test;
};

// Get reading test for exam — cached
const getReadingTestForExam = async (testNumber: number) => {
    // Try cache first
    const cached = getCache<unknown>("reading", testNumber);
    if (cached) return cached;

    const test = await ReadingTest.findOne({ testNumber, isActive: true })
        .select("-sections.questions.correctAnswer -sections.questions.acceptableAnswers -sections.questions.explanation")
        .lean();

    if (!test) {
        throw new Error(`Reading Test #${testNumber} not found or inactive`);
    }

    // The projection above only reaches sections.questions.*; reading keeps answers inside
    // questionGroups, summarySegments, statements and friends too, so strip the whole document
    // before it leaves the server — and cache the stripped copy, never the raw one.
    const safeTest = stripAnswers(test);

    // Store in cache
    setCache("reading", testNumber, safeTest);

    return safeTest;
};

// Get answers for grading
const getAnswersForGrading = async (testNumber: number) => {
    const test = await ReadingTest.findOne({ testNumber })
        .select("sections.questions.questionNumber sections.questions.correctAnswer sections.questions.acceptableAnswers testType")
        .lean();

    if (!test) {
        throw new Error("Reading test not found");
    }

    const answerMap: Record<number, { correct: string | string[]; acceptable?: string[] }> = {};

    if (test.sections) {
        test.sections.forEach((section) => {
            section.questions.forEach((q) => {
                answerMap[q.questionNumber] = {
                    correct: q.correctAnswer,
                    acceptable: q.acceptableAnswers
                };
            });
        });
    }

    return { answerMap, testType: test.testType };
};

// Grade reading answers
const gradeReadingAnswers = async (
    testNumber: number,
    studentAnswers: Record<number, string>
) => {
    const { answerMap, testType } = await getAnswersForGrading(testNumber);

    let correctCount = 0;
    const results: Record<number, {
        studentAnswer: string;
        correctAnswer: string | string[];
        isCorrect: boolean
    }> = {};

    for (const [questionNum, studentAnswer] of Object.entries(studentAnswers)) {
        const qNum = parseInt(questionNum);
        const correctData = answerMap[qNum];

        if (!correctData) continue;

        const normalizeAnswer = (ans: string) =>
            ans?.toLowerCase()
                .replace(/(\d),\s*(\d)/g, "$1$2")   // keep thousands separators intact (1,500 -> 1500)
                .replace(/\s*,\s*/g, " ")         // treat list commas as spaces so "a,b" === "a, b"
                .replace(/[.!?]/g, "")
                .replace(/\s+/g, " ")
                .trim();

        const studentNormalized = normalizeAnswer(studentAnswer);

        let isCorrect = false;

        // A choose-two/three answer can be submitted as several letters in ONE box ("D,E").
        // Compare those as an unordered set. Guard to LETTER lists only, so a word answer that
        // happens to contain a comma (e.g. "crops, livestock") still falls through to equality.
        const isLetterCommaString =
            typeof correctData.correct === 'string' &&
            correctData.correct.includes(',') &&
            correctData.correct.split(',').every((x: string) => /^[a-h]$/i.test(x.trim()));

        if (isLetterCommaString) {
            const correctSet = (correctData.correct as string).split(',').map((a: string) => normalizeAnswer(a)).sort();
            const studentSet = String(studentAnswer).split(',').map((a: string) => normalizeAnswer(a)).filter(Boolean).sort();
            isCorrect = correctSet.length === studentSet.length && correctSet.every((val: string, idx: number) => val === studentSet[idx]);
        } else if (Array.isArray(correctData.correct)) {
            // separate-letter-per-question (choose-two across two numbers): match any one letter
            isCorrect = correctData.correct.some(ca => normalizeAnswer(ca) === studentNormalized);
            // combined choose-N typed in one box ("D,E"): compare as an unordered set
            if (!isCorrect) {
                const correctSet = correctData.correct.map((c: string) => normalizeAnswer(c)).sort();
                const studentSet = String(studentAnswer).split(',').map((s: string) => normalizeAnswer(s)).filter(Boolean).sort();
                isCorrect = studentSet.length === correctSet.length && correctSet.every((val: string, idx: number) => val === studentSet[idx]);
            }
        } else {
            isCorrect = normalizeAnswer(correctData.correct) === studentNormalized;
        }

        if (!isCorrect && correctData.acceptable) {
            isCorrect = correctData.acceptable.some(aa =>
                normalizeAnswer(aa) === studentNormalized
            );
        }

        if (isCorrect) correctCount++;

        results[qNum] = {
            studentAnswer,
            correctAnswer: correctData.correct,
            isCorrect
        };
    }

    const bandScore = getReadingBandScore(correctCount, testType as "academic" | "general-training");

    return {
        correctCount,
        totalQuestions: Object.keys(answerMap).length,
        bandScore,
        testType,
        results
    };
};

// Update reading test
const updateReadingTest = async (
    id: string,
    updateData: Partial<ICreateReadingTestInput>
) => {
    const test = await ReadingTest.findById(id);
    if (!test) {
        throw new Error("Reading test not found");
    }

    if (updateData.sections) {
        let totalQuestions = 0;
        let totalMarks = 0;
        updateData.sections.forEach((section) => {
            totalQuestions += section.questions.length;
            section.questions.forEach((q) => {
                totalMarks += q.marks || 1;
            });
        });
        (updateData as any).totalQuestions = totalQuestions;
        (updateData as any).totalMarks = totalMarks;
    }

    const updatedTest = await ReadingTest.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true }
    );

    if (test.testNumber != null) {
        invalidateCache("reading", test.testNumber);
    }

    return updatedTest;
};

// Delete reading test
const deleteReadingTest = async (id: string) => {
    const test = await ReadingTest.findById(id);
    if (!test) {
        throw new Error("Reading test not found");
    }

    await ReadingTest.findByIdAndDelete(id);

    if (test.testNumber != null) {
        invalidateCache("reading", test.testNumber);
    }

    return { message: "Reading test deleted successfully" };
};

// Toggle active
const toggleActive = async (id: string) => {
    const test = await ReadingTest.findById(id);
    if (!test) {
        throw new Error("Reading test not found");
    }

    test.isActive = !test.isActive;
    await test.save();

    if (test.testNumber != null) {
        invalidateCache("reading", test.testNumber);
    }

    return {
        message: `Reading test ${test.isActive ? "activated" : "deactivated"} successfully`,
        isActive: test.isActive,
    };
};

// Get test summary
const getTestSummary = async (testType?: string) => {
    const query: Record<string, unknown> = { isActive: true };
    if (testType) query.testType = testType;

    const tests = await ReadingTest.find(query)
        .select("testId testNumber title testType difficulty usageCount source")
        .sort({ testNumber: 1 })
        .lean();

    return tests;
};

// Get statistics
const getStatistics = async () => {
    const [total, active, academic, generalTraining, totalUsage] = await Promise.all([
        ReadingTest.countDocuments({}),
        ReadingTest.countDocuments({ isActive: true }),
        ReadingTest.countDocuments({ testType: "academic", isActive: true }),
        ReadingTest.countDocuments({ testType: "general-training", isActive: true }),
        ReadingTest.aggregate([
            { $group: { _id: null, total: { $sum: "$usageCount" } } },
        ]),
    ]);

    return {
        total,
        active,
        academic,
        generalTraining,
        totalUsage: totalUsage[0]?.total || 0,
    };
};

export const ReadingService = {
    createReadingTest,
    getAllReadingTests,
    getReadingTestById,
    getReadingTestByNumber,
    getReadingTestForExam,
    getAnswersForGrading,
    gradeReadingAnswers,
    updateReadingTest,
    deleteReadingTest,
    toggleActive,
    getTestSummary,
    getStatistics,
};

import mongoose from "mongoose";
import config from "../app/config";
import { WritingTest } from "../app/modules/writing/writing.model";

/**
 * Writing Mock Test 15 — from "writing set 15 .docx" in the New Test batch.
 * testNumber 15 because the filename says 15 and that number was free.
 *
 * Unlike listening and reading, writing needs no answer key: the tasks are
 * marked by a person or by the AI grader, so this test goes live active.
 *
 * Task 1's data is a small table rather than a chart image, so it lives in the
 * prompt. The exam page renders prompts with white-space: pre-line, which keeps
 * the line breaks but does not interpret HTML — hence plain aligned text.
 */

const TASK1_TABLE = [
    "Country        Total     Public spending    Private spending",
    "Japan          7.20%     5.80%              1.40%",
    "Italy          7.70%     5.30%              2.40%",
    "Germany        9.30%     7%                 2.30%",
    "France         11.40%    8.60%              2.80%",
    "USA            8.60%     6%                 2.60%",
].join("\n");

const writingTestData = {
    testId: "WRITING_015",
    testNumber: 15,
    title: "Writing Mock Test 15 - Academic",
    description: "IELTS Academic Writing Test 15 — Task 1 and Task 2.",
    source: "Writing set 15",
    testType: "academic" as const,
    difficulty: "medium" as const,
    totalTasks: 2,
    duration: 60,
    topicCategories: [],
    isActive: true,
    usageCount: 0,
    tasks: [
        {
            taskNumber: 1,
            taskType: "task1-academic",
            subType: "table",
            prompt: "The table shows the relative amount of GDP that five different countries invested in healthcare services in 2002.\n\n"
                + TASK1_TABLE
                + "\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
            instructions: "You should spend about 20 minutes on this task. Write at least 150 words.",
            minWords: 150,
            recommendedTime: 20,
            images: [],
            keyPoints: [],
        },
        {
            taskNumber: 2,
            taskType: "task2",
            subType: "opinion",
            prompt: "Nowadays more and more people have access to the Internet. But constant availability of any information worsens people's memory and critical thinking skills.\n\n"
                + "To what extent do you agree or disagree?\n\n"
                + "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
            instructions: "You should spend about 40 minutes on this task. Write at least 250 words.",
            minWords: 250,
            recommendedTime: 40,
            images: [],
            keyPoints: [],
        },
    ],
};

async function seedWritingTest15() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await WritingTest.findOne({ testNumber: 15 });
        if (existing) {
            console.log("Writing Test 15 already exists. Updating...");
            await WritingTest.findByIdAndUpdate(existing._id, writingTestData, { runValidators: false });
            console.log("Writing Test 15 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await WritingTest.create({ ...writingTestData, createdBy });
            console.log("Writing Test 15 created!");
        }

        const test = await WritingTest.findOne({ testNumber: 15 });
        if (test) {
            console.log("\nTest: " + test.title);
            (test.tasks as any[]).forEach((t) => {
                console.log("  Task " + t.taskNumber + " (" + t.subType + "): "
                    + t.minWords + " words, " + t.images.length + " image(s)");
            });
            console.log("  isActive: " + (test as any).isActive);
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}

seedWritingTest15();

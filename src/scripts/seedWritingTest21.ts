import mongoose from "mongoose";
import config from "../app/config";
import { WritingTest } from "../app/modules/writing/writing.model";

/**
 * Writing Mock Test 21 — the writing half of "Test 01" in the New Test batch,
 * completing the set alongside listening and reading test 21.
 *
 * The writing tasks sit at the very end of each paper as page images rather than
 * text, which is why a keyword search of the extracted text found nothing at
 * first. The prompts are transcribed here; the charts and maps are served from
 * the VPS under /uploads/images/.
 *
 * Writing needs no answer key — the tasks are marked by a person or by the AI
 * grader — so this test goes live active.
 */

const writingTestData = {
    testId: "WRITING_021",
    testNumber: 21,
    title: "Writing Mock Test 21 - Academic",
    description: "IELTS Academic Writing Test 21 — Task 1 and Task 2.",
    source: "Test 01",
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
            subType: "line-graph",
            prompt: "The graphs below show the number of men and women in full and part-time employment in Australia between 1973 and 1993.\n\nWrite a report for a university lecturer describing the information shown below.",
            instructions: "You should spend about 20 minutes on this task. Write at least 150 words.",
            minWords: 150,
            recommendedTime: 20,
            images: [
              {
                        "url": "https://t1pnvk64oo9dus92mnoew4x2.169.58.25.54.sslip.io/uploads/images/writing21-task1-employment.png",
                        "caption": "Full-time and part-time employment in Australia, 1973 and 1993"
              }
    ],
            keyPoints: [],
        },
        {
            taskNumber: 2,
            taskType: "task2",
            subType: "two-part-question",
            prompt: "Present a written argument or case to an educated non-specialist audience on the following topic:\n\nIn the past, sporting champions used to be motivated primarily by the desire to win a match or to break world records. These days, they are more likely to be motivated by prize money and the opportunity to be famous.\n\nWhat message does this send to young people and how does this attitude to sport affect the sports themselves?\n\nGive reasons for your answers.",
            instructions: "You should spend about 40 minutes on this task. Write at least 250 words. You should use your own ideas, knowledge and experience and support your arguments with examples and relevant evidence.",
            minWords: 250,
            recommendedTime: 40,
            images: [],
            keyPoints: [],
        },
    ],
};

async function seedWritingTest21() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await WritingTest.findOne({ testNumber: 21 });
        if (existing) {
            console.log("Writing Test 21 already exists. Updating...");
            await WritingTest.findByIdAndUpdate(existing._id, writingTestData, { runValidators: false });
            console.log("Writing Test 21 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await WritingTest.create({ ...writingTestData, createdBy });
            console.log("Writing Test 21 created!");
        }

        const test = await WritingTest.findOne({ testNumber: 21 });
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

seedWritingTest21();

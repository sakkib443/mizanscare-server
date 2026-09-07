import mongoose from "mongoose";
import config from "../app/config";
import { WritingTest } from "../app/modules/writing/writing.model";

/**
 * Writing Mock Test 16 — from "writing set 16 .docx" in the New Test batch.
 *
 * "writing set 13 .docx" holds exactly the same two tasks and the same chart
 * image (identical MD5), so the batch's three writing files contain only two
 * distinct sets. 16 is used because that number was free, while 13 is already
 * taken by an unrelated paper (the Langley maps).
 *
 * Writing needs no answer key — the tasks are marked by a person or by the AI
 * grader — so this test goes live active.
 */

const BASE = "https://t1pnvk64oo9dus92mnoew4x2.169.58.25.54.sslip.io";
const TASK1_IMAGE = `${BASE}/uploads/images/writing16-task1-water-use.png`;

const writingTestData = {
    testId: "WRITING_016",
    testNumber: 16,
    title: "Writing Mock Test 16 - Academic",
    description: "IELTS Academic Writing Test 16 — Task 1 and Task 2.",
    source: "Writing set 16",
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
            subType: "multiple-charts",
            prompt: "The charts below show the percentage of water used by different sectors in Sydney, Australia, in 1997 and 2007.\n\n"
                + "Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
            instructions: "You should spend about 20 minutes on this task. Write at least 150 words.",
            minWords: 150,
            recommendedTime: 20,
            images: [{ url: TASK1_IMAGE, caption: "Percentage of total water use: 1997 and 2007" }],
            keyPoints: [],
        },
        {
            taskNumber: 2,
            taskType: "task2",
            subType: "problem-causes-solutions",
            prompt: "Technology provides us a lot of means to communicate. But now that people have the ability to talk to each other in a wider variety of methods, our communication and social abilities have taken a step back.\n\n"
                + "Why does technological advance hurt non-technical communication? How can we solve this problem?\n\n"
                + "Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
            instructions: "You should spend about 40 minutes on this task. Write at least 250 words.",
            minWords: 250,
            recommendedTime: 40,
            images: [],
            keyPoints: [],
        },
    ],
};

async function seedWritingTest16() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await WritingTest.findOne({ testNumber: 16 });
        if (existing) {
            console.log("Writing Test 16 already exists. Updating...");
            await WritingTest.findByIdAndUpdate(existing._id, writingTestData, { runValidators: false });
            console.log("Writing Test 16 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await WritingTest.create({ ...writingTestData, createdBy });
            console.log("Writing Test 16 created!");
        }

        const test = await WritingTest.findOne({ testNumber: 16 });
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

seedWritingTest16();

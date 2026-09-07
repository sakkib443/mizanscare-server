import mongoose from "mongoose";
import config from "../app/config";
import { WritingTest } from "../app/modules/writing/writing.model";

/**
 * Writing Mock Test 22 — the writing half of "Test 02" in the New Test batch,
 * completing the set alongside listening and reading test 22.
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
    testId: "WRITING_022",
    testNumber: 22,
    title: "Writing Mock Test 22 - Academic",
    description: "IELTS Academic Writing Test 22 — Task 1 and Task 2.",
    source: "Test 02",
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
            subType: "bar-chart",
            prompt: "The charts below show the proportions of the world's oil resources held in different areas, together with the proportions consumed annually in the same areas.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
            instructions: "You should spend about 20 minutes on this task. Write at least 150 words.",
            minWords: 150,
            recommendedTime: 20,
            images: [
              {
                        "url": "https://t1pnvk64oo9dus92mnoew4x2.169.58.25.54.sslip.io/uploads/images/writing22-task1-oil.png",
                        "caption": "World oil resources and annual oil consumption by area"
              }
    ],
            keyPoints: [],
        },
        {
            taskNumber: 2,
            taskType: "task2",
            subType: "two-part-question",
            prompt: "Write about the following topic:\n\nIn many countries today insufficient respect is shown to older people.\n\nWhat do you think may be the reasons for this?\n\nWhat problems might this cause in society?\n\nGive reasons for your answer and include any relevant examples from your own knowledge or experience.",
            instructions: "You should spend about 40 minutes on this task. Write at least 250 words.",
            minWords: 250,
            recommendedTime: 40,
            images: [],
            keyPoints: [],
        },
    ],
};

async function seedWritingTest22() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await WritingTest.findOne({ testNumber: 22 });
        if (existing) {
            console.log("Writing Test 22 already exists. Updating...");
            await WritingTest.findByIdAndUpdate(existing._id, writingTestData, { runValidators: false });
            console.log("Writing Test 22 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await WritingTest.create({ ...writingTestData, createdBy });
            console.log("Writing Test 22 created!");
        }

        const test = await WritingTest.findOne({ testNumber: 22 });
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

seedWritingTest22();

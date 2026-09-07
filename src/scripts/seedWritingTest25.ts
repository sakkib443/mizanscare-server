import mongoose from "mongoose";
import config from "../app/config";
import { WritingTest } from "../app/modules/writing/writing.model";

/**
 * Writing Mock Test 25 — the writing half of "Test 05" in the New Test batch,
 * completing the set alongside listening and reading test 25.
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
    testId: "WRITING_025",
    testNumber: 25,
    title: "Writing Mock Test 25 - Academic",
    description: "IELTS Academic Writing Test 25 — Task 1 and Task 2.",
    source: "Test 05",
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
            subType: "map-comparison",
            prompt: "The following diagrams show a current map of Peyton Park and a plan for proposed changes.\n\nSummarise the information by selecting and reporting the main features, and make comparisons where relevant.",
            instructions: "You should spend about 20 minutes on this task. Write at least 150 words.",
            minWords: 150,
            recommendedTime: 20,
            images: [
              {
                        "url": "https://t1pnvk64oo9dus92mnoew4x2.169.58.25.54.sslip.io/uploads/images/writing25-task1-park.png",
                        "caption": "Peyton Park — current and proposed"
              }
    ],
            keyPoints: [],
        },
        {
            taskNumber: 2,
            taskType: "task2",
            subType: "opinion",
            prompt: "Write about the following topic:\n\nLife now is better than it was 100 years ago.\n\nTo what extent do you agree or disagree with this statement? Give reasons for your answer and include any relevant examples from your own knowledge or experience.",
            instructions: "You should spend about 40 minutes on this task. Write at least 250 words.",
            minWords: 250,
            recommendedTime: 40,
            images: [],
            keyPoints: [],
        },
    ],
};

async function seedWritingTest25() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await WritingTest.findOne({ testNumber: 25 });
        if (existing) {
            console.log("Writing Test 25 already exists. Updating...");
            await WritingTest.findByIdAndUpdate(existing._id, writingTestData, { runValidators: false });
            console.log("Writing Test 25 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await WritingTest.create({ ...writingTestData, createdBy });
            console.log("Writing Test 25 created!");
        }

        const test = await WritingTest.findOne({ testNumber: 25 });
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

seedWritingTest25();

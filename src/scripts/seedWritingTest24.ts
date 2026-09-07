import mongoose from "mongoose";
import config from "../app/config";
import { WritingTest } from "../app/modules/writing/writing.model";

/**
 * Writing Mock Test 24 — the writing half of "Test 04" in the New Test batch,
 * completing the set alongside listening and reading test 24.
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
    testId: "WRITING_024",
    testNumber: 24,
    title: "Writing Mock Test 24 - Academic",
    description: "IELTS Academic Writing Test 24 — Task 1 and Task 2.",
    source: "Test 04",
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
            prompt: "The graphs below show the types of music albums purchased by people in Britain according to sex and age.\n\nWrite a report for a university lecturer describing the information shown below.",
            instructions: "You should spend about 20 minutes on this task. Write at least 150 words.",
            minWords: 150,
            recommendedTime: 20,
            images: [
              {
                        "url": "https://t1pnvk64oo9dus92mnoew4x2.169.58.25.54.sslip.io/uploads/images/writing24-task1-music.png",
                        "caption": "Purchases of pop, rock and classical music albums in Britain by sex and age"
              }
    ],
            keyPoints: [],
        },
        {
            taskNumber: 2,
            taskType: "task2",
            subType: "two-part-question",
            prompt: "Present a written argument or case to an educated non-specialist audience on the following topic:\n\nSome employers reward members of staff for their exceptional contribution to the company by giving them extra money. This practice can act as an incentive for some but may also have a negative impact on others.\n\nTo what extent is this style of management effective?\n\nAre there better ways of encouraging employees to work hard?",
            instructions: "You should spend about 40 minutes on this task. Write at least 250 words. You should use your own ideas, knowledge and experience and support your arguments with examples and relevant evidence.",
            minWords: 250,
            recommendedTime: 40,
            images: [],
            keyPoints: [],
        },
    ],
};

async function seedWritingTest24() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await WritingTest.findOne({ testNumber: 24 });
        if (existing) {
            console.log("Writing Test 24 already exists. Updating...");
            await WritingTest.findByIdAndUpdate(existing._id, writingTestData, { runValidators: false });
            console.log("Writing Test 24 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await WritingTest.create({ ...writingTestData, createdBy });
            console.log("Writing Test 24 created!");
        }

        const test = await WritingTest.findOne({ testNumber: 24 });
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

seedWritingTest24();

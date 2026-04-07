import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import config from "../app/config";

async function check() {
    await mongoose.connect(config.database_url as string);
    const tests = await ReadingTest.find({}).select("testNumber title totalQuestions isActive").sort({ testNumber: 1 });
    console.log("\n=== READING TESTS IN DATABASE ===");
    console.log("Total Tests:", tests.length);
    console.log("─".repeat(80));
    tests.forEach((t: any) => {
        console.log(`  Test ${String(t.testNumber).padStart(2, "0")} | ${t.title} | Q: ${t.totalQuestions} | Active: ${t.isActive}`);
    });
    console.log("─".repeat(80));

    // Detail check per test - sections & questions
    for (const t of tests) {
        const full = await ReadingTest.findById(t._id);
        if (full) {
            const sections = (full as any).sections || [];
            let totalQs = 0;
            const sDetails: string[] = [];
            sections.forEach((s: any, i: number) => {
                const qCount = s.questions?.length || 0;
                const gCount = s.questionGroups?.length || 0;
                totalQs += qCount;
                sDetails.push(`S${i + 1}(G:${gCount},Q:${qCount})`);
            });
            console.log(`  Test ${String((full as any).testNumber).padStart(2, "0")}: ${sDetails.join(" | ")} => Total DB Qs: ${totalQs}`);
        }
    }

    await mongoose.disconnect();
    process.exit(0);
}
check();

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import config from "../app/config";

async function list() {
    await mongoose.connect(config.database_url as string);
    const tests = await ReadingTest.find({}).select("testNumber title testId isActive totalQuestions").sort({ testNumber: 1 });
    console.log(`\n=== ALL READING TESTS (${tests.length}) ===`);
    tests.forEach((t: any) => {
        const act = t.isActive ? "✅" : "❌";
        console.log(`  ${act} #${String(t.testNumber).padStart(2, "0")} | ${t.testId} | "${t.title}" | Qs:${t.totalQuestions}`);
    });
    await mongoose.disconnect();
    process.exit(0);
}
list();

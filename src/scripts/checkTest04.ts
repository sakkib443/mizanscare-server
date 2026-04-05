import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import config from "../app/config";

async function check() {
    await mongoose.connect(config.database_url as string);
    const test = await ReadingTest.findOne({ testNumber: 4 });
    if (!test) { console.log("NOT FOUND"); process.exit(0); }
    
    console.log("Title:", test.title);
    console.log("Sections:", test.sections.length);
    
    test.sections.forEach((s: any, i: number) => {
        console.log(`\n=== Section ${i+1}: ${s.title} ===`);
        console.log("  questionGroups:", s.questionGroups?.length || 0);
        s.questionGroups?.forEach((g: any, gi: number) => {
            console.log(`    Group ${gi+1}: ${g.groupType} (Q${g.startQuestion}-Q${g.endQuestion})`);
        });
        console.log("  questions:", s.questions?.length || 0);
        s.questions?.forEach((q: any) => {
            console.log(`    Q${q.questionNumber} [${q.questionType}] -> ${q.correctAnswer}`);
        });
    });
    
    await mongoose.disconnect();
    process.exit(0);
}
check();

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import config from "../app/config";

async function check() {
    await mongoose.connect(config.database_url as string);
    const test = await ReadingTest.findOne({ testNumber: 4 });
    if (!test) { console.log("NOT FOUND"); process.exit(0); }
    
    // Check first 200 chars of section 1 passage raw
    const passage = (test.sections[0] as any).passage;
    console.log("=== RAW PASSAGE (first 300 chars) ===");
    console.log(JSON.stringify(passage.substring(0, 300)));
    console.log("\n=== CHARACTER CODES ===");
    for (let i = 0; i < Math.min(passage.length, 100); i++) {
        const char = passage[i];
        const code = passage.charCodeAt(i);
        if (code === 10) console.log(`  [${i}] NEWLINE (\\n)`);
        else if (code === 13) console.log(`  [${i}] CARRIAGE_RETURN (\\r)`);
        else if (code === 92) console.log(`  [${i}] BACKSLASH (\\)`);
    }
    
    await mongoose.disconnect();
    process.exit(0);
}
check();

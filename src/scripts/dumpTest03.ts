import mongoose from "mongoose";
import * as fs from "fs";
import { ReadingTest } from "../app/modules/reading/reading.model";
import config from "../app/config";

async function dump() {
    await mongoose.connect(config.database_url as string);
    const test = await ReadingTest.findOne({ testNumber: 103 }).lean();
    if (!test) {
        console.log("Test 3 not found in DB");
        process.exit(1);
    }
    const outPath = "C:\\Users\\User\\AppData\\Local\\Temp\\mock03\\db-test103.json";
    fs.writeFileSync(outPath, JSON.stringify(test, null, 2));
    console.log("Dumped to:", outPath);
    console.log("isActive:", (test as any).isActive);
    console.log("title:", (test as any).title);
    console.log("sections:", ((test as any).sections || []).length);
    await mongoose.disconnect();
    process.exit(0);
}
dump();

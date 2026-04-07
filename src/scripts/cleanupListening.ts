import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function cleanup() {
    await mongoose.connect(config.database_url as string);
    console.log("Connected");
    
    // Delete old test 06 if exists
    const r = await ListeningTest.deleteOne({ testNumber: 6 });
    console.log("Deleted test #6:", r.deletedCount);
    
    // List all listening tests
    const all = await ListeningTest.find({}, "testNumber title").sort({ testNumber: 1 });
    console.log("\nAll Listening Tests:");
    all.forEach(t => console.log(`  #${t.testNumber}: ${t.title}`));
    
    await mongoose.disconnect();
    process.exit(0);
}
cleanup();

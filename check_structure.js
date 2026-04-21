const mongoose = require("mongoose");
require("dotenv").config();

async function checkStructure() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        const db = mongoose.connection.db;

        // Get test 1 full document to see exact structure
        const test1 = await db.collection("listeningtests").findOne({ testNumber: 1 });
        
        console.log("═══ TEST 1 FULL KEYS ═══");
        console.log("Top-level keys:", Object.keys(test1));
        
        if (test1.sections && test1.sections.length > 0) {
            console.log("\nSection 0 keys:", Object.keys(test1.sections[0]));
            console.log("Section 0 full data (first 2000 chars):", JSON.stringify(test1.sections[0]).substring(0, 2000));
        }
        
        if (test1.questions && test1.questions.length > 0) {
            console.log("\nTop-level questions count:", test1.questions.length);
            console.log("First question:", JSON.stringify(test1.questions[0]));
        }

        // Check if there's a separate questionsets collection
        const qsets = await db.collection("questionsets").find({ setType: "LISTENING" }).toArray();
        console.log("\n═══ QUESTIONSETS COLLECTION ═══");
        console.log("Listening questionsets count:", qsets.length);
        
        if (qsets.length > 0) {
            console.log("First questionset keys:", Object.keys(qsets[0]));
            console.log("First questionset title:", qsets[0].title);
            if (qsets[0].sections) {
                console.log("Sections count:", qsets[0].sections.length);
                if (qsets[0].sections[0]) {
                    console.log("Section 0 keys:", Object.keys(qsets[0].sections[0]));
                    console.log("Section 0 questionGroups count:", qsets[0].sections[0].questionGroups?.length || 0);
                    if (qsets[0].sections[0].questionGroups?.[0]) {
                        console.log("First group keys:", Object.keys(qsets[0].sections[0].questionGroups[0]));
                        console.log("First group questions count:", qsets[0].sections[0].questionGroups[0].questions?.length || 0);
                    }
                }
            }
        }

        // Also check what collections exist
        const collections = await db.listCollections().toArray();
        console.log("\n═══ ALL COLLECTIONS ═══");
        collections.forEach(c => console.log(`  ${c.name}`));

        await mongoose.disconnect();
    } catch (error) {
        console.error("Error:", error);
    }
}

checkStructure();

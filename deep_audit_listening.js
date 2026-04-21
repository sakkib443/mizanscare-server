const mongoose = require("mongoose");
require("dotenv").config();

async function deepAudit() {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        const db = mongoose.connection.db;

        const tests = await db.collection("listeningtests")
            .find({})
            .sort({ testNumber: 1 })
            .toArray();

        console.log(`Total listening tests in DB: ${tests.length}`);
        
        // Check missing test numbers
        const existingNumbers = tests.map(t => t.testNumber);
        const missing = [];
        for (let i = 1; i <= 20; i++) {
            if (!existingNumbers.includes(i)) missing.push(i);
        }
        if (missing.length > 0) console.log(`MISSING TEST NUMBERS: ${missing.join(", ")}`);
        console.log("");

        const allIssues = [];

        for (const test of tests) {
            const testNum = test.testNumber;
            const issues = [];

            console.log(`\n${"=".repeat(60)}`);
            console.log(`TEST ${String(testNum).padStart(2,"0")}: ${test.title || "(no title)"}`);
            console.log(`${"=".repeat(60)}`);
            console.log(`  ID: ${test._id}`);
            console.log(`  Active: ${test.isActive}`);
            console.log(`  Test Type: ${test.testType || "N/A"}`);
            console.log(`  mainAudioUrl: ${test.mainAudioUrl || "NONE"}`);
            console.log(`  Duration: ${test.duration || "N/A"} min`);
            console.log(`  totalQuestions (metadata): ${test.totalQuestions || "N/A"}`);
            console.log(`  Sections: ${test.sections?.length || 0}`);

            // BASIC CHECKS
            if (!test.title) issues.push("Missing title");
            if (!test.mainAudioUrl || test.mainAudioUrl.trim() === "") {
                issues.push("Missing mainAudioUrl");
            }
            if (!test.sections || test.sections.length === 0) {
                issues.push("No sections found");
                allIssues.push({ testNumber: testNum, title: test.title, issues });
                continue;
            }
            if (test.sections.length !== 4) {
                issues.push(`Expected 4 sections, found ${test.sections.length}`);
            }

            let allQuestionNumbers = [];
            let totalActualQuestions = 0;

            for (let si = 0; si < test.sections.length; si++) {
                const section = test.sections[si];
                const sNum = section.sectionNumber || si + 1;

                // Get actual questions (blockType=question)
                const allBlocks = section.questions || [];
                const questionBlocks = allBlocks.filter(b => b.blockType === "question");
                const instructionBlocks = allBlocks.filter(b => b.blockType === "instruction");
                
                console.log(`\n  -- Section ${sNum} (${section.title || "?"}) --`);
                console.log(`    Total blocks: ${allBlocks.length} (${questionBlocks.length} questions, ${instructionBlocks.length} instructions)`);
                console.log(`    audioUrl: ${section.audioUrl || "none"}`);

                if (questionBlocks.length === 0) {
                    issues.push(`Section ${sNum}: No questions found`);
                }

                // Check section question count - should be 10 each
                if (questionBlocks.length !== 10) {
                    issues.push(`Section ${sNum}: Has ${questionBlocks.length} questions, expected 10`);
                }

                for (const q of questionBlocks) {
                    allQuestionNumbers.push(q.questionNumber);
                    totalActualQuestions++;

                    // Check correctAnswer
                    if (!q.correctAnswer || q.correctAnswer.trim() === "" || q.correctAnswer === "TBD") {
                        issues.push(`S${sNum} Q${q.questionNumber}: correctAnswer = "${q.correctAnswer || "EMPTY"}"`);
                    }

                    // Check questionType
                    if (!q.questionType || q.questionType.trim() === "") {
                        issues.push(`S${sNum} Q${q.questionNumber}: Missing questionType`);
                    }

                    // Check questionText
                    if (!q.questionText || q.questionText.trim() === "") {
                        issues.push(`S${sNum} Q${q.questionNumber}: Missing questionText`);
                    }

                    // MCQ should have options
                    const mcqTypes = ["multiple-choice", "mcq", "multiple_choice"];
                    if (mcqTypes.includes(q.questionType)) {
                        if (!q.options || q.options.length === 0) {
                            issues.push(`S${sNum} Q${q.questionNumber}: MCQ but no options`);
                        } else if (q.options.length < 3) {
                            issues.push(`S${sNum} Q${q.questionNumber}: MCQ has only ${q.options.length} options`);
                        }
                    }

                    // Check if correct answer matches any MCQ option
                    if (mcqTypes.includes(q.questionType) && q.options && q.options.length > 0 && q.correctAnswer) {
                        const optionLetters = q.options.map((_, i) => String.fromCharCode(65 + i));
                        const ansLetter = q.correctAnswer.trim().toUpperCase();
                        if (ansLetter.length === 1 && !optionLetters.includes(ansLetter)) {
                            issues.push(`S${sNum} Q${q.questionNumber}: Answer "${q.correctAnswer}" not in option range ${optionLetters.join(",")}`);
                        }
                    }

                    // Print each question for record
                    const optCount = q.options?.length || 0;
                    console.log(`    Q${String(q.questionNumber).padStart(2," ")}: [${q.questionType || "?"}] ans="${q.correctAnswer || "?"}" ${optCount > 0 ? `(${optCount} opts)` : ""}`);
                }

                // Check for image references in instructions
                for (const inst of instructionBlocks) {
                    if (inst.content && (inst.content.includes("<img") || inst.content.includes("src="))) {
                        const imgMatch = inst.content.match(/src="([^"]+)"/);
                        if (imgMatch) {
                            console.log(`    IMAGE FOUND: ${imgMatch[1]}`);
                        }
                    }
                    // Check for map/plan mentions
                    if (inst.content && /map|plan|diagram|label/i.test(inst.content)) {
                        console.log(`    MAP/PLAN reference in instruction block`);
                        // Check if there's an imageUrl in the section or instructions
                        if (!inst.content.includes("<img") && !section.imageUrl) {
                            // Only flag if instructions mention map but no image found anywhere in instruction HTML
                            const hasImgInAnyBlock = instructionBlocks.some(b => b.content && b.content.includes("<img"));
                            if (!hasImgInAnyBlock) {
                                issues.push(`S${sNum}: Instructions mention map/plan/diagram but no image found in blocks`);
                            }
                        }
                    }
                }
            }

            // All 40 questions present?
            const sortedQ = [...allQuestionNumbers].sort((a, b) => a - b);
            const missingQ = [];
            for (let i = 1; i <= 40; i++) {
                if (!sortedQ.includes(i)) missingQ.push(i);
            }
            if (missingQ.length > 0) {
                issues.push(`Missing question numbers: ${missingQ.join(", ")}`);
            }

            // Duplicates
            const dups = allQuestionNumbers.filter((n, i) => allQuestionNumbers.indexOf(n) !== i);
            if (dups.length > 0) {
                issues.push(`Duplicate question numbers: ${[...new Set(dups)].join(", ")}`);
            }

            if (totalActualQuestions !== 40) {
                issues.push(`Total actual questions = ${totalActualQuestions}, expected 40`);
            }

            console.log(`\n  ISSUES: ${issues.length}`);
            if (issues.length === 0) {
                console.log("  [OK] No issues");
            } else {
                issues.forEach((iss, idx) => console.log(`  [!] ${idx + 1}. ${iss}`));
            }

            allIssues.push({ testNumber: testNum, title: test.title, issues });
        }

        // SUMMARY
        console.log(`\n\n${"=".repeat(60)}`);
        console.log("  FINAL SUMMARY");
        console.log(`${"=".repeat(60)}\n`);

        let totalIssueCount = 0;
        for (const item of allIssues) {
            const s = item.issues.length === 0 ? "OK" : `${item.issues.length} ISSUES`;
            console.log(`Test ${String(item.testNumber).padStart(2,"0")}: ${s} — ${item.title}`);
            if (item.issues.length > 0) {
                item.issues.forEach(i => console.log(`       [!] ${i}`));
            }
            totalIssueCount += item.issues.length;
        }

        console.log(`\nGRAND TOTAL ISSUES: ${totalIssueCount}`);

        // === ANSWER KEY DUMP ===
        console.log(`\n\n${"=".repeat(60)}`);
        console.log("  COMPLETE ANSWER KEY (ALL TESTS)");
        console.log(`${"=".repeat(60)}\n`);

        for (const test of tests) {
            console.log(`\n--- Test ${String(test.testNumber).padStart(2,"0")}: ${test.title} ---`);
            const answers = [];
            if (test.sections) {
                for (const sec of test.sections) {
                    const qs = (sec.questions || []).filter(b => b.blockType === "question");
                    for (const q of qs) {
                        answers.push({ n: q.questionNumber, a: q.correctAnswer || "???", t: q.questionType || "?" });
                    }
                }
            }
            answers.sort((a, b) => a.n - b.n);
            for (const a of answers) {
                console.log(`  Q${String(a.n).padStart(2," ")}: ${a.a}  [${a.t}]`);
            }
        }

        await mongoose.disconnect();
        console.log("\nDone.");
    } catch (error) {
        console.error("Fatal:", error);
        process.exit(1);
    }
}

deepAudit();

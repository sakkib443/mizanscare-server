import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

/**
 * Listening Mock Test 23 — built from "Test 3.docx" in the New Test batch,
 * answers from "Mock_3_Listening_Answer_Variants.docx" (heading says "Mock 1";
 * the filename is the reliable one). This key numbers 1–40 straight through,
 * with no grouped multi-letter entries.
 *
 * The paper has no SECTION markers, so the standard IELTS split is used:
 * Q1–10 flat hunting, Q11–20 British Library, Q21–30 Dave's project,
 * Q31–40 bilingualism lecture — which matches the content of each block.
 */

const BASE = "https://t1pnvk64oo9dus92mnoew4x2.169.58.25.54.sslip.io";
const AUDIO = `${BASE}/uploads/audio/mock-23.mp3`;
const LIBRARY_PLAN = `${BASE}/uploads/images/test23-part2-library-plan.png`;

const listeningTestData = {
    testId: "LISTENING_023",
    testNumber: 23,
    title: "Listening Mock Test 23 – Academic",
    description: "IELTS Academic Listening Test 23 — 4 parts, 40 questions.",
    source: "Test 03",
    mainAudioUrl: AUDIO,
    audioDuration: 1800,
    testType: "academic" as const,
    difficulty: "medium" as const,
    totalQuestions: 40,
    totalMarks: 40,
    duration: 40,
    isActive: true,
    usageCount: 0,
    sections: [
        // ═══ PART 1 (Q1–10) — Two friends looking for a flat ═══
        {
            sectionNumber: 1,
            title: "Part 1",
            context: "Two friends discuss flats they might rent together.",
            instructions: "Questions 1–10",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 1–3</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "instruction" as const,
                    content: "<div style='opacity:0.75;font-style:italic'><em>Example:</em> Martin wants to — <strong>B</strong> rent a flat.</div>",
                },
                {
                    blockType: "question" as const, questionNumber: 1,
                    questionType: "multiple-choice" as const,
                    questionText: "What is Martin’s occupation?",
                    options: [
                        "A. He works in a car factory.",
                        "B. He works in a bank.",
                        "C. He is a college student.",
                    ],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 2,
                    questionType: "multiple-choice" as const,
                    questionText: "The friends would prefer somewhere with",
                    options: ["A. four bedrooms.", "B. three bedrooms.", "C. two bathrooms."],
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 3,
                    questionType: "multiple-choice" as const,
                    questionText: "Phil would rather live in",
                    options: ["A. the east suburbs.", "B. the city centre.", "C. the west suburbs."],
                    correctAnswer: "C", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 4–10</strong><br/>Complete the table below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.",
                },
                { blockType: "instruction" as const, content: "<strong>Details of flats available</strong>" },
                {
                    // Three columns only, so the plain full-width table is enough.
                    blockType: "instruction" as const,
                    content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr>
<th style='padding:8px;background:#f3f4f6'>Location</th>
<th style='padding:8px;background:#f3f4f6'>Features</th>
<th style='padding:8px;background:#f3f4f6'>Good (✓) and bad (✗) points</th>
</tr></thead>
<tbody>
<tr>
<td style='padding:8px'>Bridge Street, near the <strong>[4]</strong></td>
<td style='padding:8px'>• 3 bedrooms<br/>• very big living room</td>
<td style='padding:8px'>✗ £<strong>[5]</strong> a month<br/>✓ transport links<br/>✗ no shower<br/>✗ could be <strong>[6]</strong></td>
</tr>
<tr>
<td style='padding:8px'><strong>[7]</strong></td>
<td style='padding:8px'>• 4 bedrooms<br/>• living room<br/>• <strong>[8]</strong></td>
<td style='padding:8px'>✓ <strong>[9]</strong> and well equipped<br/>✓ shower<br/>✓ will be <strong>[10]</strong><br/>✗ £800 a month</td>
</tr>
</tbody></table>`,
                },
                {
                    blockType: "question" as const, questionNumber: 4,
                    questionType: "table-completion" as const,
                    questionText: "~Bridge Street – near the ________",
                    correctAnswer: "bus station",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 5,
                    questionType: "table-completion" as const,
                    questionText: "~Bridge Street – £________ a month",
                    correctAnswer: "450",
                    acceptableAnswers: ["£450", "450 pounds"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 6,
                    questionType: "table-completion" as const,
                    questionText: "~Bridge Street – could be ________",
                    correctAnswer: "noisy",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 7,
                    questionType: "table-completion" as const,
                    questionText: "~Second flat – location: ________",
                    correctAnswer: "Hills Avenue",
                    acceptableAnswers: ["Hill Avenue", "Hills Ave"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 8,
                    questionType: "table-completion" as const,
                    questionText: "~Second flat – features: ________",
                    correctAnswer: "dining room",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 9,
                    questionType: "table-completion" as const,
                    questionText: "~Second flat – ________ and well equipped",
                    correctAnswer: "modern",
                    acceptableAnswers: ["very modern"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 10,
                    questionType: "table-completion" as const,
                    questionText: "~Second flat – will be ________",
                    correctAnswer: "quiet",
                    marks: 1, wordLimit: 3,
                },
            ],
        },

        // ═══ PART 2 (Q11–20) — The British Library ═══
        {
            sectionNumber: 2,
            title: "Part 2",
            context: "A guided introduction to the British Library.",
            instructions: "Questions 11–20",
            audioUrl: "",
            imageUrl: LIBRARY_PLAN,
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 11–15</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.",
                },
                { blockType: "instruction" as const, content: "<strong>The British Library</strong>" },
                {
                    blockType: "question" as const, questionNumber: 11,
                    questionType: "sentence-completion" as const,
                    questionText: "The reading rooms are only open for group visits on ________.",
                    correctAnswer: "Sundays",
                    acceptableAnswers: ["Sunday"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 12,
                    questionType: "sentence-completion" as const,
                    questionText: "The library was officially opened in ________.",
                    correctAnswer: "1998",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 13,
                    questionType: "sentence-completion" as const,
                    questionText: "All the library rooms together cover ________ m².",
                    correctAnswer: "100,000",
                    acceptableAnswers: ["100000", "one hundred thousand", "a hundred thousand"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 14,
                    questionType: "sentence-completion" as const,
                    questionText: "The library is financed by the ________.",
                    correctAnswer: "government",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 15,
                    questionType: "sentence-completion" as const,
                    questionText: "The main function of the library is to provide resources for people doing ________.",
                    correctAnswer: "research",
                    marks: 1, wordLimit: 3,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 16–20</strong><br/>Label the plan below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.",
                },
                // No options array on these: the guide says an empty options list
                // makes page.jsx render a text input instead of a dropdown, which
                // is what "write no more than three words" asks for.
                {
                    blockType: "question" as const, questionNumber: 16,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 16 (Piazza, right-hand side)",
                    correctAnswer: "Conference Centre",
                    acceptableAnswers: ["Conference Center", "conference centre", "the Conference Centre"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 17,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 17 (Lower Ground Floor, near the Meeting Point)",
                    correctAnswer: "Information Desk",
                    acceptableAnswers: ["information desk", "the Information Desk", "Information"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 18,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 18 (Lower Ground Floor, left-hand side)",
                    correctAnswer: "bookshop",
                    acceptableAnswers: ["book shop", "the bookshop"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 19,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 19 (Upper Ground Floor, the Tower)",
                    correctAnswer: "King’s Library",
                    acceptableAnswers: ["Kings Library", "King Library", "King's Library", "the King's Library"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 20,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 20 (Upper Ground Floor, left-hand side)",
                    correctAnswer: "stamp display",
                    acceptableAnswers: ["stamps display", "the stamp display", "stamp exhibition"],
                    marks: 1, wordLimit: 3,
                },
            ],
        },

        // ═══ PART 3 (Q21–30) — Dave's project ═══
        {
            sectionNumber: 3,
            title: "Part 3",
            context: "Dave discusses his research project with Dr Green.",
            instructions: "Questions 21–30",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 21–25</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 21,
                    questionType: "multiple-choice" as const,
                    questionText: "The main aim of Dave’s project is to",
                    options: ["A. describe a policy.", "B. investigate an assumption.", "C. identify a problem."],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 22,
                    questionType: "multiple-choice" as const,
                    questionText: "Dave’s project is based on schemes in",
                    options: ["A. schools.", "B. colleges.", "C. universities."],
                    correctAnswer: "C", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 23,
                    questionType: "multiple-choice" as const,
                    questionText: "How many academic organisations returned Dave’s questionnaire?",
                    options: ["A. 15", "B. 50", "C. 150"],
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 24,
                    questionType: "multiple-choice" as const,
                    questionText: "Dave wanted his questionnaires to be completed by company",
                    options: ["A. Human Resources Managers.", "B. Line Managers.", "C. owners."],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 25,
                    questionType: "multiple-choice" as const,
                    questionText: "Dr Green wants Dave to provide a full list of",
                    options: ["A. respondents.", "B. appendices.", "C. companies."],
                    correctAnswer: "A", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 26–30</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.",
                },
                { blockType: "instruction" as const, content: "<strong>Notes on project</strong>" },
                { blockType: "instruction" as const, content: "<strong>Introduction</strong>" },
                {
                    blockType: "question" as const, questionNumber: 26,
                    questionType: "note-completion" as const,
                    questionText: "improve the ________ of ideas",
                    correctAnswer: "organization",
                    acceptableAnswers: ["organisation"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 27,
                    questionType: "note-completion" as const,
                    questionText: "include a ________ of ‘Work Placement’",
                    correctAnswer: "definition",
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 28,
                    questionType: "note-completion" as const,
                    questionText: "have separate sections for literature survey and research ________ and methods",
                    correctAnswer: "aims",
                    acceptableAnswers: ["aim"],
                    marks: 1, wordLimit: 2,
                },
                { blockType: "instruction" as const, content: "<strong>Findings</strong>" },
                {
                    blockType: "instruction" as const,
                    content: "<ul><li>Preparation stage – add summary</li></ul>",
                },
                {
                    blockType: "question" as const, questionNumber: 29,
                    questionType: "note-completion" as const,
                    questionText: "________ development – good",
                    correctAnswer: "Key Skills",
                    acceptableAnswers: ["key skill", "keyskills"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 30,
                    questionType: "note-completion" as const,
                    questionText: "Constraints on learning – provide better links to the ________ from research",
                    correctAnswer: "evidence",
                    marks: 1, wordLimit: 2,
                },
            ],
        },

        // ═══ PART 4 (Q31–40) — Bilingualism ═══
        {
            sectionNumber: 4,
            title: "Part 4",
            context: "A lecture on bilingualism and Dr Bialystok’s experiments.",
            instructions: "Questions 31–40",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 31–35</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.",
                },
                {
                    blockType: "question" as const, questionNumber: 31,
                    questionType: "sentence-completion" as const,
                    questionText: "Bilingualism can be defined as having an equal level of communicative ________ in two or more languages.",
                    correctAnswer: "proficiency",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 32,
                    questionType: "sentence-completion" as const,
                    questionText: "Early research suggested that bilingualism caused problems with ________ and mental development.",
                    correctAnswer: "learning",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 33,
                    questionType: "sentence-completion" as const,
                    questionText: "Early research into bilingualism is now rejected because it did not consider the ________ backgrounds of the children.",
                    correctAnswer: "social and economic",
                    acceptableAnswers: ["social economic", "economic and social", "socio-economic", "socioeconomic"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 34,
                    questionType: "sentence-completion" as const,
                    questionText: "It is now thought that there is a ________ relationship between bilingualism and cognitive skills in children.",
                    correctAnswer: "positive",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 35,
                    questionType: "sentence-completion" as const,
                    questionText: "Research done by Ellen Bialystok in Canada now suggests that the effects of bilingualism also apply to ________.",
                    correctAnswer: "adults",
                    acceptableAnswers: ["adult"],
                    marks: 1, wordLimit: 3,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 36–40</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 36,
                    questionType: "multiple-choice" as const,
                    questionText: "In Dr Bialystok’s experiment, the subjects had to react according to",
                    options: [
                        "A. the colour of the square on the screen.",
                        "B. the location of the square on the screen.",
                        "C. the location of the shift key on the keyboard.",
                    ],
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 37,
                    questionType: "multiple-choice" as const,
                    questionText: "The experiment demonstrated the ‘Simon effect’ because it involved a conflict between",
                    options: [
                        "A. seeing something and reacting to it.",
                        "B. producing fast and slow reactions.",
                        "C. demonstrating awareness of shape and colour.",
                    ],
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 38,
                    questionType: "multiple-choice" as const,
                    questionText: "The experiment shows that, compared with the monolingual subjects, the bilingual subjects",
                    options: [
                        "A. were more intelligent.",
                        "B. had faster reaction times overall.",
                        "C. had more problems with the ‘Simon effect’.",
                    ],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 39,
                    questionType: "multiple-choice" as const,
                    questionText: "The results of the experiment indicate that bilingual people may be better at",
                    options: [
                        "A. doing different types of tasks at the same time.",
                        "B. thinking about several things at once.",
                        "C. focusing only on what is needed to do a task.",
                    ],
                    correctAnswer: "C", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 40,
                    questionType: "multiple-choice" as const,
                    questionText: "Dr Bialystok’s first and second experiments both suggest that bilingualism may",
                    options: [
                        "A. slow down the effects of old age on the brain.",
                        "B. lead to mental confusion among old people.",
                        "C. help old people to stay in better physical condition.",
                    ],
                    correctAnswer: "A", marks: 1,
                },
            ],
        },
    ],
};

async function seedListeningTest23() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ListeningTest.findOne({ testNumber: 23 });
        if (existing) {
            console.log("Listening Test 23 already exists. Updating...");
            await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, {
                runValidators: false,
            });
            console.log("✅ Listening Test 23 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await ListeningTest.create({ ...listeningTestData, createdBy });
            console.log("✅ Listening Test 23 created!");
        }

        const test = await ListeningTest.findOne({ testNumber: 23 });
        if (test) {
            console.log(`\n📝 Test: ${test.title}`);
            (test.sections as any[]).forEach((s, i) => {
                const qs = s.questions.filter((q: any) => q.blockType === "question");
                console.log(`  Part ${i + 1}: ${qs.length} questions`);
            });
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
}

seedListeningTest23();

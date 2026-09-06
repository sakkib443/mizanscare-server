import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

/**
 * Listening Mock Test 25 — built from "Test 5.docx" in the New Test batch,
 * answers from "Mock_5_Listening_Answer_Variants.docx" (heading says "Mock 3";
 * the filename is the reliable one). This key runs 1–40 with one entry per
 * question, including the letters of the two multi-answer groups.
 *
 * The listening part of this paper carries no images.
 */

const BASE = "https://t1pnvk64oo9dus92mnoew4x2.169.58.25.54.sslip.io";
const AUDIO = `${BASE}/uploads/audio/mock-25.mp3`;

const TAKE_OPTIONS = [
    "A. raincoat",
    "B. spare tire",
    "C. maps",
    "D. water bottle",
    "E. camera",
    "F. guide book",
];
const TAKE_TEXT = "Which THREE things should the caller take on the tour?";

const CLUB_LETTERS = ["A", "B", "C", "D", "E", "F"];

const INTERN_OPTIONS = [
    "A. art conservation",
    "B. administrative duties",
    "C. guide tours",
    "D. attend board meetings",
    "E. give classes",
    "F. research",
    "G. write brochures",
    "H. plan a reception",
    "I. meet artists",
];
const INTERN_TEXT = "What FIVE things will the students do during their museum internship?";

const listeningTestData = {
    testId: "LISTENING_025",
    testNumber: 25,
    title: "Listening Mock Test 25 – Academic",
    description: "IELTS Academic Listening Test 25 — 4 parts, 40 questions.",
    source: "Test 05",
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
        // ═══ PART 1 (Q1–10) — Booking a cycling tour ═══
        {
            sectionNumber: 1,
            title: "Part 1",
            context: "A caller books a place on the River Valley cycling tour.",
            instructions: "Questions 1–10",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 1–4</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN ONE WORD AND/OR A NUMBER</strong> for each answer.",
                },
                {
                    blockType: "instruction" as const,
                    content: `<div class='ielts-form-box'>
<div class='ielts-form-title'>Tour Booking</div>
<div class='ielts-form-row' style='opacity:0.75;font-style:italic'>Tour name: River Valley tour <em>(Example)</em></div>
<div class='ielts-form-row'>Tour month: <strong>[1]</strong></div>
<div class='ielts-form-row'>Customer name: <strong>[2]</strong> Schmidt</div>
<div class='ielts-form-row'>Address: P.O. Box <strong>[3]</strong>, Manchester</div>
<div class='ielts-form-row'>Bicycle rental required? Yes ☐ &nbsp; No ☒</div>
<div class='ielts-form-row'>Dietary restrictions: <strong>[4]</strong></div>
</div>`,
                },
                {
                    blockType: "question" as const, questionNumber: 1,
                    questionType: "form-completion" as const,
                    questionText: "Tour month: ________",
                    correctAnswer: "June",
                    marks: 1, wordLimit: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 2,
                    questionType: "form-completion" as const,
                    questionText: "Customer name: ________ Schmidt",
                    correctAnswer: "Karla",
                    acceptableAnswers: ["Carla"],
                    marks: 1, wordLimit: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 3,
                    questionType: "form-completion" as const,
                    questionText: "Address: P.O. Box ________, Manchester",
                    correctAnswer: "257",
                    marks: 1, wordLimit: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 4,
                    questionType: "form-completion" as const,
                    questionText: "Dietary restrictions: ________",
                    correctAnswer: "vegetarian",
                    marks: 1, wordLimit: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 5–7</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 5,
                    questionType: "multiple-choice" as const,
                    questionText: "What size deposit does the caller have to pay?",
                    options: ["A. 5 percent", "B. 30 percent", "C. 50 percent"],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 6,
                    questionType: "multiple-choice" as const,
                    questionText: "When does the deposit have to be paid?",
                    options: ["A. Two weeks from now", "B. Four weeks from now", "C. Six weeks from now"],
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 7,
                    questionType: "multiple-choice" as const,
                    questionText: "How will the luggage be carried?",
                    options: ["A. By bus", "B. By bicycle", "C. By van"],
                    correctAnswer: "C", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 8–10</strong><br/>Choose <strong>THREE</strong> letters, <strong>A–F</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 8,
                    questionType: "multiple-choice-multi" as const,
                    questionText: TAKE_TEXT, options: TAKE_OPTIONS,
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 9,
                    questionType: "multiple-choice-multi" as const,
                    questionText: TAKE_TEXT, options: TAKE_OPTIONS,
                    correctAnswer: "D", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 10,
                    questionType: "multiple-choice-multi" as const,
                    questionText: TAKE_TEXT, options: TAKE_OPTIONS,
                    correctAnswer: "E", marks: 1,
                },
            ],
        },

        // ═══ PART 2 (Q11–20) — Hartford Health Club ═══
        {
            sectionNumber: 2,
            title: "Part 2",
            context: "An announcement about renovations and events at a health club.",
            instructions: "Questions 11–20",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 11–15</strong><br/>What change has been made to each part of the health club?<br/>Choose the correct letter, <strong>A–F</strong>, for each answer.",
                },
                {
                    // Letter-only options, so the list of changes has to be written
                    // out here — page.jsx only auto-renders a box for text options.
                    blockType: "instruction" as const,
                    content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db;max-width:340px'>
<div style='text-align:center;font-weight:bold;margin-bottom:8px'>HARTFORD HEALTH CLUB</div>
<div><strong>A</strong> &nbsp; installed a new floor</div>
<div><strong>B</strong> &nbsp; repainted</div>
<div><strong>C</strong> &nbsp; moved to a new location</div>
<div><strong>D</strong> &nbsp; rebuilt</div>
<div><strong>E</strong> &nbsp; enlarged</div>
<div><strong>F</strong> &nbsp; replaced the equipment</div>
</div>`,
                },
                {
                    blockType: "question" as const, questionNumber: 11,
                    questionType: "matching" as const,
                    questionText: "swimming pools",
                    options: CLUB_LETTERS, correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 12,
                    questionType: "matching" as const,
                    questionText: "locker rooms",
                    options: CLUB_LETTERS, correctAnswer: "E", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 13,
                    questionType: "matching" as const,
                    questionText: "exercise room",
                    options: CLUB_LETTERS, correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 14,
                    questionType: "matching" as const,
                    questionText: "tennis court",
                    options: CLUB_LETTERS, correctAnswer: "F", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 15,
                    questionType: "matching" as const,
                    questionText: "club store",
                    options: CLUB_LETTERS, correctAnswer: "C", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 16–18</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.",
                },
                {
                    blockType: "question" as const, questionNumber: 16,
                    questionType: "sentence-completion" as const,
                    questionText: "Tomorrow, Manchester ________ for adults and children will start.",
                    correctAnswer: "swimming lessons",
                    acceptableAnswers: ["swimming lesson", "swim lessons"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 17,
                    questionType: "sentence-completion" as const,
                    questionText: "On Wednesday, there will be a ________.",
                    correctAnswer: "tennis competition",
                    acceptableAnswers: ["tennis competitions", "tennis tournament"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 18,
                    questionType: "sentence-completion" as const,
                    questionText: "At the end of the month there will be a ________.",
                    correctAnswer: "party",
                    acceptableAnswers: ["club party", "parties"],
                    marks: 1, wordLimit: 2,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 19 and 20</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 19,
                    questionType: "multiple-choice" as const,
                    questionText: "How many months did it take to complete the renovation work?",
                    options: ["A. Three", "B. Nine", "C. Twelve"],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 20,
                    questionType: "multiple-choice" as const,
                    questionText: "What project is planned for next year?",
                    options: ["A. An indoor pool", "B. An outdoor tennis court", "C. An outdoor pool"],
                    correctAnswer: "C", marks: 1,
                },
            ],
        },

        // ═══ PART 3 (Q21–30) — Museum internship ═══
        {
            sectionNumber: 3,
            title: "Part 3",
            context: "Students discuss an internship at the City Art Museum.",
            instructions: "Questions 21–30",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 21–25</strong><br/>Choose <strong>FIVE</strong> letters, <strong>A–I</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 21,
                    questionType: "multiple-choice-multi" as const,
                    questionText: INTERN_TEXT, options: INTERN_OPTIONS,
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 22,
                    questionType: "multiple-choice-multi" as const,
                    questionText: INTERN_TEXT, options: INTERN_OPTIONS,
                    correctAnswer: "C", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 23,
                    questionType: "multiple-choice-multi" as const,
                    questionText: INTERN_TEXT, options: INTERN_OPTIONS,
                    correctAnswer: "F", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 24,
                    questionType: "multiple-choice-multi" as const,
                    questionText: INTERN_TEXT, options: INTERN_OPTIONS,
                    correctAnswer: "G", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 25,
                    questionType: "multiple-choice-multi" as const,
                    questionText: INTERN_TEXT, options: INTERN_OPTIONS,
                    correctAnswer: "I", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 26–30</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.",
                },
                { blockType: "instruction" as const, content: "<strong>City Art Museum</strong>" },
                {
                    blockType: "question" as const, questionNumber: 26,
                    questionType: "note-completion" as const,
                    questionText: "Construction of the main museum happened in ________.",
                    correctAnswer: "1895",
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 27,
                    questionType: "note-completion" as const,
                    questionText: "Construction of the ________ happened sixty years later.",
                    correctAnswer: "new wing",
                    acceptableAnswers: ["new wings"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 28,
                    questionType: "note-completion" as const,
                    questionText: "Collections: modern art, works by ________, sculpture, European art.",
                    correctAnswer: "local artists",
                    acceptableAnswers: ["local artist"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 29,
                    questionType: "note-completion" as const,
                    questionText: "Classes: ________ classes for adults; arts and crafts workshops for children.",
                    correctAnswer: "art history",
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 30,
                    questionType: "note-completion" as const,
                    questionText: "Weekly ________ in the fall and winter.",
                    correctAnswer: "concerts",
                    acceptableAnswers: ["concert", "concert series"],
                    marks: 1, wordLimit: 2,
                },
            ],
        },

        // ═══ PART 4 (Q31–40) — History of the tomato ═══
        {
            sectionNumber: 4,
            title: "Part 4",
            context: "A lecture on the history of the tomato.",
            instructions: "Questions 31–40",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 31–35</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 31,
                    questionType: "multiple-choice" as const,
                    questionText: "The tomato originally came from",
                    options: ["A. Mexico.", "B. Spain.", "C. Peru."],
                    correctAnswer: "C", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 32,
                    questionType: "multiple-choice" as const,
                    questionText: "The original colour of the tomato was",
                    options: ["A. red.", "B. green.", "C. yellow."],
                    correctAnswer: "C", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 33,
                    questionType: "multiple-choice" as const,
                    questionText: "The Aztec word for tomato means",
                    options: ["A. golden apple.", "B. plump thing.", "C. small fruit."],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 34,
                    questionType: "multiple-choice" as const,
                    questionText: "In the 1500s, people in Spain and Italy",
                    options: [
                        "A. enjoyed eating tomatoes.",
                        "B. used tomatoes as ornamental plants.",
                        "C. made medicine from tomatoes.",
                    ],
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 35,
                    questionType: "multiple-choice" as const,
                    questionText: "In the 1600s, the British",
                    options: [
                        "A. saw tomatoes as poisonous.",
                        "B. published tomato recipes.",
                        "C. ate tomato sauce daily.",
                    ],
                    correctAnswer: "A", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 36–40</strong><br/>Complete the timeline with information about the history of the tomato in the United States.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.",
                },
                {
                    // Two columns, so the plain table styling is enough here.
                    blockType: "instruction" as const,
                    content: `<table border='1' style='border-collapse:collapse;width:100%'>
<tbody>
<tr><td style='padding:8px;width:18%'><strong>1806</strong></td><td style='padding:8px'>Tomatoes were mentioned as food in <strong>[36]</strong></td></tr>
<tr><td style='padding:8px'><strong>1809</strong></td><td style='padding:8px'>Thomas Jefferson <strong>[37]</strong> at his home in Virginia.</td></tr>
<tr><td style='padding:8px'><strong>1820</strong></td><td style='padding:8px'>A man proved that tomatoes were not poisonous by eating them <strong>[38]</strong></td></tr>
<tr><td style='padding:8px'><strong>1830s</strong></td><td style='padding:8px'><strong>[39]</strong> appeared in newspapers and magazines.</td></tr>
<tr><td style='padding:8px'><strong>1930s</strong></td><td style='padding:8px'>People began to eat <strong>[40]</strong></td></tr>
</tbody></table>`,
                },
                {
                    blockType: "question" as const, questionNumber: 36,
                    questionType: "table-completion" as const,
                    questionText: "~1806 – Tomatoes were mentioned as food in ________",
                    correctAnswer: "a calendar",
                    acceptableAnswers: ["calendar", "a gardener's calendar", "gardener's calendar", "a gardeners calendar"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 37,
                    questionType: "table-completion" as const,
                    questionText: "~1809 – Thomas Jefferson ________ at his home in Virginia.",
                    correctAnswer: "served tomatoes",
                    acceptableAnswers: ["served tomato"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 38,
                    questionType: "table-completion" as const,
                    questionText: "~1820 – A man proved tomatoes were not poisonous by eating them ________",
                    correctAnswer: "in public",
                    acceptableAnswers: ["publicly"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 39,
                    questionType: "table-completion" as const,
                    questionText: "~1830s – ________ appeared in newspapers and magazines.",
                    correctAnswer: "tomato recipes",
                    acceptableAnswers: ["recipes", "tomato recipe"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 40,
                    questionType: "table-completion" as const,
                    questionText: "~1930s – People began to eat ________",
                    correctAnswer: "raw tomatoes",
                    acceptableAnswers: ["raw tomato"],
                    marks: 1, wordLimit: 2,
                },
            ],
        },
    ],
};

async function seedListeningTest25() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ListeningTest.findOne({ testNumber: 25 });
        if (existing) {
            console.log("Listening Test 25 already exists. Updating...");
            await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, {
                runValidators: false,
            });
            console.log("✅ Listening Test 25 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await ListeningTest.create({ ...listeningTestData, createdBy });
            console.log("✅ Listening Test 25 created!");
        }

        const test = await ListeningTest.findOne({ testNumber: 25 });
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

seedListeningTest25();

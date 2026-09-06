import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

/**
 * Listening Mock Test 22 — built from "Test 2.docx" in the New Test batch,
 * answers from "Mock_2_Listening_Answer_Variants.docx" (its heading says
 * "Mock 4"; the filename is the reliable one).
 *
 * READING THAT ANSWER KEY: entry 21 is "B, D, F (in any order)" and covers the
 * three-letter question Q21–23, so every entry after it sits two numbers below
 * the question it answers (key 26 "March" is Q28, key 38 "A" is Q40). Checked
 * against the question wording all the way down — all 40 answers are present.
 */

const BASE = "https://t1pnvk64oo9dus92mnoew4x2.169.58.25.54.sslip.io";
const AUDIO = `${BASE}/uploads/audio/mock-22.mp3`;
const PLAN_IMAGE = `${BASE}/uploads/images/test22-part2-plan.jpeg`;

const PLAN_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

const listeningTestData = {
    testId: "LISTENING_022",
    testNumber: 22,
    title: "Listening Mock Test 22 – Academic",
    description: "IELTS Academic Listening Test 22 — 4 parts, 40 questions.",
    source: "Test 02",
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
        // ═══ PART 1 (Q1–10) — Theatre booking form ═══
        {
            sectionNumber: 1,
            title: "Part 1",
            context: "A telephone booking for tickets at the Theatre Royal Plymouth.",
            instructions: "Questions 1–10",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 1–10</strong><br/>Complete the form below.<br/>Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.",
                },
                {
                    blockType: "instruction" as const,
                    content: `<div class='ielts-form-box'>
<div class='ielts-form-title'>THEATRE ROYAL PLYMOUTH Booking Form</div>
<div class='ielts-form-row' style='opacity:0.75;font-style:italic'>Performance: The Impostor <em>(Example)</em></div>
<div class='ielts-form-row'>Date: Saturday <strong>[1]</strong></div>
<div class='ielts-form-row'>Time: <strong>[2]</strong></div>
<div class='ielts-form-row'>Tickets: three adults and one child</div>
<div class='ielts-form-row'>Seats in: the <strong>[3]</strong></div>
<div class='ielts-form-row'>Seat row/number(s): <strong>[4]</strong></div>
<div class='ielts-form-row'>Method of delivery: Post</div>
<div class='ielts-form-row'>Total payment: £39</div>
<div style='font-weight:700;margin:8px 0 6px'>Card details</div>
<div class='ielts-form-row'>Type: <strong>[5]</strong></div>
<div class='ielts-form-row'>Number: <strong>[6]</strong></div>
<div class='ielts-form-row'>Name: Mr <strong>[7]</strong></div>
<div class='ielts-form-row'>Address: <strong>[8]</strong> Street, London</div>
<div class='ielts-form-row'>Postcode: <strong>[9]</strong></div>
<div class='ielts-form-row'>Additional requests: Put on the mailing list, book <strong>[10]</strong></div>
</div>`,
                },

                {
                    blockType: "question" as const, questionNumber: 1,
                    questionType: "form-completion" as const,
                    questionText: "Date: Saturday ________",
                    correctAnswer: "26th",
                    acceptableAnswers: ["the 26th", "26"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 2,
                    questionType: "form-completion" as const,
                    questionText: "Time: ________",
                    correctAnswer: "7.00",
                    acceptableAnswers: ["7", "7:00", "7 pm", "7.00 pm", "7:00 pm", "7.00pm"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 3,
                    questionType: "form-completion" as const,
                    questionText: "Seats in: the ________",
                    correctAnswer: "circle",
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 4,
                    questionType: "form-completion" as const,
                    questionText: "Seat row/number(s): ________",
                    correctAnswer: "A21-A24",
                    acceptableAnswers: ["A21 to A24", "A21 - A24", "A21–A24", "21-24"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 5,
                    questionType: "form-completion" as const,
                    questionText: "Card type: ________",
                    correctAnswer: "Mastercard",
                    acceptableAnswers: ["Master card", "Master-card"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 6,
                    questionType: "form-completion" as const,
                    questionText: "Card number: ________",
                    correctAnswer: "3290 5876 4401 2899",
                    acceptableAnswers: ["3290587644012899", "3290-5876-4401-2899"],
                    marks: 1, wordLimit: 4,
                },
                {
                    blockType: "question" as const, questionNumber: 7,
                    questionType: "form-completion" as const,
                    questionText: "Name: Mr ________",
                    correctAnswer: "Whitton",
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 8,
                    questionType: "form-completion" as const,
                    questionText: "Address: ________ Street, London",
                    correctAnswer: "42 South",
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 9,
                    questionType: "form-completion" as const,
                    questionText: "Postcode: ________",
                    correctAnswer: "SW2 5GE",
                    acceptableAnswers: ["SW25GE"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 10,
                    questionType: "form-completion" as const,
                    questionText: "Additional requests: put on the mailing list, book ________",
                    correctAnswer: "headphones",
                    acceptableAnswers: ["earphones", "headphone", "earphone"],
                    marks: 1, wordLimit: 2,
                },
            ],
        },

        // ═══ PART 2 (Q11–20) — Rock festival site plan + short answers ═══
        {
            sectionNumber: 2,
            title: "Part 2",
            context: "A talk describing the layout and rules of a rock festival site.",
            instructions: "Questions 11–20",
            audioUrl: "",
            imageUrl: PLAN_IMAGE,
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 11–17</strong><br/>Label the plan of the rock festival site below.<br/>Choose <strong>SEVEN</strong> answers from the box and select the correct letter, <strong>A–I</strong>.",
                },
                {
                    // Letter-only options, so the box has to be written out here —
                    // page.jsx only auto-renders a box when the options carry text.
                    blockType: "instruction" as const,
                    content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db;max-width:340px'>
<div><strong>A</strong> &nbsp; art exhibition</div>
<div><strong>B</strong> &nbsp; band entrance</div>
<div><strong>C</strong> &nbsp; car park</div>
<div><strong>D</strong> &nbsp; craft fair</div>
<div><strong>E</strong> &nbsp; exhibitions’ entrance</div>
<div><strong>F</strong> &nbsp; fringe stage</div>
<div><strong>G</strong> &nbsp; lock-up garages</div>
<div><strong>H</strong> &nbsp; main stage</div>
<div><strong>I</strong> &nbsp; restaurant</div>
</div>`,
                },
                {
                    blockType: "question" as const, questionNumber: 11,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 11",
                    options: PLAN_LETTERS, correctAnswer: "D", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 12,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 12",
                    options: PLAN_LETTERS, correctAnswer: "F", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 13,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 13",
                    options: PLAN_LETTERS, correctAnswer: "I", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 14,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 14",
                    options: PLAN_LETTERS, correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 15,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 15",
                    options: PLAN_LETTERS, correctAnswer: "E", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 16,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 16",
                    options: PLAN_LETTERS, correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 17,
                    questionType: "plan-labeling" as const,
                    questionText: "Label 17",
                    options: PLAN_LETTERS, correctAnswer: "G", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 18–20</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.",
                },
                {
                    blockType: "question" as const, questionNumber: 18,
                    questionType: "sentence-completion" as const,
                    questionText: "To show you are an official visitor, you have to wear the ________ provided.",
                    correctAnswer: "arm band",
                    acceptableAnswers: ["armband", "arm-band", "arm bands", "armbands"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 19,
                    questionType: "sentence-completion" as const,
                    questionText: "Cars blocking paths could prevent access by ________ in an emergency.",
                    correctAnswer: "an ambulance",
                    acceptableAnswers: ["ambulance", "ambulances"],
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 20,
                    questionType: "sentence-completion" as const,
                    questionText: "To reclaim items from storage, you must show your ________.",
                    correctAnswer: "yellow ticket",
                    acceptableAnswers: ["yellow tickets"],
                    marks: 1, wordLimit: 2,
                },
            ],
        },

        // ═══ PART 3 (Q21–30) — Marco and his tutor ═══
        {
            sectionNumber: 3,
            title: "Part 3",
            context: "A student, Marco, discusses course choices and a dissertation with his tutor.",
            instructions: "Questions 21–30",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 21–23</strong><br/>Choose <strong>THREE</strong> letters, <strong>A–G</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 21,
                    questionType: "multiple-choice-multi" as const,
                    questionText: "Which THREE factors does Marco’s tutor advise him to consider when selecting a course?",
                    options: [
                        "A. possibility of specialisation",
                        "B. relevance to future career",
                        "C. personal interest",
                        "D. organization of course",
                        "E. assessment methods",
                        "F. range of topics",
                        "G. reputation of lecturer",
                    ],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 22,
                    questionType: "multiple-choice-multi" as const,
                    questionText: "Which THREE factors does Marco’s tutor advise him to consider when selecting a course?",
                    options: [
                        "A. possibility of specialisation",
                        "B. relevance to future career",
                        "C. personal interest",
                        "D. organization of course",
                        "E. assessment methods",
                        "F. range of topics",
                        "G. reputation of lecturer",
                    ],
                    correctAnswer: "D", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 23,
                    questionType: "multiple-choice-multi" as const,
                    questionText: "Which THREE factors does Marco’s tutor advise him to consider when selecting a course?",
                    options: [
                        "A. possibility of specialisation",
                        "B. relevance to future career",
                        "C. personal interest",
                        "D. organization of course",
                        "E. assessment methods",
                        "F. range of topics",
                        "G. reputation of lecturer",
                    ],
                    correctAnswer: "F", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 24–27</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 24,
                    questionType: "multiple-choice" as const,
                    questionText: "Why does Marco’s tutor advise him to avoid the Team Management course?",
                    options: [
                        "A. It will repeat work that Marco has already done.",
                        "B. It is intended for students at a lower level than Marco.",
                        "C. It may take too much time to do well.",
                    ],
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 25,
                    questionType: "multiple-choice" as const,
                    questionText: "Why does Marco want to do a dissertation?",
                    options: [
                        "A. He thinks it will help his future career.",
                        "B. He would like to do a detailed study.",
                        "C. He has already done some work for it.",
                    ],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 26,
                    questionType: "multiple-choice" as const,
                    questionText: "What does Marco’s tutor think about the dissertation outline?",
                    options: [
                        "A. The topic is too narrow to be useful.",
                        "B. The available data may be unsuitable.",
                        "C. The research plan is too complicated.",
                    ],
                    correctAnswer: "C", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 27,
                    questionType: "multiple-choice" as const,
                    questionText: "What does Marco decide to do about his dissertation?",
                    options: [
                        "A. Contact potential interviewees.",
                        "B. Change to another topic.",
                        "C. Discuss it with Professor Briggs.",
                    ],
                    correctAnswer: "A", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 28–30</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.",
                },
                { blockType: "instruction" as const, content: "<strong>Practical details</strong>" },
                {
                    blockType: "question" as const, questionNumber: 28,
                    questionType: "sentence-completion" as const,
                    questionText: "A first draft of the dissertation should be completed by the end of ________.",
                    correctAnswer: "March",
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 29,
                    questionType: "sentence-completion" as const,
                    questionText: "The dissertation should be registered with the ________ of the department.",
                    correctAnswer: "secretary",
                    marks: 1, wordLimit: 2,
                },
                {
                    blockType: "question" as const, questionNumber: 30,
                    questionType: "sentence-completion" as const,
                    questionText: "Marco should get a copy of the statistic software from the ________.",
                    correctAnswer: "computer office",
                    acceptableAnswers: ["computer offices"],
                    marks: 1, wordLimit: 2,
                },
            ],
        },

        // ═══ PART 4 (Q31–40) — The tiger shark ═══
        {
            sectionNumber: 4,
            title: "Part 4",
            context: "A lecture on the tiger shark and a shark-tagging study.",
            instructions: "Questions 31–40",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 31–33</strong><br/>Complete the notes below.<br/>Write <strong>ONE WORD ONLY</strong> for each answer.",
                },
                { blockType: "instruction" as const, content: "<strong>The Tiger Shark</strong>" },
                {
                    blockType: "instruction" as const,
                    content: "<ul><li>Origin of name: its dark bands</li><li>Size: 6.5 metres (maximum)</li></ul>",
                },
                {
                    blockType: "question" as const, questionNumber: 31,
                    questionType: "note-completion" as const,
                    questionText: "Preferred habitat: near to the ________",
                    correctAnswer: "coasts",
                    acceptableAnswers: ["coast", "shore", "shores"],
                    marks: 1, wordLimit: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 32,
                    questionType: "note-completion" as const,
                    questionText: "Typical food: other sea creatures but also ________ produced by humans",
                    correctAnswer: "garbage",
                    acceptableAnswers: ["rubbish", "waste"],
                    marks: 1, wordLimit: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 33,
                    questionType: "note-completion" as const,
                    questionText: "Paine Island area: studies show tiger sharks are mainly found here during the ________ (when turtles are nesting)",
                    correctAnswer: "summer",
                    marks: 1, wordLimit: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 34–38</strong><br/>Complete the notes below.<br/>Write <strong>ONE WORD ONLY</strong> for each answer.",
                },
                { blockType: "instruction" as const, content: "<strong>Shark Tagging Process</strong>" },
                {
                    blockType: "question" as const, questionNumber: 34,
                    questionType: "note-completion" as const,
                    questionText: "Pieces of ________ were attached to lines as bait.",
                    correctAnswer: "fish",
                    marks: 1, wordLimit: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 35,
                    questionType: "note-completion" as const,
                    questionText: "The lines were ________ regularly.",
                    correctAnswer: "checked",
                    marks: 1, wordLimit: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 36,
                    questionType: "note-completion" as const,
                    questionText: "The hooked shark was brought to the ________ and secured.",
                    correctAnswer: "boat",
                    marks: 1, wordLimit: 1,
                },
                {
                    blockType: "instruction" as const,
                    content: "<ul><li>The shark was measured and tagged, and tissue removed for research.</li></ul>",
                },
                {
                    blockType: "question" as const, questionNumber: 37,
                    questionType: "note-completion" as const,
                    questionText: "Large sharks: an acoustic tag was fitted or a ________ was attached.",
                    correctAnswer: "camera",
                    marks: 1, wordLimit: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 38,
                    questionType: "note-completion" as const,
                    questionText: "The shark was ________ and could be tracked.",
                    correctAnswer: "released",
                    acceptableAnswers: ["freed"],
                    marks: 1, wordLimit: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 39 and 40</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 39,
                    questionType: "multiple-choice" as const,
                    questionText: "The purpose of the research was to understand the tiger sharks’",
                    options: [
                        "A. reproductive patterns.",
                        "B. migration patterns.",
                        "C. feeding patterns.",
                    ],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 40,
                    questionType: "multiple-choice" as const,
                    questionText: "Observations showed that, in general, tiger sharks",
                    options: [
                        "A. change depths frequently.",
                        "B. usually avoid the surface of the water.",
                        "C. often spend long periods on the ocean floor.",
                    ],
                    correctAnswer: "A", marks: 1,
                },
            ],
        },
    ],
};

async function seedListeningTest22() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ListeningTest.findOne({ testNumber: 22 });
        if (existing) {
            console.log("Listening Test 22 already exists. Updating...");
            await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, {
                runValidators: false,
            });
            console.log("✅ Listening Test 22 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await ListeningTest.create({ ...listeningTestData, createdBy });
            console.log("✅ Listening Test 22 created!");
        }

        const test = await ListeningTest.findOne({ testNumber: 22 });
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

seedListeningTest22();

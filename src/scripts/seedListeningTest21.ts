import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

/**
 * Listening Mock Test 21 — built from "Test 01.docx" in the New Test batch,
 * with answers from "Mock_1_Listening_Answer_Variants.docx".
 *
 * NOTE ON THE ANSWER FILE: its internal heading reads "Mock 2", but the answers
 * match Test 01 question for question (Mitchell / Education / 994578ED against
 * the Conference Registration Form). The filename is right and the heading is
 * wrong — the same is true of all five files in that batch.
 *
 * testNumber 21 because 1 and 5 already hold the older "Partial Test" listening
 * papers, which are unrelated content.
 */

const AUDIO = "https://t1pnvk64oo9dus92mnoew4x2.169.58.25.54.sslip.io/uploads/audio/mock-21.mp3";

const listeningTestData = {
    testId: "LISTENING_021",
    testNumber: 21,
    title: "Listening Mock Test 21 – Academic",
    description: "IELTS Academic Listening Test 21 — 4 parts, 40 questions.",
    source: "Test 01",
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
        // ═══ PART 1 (Q1–10) — Conference Registration Form ═══
        {
            sectionNumber: 1,
            title: "Part 1",
            context: "A student registering for an education conference.",
            instructions: "Questions 1–10",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 1–4</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN THREE WORDS or A NUMBER</strong> for each answer.",
                },
                {
                    blockType: "instruction" as const,
                    content: `<div class='ielts-form-box'>
<div class='ielts-form-title'>Conference Registration Form</div>
<div class='ielts-form-row' style='opacity:0.75;font-style:italic'>Name of Conference: Beyond 2000 <em>(Example)</em></div>
<div class='ielts-form-row'>Name: Melanie <strong>[1]</strong> Ms.</div>
<div class='ielts-form-row'>Address: <strong>[2]</strong>, Newtown</div>
<div class='ielts-form-row'>Faculty: <strong>[3]</strong></div>
<div class='ielts-form-row'>Student No: <strong>[4]</strong></div>
</div>`,
                },

                // Grading blocks for the form above (the inputs render from [N]).
                {
                    blockType: "question" as const,
                    questionNumber: 1,
                    questionType: "form-completion" as const,
                    questionText: "Name: Melanie ________ Ms.",
                    correctAnswer: "Mitchell",
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 2,
                    questionType: "form-completion" as const,
                    questionText: "Address: ________ , Newtown",
                    correctAnswer: "66, Women's College",
                    acceptableAnswers: [
                        "66 Women's College",
                        "66, Womens College",
                        "66 Womens College",
                        "Room 66, Women's College",
                        "Room 66 Women's College",
                        "66 at Women's College",
                        "66 at Womens College",
                    ],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 3,
                    questionType: "form-completion" as const,
                    questionText: "Faculty: ________",
                    correctAnswer: "Education",
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 4,
                    questionType: "form-completion" as const,
                    questionText: "Student No: ________",
                    correctAnswer: "994578ED",
                    marks: 1,
                    wordLimit: 3,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 5–10</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const,
                    questionNumber: 5,
                    questionType: "multiple-choice" as const,
                    questionText: "Registration for:",
                    options: ["A. Half day", "B. Full day", "C. Full conference"],
                    correctAnswer: "C",
                    marks: 1,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 6,
                    questionType: "multiple-choice" as const,
                    questionText: "Accommodation required:",
                    options: [
                        "A. Share room/share bathroom",
                        "B. Own room/share bathroom",
                        "C. Own room with bathroom",
                    ],
                    correctAnswer: "B",
                    marks: 1,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 7,
                    questionType: "multiple-choice" as const,
                    questionText: "Meals required:",
                    options: ["A. Breakfast", "B. Lunch", "C. Dinner"],
                    correctAnswer: "B",
                    marks: 1,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 8,
                    questionType: "multiple-choice" as const,
                    questionText: "Friday SIGs:",
                    options: [
                        "A. Computers in Education",
                        "B. Teaching Reading",
                        "C. The Gifted Child",
                    ],
                    correctAnswer: "A",
                    marks: 1,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 9,
                    questionType: "multiple-choice" as const,
                    questionText: "Saturday SIGs:",
                    options: [
                        "A. Cultural Differences",
                        "B. Music in the Curriculum",
                        "C. Gender Issues",
                    ],
                    correctAnswer: "C",
                    marks: 1,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 10,
                    questionType: "multiple-choice" as const,
                    questionText: "Method of payment:",
                    options: ["A. Credit Card", "B. Cheque", "C. Cash"],
                    correctAnswer: "A",
                    marks: 1,
                },
            ],
        },

        // ═══ PART 2 (Q11–20) — Beaches table ═══
        {
            sectionNumber: 2,
            title: "Part 2",
            context: "A talk describing the beaches of an island.",
            instructions: "Questions 11–20",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 11–20</strong><br/>Complete the table below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.",
                },
                {
                    // Four columns, so the Wide Table Rule applies: fixed layout,
                    // colgroup percentages, 13px, break-word, 6px padding.
                    blockType: "instruction" as const,
                    content: `<table border='1' style='border-collapse:collapse;width:100%;table-layout:fixed;font-size:13px'>
<colgroup><col style='width:18%'/><col style='width:26%'/><col style='width:29%'/><col style='width:27%'/></colgroup>
<thead><tr>
<th style='padding:6px;background:#f3f4f6;word-wrap:break-word'>Name of Beach</th>
<th style='padding:6px;background:#f3f4f6;word-wrap:break-word'>Location</th>
<th style='padding:6px;background:#f3f4f6;word-wrap:break-word'>Geographical Features</th>
<th style='padding:6px;background:#f3f4f6;word-wrap:break-word'>Other information</th>
</tr></thead>
<tbody>
<tr>
<td style='padding:6px;word-wrap:break-word'>Bandela</td>
<td style='padding:6px;word-wrap:break-word'>1 km from Bandela <strong>[11]</strong></td>
<td style='padding:6px;word-wrap:break-word'>surrounded by <strong>[12]</strong></td>
<td style='padding:6px;word-wrap:break-word'>safe for children / non-swimmers</td>
</tr>
<tr>
<td style='padding:6px;word-wrap:break-word'>Da Porlata</td>
<td style='padding:6px;word-wrap:break-word'>east corner of island</td>
<td style='padding:6px;word-wrap:break-word'>area around beach is <strong>[13]</strong></td>
<td style='padding:6px;word-wrap:break-word'>can hire <strong>[14]</strong></td>
</tr>
<tr>
<td style='padding:6px;word-wrap:break-word'>San Gett</td>
<td style='padding:6px;word-wrap:break-word'>just past ‘Tip of Caln’</td>
<td style='padding:6px;word-wrap:break-word'><strong>[15]</strong> beach on island</td>
<td style='padding:6px;word-wrap:break-word'>check <strong>[16]</strong> on beach in rough weather</td>
</tr>
<tr>
<td style='padding:6px;word-wrap:break-word'>Blanaka</td>
<td style='padding:6px;word-wrap:break-word'><strong>[17]</strong> corner</td>
<td style='padding:6px;word-wrap:break-word'>surrounded by <strong>[18]</strong></td>
<td style='padding:6px;word-wrap:break-word'>can go caving and diving</td>
</tr>
<tr>
<td style='padding:6px;word-wrap:break-word'>Dissidor</td>
<td style='padding:6px;word-wrap:break-word'>close to Blanaka</td>
<td style='padding:6px;word-wrap:break-word'>need to walk over <strong>[19]</strong></td>
<td style='padding:6px;word-wrap:break-word'>need to take some <strong>[20]</strong></td>
</tr>
</tbody></table>`,
                },

                {
                    blockType: "question" as const,
                    questionNumber: 11,
                    questionType: "table-completion" as const,
                    questionText: "~Bandela – location: 1 km from Bandela ________",
                    correctAnswer: "fishing village",
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 12,
                    questionType: "table-completion" as const,
                    questionText: "~Bandela – surrounded by ________",
                    correctAnswer: "pine trees",
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 13,
                    questionType: "table-completion" as const,
                    questionText: "~Da Porlata – area around beach is ________",
                    correctAnswer: "marshland",
                    acceptableAnswers: ["marsh", "marshes", "marshlands"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 14,
                    questionType: "table-completion" as const,
                    questionText: "~Da Porlata – can hire ________",
                    correctAnswer: "sunbeds and umbrellas",
                    acceptableAnswers: ["sunbeds umbrellas", "sun beds and umbrellas"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 15,
                    questionType: "table-completion" as const,
                    questionText: "~San Gett – ________ beach on island",
                    correctAnswer: "longest",
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 16,
                    questionType: "table-completion" as const,
                    questionText: "~San Gett – check ________ on beach in rough weather",
                    correctAnswer: "flag system",
                    acceptableAnswers: ["flags", "flag"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 17,
                    questionType: "table-completion" as const,
                    questionText: "~Blanaka – ________ corner",
                    correctAnswer: "north-west",
                    acceptableAnswers: ["northwest", "north west", "nw"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 18,
                    questionType: "table-completion" as const,
                    questionText: "~Blanaka – surrounded by ________",
                    correctAnswer: "white cliffs",
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 19,
                    questionType: "table-completion" as const,
                    questionText: "~Dissidor – need to walk over ________",
                    correctAnswer: "sand-banks",
                    acceptableAnswers: ["sandbanks", "sand banks", "sandbank", "sand-bank"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 20,
                    questionType: "table-completion" as const,
                    questionText: "~Dissidor – need to take some ________",
                    correctAnswer: "food and drink",
                    acceptableAnswers: ["food drink", "food and drinks"],
                    marks: 1,
                    wordLimit: 3,
                },
            ],
        },

        // ═══ PART 3 (Q21–30) — Bookshops / publishers notes ═══
        {
            sectionNumber: 3,
            title: "Part 3",
            context: "A discussion about how bookshops and publishers handle course books.",
            instructions: "Questions 21–30",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 21–30</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS or A NUMBER</strong> for each answer.",
                },
                { blockType: "instruction" as const, content: "<strong>Procedure for Bookshops</strong>" },
                {
                    blockType: "instruction" as const,
                    content: "<ul><li>Keep database of course/college details.</li></ul>",
                },
                {
                    blockType: "question" as const,
                    questionNumber: 21,
                    questionType: "note-completion" as const,
                    questionText: "In May, request ________ from lecturers.",
                    correctAnswer: "course booklists",
                    acceptableAnswers: ["booklists", "book lists", "reading list", "reading lists", "course book lists"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "instruction" as const,
                    content: "<ul><li>Categorise books as – essential reading</li></ul>",
                },
                {
                    blockType: "question" as const,
                    questionNumber: 22,
                    questionType: "note-completion" as const,
                    // No leading dash: NoteCompletionRow renders the bullet itself,
                    // and the source has no dash on this line either.
                    questionText: "________ reading",
                    correctAnswer: "recommended",
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "instruction" as const,
                    content: "<ul><li>– background reading</li></ul>",
                },
                {
                    blockType: "question" as const,
                    questionNumber: 23,
                    questionType: "note-completion" as const,
                    questionText: "When ordering, refer to last year’s ________.",
                    correctAnswer: "sales figures",
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "instruction" as const,
                    content: "<ul><li>– type of course</li></ul>",
                },
                {
                    blockType: "question" as const,
                    questionNumber: 24,
                    questionType: "note-completion" as const,
                    questionText: "students’ ________",
                    correctAnswer: "year group",
                    acceptableAnswers: ["year", "year groups"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "instruction" as const,
                    content: "<ul><li>– own judgement</li></ul>",
                },

                { blockType: "instruction" as const, content: "<strong>Procedure for Publishers</strong>" },
                {
                    blockType: "question" as const,
                    questionNumber: 25,
                    questionType: "note-completion" as const,
                    questionText: "Send ________ to course providers",
                    correctAnswer: "catalogues",
                    acceptableAnswers: ["catalogs", "catalogue", "catalog"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "instruction" as const,
                    content: "<ul><li>Use websites</li></ul>",
                },
                {
                    blockType: "question" as const,
                    questionNumber: 26,
                    questionType: "note-completion" as const,
                    questionText: "Compose personal ________ to academic staff",
                    correctAnswer: "letters",
                    acceptableAnswers: ["correspondence", "letter"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 27,
                    questionType: "note-completion" as const,
                    questionText: "Send ________ to bookstores",
                    correctAnswer: "inspection copies",
                    acceptableAnswers: ["inspection", "free copies", "inspection copy", "free copy"],
                    marks: 1,
                    wordLimit: 3,
                },

                { blockType: "instruction" as const, content: "<strong>Students</strong>" },
                {
                    blockType: "question" as const,
                    questionNumber: 28,
                    questionType: "note-completion" as const,
                    questionText: "Main objective is to find books that are good ________.",
                    correctAnswer: "value for money",
                    acceptableAnswers: ["value", "good value"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 29,
                    questionType: "note-completion" as const,
                    questionText: "Also look for books that are ________",
                    // Q29 and Q30 are a pair in either order, so each accepts both.
                    correctAnswer: "clear",
                    acceptableAnswers: ["easy to use"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 30,
                    questionType: "note-completion" as const,
                    questionText: "and ________.",
                    correctAnswer: "easy to use",
                    acceptableAnswers: ["clear"],
                    marks: 1,
                    wordLimit: 3,
                },
            ],
        },

        // ═══ PART 4 (Q31–40) — Rebecca's talk on illustration ═══
        {
            sectionNumber: 4,
            title: "Part 4",
            context: "Rebecca, an illustrator, talks to new graduates about building a portfolio.",
            instructions: "Questions 31–40",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Question 31</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const,
                    questionNumber: 31,
                    questionType: "multiple-choice" as const,
                    questionText: "At the start of her talk Rebecca points out that new graduates can find it hard to",
                    options: [
                        "A. get the right work.",
                        "B. take sufficient breaks.",
                        "C. motivate themselves.",
                    ],
                    correctAnswer: "C",
                    marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 32–33</strong><br/>Choose <strong>TWO</strong> letters, <strong>A–E</strong>.",
                },
                {
                    blockType: "question" as const,
                    questionNumber: 32,
                    questionType: "multiple-choice-multi" as const,
                    questionText: "Which TWO of the following does Rebecca say worry new artists?",
                    options: [
                        "A. earning enough money",
                        "B. moving to a new environment",
                        "C. competing with other artists",
                        "D. having their work criticised",
                        "E. getting their portfolios ready",
                    ],
                    correctAnswer: "A",
                    marks: 1,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 33,
                    questionType: "multiple-choice-multi" as const,
                    questionText: "Which TWO of the following does Rebecca say worry new artists?",
                    options: [
                        "A. earning enough money",
                        "B. moving to a new environment",
                        "C. competing with other artists",
                        "D. having their work criticised",
                        "E. getting their portfolios ready",
                    ],
                    correctAnswer: "D",
                    marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 34–35</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const,
                    questionNumber: 34,
                    questionType: "multiple-choice" as const,
                    questionText: "Rebecca decided to become an illustrator because it",
                    options: [
                        "A. afforded her greater objectivity as an artist.",
                        "B. offered her greater freedom of expression.",
                        "C. allowed her to get her work published.",
                    ],
                    correctAnswer: "A",
                    marks: 1,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 35,
                    questionType: "multiple-choice" as const,
                    questionText: "When she had developed a portfolio of illustrations, Rebecca found publishers",
                    options: [
                        "A. more receptive to her work.",
                        "B. equally cautious about her work.",
                        "C. uninterested in her work.",
                    ],
                    correctAnswer: "B",
                    marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 36–40</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS and/or A NUMBER</strong> for each answer.",
                },
                {
                    blockType: "instruction" as const,
                    content: "<strong>Suggestions for Developing a Portfolio</strong>",
                },
                {
                    blockType: "question" as const,
                    questionNumber: 36,
                    questionType: "note-completion" as const,
                    questionText: "Get some artwork printed in magazines by entering ________.",
                    correctAnswer: "competitions",
                    acceptableAnswers: ["competition", "a competition"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 37,
                    questionType: "note-completion" as const,
                    questionText: "Also you can ________ mock up book pages.",
                    correctAnswer: "design and print",
                    acceptableAnswers: ["design print", "design, print"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 38,
                    questionType: "note-completion" as const,
                    questionText: "Make an effort to use a variety of artistic ________.",
                    correctAnswer: "styles",
                    acceptableAnswers: ["techniques", "style", "technique"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 39,
                    questionType: "note-completion" as const,
                    questionText: "Aim for recognition by dividing work into distinct ________.",
                    correctAnswer: "categories",
                    acceptableAnswers: ["category"],
                    marks: 1,
                    wordLimit: 3,
                },
                {
                    blockType: "question" as const,
                    questionNumber: 40,
                    questionType: "note-completion" as const,
                    questionText: "Possibly use ________.",
                    correctAnswer: "two names",
                    acceptableAnswers: ["two", "2 names", "2"],
                    marks: 1,
                    wordLimit: 3,
                },
            ],
        },
    ],
};

async function seedListeningTest21() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ListeningTest.findOne({ testNumber: 21 });
        if (existing) {
            console.log("Listening Test 21 already exists. Updating...");
            await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, {
                runValidators: false,
            });
            console.log("✅ Listening Test 21 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await ListeningTest.create({ ...listeningTestData, createdBy });
            console.log("✅ Listening Test 21 created!");
        }

        const test = await ListeningTest.findOne({ testNumber: 21 });
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

seedListeningTest21();

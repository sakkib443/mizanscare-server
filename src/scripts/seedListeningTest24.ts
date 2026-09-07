import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

/**
 * Listening Mock Test 24 — built from "Test 04.docx" in the New Test batch,
 * answers from "Mock_4_Listening_Answer_Variants.docx" (heading says "Mock 5";
 * the filename is the reliable one).
 *
 * READING THAT ANSWER KEY: it has 36 entries for 40 questions because three of
 * them are grouped multi-letter answers — 28 is "B, F, H" (Q28–30), 29 is
 * "A, D" (Q31–32) and 30 is "B, E" (Q33–34). After those, every entry sits four
 * numbers below its question, which the table at the end confirms exactly:
 * key 31 "12,000" is Q35's student total, key 36 "poor" is Q40's families.
 * Nothing is missing.
 *
 * Q22/Q23 needed a decision. The paper reads "'good' weather (weather which is
 * [22] and [23])", i.e. two adjectives, but the key gives 22 as the single
 * string "sunny and warm" and 23 as "change", which does not fit the sentence —
 * the two adjectives were clearly merged into entry 22. Settled as sunny and
 * warm, and "change" dropped so a wrong word cannot score. The key gives no
 * order, so either blank accepts either word and the sequence costs no marks.
 */

const BASE = "https://t1pnvk64oo9dus92mnoew4x2.169.58.25.54.sslip.io";
const AUDIO = `${BASE}/uploads/audio/mock-24.mp3`;

const PLACE_LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const WRITER_LETTERS = ["A", "B", "C", "D", "E", "F"];

const DECIDE_OPTIONS = [
    "A. how to analyse their results",
    "B. their methods of presentation",
    "C. the design of their questionnaire",
    "D. the location of their survey",
    "E. weather variables to be measured",
    "F. the dates of their survey",
    "G. the size of their survey",
    "H. the source of data on weather variables",
];
const DECIDE_TEXT = "Which THREE things do Phil and Stella still have to decide on?";

const CONCERN_OPTIONS = [
    "A. differences between rich and poor students",
    "B. high numbers dropping out of education",
    "C. falling standards of students",
    "D. poor results compared with other nationalities",
    "E. low scores of overseas students",
    "F. differences between rural and urban students",
];
const CONCERN_TEXT = "Which TWO of the following problems are causing concern to educational authorities in the USA?";

const ADVANTAGE_OPTIONS = [
    "A. more employment for teachers",
    "B. improvement in general health of the population",
    "C. reduction in number of days taken off sick by teachers",
    "D. better use of existing buildings and resources",
    "E. better level of education of workforce",
    "F. availability of better qualified teachers",
];
const ADVANTAGE_TEXT = "According to the speaker, what are two advantages of reducing class sizes?";

const listeningTestData = {
    testId: "LISTENING_024",
    testNumber: 24,
    title: "Listening Mock Test 24 – Academic",
    description: "IELTS Academic Listening Test 24 — 4 parts, 40 questions.",
    source: "Test 04",
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
        // ═══ PART 1 (Q1–10) — Council Youth Scheme funding form ═══
        {
            sectionNumber: 1,
            title: "Part 1",
            context: "An application for council funding for a youth theatre project.",
            instructions: "Questions 1–10",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 1–10</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.",
                },
                {
                    blockType: "instruction" as const,
                    content: `<div class='ielts-form-box'>
<div class='ielts-form-title'>Council Youth Scheme — Application for Funding for Group Project</div>
<div class='ielts-form-row' style='opacity:0.75;font-style:italic'>Name: Ralph Pearson <em>(Example)</em></div>
<div class='ielts-form-row'>Contact address: <strong>[1]</strong>, Drayton DR6 8AB</div>
<div class='ielts-form-row'>Telephone number: 01453 586098</div>
<div class='ielts-form-row'>Name of group: Community Youth Theatre Group</div>
<div class='ielts-form-row'>Description of group: amateur theatre group (<strong>[2]</strong> members), involved in drama <strong>[3]</strong></div>
<div class='ielts-form-row'>Amount of money requested: £<strong>[4]</strong></div>
<div class='ielts-form-row'>Description of project: to produce a short <strong>[5]</strong> play for young children</div>
<div style='font-weight:700;margin:8px 0 6px'>Money needed for</div>
<div class='ielts-form-row'>• <strong>[6]</strong> for scenery</div>
<div class='ielts-form-row'>• costumes</div>
<div class='ielts-form-row'>• cost of <strong>[7]</strong></div>
<div class='ielts-form-row'>• <strong>[8]</strong></div>
<div class='ielts-form-row'>• sundries</div>
<div class='ielts-form-row'>How source of funding will be credited: acknowledged in the <strong>[9]</strong> given to audience</div>
<div class='ielts-form-row'>Other organisations approached for funding (and outcome): National Youth Services — money was <strong>[10]</strong></div>
</div>`,
                },
                {
                    blockType: "question" as const, questionNumber: 1,
                    questionType: "form-completion" as const,
                    questionText: "Contact address: ________, Drayton DR6 8AB",
                    correctAnswer: "230 South Road",
                    acceptableAnswers: ["230 South Rd"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 2,
                    questionType: "form-completion" as const,
                    questionText: "amateur theatre group (________ members)",
                    correctAnswer: "18",
                    acceptableAnswers: ["eighteen"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 3,
                    questionType: "form-completion" as const,
                    questionText: "involved in drama ________",
                    correctAnswer: "activities and workshops",
                    acceptableAnswers: ["activities workshops", "activities & workshops", "activity and workshops"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 4,
                    questionType: "form-completion" as const,
                    questionText: "Amount of money requested: £________",
                    correctAnswer: "250",
                    acceptableAnswers: ["£250", "250 pounds"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 5,
                    questionType: "form-completion" as const,
                    questionText: "to produce a short ________ play for young children",
                    correctAnswer: "interactive",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 6,
                    questionType: "form-completion" as const,
                    questionText: "________ for scenery",
                    correctAnswer: "material",
                    acceptableAnswers: ["materials"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 7,
                    questionType: "form-completion" as const,
                    questionText: "cost of ________",
                    correctAnswer: "insurance",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 8,
                    questionType: "form-completion" as const,
                    questionText: "Money needed for: ________",
                    correctAnswer: "publicity",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 9,
                    questionType: "form-completion" as const,
                    questionText: "acknowledged in the ________ given to audience",
                    correctAnswer: "programme",
                    acceptableAnswers: ["program", "programmes", "programs"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 10,
                    questionType: "form-completion" as const,
                    questionText: "National Youth Services — money was ________",
                    correctAnswer: "not available",
                    acceptableAnswers: ["unavailable"],
                    marks: 1, wordLimit: 3,
                },
            ],
        },

        // ═══ PART 2 (Q11–20) — Darwin ═══
        {
            sectionNumber: 2,
            title: "Part 2",
            context: "Joanne describes life in and around Darwin, Australia.",
            instructions: "Questions 11–20",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 11–15</strong><br/>Choose the correct answer, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 11,
                    questionType: "multiple-choice" as const,
                    questionText: "Joanne says that visitors to Darwin are often surprised by",
                    options: [
                        "A. the number of young people.",
                        "B. the casual atmosphere.",
                        "C. the range of cultures.",
                    ],
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 12,
                    questionType: "multiple-choice" as const,
                    questionText: "To enjoy cultural activities, the people of Darwin tend to",
                    options: [
                        "A. travel to southern Australia.",
                        "B. bring in artists from other areas.",
                        "C. involve themselves in production.",
                    ],
                    correctAnswer: "C", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 13,
                    questionType: "multiple-choice" as const,
                    questionText: "The Chinese temple in Darwin",
                    options: [
                        "A. is no longer used for its original purpose.",
                        "B. was rebuilt after its destruction in a storm.",
                        "C. was demolished to make room for new buildings.",
                    ],
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 14,
                    questionType: "multiple-choice" as const,
                    questionText: "The main problem with travelling by bicycle is",
                    options: ["A. the climate.", "B. the traffic.", "C. the hills."],
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 15,
                    questionType: "multiple-choice" as const,
                    questionText: "What does Joanne say about swimming in the sea?",
                    options: [
                        "A. It is essential to wear a protective suit.",
                        "B. Swimming is only safe during the winter.",
                        "C. You should stay in certain restricted areas.",
                    ],
                    correctAnswer: "C", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 16–20</strong><br/>What can you find at each of the places below?<br/>Choose your answers from the box and select the correct letter, <strong>A–H</strong>.",
                },
                {
                    blockType: "instruction" as const,
                    content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db;max-width:380px'>
<div><strong>A</strong> &nbsp; a flower market</div>
<div><strong>B</strong> &nbsp; a chance to feed the fish</div>
<div><strong>C</strong> &nbsp; good nightlife</div>
<div><strong>D</strong> &nbsp; international arts and crafts</div>
<div><strong>E</strong> &nbsp; good cheap international food</div>
<div><strong>F</strong> &nbsp; a trip to catch fish</div>
<div><strong>G</strong> &nbsp; shops and seafood restaurants</div>
<div><strong>H</strong> &nbsp; a wide range of different plants</div>
</div>`,
                },
                {
                    blockType: "question" as const, questionNumber: 16,
                    questionType: "matching" as const,
                    questionText: "‘Aquascene’",
                    options: PLACE_LETTERS, correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 17,
                    questionType: "matching" as const,
                    questionText: "Smith Street Mall",
                    options: PLACE_LETTERS, correctAnswer: "E", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 18,
                    questionType: "matching" as const,
                    questionText: "Cullen Bay Marina",
                    options: PLACE_LETTERS, correctAnswer: "G", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 19,
                    questionType: "matching" as const,
                    questionText: "Fannie Bay",
                    options: PLACE_LETTERS, correctAnswer: "H", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 20,
                    questionType: "matching" as const,
                    questionText: "Mitchell Street",
                    options: PLACE_LETTERS, correctAnswer: "C", marks: 1,
                },
            ],
        },

        // ═══ PART 3 (Q21–30) — Phil and Stella's weather study ═══
        {
            sectionNumber: 3,
            title: "Part 3",
            context: "Two students plan a study on the effect of weather on mood.",
            instructions: "Questions 21–30",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 21–23</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer.",
                },
                { blockType: "instruction" as const, content: "<strong>Effects of weather on mood</strong>" },
                {
                    blockType: "question" as const, questionNumber: 21,
                    questionType: "sentence-completion" as const,
                    questionText: "Phil and Stella’s goal is to ________ the hypothesis that weather has an effect on a person’s mood.",
                    correctAnswer: "investigate",
                    acceptableAnswers: ["investigating", "test"],
                    marks: 1, wordLimit: 3,
                },
                {
                    // The key merged both adjectives into its entry 22 and left
                    // "change" at 23, which does not fit the sentence. Settled as
                    // sunny / warm. The key gives no order, so either blank accepts
                    // either word and no candidate is marked down for the sequence.
                    blockType: "question" as const, questionNumber: 22,
                    questionType: "sentence-completion" as const,
                    questionText: "They expect to find that ‘good’ weather (weather which is ________ and",
                    correctAnswer: "sunny",
                    acceptableAnswers: ["warm", "sunny and warm", "warm and sunny"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 23,
                    questionType: "sentence-completion" as const,
                    questionText: "________) has a positive effect on a person’s mood.",
                    correctAnswer: "warm",
                    acceptableAnswers: ["sunny", "sunny and warm", "warm and sunny"],
                    marks: 1, wordLimit: 3,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 24–27</strong><br/>What information was given by each writer?<br/>Choose your answers from the box and select the correct letter, <strong>A–F</strong>.",
                },
                {
                    blockType: "instruction" as const,
                    content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db;max-width:430px'>
<div style='text-align:center;font-weight:bold;margin-bottom:8px'>Information</div>
<div><strong>A</strong> &nbsp; the benefits of moving to a warmer environment</div>
<div><strong>B</strong> &nbsp; the type of weather with the worst effect on mood</div>
<div><strong>C</strong> &nbsp; how past events affect attitudes to weather</div>
<div><strong>D</strong> &nbsp; the important effect of stress on mood</div>
<div><strong>E</strong> &nbsp; the important effect of hours of sunshine on mood</div>
<div><strong>F</strong> &nbsp; psychological problems due to having to cope with bad weather</div>
</div>`,
                },
                {
                    blockType: "question" as const, questionNumber: 24,
                    questionType: "matching" as const,
                    questionText: "Vickers",
                    options: WRITER_LETTERS, correctAnswer: "F", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 25,
                    questionType: "matching" as const,
                    questionText: "Whitebourne",
                    options: WRITER_LETTERS, correctAnswer: "D", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 26,
                    questionType: "matching" as const,
                    questionText: "Haverton",
                    options: WRITER_LETTERS, correctAnswer: "C", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 27,
                    questionType: "matching" as const,
                    questionText: "Stanfield",
                    options: WRITER_LETTERS, correctAnswer: "B", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 28–30</strong><br/>Choose <strong>THREE</strong> letters, <strong>A–H</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 28,
                    questionType: "multiple-choice-multi" as const,
                    questionText: DECIDE_TEXT, options: DECIDE_OPTIONS,
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 29,
                    questionType: "multiple-choice-multi" as const,
                    questionText: DECIDE_TEXT, options: DECIDE_OPTIONS,
                    correctAnswer: "F", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 30,
                    questionType: "multiple-choice-multi" as const,
                    questionText: DECIDE_TEXT, options: DECIDE_OPTIONS,
                    correctAnswer: "H", marks: 1,
                },
            ],
        },

        // ═══ PART 4 (Q31–40) — Class size research in the USA ═══
        {
            sectionNumber: 4,
            title: "Part 4",
            context: "A lecture on class-size research in the United States.",
            instructions: "Questions 31–40",
            audioUrl: "",
            questions: [
                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 31 and 32</strong><br/>Choose <strong>TWO</strong> letters, <strong>A–F</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 31,
                    questionType: "multiple-choice-multi" as const,
                    questionText: CONCERN_TEXT, options: CONCERN_OPTIONS,
                    correctAnswer: "A", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 32,
                    questionType: "multiple-choice-multi" as const,
                    questionText: CONCERN_TEXT, options: CONCERN_OPTIONS,
                    correctAnswer: "D", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 33 and 34</strong><br/>Choose <strong>TWO</strong> letters, <strong>A–F</strong>.",
                },
                {
                    blockType: "question" as const, questionNumber: 33,
                    questionType: "multiple-choice-multi" as const,
                    questionText: ADVANTAGE_TEXT, options: ADVANTAGE_OPTIONS,
                    correctAnswer: "B", marks: 1,
                },
                {
                    blockType: "question" as const, questionNumber: 34,
                    questionType: "multiple-choice-multi" as const,
                    questionText: ADVANTAGE_TEXT, options: ADVANTAGE_OPTIONS,
                    correctAnswer: "E", marks: 1,
                },

                {
                    blockType: "instruction" as const,
                    content: "<strong>Questions 35–40</strong><br/>Complete the table below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.",
                },
                { blockType: "instruction" as const, content: "<strong>USA Research Projects into Class Size</strong>" },
                {
                    // Five columns: the Wide Table Rule applies — fixed layout,
                    // colgroup percentages, 13px type, break-word, 6px padding.
                    blockType: "instruction" as const,
                    content: `<table border='1' style='border-collapse:collapse;width:100%;table-layout:fixed;font-size:13px'>
<colgroup><col style='width:14%'/><col style='width:21%'/><col style='width:17%'/><col style='width:24%'/><col style='width:24%'/></colgroup>
<thead><tr>
<th style='padding:6px;background:#f3f4f6;word-wrap:break-word'>State</th>
<th style='padding:6px;background:#f3f4f6;word-wrap:break-word'>Schools involved</th>
<th style='padding:6px;background:#f3f4f6;word-wrap:break-word'>Number of students participating</th>
<th style='padding:6px;background:#f3f4f6;word-wrap:break-word'>Key findings</th>
<th style='padding:6px;background:#f3f4f6;word-wrap:break-word'>Problems</th>
</tr></thead>
<tbody>
<tr>
<td style='padding:6px;word-wrap:break-word'>Tennessee</td>
<td style='padding:6px;word-wrap:break-word'>about 70 schools</td>
<td style='padding:6px;word-wrap:break-word'>in total <strong>[35]</strong></td>
<td style='padding:6px;word-wrap:break-word'>significant benefit especially for <strong>[36]</strong> pupils</td>
<td style='padding:6px;word-wrap:break-word'>lack of agreement on implications of data</td>
</tr>
<tr>
<td style='padding:6px;word-wrap:break-word'>California</td>
<td style='padding:6px;word-wrap:break-word'><strong>[37]</strong> schools</td>
<td style='padding:6px;word-wrap:break-word'>1.8 million</td>
<td style='padding:6px;word-wrap:break-word'>very little benefit</td>
<td style='padding:6px;word-wrap:break-word'>– shortage of <strong>[38]</strong> especially in poorer areas<br/>– no proper method for <strong>[39]</strong> of project</td>
</tr>
<tr>
<td style='padding:6px;word-wrap:break-word'>Wisconsin</td>
<td style='padding:6px;word-wrap:break-word'>14 schools with pupils from <strong>[40]</strong> families</td>
<td style='padding:6px;word-wrap:break-word'>—</td>
<td style='padding:6px;word-wrap:break-word'>similar results to Tennessee project</td>
<td style='padding:6px;word-wrap:break-word'>—</td>
</tr>
</tbody></table>`,
                },
                {
                    blockType: "question" as const, questionNumber: 35,
                    questionType: "table-completion" as const,
                    questionText: "~Tennessee – students in total: ________",
                    correctAnswer: "12,000",
                    acceptableAnswers: ["12000", "twelve thousand"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 36,
                    questionType: "table-completion" as const,
                    questionText: "~Tennessee – significant benefit especially for ________ pupils",
                    correctAnswer: "minority",
                    acceptableAnswers: ["minorities"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 37,
                    questionType: "table-completion" as const,
                    questionText: "~California – ________ schools",
                    correctAnswer: "all",
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 38,
                    questionType: "table-completion" as const,
                    questionText: "~California – shortage of ________ especially in poorer areas",
                    correctAnswer: "teachers",
                    acceptableAnswers: ["teacher"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 39,
                    questionType: "table-completion" as const,
                    questionText: "~California – no proper method for ________ of project",
                    correctAnswer: "evaluation",
                    acceptableAnswers: ["the evaluation", "evaluating"],
                    marks: 1, wordLimit: 3,
                },
                {
                    blockType: "question" as const, questionNumber: 40,
                    questionType: "table-completion" as const,
                    questionText: "~Wisconsin – 14 schools with pupils from ________ families",
                    correctAnswer: "poor",
                    acceptableAnswers: ["poorer", "low income", "low-income"],
                    marks: 1, wordLimit: 3,
                },
            ],
        },
    ],
};

async function seedListeningTest24() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ListeningTest.findOne({ testNumber: 24 });
        if (existing) {
            console.log("Listening Test 24 already exists. Updating...");
            await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, {
                runValidators: false,
            });
            console.log("✅ Listening Test 24 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await ListeningTest.create({ ...listeningTestData, createdBy });
            console.log("✅ Listening Test 24 created!");
        }

        const test = await ListeningTest.findOne({ testNumber: 24 });
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

seedListeningTest24();

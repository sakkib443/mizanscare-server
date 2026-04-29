import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest11() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 11 });
    if (existing) {
      await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
      console.log("\u2705 Listening Test 11 updated!");
    } else {
      const db = mongoose.connection.db!;
      const adminUser = await db.collection("users").findOne({ role: "admin" });
      const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
      await ListeningTest.create({ ...listeningTestData, createdBy });
      console.log("\u2705 Listening Test 11 created!");
    }
    const test = await ListeningTest.findOne({ testNumber: 11 });
    if (test) {
      console.log(`\n\uD83D\uDCDD Test: ${test.title}`);
      (test.sections as any[]).forEach((s, i) => {
        const qs = s.questions.filter((q: any) => q.blockType === "question");
        console.log(`  Part ${i + 1}: ${qs.length} questions`);
      });
    }
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("\u274C Error:", error);
    process.exit(1);
  }
}

const listeningTestData = {
  testId: "LISTENING_011",
  testNumber: 11,
  title: "Listening Mock Test 11 \u2013 Academic",
  description: "IELTS Academic Listening Test 11 \u2014 4 parts, 40 questions.",
  source: "IELTS Practice Test",
  mainAudioUrl: "",
  audioDuration: 1800,
  difficulty: "medium" as const,
  totalQuestions: 40,
  totalMarks: 40,
  duration: 40,
  isActive: true,
  usageCount: 0,
  sections: [
    // ═══ PART 1 — Patient Record / Eye Test (Q1–10) ═══
    {
      sectionNumber: 1,
      title: "Part 1",
      context: "A patient visiting an optician for an eye test.",
      instructions: "Questions 1\u201310",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 1\u20136</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: `<div class='ielts-form-box'>
<div class='ielts-form-title'>PATIENT RECORD</div>
<div class='ielts-form-row'>Time of appointment: <strong>10:00 am</strong></div>
<div class='ielts-form-row'>Given names: Simon <strong>[1]</strong></div>
<div class='ielts-form-row'>Family name: Lee</div>
<div class='ielts-form-row'>Date of birth: <strong>[2]</strong> 1989</div>
<div class='ielts-form-row'>Address: <strong>[3]</strong> Adams Terrace, Wellington</div>
<div class='ielts-form-row'>Phone number: 0211558809</div>
<div class='ielts-form-row'>Name of insurance company: <strong>[4]</strong></div>
<div class='ielts-form-row'>Date of last eye test: <strong>[5]</strong></div>
<div class='ielts-form-row'>Patient\u2019s observations: Problems seeing <strong>[6]</strong></div>
</div>`
        },
        { blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const, questionText: "Given names: Simon ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const, questionText: "Date of birth: ________ 1989", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const, questionText: "Address: ________ Adams Terrace, Wellington", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const, questionText: "Name of insurance company: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const, questionText: "Date of last eye test: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const, questionText: "Patient\u2019s observations: Problems seeing ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },

        // Q7-10: Short answer
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 7\u201310</strong><br/>Answer the questions below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },
        { blockType: "question" as const, questionNumber: 7, questionType: "short-answer" as const, questionText: "When must Simon wear his glasses?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 8, questionType: "short-answer" as const, questionText: "What type of glasses are the least expensive?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 9, questionType: "short-answer" as const, questionText: "What is good about the glasses Simon chooses?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 10, questionType: "short-answer" as const, questionText: "How does Simon decide to pay?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      ]
    },

    // ═══ PART 2 — Taj Mahal (Q11–20) ═══
    {
      sectionNumber: 2,
      title: "Part 2",
      context: "A guided tour of the Taj Mahal complex.",
      instructions: "Questions 11\u201320",
      audioUrl: "",
      questions: [
        // Q11-12: MCQ
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 11\u201312</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },
        {
          blockType: "question" as const, questionNumber: 11, questionType: "multiple-choice" as const,
          questionText: "Who is buried in the tomb of the Taj Mahal?",
          options: ["A. the emperor Shahjahan", "B. the wife of Shahjahan", "C. the emperor and his wife"],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 12, questionType: "multiple-choice" as const,
          questionText: "Where did the white marble come from?",
          options: ["A. India", "B. China", "C. Persia"],
          correctAnswer: "TBD", marks: 1
        },

        // Q13-16: Plan labeling
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 13\u201316</strong><br/>Label the plan below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },
        { blockType: "question" as const, questionNumber: 13, questionType: "plan-labeling" as const, imageUrl: "/images/listening/test11-part2-plan.png", questionText: "", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 14, questionType: "plan-labeling" as const, questionText: "", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 15, questionType: "plan-labeling" as const, questionText: "", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 16, questionType: "plan-labeling" as const, questionText: "", correctAnswer: "TBD", marks: 1, wordLimit: 3 },

        // Q17: MCQ
        {
          blockType: "instruction" as const,
          content: "<strong>Question 17</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },
        {
          blockType: "question" as const, questionNumber: 17, questionType: "multiple-choice" as const,
          questionText: "What is the purpose of the Rest House?",
          options: ["A. a place for the poor to stay", "B. a meeting place for pilgrims", "C. an architectural feature"],
          correctAnswer: "TBD", marks: 1
        },

        // Q18-20: Flow chart
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 18\u201320</strong><br/>Complete the flow chart below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: `<div class='ielts-form-box' style='max-width:480px'>
<div class='ielts-form-title'>How running water is provided</div>
<div style='text-align:center;margin:8px 0'>Water taken from the <strong>[18]</strong> by bullocks.</div>
<div style='text-align:center;font-size:22px;line-height:1;margin:2px 0'>\u2193</div>
<div style='text-align:center;margin:8px 0'>Water <u>channelled</u> into the <strong>[19]</strong></div>
<div style='text-align:center;font-size:22px;line-height:1;margin:2px 0'>\u2193</div>
<div style='text-align:center;margin:8px 0'>Water piped to the <strong>[20]</strong></div>
</div>`
        },
        { blockType: "question" as const, questionNumber: 18, questionType: "flow-chart-completion" as const, questionText: "Water taken from the ________ by bullocks", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 19, questionType: "flow-chart-completion" as const, questionText: "Water channelled into the ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 20, questionType: "flow-chart-completion" as const, questionText: "Water piped to the ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      ]
    },

    // ═══ PART 3 — Rice Research (Q21–30) ═══
    {
      sectionNumber: 3,
      title: "Part 3",
      context: "A discussion about rice farming and research.",
      instructions: "Questions 21\u201330",
      audioUrl: "",
      questions: [
        // Q21-24: MCQ
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 21\u201324</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },
        {
          blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const,
          questionText: "What background information does Daisy give about rice?",
          options: ["A. Wild rice is grown throughout Asia", "B. Some types of rice need less water than others", "C. All rice varieties have a lovely aroma"],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const,
          questionText: "Erik says that a priority for rice farmers is to be able to",
          options: ["A. grow rice without fertilizers", "B. predict the weather patterns", "C. manage water resources"],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice" as const,
          questionText: "Where is the International Rice Research Institute?",
          options: ["A. The Philippines", "B. China", "C. Japan"],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 24, questionType: "multiple-choice" as const,
          questionText: "Scientists in Bangladesh want to find a",
          options: ["A. more effective type of fertilizer.", "B. strain of rice resistant to flooding.", "C. way to reduce the effects of global warming."],
          correctAnswer: "TBD", marks: 1
        },

        // Q25-30: Matching (countries)
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 25\u201330</strong><br/>Which country do the following statements apply to?<br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },
        { blockType: "question" as const, questionNumber: 25, questionType: "matching" as const, questionText: "They grow the most rice in the world.", options: ["A. Japan", "B. China", "C. Thailand"], correctAnswer: "TBD", marks: 1 },
        { blockType: "question" as const, questionNumber: 26, questionType: "matching" as const, questionText: "They export the most rice in the world.", options: ["A. Japan", "B. China", "C. Thailand"], correctAnswer: "TBD", marks: 1 },
        { blockType: "question" as const, questionNumber: 27, questionType: "matching" as const, questionText: "They aim to increase the nutritional value of rice.", options: ["A. Japan", "B. China", "C. Thailand"], correctAnswer: "TBD", marks: 1 },
        { blockType: "question" as const, questionNumber: 28, questionType: "matching" as const, questionText: "Less rice is eaten than in the past.", options: ["A. Japan", "B. China", "C. Thailand"], correctAnswer: "TBD", marks: 1 },
        { blockType: "question" as const, questionNumber: 29, questionType: "matching" as const, questionText: "An annual rice festival takes place.", options: ["A. Japan", "B. China", "C. Thailand"], correctAnswer: "TBD", marks: 1 },
        { blockType: "question" as const, questionNumber: 30, questionType: "matching" as const, questionText: "A new type of rice is now popular locally.", options: ["A. Japan", "B. China", "C. Thailand"], correctAnswer: "TBD", marks: 1 },
      ]
    },

    // ═══ PART 4 — Radio Writing (Q31–40) ═══
    {
      sectionNumber: 4,
      title: "Part 4",
      context: "A lecture about writing for radio.",
      instructions: "Questions 31\u201340",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 31\u201333</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN ONE WORD</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: `<div style='border:1px solid #374151;padding:12px'><strong>RADIO WRITING</strong><br/><br/>
You may have to ignore some of the ordinary <strong>[31]</strong> of writing.<br/><br/>
Written words do not indicate things like emphasis, the <strong>[32]</strong> of reading or where to pause.<br/><br/>
A script needs to sound like a <strong>[33]</strong>.</div>`
        },
        { blockType: "question" as const, questionNumber: 31, questionType: "sentence-completion" as const, questionText: "You may have to ignore some of the ordinary ________ of writing", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
        { blockType: "question" as const, questionNumber: 32, questionType: "sentence-completion" as const, questionText: "Written words do not indicate things like emphasis, the ________ of reading or where to pause", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
        { blockType: "question" as const, questionNumber: 33, questionType: "sentence-completion" as const, questionText: "A script needs to sound like a ________", correctAnswer: "TBD", marks: 1, wordLimit: 1 },

        {
          blockType: "instruction" as const,
          content: "<strong>Questions 34\u201340</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: `<div style='border:1px solid #374151;padding:12px'>
<div style='margin-bottom:12px'><strong>Know who you are talking to</strong></div>
<div style='margin-left:16px;margin-bottom:8px'>Imagine a typical listener:</div>
<div style='margin-left:32px;margin-bottom:12px'>e.g. imagine telling your <strong>[34]</strong> about a film.</div>
<div style='margin-left:16px;margin-bottom:8px'>Create an informal tone:</div>
<div style='margin-left:32px;margin-bottom:16px'>e.g. use words like <strong>[35]</strong></div>

<div style='margin-bottom:12px'><strong>Work out what you are going to say</strong></div>
<div style='margin-left:16px;margin-bottom:8px'>Remember:</div>
<div style='margin-left:32px'>- listeners cannot ask questions</div>
<div style='margin-left:32px;margin-bottom:12px'>- you cannot <strong>[36]</strong> ideas</div>
<div style='margin-left:16px;margin-bottom:8px'>Make your script logical:</div>
<div style='margin-left:32px;margin-bottom:16px'><strong>[37]</strong> the information.</div>

<div style='margin-bottom:12px'><strong>Use concrete images</strong></div>
<div style='margin-left:32px;margin-bottom:16px'>e.g. compare the size of a field to a <strong>[38]</strong></div>

<div style='margin-bottom:12px'>Use the <strong>[39]</strong> to get attention.</div>
<div>Check the script by <strong>[40]</strong></div>
</div>`
        },
        { blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const, questionText: "imagine telling your ________ about a film", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const, questionText: "use words like ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const, questionText: "you cannot ________ ideas", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const, questionText: "________ the information", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const, questionText: "compare the size of a field to a ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 39, questionType: "note-completion" as const, questionText: "Use the ________ to get attention", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 40, questionType: "note-completion" as const, questionText: "Check the script by ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      ]
    },
  ]
};

seedListeningTest11();

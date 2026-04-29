import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";
async function seed() {
  try {
    await mongoose.connect(config.database_url as string); console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 19 });
    if (existing) { await ListeningTest.findByIdAndUpdate(existing._id, data, { runValidators: false }); console.log("\u2705 Test 19 updated!"); }
    else { const db = mongoose.connection.db!; const admin = await db.collection("users").findOne({ role: "admin" }); await ListeningTest.create({ ...data, createdBy: admin?._id || new mongoose.Types.ObjectId() }); console.log("\u2705 Test 19 created!"); }
    const t = await ListeningTest.findOne({ testNumber: 19 });
    if (t) { console.log(`\n\uD83D\uDCDD ${t.title}`); (t.sections as any[]).forEach((s,i) => { const qs = s.questions.filter((q:any) => q.blockType==="question"); console.log(`  Part ${i+1}: ${qs.length} questions`); }); }
    await mongoose.disconnect(); process.exit(0);
  } catch (e) { console.error("\u274C",e); process.exit(1); }
}
const data = {
  testId: "LISTENING_019", testNumber: 19,
  title: "Listening Mock Test 19 \u2013 Academic", description: "IELTS Academic Listening Test 19 \u2014 4 parts, 40 questions.",
  source: "IELTS Practice Test", mainAudioUrl: "", audioDuration: 1800,
  difficulty: "medium" as const, totalQuestions: 40, totalMarks: 40, duration: 40, isActive: true, usageCount: 0,
  sections: [
    // PART 1 — DVD Customer (Q1-10)
    { sectionNumber: 1, title: "Part 1", context: "A customer buying a DVD player.", instructions: "Questions 1\u201310", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 1\u20134</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN TWO WORDS OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: `<div class='ielts-form-box'>
<div class='ielts-form-title'>DVD Customer Profile</div>
<div class='ielts-form-row' style='opacity:0.75;font-style:italic'>Occupation: student <em>(For example)</em></div>
<div class='ielts-form-row'>Have you owned a DVD player before? &nbsp; No</div>
<div class='ielts-form-row'>What is the maximum you want to spend on a DVD player? &nbsp; \u00a3<strong>[1]</strong></div>
<div class='ielts-form-row'>How many DVDs does the customer watch a month? &nbsp; <strong>[2]</strong></div>
<div class='ielts-form-row'>What type of films do you enjoy? &nbsp; <strong>[3]</strong></div>
<div class='ielts-form-row'>What other DVDs (non-film) do you watch? &nbsp; <strong>[4]</strong></div>
</div>` },
      { blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const, questionText: "~Maximum to spend on a DVD player: \u00a3________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const, questionText: "~DVDs watched per month: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const, questionText: "~Type of films enjoyed: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const, questionText: "~Other DVDs (non-film) watched: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<strong>Questions 5\u201310</strong><br/>Complete the table below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: `<div class='ct-wide'>
<style>.ct-wide table{table-layout:fixed;width:100%;border-collapse:collapse}.ct-wide td,.ct-wide th{padding:8px;vertical-align:top;word-wrap:break-word;border:1px solid #d1d5db}.ct-wide th{background:#f3f4f6}</style>
<table>
<colgroup><col style='width:18%'/><col style='width:32%'/><col style='width:22%'/><col style='width:28%'/></colgroup>
<thead><tr><th>Player</th><th>Features</th><th>Cost</th><th>After-sales service</th></tr></thead>
<tbody>
<tr><td>DB 30</td><td>basic</td><td>\u00a369</td><td><strong>[5]</strong> only</td></tr>
<tr><td>XL 643</td><td>Can also <strong>[6]</strong></td><td>\u00a3<strong>[7]</strong></td><td><strong>[8]</strong> at reduced cost</td></tr>
<tr><td>TriX 24</td><td>Will also play <strong>[9]</strong></td><td>\u00a394 including <strong>[10]</strong></td><td>Guaranteed for 3 years</td></tr>
</tbody></table>
</div>` },
      { blockType: "question" as const, questionNumber: 5, questionType: "table-completion" as const, questionText: "~DB 30 after-sales: ________ only", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 6, questionType: "table-completion" as const, questionText: "~XL 643 features: Can also ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 7, questionType: "table-completion" as const, questionText: "~XL 643 cost: \u00a3________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 8, questionType: "table-completion" as const, questionText: "~XL 643 after-sales: ________ at reduced cost", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 9, questionType: "table-completion" as const, questionText: "~TriX 24 features: Will also play ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 10, questionType: "table-completion" as const, questionText: "~TriX 24 cost: \u00a394 including ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
    ]},
    // PART 2 — Home Security (Q11-20)
    { sectionNumber: 2, title: "Part 2", context: "A talk about home security alarms.", instructions: "Questions 11\u201320", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 11\u201320</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>Your home:</strong>" },
      { blockType: "question" as const, questionNumber: 11, questionType: "sentence-completion" as const, questionText: "A quarter of break-ins are through the ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 12, questionType: "sentence-completion" as const, questionText: "The ________ of the house should also be protected", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 13, questionType: "sentence-completion" as const, questionText: "You should warn burglars your house is alarmed by putting a ________ in the window", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "instruction" as const, content: "<strong>The alarms:</strong>" },
      { blockType: "question" as const, questionNumber: 14, questionType: "sentence-completion" as const, questionText: "The alarms show a constant ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 15, questionType: "sentence-completion" as const, questionText: "The alarms can be set off by a ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 16, questionType: "sentence-completion" as const, questionText: "The alarms are connected to the ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "instruction" as const, content: "<strong>Installation:</strong>" },
      { blockType: "question" as const, questionNumber: 17, questionType: "sentence-completion" as const, questionText: "The alarms are usually installed in ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 18, questionType: "sentence-completion" as const, questionText: "The security code should be kept ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 19, questionType: "sentence-completion" as const, questionText: "The alarms can be installed ________ at an additional cost", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 20, questionType: "sentence-completion" as const, questionText: "Customers can pay ________ for their alarm system", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
    ]},
    // PART 3 — Essay Writing (Q21-30)
    { sectionNumber: 3, title: "Part 3", context: "A tutorial about essay writing skills.", instructions: "Questions 21\u201330", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 21\u201327</strong><br/>Complete the summary below.<br/>Write <strong>ONE WORD ONLY</strong> for each answer.<br/><strong>Essay Writing</strong>" },
      { blockType: "question" as const, questionNumber: 21, questionType: "summary-completion" as const, questionText: "Essay writing is simply the process of ________ information", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 22, questionType: "summary-completion" as const, questionText: "presenting your ________", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 23, questionType: "summary-completion" as const, questionText: "You will need to use skills of analysis, ________ and expression", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 24, questionType: "summary-completion" as const, questionText: "The key to producing a good essay is in the ________", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 25, questionType: "summary-completion" as const, questionText: "books in the library to help with the particular ________ of academic writing", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 26, questionType: "summary-completion" as const, questionText: "you must remember to ________ it carefully", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 27, questionType: "summary-completion" as const, questionText: "you can ________ from it", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 28\u201330</strong><br/>Choose <strong>THREE</strong> letters <strong>A\u2013G</strong>.<br/>Which <strong>THREE</strong> pieces of advice does the tutor give the student?" },
      { blockType: "question" as const, questionNumber: 28, questionType: "multiple-choice-multi" as const, questionText: "Which THREE pieces of advice?", options: ["A. break the question down into smaller questions","B. check the vocabulary in the question","C. limit how much you read","D. make sure you have good notes","E. use only a few quotations","F. ask a friend to read your essay","G. try to be objective"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 29, questionType: "multiple-choice-multi" as const, questionText: "Which THREE pieces of advice?", options: ["A. break the question down into smaller questions","B. check the vocabulary in the question","C. limit how much you read","D. make sure you have good notes","E. use only a few quotations","F. ask a friend to read your essay","G. try to be objective"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 30, questionType: "multiple-choice-multi" as const, questionText: "Which THREE pieces of advice?", options: ["A. break the question down into smaller questions","B. check the vocabulary in the question","C. limit how much you read","D. make sure you have good notes","E. use only a few quotations","F. ask a friend to read your essay","G. try to be objective"], correctAnswer: "TBD", marks: 1 },
    ]},
    // PART 4 — Currency Exchange (Q31-40)
    { sectionNumber: 4, title: "Part 4", context: "A lecture about currency exchange simulation.", instructions: "Questions 31\u201340", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 31\u201336</strong><br/>Complete the flow chart below.<br/>Write <strong>ONE WORD ONLY</strong> for each answer." },
      { blockType: "instruction" as const, content: `<div style='max-width:450px'>
<div style='border:1px solid #374151;padding:10px;text-align:center'><strong>[31]</strong> a country and its currency</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center'>imagine you need to <strong>[32]</strong> \u00a3100</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center'><strong>[33]</strong> facts about the state of your country\u2019s economy</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center'>look at other student\u2019s notes on their countries</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center'>decide what your exchange \u2018rate\u2019 is going to be against each currency</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center'>try to <strong>[34]</strong> your currency</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center'><strong>[35]</strong> other currency if you want</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center'><strong>[36]</strong> your profit</div>
</div>` },
      { blockType: "question" as const, questionNumber: 31, questionType: "flow-chart-completion" as const, questionText: "~________ a country and its currency", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 32, questionType: "flow-chart-completion" as const, questionText: "~imagine you need to ________ \u00a3100", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 33, questionType: "flow-chart-completion" as const, questionText: "~________ facts about the state of your country\u2019s economy", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 34, questionType: "flow-chart-completion" as const, questionText: "~try to ________ your currency", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 35, questionType: "flow-chart-completion" as const, questionText: "~________ other currency if you want", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 36, questionType: "flow-chart-completion" as const, questionText: "~________ your profit", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 37\u201340</strong><br/>Answer the questions below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "question" as const, questionNumber: 37, questionType: "short-answer" as const, questionText: "~How many main trading partners of the UK does the tutor want her students to focus on?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 38, questionType: "short-answer" as const, questionText: "~Which sector does the tutor want students to study?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 39, questionType: "short-answer" as const, questionText: "~What changing things does the tutor want students to look at?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 40, questionType: "short-answer" as const, questionText: "~When does the tutor want the project completed by?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
    ]},
  ]
};
seed();

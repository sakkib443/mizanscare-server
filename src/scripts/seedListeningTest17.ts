import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seed() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 17 });
    if (existing) { await ListeningTest.findByIdAndUpdate(existing._id, data, { runValidators: false }); console.log("\u2705 Test 17 updated!"); }
    else { const db = mongoose.connection.db!; const admin = await db.collection("users").findOne({ role: "admin" }); await ListeningTest.create({ ...data, createdBy: admin?._id || new mongoose.Types.ObjectId() }); console.log("\u2705 Test 17 created!"); }
    const t = await ListeningTest.findOne({ testNumber: 17 });
    if (t) { console.log(`\n\uD83D\uDCDD ${t.title}`); (t.sections as any[]).forEach((s,i) => { const qs = s.questions.filter((q:any) => q.blockType==="question"); console.log(`  Part ${i+1}: ${qs.length} questions`); }); }
    await mongoose.disconnect(); process.exit(0);
  } catch (e) { console.error("\u274C",e); process.exit(1); }
}

const data = {
  testId: "LISTENING_017", testNumber: 17,
  title: "Listening Mock Test 17 \u2013 Academic",
  description: "IELTS Academic Listening Test 17 \u2014 4 parts, 40 questions.",
  source: "IELTS Practice Test", mainAudioUrl: "", audioDuration: 1800,
  difficulty: "medium" as const, totalQuestions: 40, totalMarks: 40, duration: 40, isActive: true, usageCount: 0,
  sections: [
    // ═══ PART 1 — Accommodation Request (Q1–10) ═══
    { sectionNumber: 1, title: "Part 1", context: "A student requesting homestay accommodation.", instructions: "Questions 1\u201310", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 1\u20135</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: `<div class='ielts-form-box'>
<div class='ielts-form-title'>Accommodation Request Form</div>
<div class='ielts-form-row' style='opacity:0.75;font-style:italic'>Type of accommodation: Homestay <em>(Example)</em></div>
<div class='ielts-form-row'>Full name: <strong>[1]</strong> Lee</div>
<div class='ielts-form-row'>Age: <strong>[2]</strong></div>
<div class='ielts-form-row'>Present address: International House</div>
<div class='ielts-form-row'>Room: <strong>[3]</strong></div>
<div class='ielts-form-row'>Reasons for applying: to know about local culture; To <strong>[4]</strong></div>
<div class='ielts-form-row'>Contact number: 8141 9680 (home); <strong>[5]</strong> (mobile)</div>
</div>` },
      { blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const, questionText: "~Full name: ________ Lee", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const, questionText: "~Age: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const, questionText: "~Room: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const, questionText: "~Reasons: To ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const, questionText: "~Contact number (mobile): ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "instruction" as const, content: "<strong>Questions 6\u201310</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: `<div style='margin:8px 0;padding:12px;border:1px solid #d1d5db;border-radius:4px'>
<div style='font-weight:bold;margin-bottom:6px'>Accommodation requirements:</div>
<ul style='margin:0 0 8px 20px;padding:0;line-height:1.8'>
<li>a nice landlady</li>
<li>own <strong>[6]</strong></li>
<li>no young children</li>
<li>near to <strong>[7]</strong></li>
</ul>
<div style='margin:6px 0'>The <strong>[8]</strong> will be \u00a3140, including <strong>[9]</strong> bill.</div>
<div style='font-weight:bold;margin-top:8px'>Accommodation required date:</div>
<div style='margin:4px 0'><strong>[10]</strong></div>
</div>` },
      { blockType: "question" as const, questionNumber: 6, questionType: "note-completion" as const, questionText: "~own ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 7, questionType: "note-completion" as const, questionText: "~near to ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 8, questionType: "note-completion" as const, questionText: "~The ________ will be \u00a3140", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 9, questionType: "note-completion" as const, questionText: "~including ________ bill", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 10, questionType: "note-completion" as const, questionText: "~Accommodation required date: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
    ]},

    // ═══ PART 2 — Peak District Guide (Q11–20) ═══
    { sectionNumber: 2, title: "Part 2", context: "A guide to the Peak District.", instructions: "Questions 11\u201320", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 11\u201315</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>Guide for Peak District</strong>" },
      { blockType: "question" as const, questionNumber: 11, questionType: "note-completion" as const, questionText: "Peak District\u2019s location: five miles from Sheffield ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "instruction" as const, content: "<strong>Main attractions:</strong>" },
      { blockType: "question" as const, questionNumber: 12, questionType: "note-completion" as const, questionText: "Bakewell Town is known for local food: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 13, questionType: "note-completion" as const, questionText: "Chatsworth House has formal gardens and ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 14, questionType: "note-completion" as const, questionText: "The heart of Peak District is the Peak District ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 15, questionType: "note-completion" as const, questionText: "The most famous cavern in Castleton is called ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "instruction" as const, content: "<strong>Questions 16\u201320</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "question" as const, questionNumber: 16, questionType: "note-completion" as const, questionText: "________ must be accompanied by an adult on walking and cycling", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 17, questionType: "note-completion" as const, questionText: "Tourists can pick ________ in some specialist shops", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 18, questionType: "note-completion" as const, questionText: "Chatsworth\u2019s art collection has ________ years\u2019 history", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 19, questionType: "note-completion" as const, questionText: "Eyam village is also called ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 20, questionType: "note-completion" as const, questionText: "Eyam Hall has ________ workshops", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
    ]},

    // ═══ PART 3 — Essay Discussion (Q21–30) ═══
    { sectionNumber: 3, title: "Part 3", context: "A student discussing a paper with a professor.", instructions: "Questions 21\u201330", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 21\u201323</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const, questionText: "Harper\u2019s paper is about", options: ["A. energy crisis.","B. environment protection.","C. computer technology."], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const, questionText: "The research method that the professor recommends is", options: ["A. interview.","B. questionnaire.","C. presentation"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice" as const, questionText: "Harper is worried about", options: ["A. essay deadline.","B. questionnaire data.","C. course stress."], correctAnswer: "TBD", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 24\u201326</strong><br/>Choose the correct letter.<br/>What suggestions does professor make?" },
      { blockType: "question" as const, questionNumber: 24, questionType: "matching" as const, questionText: "purpose", options: ["A. REMAIN","B. REWRITE","C. REMOVE"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 25, questionType: "matching" as const, questionText: "structure", options: ["A. REMAIN","B. REWRITE","C. REMOVE"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 26, questionType: "matching" as const, questionText: "personal experiences", options: ["A. REMAIN","B. REWRITE","C. REMOVE"], correctAnswer: "TBD", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 27\u201330</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.<br/><strong>ESSAY REQUIREMENT</strong>" },
      { blockType: "question" as const, questionNumber: 27, questionType: "note-completion" as const, questionText: "~To hand in essay by ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 28, questionType: "note-completion" as const, questionText: "~To print essay by ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 29, questionType: "note-completion" as const, questionText: "~Before handing in: to do ________ e.g. grammar and spelling", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 30, questionType: "note-completion" as const, questionText: "~to check proper ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
    ]},

    // ═══ PART 4 — British Media (Q31–40) ═══
    { sectionNumber: 4, title: "Part 4", context: "A lecture about British media.", instructions: "Questions 31\u201340", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 31\u201340</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.<br/><strong>BRITISH MEDIA</strong>" },
      { blockType: "question" as const, questionNumber: 31, questionType: "note-completion" as const, questionText: "________ is British oldest daily newspaper", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 32, questionType: "note-completion" as const, questionText: "The legal rule of advertisement that all British media must follow is ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 33, questionType: "note-completion" as const, questionText: "There are over ________ different newspapers in Britain", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const, questionText: "The press that publishes serious articles is ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const, questionText: "The most leftwing newspaper is ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const, questionText: "A feature of the tabloid press is a girl picture on ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const, questionText: "The oldest soap shop was located in the northern city of ________ in England", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const, questionText: "British newscasts get good reputation for the ________ of reporting", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 39, questionType: "note-completion" as const, questionText: "British viewers usually use the time of ________ to make a drink", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 40, questionType: "note-completion" as const, questionText: "Audience have to buy a ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
    ]},
  ]
};

seed();

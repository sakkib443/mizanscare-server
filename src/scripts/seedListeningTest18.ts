import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";
async function seed() {
  try {
    await mongoose.connect(config.database_url as string); console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 18 });
    if (existing) { await ListeningTest.findByIdAndUpdate(existing._id, data, { runValidators: false }); console.log("\u2705 Test 18 updated!"); }
    else { const db = mongoose.connection.db!; const admin = await db.collection("users").findOne({ role: "admin" }); await ListeningTest.create({ ...data, createdBy: admin?._id || new mongoose.Types.ObjectId() }); console.log("\u2705 Test 18 created!"); }
    const t = await ListeningTest.findOne({ testNumber: 18 });
    if (t) { console.log(`\n\uD83D\uDCDD ${t.title}`); (t.sections as any[]).forEach((s,i) => { const qs = s.questions.filter((q:any) => q.blockType==="question"); console.log(`  Part ${i+1}: ${qs.length} questions`); }); }
    await mongoose.disconnect(); process.exit(0);
  } catch (e) { console.error("\u274C",e); process.exit(1); }
}
const data = {
  testId: "LISTENING_018", testNumber: 18,
  title: "Listening Mock Test 18 \u2013 Academic", description: "IELTS Academic Listening Test 18 \u2014 4 parts, 40 questions.",
  source: "IELTS Practice Test", mainAudioUrl: "", audioDuration: 1800,
  difficulty: "medium" as const, totalQuestions: 40, totalMarks: 40, duration: 40, isActive: true, usageCount: 0,
  sections: [
    // PART 1 — Accommodation House (Q1-10)
    { sectionNumber: 1, title: "Part 1", context: "Information about student accommodation rules.", instructions: "Questions 1\u201310", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Question 1</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 1, questionType: "multiple-choice" as const, questionText: "The accommodation was originally built as", options: ["A. student flat.","B. local museum.","C. private house."], correctAnswer: "C", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 2\u20133</strong><br/>Choose <strong>TWO</strong> letters, <strong>A\u2013E</strong>.<br/>Which of the following <strong>TWO</strong> facilities are <strong>NOT</strong> in the house?" },
      { blockType: "question" as const, questionNumber: 2, questionType: "multiple-choice-multi" as const, questionText: "Which TWO facilities are NOT in the house?", options: ["A. bathroom","B. balcony","C. computer room","D. garden","E. garage"], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 3, questionType: "multiple-choice-multi" as const, questionText: "Which TWO facilities are NOT in the house?", options: ["A. bathroom","B. balcony","C. computer room","D. garden","E. garage"], correctAnswer: "E", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 4\u20137</strong><br/>Complete the table below.<br/>Write <strong>ONE WORD ONLY</strong> for each answer.<br/><strong>RULE</strong>" },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'><tbody>
<tr><td style='padding:8px'>Bedroom and bathroom</td><td style='padding:8px'><strong>[4]</strong><br/><strong>[5]</strong> room<br/>Use before 11 p.m.</td></tr>
<tr><td style='padding:8px'>Lounge</td><td style='padding:8px'><strong>[6]</strong> after 11 p.m.</td></tr>
<tr><td style='padding:8px'>Yard</td><td style='padding:8px'>No <strong>[7]</strong> is allowed</td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 4, questionType: "table-completion" as const, questionText: "~Bedroom and bathroom rule: ________", correctAnswer: "non-smoking", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 5, questionType: "table-completion" as const, questionText: "~________ room", correctAnswer: "laundry", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 6, questionType: "table-completion" as const, questionText: "~Lounge: ________ after 11 p.m.", correctAnswer: "quiet", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 7, questionType: "table-completion" as const, questionText: "~Yard: No ________ is allowed", correctAnswer: "parking", marks: 1, wordLimit: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 8\u201310</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "question" as const, questionNumber: 8, questionType: "sentence-completion" as const, questionText: "________ is only allowed on weekends", correctAnswer: "party", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 9, questionType: "sentence-completion" as const, questionText: "The opening time of the front door is ________", correctAnswer: "6:00 am", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 10, questionType: "sentence-completion" as const, questionText: "You can go to Room 101 beside reception to get a ________", correctAnswer: "front door key", marks: 1, wordLimit: 3 },
    ]},
    // PART 2 — Sports Competition (Q11-20)
    { sectionNumber: 2, title: "Part 2", context: "A sports competition announcement.", instructions: "Questions 11\u201320", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 11\u201317</strong><br/>Complete the table below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr><th style='padding:8px;background:#f3f4f6'>Item</th><th style='padding:8px;background:#f3f4f6'>Tennis</th><th style='padding:8px;background:#f3f4f6'>Soccer</th></tr></thead>
<tbody>
<tr><td style='padding:8px'>Number of teams</td><td style='padding:8px'><strong>[11]</strong></td><td style='padding:8px'>4</td></tr>
<tr><td style='padding:8px'>Age</td><td style='padding:8px'>16\u201322</td><td style='padding:8px'>Up to <strong>[12]</strong></td></tr>
<tr><td style='padding:8px'><strong>[13]</strong></td><td style='padding:8px'>court 2</td><td style='padding:8px'><strong>[14]</strong></td></tr>
<tr><td style='padding:8px'>Date</td><td style='padding:8px'><strong>[15]</strong></td><td style='padding:8px'><strong>[16]</strong> evenings</td></tr>
<tr><td style='padding:8px'><strong>[17]</strong></td><td style='padding:8px'>George Hansen</td><td style='padding:8px'>Paul Bhatt</td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 11, questionType: "table-completion" as const, questionText: "~Tennis \u2013 Number of teams: ________", correctAnswer: "6", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 12, questionType: "table-completion" as const, questionText: "~Soccer \u2013 Age: Up to ________", correctAnswer: "20", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 13, questionType: "table-completion" as const, questionText: "~Row label for court 2 / court 4: ________", correctAnswer: "venue", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 14, questionType: "table-completion" as const, questionText: "~Soccer venue: ________", correctAnswer: "court 4", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 15, questionType: "table-completion" as const, questionText: "~Tennis \u2013 Date: ________", correctAnswer: "Sunday afternoons", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 16, questionType: "table-completion" as const, questionText: "~Soccer \u2013 Date: ________ evenings", correctAnswer: "Saturday", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 17, questionType: "table-completion" as const, questionText: "~Row label for George Hansen / Paul Bhatt: ________", correctAnswer: "coach", marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<strong>Questions 18\u201320</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer." },
      { blockType: "question" as const, questionNumber: 18, questionType: "note-completion" as const, questionText: "The match always begins with a ________", correctAnswer: "barbecue", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 19, questionType: "note-completion" as const, questionText: "________ will be awarded an honour and prize", correctAnswer: "MVP", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 20, questionType: "note-completion" as const, questionText: "All players must write a ________ by April 18th", correctAnswer: "confirm letter", marks: 1, wordLimit: 2 },
    ]},
    // PART 3 — Tutorial Session (Q21-30)
    { sectionNumber: 3, title: "Part 3", context: "A student meeting a tutor about reference books.", instructions: "Questions 21\u201330", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 21\u201324</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "question" as const, questionNumber: 21, questionType: "note-completion" as const, questionText: "The tutor\u2019s new room number is ________", correctAnswer: "614", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 22, questionType: "note-completion" as const, questionText: "The tutorial time is at ________", correctAnswer: "2:00 pm", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 23, questionType: "note-completion" as const, questionText: "The reason for the student to see his tutor is to ________", correctAnswer: "extend thesis deadline", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 24, questionType: "note-completion" as const, questionText: "The student\u2019s trouble is to have many ________ to read", correctAnswer: "reading materials", marks: 1, wordLimit: 3 },
      { blockType: "instruction" as const, content: "<strong>Questions 25\u201328</strong><br/>What recommendations does the tutor make about the reference books?<br/>Write the correct letter, <strong>A\u2013F</strong>, next to Questions 25\u201328." },
      { blockType: "instruction" as const, content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db'>
<div><strong>A</strong> &nbsp; All</div><div><strong>B</strong> &nbsp; Research method</div>
<div><strong>C</strong> &nbsp; Main Body</div><div><strong>D</strong> &nbsp; Conclusion</div>
<div><strong>E</strong> &nbsp; Avoid</div><div><strong>F</strong> &nbsp; Argument</div></div>` },
      { blockType: "question" as const, questionNumber: 25, questionType: "matching" as const, questionText: "Bayer:", options: ["A","B","C","D","E","F"], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 26, questionType: "matching" as const, questionText: "Oliver:", options: ["A","B","C","D","E","F"], correctAnswer: "F", marks: 1 },
      { blockType: "question" as const, questionNumber: 27, questionType: "matching" as const, questionText: "Billy:", options: ["A","B","C","D","E","F"], correctAnswer: "E", marks: 1 },
      { blockType: "question" as const, questionNumber: 28, questionType: "matching" as const, questionText: "Andrew:", options: ["A","B","C","D","E","F"], correctAnswer: "D", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 29\u201330</strong><br/>Choose <strong>TWO</strong> letters, <strong>A\u2013E</strong>.<br/>Which <strong>TWO</strong> points does the tutor warn about in the student\u2019s research work?" },
      { blockType: "question" as const, questionNumber: 29, questionType: "multiple-choice-multi" as const, questionText: "Which TWO points does the tutor warn about?", options: ["A. interviewees","B. make data clearly","C. time arrangement","D. reference books","E. questionnaire design"], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 30, questionType: "multiple-choice-multi" as const, questionText: "Which TWO points does the tutor warn about?", options: ["A. interviewees","B. make data clearly","C. time arrangement","D. reference books","E. questionnaire design"], correctAnswer: "D", marks: 1 },
    ]},
    // PART 4 — Meteor Astronomy (Q31-40)
    { sectionNumber: 4, title: "Part 4", context: "A lecture about meteor astronomy.", instructions: "Questions 31\u201340", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 31\u201340</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.<br/><strong>Magic Meteor Astronomy</strong>" },
      { blockType: "question" as const, questionNumber: 31, questionType: "note-completion" as const, questionText: "Meteors are usually named ________", correctAnswer: "shooting star", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 32, questionType: "note-completion" as const, questionText: "Meteoroids belong to inner ________ system", correctAnswer: "solar", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 33, questionType: "note-completion" as const, questionText: "Meteor storms are more beautiful and amazing than ________", correctAnswer: "meteor showers", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const, questionText: "The biggest meteor storm happened in ________", correctAnswer: "1833", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const, questionText: "Leonids are usually connected with ________", correctAnswer: "comets", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const, questionText: "A ________ is brighter than any of the stars and planets", correctAnswer: "fireball", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const, questionText: "Most meteors appear colour of ________", correctAnswer: "white", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const, questionText: "In the 17th Century, many people regarded meteorite as ________", correctAnswer: "thunderstorms", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 39, questionType: "note-completion" as const, questionText: "The most magnificent meteorite event took place on ________ 1908", correctAnswer: "June 30", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 40, questionType: "note-completion" as const, questionText: "Dinosaurs became extinct about ________ years ago", correctAnswer: "65 million", marks: 1, wordLimit: 2 },
    ]},
  ]
};
seed();

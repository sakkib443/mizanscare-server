import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";
async function seed() {
  try {
    await mongoose.connect(config.database_url as string); console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 3 });
    if (existing) { await ListeningTest.findByIdAndUpdate(existing._id, data, { runValidators: false }); console.log("\u2705 Test 03 updated!"); }
    else { const db = mongoose.connection.db!; const admin = await db.collection("users").findOne({ role: "admin" }); await ListeningTest.create({ ...data, createdBy: admin?._id || new mongoose.Types.ObjectId() }); console.log("\u2705 Test 03 created!"); }
    const t = await ListeningTest.findOne({ testNumber: 3 });
    if (t) { console.log(`\n\uD83D\uDCDD ${t.title}`); (t.sections as any[]).forEach((s,i) => { const qs = s.questions.filter((q:any) => q.blockType==="question"); console.log(`  Part ${i+1}: ${qs.length} questions`); }); }
    await mongoose.disconnect(); process.exit(0);
  } catch (e) { console.error("\u274C",e); process.exit(1); }
}
const data = {
  testId: "LISTENING_003", testNumber: 3,
  title: "Listening Mock Test 03 \u2013 Academic", description: "IELTS Academic Listening Test 03 \u2014 4 parts, 40 questions.",
  source: "IELTS Practice Test", mainAudioUrl: "", audioDuration: 1800,
  difficulty: "medium" as const, totalQuestions: 40, totalMarks: 40, duration: 40, isActive: true, usageCount: 0,
  sections: [
    // PART 1 — Tourism Survey (Q1-10)
    { sectionNumber: 1, title: "Part 1", context: "A tourism survey conversation.", instructions: "Questions 1\u201310", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 1\u201310</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer.<br/><strong>Tourism Survey</strong>" },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr><th style='padding:8px;text-align:left;background:#f3f4f6;font-style:italic'>Example</th><th style='padding:8px;text-align:left;background:#f3f4f6;font-style:italic'>Answer</th></tr></thead>
<tbody>
<tr><td style='padding:8px;width:45%'>Name:</td><td style='padding:8px'><em>Robert Goddard</em></td></tr>
<tr><td style='padding:8px'>Destination:</td><td style='padding:8px'>Melbourne</td></tr>
<tr><td style='padding:8px'>Total number of visits?</td><td style='padding:8px'><strong>[1]</strong></td></tr>
<tr><td style='padding:8px'>Best thing about the city:</td><td style='padding:8px'><strong>[2]</strong></td></tr>
<tr><td style='padding:8px'>Favourite attraction:</td><td style='padding:8px'><strong>[3]</strong></td></tr>
<tr><td colspan='2' style='padding:8px;background:#f3f4f6'><strong>Best thing about</strong></td></tr>
<tr><td style='padding:8px'>the destination\u2019s dining options:</td><td style='padding:8px'><strong>[4]</strong> of food</td></tr>
<tr><td colspan='2' style='padding:8px;background:#f3f4f6'><strong>Method of transport</strong></td></tr>
<tr><td style='padding:8px'>to destination:</td><td style='padding:8px'>by <strong>[5]</strong></td></tr>
<tr><td style='padding:8px'>Age group:</td><td style='padding:8px'><strong>[6]</strong></td></tr>
<tr><td style='padding:8px'>Income level:</td><td style='padding:8px'><strong>[7]</strong></td></tr>
<tr><td style='padding:8px'>Purpose of visit:</td><td style='padding:8px'>\u2022 on business<br/>\u2022 <strong>[8]</strong></td></tr>
<tr><td style='padding:8px'>Occupation:</td><td style='padding:8px'>\u2022 <strong>[9]</strong><br/>\u2022 writer for a travel magazine</td></tr>
<tr><td style='padding:8px'>Opinion about accommodation:</td><td style='padding:8px'><strong>[10]</strong></td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const, questionText: "~Total number of visits: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const, questionText: "~Best thing about the city: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const, questionText: "~Favourite attraction: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const, questionText: "~Dining options: ________ of food", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const, questionText: "~Method of transport to destination: by ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const, questionText: "~Age group: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 7, questionType: "form-completion" as const, questionText: "~Income level: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 8, questionType: "form-completion" as const, questionText: "~Purpose of visit: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 9, questionType: "form-completion" as const, questionText: "~Occupation: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 10, questionType: "form-completion" as const, questionText: "~Opinion about accommodation: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
    ]},
    // PART 2 — Map + Matching (Q11-20)
    { sectionNumber: 2, title: "Part 2", context: "Information about local points of interest and their improvements.", instructions: "Questions 11\u201320", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 11\u201315</strong><br/>Label the map below.<br/>Write the correct letter, <strong>A\u2013E</strong>, next to questions 11\u201315." },
      { blockType: "instruction" as const, content: "<div style='text-align:center;margin:10px 0'><img src='/images/listening/test03-part2-map.png' alt='Map showing locations A through E' style='max-width:100%;max-height:400px;border:1px solid #d1d5db;border-radius:4px' /></div>" },
      { blockType: "question" as const, questionNumber: 11, questionType: "map-labeling" as const, questionText: "Science Museum", options: ["A","B","C","D","E"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 12, questionType: "map-labeling" as const, questionText: "National History Museum", options: ["A","B","C","D","E"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 13, questionType: "map-labeling" as const, questionText: "Car Park", options: ["A","B","C","D","E"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 14, questionType: "map-labeling" as const, questionText: "Shopping Mall", options: ["A","B","C","D","E"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 15, questionType: "map-labeling" as const, questionText: "Primary School", options: ["A","B","C","D","E"], correctAnswer: "TBD", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 16\u201320</strong><br/>What is the improvement of each main point of interest in the area?<br/>Choose <strong>FIVE</strong> answers from the box and write the correct letter, <strong>A\u2013G</strong>, next to questions 16\u201320." },
      { blockType: "instruction" as const, content: `<div style='margin:10px 0;padding:12px;border:1px solid #d1d5db;max-width:280px'>
<div><strong>A</strong> &nbsp; New entrance</div>
<div><strong>B</strong> &nbsp; Free lunch provided</div>
<div><strong>C</strong> &nbsp; Free information provided</div>
<div><strong>D</strong> &nbsp; Increase in size</div>
<div><strong>E</strong> &nbsp; Additional signs</div>
<div><strong>F</strong> &nbsp; New exhibitions</div>
<div><strong>G</strong> &nbsp; New structure</div>
</div>` },
      { blockType: "question" as const, questionNumber: 16, questionType: "matching" as const, questionText: "Car Park", options: ["A. New entrance","B. Free lunch provided","C. Free information provided","D. Increase in size","E. Additional signs","F. New exhibitions","G. New structure"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 17, questionType: "matching" as const, questionText: "Primary School", options: ["A. New entrance","B. Free lunch provided","C. Free information provided","D. Increase in size","E. Additional signs","F. New exhibitions","G. New structure"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 18, questionType: "matching" as const, questionText: "Science Museum", options: ["A. New entrance","B. Free lunch provided","C. Free information provided","D. Increase in size","E. Additional signs","F. New exhibitions","G. New structure"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 19, questionType: "matching" as const, questionText: "National History Museum", options: ["A. New entrance","B. Free lunch provided","C. Free information provided","D. Increase in size","E. Additional signs","F. New exhibitions","G. New structure"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 20, questionType: "matching" as const, questionText: "Shopping Mall", options: ["A. New entrance","B. Free lunch provided","C. Free information provided","D. Increase in size","E. Additional signs","F. New exhibitions","G. New structure"], correctAnswer: "TBD", marks: 1 },
    ]},
    // PART 3 — Academic Discussion (Q21-30)
    { sectionNumber: 3, title: "Part 3", context: "An academic discussion about a proposal and practice paper.", instructions: "Questions 21\u201330", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 21\u201323</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const, questionText: "The proposal will", options: ["A. be reviewed by two examiners.","B. be added to the final grade.","C. be returned with feedback."], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const, questionText: "The proposal will consist mostly of", options: ["A. topics","B. methods","C. results"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice" as const, questionText: "For the practice paper, the tutor has directed the students to make sure to", options: ["A. pay attention to time limits.","B. write at least 6,000 words.","C. keep on topic."], correctAnswer: "TBD", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 24\u201330</strong><br/>Complete the sentences below.<br/>Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer." },
      { blockType: "question" as const, questionNumber: 24, questionType: "sentence-completion" as const, questionText: "~There is no need to ________ lots of people", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 25, questionType: "sentence-completion" as const, questionText: "~Pay attention to the ________ of the final report", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 26, questionType: "sentence-completion" as const, questionText: "~Prepare two ________, one for the teacher, another for the students themselves", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 27, questionType: "sentence-completion" as const, questionText: "~The deadline of the final paper is ________", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 28, questionType: "sentence-completion" as const, questionText: "~The students can ________ their topics before the beginning of April", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 29, questionType: "sentence-completion" as const, questionText: "~Students deciding to change topics must deliver a ________ to the teacher in advance", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 30, questionType: "sentence-completion" as const, questionText: "~At the beginning of the report, the hypothesis and an outline of the ________ are needed", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
    ]},
    // PART 4 — Advertising Effect (Q31-40)
    { sectionNumber: 4, title: "Part 4", context: "A lecture about advertising effects and marketing strategies.", instructions: "Questions 31\u201340", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 31\u201340</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer.<br/><strong>Advertising Effect</strong>" },
      { blockType: "instruction" as const, content: "<strong>The important factor to consider</strong>" },
      { blockType: "question" as const, questionNumber: 31, questionType: "note-completion" as const, questionText: "~The ________ that customers must travel affects the probability that they will buy the product", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<strong>Methods of communication</strong>" },
      { blockType: "question" as const, questionNumber: 32, questionType: "note-completion" as const, questionText: "~Advertising slogans are easier to remember if there is a ________ played with them", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 33, questionType: "note-completion" as const, questionText: "~Mandy\u2019s Candy Store appeals to people\u2019s sense of ________ to draw in customers", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const, questionText: "~To an ad campaign for digital products, it is ________ that is extremely important", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<strong>Effect on your product sales</strong>" },
      { blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const, questionText: "~The customer\u2019s ________ after he or she experiences the ad is most important", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<strong>Marketing strategies</strong>" },
      { blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const, questionText: "~On international flights, it is wise for advertisements to be displayed in the common ________ of most passengers", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const, questionText: "~Very few young people buy ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const, questionText: "~The UNESCO website would be a good place to advertise for companies aiming to improve the ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 39, questionType: "note-completion" as const, questionText: "~One good location to place ads for suntan lotion is the ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 40, questionType: "note-completion" as const, questionText: "~A good scene for a water purification commercial would be wonderful sights of a ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
    ]},
  ]
};
seed();

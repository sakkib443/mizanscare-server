import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";
async function seed() {
  try {
    await mongoose.connect(config.database_url as string); console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 20 });
    if (existing) { await ListeningTest.findByIdAndUpdate(existing._id, data, { runValidators: false }); console.log("\u2705 Test 20 updated!"); }
    else { const db = mongoose.connection.db!; const admin = await db.collection("users").findOne({ role: "admin" }); await ListeningTest.create({ ...data, createdBy: admin?._id || new mongoose.Types.ObjectId() }); console.log("\u2705 Test 20 created!"); }
    const t = await ListeningTest.findOne({ testNumber: 20 });
    if (t) { console.log(`\n\uD83D\uDCDD ${t.title}`); (t.sections as any[]).forEach((s,i) => { const qs = s.questions.filter((q:any) => q.blockType==="question"); console.log(`  Part ${i+1}: ${qs.length} questions`); }); }
    await mongoose.disconnect(); process.exit(0);
  } catch (e) { console.error("\u274C",e); process.exit(1); }
}
const data = {
  testId: "LISTENING_020", testNumber: 20,
  title: "Listening Mock Test 20 \u2013 Academic", description: "IELTS Academic Listening Test 20 \u2014 4 parts, 40 questions.",
  source: "IELTS Practice Test", mainAudioUrl: "", audioDuration: 1800,
  difficulty: "medium" as const, totalQuestions: 40, totalMarks: 40, duration: 40, isActive: true, usageCount: 0,
  sections: [
    // PART 1 — Crime Report (Q1-10)
    { sectionNumber: 1, title: "Part 1", context: "A police crime report registration.", instructions: "Questions 1\u201310", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 1\u201310</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: `<div class='ielts-form-box'>
<div class='ielts-form-title'>Registration Form</div>
<div class='ielts-form-row' style='opacity:0.75;font-style:italic'>Type of crime reported: robbery <em>(Example)</em></div>
<div class='ielts-form-row'>Name: Anna <strong>[1]</strong></div>
<div class='ielts-form-row'>Date of Birth (dd/mm/yyyy): <strong>[2]</strong></div>
<div class='ielts-form-row'>Address: 4 <strong>[3]</strong> St.</div>
<div class='ielts-form-row'>Post code: <strong>[4]</strong></div>
<div class='ielts-form-row'>Nationality: Grenadian</div>
<div class='ielts-form-row'>Number of previous burglaries: <strong>[5]</strong></div>
<div class='ielts-form-row'>Time of apartment tenancy: <strong>[6]</strong></div>
<div class='ielts-form-row'>Number of occupants: <strong>[7]</strong></div>
<div class='ielts-form-row'>Entry point of burglar: <strong>[8]</strong></div>
<div class='ielts-form-row' style='font-weight:bold;margin-top:8px'>Details of lost property:</div>
<ul style='margin:4px 0 4px 20px;padding:0;line-height:1.8'>
<li>Serial number of lost computer: <strong>[9]</strong></li>
<li>Material of stolen purse: <strong>[10]</strong> Cloth</li>
</ul>
</div>` },
      { blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const, questionText: "~Name: Anna ________", correctAnswer: "Grieg", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const, questionText: "~Date of Birth: ________", correctAnswer: "15/03/1980", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const, questionText: "~Address: 4 ________ St.", correctAnswer: "Ellendale", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const, questionText: "~Post code: ________", correctAnswer: "W5 2AT", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const, questionText: "~Number of previous burglaries: ________", correctAnswer: "0", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const, questionText: "~Time of apartment tenancy: ________", correctAnswer: "8 months", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 7, questionType: "form-completion" as const, questionText: "~Number of occupants: ________", correctAnswer: "1", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 8, questionType: "form-completion" as const, questionText: "~Entry point of burglar: ________", correctAnswer: "back door", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 9, questionType: "form-completion" as const, questionText: "~Serial number of lost computer: ________", correctAnswer: "G416870", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 10, questionType: "form-completion" as const, questionText: "~Material of stolen purse: ________ Cloth", correctAnswer: "Silver-Colored", marks: 1, wordLimit: 2 },
    ]},
    // PART 2 — Business School Video Project (Q11-20)
    { sectionNumber: 2, title: "Part 2", context: "Two students planning a video project about business school.", instructions: "Questions 11\u201320", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 11\u201314</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 11, questionType: "multiple-choice" as const, questionText: "What is the project that Mark and Gina want to start?", options: ["A. business school requirements","B. directions to the business school","C. explaining the business school experience"], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 12, questionType: "multiple-choice" as const, questionText: "Who is the target audience?", options: ["A. business students","B. business school applicants","C. summer school attendees"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 13, questionType: "multiple-choice" as const, questionText: "How will they convey the information?", options: ["A. summer course lecture","B. informational video","C. pamphlet in the mail"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 14, questionType: "multiple-choice" as const, questionText: "They want to do this project because", options: ["A. students worry about their studies.","B. they want to obtain a good grade.","C. they want to attract future business school applicants."], correctAnswer: "A", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 15\u201320</strong><br/>Complete the table below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr><th style='padding:8px;background:#f3f4f6'>Topic</th><th style='padding:8px;background:#f3f4f6'>Time</th></tr></thead>
<tbody>
<tr><td style='padding:8px'>\u2022 Academics<br/>\u2013 <strong>[15]</strong></td><td style='padding:8px'>7 minutes</td></tr>
<tr><td style='padding:8px'>\u2022 <strong>[16]</strong><br/>\u2013 Cafeteria<br/>\u2013 <strong>[17]</strong></td><td style='padding:8px'>6 minutes</td></tr>
<tr><td style='padding:8px'>\u2022 Social activity<br/>\u2013 <strong>[18]</strong><br/>\u2013 <strong>[19]</strong></td><td style='padding:8px'>8 minutes</td></tr>
<tr><td style='padding:8px'>\u2022 Conclusion</td><td style='padding:8px'>nearly <strong>[20]</strong></td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 15, questionType: "table-completion" as const, questionText: "~Academics sub-topic: ________", correctAnswer: "teaching methods", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 16, questionType: "table-completion" as const, questionText: "~Second main topic: ________", correctAnswer: "accommodation", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 17, questionType: "table-completion" as const, questionText: "~Second topic sub-item: ________", correctAnswer: "flats", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 18, questionType: "table-completion" as const, questionText: "~Social activity sub-item 1: ________", correctAnswer: "disco", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 19, questionType: "table-completion" as const, questionText: "~Social activity sub-item 2: ________", correctAnswer: "international evening", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 20, questionType: "table-completion" as const, questionText: "~Conclusion time: nearly ________", correctAnswer: "2 minutes", marks: 1, wordLimit: 2 },
    ]},
    // PART 3 — Questionnaire Survey (Q21-30)
    { sectionNumber: 3, title: "Part 3", context: "Students discussing a questionnaire survey project.", instructions: "Questions 21\u201330", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 21\u201326</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const, questionText: "The subjects in questionnaire are", options: ["A. tourists in the hotel in this area.","B. local residents.","C. people who are living in this area."], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const, questionText: "The results of the questionnaire should be", options: ["A. directly entered into the computer.","B. scored by hand.","C. submitted directly to Professor Curran."], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice" as const, questionText: "Why should John give a copy of plans to the professor?", options: ["A. to receive a good grade","B. to get advice","C. to earn high praise"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 24, questionType: "multiple-choice" as const, questionText: "How will the instructions be presented?", options: ["A. given by a group representative","B. given by all members of the group","C. given by the professor"], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 25, questionType: "multiple-choice" as const, questionText: "What does Dani suggest when subjects receive the questionnaire?", options: ["A. divide into 2 parts to argue","B. focus on the opinion of the interviewees","C. take consideration of both sides"], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 26, questionType: "multiple-choice" as const, questionText: "Why is this project particularly important to John?", options: ["A. to earn respect from professors","B. to raise his grade","C. to impress his professor"], correctAnswer: "A", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 27\u201330</strong><br/>What is the source of each one below in this survey?<br/>Choose <strong>FOUR</strong> answers from the box and write the correct letter, <strong>A\u2013F</strong>, next to questions 27\u201330." },
      { blockType: "instruction" as const, content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db'>
<div><strong>A</strong> &nbsp; radio</div><div><strong>B</strong> &nbsp; council meeting</div>
<div><strong>C</strong> &nbsp; the television</div><div><strong>D</strong> &nbsp; newspaper</div>
<div><strong>E</strong> &nbsp; journal</div><div><strong>F</strong> &nbsp; the Internet</div></div>` },
      { blockType: "question" as const, questionNumber: 27, questionType: "matching" as const, questionText: "Map", options: ["A","B","C","D","E","F"], correctAnswer: "E", marks: 1 },
      { blockType: "question" as const, questionNumber: 28, questionType: "matching" as const, questionText: "Photo", options: ["A","B","C","D","E","F"], correctAnswer: "D", marks: 1 },
      { blockType: "question" as const, questionNumber: 29, questionType: "matching" as const, questionText: "Budget", options: ["A","B","C","D","E","F"], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 30, questionType: "matching" as const, questionText: "Comment", options: ["A","B","C","D","E","F"], correctAnswer: "B", marks: 1 },
    ]},
    // PART 4 — Pleasanton Town Market (Q31-40)
    { sectionNumber: 4, title: "Part 4", context: "A lecture about the history of Pleasanton Town Market.", instructions: "Questions 31\u201340", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 31\u201335</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 31, questionType: "multiple-choice" as const, questionText: "Why did the lecturer choose to focus on the Pleasanton Town Market?", options: ["A. It was the first ever Town Market.","B. It has been covered extensively in local history classes.","C. It is often mentioned in some literature of the library."], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 32, questionType: "multiple-choice" as const, questionText: "The Town Market originally made a large profit selling", options: ["A. handcrafts","B. vegetables","C. animals"], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 33, questionType: "multiple-choice" as const, questionText: "The money that the marketers made contributes to local", options: ["A. reconstruction","B. development","C. defense"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 34, questionType: "multiple-choice" as const, questionText: "Market sales plummeted due to a lack of viable", options: ["A. agriculture","B. transport","C. city planning"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 35, questionType: "multiple-choice" as const, questionText: "Mayor John C. Wiley decided the Clock tower would be used as a", options: ["A. clock","B. grounds for battle","C. jail"], correctAnswer: "C", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 36\u201340</strong><br/>Complete the table below.<br/>Write <strong>ONE WORD ONLY</strong> for each answer." },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr><th style='padding:8px;background:#f3f4f6'>Research Methods</th><th style='padding:8px;background:#f3f4f6'>Objects</th><th style='padding:8px;background:#f3f4f6'>Problems</th></tr></thead>
<tbody>
<tr><td style='padding:8px'>reference section</td><td style='padding:8px'><strong>[36]</strong></td><td style='padding:8px'>there is too much information</td></tr>
<tr><td style='padding:8px'><strong>[37]</strong></td><td style='padding:8px'>Rebellion</td><td style='padding:8px'>bias makes it <strong>[38]</strong></td></tr>
<tr><td style='padding:8px'><strong>[39]</strong></td><td style='padding:8px'>Jim Wiley</td><td style='padding:8px'>the information is insufficient</td></tr>
<tr><td style='padding:8px'>newspaper archives</td><td style='padding:8px'><strong>[40]</strong></td><td style='padding:8px'>more detail is needed</td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 36, questionType: "table-completion" as const, questionText: "~reference section \u2013 Objects: ________", correctAnswer: "market", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 37, questionType: "table-completion" as const, questionText: "~Research Methods for Rebellion: ________", correctAnswer: "interviews", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 38, questionType: "table-completion" as const, questionText: "~bias makes it ________", correctAnswer: "useless", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 39, questionType: "table-completion" as const, questionText: "~Research Methods for Jim Wiley: ________", correctAnswer: "photographs", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 40, questionType: "table-completion" as const, questionText: "~newspaper archives \u2013 Objects: ________", correctAnswer: "crime", marks: 1, wordLimit: 1 },
    ]},
  ]
};
seed();

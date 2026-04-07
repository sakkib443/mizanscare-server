import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seed() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 14 });
    if (existing) {
      await ListeningTest.findByIdAndUpdate(existing._id, data, { runValidators: false });
      console.log("\u2705 Test 14 updated!");
    } else {
      const db = mongoose.connection.db!;
      const admin = await db.collection("users").findOne({ role: "admin" });
      await ListeningTest.create({ ...data, createdBy: admin?._id || new mongoose.Types.ObjectId() });
      console.log("\u2705 Test 14 created!");
    }
    const t = await ListeningTest.findOne({ testNumber: 14 });
    if (t) { console.log(`\n\uD83D\uDCDD ${t.title}`); (t.sections as any[]).forEach((s,i) => { const qs = s.questions.filter((q:any) => q.blockType==="question"); console.log(`  Part ${i+1}: ${qs.length} questions`); }); }
    await mongoose.disconnect(); process.exit(0);
  } catch (e) { console.error("\u274C",e); process.exit(1); }
}

const data = {
  testId: "LISTENING_014", testNumber: 14,
  title: "Listening Mock Test 14 \u2013 Academic",
  description: "IELTS Academic Listening Test 14 \u2014 4 parts, 40 questions.",
  source: "IELTS Practice Test", mainAudioUrl: "", audioDuration: 1800,
  difficulty: "medium" as const, totalQuestions: 40, totalMarks: 40, duration: 40, isActive: true, usageCount: 0,
  sections: [
    // ═══ PART 1 — Client Details / Job Agency (Q1–10) ═══
    { sectionNumber: 1, title: "Part 1", context: "A job agency interview for Andrew Peterson.", instructions: "Questions 1\u201310", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 1\u20137</strong><br/>Complete the form.<br/>Write <strong>NO MORE THAN TWO WORDS OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>Client Details</strong>" },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'>
<tbody>
<tr style='background:#f3f4f6'><td style='padding:8px;width:50%'>Name:</td><td style='padding:8px'>Andrew Peterson <em>(Example)</em></td></tr>
<tr><td style='padding:8px'>Educational Qualification:</td><td style='padding:8px'>Degree in <strong>[1]</strong></td></tr>
<tr><td style='padding:8px'>Previous Job:</td><td style='padding:8px'><strong>[2]</strong></td></tr>
<tr><td style='padding:8px'>Hobbies:</td><td style='padding:8px'><strong>[3]</strong></td></tr>
<tr><td style='padding:8px'>Main Skills:</td><td style='padding:8px'><strong>[4]</strong></td></tr>
<tr><td style='padding:8px'>Expected Salary ($):</td><td style='padding:8px'><strong>[5]</strong></td></tr>
<tr><td style='padding:8px'>Can start:</td><td style='padding:8px'><strong>[6]</strong></td></tr>
<tr><td style='padding:8px'>Other languages:</td><td style='padding:8px'><strong>[7]</strong></td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const, questionText: "~Educational Qualification: Degree in ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const, questionText: "~Previous Job: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const, questionText: "~Hobbies: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const, questionText: "~Main Skills: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const, questionText: "~Expected Salary ($): ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const, questionText: "~Can start: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 7, questionType: "form-completion" as const, questionText: "~Other languages: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      // Q8-10: Multi-MCQ
      { blockType: "instruction" as const, content: "<strong>Questions 8\u201310</strong><br/>Choose <strong>THREE</strong> letters from the list, <strong>A\u2013G</strong>.<br/>Which <strong>THREE</strong> qualities do employers most value in their staff?" },
      { blockType: "question" as const, questionNumber: 8, questionType: "multiple-choice-multi" as const, questionText: "Which THREE qualities do employers most value?", options: ["A. Problem-solving skills","B. Diligence","C. Experience","D. Flexible hours","E. Independent thinking","F. Good personality","G. Qualifications"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 9, questionType: "multiple-choice-multi" as const, questionText: "Which THREE qualities do employers most value?", options: ["A. Problem-solving skills","B. Diligence","C. Experience","D. Flexible hours","E. Independent thinking","F. Good personality","G. Qualifications"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 10, questionType: "multiple-choice-multi" as const, questionText: "Which THREE qualities do employers most value?", options: ["A. Problem-solving skills","B. Diligence","C. Experience","D. Flexible hours","E. Independent thinking","F. Good personality","G. Qualifications"], correctAnswer: "TBD", marks: 1 },
    ]},

    // ═══ PART 2 — Fitness Centre (Q11–20) ═══
    { sectionNumber: 2, title: "Part 2", context: "Information about a fitness centre.", instructions: "Questions 11\u201320", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 11\u201315</strong><br/>Answer the questions.<br/>Write <strong>ONE WORD ONLY</strong> for each answer." },
      { blockType: "question" as const, questionNumber: 11, questionType: "short-answer" as const, questionText: "~What does the centre provide first?", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 12, questionType: "short-answer" as const, questionText: "~What is important to control?", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 13, questionType: "short-answer" as const, questionText: "~What will be used to assess member\u2019s fitness level?", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 14, questionType: "short-answer" as const, questionText: "~How often is the exercise schedule reviewed?", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      { blockType: "question" as const, questionNumber: 15, questionType: "short-answer" as const, questionText: "~How many exercise programs are available?", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      // Q16-20: Matching A-G
      { blockType: "instruction" as const, content: "<strong>Questions 16\u201320</strong><br/>Write the correct letter, <strong>A\u2013G</strong>, next to the questions.<br/><strong>Which place is best for</strong>" },
      { blockType: "instruction" as const, content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db'>
<div><strong>A</strong> &nbsp; jogging machines</div><div><strong>B</strong> &nbsp; Yoga studio</div>
<div><strong>C</strong> &nbsp; Weight units</div><div><strong>D</strong> &nbsp; Front-desk area</div>
<div><strong>E</strong> &nbsp; Squash courts</div><div><strong>F</strong> &nbsp; Shower blocks</div>
<div><strong>G</strong> &nbsp; Swimming pool</div></div>` },
      { blockType: "question" as const, questionNumber: 16, questionType: "matching" as const, questionText: "developing confidence?", options: ["A","B","C","D","E","F","G"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 17, questionType: "matching" as const, questionText: "reducing stress?", options: ["A","B","C","D","E","F","G"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 18, questionType: "matching" as const, questionText: "building fitness?", options: ["A","B","C","D","E","F","G"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 19, questionType: "matching" as const, questionText: "meeting others?", options: ["A","B","C","D","E","F","G"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 20, questionType: "matching" as const, questionText: "finding information?", options: ["A","B","C","D","E","F","G"], correctAnswer: "TBD", marks: 1 },
    ]},

    // ═══ PART 3 — Job Candidates (Q21–30) ═══
    { sectionNumber: 3, title: "Part 3", context: "A discussion about a job position and candidates.", instructions: "Questions 21\u201330", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 21\u201325</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const, questionText: "The position needs someone good at", options: ["A. Computers.","B. Dealing with people.","C. Arts."], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const, questionText: "The directors will select someone from the faculty of", options: ["A. Arts.","B. Computing.","C. Business."], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice" as const, questionText: "The position will require the person to", options: ["A. Work long hours.","B. Train others.","C. Do weekend work."], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 24, questionType: "multiple-choice" as const, questionText: "The position will come with a", options: ["A. Car.","B. Parking space.","C. Much better salary."], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 25, questionType: "multiple-choice" as const, questionText: "The best aspect of the job is it", options: ["A. Gives more responsibility.","B. Comes with a private office.","C. Is a step to higher positions"], correctAnswer: "TBD", marks: 1 },
      // Q26-30: Table completion
      { blockType: "instruction" as const, content: "<strong>Questions 26\u201330</strong><br/>Complete the table.<br/>Write <strong>NO MORE THAN TWO WORDS OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr><th style='padding:8px;background:#f3f4f6'>Candidates</th><th style='padding:8px;background:#f3f4f6'>Steven</th><th style='padding:8px;background:#f3f4f6'>Abdul</th><th style='padding:8px;background:#f3f4f6'>Lek</th><th style='padding:8px;background:#f3f4f6'>Oscar</th></tr></thead>
<tbody>
<tr><td style='padding:8px;font-weight:bold'>Years of Experience</td><td style='padding:8px'><strong>[26]</strong></td><td style='padding:8px'>7</td><td style='padding:8px'>8</td><td style='padding:8px'>12</td></tr>
<tr><td style='padding:8px;font-weight:bold'>Qualification</td><td style='padding:8px'>MBA</td><td style='padding:8px'><strong>[27]</strong></td><td style='padding:8px'>degree</td><td style='padding:8px'>Certificates</td></tr>
<tr><td style='padding:8px;font-weight:bold'>Possible Concerns</td><td style='padding:8px'><strong>[28]</strong></td><td style='padding:8px'>limited English</td><td style='padding:8px'><strong>[29]</strong></td><td style='padding:8px'><strong>[30]</strong></td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 26, questionType: "table-completion" as const, questionText: "~Steven \u2013 Years of Experience: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 27, questionType: "table-completion" as const, questionText: "~Abdul \u2013 Qualification: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 28, questionType: "table-completion" as const, questionText: "~Steven \u2013 Possible Concerns: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 29, questionType: "table-completion" as const, questionText: "~Lek \u2013 Possible Concerns: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 30, questionType: "table-completion" as const, questionText: "~Oscar \u2013 Possible Concerns: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
    ]},

    // ═══ PART 4 — Caves (Q31–40) ═══
    { sectionNumber: 4, title: "Part 4", context: "A lecture about cave formation and exploration.", instructions: "Questions 31\u201340", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 31\u201333</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 31, questionType: "multiple-choice" as const, questionText: "Caves are", options: ["A. Often ignored.","B. Mostly in remote areas.","C. Often difficult to explore."], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 32, questionType: "multiple-choice" as const, questionText: "People who explore caves", options: ["A. Mostly need to know about cartography","B. Enjoy overcoming the difficulties.","C. Usually know about cave sciences."], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 33, questionType: "multiple-choice" as const, questionText: "China has", options: ["A. Probably the most undiscovered caves.","B. A growing number of cave explorers.","C. Some of the best documented caves."], correctAnswer: "TBD", marks: 1 },
      // Q34-40: Note completion
      { blockType: "instruction" as const, content: "<strong>Questions 34\u201340</strong><br/>Complete the table and notes.<br/>Write <strong>NO MORE THAN TWO WORDS OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>Three Main Reasons for Cave Formation</strong>" },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr><th style='padding:8px;background:#f3f4f6'>Dissolution</th><th style='padding:8px;background:#f3f4f6'>Volcanic Lava Tubes</th><th style='padding:8px;background:#f3f4f6'>Action of Waves</th></tr></thead>
<tbody><tr>
<td style='padding:8px'>mainly involves <strong>[34]</strong></td>
<td style='padding:8px'>topmost surface cools down and <strong>[35]</strong> hotter lava continue to flow beneath</td>
<td style='padding:8px'>waves pound into cliffs then erode into <strong>[36]</strong> or less rigid rocks</td>
</tr></tbody></table>` },
      { blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const, questionText: "~Dissolution mainly involves ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const, questionText: "~topmost surface cools down and ________ hotter lava continue to flow beneath", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const, questionText: "~waves pound into cliffs then erode into ________ or less rigid rocks", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<strong>Limestone caves</strong>" },
      { blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const, questionText: "often have formations made of ________ carbonate", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const, questionText: "e.g. stalactites, stalagmites, and ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "e.g. <strong>Lechuguilla</strong>" },
      { blockType: "question" as const, questionNumber: 39, questionType: "note-completion" as const, questionText: "finally revealed in ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 40, questionType: "note-completion" as const, questionText: "interestingly, formed from the ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
    ]},
  ]
};

seed();

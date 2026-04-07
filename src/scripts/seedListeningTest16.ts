import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seed() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 16 });
    if (existing) { await ListeningTest.findByIdAndUpdate(existing._id, data, { runValidators: false }); console.log("\u2705 Test 16 updated!"); }
    else { const db = mongoose.connection.db!; const admin = await db.collection("users").findOne({ role: "admin" }); await ListeningTest.create({ ...data, createdBy: admin?._id || new mongoose.Types.ObjectId() }); console.log("\u2705 Test 16 created!"); }
    const t = await ListeningTest.findOne({ testNumber: 16 });
    if (t) { console.log(`\n\uD83D\uDCDD ${t.title}`); (t.sections as any[]).forEach((s,i) => { const qs = s.questions.filter((q:any) => q.blockType==="question"); console.log(`  Part ${i+1}: ${qs.length} questions`); }); }
    await mongoose.disconnect(); process.exit(0);
  } catch (e) { console.error("\u274C",e); process.exit(1); }
}

const data = {
  testId: "LISTENING_016", testNumber: 16,
  title: "Listening Mock Test 16 \u2013 Academic",
  description: "IELTS Academic Listening Test 16 \u2014 4 parts, 40 questions.",
  source: "IELTS Practice Test", mainAudioUrl: "", audioDuration: 1800,
  difficulty: "medium" as const, totalQuestions: 40, totalMarks: 40, duration: 40, isActive: true, usageCount: 0,
  sections: [
    // ═══ SECTION 1 — Travel Agency (Q1–10) ═══
    { sectionNumber: 1, title: "Part 1", context: "Enquiry about a day tour at a travel agency.", instructions: "Questions 1\u201310", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 1\u20137</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>TRAVEL AGENCY</strong>" },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'><tbody>
<tr style='background:#f3f4f6'><td style='padding:8px;width:45%'>Name of tour:</td><td style='padding:8px'>Magic One Day <em>(Example)</em></td></tr>
<tr><td style='padding:8px'>Departure time:</td><td style='padding:8px'><strong>[1]</strong> on Saturdays</td></tr>
<tr><td style='padding:8px'>Return time:</td><td style='padding:8px'>6:00 p.m.</td></tr>
<tr><td style='padding:8px'>Transportation:</td><td style='padding:8px'><strong>[2]</strong> or minibus</td></tr>
<tr><td style='padding:8px'>Group size:</td><td style='padding:8px'>15\u201325 tourists</td></tr>
<tr><td style='padding:8px'>Cost:</td><td style='padding:8px'><strong>[3]</strong> per person including <strong>[4]</strong></td></tr>
<tr><td style='padding:8px'>Peak season:</td><td style='padding:8px'>tourists need to <strong>[5]</strong> 2 days ahead</td></tr>
<tr><td style='padding:8px'>Payment:</td><td style='padding:8px'><strong>[6]</strong></td></tr>
<tr><td style='padding:8px'>Reference number of tour:</td><td style='padding:8px'><strong>[7]</strong></td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const, questionText: "~Departure time: ________ on Saturdays", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const, questionText: "~Transportation: ________ or minibus", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const, questionText: "~Cost: ________ per person", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const, questionText: "~Cost includes: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const, questionText: "~Peak season: need to ________ 2 days ahead", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const, questionText: "~Payment: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 7, questionType: "form-completion" as const, questionText: "~Reference number of tour: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "instruction" as const, content: "<strong>Questions 8\u201310</strong><br/>Choose <strong>THREE</strong> letters, <strong>A\u2013G</strong>.<br/>Which THREE attractions can tourists visit at present in Edinburgh?" },
      { blockType: "question" as const, questionNumber: 8, questionType: "multiple-choice-multi" as const, questionText: "Which THREE attractions can tourists visit in Edinburgh?", options: ["A. City Hall","B. Old Castles","C. Zoo","D. Art Studio","E. Royal Palace","F. Seabird Centre","G. Aquarium"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 9, questionType: "multiple-choice-multi" as const, questionText: "Which THREE attractions can tourists visit in Edinburgh?", options: ["A. City Hall","B. Old Castles","C. Zoo","D. Art Studio","E. Royal Palace","F. Seabird Centre","G. Aquarium"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 10, questionType: "multiple-choice-multi" as const, questionText: "Which THREE attractions can tourists visit in Edinburgh?", options: ["A. City Hall","B. Old Castles","C. Zoo","D. Art Studio","E. Royal Palace","F. Seabird Centre","G. Aquarium"], correctAnswer: "TBD", marks: 1 },
    ]},

    // ═══ SECTION 2 — Campus Clinic (Q11–20) ═══
    { sectionNumber: 2, title: "Part 2", context: "A campus clinic visit.", instructions: "Questions 11\u201320", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 11\u201315</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>CAMPUS CLINIC</strong>" },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'><tbody>
<tr><td style='padding:8px;width:40%'>Patient\u2019s name:</td><td style='padding:8px'>Mary Nixon</td></tr>
<tr><td style='padding:8px'>Faculty</td><td style='padding:8px'><strong>[11]</strong></td></tr>
<tr><td style='padding:8px'>Registered No.</td><td style='padding:8px'><strong>[12]</strong></td></tr>
<tr><td style='padding:8px'>Date of birth:</td><td style='padding:8px'>20th November, 1987</td></tr>
<tr><td style='padding:8px'>Nationality:</td><td style='padding:8px'><strong>[13]</strong></td></tr>
<tr><td style='padding:8px'>Address:</td><td style='padding:8px'><strong>[14]</strong></td></tr>
<tr><td style='padding:8px'>Case history:</td><td style='padding:8px'><strong>[15]</strong></td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 11, questionType: "form-completion" as const, questionText: "~Faculty: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 12, questionType: "form-completion" as const, questionText: "~Registered No.: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 13, questionType: "form-completion" as const, questionText: "~Nationality: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 14, questionType: "form-completion" as const, questionText: "~Address: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 15, questionType: "form-completion" as const, questionText: "~Case history: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "instruction" as const, content: "<strong>Questions 16\u201318</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 16, questionType: "multiple-choice" as const, questionText: "Which of these describes Mary\u2019s problem?", options: ["A. sneeze","B. sore throat","C. nausea"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 17, questionType: "multiple-choice" as const, questionText: "How long does Mary\u2019s symptom last?", options: ["A. one week","B. two weeks","C. three weeks"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 18, questionType: "multiple-choice" as const, questionText: "What\u2019s wrong with Mary according to the doctor?", options: ["A. She got a headache.","B. She got an allergy.","C. She was exhausted."], correctAnswer: "TBD", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 19 and 20</strong><br/>Choose <strong>TWO</strong> letters, <strong>A\u2013E</strong>.<br/>Which <strong>TWO</strong> things does the doctor suggest?" },
      { blockType: "question" as const, questionNumber: 19, questionType: "multiple-choice-multi" as const, questionText: "Which TWO things does the doctor suggest?", options: ["A. to have a rest at home","B. to have a check-in a hospital","C. to stop eating seafood","D. to eat more fruits","E. to take some medicine"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 20, questionType: "multiple-choice-multi" as const, questionText: "Which TWO things does the doctor suggest?", options: ["A. to have a rest at home","B. to have a check-in a hospital","C. to stop eating seafood","D. to eat more fruits","E. to take some medicine"], correctAnswer: "TBD", marks: 1 },
    ]},

    // ═══ SECTION 3 — Postgraduate Course (Q21–30) ═══
    { sectionNumber: 3, title: "Part 3", context: "An orientation meeting about a postgraduate course.", instructions: "Questions 21\u201330", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 21\u201325</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const, questionText: "The orientation meeting", options: ["A. took place last term.","B. will take place next month.","C. took place last week."], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const, questionText: "How many lectures will a student have in a week?", options: ["A. one","B. two","C. three"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice" as const, questionText: "The number of students in one group is", options: ["A. 2\u20133","B. 3\u20135","C. 5\u20136"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 24, questionType: "multiple-choice" as const, questionText: "Who will give the group a mark according to its representative\u2019s presentation?", options: ["A. subject advisor","B. tutor","C. dean"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 25, questionType: "multiple-choice" as const, questionText: "According to the lecturer, postgraduate course is", options: ["A. relaxed","B. intensive","C. interesting"], correctAnswer: "TBD", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 26\u201330</strong><br/>Answer the questions below.<br/>Write <strong>NO MORE THAN THREE</strong> words for each answer." },
      { blockType: "question" as const, questionNumber: 26, questionType: "short-answer" as const, questionText: "~What\u2019s the main assessment of course?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 27, questionType: "short-answer" as const, questionText: "~Who can choose the topic of the essay?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 28, questionType: "short-answer" as const, questionText: "~Where can students find their tutors\u2019 names?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 29, questionType: "short-answer" as const, questionText: "~What should students use when they borrow materials from the library?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 30, questionType: "short-answer" as const, questionText: "~Where can students get the username and password?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
    ]},

    // ═══ SECTION 4 — Sloth (Q31–40) ═══
    { sectionNumber: 4, title: "Part 4", context: "A lecture about sloths.", instructions: "Questions 31\u201340", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 31 and 32</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>." },
      { blockType: "question" as const, questionNumber: 31, questionType: "multiple-choice" as const, questionText: "Which of the following animals is the slowest?", options: ["A. koala","B. sloth","C. tortoise"], correctAnswer: "TBD", marks: 1 },
      { blockType: "question" as const, questionNumber: 32, questionType: "multiple-choice" as const, questionText: "What do algae reward sloth?", options: ["A. skin","B. protection","C. nutrition"], correctAnswer: "TBD", marks: 1 },
      { blockType: "instruction" as const, content: "<strong>Questions 33\u201338</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>THE LIVES OF SLOTH</strong>" },
      { blockType: "question" as const, questionNumber: 33, questionType: "note-completion" as const, questionText: "Sloth has a short snout, big round eyes, a ________ tail, and small ears", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const, questionText: "The favorite activity of sloth is to ________ on trees", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const, questionText: "Sloth is also classified as ________ just like horses and cattle", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const, questionText: "Average body temperature of sloth is ________ Fahrenheit", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const, questionText: "________ will affect sloth\u2019s body temperature", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const, questionText: "Sloths get everything on tree, even ________ which comes from juicy leaves and morning dew", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "instruction" as const, content: "<strong>Questions 39 and 40</strong><br/>Answer the questions below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "question" as const, questionNumber: 39, questionType: "short-answer" as const, questionText: "~How long does sloth digest its food?", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 40, questionType: "short-answer" as const, questionText: "~What substance can help to resolve food in sloth\u2019s stomach?", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
    ]},
  ]
};

seed();

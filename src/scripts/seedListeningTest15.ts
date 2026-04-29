import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seed() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 15 });
    if (existing) {
      await ListeningTest.findByIdAndUpdate(existing._id, data, { runValidators: false });
      console.log("\u2705 Test 15 updated!");
    } else {
      const db = mongoose.connection.db!;
      const admin = await db.collection("users").findOne({ role: "admin" });
      await ListeningTest.create({ ...data, createdBy: admin?._id || new mongoose.Types.ObjectId() });
      console.log("\u2705 Test 15 created!");
    }
    const t = await ListeningTest.findOne({ testNumber: 15 });
    if (t) { console.log(`\n\uD83D\uDCDD ${t.title}`); (t.sections as any[]).forEach((s,i) => { const qs = s.questions.filter((q:any) => q.blockType==="question"); console.log(`  Part ${i+1}: ${qs.length} questions`); }); }
    await mongoose.disconnect(); process.exit(0);
  } catch (e) { console.error("\u274C",e); process.exit(1); }
}

const data = {
  testId: "LISTENING_015", testNumber: 15,
  title: "Listening Mock Test 15 \u2013 Academic",
  description: "IELTS Academic Listening Test 15 \u2014 4 parts, 40 questions.",
  source: "IELTS Practice Test", mainAudioUrl: "", audioDuration: 1800,
  difficulty: "medium" as const, totalQuestions: 40, totalMarks: 40, duration: 40, isActive: true, usageCount: 0,
  sections: [
    // \u2550\u2550\u2550 PART 1 \u2014 Product Incident Report + Customer Information (Q1\u201310) \u2550\u2550\u2550
    { sectionNumber: 1, title: "Part 1", context: "A customer reports a product incident and provides their information.", instructions: "Questions 1\u201310", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 1\u20134</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>Product Incident Report</strong>" },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'>
<tbody>
<tr style='background:#f3f4f6'><td style='padding:8px;width:45%'>Product:</td><td style='padding:8px'>rice cooker <em>(Example)</em></td></tr>
<tr><td style='padding:8px'>Model Number:</td><td style='padding:8px'><strong>[1]</strong></td></tr>
<tr><td style='padding:8px'>Price of the Product:</td><td style='padding:8px'>\u00a3<strong>[2]</strong></td></tr>
<tr><td style='padding:8px'>Name of the Branch:</td><td style='padding:8px'><strong>[3]</strong></td></tr>
<tr><td style='padding:8px'>Problem:</td><td style='padding:8px'><strong>[4]</strong></td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const, questionText: "~Model Number: ________", correctAnswer: "R242", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const, questionText: "~Price of the Product: \u00a3________", correctAnswer: "89.99", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const, questionText: "~Name of the Branch: ________", correctAnswer: "City Center", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const, questionText: "~Problem: ________", correctAnswer: "steam escaping", marks: 1, wordLimit: 2 },
      // Q5-10
      { blockType: "instruction" as const, content: "<strong>Questions 5\u201310</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>CUSTOMER\u2019S INFORMATION DETAILS</strong>" },
      { blockType: "instruction" as const, content: `<table border='1' style='border-collapse:collapse;width:100%'>
<tbody>
<tr style='background:#f3f4f6'><td style='padding:8px;width:45%'>Name:</td><td style='padding:8px'>Herbert Hewitt</td></tr>
<tr><td style='padding:8px'>Address:</td><td style='padding:8px'><strong>[5]</strong></td></tr>
<tr><td style='padding:8px'>Postcode:</td><td style='padding:8px'><strong>[6]</strong></td></tr>
<tr><td style='padding:8px'>Method of payment:</td><td style='padding:8px'><strong>[7]</strong></td></tr>
<tr><td style='padding:8px'>Card\u2019s Expiry Date:</td><td style='padding:8px'><strong>[8]</strong></td></tr>
<tr><td style='padding:8px'>Method of Compensation:</td><td style='padding:8px'><strong>[9]</strong></td></tr>
<tr><td style='padding:8px'>Shopping Frequency:</td><td style='padding:8px'><strong>[10]</strong></td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const, questionText: "~Address: ________", correctAnswer: "84 Park Rd", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const, questionText: "~Postcode: ________", correctAnswer: "B0241DJ", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 7, questionType: "form-completion" as const, questionText: "~Method of payment: ________", correctAnswer: "credit card", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 8, questionType: "form-completion" as const, questionText: "~Card\u2019s Expiry Date: ________", correctAnswer: "April 2008", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 9, questionType: "form-completion" as const, questionText: "~Method of Compensation: ________", correctAnswer: "refund", marks: 1, wordLimit: 3 },
      { blockType: "question" as const, questionNumber: 10, questionType: "form-completion" as const, questionText: "~Shopping Frequency: ________", correctAnswer: "once a month", marks: 1, wordLimit: 3 },
    ]},

    // \u2550\u2550\u2550 PART 2 \u2014 University Map + Dormitory Rules (Q11\u201320) \u2550\u2550\u2550
    { sectionNumber: 2, title: "Part 2", context: "A tour of the university campus and dormitory information.", instructions: "Questions 11\u201320", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 11\u201315</strong><br/>Listen to the directions and match the places in questions 11\u201315 to the appropriate place among <strong>A\u2013E</strong> on the map." },
      { blockType: "instruction" as const, content: "<div style='text-align:center;margin:10px 0'><img src='/images/listening/test15-part2-map.png' alt='University campus map with locations A through E' style='max-width:100%;max-height:480px;border:1px solid #d1d5db;border-radius:4px' /></div>" },
      { blockType: "question" as const, questionNumber: 11, questionType: "map-labeling" as const, questionText: "Student Centre", options: ["A","B","C","D","E"], correctAnswer: "E", marks: 1 },
      { blockType: "question" as const, questionNumber: 12, questionType: "map-labeling" as const, questionText: "Health Centre", options: ["A","B","C","D","E"], correctAnswer: "A", marks: 1 },
      { blockType: "question" as const, questionNumber: 13, questionType: "map-labeling" as const, questionText: "Internet Unit", options: ["A","B","C","D","E"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 14, questionType: "map-labeling" as const, questionText: "Complaint Office", options: ["A","B","C","D","E"], correctAnswer: "D", marks: 1 },
      { blockType: "question" as const, questionNumber: 15, questionType: "map-labeling" as const, questionText: "Caf\u00e9", options: ["A","B","C","D","E"], correctAnswer: "C", marks: 1 },
      // Q16-20: Sentence completion
      { blockType: "instruction" as const, content: "<strong>Questions 16\u201320</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "question" as const, questionNumber: 16, questionType: "sentence-completion" as const, questionText: "Students in a room don\u2019t need to share a ________ with ones in other rooms.", correctAnswer: "bathroom", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 17, questionType: "sentence-completion" as const, questionText: "Everyone has to write down his name on the ________.", correctAnswer: "food containers", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 18, questionType: "sentence-completion" as const, questionText: "All the students use a ________ to enter the dorm's front door.", correctAnswer: "code", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 19, questionType: "sentence-completion" as const, questionText: "If you want to wash your clothes, go to the laundry room which is located in the ________.", correctAnswer: "basement", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 20, questionType: "sentence-completion" as const, questionText: "The dormitory closes at ________ every night.", correctAnswer: "11:30", marks: 1, wordLimit: 2 },
    ]},

    // \u2550\u2550\u2550 PART 3 \u2014 Sales Research Discussion (Q21\u201330) \u2550\u2550\u2550
    { sectionNumber: 3, title: "Part 3", context: "A discussion between students Betty and Bruce about a marketing research project.", instructions: "Questions 21\u201330", audioUrl: "", questions: [
      // Q21-22: Chart MCQ
      { blockType: "instruction" as const, content: "<strong>Questions 21\u201322</strong><br/>Choose the correct letters, <strong>A\u2013C</strong>, and write each next to questions 21 and 22.<br/>According to Betty, which lines describe the sales of both cheese and oil in New Zealand and Colombia?" },
      { blockType: "instruction" as const, content: "<div style='text-align:center;margin:10px 0'><img src='/images/listening/test15-part3-chart.jpeg' alt='Sales volume chart with three lines labeled A, B, C over the year' style='max-width:100%;max-height:380px;border:1px solid #d1d5db;border-radius:4px' /></div>" },
      { blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const, questionText: "Sales of cheese and oil in New Zealand", options: ["A","B","C"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const, questionText: "Sales of cheese and oil in Colombia", options: ["A","B","C"], correctAnswer: "C", marks: 1 },
      // Q23-24: Multi-MCQ A-E
      { blockType: "instruction" as const, content: "<strong>Questions 23\u201324</strong><br/>Write the correct letters, <strong>A\u2013E</strong>, next to questions 23\u201324.<br/>Which <strong>TWO</strong> of the following are sales strategies for chocolate in Italy and Germany?" },
      { blockType: "instruction" as const, content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db'>
<div><strong>A</strong> &nbsp; Locate near a children\u2019s school</div>
<div><strong>B</strong> &nbsp; Change the location of the product on shelves</div>
<div><strong>C</strong> &nbsp; Give a free gift</div>
<div><strong>D</strong> &nbsp; Make it the cheapest brand</div>
<div><strong>E</strong> &nbsp; Make Schmutzig the second cheapest brand</div>
</div>` },
      { blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice-multi" as const, questionText: "Which TWO are sales strategies for chocolate in Italy and Germany?", options: ["A. Locate near a children\u2019s school","B. Change the location of the product on shelves","C. Give a free gift","D. Make it the cheapest brand","E. Make Schmutzig the second cheapest brand"], correctAnswer: "B", marks: 1 },
      { blockType: "question" as const, questionNumber: 24, questionType: "multiple-choice-multi" as const, questionText: "Which TWO are sales strategies for chocolate in Italy and Germany?", options: ["A. Locate near a children\u2019s school","B. Change the location of the product on shelves","C. Give a free gift","D. Make it the cheapest brand","E. Make Schmutzig the second cheapest brand"], correctAnswer: "E", marks: 1 },
      // Q25-30: Research plan completion
      { blockType: "instruction" as const, content: "<strong>Questions 25\u201330</strong><br/>Complete the table below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer." },
      { blockType: "instruction" as const, content: `<div style='margin:8px 0;padding:12px;border:1px solid #d1d5db;border-radius:4px'>
<div style='font-weight:bold;margin-bottom:8px'>Research plan</div>
<div style='margin:6px 0'>Betty is interested in how <strong>[25]</strong> affects the sales of cosmetics and <strong>[26]</strong>.</div>
<div style='margin:6px 0'>Bruce is going to be concerned with how <strong>[27]</strong> may impact on sales of cookies and the relationships among <strong>[28]</strong>, <strong>[29]</strong>, and sales.</div>
<div style='margin:6px 0'>The professor advised the students to bear in mind the extensions of <strong>[30]</strong>.</div>
</div>` },
      { blockType: "question" as const, questionNumber: 25, questionType: "table-completion" as const, questionText: "~Betty \u2013 affects sales of cosmetics: ________", correctAnswer: "colour", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 26, questionType: "table-completion" as const, questionText: "~Betty \u2013 also studies: ________", correctAnswer: "cleaning products", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 27, questionType: "table-completion" as const, questionText: "~Bruce \u2013 impact on cookie sales: ________", correctAnswer: "containers", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 28, questionType: "table-completion" as const, questionText: "~Bruce \u2013 relationship factor 1: ________", correctAnswer: "materials", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 29, questionType: "table-completion" as const, questionText: "~Bruce \u2013 relationship factor 2: ________", correctAnswer: "image", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 30, questionType: "table-completion" as const, questionText: "~Professor's advice \u2013 extensions of: ________", correctAnswer: "advertisement", marks: 1, wordLimit: 2 },
    ]},

    // \u2550\u2550\u2550 PART 4 \u2014 History of Bikes (Q31\u201340) \u2550\u2550\u2550
    { sectionNumber: 4, title: "Part 4", context: "A lecture on the history of bicycles.", instructions: "Questions 31\u201340", audioUrl: "", questions: [
      { blockType: "instruction" as const, content: "<strong>Questions 31\u201337</strong><br/>Complete the table below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },
      { blockType: "instruction" as const, content: "<strong>Talking about the history of bikes</strong>" },
      { blockType: "instruction" as const, content: `<style>
.ct-wide{table-layout:fixed!important;font-size:13px!important}
.ct-wide th,.ct-wide td{padding:6px!important;word-break:break-word;overflow-wrap:break-word;vertical-align:top}
.ct-wide .embedded-q-input{min-width:40px!important;max-width:100%;width:90%}
.ct-wide .embedded-q-wrapper{white-space:normal!important;display:inline-flex;margin:0 2px}
</style>
<table border='1' class='ct-wide' style='border-collapse:collapse;width:100%'>
<colgroup><col style='width:14%'/><col style='width:28%'/><col style='width:30%'/><col style='width:28%'/></colgroup>
<thead><tr>
<th style='background:#f3f4f6'>Years/Time</th>
<th style='background:#f3f4f6'>Feature</th>
<th style='background:#f3f4f6'>Advantage</th>
<th style='background:#f3f4f6'>Disadvantage</th>
</tr></thead>
<tbody>
<tr><td style='font-weight:bold'>1830s</td><td>wooden wheels covered with metal</td><td>need <strong>[31]</strong> than walking</td><td>quite <strong>[32]</strong></td></tr>
<tr><td style='font-weight:bold'><strong>[33]</strong></td><td>Chain and sprocket are <strong>[34]</strong></td><td>easier and <strong>[35]</strong> ride</td><td>harder to balance</td></tr>
<tr><td style='font-weight:bold'>1880s</td><td>use <strong>[36]</strong></td><td>more comfortable</td><td>The faster you go, the more you feel every bump.</td></tr>
<tr><td style='font-weight:bold'>1890s</td><td>equal-sized wheels</td><td><strong>[37]</strong></td><td>dangerous before brakes appeared</td></tr>
</tbody></table>` },
      { blockType: "question" as const, questionNumber: 31, questionType: "table-completion" as const, questionText: "~1830s \u2013 Advantage: need ________ than walking", correctAnswer: "less effort", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 32, questionType: "table-completion" as const, questionText: "~1830s \u2013 Disadvantage: quite ________", correctAnswer: "uncomfortable", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 33, questionType: "table-completion" as const, questionText: "~Years/Time: ________", correctAnswer: "1860s", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 34, questionType: "table-completion" as const, questionText: "~Feature: Chain and sprocket are ________", correctAnswer: "connected", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 35, questionType: "table-completion" as const, questionText: "~Advantage: easier and ________ ride", correctAnswer: "more smoothly", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 36, questionType: "table-completion" as const, questionText: "~1880s \u2013 Feature: use ________", correctAnswer: "rubber wheels", marks: 1, wordLimit: 2 },
      { blockType: "question" as const, questionNumber: 37, questionType: "table-completion" as const, questionText: "~1890s \u2013 Advantage: ________", correctAnswer: "safer", marks: 1, wordLimit: 2 },
      // Q38-40: Multi-MCQ THREE of A-F
      { blockType: "instruction" as const, content: "<strong>Questions 38\u201340</strong><br/>Choose <strong>THREE</strong> letters, <strong>A\u2013F</strong>, and write them next to questions 38\u201340.<br/>The invention of different gears on a bicycle affected which <strong>THREE</strong> of the following?" },
      { blockType: "question" as const, questionNumber: 38, questionType: "multiple-choice-multi" as const, questionText: "The invention of different gears on a bicycle affected which THREE?", options: ["A. Wheel size","B. Balance","C. Rate of speed","D. The back wheel","E. Safety","F. Downhill travel"], correctAnswer: "C", marks: 1 },
      { blockType: "question" as const, questionNumber: 39, questionType: "multiple-choice-multi" as const, questionText: "The invention of different gears on a bicycle affected which THREE?", options: ["A. Wheel size","B. Balance","C. Rate of speed","D. The back wheel","E. Safety","F. Downhill travel"], correctAnswer: "D", marks: 1 },
      { blockType: "question" as const, questionNumber: 40, questionType: "multiple-choice-multi" as const, questionText: "The invention of different gears on a bicycle affected which THREE?", options: ["A. Wheel size","B. Balance","C. Rate of speed","D. The back wheel","E. Safety","F. Downhill travel"], correctAnswer: "F", marks: 1 },
    ]},
  ]
};

seed();

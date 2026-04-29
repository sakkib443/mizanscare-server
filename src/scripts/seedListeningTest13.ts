import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest13() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 13 });
    if (existing) {
      await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
      console.log("\u2705 Listening Test 13 updated!");
    } else {
      const db = mongoose.connection.db!;
      const adminUser = await db.collection("users").findOne({ role: "admin" });
      const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
      await ListeningTest.create({ ...listeningTestData, createdBy });
      console.log("\u2705 Listening Test 13 created!");
    }
    const test = await ListeningTest.findOne({ testNumber: 13 });
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
  testId: "LISTENING_013",
  testNumber: 13,
  title: "Listening Mock Test 13 \u2013 Academic",
  description: "IELTS Academic Listening Test 13 \u2014 4 parts, 40 questions.",
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
    // ═══ PART 1 — Market List (Q1–10) ═══
    {
      sectionNumber: 1,
      title: "Part 1",
      context: "A conversation about street markets in London.",
      instructions: "Questions 1\u201310",
      audioUrl: "",
      questions: [
        // Q1-7: Table completion
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 1\u20137</strong><br/>Listen to a conversation and complete the market list below. Write <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: "<strong>MARKET LIST</strong>"
        },
        {
          blockType: "instruction" as const,
          content: `<style>
.ct-wide{table-layout:fixed!important;font-size:13px!important}
.ct-wide th,.ct-wide td{padding:6px!important;word-break:break-word;overflow-wrap:break-word;vertical-align:top}
.ct-wide .embedded-q-input{min-width:40px!important;max-width:100%;width:90%}
.ct-wide .embedded-q-wrapper{white-space:normal!important;display:inline-flex;margin:0 2px}
</style>
<table border='1' class='ct-wide' style='border-collapse:collapse;width:100%'>
<colgroup><col style='width:26%'/><col style='width:22%'/><col style='width:28%'/><col style='width:24%'/></colgroup>
<thead><tr>
<th style='background:#f3f4f6'>Address</th>
<th style='background:#f3f4f6'>Open Hours</th>
<th style='background:#f3f4f6'>Days</th>
<th style='background:#f3f4f6'>Tube Station</th>
</tr></thead>
<tbody>
<tr style='background:#f9fafb'><td>East Street SE17</td><td>8 a.m.\u20135 p.m.</td><td>Sat & Tue.</td><td>Castle</td></tr>
<tr><td>Leather Lane WC1</td><td>lunch times</td><td><strong>[1]</strong></td><td>Chancery Lane</td></tr>
<tr><td><strong>[2]</strong> Lane E1</td><td>9 a.m.\u201312 noon</td><td>Sunday mornings</td><td><strong>[3]</strong></td></tr>
<tr><td>Walthamstow E17</td><td><strong>[4]</strong></td><td>Mon.\u2013Sat. Except Wed & Sun.</td><td><strong>[5]</strong></td></tr>
<tr><td>Brixton SW9</td><td>9 a.m.\u20136 p.m.</td><td>Mon.\u2013Sun. Half day on Wed.</td><td><strong>[6]</strong></td></tr>
<tr><td>Camden High St. NW1</td><td>8 a.m.\u20135 p.m.</td><td><strong>[7]</strong></td><td>Chalk Farm, Camden Town</td></tr>
</tbody></table>`
        },
        { blockType: "question" as const, questionNumber: 1, questionType: "table-completion" as const, questionText: "~Leather Lane WC1 \u2013 Days: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 2, questionType: "table-completion" as const, questionText: "~________ Lane E1", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 3, questionType: "table-completion" as const, questionText: "~Tube Station for Lane E1: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 4, questionType: "table-completion" as const, questionText: "~Walthamstow E17 \u2013 Open Hours: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 5, questionType: "table-completion" as const, questionText: "~Walthamstow E17 \u2013 Tube Station: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 6, questionType: "table-completion" as const, questionText: "~Brixton SW9 \u2013 Tube Station: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 7, questionType: "table-completion" as const, questionText: "~Camden High St. NW1 \u2013 Days: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },

        // Q8-10: Short answer
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 8\u201310</strong><br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },
        { blockType: "question" as const, questionNumber: 8, questionType: "short-answer" as const, questionText: "~Who is Barbara going to shop with?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 9, questionType: "short-answer" as const, questionText: "~How is Barbara traveling to the shops tomorrow?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 10, questionType: "short-answer" as const, questionText: "~What time are they going to meet?", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      ]
    },

    // ═══ PART 2 — Radio Station Survey (Q11–20) ═══
    {
      sectionNumber: 2,
      title: "Part 2",
      context: "A report on a listener survey for a radio station.",
      instructions: "Questions 11\u201320",
      audioUrl: "",
      questions: [
        // Q11-16: Table completion
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 11\u201316</strong><br/>Complete the table below as you listen.<br/>Write either <strong>A NUMBER</strong> or <strong>NO MORE THAN THREE WORDS</strong> to fill each space."
        },
        {
          blockType: "instruction" as const,
          content: `<table border='1' class='ct-wide' style='border-collapse:collapse;width:100%'>
<colgroup><col style='width:20%'/><col style='width:20%'/><col style='width:20%'/><col style='width:20%'/><col style='width:20%'/></colgroup>
<thead><tr>
<th style='background:#f3f4f6'></th>
<th style='background:#f3f4f6'>Radio South</th>
<th style='background:#f3f4f6'>Radio Soap</th>
<th style='background:#f3f4f6'>new Wake-up</th>
<th style='background:#f3f4f6'><strong>[15]</strong></th>
</tr></thead>
<tbody>
<tr><td style='font-weight:bold'>Approval rating</td><td><strong>[11]</strong>%</td><td>17%</td><td>87%</td><td>15%</td></tr>
<tr><td style='font-weight:bold'>Disapproval rating</td><td><strong>[12]</strong>%</td><td>64%</td><td><strong>[13]</strong>%</td><td>25%</td></tr>
<tr><td style='font-weight:bold'>Don\u2019t know</td><td>not mentioned</td><td>19%</td><td>not mentioned</td><td>60%</td></tr>
<tr><td style='font-weight:bold'>Listeners\u2019 comments</td><td>excellent</td><td>vulgar and puerile</td><td><strong>[14]</strong></td><td><strong>[16]</strong></td></tr>
</tbody></table>
<div style='margin-top:6px;font-style:italic;font-size:13px'>Number of participants in the survey: 4373</div>`
        },
        { blockType: "question" as const, questionNumber: 11, questionType: "table-completion" as const, questionText: "~Radio South approval rating: ________%", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 12, questionType: "table-completion" as const, questionText: "~Radio South disapproval rating: ________%", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 13, questionType: "table-completion" as const, questionText: "~new Wake-up disapproval rating: ________%", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 14, questionType: "table-completion" as const, questionText: "~new Wake-up listeners\u2019 comments: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 15, questionType: "table-completion" as const, questionText: "~Fourth programme name: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 16, questionType: "table-completion" as const, questionText: "~Fourth programme listeners\u2019 comments: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },

        // Q17-20: MCQ (circle correct answer = 4 options)
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 17\u201320</strong><br/>Circle the correct answer."
        },
        {
          blockType: "question" as const, questionNumber: 17, questionType: "multiple-choice" as const,
          questionText: "Regarding the message Voice box, the number of complaints",
          options: [
            "A. has gone up and down in recent weeks.",
            "B. has gone down.",
            "C. has remained static.",
            "D. has risen in the recent week."
          ],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 18, questionType: "multiple-choice" as const,
          questionText: "The praise for the music on the Wake-up show has come",
          options: [
            "A. only from Australia.",
            "B. only from New Zealand.",
            "C. from all over South-east Asia.",
            "D. from all over Asia."
          ],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 19, questionType: "multiple-choice" as const,
          questionText: "Regarding English Worldwide, the number of listeners",
          options: [
            "A. has increased ten times.",
            "B. has remained fairly static.",
            "C. has decreased tenfold.",
            "D. will increase in the future."
          ],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 20, questionType: "multiple-choice" as const,
          questionText: "The radio station broadcasts",
          options: [
            "A. 14 hours per day.",
            "B. 19 hours per day.",
            "C. 24 hours per day.",
            "D. 22 hours per day."
          ],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // ═══ PART 3 — Book Review Outline (Q21–30) ═══
    {
      sectionNumber: 3,
      title: "Part 3",
      context: "A discussion about an outline for a book review about the brain.",
      instructions: "Questions 21\u201330",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 21\u201330</strong><br/>Complete the outline below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: `<div style='border:1px solid #333;margin:10px 0;font-size:14px;box-sizing:border-box;overflow:hidden'>

<div style='padding:10px 14px;border-bottom:1px solid #333'>
<div style='font-weight:bold;margin-bottom:6px'>OUTLINE OF BOOK REVIEW &nbsp; Introduction</div>
<table style='border:none;border-collapse:collapse'>
<tr><td style='padding:3px 20px 3px 20px'>\u2022 &nbsp; Title</td><td style='padding:3px 10px'><strong>[21]</strong></td></tr>
<tr><td style='padding:3px 20px 3px 20px'>\u2022 &nbsp; Author</td><td style='padding:3px 10px'>Robert Winston</td></tr>
<tr><td style='padding:3px 20px 3px 20px'>\u2022 &nbsp; Category</td><td style='padding:3px 10px'><strong>[22]</strong></td></tr>
<tr><td style='padding:3px 20px 3px 20px'>\u2022 &nbsp; Subject area</td><td style='padding:3px 10px'>brain</td></tr>
<tr><td style='padding:3px 20px 3px 20px'>\u2022 &nbsp; Intended readers</td><td style='padding:3px 10px'><strong>[23]</strong></td></tr>
</table>
</div>

<div style='padding:10px 14px;border-bottom:1px solid #333'>
<div style='font-weight:bold;margin-bottom:6px'>Overview</div>
<div style='padding-left:20px;line-height:1.9'>
\u2022 &nbsp; Author\u2019s purpose:&nbsp; to inform and advise on maximizing use of the brain<br/>
\u2022 &nbsp; Main topics: history of <strong>[24]</strong> about brain<br/>
\u2022 &nbsp; what enables brain to <strong>[25]</strong><br/>
\u2022 &nbsp; brain\u2019s contribution to development of <strong>[26]</strong><br/>
\u2022 &nbsp; how to increase intelligence
</div>
</div>

<div style='padding:10px 14px;border-bottom:1px solid #333'>
<div style='font-weight:bold;margin-bottom:6px'>Analysis and evaluation</div>
<div style='padding-left:20px;line-height:1.9'>
\u2022 &nbsp; Writer\u2019s qualifications: professor at the University of London<br/>
&nbsp;&nbsp;&nbsp;&nbsp;who carries out <strong>[27]</strong> research<br/>
\u2022 &nbsp; Strengths:<br/>
&nbsp;&nbsp;&nbsp;&nbsp;readable, particularly through use of <strong>[28]</strong> contains a useful <strong>[29]</strong><br/>
\u2022 &nbsp; Weaknesses &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; none
</div>
</div>

<div style='padding:10px 14px'>
<div style='font-weight:bold;margin-bottom:6px'>Conclusion</div>
<div style='line-height:1.9'>
Overall response: a very interesting book that aims high and achieves its <strong>[30]</strong>
</div>
</div>

</div>`
        },
        // Grading-only blocks (UI already rendered above via [N] placeholders)
        { blockType: "question" as const, questionNumber: 21, questionType: "note-completion" as const, questionText: "~Title: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 22, questionType: "note-completion" as const, questionText: "~Category: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 23, questionType: "note-completion" as const, questionText: "~Intended readers: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 24, questionType: "note-completion" as const, questionText: "~Main topics: history of ________ about brain", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 25, questionType: "note-completion" as const, questionText: "~what enables brain to ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 26, questionType: "note-completion" as const, questionText: "~brain\u2019s contribution to development of ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 27, questionType: "note-completion" as const, questionText: "~Writer\u2019s qualifications: who carries out ________ research", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 28, questionType: "note-completion" as const, questionText: "~Strengths: readable, particularly through use of ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 29, questionType: "note-completion" as const, questionText: "~contains a useful ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 30, questionType: "note-completion" as const, questionText: "~Overall response: achieves its ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      ]
    },

    // ═══ PART 4 — Bridges (Q31–40) ═══
    {
      sectionNumber: 4,
      title: "Part 4",
      context: "A lecture about the history and construction of bridges.",
      instructions: "Questions 31\u201340",
      audioUrl: "",
      questions: [
        // Q31-33: Table completion (Early Bridges)
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 31\u201333</strong><br/>Complete the following table.<br/>Use <strong>NO MORE THAN THREE WORDS</strong> or <strong>A NUMBER</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: "<strong>Early Bridges</strong>"
        },
        {
          blockType: "instruction" as const,
          content: `<table border='1' class='ct-wide' style='border-collapse:collapse;width:100%'>
<colgroup><col style='width:22%'/><col style='width:28%'/><col style='width:26%'/><col style='width:24%'/></colgroup>
<thead><tr>
<th style='background:#f3f4f6'>Bridge type</th>
<th style='background:#f3f4f6'>Material(s) used</th>
<th style='background:#f3f4f6'>First examples date from</th>
<th style='background:#f3f4f6'>Region</th>
</tr></thead>
<tbody>
<tr><td>Arch</td><td>Stone or brick</td><td><strong>[31]</strong> BC</td><td>Middle East</td></tr>
<tr><td>Suspension</td><td><strong>[32]</strong></td><td>A.D. 550</td><td><strong>[33]</strong></td></tr>
<tr><td>Iron suspension</td><td>iron</td><td>1826</td><td>Wales (UK)</td></tr>
</tbody></table>`
        },
        { blockType: "question" as const, questionNumber: 31, questionType: "table-completion" as const, questionText: "~Arch bridge \u2013 date: ________ BC", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 32, questionType: "table-completion" as const, questionText: "~Suspension bridge \u2013 material: ________ and ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 33, questionType: "table-completion" as const, questionText: "~Suspension bridge \u2013 region: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },

        // Q34-37: Note/timeline completion (Clifton Suspension Bridge)
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 34\u201337</strong><br/>Complete the notes on the time line below.<br/>Use <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: "<strong>THE CONSTRUCTION OF THE CLIFTON SUSPENSION BRIDGE</strong>"
        },
        {
          blockType: "instruction" as const,
          content: `<div style='line-height:2'>
<strong>1831</strong> &mdash; Design for bridge chosen by <strong>[34]</strong><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Work begun, but soon halted by political events.<br/>
<strong>1836</strong> &mdash; Work resumed.<br/>
<strong>1843</strong> &mdash; Work stopped when <strong>[35]</strong><br/>
<strong>1851</strong> &mdash; Ironwork sold to pay <strong>[36]</strong><br/>
<strong>1860</strong> &mdash; Second-hand <strong>[37]</strong> became available.<br/>
<strong>1862</strong> &mdash; Work resumed.<br/>
<strong>1864</strong> &mdash; Bridge completed.
</div>`
        },
        { blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const, questionText: "~1831: Design for bridge chosen by ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const, questionText: "~1843: Work stopped when ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const, questionText: "~1851: Ironwork sold to pay ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const, questionText: "~1860: Second-hand ________ became available", correctAnswer: "TBD", marks: 1, wordLimit: 3 },

        // Q38-40: Table completion (Bridge Proposals)
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 38\u201340</strong><br/>Complete the table.<br/>Use <strong>NO MORE THAN THREE WORDS</strong> or <strong>A NUMBER</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: "<strong>BRIDGE PROPOSALS</strong>"
        },
        {
          blockType: "instruction" as const,
          content: `<table border='1' class='ct-wide' style='border-collapse:collapse;width:100%'>
<colgroup><col style='width:26%'/><col style='width:18%'/><col style='width:28%'/><col style='width:28%'/></colgroup>
<thead><tr>
<th style='background:#f3f4f6'>Location</th>
<th style='background:#f3f4f6'>Distance</th>
<th style='background:#f3f4f6'>Main Difficulty</th>
<th style='background:#f3f4f6'>Effect</th>
</tr></thead>
<tbody>
<tr><td>Alaska and Siberia</td><td>80 km</td><td><strong>[38]</strong></td><td>construction time limited</td></tr>
<tr><td>Europe and Africa</td><td>28 km</td><td><strong>[39]</strong></td><td>new type of bridge structure required</td></tr>
<tr><td>Sicily and mainland Italy</td><td><strong>[40]</strong> km</td><td>funding</td><td></td></tr>
</tbody></table>`
        },
        { blockType: "question" as const, questionNumber: 38, questionType: "table-completion" as const, questionText: "~Alaska\u2013Siberia main difficulty: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 39, questionType: "table-completion" as const, questionText: "~Europe\u2013Africa main difficulty: ________", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
        { blockType: "question" as const, questionNumber: 40, questionType: "table-completion" as const, questionText: "~Sicily\u2013Italy distance: ________ km", correctAnswer: "TBD", marks: 1, wordLimit: 3 },
      ]
    },
  ]
};

seedListeningTest13();

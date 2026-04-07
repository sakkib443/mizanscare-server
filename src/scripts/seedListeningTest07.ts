import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest07() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");

    const existing = await ListeningTest.findOne({ testNumber: 7 });
    if (existing) {
      console.log("Listening Test #7 already exists. Updating...");
      await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
      console.log("\u2705 Listening Test 07 updated!");
    } else {
      const db = mongoose.connection.db!;
      const adminUser = await db.collection("users").findOne({ role: "admin" });
      const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
      await ListeningTest.create({ ...listeningTestData, createdBy });
      console.log("\u2705 Listening Test 07 created!");
    }

    const test = await ListeningTest.findOne({ testNumber: 7 });
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
  testId: "LISTENING_007",
  testNumber: 7,
  title: "Listening Mock Test 07 \u2013 Academic",
  description: "IELTS Academic Listening Test 07 \u2014 4 parts, 40 questions.",
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
    // ═══ PART 1 — New Tenant / Anders (Q1–10) ═══
    {
      sectionNumber: 1,
      title: "Part 1",
      context: "A conversation about a new tenant named Anders.",
      instructions: "Questions 1\u201310",
      audioUrl: "",
      questions: [
        // --- Q1-6: Table Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 1\u20136</strong><br/>Complete the table. Write <strong>ONE WORD ONLY</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<div style='background:#f3f4f6;padding:8px 12px;margin-bottom:8px;font-weight:bold'>Name of new tenant: Anders (EXAMPLE)</div>"
        },

        {
          blockType: "instruction" as const,
          content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr>
<th style='padding:8px;background:#f3f4f6'></th>
<th style='padding:8px;background:#f3f4f6'>Good Points About Him</th>
<th style='padding:8px;background:#f3f4f6'>Bad Points About Him</th>
</tr></thead>
<tbody>
<tr><td style='padding:8px;font-weight:bold'>Behaviour</td><td style='padding:8px'>He is <strong>[1]</strong></td><td style='padding:8px'>He is <strong>[2]</strong></td></tr>
<tr><td style='padding:8px;font-weight:bold'>His Friends</td><td style='padding:8px'>His friends visit <strong>[3]</strong></td><td style='padding:8px'>They <strong>[4]</strong></td></tr>
<tr><td style='padding:8px;font-weight:bold'>Other</td><td style='padding:8px'>He pays rent <strong>[5]</strong></td><td style='padding:8px'>He doesn\u2019t <strong>[6]</strong></td></tr>
</tbody></table>`
        },

        {
          blockType: "question" as const, questionNumber: 1, questionType: "table-completion" as const,
          questionText: "~Behaviour \u2013 Good: He is ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 2, questionType: "table-completion" as const,
          questionText: "~Behaviour \u2013 Bad: He is ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 3, questionType: "table-completion" as const,
          questionText: "~His Friends \u2013 Good: His friends visit ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 4, questionType: "table-completion" as const,
          questionText: "~His Friends \u2013 Bad: They ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 5, questionType: "table-completion" as const,
          questionText: "~Other \u2013 Good: He pays rent ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 6, questionType: "table-completion" as const,
          questionText: "~Other \u2013 Bad: He doesn\u2019t ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        // --- Q7-10: Note Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 7\u201310</strong><br/>Complete the notes.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Issues to Discuss</strong>"
        },

        {
          blockType: "instruction" as const,
          content: `<div style='border:1px solid #374151;padding:12px;max-width:350px'>
<div>Communication: <strong>[7]</strong></div>
<div>Friends: <strong>[8]</strong></div>
<div>Cigarettes: <strong>[9]</strong></div>
<div>Cleaning: must <strong>[10]</strong></div>
</div>`
        },

        {
          blockType: "question" as const, questionNumber: 7, questionType: "note-completion" as const,
          questionText: "~Communication: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 8, questionType: "note-completion" as const,
          questionText: "~Friends: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 9, questionType: "note-completion" as const,
          questionText: "~Cigarettes: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 10, questionType: "note-completion" as const,
          questionText: "~Cleaning: must ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },
      ]
    },

    // ═══ PART 2 — First Aid (Q11–20) ═══
    {
      sectionNumber: 2,
      title: "Part 2",
      context: "Information about first aid procedures and advice.",
      instructions: "Questions 11\u201320",
      audioUrl: "",
      questions: [
        // --- Q11-17: Sentence Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 11\u201317</strong><br/>Complete the sentences.<br/>Write <strong>ONE WORD ONLY</strong> for each answer."
        },

        {
          blockType: "question" as const, questionNumber: 11, questionType: "sentence-completion" as const,
          questionText: "~It is important for everyone to know simple first aid ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 12, questionType: "sentence-completion" as const,
          questionText: "~After an accident, one must firstly be aware of ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 13, questionType: "sentence-completion" as const,
          questionText: "~After that, the first-aider must ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 14, questionType: "sentence-completion" as const,
          questionText: "~Clearing of airways may not happen when patients are ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 15, questionType: "sentence-completion" as const,
          questionText: "~The mouth must be checked for ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 16, questionType: "sentence-completion" as const,
          questionText: "~CPR must be done if breathing is absent or ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 17, questionType: "sentence-completion" as const,
          questionText: "~CPR must be done up to the arrival of ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        // --- Q18-20: Multi-MCQ (Choose THREE, A-G) ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 18\u201320</strong><br/>Choose <strong>THREE</strong> answers from the list and write the correct letter, <strong>A\u2013G</strong>, next to the questions.<br/><br/>Which <strong>THREE</strong> pieces of advice does the first-aid officer say are most important?"
        },

        {
          blockType: "question" as const, questionNumber: 18, questionType: "multiple-choice-multi" as const,
          questionText: "Which THREE pieces of advice does the first-aid officer say are most important?",
          options: [
            "A. Have proper equipment",
            "B. Give regular first-aid training",
            "C. Have a safety officer",
            "D. Instil safe behaviour",
            "E. Put posters on walls",
            "F. Have safety meetings",
            "G. Have first-aid boxes"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 19, questionType: "multiple-choice-multi" as const,
          questionText: "Which THREE pieces of advice does the first-aid officer say are most important?",
          options: [
            "A. Have proper equipment",
            "B. Give regular first-aid training",
            "C. Have a safety officer",
            "D. Instil safe behaviour",
            "E. Put posters on walls",
            "F. Have safety meetings",
            "G. Have first-aid boxes"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 20, questionType: "multiple-choice-multi" as const,
          questionText: "Which THREE pieces of advice does the first-aid officer say are most important?",
          options: [
            "A. Have proper equipment",
            "B. Give regular first-aid training",
            "C. Have a safety officer",
            "D. Instil safe behaviour",
            "E. Put posters on walls",
            "F. Have safety meetings",
            "G. Have first-aid boxes"
          ],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // ═══ PART 3 — Waste Reduction / Nicole's Project (Q21–30) ═══
    {
      sectionNumber: 3,
      title: "Part 3",
      context: "A discussion about Nicole\u2019s waste reduction project.",
      instructions: "Questions 21\u201330",
      audioUrl: "",
      questions: [
        // --- Q21-25: MCQ ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 21\u201325</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>."
        },

        {
          blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const,
          questionText: "Nicole received the best information from the",
          options: ["A. staff", "B. students", "C. cleaners."],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const,
          questionText: "The product used most wastefully was",
          options: ["A. copying paper.", "B. plastic.", "C. paper plates and cups."],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice" as const,
          questionText: "The proportion of interviewed people who expressed concern over waste was",
          options: ["A. 30%.", "B. 45%.", "C. 55%."],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 24, questionType: "multiple-choice" as const,
          questionText: "The proportion who claim they take action over this problem was",
          options: ["A. 10%.", "B. one third", "C. one half."],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 25, questionType: "multiple-choice" as const,
          questionText: "Nicole thinks many people do nothing because they are",
          options: ["A. lazy.", "B. uncaring.", "C. uninformed."],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q26-30: Flow-chart Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 26\u201330</strong><br/>Complete the flowchart. Write <strong>ONE WORD ONLY</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Procedure to Reduce Copying Waste</strong>"
        },

        {
          blockType: "instruction" as const,
          content: `<div style='max-width:500px'>
<div style='border:1px solid #374151;padding:10px;text-align:center;margin-bottom:0'><strong>[26]</strong> ......... that the staff do double-sided copying.</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center;margin-bottom:0'>Unwanted copies are <strong>[27]</strong> ......... into a special recycling tray.</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center;margin-bottom:0'><strong>[28]</strong> ......... these clearly, for easy reuse.</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center;margin-bottom:0'>Stack them in a special copying tray each morning.</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center;margin-bottom:0'><strong>[29]</strong> ......... codes which allow each user to access this tray.</div>
<div style='text-align:center;font-size:20px;margin:4px 0'>\u2193</div>
<div style='border:1px solid #374151;padding:10px;text-align:center'>Give highest users a <strong>[30]</strong> ......... (e.g. cinema tickets).</div>
</div>`
        },

        {
          blockType: "question" as const, questionNumber: 26, questionType: "flow-chart-completion" as const,
          questionText: "~________ that the staff do double-sided copying",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 27, questionType: "flow-chart-completion" as const,
          questionText: "~Unwanted copies are ________ into a special recycling tray",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 28, questionType: "flow-chart-completion" as const,
          questionText: "~________ these clearly, for easy reuse",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 29, questionType: "flow-chart-completion" as const,
          questionText: "~________ codes which allow each user to access this tray",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 30, questionType: "flow-chart-completion" as const,
          questionText: "~Give highest users a ________ (e.g. cinema tickets)",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },
      ]
    },

    // ═══ PART 4 — Geosequestration / CO2 (Q31–40) ═══
    {
      sectionNumber: 4,
      title: "Part 4",
      context: "A lecture about geosequestration and carbon dioxide capture.",
      instructions: "Questions 31\u201340",
      audioUrl: "",
      questions: [
        // --- Q31-33: MCQ ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 31\u201333</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>."
        },

        {
          blockType: "question" as const, questionNumber: 31, questionType: "multiple-choice" as const,
          questionText: "Society cannot",
          options: [
            "A. find more coal and oil.",
            "B. reduce waste CO2.",
            "C. take CO2 from power stations."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 32, questionType: "multiple-choice" as const,
          questionText: "Turning carbon dioxide into a solid",
          options: [
            "A. is slow but practical.",
            "B. can be made faster.",
            "C. cannot happen naturally."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 33, questionType: "multiple-choice" as const,
          questionText: "Seawater",
          options: [
            "A. has lots of carbonic acid.",
            "B. has closely connected types of life.",
            "C. is highly acidic."
          ],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q34-40: Table Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 34\u201340</strong><br/>Complete the table.<br/>Write <strong>NO MORE THAN TWO WORDS OR A NUMBER</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Three Problems of Geosequestration</strong>"
        },

        {
          blockType: "instruction" as const,
          content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr>
<th style='padding:8px;background:#f3f4f6'>Risk of leaks</th>
<th style='padding:8px;background:#f3f4f6'>Cost</th>
<th style='padding:8px;background:#f3f4f6'><strong>[34]</strong> ...still not proven</th>
</tr></thead>
<tbody>
<tr>
<td style='padding:8px'>Gas would become <strong>[35]</strong></td>
<td style='padding:8px'>expensive, particularly the <strong>[36]</strong></td>
<td style='padding:8px'>Require the plant to burn <strong>[37]</strong> of its coal</td>
</tr>
<tr><td colspan='3' style='text-align:center;padding:4px'>\u2193 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \u2193 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; \u2193</td></tr>
<tr>
<td style='padding:8px'>risk of widespread <strong>[38]</strong></td>
<td style='padding:8px'>Price of electricity could <strong>[39]</strong></td>
<td style='padding:8px'>release of more Sulphur, ash, and <strong>[40]</strong></td>
</tr>
</tbody></table>`
        },

        {
          blockType: "question" as const, questionNumber: 34, questionType: "table-completion" as const,
          questionText: "~________ ...still not proven",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 35, questionType: "table-completion" as const,
          questionText: "~Gas would become ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 36, questionType: "table-completion" as const,
          questionText: "~expensive, particularly the ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 37, questionType: "table-completion" as const,
          questionText: "~Require the plant to burn ________ of its coal",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 38, questionType: "table-completion" as const,
          questionText: "~risk of widespread ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 39, questionType: "table-completion" as const,
          questionText: "~Price of electricity could ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 40, questionType: "table-completion" as const,
          questionText: "~release of more Sulphur, ash, and ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },
      ]
    },
  ]
};

seedListeningTest07();

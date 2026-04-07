import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest05() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");

    const existing = await ListeningTest.findOne({ testNumber: 5 });
    if (existing) {
      console.log("Listening Test #5 already exists. Updating...");
      await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
      console.log("\u2705 Listening Test 05 updated!");
    } else {
      const db = mongoose.connection.db!;
      const adminUser = await db.collection("users").findOne({ role: "admin" });
      const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
      await ListeningTest.create({ ...listeningTestData, createdBy });
      console.log("\u2705 Listening Test 05 created!");
    }

    const test = await ListeningTest.findOne({ testNumber: 5 });
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
  testId: "LISTENING_005",
  testNumber: 5,
  title: "Listening Mock Test 05 \u2013 Academic",
  description: "IELTS Academic Listening Test 05 \u2014 4 parts, 40 questions.",
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
    // \u2550\u2550\u2550 PART 1 \u2014 University Clubs + Climbing Club (Q1\u201310) \u2550\u2550\u2550
    {
      sectionNumber: 1,
      title: "Part 1",
      context: "Information about university clubs and a climbing club.",
      instructions: "Questions 1\u201310",
      audioUrl: "",
      questions: [
        // --- Q1-4: Table Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 1\u20134</strong><br/>Complete the table below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr>
<th style='padding:8px;background:#f3f4f6'>University clubs</th>
<th style='padding:8px;background:#f3f4f6'>Monday</th>
<th style='padding:8px;background:#f3f4f6'>Tuesday</th>
<th style='padding:8px;background:#f3f4f6'>Wednesday</th>
</tr></thead>
<tbody>
<tr><td style='padding:8px'>Name of club</td><td style='padding:8px'><em>film</em></td><td style='padding:8px'><em>climbing</em></td><td style='padding:8px'><em>chess</em></td></tr>
<tr><td style='padding:8px'>Extra Activities</td><td style='padding:8px'><em>discussions</em></td><td style='padding:8px'><strong>[1]</strong></td><td style='padding:8px'><strong>[2]</strong></td></tr>
<tr><td style='padding:8px'>Current number of members</td><td style='padding:8px'><strong>[3]</strong></td><td style='padding:8px'>40</td><td style='padding:8px'>55</td></tr>
<tr><td style='padding:8px'>Contact</td><td style='padding:8px'><em>Events organizer</em></td><td style='padding:8px'><strong>[4]</strong></td><td style='padding:8px'><em>Maths tutor</em></td></tr>
</tbody></table>`
        },

        {
          blockType: "question" as const, questionNumber: 1, questionType: "table-completion" as const,
          questionText: "Extra Activities (Tuesday): ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 2, questionType: "table-completion" as const,
          questionText: "Extra Activities (Wednesday): ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 3, questionType: "table-completion" as const,
          questionText: "Current number of members (Monday): ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 4, questionType: "table-completion" as const,
          questionText: "Contact (Tuesday): ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        // --- Q5-10: Note Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 5\u201310</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Details of climbing club:</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 5, questionType: "note-completion" as const,
          questionText: "meets ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 6, questionType: "note-completion" as const,
          questionText: "excursion to France in the ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 7, questionType: "note-completion" as const,
          questionText: "subscriptions paid ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Benefits:</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 8, questionType: "note-completion" as const,
          questionText: "discounts on ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 9, questionType: "note-completion" as const,
          questionText: "annual ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 10, questionType: "note-completion" as const,
          questionText: "free entrance to climbing ________ in Cardiff",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },
      ]
    },

    // \u2550\u2550\u2550 PART 2 \u2014 Halls of Residence (Q11\u201320) \u2550\u2550\u2550
    {
      sectionNumber: 2,
      title: "Part 2",
      context: "Information about halls of residence at a university.",
      instructions: "Questions 11\u201320",
      audioUrl: "",
      questions: [
        // --- Q11-15: Matching (features) ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 11\u201315</strong><br/>Which features are available at the following halls of residence?<br/>Choose <strong>FIVE</strong> answers from the box and write the correct letter, <strong>A\u2013G</strong> next to Questions 11\u201315."
        },

        {
          blockType: "instruction" as const,
          content: `<div style='margin:10px 0;padding:12px;border:1px solid #d1d5db;max-width:350px'>
<div style='text-align:center;font-weight:bold;margin-bottom:8px;text-transform:uppercase;font-style:italic'>List of Features</div>
<div style='display:flex;gap:12px'><strong>A</strong><span>cleaning included</span></div>
<div style='display:flex;gap:12px'><strong>B</strong><span>all meals included</span></div>
<div style='display:flex;gap:12px'><strong>C</strong><span>private showers</span></div>
<div style='display:flex;gap:12px'><strong>D</strong><span>modern building</span></div>
<div style='display:flex;gap:12px'><strong>E</strong><span>parking spaces</span></div>
<div style='display:flex;gap:12px'><strong>F</strong><span>single sex</span></div>
<div style='display:flex;gap:12px'><strong>G</strong><span>sports facilities</span></div>
</div>`
        },

        {
          blockType: "instruction" as const,
          content: "<strong>HALLS OF RESIDENCE</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 11, questionType: "matching" as const,
          questionText: "Brown Hall",
          options: ["A. cleaning included", "B. all meals included", "C. private showers", "D. modern building", "E. parking spaces", "F. single sex", "G. sports facilities"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 12, questionType: "matching" as const,
          questionText: "Blake residence",
          options: ["A. cleaning included", "B. all meals included", "C. private showers", "D. modern building", "E. parking spaces", "F. single sex", "G. sports facilities"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 13, questionType: "matching" as const,
          questionText: "Queens Building",
          options: ["A. cleaning included", "B. all meals included", "C. private showers", "D. modern building", "E. parking spaces", "F. single sex", "G. sports facilities"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 14, questionType: "matching" as const,
          questionText: "Parkway Flats",
          options: ["A. cleaning included", "B. all meals included", "C. private showers", "D. modern building", "E. parking spaces", "F. single sex", "G. sports facilities"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 15, questionType: "matching" as const,
          questionText: "Temple Rise",
          options: ["A. cleaning included", "B. all meals included", "C. private showers", "D. modern building", "E. parking spaces", "F. single sex", "G. sports facilities"],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q16-20: Map Labeling ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 16\u201320</strong><br/>Label the map below.<br/>Write the correct letter <strong>A\u2013G</strong> next to questions 16\u201320."
        },

        // Map image
        {
          blockType: "instruction" as const,
          content: "<div style='text-align:center;margin:10px 0'><img src='/images/listening/test05-part2-map.png' alt='Map showing university campus buildings A through G' style='max-width:100%;max-height:400px;border:1px solid #d1d5db;border-radius:4px' /></div>"
        },

        {
          blockType: "question" as const, questionNumber: 16, questionType: "map-labeling" as const,
          questionText: "Brown Hall",
          options: ["A", "B", "C", "D", "E", "F", "G"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 17, questionType: "map-labeling" as const,
          questionText: "Blake Residence",
          options: ["A", "B", "C", "D", "E", "F", "G"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 18, questionType: "map-labeling" as const,
          questionText: "Queens Building",
          options: ["A", "B", "C", "D", "E", "F", "G"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 19, questionType: "map-labeling" as const,
          questionText: "Parkway Flats",
          options: ["A", "B", "C", "D", "E", "F", "G"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 20, questionType: "map-labeling" as const,
          questionText: "Temple Rise",
          options: ["A", "B", "C", "D", "E", "F", "G"],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // \u2550\u2550\u2550 PART 3 \u2014 Project Discussion (Q21\u201330) \u2550\u2550\u2550
    {
      sectionNumber: 3,
      title: "Part 3",
      context: "A discussion between Jenna and Marco about their project.",
      instructions: "Questions 21\u201330",
      audioUrl: "",
      questions: [
        // --- Q21-24: Sentence Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 21\u201324</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN THREE WORDS OR A NUMBER</strong> for each answer."
        },

        {
          blockType: "question" as const, questionNumber: 21, questionType: "sentence-completion" as const,
          questionText: "~Jenna and Marco must complete their project by ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 22, questionType: "sentence-completion" as const,
          questionText: "~The project will be a study of the increase in ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 23, questionType: "sentence-completion" as const,
          questionText: "~The project will be assessed by ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 24, questionType: "sentence-completion" as const,
          questionText: "~Jenna and Marco agree they need a ________ for the project",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        // --- Q25-27: Multiple Choice Multi (Choose THREE) ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 25\u201327</strong><br/>Choose <strong>THREE</strong> letters, <strong>A\u2013G</strong>.<br/>What <strong>THREE</strong> things do Marco and Jenna have to do now for the project?"
        },

        {
          blockType: "question" as const, questionNumber: 25, questionType: "multiple-choice-multi" as const,
          questionText: "What THREE things do Marco and Jenna have to do now for the project?",
          options: [
            "A. interviews some people",
            "B. hand out Questionnaires",
            "C. choose their subjects",
            "D. take photographs",
            "E. Use statistical software",
            "F. do some work in the library",
            "G. contact some local companies"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 26, questionType: "multiple-choice-multi" as const,
          questionText: "What THREE things do Marco and Jenna have to do now for the project?",
          options: [
            "A. interviews some people",
            "B. hand out Questionnaires",
            "C. choose their subjects",
            "D. take photographs",
            "E. Use statistical software",
            "F. do some work in the library",
            "G. contact some local companies"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 27, questionType: "multiple-choice-multi" as const,
          questionText: "What THREE things do Marco and Jenna have to do now for the project?",
          options: [
            "A. interviews some people",
            "B. hand out Questionnaires",
            "C. choose their subjects",
            "D. take photographs",
            "E. Use statistical software",
            "F. do some work in the library",
            "G. contact some local companies"
          ],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q28-30: MCQ ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 28\u201330</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },

        {
          blockType: "question" as const, questionNumber: 28, questionType: "multiple-choice" as const,
          questionText: "Why did Jenna and Marco agree to work together?",
          options: [
            "A. because they both wanted to work with some else",
            "B. because they each have different skills",
            "C. because they have worked together before"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 29, questionType: "multiple-choice" as const,
          questionText: "Why does Marco suggest that he writes the analysis?",
          options: [
            "A. He needs more practice with this kind of writing.",
            "B. He is better at English than Jenna.",
            "C. He has more experience of this than Jenna."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 30, questionType: "multiple-choice" as const,
          questionText: "Why does Jenna offer to do the presentation?",
          options: [
            "A. Her tutor wants her to do the presentation.",
            "B. Marco is very nervous about giving presentations.",
            "C. She wants to divide the work on the project fairly."
          ],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // \u2550\u2550\u2550 PART 4 \u2014 News Sources + Advertising (Q31\u201340) \u2550\u2550\u2550
    {
      sectionNumber: 4,
      title: "Part 4",
      context: "A lecture about US news sources and advertising in newspapers.",
      instructions: "Questions 31\u201340",
      audioUrl: "",
      questions: [
        // --- Q31-35: Matching (News Sources) ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 31\u201335</strong><br/>Of which US news source is each of the following statements true?<br/>Write the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong> next to Questions 31\u201335."
        },

        {
          blockType: "instruction" as const,
          content: `<div style='margin:10px 0;padding:12px;border:1px solid #d1d5db;max-width:300px;text-align:center'>
<div style='font-weight:bold;margin-bottom:8px;text-transform:uppercase'>News Sources</div>
<div style='display:flex;gap:16px;justify-content:center'><strong>A</strong><span>television</span></div>
<div style='display:flex;gap:16px;justify-content:center'><strong>B</strong><span>internet</span></div>
<div style='display:flex;gap:16px;justify-content:center'><strong>C</strong><span>the press</span></div>
</div>`
        },

        {
          blockType: "question" as const, questionNumber: 31, questionType: "matching" as const,
          questionText: "It is more popular at the weekend than during the week",
          options: ["A. television", "B. internet", "C. the press"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 32, questionType: "matching" as const,
          questionText: "It has affected the popularity of local radio.",
          options: ["A. television", "B. internet", "C. the press"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 33, questionType: "matching" as const,
          questionText: "It has recently been able to expand internationally.",
          options: ["A. television", "B. internet", "C. the press"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 34, questionType: "matching" as const,
          questionText: "It is offering more varied reporting than previously.",
          options: ["A. television", "B. internet", "C. the press"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 35, questionType: "matching" as const,
          questionText: "It has suffered from government intervention.",
          options: ["A. television", "B. internet", "C. the press"],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q36-40: Summary Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 36\u201340</strong><br/>Complete the summary below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>ADVERTISING AND NEWSPAPERS</strong>"
        },

        {
          blockType: "instruction" as const,
          content: `<div style='line-height:2;font-size:15px'>
~In the USA, newspapers are being increasingly inventive about the way they attract advertisers and their <strong>[36]</strong>. Now exceeds that of other industries. Advertising has increased because of a good relationship with the industries. Advertising has increased because of a good relationship with the <strong>[37]</strong> sector. In addition, newspapers now run more adverts which include <strong>[38]</strong>. These have been found to raise readership of the papers and create more sales for the <strong>[39]</strong>. There are also an increasing number of more expensive <strong>[40]</strong> adverts.
</div>`
        },

        {
          blockType: "question" as const, questionNumber: 36, questionType: "summary-completion" as const,
          questionText: "~newspapers are being increasingly inventive about the way they attract advertisers and their ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 37, questionType: "summary-completion" as const,
          questionText: "~Advertising has increased because of a good relationship with the ________ sector",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 38, questionType: "summary-completion" as const,
          questionText: "~newspapers now run more adverts which include ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 39, questionType: "summary-completion" as const,
          questionText: "~These have been found to raise readership of the papers and create more sales for the ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 40, questionType: "summary-completion" as const,
          questionText: "~There are also an increasing number of more expensive ________ adverts",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },
      ]
    },
  ]
};

seedListeningTest05();

import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest10() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");

    const existing = await ListeningTest.findOne({ testNumber: 10 });
    if (existing) {
      console.log("Listening Test #10 already exists. Updating...");
      await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
      console.log("\u2705 Listening Test 10 updated!");
    } else {
      const db = mongoose.connection.db!;
      const adminUser = await db.collection("users").findOne({ role: "admin" });
      const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
      await ListeningTest.create({ ...listeningTestData, createdBy });
      console.log("\u2705 Listening Test 10 created!");
    }

    const test = await ListeningTest.findOne({ testNumber: 10 });
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
  testId: "LISTENING_010",
  testNumber: 10,
  title: "Listening Mock Test 10 \u2013 Academic",
  description: "IELTS Academic Listening Test 10 \u2014 4 parts, 40 questions.",
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
    // ═══ PART 1 — Book Order Form (Q1–10) ═══
    {
      sectionNumber: 1,
      title: "Part 1",
      context: "A phone call to order a book.",
      instructions: "Questions 1\u201310",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 1\u201310</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>ORDER FORM</strong>"
        },

        {
          blockType: "instruction" as const,
          content: `<table border='1' style='border-collapse:collapse;width:100%'>
<tbody>
<tr style='background:#f3f4f6'><td style='padding:8px;width:40%'>Example:</td><td style='padding:8px'>Answer</td></tr>
<tr style='background:#f3f4f6'><td style='padding:8px'>Reason for call:</td><td style='padding:8px'>problems with <strong>WEBSITE</strong></td></tr>
<tr><td style='padding:8px'>Name:</td><td style='padding:8px'><strong>[1]</strong> .........Freeman</td></tr>
<tr><td style='padding:8px'>Title of book:</td><td style='padding:8px'><strong>[2]</strong></td></tr>
<tr><td style='padding:8px'>Author:</td><td style='padding:8px'>Richard <strong>[3]</strong></td></tr>
<tr><td style='padding:8px'>Type of book:</td><td style='padding:8px'><strong>[4]</strong></td></tr>
<tr><td style='padding:8px'>Price:</td><td style='padding:8px'>\u00A3<strong>[5]</strong></td></tr>
<tr><td style='padding:8px'>Payment method:</td><td style='padding:8px'><strong>[6]</strong></td></tr>
<tr><td style='padding:8px'>Delivery address:</td><td style='padding:8px'><strong>[7]</strong>, London N22</td></tr>
<tr><td style='padding:8px'>Delivery type:</td><td style='padding:8px'><strong>[8]</strong></td></tr>
<tr><td style='padding:8px'>Delivery date:</td><td style='padding:8px'><strong>[9]</strong></td></tr>
<tr><td style='padding:8px'>Delivery instructions:</td><td style='padding:8px'>If out leave with a <strong>[10]</strong></td></tr>
</tbody></table>`
        },

        {
          blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const,
          questionText: "~Name: ________ Freeman",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const,
          questionText: "~Title of book: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const,
          questionText: "~Author: Richard ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const,
          questionText: "~Type of book: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const,
          questionText: "~Price: \u00A3________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const,
          questionText: "~Payment method: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 7, questionType: "form-completion" as const,
          questionText: "~Delivery address: ________, London N22",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 8, questionType: "form-completion" as const,
          questionText: "~Delivery type: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 9, questionType: "form-completion" as const,
          questionText: "~Delivery date: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 10, questionType: "form-completion" as const,
          questionText: "~Delivery instructions: If out leave with a ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },
      ]
    },

    // ═══ PART 2 — Home of the Future (Q11–20) ═══
    {
      sectionNumber: 2,
      title: "Part 2",
      context: "A talk about the home of the future and smart technology.",
      instructions: "Questions 11\u201320",
      audioUrl: "",
      questions: [
        // --- Q11-16: MCQ ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 11\u201316</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },

        {
          blockType: "question" as const, questionNumber: 11, questionType: "multiple-choice" as const,
          questionText: "What will wake people up in the home of the future?",
          options: [
            "A. Body temperature.",
            "B. The sound of an alarm clock",
            "C. The movement of the bed"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 12, questionType: "multiple-choice" as const,
          questionText: "What will shoes be able to do by themselves?",
          options: [
            "A. Walk faster",
            "B. Play music",
            "C. Float on air"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 13, questionType: "multiple-choice" as const,
          questionText: "What kind of clothes will people be wearing?",
          options: [
            "A. Clothes that make us more intelligent.",
            "B. Clothes that can interpret how we are feeling",
            "C. Clothes that are powered by electricity"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 14, questionType: "multiple-choice" as const,
          questionText: "What can the house do?",
          options: [
            "A. Control the shower temperature.",
            "B. Turn off the taps.",
            "C. Wash your back"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 15, questionType: "multiple-choice" as const,
          questionText: "What will the Internet be able to do?",
          options: [
            "A. Understand when you are worried",
            "B. Project what\u2019s in your fridge",
            "C. Help find something you\u2019ve lost"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 16, questionType: "multiple-choice" as const,
          questionText: "Will the fridge do when people are low on milk?",
          options: [
            "A. Deliver the milk",
            "B. Send an email to the shop",
            "C. Defrost some in the freezer"
          ],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q17-20: Map Labeling ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 17\u201320</strong><br/>Label the map below.<br/>Write the correct letter, <strong>A\u2013F</strong>, next to questions 17\u201320."
        },

        {
          blockType: "instruction" as const,
          content: "<div style='text-align:center;font-weight:bold;margin-bottom:8px'>The living room of the future</div><div style='text-align:center;margin:10px 0'><img src='/images/listening/test10-part2-map.png' alt='Floor plan of the living room of the future showing items A through F' style='max-width:100%;max-height:400px;border:1px solid #d1d5db;border-radius:4px' /></div>"
        },

        {
          blockType: "question" as const, questionNumber: 17, questionType: "map-labeling" as const,
          questionText: "television",
          options: ["A", "B", "C", "D", "E", "F"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 18, questionType: "map-labeling" as const,
          questionText: "temperature control",
          options: ["A", "B", "C", "D", "E", "F"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 19, questionType: "map-labeling" as const,
          questionText: "bookcase",
          options: ["A", "B", "C", "D", "E", "F"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 20, questionType: "map-labeling" as const,
          questionText: "computer keyboard",
          options: ["A", "B", "C", "D", "E", "F"],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // ═══ PART 3 — Sally's Assignment / Questionnaire (Q21–30) ═══
    {
      sectionNumber: 3,
      title: "Part 3",
      context: "A discussion about Sally\u2019s assignment and how to write a questionnaire.",
      instructions: "Questions 21\u201330",
      audioUrl: "",
      questions: [
        // --- Q21-25: Multi-MCQ (Choose FIVE, A-H) ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 21\u201325</strong><br/>Choose <strong>FIVE</strong> letters, <strong>A\u2013H</strong>.<br/>Which <strong>FIVE</strong> things has Sally already done?"
        },

        {
          blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice-multi" as const,
          questionText: "Which FIVE things has Sally already done?",
          options: [
            "A. emailed four businesses",
            "B. written up results",
            "C. contacted three businesses",
            "D. started writing the assignment",
            "E. read A Starting Success",
            "F. skimmed a document",
            "G. borrowed a book",
            "H. researched data"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice-multi" as const,
          questionText: "Which FIVE things has Sally already done?",
          options: [
            "A. emailed four businesses",
            "B. written up results",
            "C. contacted three businesses",
            "D. started writing the assignment",
            "E. read A Starting Success",
            "F. skimmed a document",
            "G. borrowed a book",
            "H. researched data"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice-multi" as const,
          questionText: "Which FIVE things has Sally already done?",
          options: [
            "A. emailed four businesses",
            "B. written up results",
            "C. contacted three businesses",
            "D. started writing the assignment",
            "E. read A Starting Success",
            "F. skimmed a document",
            "G. borrowed a book",
            "H. researched data"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 24, questionType: "multiple-choice-multi" as const,
          questionText: "Which FIVE things has Sally already done?",
          options: [
            "A. emailed four businesses",
            "B. written up results",
            "C. contacted three businesses",
            "D. started writing the assignment",
            "E. read A Starting Success",
            "F. skimmed a document",
            "G. borrowed a book",
            "H. researched data"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 25, questionType: "multiple-choice-multi" as const,
          questionText: "Which FIVE things has Sally already done?",
          options: [
            "A. emailed four businesses",
            "B. written up results",
            "C. contacted three businesses",
            "D. started writing the assignment",
            "E. read A Starting Success",
            "F. skimmed a document",
            "G. borrowed a book",
            "H. researched data"
          ],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q26-30: Flow-chart matching (A-G) ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 26\u201330</strong><br/>Complete the flow-chart below.<br/>Choose <strong>FIVE</strong> answers from the box and choose the correct letter, <strong>A\u2013G</strong>, for questions 26\u201330."
        },

        {
          blockType: "instruction" as const,
          content: `<div style='margin:10px 0;padding:12px;border:1px solid #d1d5db;max-width:250px'>
<div><strong>A</strong> &nbsp; beginning</div>
<div><strong>B</strong> &nbsp; choices</div>
<div><strong>C</strong> &nbsp; document</div>
<div><strong>D</strong> &nbsp; document</div>
<div><strong>E</strong> &nbsp; opening</div>
<div><strong>F</strong> &nbsp; questions</div>
<div><strong>G</strong> &nbsp; scales</div>
</div>`
        },

        {
          blockType: "instruction" as const,
          content: "<strong>How to write a questionnaire</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 26, questionType: "matching" as const,
          questionText: "Keep your ________ simple",
          options: ["A. beginning", "B. choices", "C. document", "D. document", "E. opening", "F. questions", "G. scales"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 27, questionType: "matching" as const,
          questionText: "Try to make the ________ of the document interesting",
          options: ["A. beginning", "B. choices", "C. document", "D. document", "E. opening", "F. questions", "G. scales"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 28, questionType: "matching" as const,
          questionText: "Make sure that the ________ uses standard terms that aren\u2019t too formal or informal",
          options: ["A. beginning", "B. choices", "C. document", "D. document", "E. opening", "F. questions", "G. scales"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 29, questionType: "matching" as const,
          questionText: "Use simple ________ to make it quicker for the recipient",
          options: ["A. beginning", "B. choices", "C. document", "D. document", "E. opening", "F. questions", "G. scales"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 30, questionType: "matching" as const,
          questionText: "Put your ________ in a logical order",
          options: ["A. beginning", "B. choices", "C. document", "D. document", "E. opening", "F. questions", "G. scales"],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // ═══ PART 4 — Impact of Urbanization (Q31–40) ═══
    {
      sectionNumber: 4,
      title: "Part 4",
      context: "A lecture about the impact of urbanization on land and vegetation.",
      instructions: "Questions 31\u201340",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 31\u201340</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Impact of Urbanization</strong>"
        },

        {
          blockType: "instruction" as const,
          content: "<strong>The effects of urbanization:</strong>"
        },

        {
          blockType: "instruction" as const,
          content: "Example: in the U.S."
        },

        {
          blockType: "question" as const, questionNumber: 31, questionType: "note-completion" as const,
          questionText: "Only ________ of land built on",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 32, questionType: "note-completion" as const,
          questionText: "loss of ________ far larger",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 33, questionType: "note-completion" as const,
          questionText: "Could impact on world ________ in future",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Research methods:</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const,
          questionText: "a weather ________ for clouds was used",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const,
          questionText: "land use divided into ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const,
          questionText: "data used to calculate the ________ of all areas",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Results:</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const,
          questionText: "urban areas often built on the ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "\u2022 a second study confirmed that prime land is being converted"
        },

        {
          blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const,
          questionText: "________ of vegetation is lost per annum",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "<strong>The future:</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 39, questionType: "note-completion" as const,
          questionText: "countries such as ________ and need to do investigations",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "\u2022 stop investing in infrastructure in areas of fertile land"
        },

        {
          blockType: "question" as const, questionNumber: 40, questionType: "note-completion" as const,
          questionText: "encourage people to move by giving them ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },
      ]
    },
  ]
};

seedListeningTest10();

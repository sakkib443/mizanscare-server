import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest04() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");

    const existing = await ListeningTest.findOne({ testNumber: 4 });
    if (existing) {
      console.log("Listening Test #4 already exists. Updating...");
      await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
      console.log("\u2705 Listening Test 04 updated!");
    } else {
      const db = mongoose.connection.db!;
      const adminUser = await db.collection("users").findOne({ role: "admin" });
      const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
      await ListeningTest.create({ ...listeningTestData, createdBy });
      console.log("\u2705 Listening Test 04 created!");
    }

    const test = await ListeningTest.findOne({ testNumber: 4 });
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
  testId: "LISTENING_004",
  testNumber: 4,
  title: "Listening Mock Test 04 \u2013 Academic",
  description: "IELTS Academic Listening Test 04 \u2014 4 parts, 40 questions.",
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
    // \u2550\u2550\u2550 PART 1 \u2014 Child Care Enrolment (Q1\u201310) \u2550\u2550\u2550
    {
      sectionNumber: 1,
      title: "Part 1",
      context: "A conversation about enrolling a child at the Ascot Child Care Centre.",
      instructions: "Questions 1\u201310",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 1\u201310</strong><br/>Complete the form below using <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: `<div class='ielts-form-box'>
<div class='ielts-form-title'>Ascot Child Care Centre Enrolment Form</div>
<div style='font-weight:700;margin:8px 0 6px'>Personal details</div>
<div class='ielts-form-row'>Family name: Cullen</div>
<div class='ielts-form-row'>Child\u2019s first name: <strong>[1]</strong></div>
<div class='ielts-form-row'>Age: <strong>[2]</strong></div>
<div class='ielts-form-row'>Birthday: <strong>[3]</strong></div>
<div class='ielts-form-row'>Other children in the family: a brother aged <strong>[4]</strong></div>
<div class='ielts-form-row'>Address: <strong>[5]</strong>, Brisbane</div>
<div class='ielts-form-row'>Emergency contact number: 3467 8890</div>
<div class='ielts-form-row'>Relationship to child: <strong>[6]</strong></div>
</div>`
        },

        {
          blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const,
          questionText: "Child\u2019s first name: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const,
          questionText: "Age: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const,
          questionText: "Birthday: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const,
          questionText: "Other children in the family: a brother aged ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const,
          questionText: "Address: ________, Brisbane",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const,
          questionText: "Relationship to child: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        // Development section
        {
          blockType: "instruction" as const,
          content: "<strong>Development</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 7, questionType: "form-completion" as const,
          questionText: "Has difficulty ________ during the day",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 8, questionType: "form-completion" as const,
          questionText: "Is able to ________ herself",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        // Child-care arrangements
        {
          blockType: "instruction" as const,
          content: "<strong>Child-care arrangements</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 9, questionType: "form-completion" as const,
          questionText: "Days required: ________ and ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 10, questionType: "form-completion" as const,
          questionText: "Pick-up time: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },
      ]
    },

    // \u2550\u2550\u2550 PART 2 \u2014 Children Activities during Holiday (Q11\u201320) \u2550\u2550\u2550
    {
      sectionNumber: 2,
      title: "Part 2",
      context: "Information about children\u2019s activities during the holidays.",
      instructions: "Questions 11\u201320",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 11\u201320</strong><br/>Complete the notes using <strong>NO MORE THAN ONE WORD AND/OR A NUMBER</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Things to do in the holidays</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 11, questionType: "note-completion" as const,
          questionText: "Main problem \u2013 children do not have a traditional ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Some ideas</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 12, questionType: "note-completion" as const,
          questionText: "Give children jobs, for example cleaning the ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 13, questionType: "note-completion" as const,
          questionText: "At home, ask children to help in the ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 14, questionType: "note-completion" as const,
          questionText: "Get children to make ________ ahead of time",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 15, questionType: "note-completion" as const,
          questionText: "Get children involved in community work such as visiting the ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 16, questionType: "note-completion" as const,
          questionText: "Involve older children in long-term ________ in your community",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 17, questionType: "note-completion" as const,
          questionText: "You may get some ideas from the ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 18, questionType: "note-completion" as const,
          questionText: "The local ________ is often the best place to find ideas",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        // Things to remember
        {
          blockType: "instruction" as const,
          content: "<strong>Things to remember</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 19, questionType: "note-completion" as const,
          questionText: "Make sure children stay ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 20, questionType: "note-completion" as const,
          questionText: "Children up to the age of ________ need to be supervised by an adult",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },
      ]
    },

    // \u2550\u2550\u2550 PART 3 \u2014 Space Exploration Discussion (Q21\u201330) \u2550\u2550\u2550
    {
      sectionNumber: 3,
      title: "Part 3",
      context: "A discussion between John and Susan about space exploration and Mars.",
      instructions: "Questions 21\u201330",
      audioUrl: "",
      questions: [
        // Q21-24: MCQ
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 21\u201324</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },

        {
          blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const,
          questionText: "According to John, what is the main advantage of space exploration?",
          options: ["A. To supply resources for use on Earth.", "B. To find out more about the origins of our planet.", "C. To establish a colony for humans if Earth becomes uninhabitable."],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const,
          questionText: "According to the speakers, why can\u2019t robots be sent into space instead of humans?",
          options: ["A. They cannot operate for long enough.", "B. They are too expensive to build.", "C. They are too reliant on humans."],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice" as const,
          questionText: "What are we told about the space technology currently used?",
          options: ["A. It can be unreliable.", "B. It is based on old technology.", "C. It is becoming cheaper to produce."],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 24, questionType: "multiple-choice" as const,
          questionText: "What is the biggest problem in sending robots to Mars?",
          options: ["A. the distance", "B. the atmosphere", "C. the extreme temperatures"],
          correctAnswer: "TBD", marks: 1
        },

        // Q25-30: Matching (Who said it?)
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 25\u201330</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.<br/><strong>Who expresses the following opinions?</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 25, questionType: "matching" as const,
          questionText: "We should plan a trip to Mars even though it may not happen soon.",
          options: ["A. John", "B. Susan", "C. Both John and Susan"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 26, questionType: "matching" as const,
          questionText: "We may eventually colonise Mars.",
          options: ["A. John", "B. Susan", "C. Both John and Susan"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 27, questionType: "matching" as const,
          questionText: "The soil on Mars is highly toxic.",
          options: ["A. John", "B. Susan", "C. Both John and Susan"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 28, questionType: "matching" as const,
          questionText: "The soil on Mars contains materials we could use.",
          options: ["A. John", "B. Susan", "C. Both John and Susan"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 29, questionType: "matching" as const,
          questionText: "Spaceships cannot be totally protected from radiation.",
          options: ["A. John", "B. Susan", "C. Both John and Susan"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 30, questionType: "matching" as const,
          questionText: "It is possible that humans could form a base on Mars.",
          options: ["A. John", "B. Susan", "C. Both John and Susan"],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // \u2550\u2550\u2550 PART 4 \u2014 History of Dentistry (Q31\u201340) \u2550\u2550\u2550
    {
      sectionNumber: 4,
      title: "Part 4",
      context: "A lecture about the history of dentistry.",
      instructions: "Questions 31\u201340",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 31\u201340</strong><br/>Complete the notes below using <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong>."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>The history of dentistry</strong>"
        },

        // Early history
        {
          blockType: "instruction" as const,
          content: "<strong>Early history</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 31, questionType: "note-completion" as const,
          questionText: "~The earliest reference to problems with teeth was in ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 32, questionType: "note-completion" as const,
          questionText: "~The ancient Sumerians called problems with teeth \u2018tooth ________\u2019",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 33, questionType: "note-completion" as const,
          questionText: "~There is ________ to show that the Chinese used dental treatments",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        // Remedies and treatment
        {
          blockType: "instruction" as const,
          content: "<strong>Remedies and treatment</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const,
          questionText: "~An old text from ________ reveals medical practices from 1700 to 1500 BC",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const,
          questionText: "~The text refers to the use of ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const,
          questionText: "~and ________ to relieve toothache",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const,
          questionText: "~In the fifth century BC a Greek ________ noted the beginnings of specialisation in medicine",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const,
          questionText: "~A Greek doctor was the first to ________ problem teeth",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 39, questionType: "note-completion" as const,
          questionText: "~In Europe during the ________, doctors performed dentistry in people\u2019s homes",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 40, questionType: "note-completion" as const,
          questionText: "~A dentist from France is said to have founded ________ dentistry",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },
      ]
    },
  ]
};

seedListeningTest04();

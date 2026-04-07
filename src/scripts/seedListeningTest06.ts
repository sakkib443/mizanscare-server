import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest06() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");

    const existing = await ListeningTest.findOne({ testNumber: 6 });
    if (existing) {
      console.log("Listening Test #6 already exists. Updating...");
      await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
      console.log("\u2705 Listening Test 06 updated!");
    } else {
      const db = mongoose.connection.db!;
      const adminUser = await db.collection("users").findOne({ role: "admin" });
      const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
      await ListeningTest.create({ ...listeningTestData, createdBy });
      console.log("\u2705 Listening Test 06 created!");
    }

    const test = await ListeningTest.findOne({ testNumber: 6 });
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
  testId: "LISTENING_006",
  testNumber: 6,
  title: "Listening Mock Test 06 \u2013 Academic",
  description: "IELTS Academic Listening Test 06 \u2014 4 parts, 40 questions.",
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
    // ═══ PART 1 — New Accommodation (Q1–10) ═══
    {
      sectionNumber: 1,
      title: "Part 1",
      context: "A conversation about finding new accommodation near a children\u2019s hospital.",
      instructions: "Questions 1\u201310",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 1\u201310</strong><br/>Complete the notes below with <strong>NO MORE THAN ONE WORD</strong> and/or <strong>A NUMBER</strong>."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>New Accommodation</strong>"
        },

        {
          blockType: "instruction" as const,
          content: "Need to find new accommodation close to the children\u2019s <strong><u>hospital</u></strong>."
        },

        {
          blockType: "instruction" as const,
          content: "<strong><u>Area 1 Broadgreen</u></strong>"
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Advantages:</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 1, questionType: "note-completion" as const,
          questionText: "Has several types of ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 2, questionType: "note-completion" as const,
          questionText: "No need to pay for ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 3, questionType: "note-completion" as const,
          questionText: "Average rent ________ a week",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 4, questionType: "note-completion" as const,
          questionText: "~Disadvantages: No many local ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "instruction" as const,
          content: "<strong><u>Area 2 West Derby:</u></strong>"
        },

        {
          blockType: "question" as const, questionNumber: 5, questionType: "note-completion" as const,
          questionText: "~Advantages: Good ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "instruction" as const,
          content: "Disadvantages:"
        },

        {
          blockType: "question" as const, questionNumber: 6, questionType: "note-completion" as const,
          questionText: "~Unlikely to find a ________ in the area",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 7, questionType: "note-completion" as const,
          questionText: "~May be too ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Contract:</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 8, questionType: "note-completion" as const,
          questionText: "John ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 9, questionType: "note-completion" as const,
          questionText: "Tel ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },

        {
          blockType: "question" as const, questionNumber: 10, questionType: "note-completion" as const,
          questionText: "Arrange appointment for ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 1
        },
      ]
    },

    // ═══ PART 2 — Arts Centre Programme (Q11–20) ═══
    {
      sectionNumber: 2,
      title: "Part 2",
      context: "Information about an Arts Centre programme, cafe/bar hours, and membership.",
      instructions: "Questions 11\u201320",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 11\u201320</strong><br/>Complete the information below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> or <strong>A NUMBER</strong> for each answer."
        },

        // --- Q11-13: Table ---
        {
          blockType: "instruction" as const,
          content: "<strong>ARTS CENTRE PROGRAMME</strong>"
        },

        {
          blockType: "instruction" as const,
          content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr>
<th style='padding:8px;background:#f3f4f6'>DAY</th>
<th style='padding:8px;background:#f3f4f6'>TIME</th>
<th style='padding:8px;background:#f3f4f6'>EVENT</th>
</tr></thead>
<tbody>
<tr><td style='padding:8px'><strong>[11]</strong></td><td style='padding:8px'>6.45pm</td><td style='padding:8px'>Film Club</td></tr>
<tr><td style='padding:8px'>Thursday</td><td style='padding:8px'><strong>[12]</strong> pm</td><td style='padding:8px'>Theatrical productions</td></tr>
<tr><td style='padding:8px'>Friday</td><td style='padding:8px'>8 pm</td><td style='padding:8px'><strong>[13]</strong>/Traditional Music</td></tr>
<tr><td style='padding:8px'>Saturday</td><td style='padding:8px'>8 pm</td><td style='padding:8px'>Pop/rock</td></tr>
</tbody></table>`
        },

        {
          blockType: "question" as const, questionNumber: 11, questionType: "table-completion" as const,
          questionText: "Day for Film Club at 6.45pm: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 12, questionType: "table-completion" as const,
          questionText: "Time for Theatrical productions on Thursday: ________ pm",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 13, questionType: "table-completion" as const,
          questionText: "Event on Friday at 8 pm: ________/Traditional Music",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        // --- Cafe/Bar ---
        {
          blockType: "instruction" as const,
          content: "<strong>Cafe/ Bar Opening Hours</strong>"
        },

        {
          blockType: "instruction" as const,
          content: "Monday to Friday: 11am 3 pm/ 6pm to 10.30 pm"
        },

        {
          blockType: "question" as const, questionNumber: 14, questionType: "note-completion" as const,
          questionText: "~Saturdays and Sundays: 11am to ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "Lunch served 12.30pm to 2 pm"
        },

        {
          blockType: "question" as const, questionNumber: 15, questionType: "note-completion" as const,
          questionText: "~Light Snacks are ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        // --- Membership ---
        {
          blockType: "instruction" as const,
          content: "<strong>Membership</strong>"
        },

        {
          blockType: "instruction" as const,
          content: `<div style='line-height:2;font-size:15px'>
Members enjoyed reduced-price tickets, priority bookings and <strong>[16]</strong>. It costs just <strong>[17]</strong> per <strong>[18]</strong>. To get the discount, simply show your <strong>[19]</strong>. At the box office, for the telephone bookings give your <strong>[20]</strong>.
</div>`
        },

        {
          blockType: "question" as const, questionNumber: 16, questionType: "note-completion" as const,
          questionText: "~Members enjoyed reduced-price tickets, priority bookings and ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 17, questionType: "note-completion" as const,
          questionText: "~It costs just ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 18, questionType: "note-completion" as const,
          questionText: "~per ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 19, questionType: "note-completion" as const,
          questionText: "~To get the discount, simply show your ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 20, questionType: "note-completion" as const,
          questionText: "~for the telephone bookings give your ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },
      ]
    },

    // ═══ PART 3 — Tutor Discussion / Essay Feedback (Q21–30) ═══
    {
      sectionNumber: 3,
      title: "Part 3",
      context: "A discussion between a tutor and a student about an essay and Antarctica research.",
      instructions: "Questions 21\u201330",
      audioUrl: "",
      questions: [
        // --- Q21-23: Multi-MCQ (Choose THREE, A–F) ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 21\u201323</strong><br/>Choose the correct letters, <strong>A to G</strong>.<br/>Which <strong>THREE PROBLEMS</strong> does the tutor identify in the student\u2019s essay?"
        },

        {
          blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice-multi" as const,
          questionText: "Which THREE PROBLEMS does the tutor identify in the student\u2019s essay?",
          options: [
            "A. The arguments are not supported by evidence.",
            "B. The structure is not very good.",
            "C. It is too similar to essays the student has read.",
            "D. There are too many personal points of view.",
            "E. The style is too formal and academic",
            "F. The paragraph should be longer."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice-multi" as const,
          questionText: "Which THREE PROBLEMS does the tutor identify in the student\u2019s essay?",
          options: [
            "A. The arguments are not supported by evidence.",
            "B. The structure is not very good.",
            "C. It is too similar to essays the student has read.",
            "D. There are too many personal points of view.",
            "E. The style is too formal and academic",
            "F. The paragraph should be longer."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice-multi" as const,
          questionText: "Which THREE PROBLEMS does the tutor identify in the student\u2019s essay?",
          options: [
            "A. The arguments are not supported by evidence.",
            "B. The structure is not very good.",
            "C. It is too similar to essays the student has read.",
            "D. There are too many personal points of view.",
            "E. The style is too formal and academic",
            "F. The paragraph should be longer."
          ],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q24-25: MCQ ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 24 and 25</strong><br/>Choose the correct letters, <strong>A</strong>, <strong>B</strong> OR <strong>C</strong>."
        },

        {
          blockType: "question" as const, questionNumber: 24, questionType: "multiple-choice" as const,
          questionText: "The tutor says that in academic books, paragraphs are",
          options: [
            "A. usually very long",
            "B. occasionally very long",
            "C. usually shorter than paragraphs written by undergraduates."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 25, questionType: "multiple-choice" as const,
          questionText: "The tutor says Alex\u2019s paragraphs should usually be",
          options: [
            "A. no longer than 400 words",
            "B. around 400 words",
            "C. 200 to 400 words."
          ],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q26-30: Short Answer ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 26\u201330</strong><br/>Answer the questions below. Write <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },

        {
          blockType: "question" as const, questionNumber: 26, questionType: "short-answer" as const,
          questionText: "~Where is the error of Alex\u2019s essay?",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 27, questionType: "short-answer" as const,
          questionText: "~What are the scientists in Antarctica collecting?",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 28, questionType: "short-answer" as const,
          questionText: "~What has ESSCOM been searching for in Antarctica?",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 29, questionType: "short-answer" as const,
          questionText: "~What has the tutor\u2019s university been researching in Antarctica?",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 30, questionType: "short-answer" as const,
          questionText: "~How has the region been mapped?",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },
      ]
    },

    // ═══ PART 4 — Migration of Early Humans (Q31–40) ═══
    {
      sectionNumber: 4,
      title: "Part 4",
      context: "A lecture about the migration of early humans.",
      instructions: "Questions 31\u201340",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 31\u201340</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> and/or <strong>A NUMBER</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Migration of early humans:</strong>"
        },

        {
          blockType: "instruction" as const,
          content: "Human migration has occurred throughout history"
        },

        {
          blockType: "question" as const, questionNumber: 31, questionType: "note-completion" as const,
          questionText: "~First significant migration occurred approximately ________ years ago",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "Early pioneers did not survive"
        },

        {
          blockType: "question" as const, questionNumber: 32, questionType: "note-completion" as const,
          questionText: "~Earth experienced changes in ________. About 70,000 years ago",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "New brand of modern humans left Africa."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Colonization:</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 33, questionType: "note-completion" as const,
          questionText: "~China about 50,000 years ago and Europe about ________ years",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "-the open steppes of Siberia some 40,000 years ago."
        },

        {
          blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const,
          questionText: "~-roughly 20,000 years ago arriving in Japan, then linked to the main ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const,
          questionText: "~-Australia was reached across the sea on ________ 50,000 years ago",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "-America via Alaska sometime between 15 and 13,000 years ago."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>Migration within Africa</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const,
          questionText: "~Bantu occupied around ________ of the African continent by 1,000 AD",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const,
          questionText: "~Stimulus for the Bantu migration was perhaps the farming of the ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "instruction" as const,
          content: "Population expansion led to movement into surrounding areas that were not heavily populated."
        },

        {
          blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const,
          questionText: "~Iron production introduced from ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 39, questionType: "note-completion" as const,
          questionText: "~The Bantu used iron tools to fell trees, clear forest and ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 40, questionType: "note-completion" as const,
          questionText: "~Iron meant they had a ________ over their neighbors",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },
      ]
    },
  ]
};

seedListeningTest06();

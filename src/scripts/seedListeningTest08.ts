import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest08() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");

    const existing = await ListeningTest.findOne({ testNumber: 8 });
    if (existing) {
      console.log("Listening Test #8 already exists. Updating...");
      await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
      console.log("\u2705 Listening Test 08 updated!");
    } else {
      const db = mongoose.connection.db!;
      const adminUser = await db.collection("users").findOne({ role: "admin" });
      const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
      await ListeningTest.create({ ...listeningTestData, createdBy });
      console.log("\u2705 Listening Test 08 created!");
    }

    const test = await ListeningTest.findOne({ testNumber: 8 });
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
  testId: "LISTENING_008",
  testNumber: 8,
  title: "Listening Mock Test 08 \u2013 Academic",
  description: "IELTS Academic Listening Test 08 \u2014 4 parts, 40 questions.",
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
    // ═══ PART 1 — Phone Interview / John Murphy (Q1–10) ═══
    {
      sectionNumber: 1,
      title: "Part 1",
      context: "A phone interview for a lifeguard position.",
      instructions: "Questions 1\u201310",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 1\u201310</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong style='text-align:center;display:block'>PHONE INTERVIEW</strong>"
        },

        {
          blockType: "instruction" as const,
          content: `<table border='1' style='border-collapse:collapse;width:100%'>
<tbody>
<tr><td style='padding:8px;width:45%'>Name</td><td style='padding:8px'>John Murphy</td></tr>
<tr style='background:#f3f4f6'><td style='padding:8px'>Example: Position applying for</td><td style='padding:8px'><u>Lifeguard</u></td></tr>
<tr><td style='padding:8px'>Street address:</td><td style='padding:8px'>45 <strong>[1]</strong> ......... Court</td></tr>
<tr><td style='padding:8px'>Contact phone number:</td><td style='padding:8px'><strong>[2]</strong></td></tr>
<tr><td style='padding:8px'>Current part-time job:</td><td style='padding:8px'><strong>[3]</strong></td></tr>
<tr><td style='padding:8px'>Previous job at Ridgemont High School</td><td style='padding:8px'><strong>[4]</strong></td></tr>
<tr><td style='padding:8px'>Additional relevant work experience:</td><td style='padding:8px'><strong>[5]</strong></td></tr>
<tr><td style='padding:8px'>Relevant skills/qualifications:</td><td style='padding:8px'>CPR certification & <strong>[6]</strong></td></tr>
<tr><td style='padding:8px'>CPR certification expiration date:</td><td style='padding:8px'><strong>[7]</strong></td></tr>
<tr><td style='padding:8px'>Preferred weekly shift:</td><td style='padding:8px'><strong>[8]</strong></td></tr>
<tr><td style='padding:8px'>Time available to start work:</td><td style='padding:8px'><strong>[9]</strong></td></tr>
<tr><td style='padding:8px'>Advertisement source:</td><td style='padding:8px'><strong>[10]</strong></td></tr>
</tbody></table>`
        },

        {
          blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const,
          questionText: "~Street address: 45 ________ Court",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const,
          questionText: "~Contact phone number: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const,
          questionText: "~Current part-time job: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const,
          questionText: "~Previous job at Ridgemont High School: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const,
          questionText: "~Additional relevant work experience: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const,
          questionText: "~Relevant skills/qualifications: CPR certification & ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 7, questionType: "form-completion" as const,
          questionText: "~CPR certification expiration date: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 8, questionType: "form-completion" as const,
          questionText: "~Preferred weekly shift: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 9, questionType: "form-completion" as const,
          questionText: "~Time available to start work: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 10, questionType: "form-completion" as const,
          questionText: "~Advertisement source: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },
      ]
    },

    // ═══ PART 2 — Campus Safety Lecture (Q11–20) ═══
    {
      sectionNumber: 2,
      title: "Part 2",
      context: "A lecture about campus safety and crime prevention.",
      instructions: "Questions 11\u201320",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 11\u201320</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>."
        },

        {
          blockType: "question" as const, questionNumber: 11, questionType: "multiple-choice" as const,
          questionText: "The lecture was organised by",
          options: [
            "A. City of Nottingham.",
            "B. University of Nottingham Students' Union.",
            "C. Nottingham Police Department."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 12, questionType: "multiple-choice" as const,
          questionText: "The majority of crime on campus is",
          options: [
            "A. drugs and alcohol.",
            "B. violence.",
            "C. theft."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 13, questionType: "multiple-choice" as const,
          questionText: "The campus crime rate has _________ so far this year.",
          options: [
            "A. increased.",
            "B. decreased.",
            "C. stayed the same."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 14, questionType: "multiple-choice" as const,
          questionText: "Why is there added concern about crime?",
          options: [
            "A. Exaggeration in media.",
            "B. Crime TV shows.",
            "C. Factual news articles."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 15, questionType: "multiple-choice" as const,
          questionText: "Carlos says if you are the victim of crime, you should",
          options: [
            "A. run away.",
            "B. resist.",
            "C. seek help."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 16, questionType: "multiple-choice" as const,
          questionText: "What is the primary method for increasing safety?",
          options: [
            "A. Informing students and staff of safety precautions.",
            "B. Offering free self-defense courses to students.",
            "C. Reminding students to carry a mobile phone at all times."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 17, questionType: "multiple-choice" as const,
          questionText: "If a student must work late, it is most important to",
          options: [
            "A. not return home until the morning.",
            "B. go back with a friend.",
            "C. bring a mobile phone."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 18, questionType: "multiple-choice" as const,
          questionText: "It is dangerous to",
          options: [
            "A. drive home late at night.",
            "B. carry a knife.",
            "C. carry pepper spray."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 19, questionType: "multiple-choice" as const,
          questionText: "Students who complete self-defense course are",
          options: [
            "A. more aware of dangers.",
            "B. mentally tougher.",
            "C. walking more confidently."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 20, questionType: "multiple-choice" as const,
          questionText: "A university is",
          options: [
            "A. not surrounded by walls.",
            "B. patrolled by military.",
            "C. completely safe."
          ],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // ═══ PART 3 — School Project / Bobby (Q21–30) ═══
    {
      sectionNumber: 3,
      title: "Part 3",
      context: "A discussion about Bobby\u2019s school project on football.",
      instructions: "Questions 21\u201330",
      audioUrl: "",
      questions: [
        // --- Q21-23: MCQ ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 21\u201323</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },

        {
          blockType: "question" as const, questionNumber: 21, questionType: "multiple-choice" as const,
          questionText: "Information on the test is from",
          options: [
            "A. the teacher.",
            "B. a class.",
            "C. a handout."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 22, questionType: "multiple-choice" as const,
          questionText: "This assignment is important because",
          options: [
            "A. it will become a permanent record.",
            "B. it is a must for passing 11th grade English.",
            "C. it will affect the English level next year."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 23, questionType: "multiple-choice" as const,
          questionText: "Bobby chooses football as project topic because",
          options: [
            "A. he often plays football.",
            "B. his father loves football.",
            "C. he is interested in football."
          ],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q24-30: Matching (SEVEN answers, A-H) ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 24\u201330</strong><br/><em>What problems do the speakers identify for this project?</em><br/>Choose <strong>SEVEN</strong> answers from the box and write the letters <strong>A\u2013H</strong> next to questions 24\u201330."
        },

        {
          blockType: "instruction" as const,
          content: `<div style='border:1px solid #374151;padding:12px;max-width:300px;float:right;margin-left:16px'>
<div style='font-weight:bold;margin-bottom:6px'>Problems</div>
<div><strong>A</strong> too vague</div>
<div><strong>B</strong> too factual</div>
<div><strong>C</strong> too unreliable</div>
<div><strong>D</strong> too noisy</div>
<div><strong>E</strong> too long</div>
<div><strong>F</strong> too short</div>
<div><strong>G</strong> too complicated</div>
<div><strong>H</strong> too simple</div>
</div>`
        },

        {
          blockType: "question" as const, questionNumber: 24, questionType: "matching" as const,
          questionText: "Background sounds",
          options: ["A. too vague", "B. too factual", "C. too unreliable", "D. too noisy", "E. too long", "F. too short", "G. too complicated", "H. too simple"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 25, questionType: "matching" as const,
          questionText: "Answer of questions",
          options: ["A. too vague", "B. too factual", "C. too unreliable", "D. too noisy", "E. too long", "F. too short", "G. too complicated", "H. too simple"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 26, questionType: "matching" as const,
          questionText: "One of the questions",
          options: ["A. too vague", "B. too factual", "C. too unreliable", "D. too noisy", "E. too long", "F. too short", "G. too complicated", "H. too simple"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 27, questionType: "matching" as const,
          questionText: "Time of answering",
          options: ["A. too vague", "B. too factual", "C. too unreliable", "D. too noisy", "E. too long", "F. too short", "G. too complicated", "H. too simple"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 28, questionType: "matching" as const,
          questionText: "Recording equipment",
          options: ["A. too vague", "B. too factual", "C. too unreliable", "D. too noisy", "E. too long", "F. too short", "G. too complicated", "H. too simple"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 29, questionType: "matching" as const,
          questionText: "Topic of project",
          options: ["A. too vague", "B. too factual", "C. too unreliable", "D. too noisy", "E. too long", "F. too short", "G. too complicated", "H. too simple"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 30, questionType: "matching" as const,
          questionText: "Report on project",
          options: ["A. too vague", "B. too factual", "C. too unreliable", "D. too noisy", "E. too long", "F. too short", "G. too complicated", "H. too simple"],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // ═══ PART 4 — Giving a Speech (Q31–40) ═══
    {
      sectionNumber: 4,
      title: "Part 4",
      context: "A lecture about how to prepare and give a speech.",
      instructions: "Questions 31\u201340",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 31\u201340</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: "<strong>GIVING A SPEECH</strong>"
        },

        // Reasons for nervousness
        {
          blockType: "instruction" as const,
          content: "<strong>Reasons for nervousness</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 31, questionType: "note-completion" as const,
          questionText: "Lecturers often feel more nervous if a speech is ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 32, questionType: "note-completion" as const,
          questionText: "Many think that the ability to make a good public speaking is ________, while in fact it is a skill that can be learned by anyone",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        // How to prepare a quality speech
        {
          blockType: "instruction" as const,
          content: "<strong>How to prepare a quality speech</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 33, questionType: "note-completion" as const,
          questionText: "The audience will only remember the ________ sentence of speech",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 34, questionType: "note-completion" as const,
          questionText: "Ensure that your speech is ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        // Do's and Don'ts
        {
          blockType: "instruction" as const,
          content: "<strong>Do\u2019s and Don\u2019ts</strong>"
        },

        {
          blockType: "question" as const, questionNumber: 35, questionType: "note-completion" as const,
          questionText: "Don\u2019t start your speech until audience is ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const,
          questionText: "You can make your main ideas or notes on cards or a ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const,
          questionText: "You do not need to write down the ________ speech",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const,
          questionText: "You can just write ________ ideas",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 39, questionType: "note-completion" as const,
          questionText: "Remember to ________ yourself to see how long your speech will be",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 40, questionType: "note-completion" as const,
          questionText: "Don\u2019t just ________ a script",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },
      ]
    },
  ]
};

seedListeningTest08();

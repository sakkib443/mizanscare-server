import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest09() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");

    const existing = await ListeningTest.findOne({ testNumber: 9 });
    if (existing) {
      console.log("Listening Test #9 already exists. Updating...");
      await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
      console.log("\u2705 Listening Test 09 updated!");
    } else {
      const db = mongoose.connection.db!;
      const adminUser = await db.collection("users").findOne({ role: "admin" });
      const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
      await ListeningTest.create({ ...listeningTestData, createdBy });
      console.log("\u2705 Listening Test 09 created!");
    }

    const test = await ListeningTest.findOne({ testNumber: 9 });
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
  testId: "LISTENING_009",
  testNumber: 9,
  title: "Listening Mock Test 09 \u2013 Academic",
  description: "IELTS Academic Listening Test 09 \u2014 4 parts, 40 questions.",
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
    // ═══ PART 1 — Five-Star Caterers Booking (Q1–10) ═══
    {
      sectionNumber: 1,
      title: "Part 1",
      context: "A phone call to book catering services from Five-Star Caterers.",
      instructions: "Questions 1\u201310",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 1\u20138</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: `<div class='ielts-form-box'>
<div class='ielts-form-title'>Five-Star Caterers Customer Booking Form</div>
<div class='ielts-form-row' style='opacity:0.75;font-style:italic'>Example Event: <u>party</u></div>
<div class='ielts-form-row'>Customer name: Mr <strong>[1]</strong></div>
<div class='ielts-form-row'>Daytime telephone number: <strong>[2]</strong></div>
<div class='ielts-form-row'>Telephone number after 5 pm: As above (If no one answers, <strong>[3]</strong>)</div>
<div class='ielts-form-row'>Number of guests: <strong>[4]</strong></div>
<div class='ielts-form-row'>Date: <strong>[5]</strong></div>
<div class='ielts-form-row'>Seating Shape: <strong>[6]</strong></div>
<div class='ielts-form-row'>Size: <strong>[7]</strong></div>
<div class='ielts-form-row'>Number of tables: <strong>[8]</strong></div>
</div>`
        },

        {
          blockType: "question" as const, questionNumber: 1, questionType: "form-completion" as const,
          questionText: "~Customer name: Mr ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 2, questionType: "form-completion" as const,
          questionText: "~Daytime telephone number: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 3, questionType: "form-completion" as const,
          questionText: "~Telephone number after 5 pm: As above (If no one answers, ________)",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const,
          questionText: "~Number of guests: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const,
          questionText: "~Date: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const,
          questionText: "~Seating Shape: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 7, questionType: "form-completion" as const,
          questionText: "~Size: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 8, questionType: "form-completion" as const,
          questionText: "~Number of tables: ________",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        // --- Q9-10: MCQ ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 9 and 10</strong><br/>Choose the correct letter <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },

        {
          blockType: "question" as const, questionNumber: 9, questionType: "multiple-choice" as const,
          questionText: "The man decided to book",
          options: [
            "A. a three-course meal",
            "B. a buffet",
            "C. a banquet"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 10, questionType: "multiple-choice" as const,
          questionText: "The man will have to pay",
          options: [
            "A. \u00A3750 tomorrow",
            "B. \u00A3100 per head",
            "C. \u00A31500 on the day of the party"
          ],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // ═══ PART 2 — Buckingham Palace (Q11–20) ═══
    {
      sectionNumber: 2,
      title: "Part 2",
      context: "A talk about the history of Buckingham Palace.",
      instructions: "Questions 11\u201320",
      audioUrl: "",
      questions: [
        // --- Q11-17: Matching (time periods A/B/C) ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 11\u201317</strong><br/>According to the speaker, when did the following happen?<br/>Write the correct letter <strong>A</strong>, <strong>B</strong> or <strong>C</strong>, next to Questions 11\u201317."
        },

        {
          blockType: "question" as const, questionNumber: 11, questionType: "matching" as const,
          questionText: "The East Front was added to the building.",
          options: ["A. before 1837", "B. between 1837 and 1900", "C. after 1900"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 12, questionType: "matching" as const,
          questionText: "The last big structural change was made.",
          options: ["A. before 1837", "B. between 1837 and 1900", "C. after 1900"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 13, questionType: "matching" as const,
          questionText: "The building was bombed.",
          options: ["A. before 1837", "B. between 1837 and 1900", "C. after 1900"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 14, questionType: "matching" as const,
          questionText: "The building became a palace.",
          options: ["A. before 1837", "B. between 1837 and 1900", "C. after 1900"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 15, questionType: "matching" as const,
          questionText: "The building was known as The Queen\u2019s house.",
          options: ["A. before 1837", "B. between 1837 and 1900", "C. after 1900"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 16, questionType: "matching" as const,
          questionText: "The Houses of Parliament were destroyed by fire.",
          options: ["A. before 1837", "B. between 1837 and 1900", "C. after 1900"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 17, questionType: "matching" as const,
          questionText: "The marble Arch was moved.",
          options: ["A. before 1837", "B. between 1837 and 1900", "C. after 1900"],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q18-20: Sentence Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 18\u201320</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer."
        },

        {
          blockType: "question" as const, questionNumber: 18, questionType: "sentence-completion" as const,
          questionText: "~Up to ________ people attend garden parties at the palace each year",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 19, questionType: "sentence-completion" as const,
          questionText: "~The garden contains more than ________ species of wild flower",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 20, questionType: "sentence-completion" as const,
          questionText: "~The public can visit the nineteen ________ in August or September",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },
      ]
    },

    // ═══ PART 3 — Social Studies Course (Q21–30) ═══
    {
      sectionNumber: 3,
      title: "Part 3",
      context: "A discussion about a social studies course and its subjects.",
      instructions: "Questions 21\u201330",
      audioUrl: "",
      questions: [
        // --- Q21-24: Short Answer ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 21\u201324</strong><br/>Answer the questions below. Write <strong>NO MORE THAN THREE WORDS</strong> for each answer."
        },

        {
          blockType: "question" as const, questionNumber: 21, questionType: "short-answer" as const,
          questionText: "~What aspect of history is it important to learn something from?",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 22, questionType: "short-answer" as const,
          questionText: "~What do we also need to know about our ancestors?",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 23, questionType: "short-answer" as const,
          questionText: "~Where are transferable skills useful?",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        {
          blockType: "question" as const, questionNumber: 24, questionType: "short-answer" as const,
          questionText: "~What kind of approach to learning does social science use?",
          correctAnswer: "TBD", marks: 1, wordLimit: 3
        },

        // --- Q25-30: Matching (A-H) ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 25\u201330</strong><br/>What is said about each of these subjects studied on a social studies course?<br/>Choose your answer from the box and write the letters <strong>A\u2013H</strong> next to Questions 25\u201330."
        },

        {
          blockType: "instruction" as const,
          content: `<div style='margin:8px 0;padding:10px;border:1px solid #d1d5db'>
<div><strong>A</strong> This will focus on how each generation learns about its own culture.</div>
<div><strong>B</strong> This necessarily includes a study of physics and chemistry.</div>
<div><strong>C</strong> This is studied from the point of view of human behavior</div>
<div><strong>D</strong> This is will only be covered in terms of its theory.</div>
<div><strong>E</strong> This also covers the distribution of wealth.</div>
<div><strong>F</strong> This includes the study of archeology.</div>
<div><strong>G</strong> This has received criticism for not being scientific enough.</div>
<div><strong>H</strong> This includes some work on urban planning.</div>
</div>`
        },

        {
          blockType: "question" as const, questionNumber: 25, questionType: "matching" as const,
          questionText: "Anthropology",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 26, questionType: "matching" as const,
          questionText: "Economics",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 27, questionType: "matching" as const,
          questionText: "Education",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 28, questionType: "matching" as const,
          questionText: "Geography",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 29, questionType: "matching" as const,
          questionText: "Law",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 30, questionType: "matching" as const,
          questionText: "Sociology and social work",
          options: ["A", "B", "C", "D", "E", "F", "G", "H"],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },

    // ═══ PART 4 — The 1950s & 1960s / Cuban Missile Crisis (Q31–40) ═══
    {
      sectionNumber: 4,
      title: "Part 4",
      context: "A lecture about cultural changes in the 1950s and 1960s, including the Cuban Missile Crisis.",
      instructions: "Questions 31\u201340",
      audioUrl: "",
      questions: [
        // --- Q31-37: MCQ ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 31\u201337</strong><br/>Choose the correct letter <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },

        {
          blockType: "question" as const, questionNumber: 31, questionType: "multiple-choice" as const,
          questionText: "Students should complete their work on the 1950s",
          options: [
            "A. if they want to be allowed to continue attending lectures.",
            "B. because they will appreciate the information about the 1960s more.",
            "C. otherwise they face the possibility of being failed for their coursework."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 32, questionType: "multiple-choice" as const,
          questionText: "According to the lecturer, the \u2018baby boom\u2019 happened",
          options: [
            "A. because of relaxed attitudes in the sixties.",
            "B. during a time of war.",
            "C. because people felt more secure."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 33, questionType: "multiple-choice" as const,
          questionText: "In the sixties, the USA had 70 million",
          options: [
            "A. teenagers.",
            "B. babies.",
            "C. adults."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 34, questionType: "multiple-choice" as const,
          questionText: "According to the lecturer, compared to the 1950s, the 1960s were",
          options: [
            "A. less conservative.",
            "B. more conservative.",
            "C. just as conservative."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 35, questionType: "multiple-choice" as const,
          questionText: "According to the lecturer, literature changed the way women",
          options: [
            "A. over 40 were treated by society.",
            "B. viewed issues of race in society.",
            "C. felt about their roles in society."
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 36, questionType: "multiple-choice" as const,
          questionText: "The rate of crime in the sixties",
          options: [
            "A. rose nine percent during the decade.",
            "B. was nine times higher than in the fifties.",
            "C. was nine times lower than in the fifties"
          ],
          correctAnswer: "TBD", marks: 1
        },

        {
          blockType: "question" as const, questionNumber: 37, questionType: "multiple-choice" as const,
          questionText: "What happened at the start of the 1960s",
          options: [
            "A. the first heart transplant",
            "B. the introduction of the internet",
            "C. the invention of lasers"
          ],
          correctAnswer: "TBD", marks: 1
        },

        // --- Q38-40: Summary Completion ---
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 38\u201340</strong><br/>Complete the summary below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer."
        },

        {
          blockType: "instruction" as const,
          content: `<div style='line-height:2;font-size:15px'>
In October, 1962, US President Kennedy met advisers to discuss <strong>[38]</strong> which proved that the Cubans were installing nuclear missiles, presumably to use against the US. Kennedy was faced with three choices: to try to resolve the crisis diplomatically; to block the delivery of further weapons into Cuba; or to attack Cuba. Kennedy chose <strong>[39]</strong> option, which prevented the build-up of more missiles and led to the withdrawal of the existing ones. Most are agreed that a <strong>[40]</strong> was narrowly avoided by Kennedy\u2019s decision.
</div>`
        },

        {
          blockType: "question" as const, questionNumber: 38, questionType: "summary-completion" as const,
          questionText: "~Kennedy met advisers to discuss ________ which proved that the Cubans were installing nuclear missiles",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 39, questionType: "summary-completion" as const,
          questionText: "~Kennedy chose ________ option, which prevented the build-up of more missiles",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },

        {
          blockType: "question" as const, questionNumber: 40, questionType: "summary-completion" as const,
          questionText: "~Most are agreed that a ________ was narrowly avoided by Kennedy\u2019s decision",
          correctAnswer: "TBD", marks: 1, wordLimit: 2
        },
      ]
    },
  ]
};

seedListeningTest09();

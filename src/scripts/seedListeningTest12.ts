import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest12() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB");
    const existing = await ListeningTest.findOne({ testNumber: 12 });
    if (existing) {
      await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
      console.log("\u2705 Listening Test 12 updated!");
    } else {
      const db = mongoose.connection.db!;
      const adminUser = await db.collection("users").findOne({ role: "admin" });
      const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
      await ListeningTest.create({ ...listeningTestData, createdBy });
      console.log("\u2705 Listening Test 12 created!");
    }
    const test = await ListeningTest.findOne({ testNumber: 12 });
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
  testId: "LISTENING_012",
  testNumber: 12,
  title: "Listening Mock Test 12 \u2013 Academic",
  description: "IELTS Academic Listening Test 12 \u2014 4 parts, 40 questions.",
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
    // ═══ PART 1 — Transport to Harbour City (Q1–10) ═══
    {
      sectionNumber: 1,
      title: "Part 1",
      context: "Information about transport options from Bayswater to Harbour City.",
      instructions: "Questions 1\u201310",
      audioUrl: "",
      questions: [
        // Q1-5: Note completion
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 1\u20135</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong>."
        },
        {
          blockType: "instruction" as const,
          content: "Destination: <strong>Harbour City</strong><br/>Questions: transport from Bayswater"
        },
        { blockType: "question" as const, questionNumber: 1, questionType: "note-completion" as const, questionText: "Express train leaves at ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 2, questionType: "note-completion" as const, questionText: "Nearest Station is ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 3, questionType: "note-completion" as const, questionText: "Number 706 bus goes to ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 4, questionType: "note-completion" as const, questionText: "Number ________ bus goes to station", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 5, questionType: "note-completion" as const, questionText: "Earlier bus leaves at ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },

        // Q6-10: Table completion
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 6\u201310</strong><br/>Complete the table below. Write <strong>no more than one word and/or a number</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr>
<th style='padding:8px;background:#f3f4f6'>Transport</th>
<th style='padding:8px;background:#f3f4f6'>Cash fare</th>
<th style='padding:8px;background:#f3f4f6'>Card fare</th>
</tr></thead>
<tbody>
<tr><td style='padding:8px'>Bus</td><td style='padding:8px'><strong>[6]</strong></td><td style='padding:8px'>$3.50</td></tr>
<tr><td style='padding:8px'>Train (peak)</td><td style='padding:8px'>$10</td><td style='padding:8px'>$10</td></tr>
<tr><td style='padding:8px'>Train (off-peak) before 5 pm or after</td><td style='padding:8px'>$10</td><td style='padding:8px'><strong>[8]</strong></td></tr>
<tr><td style='padding:8px'><strong>[7]</strong> ferry</td><td style='padding:8px'>$4.50</td><td style='padding:8px'>$3.60</td></tr>
<tr><td style='padding:8px'>Tourist ferry</td><td style='padding:8px'><strong>[9]</strong></td><td style='padding:8px'>$2.50</td></tr>
<tr><td style='padding:8px'>Tourist ferry (whole day)</td><td style='padding:8px'><strong>[10]</strong></td><td style='padding:8px'>$85</td></tr>
</tbody></table>`
        },
        { blockType: "question" as const, questionNumber: 6, questionType: "table-completion" as const, questionText: "~Bus cash fare: ________", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
        { blockType: "question" as const, questionNumber: 7, questionType: "table-completion" as const, questionText: "~________ ferry", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
        { blockType: "question" as const, questionNumber: 8, questionType: "table-completion" as const, questionText: "~Train (off-peak) card fare: ________", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
        { blockType: "question" as const, questionNumber: 9, questionType: "table-completion" as const, questionText: "~Tourist ferry cash fare: ________", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
        { blockType: "question" as const, questionNumber: 10, questionType: "table-completion" as const, questionText: "~Tourist ferry (whole day) cash fare: ________", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
      ]
    },

    // ═══ PART 2 — University Counselling (Q11–20) ═══
    {
      sectionNumber: 2,
      title: "Part 2",
      context: "Information about university counselling services and workshops.",
      instructions: "Questions 11\u201320",
      audioUrl: "",
      questions: [
        // Q11-14: Matching (counsellors)
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 11\u201314</strong><br/>Which counsellor should you see? Write the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>, next to questions 11\u201314."
        },
        { blockType: "question" as const, questionNumber: 11, questionType: "matching" as const, questionText: "If it is your first time seeing a counsellor", options: ["A. Louise Bagshaw", "B. Tony Denby", "C. Naomi Flynn"], correctAnswer: "TBD", marks: 1 },
        { blockType: "question" as const, questionNumber: 12, questionType: "matching" as const, questionText: "If you are unable to use a counsellor during normal office hours", options: ["A. Louise Bagshaw", "B. Tony Denby", "C. Naomi Flynn"], correctAnswer: "TBD", marks: 1 },
        { blockType: "question" as const, questionNumber: 13, questionType: "matching" as const, questionText: "If you do not have an appointment", options: ["A. Louise Bagshaw", "B. Tony Denby", "C. Naomi Flynn"], correctAnswer: "TBD", marks: 1 },
        { blockType: "question" as const, questionNumber: 14, questionType: "matching" as const, questionText: "If your concerns are related to anxiety", options: ["A. Louise Bagshaw", "B. Tony Denby", "C. Naomi Flynn"], correctAnswer: "TBD", marks: 1 },

        // Q15-20: Table completion
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 15\u201320</strong><br/>Complete the table below. Write <strong>no more than two words</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr>
<th style='padding:8px;background:#f3f4f6'>Workshop</th>
<th style='padding:8px;background:#f3f4f6'>Content</th>
<th style='padding:8px;background:#f3f4f6'>Target Group</th>
</tr></thead>
<tbody>
<tr><td style='padding:8px'>Adjusting</td><td style='padding:8px'>what you need to succeed academically</td><td style='padding:8px'><strong>[15]</strong> students</td></tr>
<tr><td style='padding:8px'>Getting organized</td><td style='padding:8px'>Use time effectively, find <strong>[16]</strong> between work and leisure</td><td style='padding:8px'>All students</td></tr>
<tr><td style='padding:8px'>Communicating</td><td style='padding:8px'>Talking with staff, communicating across cultures</td><td style='padding:8px'>All students, especially <strong>[17]</strong></td></tr>
<tr><td style='padding:8px'>Anxiety</td><td style='padding:8px'><strong>[18]</strong>, breathing technique, meditation, etc.</td><td style='padding:8px'>Student about to sit exam</td></tr>
<tr><td style='padding:8px'><strong>[19]</strong></td><td style='padding:8px'>Staying on track for long periods</td><td style='padding:8px'><strong>[20]</strong> students only</td></tr>
</tbody></table>`
        },
        { blockType: "question" as const, questionNumber: 15, questionType: "table-completion" as const, questionText: "~Adjusting target group: ________ students", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 16, questionType: "table-completion" as const, questionText: "~Getting organized: find ________ between work and leisure", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 17, questionType: "table-completion" as const, questionText: "~Communicating: All students, especially ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 18, questionType: "table-completion" as const, questionText: "~Anxiety content: ________, breathing technique, meditation", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 19, questionType: "table-completion" as const, questionText: "~Workshop name: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 20, questionType: "table-completion" as const, questionText: "~Target group: ________ students only", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      ]
    },

    // ═══ PART 3 — Novel Analysis (Q21–30) ═══
    {
      sectionNumber: 3,
      title: "Part 3",
      context: "A discussion about analysing a novel \u2013 The Secret Garden.",
      instructions: "Questions 21\u201330",
      audioUrl: "",
      questions: [
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 21\u201330</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer."
        },
        { blockType: "question" as const, questionNumber: 21, questionType: "note-completion" as const, questionText: "~Novel: ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        {
          blockType: "instruction" as const,
          content: "Protagonists: Mary Lennox; Colin Craven"
        },
        { blockType: "question" as const, questionNumber: 22, questionType: "note-completion" as const, questionText: "~Time period: Early in ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 23, questionType: "note-completion" as const, questionText: "~Mary moves to UK: meets Colin who thinks he\u2019ll never be able to ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 24, questionType: "note-completion" as const, questionText: "~\u201COmniscient\u201D \u2013 narrator knows all about characters\u2019 feelings, opinions and ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        {
          blockType: "instruction" as const,
          content: "Audience: Good for children \u2013 story simple to follow."
        },
        { blockType: "question" as const, questionNumber: 25, questionType: "note-completion" as const, questionText: "~Symbols (physical items that represent) ________:", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 26, questionType: "note-completion" as const, questionText: "~\u2022 the robin redbreast\n\u2022 ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 27, questionType: "note-completion" as const, questionText: "~secrecy \u2013 metaphorical and literal transition from ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        {
          blockType: "instruction" as const,
          content: "<strong>Themes:</strong> Connections between"
        },
        { blockType: "question" as const, questionNumber: 28, questionType: "note-completion" as const, questionText: "~________ and outlook", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 29, questionType: "note-completion" as const, questionText: "~________ and well-being", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
        { blockType: "question" as const, questionNumber: 30, questionType: "note-completion" as const, questionText: "~individuals and the need for ________", correctAnswer: "TBD", marks: 1, wordLimit: 2 },
      ]
    },

    // ═══ PART 4 — Time Perspectives (Q31–40) ═══
    {
      sectionNumber: 4,
      title: "Part 4",
      context: "A lecture about how people perceive and orient themselves in time.",
      instructions: "Questions 31\u201340",
      audioUrl: "",
      questions: [
        // Q31-35: Table completion
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 31\u201335</strong><br/>Complete the table below. Write <strong>one word only</strong> for each answer."
        },
        {
          blockType: "instruction" as const,
          content: `<table border='1' style='border-collapse:collapse;width:100%'>
<thead><tr>
<th style='padding:8px;background:#f3f4f6'>Time zone</th>
<th style='padding:8px;background:#f3f4f6'>Outlook</th>
<th style='padding:8px;background:#f3f4f6'>Features and consequences</th>
</tr></thead>
<tbody>
<tr><td style='padding:8px' rowspan='2'>Past</td><td style='padding:8px'>Positive</td><td style='padding:8px'>Remember good time, e.g. birthdays, keep family records, photo albums, etc.</td></tr>
<tr><td style='padding:8px'></td><td style='padding:8px'>Focus on disappointments, failures, bad decisions</td></tr>
<tr><td style='padding:8px' rowspan='2'>Present</td><td style='padding:8px'><strong>[31]</strong></td><td style='padding:8px'>Live for <strong>[32]</strong>, seek sensation, avoid pain</td></tr>
<tr><td style='padding:8px'>Fatalistic</td><td style='padding:8px'>Life is governed by <strong>[33]</strong>, religious belief, social conditions. Little\u2019s felt can be changed.</td></tr>
<tr><td style='padding:8px' rowspan='2'>Future</td><td style='padding:8px'><strong>[34]</strong></td><td style='padding:8px'>Prefer work to play. Don\u2019t give in to temptation.</td></tr>
<tr><td style='padding:8px'>Fatalistic</td><td style='padding:8px'>Have a strong belief in life after death and importance of <strong>[35]</strong> in life.</td></tr>
</tbody></table>`
        },
        { blockType: "question" as const, questionNumber: 31, questionType: "table-completion" as const, questionText: "~Present outlook: ________", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
        { blockType: "question" as const, questionNumber: 32, questionType: "table-completion" as const, questionText: "~Live for ________, seek sensation, avoid pain", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
        { blockType: "question" as const, questionNumber: 33, questionType: "table-completion" as const, questionText: "~Life is governed by ________, religious belief, social conditions", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
        { blockType: "question" as const, questionNumber: 34, questionType: "table-completion" as const, questionText: "~Future outlook: ________", correctAnswer: "TBD", marks: 1, wordLimit: 1 },
        { blockType: "question" as const, questionNumber: 35, questionType: "table-completion" as const, questionText: "~importance of ________ in life", correctAnswer: "TBD", marks: 1, wordLimit: 1 },

        // Q36-40: MCQ
        {
          blockType: "instruction" as const,
          content: "<strong>Questions 36\u201340</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>."
        },
        {
          blockType: "question" as const, questionNumber: 36, questionType: "multiple-choice" as const,
          questionText: "We are all present hedonists",
          options: ["A. at school", "B. at birth", "C. while eating and drinking"],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 37, questionType: "multiple-choice" as const,
          questionText: "American boys drop out of school at a higher rate than girls because",
          options: ["A. they need to be in control of the way they learn", "B. they play video games instead of doing school work", "C. they are not as intelligent as girls"],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 38, questionType: "multiple-choice" as const,
          questionText: "Present-orientated children",
          options: ["A. do not realise present actions can have negative future effects", "B. are unable to learn lessons from past mistakes", "C. know what could happen if they do something bad, but do it anyway"],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 39, questionType: "multiple-choice" as const,
          questionText: "If Americans had an extra day per week, they would spend it",
          options: ["A. working harder", "B. building relationships", "C. sharing family meals"],
          correctAnswer: "TBD", marks: 1
        },
        {
          blockType: "question" as const, questionNumber: 40, questionType: "multiple-choice" as const,
          questionText: "Understanding how people think about time can help us",
          options: ["A. become more virtuous", "B. work together better", "C. identify careless or ambitious people"],
          correctAnswer: "TBD", marks: 1
        },
      ]
    },
  ]
};

seedListeningTest12();

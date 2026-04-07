# IELTS Listening Test — Upload Format Guide

> **This file is the SINGLE SOURCE OF TRUTH for creating listening test seed scripts.**
> Follow this guide EXACTLY. Use INTERLEAVED instruction + question blocks.

---

## 🔑 CRITICAL RULES

1. **Structure**: 4 sections (Parts 1-4), 10 questions each, total 40 questions
2. **Flat Questions**: Each section has a flat `questions[]` array containing both `instruction` and `question` blocks
3. **INTERLEAVED Pattern**: Context lines → instruction block, blanks → question block, alternating in order
4. **NO `[N]` Placeholders**: Do NOT use `[N]` in instruction HTML. Use separate question blocks instead
5. **Instruction blocks**: Use HTML `content` for headings, context lines, option lists
6. **Question blocks**: Use `questionNumber`, `questionType`, `correctAnswer`, `questionText`
7. **Upsert logic**: Always check `testNumber` to avoid duplicates
8. **Answer in questionText**: Include the full sentence with `________` where the blank is

---

## ⚠️ WRONG vs CORRECT Pattern

### ❌ WRONG — Do NOT use [N] placeholders
```typescript
// BAD! This causes rendering issues
{
    blockType: "instruction",
    content: "<ul><li>Name: <strong>[1]</strong></li><li>Phone: <strong>[2]</strong></li></ul>"
}
```

### ✅ CORRECT — Interleaved instruction + question blocks
```typescript
// Context lines as instruction
{ blockType: "instruction", content: "<ul><li>Name of scientist: Dr Thomas Boothby</li></ul>" },
// Blank as question
{ blockType: "question", questionNumber: 1, questionType: "note-completion",
  questionText: "Experiment site: International ________ Station",
  correctAnswer: "Space", marks: 1, wordLimit: 3 },
// Next blank
{ blockType: "question", questionNumber: 2, questionType: "note-completion",
  questionText: "Work began in ________",
  correctAnswer: "2015", marks: 1, wordLimit: 3 },
// More context lines as instruction
{ blockType: "instruction", content: "<ul><li>Also called water bears</li></ul>" },
// Next blank
{ blockType: "question", questionNumber: 3, ... },
```

---

## 📋 QUESTION TYPES — Complete Reference

### 1. `note-completion` (Fill blanks in notes)

```typescript
// Context lines BEFORE the blank
{ blockType: "instruction", content: "<strong>Bankside Recruitment Agency</strong><br/><ul><li>Address: 497 Eastside</li></ul>" },

// The blank itself
{ blockType: "question", questionNumber: 1, questionType: "note-completion",
  questionText: "Name of agent: Becky ________",
  correctAnswer: "Jamieson", marks: 1, wordLimit: 1 },

// Context line BETWEEN blanks
{ blockType: "instruction", content: "<ul><li>Clerical and admin roles</li></ul>" },

// Next blank
{ blockType: "question", questionNumber: 2, questionType: "note-completion",
  questionText: "Must have good ________ skills",
  correctAnswer: "communication", marks: 1, wordLimit: 1 },
```

### 2. `form-completion` (Fill form fields)
Same pattern as note-completion but `questionType: "form-completion"`.

### 3. `sentence-completion` (Complete sentences)
Same pattern but `questionType: "sentence-completion"`.

### 4. `table-completion` (Fill table blanks)

Use `[N]` ONLY inside table HTML (tables are special — they need embedded inputs).

```typescript
// Instruction header
{ blockType: "instruction",
  content: "<strong>Questions 15-20</strong><br/>Complete the table below." },

// Table HTML with [N] placeholders
{ blockType: "instruction",
  content: `<table border='1' style='border-collapse:collapse;width:100%'>
    <thead><tr><th>Day</th><th>Activity</th></tr></thead>
    <tbody>
      <tr><td>Day 1</td><td>View of the <strong>[15]</strong></td></tr>
      <tr><td>Day 2</td><td>Founded in <strong>[16]</strong></td></tr>
    </tbody></table>` },

// Question blocks for grading
{ blockType: "question", questionNumber: 15, questionType: "table-completion",
  questionText: "View of the ________", correctAnswer: "river", marks: 1, wordLimit: 1 },
{ blockType: "question", questionNumber: 16, questionType: "table-completion",
  questionText: "Founded in ________", correctAnswer: "979", marks: 1, wordLimit: 1 },
```

### 5. `summary-completion` / `flow-chart-completion`
Same pattern as note-completion with respective `questionType`.

### 6. `multiple-choice` (Single answer MCQ: A/B/C)

```typescript
// Instruction
{ blockType: "instruction",
  content: "<strong>Questions 11-14</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>." },

// Each MCQ as separate question block
{ blockType: "question", questionNumber: 11, questionType: "multiple-choice",
  questionText: "According to the speaker, the company",
  options: [
    "A. has been in business for longer than most of its competitors.",
    "B. arranges holidays to more destinations than its competitors.",
    "C. has more customers than its competitors."
  ],
  correctAnswer: "A", marks: 1 },

{ blockType: "question", questionNumber: 12, questionType: "multiple-choice",
  questionText: "What does the speaker say about the hotel?",
  options: [
    "A. It is near the beach.",
    "B. It has a swimming pool.",
    "C. It is in the city centre."
  ],
  correctAnswer: "C", marks: 1 },
```

### 7. `multiple-choice-multi` (Choose TWO letters)

```typescript
// Instruction
{ blockType: "instruction",
  content: "<strong>Questions 29-30</strong><br/>Choose <strong>TWO</strong> letters, A-E.<br/><br/>Which TWO experiences were valuable?" },

// TWO separate question blocks (same options, different correct answers)
{ blockType: "question", questionNumber: 29, questionType: "multiple-choice-multi",
  questionText: "Which TWO experiences were valuable?",
  options: ["A. learning to share", "B. standing up for oneself", "C. putting up with each other",
            "D. finding out what is important", "E. learning to be a good loser"],
  correctAnswer: "B", marks: 1 },

{ blockType: "question", questionNumber: 30, questionType: "multiple-choice-multi",
  questionText: "Which TWO experiences were valuable?",
  options: ["A. learning to share", "B. standing up for oneself", "C. putting up with each other",
            "D. finding out what is important", "E. learning to be a good loser"],
  correctAnswer: "D", marks: 1 },
```

### 8. `matching` (Match items from a list)

```typescript
// Instruction with options listed
{ blockType: "instruction",
  content: `<strong>Questions 21-26</strong><br/>Choose SIX answers from the box.<br/><br/>
    <strong>Personality Traits</strong><br/>
    A &nbsp; outgoing<br/>B &nbsp; selfish<br/>C &nbsp; independent<br/>
    D &nbsp; attention-seeking<br/>E &nbsp; introverted<br/>F &nbsp; co-operative<br/>
    G &nbsp; caring<br/>H &nbsp; competitive` },

// Each matching question
{ blockType: "question", questionNumber: 21, questionType: "matching",
  questionText: "the eldest child",
  options: ["A", "B", "C", "D", "E", "F", "G", "H"],
  correctAnswer: "G", marks: 1 },

{ blockType: "question", questionNumber: 22, questionType: "matching",
  questionText: "the


 middle child",
  options: ["A", "B", "C", "D", "E", "F", "G", "H"],
  correctAnswer: "E", marks: 1 },
```

### 9. `map-labeling` / `diagram-labeling`

```typescript
// Instruction with image
{ blockType: "instruction",
  content: "<strong>Questions 15-20</strong><br/>Label the map below.",
  imageUrl: "https://your-image-url.jpg" },

// Each label question
{ blockType: "question", questionNumber: 15, questionType: "map-labeling",
  questionText: "Location 15",
  options: ["A", "B", "C", "D", "E", "F", "G"],
  correctAnswer: "C", marks: 1, imageUrl: "https://your-image-url.jpg" },
```

### 10. `short-answer` (Write short answers)

```typescript
{ blockType: "instruction",
  content: "<strong>Questions 35-37</strong><br/>Answer the questions below.<br/>Write <strong>NO MORE THAN THREE WORDS</strong>." },

{ blockType: "question", questionNumber: 35, questionType: "short-answer",
  questionText: "What is the main cause of the disease?",
  correctAnswer: "pollution", marks: 1, wordLimit: 3 },
```

---

## 🏗️ SEED SCRIPT TEMPLATE

```typescript
import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTestXX() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ListeningTest.findOne({ testNumber: XX });
        if (existing) {
            console.log("Test already exists. Updating...");
            await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
            console.log("✅ Updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await ListeningTest.create({ ...listeningTestData, createdBy });
            console.log("✅ Created!");
        }

        // Verify
        const test = await ListeningTest.findOne({ testNumber: XX });
        if (test) {
            console.log(`\n📝 Test: ${test.title}`);
            (test.sections as any[]).forEach((s, i) => {
                const qs = s.questions.filter((q: any) => q.blockType === "question");
                console.log(`  Part ${i+1}: ${qs.length} questions`);
            });
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
}

const listeningTestData = {
    testId: "LISTENING_0XX",
    testNumber: XX,
    title: "Listening Mock Test XX – Academic",
    description: "IELTS Academic Listening Test XX — 4 parts, 40 questions",
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
        // ═══ PART 1 (Q1-10) ═══
        {
            sectionNumber: 1,
            title: "Part 1",
            context: "A conversation about...",
            instructions: "Questions 1–10",
            audioUrl: "",
            questions: [
                // --- Main instruction ---
                { blockType: "instruction" as const,
                  content: "<strong>Questions 1–10</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },

                // --- Heading ---
                { blockType: "instruction" as const,
                  content: "<strong>Title Goes Here</strong>" },

                // --- Context line(s) before first blank ---
                { blockType: "instruction" as const,
                  content: "<ul><li>Some context info</li></ul>" },

                // --- Q1 blank ---
                { blockType: "question" as const, questionNumber: 1,
                  questionType: "note-completion" as const,
                  questionText: "First blank: ________",
                  correctAnswer: "answer", marks: 1, wordLimit: 3 },

                // --- Context line(s) between blanks ---
                { blockType: "instruction" as const,
                  content: "<ul><li>More context info here</li></ul>" },

                // --- Q2 blank ---
                { blockType: "question" as const, questionNumber: 2,
                  questionType: "note-completion" as const,
                  questionText: "Second blank: ________",
                  correctAnswer: "answer2", marks: 1, wordLimit: 3 },

                // ... continue alternating instruction + question blocks
            ]
        },

        // ═══ PART 2 (Q11-20) ═══
        { sectionNumber: 2, title: "Part 2", context: "...", instructions: "Questions 11–20",
          audioUrl: "", questions: [] },

        // ═══ PART 3 (Q21-30) ═══
        { sectionNumber: 3, title: "Part 3", context: "...", instructions: "Questions 21–30",
          audioUrl: "", questions: [] },

        // ═══ PART 4 (Q31-40) ═══
        { sectionNumber: 4, title: "Part 4", context: "...", instructions: "Questions 31–40",
          audioUrl: "", questions: [] },
    ]
};

seedListeningTestXX();
```

---

## 📸 HOW TO CONVERT FROM PHOTO

When user provides a listening test photo:

### Step 1: Identify question type
- Bullet list with blanks → `note-completion`
- Form fields → `form-completion`
- Table with blanks → `table-completion`
- A/B/C options → `multiple-choice`
- Choose TWO → `multiple-choice-multi`
- Match from list → `matching`
- Map/plan → `map-labeling`
- Short answer questions → `short-answer`

### Step 2: Separate context lines from blanks
Look at the photo and identify:
- **Lines WITH blanks** (numbers + dotted lines) → these become `question` blocks
- **Lines WITHOUT blanks** (plain text/context) → these become `instruction` blocks
- **Headings** (bold text, titles) → `instruction` block with `<strong>`

### Step 3: Build interleaved blocks
```
Photo shows:
  • Name: Dr Thomas Boothby          ← context (instruction)
  • Experiment site: International 1) ___  Station   ← blank (Q1)
  • Work began in 2) ___             ← blank (Q2)
  • Also called water bears          ← context (instruction)
  • Tiny 3) ___ organisms            ← blank (Q3)

Convert to:
  instruction: "<ul><li>Name: Dr Thomas Boothby</li></ul>"
  question Q1: "Experiment site: International ________ Station"
  question Q2: "Work began in ________"
  instruction: "<ul><li>Also called water bears</li></ul>"
  question Q3: "Tiny ________ organisms"
```

### Step 4: Group consecutive context lines
Multiple context lines between blanks → combine into ONE instruction block:
```typescript
{ blockType: "instruction",
  content: "<ul><li>Also called water bears</li><li>Ability to adapt to extreme conditions</li></ul>" }
```

---

## 🔄 KEY DIFFERENCES FROM READING

| Feature | Reading | Listening |
|---------|---------|-----------|
| Sections | 3 sections | 4 sections (Parts) |
| Data | `questionGroups[]` + flat `questions[]` | Single flat `questions[]` with mixed instruction/question blocks |
| Rendering | Client renders by groupType | Interleaved instruction HTML + question inputs |
| Passage | Text passage shown side by side | Audio plays; instruction blocks show notes/tables |
| HTML | NO HTML in passages | YES — instruction blocks use HTML |
| Pattern | Grouped | **INTERLEAVED** instruction ↔ question blocks |
| `blockType` | Not used | `"instruction"` or `"question"` |

---

## ✅ PRE-UPLOAD CHECKLIST

Before running seed script, verify:

- [ ] `testNumber` and `testId` are unique
- [ ] 4 sections with sectionNumber 1-4
- [ ] Context lines → instruction blocks (NOT [N] placeholders)
- [ ] Blanks → question blocks with `questionText` containing `________`
- [ ] Instruction and question blocks are INTERLEAVED in correct order
- [ ] Question numbers 1-40 exist exactly once
- [ ] Every question block has `blockType: "question"`, `questionType`, `correctAnswer`
- [ ] MCQ options array format: `"A. option text"`
- [ ] `multiple-choice-multi` uses SEPARATE question blocks for each answer
- [ ] `matching` questions have `options: ["A","B","C",...]` array
- [ ] `correctAnswer` is a single string
- [ ] `wordLimit` set correctly for completion types
- [ ] No duplicate question numbers
- [ ] ALL context lines from photo included as instruction blocks (don't skip any!)

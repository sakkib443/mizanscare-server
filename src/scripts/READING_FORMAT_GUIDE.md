# IELTS Academic Reading Test — Upload Format Guide

> **This file is the SINGLE SOURCE OF TRUTH for creating reading test seed scripts.**
> Follow this guide EXACTLY — no `<b>` tags, no HTML in passages, no duplicate question blocks.

---

## 🔑 CRITICAL RULES

1. **Passage Format**: Use `\n\n` between paragraphs. Paragraph labels use `A.\n` format (NOT `<b>A.</b>`)
2. **Dual Storage**: Every test needs BOTH `questionGroups` (for rendering) AND flat `questions` array (for grading)
3. **Test metadata**: `testId`, `testNumber`, `title` must be unique
4. **Upsert logic**: Always use `$or: [{ testId }, { testNumber }]` to avoid duplicate errors
5. **40 questions total**: 3 sections, ~13-14 questions each

---

## 📄 PASSAGE FORMAT

```
// ✅ CORRECT — A.\n format, \n\n between paragraphs
passage: `A.\nFirst paragraph text here...\n\nB.\nSecond paragraph text here...\n\nC.\nThird paragraph...`

// ❌ WRONG — No HTML tags
passage: `<b>A.</b> First paragraph...`

// ❌ WRONG — No inline A. without newline
passage: `A. First paragraph...\n\nB. Second paragraph...`
```

**For passages WITHOUT paragraph labels** (continuous text):
```
passage: `First paragraph of the passage goes here with full text...\n\nSecond paragraph continues the discussion...\n\nThird paragraph concludes the section...`
```

**Special characters**: Use Unicode escapes:
- Single quote: `\u2018` and `\u2019`
- Dash/em-dash: `\u2013` or `\u2014`
- Pound sign: `\u00a3`

---

## 📋 QUESTION TYPES — Complete Reference

### 1. `matching-information` (Match statement → paragraph letter)

```typescript
// questionGroups entry:
{
    groupType: "matching-information",
    startQuestion: 1,
    endQuestion: 8,
    mainInstruction: "The Reading Passage has eight paragraphs labelled A-H. Which paragraph contains the following information?",
    subInstruction: "",
    note: "NB You may use any letter more than once.",
    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G", "H"],
    matchingItems: [
        { questionNumber: 1, text: "a reference to...", correctAnswer: "B" },
        { questionNumber: 2, text: "another reference...", correctAnswer: "A" },
    ],
}

// flat questions entry:
{ questionNumber: 1, questionType: "matching-information", questionText: "a reference to...", options: ["A","B","C","D","E","F","G","H"], correctAnswer: "B", marks: 1 },
```

### 2. `matching-features` (Match statement → person/feature)

```typescript
// questionGroups entry:
{
    groupType: "matching-features",
    startQuestion: 33,
    endQuestion: 36,
    mainInstruction: "Complete each sentence with the correct ending, A-G, below.",
    subInstruction: "",
    featureListTitle: "Sentence Endings",
    featureOptions: [
        { letter: "A", text: "are controlled by Broca\u2019s area." },
        { letter: "B", text: "may be__(continued)__" },
        // ... up to G
    ],
    matchingItems: [
        { questionNumber: 33, text: "In Wernicke\u2019s area, our thoughts", correctAnswer: "F" },
        { questionNumber: 34, text: "It is only in Broca\u2019s area...", correctAnswer: "C" },
    ],
}

// flat questions entry:
{ questionNumber: 33, questionType: "matching-features", questionText: "In Wernicke\u2019s area, our thoughts", options: ["A","B","C","D","E","F","G"], correctAnswer: "F", marks: 1 },
```

### 3. `matching-headings` (Match heading → paragraph)

```typescript
// questionGroups entry:
{
    groupType: "matching-headings",
    startQuestion: 14,
    endQuestion: 20,
    mainInstruction: "Choose the correct heading for each paragraph.",
    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
    matchingItems: [
        { questionNumber: 14, text: "Paragraph A", correctAnswer: "vi" },
        { questionNumber: 15, text: "Paragraph B", correctAnswer: "ii" },
    ],
}

// flat questions entry:
{ questionNumber: 14, questionType: "matching-headings", questionText: "Paragraph A", correctAnswer: "vi", marks: 1 },
```

### 4. `note-completion` (Fill blanks in notes/diagram)

```typescript
// questionGroups entry:
{
    groupType: "note-completion",
    startQuestion: 9,
    endQuestion: 13,
    mainInstruction: "Complete the notes below.",
    subInstruction: "Choose ONE WORD ONLY from the passage for each answer.",
    mainHeading: "Genetically Modified Crops",
    passage: `Concerns about GM crops\n\n• Wind can carry 9 __________ from GM plants to other farms\n• Risk of 10 __________ from chemicals used on crops\n• GM maize engineered to resist insects using 11 __________\n\nArguments in favour\n\n• Crops have increased resistance to 12 __________\n• Professor Campos created transgenic 13 __________ with improved nutrition`,
}

// flat questions entry:
{ questionNumber: 9, questionType: "note-completion", questionText: "Wind can carry ___ from GM plants", correctAnswer: "pollen", marks: 1 },
```

### 5. `true-false-not-given`

```typescript
// questionGroups entry:
{
    groupType: "true-false-not-given",
    startQuestion: 27,
    endQuestion: 32,
    mainInstruction: "Do the following statements agree with the information given in the passage?",
    subInstruction: "Write TRUE, FALSE or NOT GIVEN.",
    statements: [
        { questionNumber: 27, text: "The statement text here.", correctAnswer: "TRUE" },
        { questionNumber: 28, text: "Another statement.", correctAnswer: "FALSE" },
        { questionNumber: 29, text: "Yet another.", correctAnswer: "NOT GIVEN" },
    ],
}

// flat questions entry:
{ questionNumber: 27, questionType: "true-false-not-given", questionText: "The statement text.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
```

### 6. `yes-no-not-given`

```typescript
// questionGroups entry:
{
    groupType: "yes-no-not-given",
    startQuestion: 27,
    endQuestion: 32,
    mainInstruction: "Do the following statements agree with the views of the writer?",
    subInstruction: "Write YES, NO or NOT GIVEN.",
    statements: [
        { questionNumber: 27, text: "Our inner voice can sometimes distract us.", correctAnswer: "NOT GIVEN" },
        { questionNumber: 28, text: "Mind reading has positive and negative implications.", correctAnswer: "YES" },
        { questionNumber: 29, text: "Little progress was made between 1924 and 1990s.", correctAnswer: "NO" },
    ],
}

// flat questions entry:
{ questionNumber: 27, questionType: "yes-no-not-given", questionText: "Our inner voice...", options: ["YES","NO","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
```

### 7. `multiple-choice-full` (MCQ with A/B/C/D options)

```typescript
// questionGroups entry:
{
    groupType: "multiple-choice-full",
    startQuestion: 37,
    endQuestion: 40,
    mainInstruction: "Choose the correct letter, A, B, C or D.",
    subInstruction: "",
    mcQuestions: [
        {
            questionNumber: 37,
            questionText: "What does 'broke new ground' mean?",
            options: [
                { letter: "A", text: "built on the work of others" },
                { letter: "B", text: "produced unusual results" },
                { letter: "C", text: "proved earlier theories false" },
                { letter: "D", text: "achieved something new" },
            ],
            correctAnswer: "D",
        },
    ],
}

// flat questions entry:
{ questionNumber: 37, questionType: "multiple-choice-full", questionText: "What does 'broke new ground' mean?", correctAnswer: "D", marks: 1 },
```

### 8. `choose-two-letters` (Choose 2 or 3 from A-F)

```typescript
// questionGroups entry:
{
    groupType: "choose-two-letters",
    startQuestion: 14,
    endQuestion: 16,
    mainInstruction: "Choose THREE letters, A-F.",
    questionSets: [
        {
            questionNumbers: [14, 15, 16],
            questionText: "Which THREE statements are true about ASBOs?",
            options: [
                { letter: "A", text: "First option text" },
                { letter: "B", text: "Second option text" },
                { letter: "C", text: "Third option text" },
                { letter: "D", text: "Fourth option text" },
                { letter: "E", text: "Fifth option text" },
                { letter: "F", text: "Sixth option text" },
            ],
            correctAnswers: ["C", "E", "F"],
        },
    ],
}

// flat questions entry (ONE per question number):
{ questionNumber: 14, questionType: "choose-two-letters", questionText: "Which THREE are true?", correctAnswer: "C", marks: 1 },
{ questionNumber: 15, questionType: "choose-two-letters", questionText: "Which THREE are true?", correctAnswer: "E", marks: 1 },
{ questionNumber: 16, questionType: "choose-two-letters", questionText: "Which THREE are true?", correctAnswer: "F", marks: 1 },
```

### 9. `sentence-completion` (Complete sentence with words from passage)

```typescript
// questionGroups entry:
{
    groupType: "sentence-completion",
    startQuestion: 20,
    endQuestion: 26,
    mainInstruction: "Complete the sentences.",
    subInstruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer.",
    statements: [
        { questionNumber: 20, text: "The official _________ says that anti-social behaviour...", correctAnswer: "definition" },
        { questionNumber: 21, text: "Along with swearing, making _________ noise is considered...", correctAnswer: "excessive" },
    ],
}

// flat questions entry:
{ questionNumber: 20, questionType: "sentence-completion", questionText: "The official ___ says...", correctAnswer: "definition", marks: 1 },
```

### 10. `short-answer` (Answer questions with words from passage)

```typescript
// questionGroups entry:
{
    groupType: "short-answer",
    startQuestion: 35,
    endQuestion: 40,
    mainInstruction: "Answer the questions below.",
    subInstruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer.",
    questions: [
        { questionNumber: 35, questionText: "What did Charles I supposedly disguise himself as?", correctAnswer: "a servant" },
        { questionNumber: 36, questionText: "Where did Charles finally escape from?", correctAnswer: "Brighton" },
    ],
}

// flat questions entry:
{ questionNumber: 35, questionType: "short-answer", questionText: "What did Charles I disguise himself as?", correctAnswer: "a servant", marks: 1 },
```

### 11. `summary-completion` (Complete summary with blanks)

```typescript
{
    groupType: "summary-completion",
    startQuestion: 7,
    endQuestion: 13,
    mainInstruction: "Complete the summary below.",
    subInstruction: "Choose ONE WORD ONLY from the passage for each answer.",
    mainHeading: "Summary Title",
    summarySegments: [
        { type: "text", content: "The first part of the narrative text" },
        { type: "blank", questionNumber: 7, correctAnswer: "word" },
        { type: "text", content: "continuation of narrative" },
        { type: "blank", questionNumber: 8, correctAnswer: "another" },
    ],
}
```

### 12. `summary-with-options` (Summary + word list to choose from)

```typescript
{
    groupType: "summary-with-options",
    startQuestion: 7,
    endQuestion: 10,
    mainInstruction: "Complete the summary using the list of words below.",
    phraseList: [
        { letter: "A", text: "word1" },
        { letter: "B", text: "word2" },
        // ... etc
    ],
    mainHeading: "Summary Heading",
    summarySegments: [
        { type: "text", content: "Narrative text" },
        { type: "blank", questionNumber: 7, correctAnswer: "A" },
        { type: "text", content: "more text" },
    ],
}
```

### 13. `table-completion` (Fill blanks in a table)

```typescript
{
    groupType: "table-completion",
    startQuestion: 1,
    endQuestion: 5,
    mainInstruction: "Complete the table below.",
    subInstruction: "Choose ONE WORD ONLY from the passage.",
    tableTitle: "Table Title",
    columns: ["Category", "Detail 1", "Detail 2"],
    rows: [
        { label: "Row 1", cells: [{ content: "some text 1 __________" }, { content: "other text" }] },
        { label: "Row 2", cells: [{ content: "text with 2 __________" }, { content: "more text" }] },
    ],
    answers: [
        { questionNumber: 1, correctAnswer: "word1" },
        { questionNumber: 2, correctAnswer: "word2" },
    ],
}
```

---

## 🏗️ SEED SCRIPT TEMPLATE

```typescript
import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_TEST_XX",       // CHANGE: XX = test number padded
    testNumber: XX,                   // CHANGE: unique number
    title: "Reading Mock Test XX - Academic",  // CHANGE
    description: "Description here",
    source: "IELTS Practice Test",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // SECTION 1 (Q1-13)
        {
            sectionNumber: 1,
            title: "Passage 1 Title",
            passage: `A.\nFirst paragraph...\n\nB.\nSecond paragraph...`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 1-13",
            questionGroups: [
                // ADD QUESTION GROUPS HERE (see types above)
            ],
            questions: [
                // ADD FLAT QUESTIONS HERE (for grading)
            ],
        },
        // SECTION 2 (Q14-26)
        {
            sectionNumber: 2,
            title: "Passage 2 Title",
            passage: `Passage text here...`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 14-26",
            questionGroups: [],
            questions: [],
        },
        // SECTION 3 (Q27-40)
        {
            sectionNumber: 3,
            title: "Passage 3 Title",
            passage: `Passage text here...`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 27-40",
            questionGroups: [],
            questions: [],
        },
    ],
};

async function seedTest() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to database");

        const existing = await ReadingTest.findOne({
            $or: [{ testId: readingTest.testId }, { testNumber: readingTest.testNumber }]
        });

        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest, { runValidators: false });
            console.log(`✅ Test ${readingTest.testNumber} updated!`);
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) { console.log("❌ No admin user"); process.exit(1); }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log(`✅ Test ${readingTest.testNumber} created!`);
        }

        // Verify
        const test = await ReadingTest.findOne({ testNumber: readingTest.testNumber });
        if (test) {
            console.log(`\n📝 Sections: ${test.sections.length}`);
            test.sections.forEach((s: any, i: number) => {
                console.log(`  ${i+1}. ${s.title} — Groups: ${s.questionGroups?.length}, Questions: ${s.questions?.length}`);
            });
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
}

seedTest();
```

---

## ✅ PRE-UPLOAD CHECKLIST

Before running seed script, verify:

- [ ] `testNumber` and `testId` are unique and correct
- [ ] Passage uses `\n\n` between paragraphs, `A.\n` for labels (NO HTML!)
- [ ] Each section has BOTH `questionGroups` AND `questions` arrays
- [ ] `questionGroups` total = 40 questions across 3 sections
- [ ] `questions` flat array total = 40 questions across 3 sections
- [ ] Every `questionNumber` from 1-40 exists exactly once in flat `questions`
- [ ] `correctAnswer` values match the answer key exactly
- [ ] `groupType` matches one of the supported types listed above
- [ ] Unicode escapes used for special characters (`\u2018`, `\u2019`, `\u2013`)
- [ ] No `<b>`, `<strong>`, `<br>` or any HTML in passage text

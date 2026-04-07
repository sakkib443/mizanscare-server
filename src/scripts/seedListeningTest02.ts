import mongoose from "mongoose";
import config from "../app/config";
import { ListeningTest } from "../app/modules/listening/listening.model";

async function seedListeningTest02() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ListeningTest.findOne({ testNumber: 2 });
        if (existing) {
            console.log("Listening Test #2 already exists. Updating...");
            await ListeningTest.findByIdAndUpdate(existing._id, listeningTestData, { runValidators: false });
            console.log("\u2705 Listening Test 02 updated!");
        } else {
            const db = mongoose.connection.db!;
            const adminUser = await db.collection("users").findOne({ role: "admin" });
            const createdBy = adminUser?._id || new mongoose.Types.ObjectId();
            await ListeningTest.create({ ...listeningTestData, createdBy });
            console.log("\u2705 Listening Test 02 created!");
        }

        const test = await ListeningTest.findOne({ testNumber: 2 });
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
    testId: "LISTENING_002",
    testNumber: 2,
    title: "Listening Mock Test 02 \u2013 Academic",
    description: "IELTS Academic Listening Test 02 \u2014 4 parts, 40 questions.",
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
        // \u2550\u2550\u2550 PART 1 \u2014 Customer Information & Booking (Q1\u201310) \u2550\u2550\u2550
        {
            sectionNumber: 1,
            title: "Part 1",
            context: "A conversation about travel booking and customer information.",
            instructions: "Questions 1\u201310",
            audioUrl: "",
            questions: [
                // \u2500\u2500\u2500 Questions 1-3: Note Completion \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 1\u20133</strong><br/>Complete the notes below.<br/>Write <strong>ONE WORD ONLY</strong> for each answer." },

                { blockType: "instruction" as const,
                  content: "<strong>Notes on Customer\u2019s Information</strong>" },

                // Context: Example row
                { blockType: "instruction" as const,
                  content: "<ul><li><em>Example:</em> Information Source: found in the brochure</li></ul>" },

                // Q1
                { blockType: "question" as const, questionNumber: 1, questionType: "note-completion" as const,
                  questionText: "Included services: ________ and accommodation",
                  correctAnswer: "flights", marks: 1, wordLimit: 1 },

                // Q2
                { blockType: "question" as const, questionNumber: 2, questionType: "note-completion" as const,
                  questionText: "Sydney arrival date: 15th of ________",
                  correctAnswer: "April", marks: 1, wordLimit: 1 },

                // Q3
                { blockType: "question" as const, questionNumber: 3, questionType: "note-completion" as const,
                  questionText: "Accommodation criteria: ________",
                  correctAnswer: "cheapest", acceptableAnswers: ["cheapest", "budget"],
                  marks: 1, wordLimit: 1 },

                // \u2500\u2500\u2500 Questions 4-6: Form Completion \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 4\u20136</strong><br/>Complete the form below.<br/>Write <strong>NO MORE THAN THREE WORDS OR A NUMBER</strong> for each answer." },

                { blockType: "instruction" as const,
                  content: "<strong>Booking Information</strong>" },

                // Q4
                { blockType: "question" as const, questionNumber: 4, questionType: "form-completion" as const,
                  questionText: "Room type: ________",
                  correctAnswer: "non-smoking", marks: 1, wordLimit: 3 },

                // Q5
                { blockType: "question" as const, questionNumber: 5, questionType: "form-completion" as const,
                  questionText: "Credit card holder: ________",
                  correctAnswer: "John A. Smyth", acceptableAnswers: ["John A. Smyth", "John A Smyth"],
                  marks: 1, wordLimit: 3 },

                // Q6
                { blockType: "question" as const, questionNumber: 6, questionType: "form-completion" as const,
                  questionText: "Total cost for one night: ________",
                  correctAnswer: "110 dollars", acceptableAnswers: ["110 dollars", "$110"],
                  marks: 1, wordLimit: 3 },

                // \u2500\u2500\u2500 Questions 7-10: Sentence Completion \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 7\u201310</strong><br/>Complete the sentence below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer." },

                // Q7
                { blockType: "question" as const, questionNumber: 7, questionType: "sentence-completion" as const,
                  questionText: "The ________ is within walking distance of the accommodation",
                  correctAnswer: "Cultural Centre", acceptableAnswers: ["Cultural Centre", "Cultural Center"],
                  marks: 1, wordLimit: 2 },

                // Q8
                { blockType: "question" as const, questionNumber: 8, questionType: "sentence-completion" as const,
                  questionText: "The customer books ________",
                  correctAnswer: "camel ride", marks: 1, wordLimit: 2 },

                // Q9
                { blockType: "question" as const, questionNumber: 9, questionType: "sentence-completion" as const,
                  questionText: "Aboriginals stone carvings are in the ________",
                  correctAnswer: "desert", marks: 1, wordLimit: 2 },

                // Q10
                { blockType: "question" as const, questionNumber: 10, questionType: "sentence-completion" as const,
                  questionText: "The Dreamtime can be experienced beneath the ________",
                  correctAnswer: "stars", marks: 1, wordLimit: 2 },
            ]
        },

        // \u2550\u2550\u2550 PART 2 \u2014 Public Service Broadcast (Q11\u201320) \u2550\u2550\u2550
        {
            sectionNumber: 2,
            title: "Part 2",
            context: "A public service broadcast about volunteer work.",
            instructions: "Questions 11\u201320",
            audioUrl: "",
            questions: [
                // \u2500\u2500\u2500 Q11-15: Note Completion \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 11\u201315</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS OR A NUMBER</strong> for each answer." },

                { blockType: "instruction" as const,
                  content: "<strong>Public Service Broadcast</strong>" },

                { blockType: "question" as const, questionNumber: 11, questionType: "note-completion" as const,
                  questionText: "Volunteer workers must be at least ________ years old",
                  correctAnswer: "18", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 12, questionType: "note-completion" as const,
                  questionText: "Job applicants should not have ________",
                  correctAnswer: "police records", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 13, questionType: "note-completion" as const,
                  questionText: "Job applicants are asked to submit ________",
                  correctAnswer: "references", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 14, questionType: "note-completion" as const,
                  questionText: "and ________",
                  correctAnswer: "(recent) CV", acceptableAnswers: ["(recent) CV", "recent CV", "CV"],
                  marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 15, questionType: "note-completion" as const,
                  questionText: "The employer will pay the expenses of ________ and phone calls",
                  correctAnswer: "transportation", marks: 1, wordLimit: 2 },

                // \u2500\u2500\u2500 Q16-18: Table Completion \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 16\u201318</strong><br/>Complete the table below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer." },

                { blockType: "instruction" as const,
                  content: `<table border='1' style='border-collapse:collapse;width:100%'><thead><tr><th style='padding:8px;text-align:left'>TYPE OF PEOPLE</th><th style='padding:8px;text-align:left'>DUTIES</th><th style='padding:8px;text-align:left'>SERVICE TIME</th></tr></thead><tbody><tr><td style='padding:8px'>Wheelchair users</td><td style='padding:8px'>Drive them in volunteers\u2019 <strong>[16]</strong> to view nature</td><td style='padding:8px'>Tuesday afternoons</td></tr><tr><td style='padding:8px'>The blind</td><td style='padding:8px'>Read books to them</td><td style='padding:8px'><strong>[17]</strong></td></tr><tr><td style='padding:8px'>Disabled children</td><td style='padding:8px'>Take care of them on holiday</td><td style='padding:8px'><strong>[18]</strong></td></tr></tbody></table>` },

                { blockType: "question" as const, questionNumber: 16, questionType: "table-completion" as const,
                  questionText: "Drive them in volunteers\u2019 ________ to view nature",
                  correctAnswer: "Red Cross", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 17, questionType: "table-completion" as const,
                  questionText: "The blind \u2014 Service time: ________",
                  correctAnswer: "Tuesday afternoons", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 18, questionType: "table-completion" as const,
                  questionText: "Disabled children \u2014 Service time: ________",
                  correctAnswer: "foreign accent", marks: 1, wordLimit: 2 },

                // \u2500\u2500\u2500 Q19-20: Notes (Contact Info) \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 19 and 20</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer." },

                { blockType: "instruction" as const,
                  content: "<ul><li>If you are willing to become a volunteer, here is some information to help:</li><li>Contact Person: Mary Smith</li></ul>" },

                { blockType: "question" as const, questionNumber: 19, questionType: "note-completion" as const,
                  questionText: "Post Office Box: ________",
                  correctAnswer: "Disabled Children", marks: 1, wordLimit: 3 },

                { blockType: "question" as const, questionNumber: 20, questionType: "note-completion" as const,
                  questionText: "E-mail Address: ________",
                  correctAnswer: "75", acceptableAnswers: ["75", "seventy-five pounds", "75 lb", "75 pounds"],
                  marks: 1, wordLimit: 3 },
            ]
        },

        // \u2550\u2550\u2550 PART 3 \u2014 PENDING (Q21\u201330) \u2550\u2550\u2550
        {
            sectionNumber: 3,
            title: "Part 3",
            context: "An environmental discussion about Southeast Mexico.",
            instructions: "Questions 21\u201330",
            audioUrl: "",
            questions: [
                // \u2500\u2500\u2500 Q21-25: Note Completion \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 21\u201325</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS AND/OR A NUMBER</strong> for each answer." },

                { blockType: "instruction" as const,
                  content: "<strong>ENVIRONMENTAL DISCUSSION</strong>" },

                { blockType: "question" as const, questionNumber: 21, questionType: "note-completion" as const,
                  questionText: "In Southeast Mexico, farmers did too much ________ so the environment has been destroyed",
                  correctAnswer: "adverse", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 22, questionType: "note-completion" as const,
                  questionText: "According to Dick, vegetation problems caused ________",
                  correctAnswer: "deforestation", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 23, questionType: "note-completion" as const,
                  questionText: "A back issue of a periodical reported interviews with ________",
                  correctAnswer: "jungle", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 24, questionType: "note-completion" as const,
                  questionText: "According to one of the articles in the periodical, land ________ show it is very tough for plant growth there",
                  correctAnswer: "soil samples", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 25, questionType: "note-completion" as const,
                  questionText: "In the past ten years, almost ________ kilometers of forest has disappeared",
                  correctAnswer: "inverse", marks: 1, wordLimit: 2 },

                // \u2500\u2500\u2500 Q26-30: Sentence Completion \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 26\u201330</strong><br/>Complete the sentences below.<br/>Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer." },

                { blockType: "question" as const, questionNumber: 26, questionType: "sentence-completion" as const,
                  questionText: "\u201cGrowing Area\u201d is about ________ kilometers",
                  correctAnswer: "saline", marks: 1, wordLimit: 1 },

                { blockType: "question" as const, questionNumber: 27, questionType: "sentence-completion" as const,
                  questionText: "Scientists have taken ________ of the soil in the Yucatan",
                  correctAnswer: "ionisation", acceptableAnswers: ["ionisation", "ionization"],
                  marks: 1, wordLimit: 1 },

                { blockType: "question" as const, questionNumber: 28, questionType: "sentence-completion" as const,
                  questionText: "The university\u2019s own Geology Department has also analysed the ________ at the site",
                  correctAnswer: "narrow", marks: 1, wordLimit: 1 },

                { blockType: "question" as const, questionNumber: 29, questionType: "sentence-completion" as const,
                  questionText: "The ________ in Dr Horst\u2019s book are very useful and worth studying",
                  correctAnswer: "photographs", marks: 1, wordLimit: 1 },

                { blockType: "question" as const, questionNumber: 30, questionType: "sentence-completion" as const,
                  questionText: "The student needs a ________ to do the presentation",
                  correctAnswer: "map", marks: 1, wordLimit: 1 },
            ]
        },

        // \u2550\u2550\u2550 PART 4 \u2014 Insects (Q31\u201340) \u2550\u2550\u2550
        {
            sectionNumber: 4,
            title: "Part 4",
            context: "A lecture about insects, pollination, and pest control methods.",
            instructions: "Questions 31\u201340",
            audioUrl: "",
            questions: [
                // \u2500\u2500\u2500 Q31-32: MCQ \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 31 and 32</strong><br/>Choose the correct letter, <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>." },

                { blockType: "question" as const, questionNumber: 31, questionType: "multiple-choice" as const,
                  questionText: "Bees that help with pollination benefit flowers and",
                  options: ["A. female plants only.", "B. pollen.", "C. fruit trees."],
                  correctAnswer: "C", marks: 1 },

                { blockType: "question" as const, questionNumber: 32, questionType: "multiple-choice" as const,
                  questionText: "Bees produce wax that can be made into candles and",
                  options: ["A. honey.", "B. polish.", "C. pollen."],
                  correctAnswer: "B", marks: 1 },

                // \u2500\u2500\u2500 Q33-35: Sentence Completion \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 33\u201335</strong><br/>Complete the sentences below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer." },

                { blockType: "question" as const, questionNumber: 33, questionType: "sentence-completion" as const,
                  questionText: "Dragonflies eat ________",
                  correctAnswer: "mosquitoes", acceptableAnswers: ["mosquitoes", "mosquitos"],
                  marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 34, questionType: "sentence-completion" as const,
                  questionText: "Insects in summer can be harmful because they can carry such deadly diseases as malaria, yellow fever, and ________",
                  correctAnswer: "yellow fever", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 35, questionType: "sentence-completion" as const,
                  questionText: "Harmful insects may destroy crops, clothes, furniture, and even the ________",
                  correctAnswer: "building", acceptableAnswers: ["building", "whole building"],
                  marks: 1, wordLimit: 2 },

                // \u2500\u2500\u2500 Q36-40: Note Completion \u2500\u2500\u2500
                { blockType: "instruction" as const,
                  content: "<strong>Questions 36\u201340</strong><br/>Complete the notes below.<br/>Write <strong>NO MORE THAN TWO WORDS</strong> for each answer." },

                { blockType: "instruction" as const,
                  content: "<strong>HOW TO KILL BAD INSECTS</strong>" },

                // Chemical methods heading
                { blockType: "instruction" as const,
                  content: "<ul><li><strong>\u2022 Chemical methods</strong></li><li>These solutions to insect problems are often not worthwhile because:</li></ul>" },

                { blockType: "question" as const, questionNumber: 36, questionType: "note-completion" as const,
                  questionText: "a) They are effective on a ________",
                  correctAnswer: "small scale", acceptableAnswers: ["small scale", "small-scale"],
                  marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 37, questionType: "note-completion" as const,
                  questionText: "b) They can bring harm to ________",
                  correctAnswer: "humans", marks: 1, wordLimit: 2 },

                { blockType: "question" as const, questionNumber: 38, questionType: "note-completion" as const,
                  questionText: "c) Insects become ________ to the chemicals quickly",
                  correctAnswer: "resistant", marks: 1, wordLimit: 2 },

                // Biological methods
                { blockType: "instruction" as const,
                  content: "<ul><li><strong>\u2022 Biological methods</strong></li></ul>" },

                { blockType: "question" as const, questionNumber: 39, questionType: "note-completion" as const,
                  questionText: "These methods are ________ than chemical methods of eliminating harmful insects",
                  correctAnswer: "cheaper", marks: 1, wordLimit: 2 },

                // Breeding control method
                { blockType: "instruction" as const,
                  content: "<ul><li><strong>\u2022 Breeding control method</strong></li></ul>" },

                { blockType: "question" as const, questionNumber: 40, questionType: "note-completion" as const,
                  questionText: "In order to control the breeding of insects, one needs to understand the insects\u2019 ________",
                  correctAnswer: "life cycle", marks: 1, wordLimit: 2 },
            ]
        },
    ]
};

seedListeningTest02();

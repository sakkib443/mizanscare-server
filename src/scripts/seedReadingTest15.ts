// Seed script for IELTS Academic Reading Test 15
// Passages: Tickling and Laughter | The Ingenuity Gap | Bright Children
// Question distribution: Section 1 = 14 (Q1-14), Section 2 = 14 (Q15-28), Section 3 = 12 (Q29-40)
//
// OCR / RTF-extraction fixes (silent corrections applied to passage text):
// - Restored missing apostrophes in contractions (don\u2019t, didn\u2019t, can\u2019t, it\u2019s, isn\u2019t, person\u2019s, etc.)
// - Restored smart quotes around "funny bone", "fun"y bone", "Geniuses are made, not born", etc.
// - Fixed broken line-wrapped words: "sen sation", "yon arc tickled" -> "you are tickled",
//   "die brain" -> "the brain", "Tunny bone" -> "funny bone", "scheme" -> "scheme"
// - Joined paragraphs that were split by hard line breaks mid-sentence in the RTF export
// - Normalized en-dash / em-dash and pound signs to unicode escapes
// - Removed stray "arsid..." markers / font declarations from the RTF front-matter
//
// All correctAnswer fields are intentionally left as empty strings. User will populate later.

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_ACADEMIC_015",
    testNumber: 15,
    title: "Academic Reading Test 15",
    slug: "academic-reading-test-15",
    description: "IELTS Academic Reading Test featuring passages on Tickling and Laughter, The Ingenuity Gap, and Bright Children.",
    source: "Academic Reading Practice",
    testType: "academic" as const,
    moduleType: "academic",
    testCategory: "academic",
    difficulty: "medium" as const,
    isActive: true,
    duration: 3600,
    totalQuestions: 40,
    totalMarks: 40,
    passScore: 26,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: Tickling and Laughter (Q1-14)
        // Q1-7: Matching Information
        // Q8-11: Matching Features (researchers to findings)
        // Q12-14: Summary Completion (NO MORE THAN THREE WORDS)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "Tickling and Laughter",
            instructions: "You should spend about 20 minutes on Questions 1-14 which are based on Reading Passage 1 below.",
            passage: `A The fingers of an outstretched arm are nearing your body; you bend away folding your torso, bending your head to your shoulder in hopes that you don\u2019t get tickled; but the inevitable occurs: you are tickled and in hysterics you chuckle, titter, and burst into uncontrollable laughter. Why do we laugh when we are tickled?\n\nB Tickling is caused by a light sensation across our skin. At times the light sensation can cause itching; however, most of the time it causes giggling. If a feather is gently moved across the surface of the skin, it can also cause tickling and giggling. Heavy laughter is caused by someone or something placing repeated pressure on a person and tickling a particular area. The spots tickled often are feet, toes, sides, underarms, and neck which cause a great deal of laughter. Yngve Zotterman from Karolinska Institute has found that tickling sensations involve signals from nerve fibers. These nerve fibers are associated with pain and touch. Also, Zotterman has discovered tickling sensations to be associated not only with nerve fibers but also with sense of touch because people who have lost pain sensations still laugh when tickled. But really, why do we laugh? Why are we not able to tickle ourselves? What part of the brain is responsible for laughter and humor? Why do we say some people have no sense of humor?\n\nC Research has shown that laughter is more than just a person\u2019s voice and movement and that it requires the coordination of many muscles throughout the body. Laughter also increases blood pressure and heart rate, changes breathing, reduces levels of certain neurochemicals (catecholamines, hormones) and provides a boost to the immune system. Can laughter improve health? It may be a good way for people to relax because muscle tension is reduced after laughing. Human tests have found some evidence that humorous videos and tapes can reduce feelings of pain, prevent negative stress reactions and boost the brain\u2019s biological battle against infection.\n\nD Researchers believe we process humor and laughter through a complex pathway of brain activity that encompasses three main brain components. In one new study, researchers used imaging equipment to photograph the brain activity of healthy volunteers while they underwent a sidesplitting assignment of reading written jokes, viewing cartoons from The New Yorker magazine as well as The Far Side, and listening to digital recordings of laughter. Preliminary results indicate that the humor-processing pathway includes parts of the frontal lobe brain area, important for cognitive processing; the supplementary motor area, important for movement; and the nucleus accumbens, associated with pleasure. Investigations support the notion that parts of the frontal lobe are involved in humor. Subjects\u2019 brains were imaged while they were listening to jokes. An area of the frontal lobe was activated only when they thought a joke was funny. In a study that compared healthy individuals with people who had damage to their frontal lobes, the subjects with damaged frontal lobes were more likely to choose wrong punch lines to written jokes and didn\u2019t laugh or smile as much at funny cartoons or jokes.\n\nE Even though we may know more about what parts of the brain are responsible for humor, it is still hard to explain why we don\u2019t laugh or giggle when we tickle ourselves. Darwin theorized within The Expressions of the Emotions in Man and Animals that there was a link between tickling and laughter because of the anticipation of pleasure. Because we cannot tickle ourselves and have caused laughter, Darwin speculated surprise from another person touching a sensitive spot must have caused laughter. Some scientists believe that laughing caused by tickling is a built-in reflex even babies have. If we tickle ourselves in the same spot as our friend tickled us, we do not laugh as we did previously. The information sent to our spinal cord and brain should be exactly the same. Apparently, for tickling to work, the brain needs tension and surprise. When we tickle ourselves, we know exactly what will happen\u2014there is no tension or surprise. How the brain uses this information about tension and surprise is still a mystery, but there is some evidence that the cerebellum may be involved. Because one part of the brain tells another: \u201cIt\u2019s just you. Don\u2019t get excited.\u201d Investigations suggest that during self-tickling, the cerebellum tells an area called the somatosensory cortex what sensation to expect, and that dampens the tickling sensation. It looks as if the killjoy is found in the cerebellum. Further explorations to understand tickling and laughter were conducted by Christenfeld and Harris. Within The Mystery of Ticklish Laughter and Can a Machine Tickle, they explained that people laughed equally whether tickled by a machine or by a person. The participants were not aware that who or what was tickling them. However, the laughter was equally resounded. It is suggested that tickling response is a reflex, which, like Darwin suggested earlier, is dependent on the element of surprise.\n\nF Damage to any one part of the brain may affect one\u2019s overall ability to process humor. Peter Derks, a professor of psychology, conducted his research with a group of scientists at NASA-Langley in Hampton. Using a sophisticated electroencephalogram (EEG), they measured the brain activity of 10 people exposed to humorous stimuli. How quickly our brain recognizes the incongruity that deals with most humor and attaches an abstract meaning to it determines whether we laugh. However, different people find different jokes funny. That can be due to a number of factors, including differences in personality, intelligence, mental state and probably mood. But according to Derks, the majority of people recognize when a situation is meant to be humorous. In a series of experiments, he noticed that several patients recovering from brain injuries could not distinguish between something funny and something not.\n\nG Dr. Shibata of the University of Rochester School of Medicine said our neurons get tickled when we hear a joke. The brain\u2019s \u201cfunny bone\u201d is located at the right frontal lobe just above the right eye and appears critical to our ability to recognize a joke. Dr. Shibata gave his patients MRI scans to measure brain activity, trying to find out what part of the brain is particularly active while telling the punch line of a joke as opposed to the rest of the joke and funny cartoons in comparison to parts of the cartoons that are not funny. The jokes tickled the frontal lobes. The scans also showed activity in the nucleus accumbens, which is likely related to our feeling of mirth after hearing a good joke and our addiction to humor. While his research was about humor, the results could help lead to answers and solutions to depression. Parts of the brain that are active during humor are actually abnormal in patients with depression. Eventually, brain scans might be used to assess patients with depression and other mood disorders. The research may also explain why some stroke victims lose their sense of humor or suffer from other personality changes. The same part of the brain is also associated with social and emotional judgment and planning.`,
            questionGroups: [
                // Q1-7: Matching Information
                {
                    groupType: "matching-information",
                    startQuestion: 1,
                    endQuestion: 7,
                    mainInstruction: "The Reading Passage has 7 paragraphs, A-G. Which paragraph contains the following information?",
                    subInstruction: "Write the appropriate letter, A-G, in boxes 1-7 on your answer sheet.",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    matchingItems: [
                        { questionNumber: 1, text: "Location of a brain section essential to the recognition of jokes", correctAnswer: "" },
                        { questionNumber: 2, text: "Laughter enhances immunity", correctAnswer: "" },
                        { questionNumber: 3, text: "Individual differences and the appreciation of humour", correctAnswer: "" },
                        { questionNumber: 4, text: "Parts of the brain responsible for tickling reflex", correctAnswer: "" },
                        { questionNumber: 5, text: "Neuropsychological mechanisms by which humor and laughter work", correctAnswer: "" },
                        { questionNumber: 6, text: "The connection between tickling and nerve fibers", correctAnswer: "" },
                        { questionNumber: 7, text: "Patients with emotional disorders", correctAnswer: "" },
                    ],
                },
                // Q8-11: Matching Features (researchers to findings)
                {
                    groupType: "matching-features",
                    startQuestion: 8,
                    endQuestion: 11,
                    mainInstruction: "Look at the following researchers (listed 8-11) and findings (listed A-F). Match each researcher with the correct finding(s).",
                    subInstruction: "Write your answers in boxes 8-11 on your answer sheet.",
                    note: "NB There are more findings than researchers. You may choose more than one finding for any of the researchers.",
                    featureListTitle: "Findings",
                    featureOptions: [
                        { letter: "A", text: "The surprise factor, combined with the anticipation of pleasure, cause laughter when tickled." },
                        { letter: "B", text: "Laughing caused by tickling is a built-in reflex even babies have." },
                        { letter: "C", text: "People also laugh when tickled by a machine if they are not aware of it." },
                        { letter: "D", text: "People have different tastes for jokes and humour." },
                        { letter: "E", text: "Jokes and funny cartoons activate the frontal lobes." },
                        { letter: "F", text: "Tickling sensations involve more than nerve fibers." },
                    ],
                    matchingItems: [
                        { questionNumber: 8, text: "Darwin", correctAnswer: "" },
                        { questionNumber: 9, text: "Christenfeld and Harris", correctAnswer: "" },
                        { questionNumber: 10, text: "Yngve Zotterman", correctAnswer: "" },
                        { questionNumber: 11, text: "Peter Derks", correctAnswer: "" },
                    ],
                },
                // Q12-14: Summary Completion
                {
                    groupType: "summary-completion",
                    startQuestion: 12,
                    endQuestion: 14,
                    mainInstruction: "Complete the summary below using NO MORE THAN THREE WORDS from the passage for each blank.",
                    subInstruction: "Write your answers in boxes 12-14 on your answer sheet.",
                    mainHeading: "",
                    summarySegments: [
                        { type: "text", content: "Researchers believe three brain components to be involved in the processing of humor and laughter. Results from one study using brain " },
                        { type: "blank", questionNumber: 12, correctAnswer: "" },
                        { type: "text", content: " indicate that parts of the brain responsible for " },
                        { type: "blank", questionNumber: 13, correctAnswer: "" },
                        { type: "text", content: ", movement and pleasure are involved through a sophisticated pathway. Test subjects who suffered from frontal lobes damages had greater chances of picking " },
                        { type: "blank", questionNumber: 14, correctAnswer: "" },
                        { type: "text", content: " of jokes or did not respond to funny cartoons or jokes." },
                    ],
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "matching-information", questionText: "Location of a brain section essential to the recognition of jokes", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 2, questionType: "matching-information", questionText: "Laughter enhances immunity", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 3, questionType: "matching-information", questionText: "Individual differences and the appreciation of humour", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 4, questionType: "matching-information", questionText: "Parts of the brain responsible for tickling reflex", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 5, questionType: "matching-information", questionText: "Neuropsychological mechanisms by which humor and laughter work", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 6, questionType: "matching-information", questionText: "The connection between tickling and nerve fibers", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 7, questionType: "matching-information", questionText: "Patients with emotional disorders", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 8, questionType: "matching-features", questionText: "Darwin", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 9, questionType: "matching-features", questionText: "Christenfeld and Harris", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 10, questionType: "matching-features", questionText: "Yngve Zotterman", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 11, questionType: "matching-features", questionText: "Peter Derks", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 12, questionType: "summary-completion", questionText: "Results from one study using brain ___ indicate", correctAnswer: "", marks: 1 },
                { questionNumber: 13, questionType: "summary-completion", questionText: "parts of the brain responsible for ___, movement and pleasure", correctAnswer: "", marks: 1 },
                { questionNumber: 14, questionType: "summary-completion", questionText: "greater chances of picking ___ of jokes", correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 2: The Ingenuity Gap (Q15-28)
        // Q15-18: Matching-features (sentence endings A-D)
        // Q19-21: Multiple Choice
        // Q22-28: True/False/Not Given
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "The Ingenuity Gap",
            instructions: "You should spend about 20 minutes on Questions 15-28 which are based on Reading Passage 2 below.",
            passage: `Ingenuity, as I define it here, consists not only of ideas for new technologies like computers or drought-resistant crops but, more fundamentally, of ideas for better institutions and social arrangements, like efficient markets and competent governments.\n\nHow much and what kinds of ingenuity a society requires depends on a range of factors, including the society\u2019s goals and the circumstances within which it must achieve those goals\u2014whether it has a young population or an ageing one, an abundance of natural resources or a scarcity of them, an easy climate or a punishing one, whatever the case may be.\n\nHow much and what kinds of ingenuity a society supplies also depends on many factors, such as the nature of human inventiveness and understanding, the rewards an economy gives to the producers of useful knowledge, and the strength of political opposition to social and institutional reforms.\n\nA good supply of the right kind of ingenuity is essential, but it isn\u2019t, of course, enough by itself. We know that the creation of wealth, for example, depends not only on an adequate supply of useful ideas but also on the availability of other, more conventional factors of production, like capital and labor. Similarly, prosperity, stability and justice usually depend on the resolution, or at least the containment, of major political struggles over wealth and power. Yet within our economies ingenuity often supplants labor, and growth in the stock of physical plant is usually accompanied by growth in the stock of ingenuity. And in our political systems, we need great ingenuity to set up institutions that successfully manage struggles over wealth and power. Clearly, our economic and political processes are intimately entangled with the production and use of ingenuity.\n\nThe past century\u2019s countless incremental changes in our societies around the planet, in our technologies and our interactions with our surrounding natural environments, have accumulated to create a qualitatively new world. Because these changes have accumulated slowly, it\u2019s often hard for us to recognize how profound and sweeping they\u2019ve been. They include far larger and denser populations; much higher per capita consumption of natural resources; and far better and more widely available technologies for the movement of people, materials, and especially information.\n\nIn combination, these changes have sharply increased the density, intensity, and pace of our interactions with each other; they have greatly increased the burden we place on our natural environment; and they have helped shift power from national and international institutions to individuals in subgroups, such as political special interests and ethnic factions.\n\nAs a result, people in all walks of life\u2014from our political and business leaders to all of us in our day-to-day\u2014must cope with much more complex, urgent, and often unpredictable circumstances. The management of our relationship with this new world requires immense and ever-increasing amounts of social and technical ingenuity. As we strive to maintain or increase our prosperity and improve the quality of our lives, we must make far more sophisticated decisions, and in less time, than ever before.\n\nWhen we enhance the performance of any system, from our cars to the planet\u2019s network of financial institutions, we tend to make it more complex. Many of the natural systems critical to our well-being, like the global climate and the oceans, are extraordinarily complex, to begin with. We often can\u2019t predict or manage the behavior of complex systems with much precision, because they are often very sensitive to the smallest of changes and perturbations, and their behavior can flip from one mode to another suddenly and dramatically. In general, as the human-made and natural systems we depend upon become more complex, and as our demands on them increase, the institutions and technologies we use to manage them must become more complex too, which further boosts our need for ingenuity.\n\nThe good news, though, is that the last century\u2019s stunning changes in our societies and technologies have not just increased our need for ingenuity; they have also produced a huge increase in its supply. The growth and urbanization of human populations have combined with astonishing new communication and transportation technologies to expand interactions among people and produce larger, more integrated, and more efficient markets. These changes have, in turn, vastly accelerated the generation and delivery of useful ideas.\n\nBut\u2014and this is the critical but\u2014we should not jump to the conclusion that the supply of ingenuity always increases in lockstep with our ingenuity requirement: while it\u2019s true that necessity is often the mother of invention, we can\u2019t always rely on the right kind of ingenuity appearing when and where we need it. In many cases, the complexity and speed of operation of today\u2019s vital economic, social, and ecological systems exceed the human brain\u2019s grasp. Very few of us have more than a rudimentary understanding of how these systems work. They remain fraught with countless \u201cunknown unknowns,\u201d which makes it hard to supply the ingenuity we need to solve problems associated with these systems.\n\nIn this book, I explore a wide range of other factors that will limit our ability to supply the ingenuity required in the coming century. For example, many people believe that new communication technologies strengthen democracy and will make it easier to find solutions to our societies\u2019 collective problems, but the story is less clear than it seems. The crush of information in our everyday lives is shortening our attention span, limiting the time we have to reflect on critical matters of public policy, and making policy arguments more superficial.\n\nModern markets and science are an important part of the story of how we supply ingenuity. Markets are critically important because they give entrepreneurs an incentive to produce knowledge. As for science, although it seems to face no theoretical limits, at least in the foreseeable future, practical constraints often slow its progress. The cost of scientific research tends to increase as it delves deeper into nature. And science\u2019s rate of advance depends on the characteristic of the natural phenomena it investigates, simply because some phenomena are intrinsically harder to understand than others, so the production of useful new knowledge in these areas can be very slow. Consequently, there is often a critical time lag between the recognition of a problem and the delivery of sufficient ingenuity, in the form of technologies, to solve that problem. Progress in the social sciences is especially slow, for reasons we don\u2019t yet understand; but we desperately need better social scientific knowledge to build the sophisticated institutions today\u2019s world demands.`,
            questionGroups: [
                // Q15-18: Matching-features (complete sentences with A-D)
                {
                    groupType: "matching-features",
                    startQuestion: 15,
                    endQuestion: 18,
                    mainInstruction: "Complete each sentence with the appropriate answer, A, B, C, or D.",
                    subInstruction: "Write the correct answer in boxes 15-18 on your answer sheet.",
                    featureListTitle: "Sentence Endings",
                    featureOptions: [
                        { letter: "A", text: "depends on many factors including climate." },
                        { letter: "B", text: "depends on the management and solution of disputes." },
                        { letter: "C", text: "is not only of technological advance but more of institutional renovation." },
                        { letter: "D", text: "also depends on the availability of some traditional resources." },
                    ],
                    matchingItems: [
                        { questionNumber: 15, text: "The definition of ingenuity", correctAnswer: "" },
                        { questionNumber: 16, text: "The requirement for ingenuity", correctAnswer: "" },
                        { questionNumber: 17, text: "The creation of social wealth", correctAnswer: "" },
                        { questionNumber: 18, text: "The stability of society", correctAnswer: "" },
                    ],
                },
                // Q19-21: Multiple Choice
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 19,
                    endQuestion: 21,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write your answers in boxes 19-21 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 19,
                            questionText: "What does the author say about the incremental change of the last 100 years?",
                            options: [
                                { letter: "A", text: "It has become a hot scholastic discussion among environmentalists." },
                                { letter: "B", text: "Its significance is often not noticed." },
                                { letter: "C", text: "It has reshaped the natural environments we live in." },
                                { letter: "D", text: "It benefited a much larger population than ever." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 20,
                            questionText: "The combination of changes has made life:",
                            options: [
                                { letter: "A", text: "easier" },
                                { letter: "B", text: "faster" },
                                { letter: "C", text: "slower" },
                                { letter: "D", text: "less sophisticated" },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 21,
                            questionText: "What does the author say about the natural systems?",
                            options: [
                                { letter: "A", text: "New technologies are being developed to predict change with precision." },
                                { letter: "B", text: "Natural systems are often more sophisticated than other systems." },
                                { letter: "C", text: "Minor alterations may cause natural systems to change dramatically." },
                                { letter: "D", text: "Technological developments have rendered human being more independent of natural systems." },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
                // Q22-28: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 22,
                    endQuestion: 28,
                    mainInstruction: "Do the following statements agree with the information given in the Reading Passage?",
                    subInstruction: "In boxes 22-28 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 22, text: "The demand for ingenuity has been growing during the past 100 years.", correctAnswer: "" },
                        { questionNumber: 23, text: "The ingenuity we have may be inappropriate for solving problems at hand.", correctAnswer: "" },
                        { questionNumber: 24, text: "There are very few who can understand the complex systems of the present world.", correctAnswer: "" },
                        { questionNumber: 25, text: "More information will help us to make better decisions.", correctAnswer: "" },
                        { questionNumber: 26, text: "The next generation will blame the current government for their conduct.", correctAnswer: "" },
                        { questionNumber: 27, text: "Science tends to develop faster in certain areas than others.", correctAnswer: "" },
                        { questionNumber: 28, text: "Social science develops especially slowly because it is not as important as natural science.", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 15, questionType: "matching-features", questionText: "The definition of ingenuity", options: ["A", "B", "C", "D"], correctAnswer: "", marks: 1 },
                { questionNumber: 16, questionType: "matching-features", questionText: "The requirement for ingenuity", options: ["A", "B", "C", "D"], correctAnswer: "", marks: 1 },
                { questionNumber: 17, questionType: "matching-features", questionText: "The creation of social wealth", options: ["A", "B", "C", "D"], correctAnswer: "", marks: 1 },
                { questionNumber: 18, questionType: "matching-features", questionText: "The stability of society", options: ["A", "B", "C", "D"], correctAnswer: "", marks: 1 },
                { questionNumber: 19, questionType: "multiple-choice-full", questionText: "What does the author say about the incremental change of the last 100 years?", correctAnswer: "", marks: 1 },
                { questionNumber: 20, questionType: "multiple-choice-full", questionText: "The combination of changes has made life:", correctAnswer: "", marks: 1 },
                { questionNumber: 21, questionType: "multiple-choice-full", questionText: "What does the author say about the natural systems?", correctAnswer: "", marks: 1 },
                { questionNumber: 22, questionType: "true-false-not-given", questionText: "The demand for ingenuity has been growing during the past 100 years.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 23, questionType: "true-false-not-given", questionText: "The ingenuity we have may be inappropriate for solving problems at hand.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 24, questionType: "true-false-not-given", questionText: "There are very few who can understand the complex systems of the present world.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 25, questionType: "true-false-not-given", questionText: "More information will help us to make better decisions.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 26, questionType: "true-false-not-given", questionText: "The next generation will blame the current government for their conduct.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 27, questionType: "true-false-not-given", questionText: "Science tends to develop faster in certain areas than others.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 28, questionType: "true-false-not-given", questionText: "Social science develops especially slowly because it is not as important as natural science.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 3: Bright Children (Q29-40)
        // Q29-34: Yes/No/Not Given
        // Q35-36: Multiple Choice
        // Q37-40: Matching Features (countries A-E)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "Bright Children",
            instructions: "You should spend about 20 minutes on Questions 29-40 which are based on Reading Passage 3 below.",
            passage: `A By the time Laszlo Polgar\u2019s first baby was born in 1969 he already had firm views on child-rearing. An eccentric citizen of communist Hungary, he had written a book called \u201cBring up Genius!\u201d and one of his favourite sayings was \u201cGeniuses are made, not born\u201d. An expert on the theory of chess, he proceeded to teach little Zsuzsa at home, spending up to ten hours a day on the game. Two more daughters were similarly hot-housed. All three obliged their father by becoming world-class players. The youngest, Judit, is currently ranked 13th in the world, and is by far the best female chess player of all time. Would the experiment have succeeded with a different trio of children? If any child can be turned into a star, then a lot of time and money are being wasted worldwide on trying to pick winners.\n\nB America has long held talent searches, using test results and teacher recommendations to select children for advanced school courses, summer schools and other extra tuition. This provision is set to grow. In his state-of-the-union address in 2006, President George Bush announced the \u201cAmerican Competitiveness Initiative\u201d, which, among much else, would train 70,000 high-school teachers to lead advanced courses for selected pupils in mathematics and science. Just as the superpowers\u2019 space race made Congress put money into science education, the thought of China and India turning out hundreds of thousands of engineers and scientists is scaring America into prodding its brightest to do their best.\n\nC The philosophy behind this talent search is that ability is innate; that it can be diagnosed with considerable accuracy; and that it is worth cultivating. In America, bright children are ranked as \u201cmoderately\u201d, \u201chighly\u201d, \u201cexceptionally\u201d and \u201cprofoundly\u201d gifted. The only chance to influence innate ability is thought to be in the womb or the first couple of years of life. Hence the fad for teaching aids such as videos and flashcards for newborns, and \u201cwhale sounds\u201d on tape which a pregnant mother can strap to her belly.\n\nD In Britain, there is a broadly similar belief in the existence of innate talent, but also an egalitarian sentiment which makes people queasy about the idea of investing resources in grooming intelligence. Teachers are often opposed to separate provision for the best-performing children, saying any extra help should go to stragglers. In 2002, in a bid to help the able while leaving intact the ban on most selection by ability in state schools, the government set up the National Academy for Gifted and Talented Youth. This outfit runs summer schools and master classes for children nominated by their schools. To date, though, only seven in ten secondary schools have nominated even a single child. Last year all schools were told they must supply the names of their top 10%.\n\nE Picking winners is also the order of the day in ex-communist states, a hangover from the times when talented individuals were plucked from their homes and ruthlessly trained for the glory of the nation. But in many other countries, opposition to the idea of singling out talent and grooming it runs deep. In Scandinavia, a belief in virtues like modesty and social solidarity makes people flinch from the idea of treating brainy children differently.\n\nF And in Japan, there is a widespread belief that all children are born with the same innate abilities\u2014and should, therefore, be treated alike. All are taught together, covering the same syllabus at the same rate until they finish compulsory schooling. Those who learn quickest are expected then to teach their classmates. In China, extra teaching is provided, but to a self-selected bunch. \u201cChildren\u2019s palaces\u201d in big cities offer a huge range of after-school classes. Anyone can sign up; all that is asked is excellent attendance.\n\nG Statistics give little clue as to which system is best. The performance of the most able is heavily affected by factors other than state provision. Most state education in Britain is nominally non-selective, but middle-class parents try to live near the best schools. Ambitious Japanese parents have made private, out-of-school tuition a thriving business. And Scandinavia\u2019s egalitarianism might work less well in places with more diverse populations and less competent teachers. For what it\u2019s worth, the data suggest that some countries\u2014like Japan and Finland, see table\u2014can eschew selection and still thrive. But that does not mean that any country can ditch selection and do as well.\n\nH Mr Polgar thought any child could be a prodigy given the right teaching, an early start and enough practice. At one point he planned to prove it by adopting three baby boys from a poor country and trying his methods on them. (His wife vetoed the scheme.) Some say the key to success is simply hard graft. Judit, the youngest of the Polgar sisters, was the most driven, and the most successful; Zsofia, the middle one, was regarded as the most talented, but she was the only one who did not achieve the status of grandmaster. \u201cEverything came easiest to her,\u201d said her older sister. \u201cBut she was lazy.\u201d`,
            questionGroups: [
                // Q29-34: Yes/No/Not Given
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 29,
                    endQuestion: 34,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage?",
                    subInstruction: "In boxes 29-34 on your answer sheet, write YES if the statement agrees with the view of the writer, NO if the statement contradicts the view of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this.",
                    statements: [
                        { questionNumber: 29, text: "America has a long history of selecting talented students into different categories.", correctAnswer: "" },
                        { questionNumber: 30, text: "Teachers and schools in Britain held welcome attitude towards the government\u2019s selection of gifted students.", correctAnswer: "" },
                        { questionNumber: 31, text: "Some parents agree to move near reputable schools in Britain.", correctAnswer: "" },
                        { questionNumber: 32, text: "Middle-class parents participate in their children\u2019s education.", correctAnswer: "" },
                        { questionNumber: 33, text: "Japan and Finland comply with selected students policy.", correctAnswer: "" },
                        { questionNumber: 34, text: "Avoiding-selection-policy only works in a specific environment.", correctAnswer: "" },
                    ],
                },
                // Q35-36: Multiple Choice
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 35,
                    endQuestion: 36,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write your answers in boxes 35-36 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 35,
                            questionText: "What\u2019s Laszlo Polgar\u2019s point of view towards geniuses of children?",
                            options: [
                                { letter: "A", text: "Chess is the best way to train geniuses." },
                                { letter: "B", text: "Genius tends to happen on first child." },
                                { letter: "C", text: "Geniuses can be educated later on." },
                                { letter: "D", text: "Geniuses are born naturally." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 36,
                            questionText: "What is the purpose of citing Zsofia\u2019s example in the last paragraph?",
                            options: [
                                { letter: "A", text: "Practice makes genius." },
                                { letter: "B", text: "Girls are not good at chess." },
                                { letter: "C", text: "She was an adopted child." },
                                { letter: "D", text: "Middle child is always the most talented." },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
                // Q37-40: Matching Features (countries)
                {
                    groupType: "matching-features",
                    startQuestion: 37,
                    endQuestion: 40,
                    mainInstruction: "Use the information in the passage to match the countries (listed A-E) with correct connection below.",
                    subInstruction: "Write the appropriate letters, A-E, in boxes 37-40 on your answer sheet.",
                    featureListTitle: "Countries",
                    featureOptions: [
                        { letter: "A", text: "Scandinavia" },
                        { letter: "B", text: "Japan" },
                        { letter: "C", text: "Britain" },
                        { letter: "D", text: "China" },
                        { letter: "E", text: "America" },
                    ],
                    matchingItems: [
                        { questionNumber: 37, text: "Less gifted children get help from other classmates", correctAnswer: "" },
                        { questionNumber: 38, text: "Attending extra teaching is open to anyone", correctAnswer: "" },
                        { questionNumber: 39, text: "People are reluctant to favor gifted children due to social characteristics", correctAnswer: "" },
                        { questionNumber: 40, text: "Both views of innate and egalitarian co-existed", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 29, questionType: "yes-no-not-given", questionText: "America has a long history of selecting talented students into different categories.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 30, questionType: "yes-no-not-given", questionText: "Teachers and schools in Britain held welcome attitude towards the government\u2019s selection of gifted students.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 31, questionType: "yes-no-not-given", questionText: "Some parents agree to move near reputable schools in Britain.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "Middle-class parents participate in their children\u2019s education.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "Japan and Finland comply with selected students policy.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "Avoiding-selection-policy only works in a specific environment.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 35, questionType: "multiple-choice-full", questionText: "What\u2019s Laszlo Polgar\u2019s point of view towards geniuses of children?", correctAnswer: "", marks: 1 },
                { questionNumber: 36, questionType: "multiple-choice-full", questionText: "What is the purpose of citing Zsofia\u2019s example in the last paragraph?", correctAnswer: "", marks: 1 },
                { questionNumber: 37, questionType: "matching-features", questionText: "Less gifted children get help from other classmates", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "Attending extra teaching is open to anyone", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 39, questionType: "matching-features", questionText: "People are reluctant to favor gifted children due to social characteristics", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 40, questionType: "matching-features", questionText: "Both views of innate and egalitarian co-existed", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
            ],
        },
    ],
};

async function seedTest() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to database");

        const existing = await ReadingTest.findOne({ testId: readingTest.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest);
            console.log(`\u2705 Test ${readingTest.testNumber} UPDATED!`);
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("\u274c No admin user found. Please create an admin user first.");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log(`\u2705 Test ${readingTest.testNumber} CREATED!`);
        }

        // Verification
        const test = await ReadingTest.findOne({ testNumber: readingTest.testNumber });
        if (test) {
            const sections = (test as any).sections || [];
            console.log(`\n\ud83d\udcca Verification for Test ${readingTest.testNumber}:`);
            sections.forEach((s: any, i: number) => {
                console.log(`  Section ${i + 1}: "${s.title}" | Groups: ${s.questionGroups?.length} | Questions: ${s.questions?.length}`);
                s.questions?.forEach((q: any) => {
                    console.log(`    Q${q.questionNumber} [${q.questionType}]`);
                });
            });
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("\u274c Error seeding Reading Test 15:", error);
        process.exit(1);
    }
}

seedTest();

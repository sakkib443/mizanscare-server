import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_ACADEMIC_017",
    testNumber: 17,
    title: "Academic Reading Mock Test 17",
    description: "IELTS Academic Reading Test featuring passages on The Life of Sir Isaac Newton, The Geography of Antarctica, and Thinking, Fast and Slow.",
    source: "Academic Reading Practice",
    testType: "academic" as const,
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: The Life of Sir Isaac Newton (Q1-13)
        // Q1-6: Matching Headings (with Example: Paragraph A = iii)
        // Q7-8: Short Answer
        // Q9-13: Note Completion
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "The Life of Sir Isaac Newton",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: `A Isaac Newton was born on January 4, 1643, in Lincolnshire, England. The son of a farmer, who died three months before he was born, Newton spent most of his early years with his maternal grandmother after his mother remarried. Following an education interrupted by a failed attempt to turn him into a farmer, he attended the King\u2019s School in Grantham before enrolling at the University of Cambridge\u2019s Trinity College in 1661, where he soon became fascinated by the works of modern philosophers such as Ren\u00e9 Descartes. When the Great Plague shut Cambridge off from the rest of England in 1665, Newton returned home and began formulating his theories on calculus, light and color, his farm the setting for the supposed falling apple that inspired his work on gravity.\n\nB Newton returned to Cambridge in 1667. He constructed the first reflecting telescope in 1668, and the following year he received his Master of Arts degree and took over as Cambridge\u2019s Professor of Mathematics. In 1671 he was asked to give a demonstration of his telescope to the Royal Society of London in 1671, the same year he was elected to the prestigious Society. The following year, fascinated with the study of light, he published his notes on optics for his peers. Through his experiments, Newton determined that white light was a composite of all the colors on the spectrum, and he asserted that light was composed of particles instead of waves. His methods were heavily criticized by established Society member Robert Hooke, who was also unwilling to compromise again with Newton\u2019s follow-up paper in 1675. Known for his temperamental defense of his work, Newton engaged in heated correspondence with Hooke before suffering a nervous breakdown and withdrawing from the public eye in 1678. In the following years, he returned to his earlier studies on the forces governing gravity.\n\nC In 1684, English astronomer Edmund Halley paid a visit to the reclusive Newton. Upon learning that Newton had mathematically worked out the elliptical paths of celestial bodies, such as the movement of the planets around the sun, Halley urged him to organize his notes. The result was the 1687 publication of \u201cPhilosophiae Naturalis Principia Mathematica\u201d (Mathematical Principles of Natural Philosophy), which established the three laws of motion and the law of universal gravity. Principia made Newton a star in intellectual circles, eventually earning him widespread acclaim as one of the most important figures in modern science.\n\nD As a now influential figure, Newton opposed King James II\u2019s attempts to reinstate Catholic teachings at English Universities, and was elected to represent Cambridge in Parliament in 1689. He moved to London permanently after being named warden of the Royal Mint in 1696, earning a promotion to master of the Mint three years later. Determined to prove his position wasn\u2019t merely symbolic, Newton moved the pound sterling from the silver to the gold standard and sought to punish forgers.\n\nE The death of Hooke in 1703 allowed Newton to take over as president of the Royal Society, and the following year he published his second major work, \u201cOpticks.\u201d Composed largely from his earlier notes on the subject, the book detailed Newton\u2019s experiments with refraction and the color spectrum, and also contained his conclusions on such matters as energy and electricity. In 1705, he was knighted by Queen Anne of England.\n\nF Around this time, the debate over Newton\u2019s claims to originating the field of calculus, the mathematical study of change, exploded into a nasty dispute. Newton had developed his mathematical concept of \u2018fluxions\u2019 (differentials) in the mid-1660s to account for celestial orbits, though there was no public record of his work. In the meantime, German mathematician Gottfried Leibniz formulated his own theories and published them in 1684. As president of the Royal Society, Newton oversaw an investigation that ruled his work to be the founding basis of the field, but the debate continued even after Leibniz\u2019s death in 1716. Researchers later concluded that both men likely arrived at their conclusions independent of one another.\n\nG Newton was also obsessed with history and religious doctrines, and his writings on those subjects were collected into multiple books that were published after his death. Having never married, Newton spent his later years living with his niece at Cranbury Park, near Winchester, England. He died on March 31, 1727, and was buried in Westminster Abbey. A giant even among the brilliant minds that drove the Scientific Revolution, Newton is remembered as an extraordinary scholar, inventor and writer. His theories about the movement of bodies in the solar system transformed our understanding of the universe and his precise methodology helped to give birth to what is known as the scientific method. Although his theories of space-time and gravity were eventually superseded by those of Einstein his work remains the foundation stone of modern physics was built.`,
            questionGroups: [
                // Q1-6: Matching Headings (with Example: Paragraph A = iii)
                {
                    groupType: "matching-headings",
                    startQuestion: 1,
                    endQuestion: 6,
                    mainInstruction: "Reading Passage 1 has seven paragraphs, A-G.",
                    subInstruction: "Choose the correct headings for paragraphs B-G from the list of headings below. Write the correct number, i-ix, in boxes 1-6 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "Continued breakthroughs in research" },
                        { numeral: "ii", text: "Competing claims of originality" },
                        { numeral: "iii", text: "The early years of Sir Isaac Newton" },
                        { numeral: "iv", text: "The legacy of an exceptional mind" },
                        { numeral: "v", text: "Routine life at a 17th century university" },
                        { numeral: "vi", text: "Heated academic disputes" },
                        { numeral: "vii", text: "A new venture" },
                        { numeral: "viii", text: "His crowning achievement" },
                        { numeral: "ix", text: "A controversial theory about planets" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "iii" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph B", correctAnswer: "" },
                        { questionNumber: 2, text: "Paragraph C", correctAnswer: "" },
                        { questionNumber: 3, text: "Paragraph D", correctAnswer: "" },
                        { questionNumber: 4, text: "Paragraph E", correctAnswer: "" },
                        { questionNumber: 5, text: "Paragraph F", correctAnswer: "" },
                        { questionNumber: 6, text: "Paragraph G", correctAnswer: "" },
                    ],
                },
                // Q7-8: Short Answer
                {
                    groupType: "short-answer",
                    startQuestion: 7,
                    endQuestion: 8,
                    mainInstruction: "Answer the questions below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 7-8 on your answer sheet.",
                    questions: [
                        { questionNumber: 7, questionText: "With which scientific organization was Newton associated for much of his career?", correctAnswer: "" },
                        { questionNumber: 8, questionText: "With whom did Newton live as he got older?", correctAnswer: "" },
                    ],
                },
                // Q9-13: Note Completion (passage format)
                {
                    groupType: "note-completion",
                    startQuestion: 9,
                    endQuestion: 13,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Choose ONE WORD from the passage for each answer. Write your answers in boxes 9-13 on your answer sheet.",
                    mainHeading: "Sir Isaac Newton\u2019s achievements",
                    passage: `\u2022 Created first reflecting 9 __________, subsequently made a professor at Cambridge at the age of 25.\n\u2022 Helped develop the scientific method with his experiments in 10 __________, the study of light; showed that it is 11 __________, not waves, that constitute light.\n\u2022 Worked out the laws of the movement of bodies in space (planets etc.), published Principia Mathematica with laws of gravity and 12 __________.\n\u2022 Joint founder (with Leibniz) of 13 __________, a new branch of mathematics.`,
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "", marks: 1 },
                { questionNumber: 7, questionType: "short-answer", questionText: "With which scientific organization was Newton associated for much of his career?", correctAnswer: "", marks: 1 },
                { questionNumber: 8, questionType: "short-answer", questionText: "With whom did Newton live as he got older?", correctAnswer: "", marks: 1 },
                { questionNumber: 9, questionType: "note-completion", questionText: "Created first reflecting __________", correctAnswer: "", marks: 1 },
                { questionNumber: 10, questionType: "note-completion", questionText: "experiments in __________, the study of light", correctAnswer: "", marks: 1 },
                { questionNumber: 11, questionType: "note-completion", questionText: "it is __________, not waves, that constitute light", correctAnswer: "", marks: 1 },
                { questionNumber: 12, questionType: "note-completion", questionText: "Principia Mathematica with laws of gravity and __________", correctAnswer: "", marks: 1 },
                { questionNumber: 13, questionType: "note-completion", questionText: "Joint founder (with Leibniz) of __________", correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 2: The Geography of Antarctica (Q14-26)
        // Q14-17: Sentence Completion
        // Q18-21: True/False/Not Given
        // Q22-26: Summary With Options
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "The Geography of Antarctica",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: `The continent of Antarctica makes up most of the Antarctic region. The Antarctic is a cold, remote area in the Southern Hemisphere encompassed by the Antarctic Convergence, an uneven line of latitude where cold, northward-flowing Antarctic waters meet the warmer waters of the world\u2019s oceans. The whole Antarctic region covers approximately 20 percent of the Southern Hemisphere. Antarctica is the fifth-largest continent in terms of total area, larger than both Oceania and Europe. It is unique in that it does not have a native population. There are no countries in Antarctica, although seven nations claim different parts of it: New Zealand, Australia, France, Norway, the United Kingdom, Chile, and Argentina.\n\nThe Antarctic Ice Sheet dominates the region. It is the single piece of ice on Earth covering the greatest area. This ice sheet even extends beyond the continent when snow and ice are at their most extreme. The ice surface dramatically expands from about 3 million square kilometers (1.2 million square miles) at the end of summer to about 19 million square kilometers (7.3 million square miles) by winter. Ice sheet growth mainly occurs at the coastal ice shelves, primarily the Ross Ice Shelf and the Ronne Ice Shelf. Ice shelves are floating sheets of ice that are connected to the continent. Glacial ice moves from the continent\u2019s interior to these lower-elevation ice shelves at rates of 10 to 1,000 meters (33-32,808 feet) per year.\n\nAntarctica has numerous mountain summits, including the Transantarctic Mountains, which divide the continent into eastern and western regions. A few of these summits reach altitudes of more than 4,500 meters (14,764 feet). The elevation of the Antarctic Ice Sheet itself is about 2,000 meters (6,562 feet) and reaches 4,000 meters (13,123 feet) above sea level near the center of the continent.\n\nWithout any ice, the continent would emerge as two distinct areas: a giant peninsula and archipelago of mountainous islands, known as Lesser Antarctica, and a single large landmass about the size of Australia, known as Greater Antarctica. These regions have different geologies; Greater Antarctica, or East Antarctica, is composed of older, igneous rocks whereas Lesser Antarctica, or West Antarctica, is made up of younger, volcanic rock. Lesser Antarctica, in fact, is part of the \u201cRing of Fire,\u201d a tectonically active area around the Pacific Ocean. Tectonic activity is the interaction of plates on Earth\u2019s crust, often resulting in earthquakes and volcanoes. Mount Erebus, located on Antarctica\u2019s Ross Island, is the southernmost active volcano on Earth.\n\nAntarctica has an extremely cold, dry climate. Winter temperatures along Antarctica\u2019s coast generally range from -10\u00b0 Celsius to -30\u00b0 Celsius (14\u00b0 Fahrenheit to -22\u00b0 Fahrenheit). During the summer, coastal areas hover around 0\u00b0C (32\u00b0F) but can reach temperatures as high as 9\u00b0C (48\u00b0F). In the mountainous, interior regions, temperatures are much colder, dropping below -60\u00b0C (-76\u00b0F) in winter and -20\u00b0C (-4\u00b0F) in summer. In 1983, Russia\u2019s Vostok Research Station measured the coldest temperature ever recorded on Earth: -89.2\u00b0C (-128.6\u00b0F). An even lower temperature was measured using satellite data taken in 2010: -93.2\u00b0C (-135.8\u00b0F)\n\nPrecipitation in the Antarctic is hard to measure. It always falls as snow. Antarctica\u2019s interior is believed to receive only 50 to 100 millimeters (2-4 inches) of water (in the form of snow) every year. The Antarctic desert is one of the driest deserts in the world. The oceans surrounding Antarctica provide an important physical component of the Antarctic region. The waters surrounding Antarctica are relatively deep, reaching 4,000 to 5,000 meters (13,123 to 16,404 feet) in depth.\n\nThe Antarctic region has an important role in global climate processes. It is an integral part of the Earth\u2019s heat balance. This balance, also called the energy balance, is the relationship between the amount of solar heat absorbed by Earth\u2019s atmosphere and the amount deflected back into space. Antarctica has a larger role than most continents in maintaining Earth\u2019s heat balance and ice is more reflective than land or water surfaces. As a result, the massive Antarctic Ice Sheet reflects a large amount of solar radiation away from Earth\u2019s surface. As global ice cover (ice sheets and glaciers) decreases, the reflectivity of Earth\u2019s surface also diminishes. This allows more incoming solar radiation to be absorbed by the Earth\u2019s surface, causing an unequal heat balance linked to global warming, the current period of climate change.\n\nInterestingly, NASA scientists have found that climate change has caused more ice to form in some parts of Antarctica. They say this is happening because of new climate patterns caused by this change, which in turn create a strong wind pattern called the \u2018polar vortex.\u2019 These kinds of polar winds lower temperatures in the Antarctic and have been building in strength in recent decades\u2014as much as 15 percent since 1980. This effect is not seen throughout the Antarctic, however, and some parts are experiencing ice melt.`,
            questionGroups: [
                // Q14-17: Sentence Completion
                {
                    groupType: "sentence-completion",
                    startQuestion: 14,
                    endQuestion: 17,
                    mainInstruction: "Complete the sentences below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 14-17 on your answer sheet.",
                    statements: [
                        { questionNumber: 14, text: "Antarctica\u2019s location far from other continents means that it is very __________.", correctAnswer: "" },
                        { questionNumber: 15, text: "Antarctica is alone among the continents in having no __________.", correctAnswer: "" },
                        { questionNumber: 16, text: "The Antarctic ice sheet holds the record as the largest __________ ice sheet on Earth.", correctAnswer: "" },
                        { questionNumber: 17, text: "__________ are blocks of ice connected to the Antarctic ice sheet.", correctAnswer: "" },
                    ],
                },
                // Q18-21: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 18,
                    endQuestion: 21,
                    mainInstruction: "Do the following statements agree with the information given in the passage on the previous page?",
                    subInstruction: "In boxes 18-21 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 18, text: "Some of Antarctica\u2019s mountains are popular with climbers.", correctAnswer: "" },
                        { questionNumber: 19, text: "The temperature in Antarctica never rises above 0\u00b0C.", correctAnswer: "" },
                        { questionNumber: 20, text: "Antarctica constitutes around one-fifth of the southern half of the world.", correctAnswer: "" },
                        { questionNumber: 21, text: "Rain in Antarctica is rare but falls occasionally.", correctAnswer: "" },
                    ],
                },
                // Q22-26: Summary With Options
                {
                    groupType: "summary-with-options",
                    startQuestion: 22,
                    endQuestion: 26,
                    mainInstruction: "Complete the summary using the list of words, A-G, below.",
                    subInstruction: "Write the correct letter, A-G, in boxes 22-26 on your answer sheet.",
                    mainHeading: "Antarctica and the Changing Climate",
                    phraseList: [
                        { letter: "A", text: "reflectivity" },
                        { letter: "B", text: "ice melt" },
                        { letter: "C", text: "solar radiation" },
                        { letter: "D", text: "polar vortex winds" },
                        { letter: "E", text: "heat balance" },
                        { letter: "F", text: "water surfaces" },
                        { letter: "G", text: "global warming" },
                    ],
                    summarySegments: [
                        { type: "text", content: "Antarctica plays an important role in regulating the Earth\u2019s climate through the process of " },
                        { type: "blank", questionNumber: 22, correctAnswer: "" },
                        { type: "text", content: ". " },
                        { type: "blank", questionNumber: 23, correctAnswer: "" },
                        { type: "text", content: " is diverted away from the Earth by the huge Antarctic ice sheet. As the size and " },
                        { type: "blank", questionNumber: 24, correctAnswer: "" },
                        { type: "text", content: " of the ice sheet have decreased, " },
                        { type: "blank", questionNumber: 25, correctAnswer: "" },
                        { type: "text", content: " has caused melting in some parts of the continent. However, other areas of Antarctica have experienced falling temperatures in recent years, due to " },
                        { type: "blank", questionNumber: 26, correctAnswer: "" },
                        { type: "text", content: ", climate patterns leading to reduced temperatures." },
                    ],
                },
            ],
            questions: [
                { questionNumber: 14, questionType: "sentence-completion", questionText: "Antarctica\u2019s location far from other continents means that it is very __________.", correctAnswer: "", marks: 1 },
                { questionNumber: 15, questionType: "sentence-completion", questionText: "Antarctica is alone among the continents in having no __________.", correctAnswer: "", marks: 1 },
                { questionNumber: 16, questionType: "sentence-completion", questionText: "The Antarctic ice sheet holds the record as the largest __________ ice sheet on Earth.", correctAnswer: "", marks: 1 },
                { questionNumber: 17, questionType: "sentence-completion", questionText: "__________ are blocks of ice connected to the Antarctic ice sheet.", correctAnswer: "", marks: 1 },
                { questionNumber: 18, questionType: "true-false-not-given", questionText: "Some of Antarctica\u2019s mountains are popular with climbers.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 19, questionType: "true-false-not-given", questionText: "The temperature in Antarctica never rises above 0\u00b0C.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 20, questionType: "true-false-not-given", questionText: "Antarctica constitutes around one-fifth of the southern half of the world.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 21, questionType: "true-false-not-given", questionText: "Rain in Antarctica is rare but falls occasionally.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 22, questionType: "summary-with-options", questionText: "regulating the Earth\u2019s climate through the process of ___", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 23, questionType: "summary-with-options", questionText: "___ is diverted away from the Earth", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 24, questionType: "summary-with-options", questionText: "As the size and ___ of the ice sheet have decreased", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 25, questionType: "summary-with-options", questionText: "___ has caused melting in some parts", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 26, questionType: "summary-with-options", questionText: "falling temperatures in recent years, due to ___", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 3: Thinking, Fast and Slow (Q27-40)
        // Q27-31: Multiple Choice
        // Q32-36: Yes/No/Not Given
        // Q37-39: Matching Features (sentence endings)
        // Q40: Multiple Choice
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "Thinking, Fast and Slow",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: `The idea that we are ignorant of our true selves surged in the 20th century and became common. It\u2019s still a commonplace, but it\u2019s changing shape. These days, the bulk of the explanation is done by something else: the \u2018dual-process\u2019 model of the brain. We now know that we apprehend the world in two radically opposed ways, employing two fundamentally different modes of thought: \u2018System 1\u2019 and \u2018System 2\u2019. System 1 is fast; it\u2019s intuitive, associative and automatic and it can\u2019t be switched off. Its operations involve no sense of intentional control, but it\u2019s the \u201csecret author of many of the choices and judgments you make\u201d and it\u2019s the hero of Daniel Kahneman\u2019s alarming, intellectually stimulating book Thinking, Fast and Slow.\n\nSystem 2 is slow, deliberate and effortful. Its operations require attention. (To set it going now, ask yourself the question \u201cWhat is 13 x 27?\u201d). System 2 takes over, rather unwillingly, when things get tricky. It\u2019s \u201cthe conscious being you call \u2018I\u2019\u201d, and one of Kahneman\u2019s main points is that this is a mistake. You\u2019re wrong to identify with System 2, for you are also and equally and profoundly System 1. Kahneman compares System 2 to a supporting character who believes herself to be the lead actor and often has little idea of what\u2019s going on.\n\nSystem 2 is slothful, and tires easily (a process called \u2018ego depletion\u2019) \u2013 so it usually accepts what System 1 tells it. It\u2019s often right to do so, because System 1 is for the most part pretty good at what it does; it\u2019s highly sensitive to subtle environmental cues, signs of danger, and so on. It does, however, pay a high price for speed. It loves to simplify, to assume WYSIATI (\u2018what you see is all there is\u2019). It\u2019s hopelessly bad at the kind of statistical thinking often required for good decisions, it jumps wildly to conclusions and it\u2019s subject to a fantastic range of irrational cognitive biases and interference effects, such as confirmation bias and hindsight bias, to name but two.\n\nThe general point about our self-ignorance extends beyond the details of Systems 1 and 2. We\u2019re astonishingly susceptible to being influenced by features of our surroundings. One famous (pre-mobile phone) experiment centred on a New York City phone booth. Each time a person came out of the booth after having made a call, an accident was staged \u2013 someone dropped all her papers on the pavement. Sometimes a dime had been placed in the phone booth, sometimes not (a dime was then enough to make a call). If there was no dime in the phone booth, only 4% of the exiting callers helped to pick up the papers. If there was a dime, no fewer than 88% helped.\n\nSince then, thousands of other experiments have been conducted, all to the same general effect. We don\u2019t know who we are or what we\u2019re like, we don\u2019t know what we\u2019re really doing and we don\u2019t know why we\u2019re doing it. For example, Judges think they make considered decisions about parole based strictly on the facts of the case. It turns out (to simplify only slightly) that it is their blood-sugar levels really sitting in judgment. If you hold a pencil between your teeth, forcing your mouth into the shape of a smile, you\u2019ll find a cartoon funnier than if you hold the pencil pointing forward, by pursing your lips round it in a frown-inducing way.\n\nIn an experiment designed to test the \u2018anchoring effect\u2019, highly experienced judges were given a description of a shoplifting offence. They were then \u2018anchored\u2019 to different numbers by being asked to roll a pair of dice that had been secretly loaded to produce only two totals \u2013 three or nine. Finally, they were asked whether the prison sentence for the shoplifting offence should be greater or fewer, in months, than the total showing on the dice. Normally the judges would have made extremely similar judgments, but those who had just rolled nine proposed an average of eight months while those who had rolled three proposed an average of only five months. All were unaware of the anchoring effect.\n\nThe same goes for all of us, almost all the time. We think we\u2019re smart; we\u2019re confident we won\u2019t be unconsciously swayed by the high list price of a house. We\u2019re wrong. (Kahneman admits his own inability to counter some of these effects.) For example, another systematic error involves \u2018duration neglect\u2019 and the \u2018peak-end rule\u2019. Looking back on our experience of pain, we prefer a larger, longer amount to a shorter, smaller amount, just so long as the closing stages of the greater pain were easier to bear than the closing stages of the lesser one.`,
            questionGroups: [
                // Q27-31: Multiple Choice
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 27,
                    endQuestion: 31,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 27-31 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 27,
                            questionText: "The dual process model of the brain is",
                            options: [
                                { letter: "A", text: "The common practice of thinking about two things at the same time." },
                                { letter: "B", text: "The conflicting impulses pushing the brain to make both more and less effort." },
                                { letter: "C", text: "The feeling of liking and not liking something simultaneously." },
                                { letter: "D", text: "The natural tendency to make sense of the world in two different ways." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 28,
                            questionText: "System 2 takes charge of decision-making when",
                            options: [
                                { letter: "A", text: "When the brain needs a rest." },
                                { letter: "B", text: "When more mental effort is required." },
                                { letter: "C", text: "When a person feels excessively confident." },
                                { letter: "D", text: "When a dangerous situation is developing." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 29,
                            questionText: "\u2018Confirmation bias\u2019 is an example of",
                            options: [
                                { letter: "A", text: "System 1 rushing to judgment." },
                                { letter: "B", text: "System 1 making a careful judgment." },
                                { letter: "C", text: "System 1 making a brave judgment." },
                                { letter: "D", text: "System 1 judging a situation based on facts." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 30,
                            questionText: "The main conclusion of the phone booth experiment was that",
                            options: [
                                { letter: "A", text: "People are more likely to help someone that they are attracted to." },
                                { letter: "B", text: "People are more responsive to their environment than they realize." },
                                { letter: "C", text: "People are more likely to be helpful if they think they will be rewarded." },
                                { letter: "D", text: "People are generally selfish and will always do what is best for themselves." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 31,
                            questionText: "The \u2018anchoring effect\u2019 is the process by which",
                            options: [
                                { letter: "A", text: "Decisions are made using a numerical system." },
                                { letter: "B", text: "A subconscious factor may strongly influence our decision-making." },
                                { letter: "C", text: "Decisions about prison sentences are made by rolling a dice." },
                                { letter: "D", text: "We may emphasize certain factor too much in our decision-making." },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
                // Q32-36: Yes/No/Not Given
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 32,
                    endQuestion: 36,
                    mainInstruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
                    subInstruction: "In boxes 32-36 on your answer sheet, write YES if the statement agrees with the claims of the writer, NO if the statement contradicts the claims of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this.",
                    statements: [
                        { questionNumber: 32, text: "In general, humans have become less rational over the last 100 years.", correctAnswer: "" },
                        { questionNumber: 33, text: "Most people lack a clear sense of their own personal identity.", correctAnswer: "" },
                        { questionNumber: 34, text: "A person can train themselves to use System 2 most of the time.", correctAnswer: "" },
                        { questionNumber: 35, text: "People who make important decisions should be made aware of the dual-process model.", correctAnswer: "" },
                        { questionNumber: 36, text: "In most everyday situations, people are capable of making calm and rational decisions.", correctAnswer: "" },
                    ],
                },
                // Q37-39: Matching Features (sentence endings)
                {
                    groupType: "matching-features",
                    startQuestion: 37,
                    endQuestion: 39,
                    mainInstruction: "Complete each sentence with the correct ending, A-E, below.",
                    subInstruction: "Write the correct letter, A-E, in boxes 37-39 on your answer sheet.",
                    featureListTitle: "Sentence Endings",
                    featureOptions: [
                        { letter: "A", text: "feeling a certain way at the conclusion of an experience decides how we remember it." },
                        { letter: "B", text: "decision-making and judgments are made too quickly." },
                        { letter: "C", text: "having less energy means we are more likely to succumb to an irrational bias." },
                        { letter: "D", text: "being sensitive to ones\u2019 surroundings is a useful survival skill." },
                        { letter: "E", text: "wanting more food or drink may distract us from the decision we are making." },
                    ],
                    matchingItems: [
                        { questionNumber: 37, text: "In the course of evolutionary history System 1 has served humans well because", correctAnswer: "" },
                        { questionNumber: 38, text: "Low blood sugar or tiredness may be factors in decision making because", correctAnswer: "" },
                        { questionNumber: 39, text: "The \u2018peak-end rule\u2019 shows us that", correctAnswer: "" },
                    ],
                },
                // Q40: Multiple Choice
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 40,
                    endQuestion: 40,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in box 40 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 40,
                            questionText: "What is the writer\u2019s primary purpose in writing this article?",
                            options: [
                                { letter: "A", text: "to introduce their own research to the general reader" },
                                { letter: "B", text: "to summarize and review a recently published book" },
                                { letter: "C", text: "to argue against a commonly-held theory" },
                                { letter: "D", text: "to encourage readers to question their own decision-making processes." },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
            ],
            questions: [
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "The dual process model of the brain is", correctAnswer: "", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "System 2 takes charge of decision-making when", correctAnswer: "", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "\u2018Confirmation bias\u2019 is an example of", correctAnswer: "", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "The main conclusion of the phone booth experiment was that", correctAnswer: "", marks: 1 },
                { questionNumber: 31, questionType: "multiple-choice-full", questionText: "The \u2018anchoring effect\u2019 is the process by which", correctAnswer: "", marks: 1 },
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "In general, humans have become less rational over the last 100 years.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 33, questionType: "yes-no-not-given", questionText: "Most people lack a clear sense of their own personal identity.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "A person can train themselves to use System 2 most of the time.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "People who make important decisions should be made aware of the dual-process model.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 36, questionType: "yes-no-not-given", questionText: "In most everyday situations, people are capable of making calm and rational decisions.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 37, questionType: "matching-features", questionText: "In the course of evolutionary history System 1 has served humans well because", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "Low blood sugar or tiredness may be factors in decision making because", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 39, questionType: "matching-features", questionText: "The \u2018peak-end rule\u2019 shows us that", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 40, questionType: "multiple-choice-full", questionText: "What is the writer\u2019s primary purpose in writing this article?", correctAnswer: "", marks: 1 },
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
        console.error("\u274c Error seeding Reading Test 17:", error);
        process.exit(1);
    }
}

seedTest();

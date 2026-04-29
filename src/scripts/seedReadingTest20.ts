import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_ACADEMIC_020",
    testNumber: 20,
    title: "Academic Reading Mock Test 20",
    description: "IELTS Academic Reading Test featuring passages on The Rosetta Stone, The Giant Panda and Global Warming, and Antibiotic Resistance.",
    source: "Academic Reading Practice",
    testType: "academic" as const,
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: The Rosetta Stone (Q1-13)
        // Q1-6: Matching Headings
        // Q7-10: Multiple Choice (A, B, C, D)
        // Q11-13: Choose THREE letters (A-F)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "The Rosetta Stone",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: `A The Rosetta Stone is 45 inches high at its tallest point, 28.5 inches wide, and 11 inches thick. The stone is inscribed with a decree setting up the cult of the pharaoh for Ptolemy V, who was the fifth ruler of the Hellenistic Ptolemaic Dynasty. Ptolemy V began his rule when he was five years old, and thus much of the ruling of Egypt during his reign was done by regents and royal priests. With the Rosetta Stone, these priests continued the precedent set by Ptolemy III of issuing decrees to the populace, instead of the pharaoh himself. They had the decrees inscribed on stone and erected throughout Egypt. The Rosetta Stone is a copy of a decree issued in the city of Memphis.\n\nB After the downfall of Cleopatra, Egypt fell under Roman rule. Within one hundred years, the Romans lost all knowledge of Egyptian hieroglyphics, as most Romans did not value them or even consider them a language at all. When the Roman Empire fell, the Middle Ages began and Egypt experienced an era of relative chaos. Some knowledge of hieroglyphics continued, however, because of the idea that the bitumen used in the preparation of Egyptian mummies had healing properties. The trade in mummies allowed examples of hieroglyphs to reach Europe. In 1633, a Jesuit priest named Anthanasius Kircher made some minor translations of the hieroglyphs by substituting ideas for images, one correct use of the hieroglyphs. However, any progress in translation was very slow.\n\nC When Napoleon reached Egypt in 1798, he brought many scientists and archaeologists to the region. Napoleon originally expected to take Egypt quickly, but, due to British naval opposition, they were forced to stay for three years. This allowed the 167 scientists, technicians, mathematicians, and artists the army had brought with them much time for study of Egyptian culture and artifacts. French Army engineer, Pierre-Fran\u00e7ois Bouchard, found the stone on July 15, 1799, while he was guiding construction works near the Egyptian port city of Rosetta (present-day Rashid). He recognised its importance and sent it to Cairo. After the French surrender, a dispute arose over the fate of French archaeological and scientific discoveries in Egypt. Finally, the British took the stone as one of the spoils of war to the UK in February 1802. It was first presented to the Society of Antiquities and later it was taken to the British Museum, where it has almost permanently remained.\n\nD The Rosetta Stone was inscribed with three scripts, so that it could be read not only by the local populace, but also by visiting priests and government officials. The first script was Egyptian hieroglyphs, the script used for religious documents and other important communications. The second was Demotic Egyptian, which was the common script of Egypt. The third was Greek, which was the language of the court. The stone displays the same Ptolemaic decree of 196 BCE in all three scripts. The linguistic value of the stone lies in the fact that someone who can understand ancient Greek would therefore have a guide to the other two unknown languages. In 1822, the Frenchman Jean-Fran\u00e7ois Champollion, who understood ancient Greek, was able to decipher Egyptian hieroglyphs and Demotic Egyptian. Although it has not affected its financial and cultural worth, the Rosetta Stone is no longer unique, as other fragments of decrees in the same languages have since been discovered. Together, the stones have unlocked the previously indecipherable languages found at archaeological sites all over Egypt.\n\nE Except when on temporary loans for other museum exhibits, the Rosetta Stone has been exhibited in the British Museum since 1802, with only one break, from 1917 to 1919. Toward the end of the First World War, in 1917, when the Museum was concerned about heavy bombing in London, the Rosetta Stone was moved to safety along with other portable, important objects. The Rosetta Stone spent the next two years in a station on the Postal Tube Railway 50 feet underground at Holborn.\n\nF In July 2003, Dr. Zahi Hawass, secretary general of the Supreme Council of Antiquities in Cairo, demanded the return of the Rosetta Stone. After quite a long period of negotiations, Dr. Hawass proposed to drop his claim for the permanent return of the Rosetta Stone if the British Museum loaned the stone to Egypt for three months, for the opening of the Grand Egyptian Museum at Giza in 2013, and would provide a compromise life-size replica of the Rosetta Stone to put on display in the newly opened Rashid National Museum and this was agreed. Like many museums around the world that have treasures from other countries, the British Museum has been unwilling to relinquish its claim to the Rosetta Stone and one commentator was reported to have said that the Rosetta Stone will soon have spent longer in the British Museum than it ever did in Rosetta. The British Museum is also under pressure from Greece to return the Elgin Marbles, which were taken from the Parthenon in Athens in the early nineteenth century. The legal situation is slightly different, as the British Museum claims that the Elgin marbles were taken with permission of the then Greek government and that anyway a statute of limitations would apply, the removal being so long ago. The disputes over both archaeological treasures continue.`,
            questionGroups: [
                // Q1-6: Matching Headings
                {
                    groupType: "matching-headings",
                    startQuestion: 1,
                    endQuestion: 6,
                    mainInstruction: "The text on the previous pages has 6 paragraphs (A \u2013 F).",
                    subInstruction: "Choose the correct heading for each paragraph from the list of headings below. Write the correct number (i \u2013 viii) in boxes 1-6 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "Unlocking the Code" },
                        { numeral: "ii", text: "The Language is Lost" },
                        { numeral: "iii", text: "Bought and Sold" },
                        { numeral: "iv", text: "Re-discovery" },
                        { numeral: "v", text: "Life at the Museum" },
                        { numeral: "vi", text: "Tragedy Follows" },
                        { numeral: "vii", text: "What is it?" },
                        { numeral: "viii", text: "Controversy" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph A", correctAnswer: "" },
                        { questionNumber: 2, text: "Paragraph B", correctAnswer: "" },
                        { questionNumber: 3, text: "Paragraph C", correctAnswer: "" },
                        { questionNumber: 4, text: "Paragraph D", correctAnswer: "" },
                        { questionNumber: 5, text: "Paragraph E", correctAnswer: "" },
                        { questionNumber: 6, text: "Paragraph F", correctAnswer: "" },
                    ],
                },
                // Q7-10: Multiple Choice (A, B, C, D)
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 7,
                    endQuestion: 10,
                    mainInstruction: "Choose the correct letter A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 7-10 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 7,
                            questionText: "The Rosetta Stone was originally used as",
                            options: [
                                { letter: "A", text: "a translation tool." },
                                { letter: "B", text: "a method of propaganda." },
                                { letter: "C", text: "a system for informing citizens of new orders." },
                                { letter: "D", text: "to show duties for different goods being brought into port." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 8,
                            questionText: "After the ancient Egyptians, people only continued to understand some hieroglyphics, because",
                            options: [
                                { letter: "A", text: "it was a key to understanding history." },
                                { letter: "B", text: "it was taught in some schools." },
                                { letter: "C", text: "they were so easy to understand." },
                                { letter: "D", text: "people wanted to learn some medical knowledge." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 9,
                            questionText: "Napoleon\u2019s French archaeologists were able to study ancient Egypt for so long, because",
                            options: [
                                { letter: "A", text: "Napoleon gave them the funds to do so." },
                                { letter: "B", text: "British military opposition delayed Napoleon." },
                                { letter: "C", text: "the archaeologists were also in Napoleon\u2019s army." },
                                { letter: "D", text: "the main archaeological sites were near the coast." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 10,
                            questionText: "The British were able to get possession of the Rosetta Stone, because",
                            options: [
                                { letter: "A", text: "they had defeated the French in battle." },
                                { letter: "B", text: "the French did not want it." },
                                { letter: "C", text: "the British Museum wanted it." },
                                { letter: "D", text: "the French exchanged it for something else." },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
                // Q11-13: Choose THREE letters (A-F)
                {
                    groupType: "choose-two-letters",
                    startQuestion: 11,
                    endQuestion: 13,
                    mainInstruction: "Choose THREE letters, A \u2013 F.",
                    subInstruction: "Write the correct letter, A \u2013 F, in any order in boxes 11-13 on your answer sheet.",
                    questionSets: [
                        {
                            questionNumbers: [11, 12, 13],
                            questionText: "Which THREE of the following happened to the Rosetta Stone whilst in British possession?",
                            options: [
                                { letter: "A", text: "It became less valuable, as other similar stones were found." },
                                { letter: "B", text: "It has been lent to other museums on short-term loans." },
                                { letter: "C", text: "It was hidden underground at a time of conflict." },
                                { letter: "D", text: "It was painted white in order to hide what it was." },
                                { letter: "E", text: "A copy was made of it to help please the Egyptians who wanted it back." },
                                { letter: "F", text: "It shares a display room in the British Museum with the Elgin Marbles." },
                            ],
                            correctAnswers: ["", "", ""],
                        },
                    ],
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph A", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 7, questionType: "multiple-choice-full", questionText: "The Rosetta Stone was originally used as", correctAnswer: "", marks: 1 },
                { questionNumber: 8, questionType: "multiple-choice-full", questionText: "After the ancient Egyptians, people only continued to understand some hieroglyphics, because", correctAnswer: "", marks: 1 },
                { questionNumber: 9, questionType: "multiple-choice-full", questionText: "Napoleon\u2019s French archaeologists were able to study ancient Egypt for so long, because", correctAnswer: "", marks: 1 },
                { questionNumber: 10, questionType: "multiple-choice-full", questionText: "The British were able to get possession of the Rosetta Stone, because", correctAnswer: "", marks: 1 },
                { questionNumber: 11, questionType: "choose-two-letters", questionText: "Which THREE of the following happened to the Rosetta Stone whilst in British possession?", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 12, questionType: "choose-two-letters", questionText: "Which THREE of the following happened to the Rosetta Stone whilst in British possession?", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 13, questionType: "choose-two-letters", questionText: "Which THREE of the following happened to the Rosetta Stone whilst in British possession?", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 2: The Giant Panda and Global Warming (Q14-26)
        // Q14-18: Summary with options (word list)
        // Q19-23: Short Answer
        // Q24-26: Matching Features (Sentence Endings A-E)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "The Giant Panda and Global Warming",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: `Despite giant pandas being the feature attraction of zoos around the world \u2013 bringing joy to millions of visitors each year \u2013 and despite the birth of a giant panda cub in captivity always being headline news, the survival of giant pandas in the wild is highly uncertain.\n\nThis charismatic and universally loved species is one of the rarest and most endangered bears in the world. It was once spread throughout China, northern Vietnam and northern Burma, but now the giant panda is found in the wild in just six isolated mountain ranges in Gansu, Shaanxi and Sichuan Provinces in south-central China. This distinctive black and white creature typically leads a solitary life. It is a good swimmer and an excellent tree climber, but it spends most of its time feeding.\n\nThree-quarters of all wild giant pandas now live in nature reserves, but, despite this, they are still endangered. Nearly half of all wild giant pandas were lost between the early 1970\u2019s and the late 1990\u2019s, mainly owing to habitat destruction and poaching. Habitat loss and fragmentation are still the main threats today and this happens in a variety of ways. For example, roads and railways are increasingly cutting through the forest, which isolates giant panda populations and prevents them from breeding.\n\nIt is well known that the giant panda almost exclusively feeds on bamboo, in spite of its taxonomic classification as a meat-eater. Because of this, various scientists from Michigan State University have recently provided comprehensive forecasts of how changing climate may affect the most common species of bamboo that carpet the forest floors of prime giant panda habitat in north-western China. Even the most optimistic scenarios show that bamboo die-offs would effectively cause this giant panda habitat to become inhospitable by the end of the 21st century.\n\nThe scientists studied possible scenarios of climate change in the Qinling Mountains in Shaanxi Province. At the northern boundary of China\u2019s giant panda distributional range, the Qinling Mountains are home to about 275 wild giant pandas, which account for 17 per cent of the remaining wild population. The Qinling giant pandas, which have been isolated because of thousands of years of human habitation around the mountain range, vary genetically from other giant pandas. The geographic isolation of these giant pandas makes them particularly valuable for conservation, but susceptible to climate change. The study is meant to help with understanding the impacts of climate change and will provide important information for science to assist in making good decisions, as looking at the climate impact on the bamboo can help conservationists prepare for the challenges that the giant panda will likely face in the future.\n\nBamboo is a vital part of forest ecosystems, being not only the preferred menu item for giant pandas, but also providing essential food and shelter for other wildlife, including other endangered species, like the ploughshare tortoise and purple-winged ground-dove. However, bamboo can be a risky crop to stake survival on because of its reproductive cycle. The studied species only flower and reproduce every 30 to 35 years, which limits the plant\u2019s ability to adapt to changing climate and can spell disaster for a food supply. Bamboo naturally dies off every 40 to 120 years, depending on the type. Before people dominated their landscape, giant pandas could move from areas where die-offs had occurred to areas with healthy bamboo. But as the human population has expanded and fragmented giant panda habitats, the animals are no longer able to \u2018follow\u2019 the bamboo, and so can get stuck in areas without enough food.\n\nThe Michigan scientists constructed unique models, using field data on bamboo locality, multiple climate projections and historic data of precipitation, temperature ranges and greenhouse gas emission scenarios to evaluate how the three dominant bamboo species would fare in the Qinling Mountains of China. Not many scientists to date have studied bamboo, but there is limited historical proof found in fossil records that does indicate that bamboo development has followed the benefits and devastation of climate change over time.\n\nThe fate of giant pandas will not only be determined by nature, but by humans as well. If, as the study\u2019s models predict, large swathes of bamboo become unavailable because of human-caused land use changes, giant pandas will be deprived of clear, accessible paths between meal sources. The models can point the way for authorities to develop proactive planning to protect areas where the climate increases their potential for providing adequate food sources or to begin making natural bridges to allow giant pandas to escape from bamboo famine.\n\nThe results of the Michigan study have shown that giant panda habitat and the effectiveness of protecting this habitat will be severely affected by climate change and their models predict climate change could reduce giant panda habitat by nearly 60 per cent over the next 70 years. The research provides compelling evidence of the need to increase protected area development in many of the ranges of the current giant panda distribution. Independent conservationists have also advised that China needs to ensure increased connectivity between currently existing and potential future suitable territories. However, although the Michigan study does not refer to it, it is clear that more time is needed to decide about maintaining these links between areas of good giant panda habitats and conserving habitats for other species. The key element is haste, before numbers become too low and gene diversity becomes too limited.`,
            questionGroups: [
                // Q14-18: Summary with word list
                {
                    groupType: "summary-with-options",
                    startQuestion: 14,
                    endQuestion: 18,
                    mainInstruction: "Complete the summary using the words in the box below.",
                    subInstruction: "Write your answers in boxes 14-18 on your answer sheet.",
                    mainHeading: "",
                    phraseList: [
                        { letter: "A", text: "forager" },
                        { letter: "B", text: "hunting" },
                        { letter: "C", text: "negative" },
                        { letter: "D", text: "found" },
                        { letter: "E", text: "size" },
                        { letter: "F", text: "carnivore" },
                        { letter: "G", text: "pollution" },
                        { letter: "H", text: "popularity" },
                        { letter: "I", text: "identifiable" },
                        { letter: "J", text: "encouraging" },
                    ],
                    summarySegments: [
                        { type: "text", content: "Despite its " },
                        { type: "blank", questionNumber: 14, correctAnswer: "" },
                        { type: "text", content: ", the giant panda is critically endangered and is only found in six wild habitats. Preferring usually to be alone, this easily " },
                        { type: "blank", questionNumber: 15, correctAnswer: "" },
                        { type: "text", content: " animal likes to swim, climb trees and, for most of its time, feed on bamboo. The giant panda is low on numbers, because of " },
                        { type: "blank", questionNumber: 16, correctAnswer: "" },
                        { type: "text", content: " and loss of habitat from the 1970\u2019s to the 1980\u2019s. Although officially a " },
                        { type: "blank", questionNumber: 17, correctAnswer: "" },
                        { type: "text", content: ", bamboo is its preferred food. A recent study has shown that global warming will have " },
                        { type: "blank", questionNumber: 18, correctAnswer: "" },
                        { type: "text", content: " effects on bamboo in giant panda habitat over the next hundred years." },
                    ],
                },
                // Q19-23: Short Answer
                {
                    groupType: "short-answer",
                    startQuestion: 19,
                    endQuestion: 23,
                    mainInstruction: "Answer the questions below.",
                    subInstruction: "Write NO MORE THAN THREE WORDS AND/OR A NUMBER from the text for each answer. Write your answers in boxes 19-23 on your answer sheet.",
                    questions: [
                        { questionNumber: 19, questionText: "What proportion of wild giant pandas live in the Qinling Mountains?", correctAnswer: "" },
                        { questionNumber: 20, questionText: "What is the reason that makes the giant panda so vulnerable to changes in the climate?", correctAnswer: "" },
                        { questionNumber: 21, questionText: "What aspect of bamboo makes it a dangerous sole food source?", correctAnswer: "" },
                        { questionNumber: 22, questionText: "Where did scientists find evidence that bamboo growth and decline mirrors negative and positive climate change?", correctAnswer: "" },
                        { questionNumber: 23, questionText: "What can authorities create to let giant pandas move to different habitats in order to avoid starvation?", correctAnswer: "" },
                    ],
                },
                // Q24-26: Matching Features (Sentence Endings A-E)
                {
                    groupType: "matching-features",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Complete each sentence with the correct ending (A \u2013 E) below.",
                    subInstruction: "Write the correct letter (A \u2013 E) in answer boxes 24-26 on your answer sheet.",
                    featureListTitle: "Sentence Endings",
                    featureOptions: [
                        { letter: "A", text: "heavier rainfall in giant panda habitats." },
                        { letter: "B", text: "allow giant pandas to move between different population habitats." },
                        { letter: "C", text: "major changes in giant panda habitats." },
                        { letter: "D", text: "increase the number of breeding programs in zoos." },
                        { letter: "E", text: "increase the amount of areas where the giant panda can have protected status." },
                    ],
                    matchingItems: [
                        { questionNumber: 24, text: "The Michigan study has revealed climate change will lead to", correctAnswer: "" },
                        { questionNumber: 25, text: "The Michigan study has advised those responsible to", correctAnswer: "" },
                        { questionNumber: 26, text: "More time is needed in order to agree on how to", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 14, questionType: "summary-with-options", questionText: "Despite its ___, the giant panda is critically endangered", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "", marks: 1 },
                { questionNumber: 15, questionType: "summary-with-options", questionText: "this easily ___ animal likes to swim", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "", marks: 1 },
                { questionNumber: 16, questionType: "summary-with-options", questionText: "low on numbers, because of ___ and loss of habitat", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "", marks: 1 },
                { questionNumber: 17, questionType: "summary-with-options", questionText: "Although officially a ___, bamboo is its preferred food", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "", marks: 1 },
                { questionNumber: 18, questionType: "summary-with-options", questionText: "global warming will have ___ effects on bamboo", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], correctAnswer: "", marks: 1 },
                { questionNumber: 19, questionType: "short-answer", questionText: "What proportion of wild giant pandas live in the Qinling Mountains?", correctAnswer: "", marks: 1 },
                { questionNumber: 20, questionType: "short-answer", questionText: "What is the reason that makes the giant panda so vulnerable to changes in the climate?", correctAnswer: "", marks: 1 },
                { questionNumber: 21, questionType: "short-answer", questionText: "What aspect of bamboo makes it a dangerous sole food source?", correctAnswer: "", marks: 1 },
                { questionNumber: 22, questionType: "short-answer", questionText: "Where did scientists find evidence that bamboo growth and decline mirrors negative and positive climate change?", correctAnswer: "", marks: 1 },
                { questionNumber: 23, questionType: "short-answer", questionText: "What can authorities create to let giant pandas move to different habitats in order to avoid starvation?", correctAnswer: "", marks: 1 },
                { questionNumber: 24, questionType: "matching-features", questionText: "The Michigan study has revealed climate change will lead to", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 25, questionType: "matching-features", questionText: "The Michigan study has advised those responsible to", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 26, questionType: "matching-features", questionText: "More time is needed in order to agree on how to", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 3: Antibiotic Resistance (Q27-40)
        // Q27-33: Matching Features (people's initials)
        // Q34-38: True/False/Not Given
        // Q39-40: Short Answer (diagram labeling - IMAGE REQUIRED)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "Antibiotic Resistance",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: `An antibiotic is a drug that kills or prevents the growth of bacteria. The term \u2018antibiotic\u2019, coined by Selman Waksman, originally described only those antibiotics derived from living bodies, in contrast to \u2018chemotherapeutic agents\u2019, which are purely synthetic. Currently, the term antibiotic is also applied to synthetic antimicrobials.\n\nOveruse or misuse of antibiotics may result in the development of antibiotic resistance in the infecting organisms, similar to the development of pesticide resistance in insects. Doctor Iain Nicholson explains. \u201cThe concept of genetic selection requires that as close as possible to 100 per cent of the infecting organisms be killed off to avoid selection of resistance. If a small subset of the population survives the treatment and is allowed to multiply, the average susceptibility of this new population to the compound will be much less than that of the original population, since they have descended from those few organisms that survived the original treatment.\u201d\n\nAntibiotic resistance has become a serious problem in both developed and underdeveloped nations. In certain settings, such as hospitals, the rate of antibiotic resistance is so high today that the normal, low-cost antibiotics are virtually useless for the treatment of frequently seen infections. This leads to more common use of newer and more expensive compounds, which in turn leads to the rise of resistance to those drugs. Drug company spokesperson, Emma Thompson, explains the challenge facing the drug industry. \u201cA continuous race to discover new and different antibiotics results in an attempt to keep humanity from losing ground in the battle against infection. The fear is that we will eventually fail to keep up in this race, and that people may again face life-threatening bacterial infections.\u201d\n\nAn example of antibiotic resistance is Staphylococcus aureus, which used to be treated successfully with penicillin in the 1940\u2019s and 1950\u2019s. At present, nearly all strains are resistant to penicillin, and many are resistant to other antibiotics, leaving only a narrow selection of drugs useful for treatment. The situation is worsened by the fact that gene coding for antibiotic resistance can be transferred between bacteria, making it possible for bacteria never exposed to an antibiotic to acquire resistance from those which have.\n\nMicrobial resistance to antibiotics is a natural consequence of selective pressures placed on bacteria. However, humans have greatly accelerated the evolution of resistant bacteria by the overuse and misuse of antibiotics in the community. Government health official, Georgina Haynes, explains. \u201cOne of the major problems is when antibiotics are used to treat disorders for which they have no efficacy, such as the common cold or other viral complaints, and when they are used widely as prophylaxis rather than treatment, because this exposes more bacteria to selection for resistance.\u201d Similarly, in order to kill all the bacteria of an infection, antibiotics must be used for a whole course and not stopped just when symptoms improve. The discoverer of penicillin himself, Alexander Fleming, warned the scientific community: \u201cThe administration of too small doses leads to the production of resistant strains of bacteria.\u201d This can happen due to patient ignorance and to improper pharmacy actions, usually in the developing world. In developing countries, antibiotic prescriptions are often broken up. For example, in some Asian countries, it is common for pharmacies to sell as many tablets as the patient can afford, which may only be two or three. This is an insufficient dose to cure infection and will only further contribute to the evolution of resistant strains of bacteria. Recent reports have also shown that containers of medicine from some African countries sometimes contain only half the drug content that was indicated on the label. This may be due to \u2018counterfeit\u2019 medicines or improper storage, but also tropical conditions, such as those often found in Africa, readily cause degradation of medical compounds. Chenbo Okonkwa, a pharmaceutical wholesaler, describes the problem. \u201cAlthough local regulations may require pharmacies to store drugs in air-conditioned premises, most undergo frequent power outages and warehouses are rarely kept cool. Furthermore, unauthorised dealers rarely bother to follow official storage guidelines.\u201d\n\nAnother problem contributing to antibiotic resistance is that antibiotics are widely used in food-producing animals, which contributes to the emergence of antibiotic-resistant bacteria in them. These resistant bacteria can contaminate the foods that come from these animals, and persons who consume these foods can develop antibiotic-resistant infections. This can be seen, for instance, in the fish farm industry. It is common to put upwards of 100,000 fish into each pen, which creates cramped and stressful conditions. This increases the susceptibility of fish to certain bacterial diseases, such as furunculosis. Furunculosis, an infection of the kidneys, is easily transmitted through water and so is devastating to fish farms. To combat the disease, antibiotics were added to fish food pellets, but these were unpalatable to the fish. They were already suffering from loss of appetite due to their infections and so most of the antibiotics ended up at the bottom of the pens, allowing residual drugs to spread throughout the marine environment. Fish farmer, Jo Hardwick, explains that this is different now. \u201cToday, vaccines are replacing the antibiotic pellets as a treatment for the disease, but unfortunately, most of the damage has already been done.\u201d\n\nIn conclusion, antibiotics must be used judiciously in humans and animals, because both uses contribute to the emergence, persistence, and spread of resistant bacteria. Resistant bacteria in food-producing animals are of particular concern. Food animals serve as a reservoir of resistant pathogens and resistance mechanisms that can directly or indirectly result in antibiotic resistant infections in humans. If people do not wish to be faced with an attack of all the diseases, they thought they had conquered in the twentieth century, society has to change its approach to antibiotic use.`,
            questionGroups: [
                // Q27-33: Matching Features (people's initials)
                {
                    groupType: "matching-features",
                    startQuestion: 27,
                    endQuestion: 33,
                    mainInstruction: "Look at the following statements (questions 27-33) and the list of people below. Match each statement with the correct person\u2019s initials.",
                    subInstruction: "Write the correct initials in boxes 27-33 on your answer sheet.",
                    featureListTitle: "List of People",
                    featureOptions: [
                        { letter: "IN", text: "Iain Nicholson" },
                        { letter: "ET", text: "Emma Thompson" },
                        { letter: "GH", text: "Georgina Haynes" },
                        { letter: "AF", text: "Alexander Fleming" },
                        { letter: "CO", text: "Chenbo Okonkwa" },
                        { letter: "JH", text: "Jo Hardwick" },
                    ],
                    matchingItems: [
                        { questionNumber: 27, text: "Resistant bacteria can develop if doctors do not prescribe enough antibiotic.", correctAnswer: "" },
                        { questionNumber: 28, text: "Society may again have to face infectious diseases that were previously thought treatable.", correctAnswer: "" },
                        { questionNumber: 29, text: "Using antibiotics as a preventative measure is a key factor in the development of antibiotic resistance.", correctAnswer: "" },
                        { questionNumber: 30, text: "Better practice in fish farms when dealing with disease is too late when it comes to the spread of antibiotics in the environments around fish farms.", correctAnswer: "" },
                        { questionNumber: 31, text: "Drug companies may not be able to keep finding new antibiotics to fight lethal resistant infections.", correctAnswer: "" },
                        { questionNumber: 32, text: "All a patient\u2019s infection must be destroyed by prescribed antibiotics in order to stop resistance growing.", correctAnswer: "" },
                        { questionNumber: 33, text: "Illicit antibiotic salesmen hardly ever follow the instructions for keeping antibiotics in the right way.", correctAnswer: "" },
                    ],
                },
                // Q34-38: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 34,
                    endQuestion: 38,
                    mainInstruction: "Do the following statements agree with the information given in the text?",
                    subInstruction: "In boxes 34-38 on your answer sheet write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 34, text: "The current definition of an antibiotic only includes drugs originating from live organisms.", correctAnswer: "" },
                        { questionNumber: 35, text: "Antibiotic resistance is a significant issue in both first and second world countries.", correctAnswer: "" },
                        { questionNumber: 36, text: "Some hospitals nowadays have to fund new antibiotic research themselves.", correctAnswer: "" },
                        { questionNumber: 37, text: "Climate conditions in some parts of Africa can damage antibiotics in their containers.", correctAnswer: "" },
                        { questionNumber: 38, text: "Resistant bacteria in food cannot be passed on to humans who eat it.", correctAnswer: "" },
                    ],
                },
                // Q39-40: Short Answer (diagram labeling - IMAGE REQUIRED)
                {
                    groupType: "short-answer",
                    startQuestion: 39,
                    endQuestion: 40,
                    mainInstruction: "Label the diagram below.",
                    subInstruction: "Write NO MORE THAN THREE WORDS from the text for each answer. Write your answers in boxes 39 and 40 on your answer sheet. [NOTE: The original test includes a diagram titled \u201cThe Misuse of Antibiotics in the Fish Farm Industry\u201d \u2014 image not embedded in this seed.]",
                    questions: [
                        { questionNumber: 39, questionText: "Label 39 on the diagram: \u201cThe Misuse of Antibiotics in the Fish Farm Industry\u201d (refer to the passage about fish farms).", correctAnswer: "" },
                        { questionNumber: 40, questionText: "Label 40 on the diagram: \u201cThe Misuse of Antibiotics in the Fish Farm Industry\u201d (refer to the passage about fish farms).", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 27, questionType: "matching-features", questionText: "Resistant bacteria can develop if doctors do not prescribe enough antibiotic.", options: ["IN", "ET", "GH", "AF", "CO", "JH"], correctAnswer: "", marks: 1 },
                { questionNumber: 28, questionType: "matching-features", questionText: "Society may again have to face infectious diseases that were previously thought treatable.", options: ["IN", "ET", "GH", "AF", "CO", "JH"], correctAnswer: "", marks: 1 },
                { questionNumber: 29, questionType: "matching-features", questionText: "Using antibiotics as a preventative measure is a key factor in the development of antibiotic resistance.", options: ["IN", "ET", "GH", "AF", "CO", "JH"], correctAnswer: "", marks: 1 },
                { questionNumber: 30, questionType: "matching-features", questionText: "Better practice in fish farms when dealing with disease is too late when it comes to the spread of antibiotics in the environments around fish farms.", options: ["IN", "ET", "GH", "AF", "CO", "JH"], correctAnswer: "", marks: 1 },
                { questionNumber: 31, questionType: "matching-features", questionText: "Drug companies may not be able to keep finding new antibiotics to fight lethal resistant infections.", options: ["IN", "ET", "GH", "AF", "CO", "JH"], correctAnswer: "", marks: 1 },
                { questionNumber: 32, questionType: "matching-features", questionText: "All a patient\u2019s infection must be destroyed by prescribed antibiotics in order to stop resistance growing.", options: ["IN", "ET", "GH", "AF", "CO", "JH"], correctAnswer: "", marks: 1 },
                { questionNumber: 33, questionType: "matching-features", questionText: "Illicit antibiotic salesmen hardly ever follow the instructions for keeping antibiotics in the right way.", options: ["IN", "ET", "GH", "AF", "CO", "JH"], correctAnswer: "", marks: 1 },
                { questionNumber: 34, questionType: "true-false-not-given", questionText: "The current definition of an antibiotic only includes drugs originating from live organisms.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 35, questionType: "true-false-not-given", questionText: "Antibiotic resistance is a significant issue in both first and second world countries.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 36, questionType: "true-false-not-given", questionText: "Some hospitals nowadays have to fund new antibiotic research themselves.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 37, questionType: "true-false-not-given", questionText: "Climate conditions in some parts of Africa can damage antibiotics in their containers.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 38, questionType: "true-false-not-given", questionText: "Resistant bacteria in food cannot be passed on to humans who eat it.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 39, questionType: "short-answer", questionText: "Label 39 on the diagram: \u201cThe Misuse of Antibiotics in the Fish Farm Industry\u201d.", correctAnswer: "", marks: 1 },
                { questionNumber: 40, questionType: "short-answer", questionText: "Label 40 on the diagram: \u201cThe Misuse of Antibiotics in the Fish Farm Industry\u201d.", correctAnswer: "", marks: 1 },
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
        console.error("\u274c Error seeding Reading Test 20:", error);
        process.exit(1);
    }
}

seedTest();

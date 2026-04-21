/**
 * Seed Script: Academic Reading Test 11
 * Run: npx ts-node src/scripts/seedReadingTest11.ts
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: RED IN RUSSIAN ART
// ═══════════════════════════════════════════════════════════════

const passage1Text = `A In Old Slavonic, a language that precedes Russian, 'red' has a similar root to the words 'good' and 'beautiful'. Indeed, until the 20th century, Krasnaya Ploshchad, or Red Square, in central Moscow, was understood by locals as 'Beautiful Square'. For Russians, red has great symbolic meaning, being associated with goodness, beauty, warmth, vitality, jubilation, faith, love, salvation, and power.

B Because red is a long-wave colour at the end of the spectrum, its effect on a viewer is striking: it appears closer than colours with shorter waves, like green, and it also intensifies colours placed alongside it, which accounts for the popularity of red and green combinations in Russian painting.

C Russians love red. In the applied arts, it predominates – bowls, boxes, trays, wooden spoons, and distaffs for spinning all feature red, as do children's toys, decorative figurines, Easter eggs, embroidered cloths, and garments. In the fine arts, red, white, and gold form the basis of much icon painting.

D In pre-Christian times, red symbolised blood. Christianity adopted the same symbolism; red represented Christ or saints in their purification or martyrdom. The colour green, meantime, signified wisdom, while white showed a person reborn as a Christian. Thus, in a famous 15th-century icon from the city of Novgorod, Saint George and the Dragon, red-dressed George sports a green cape, and rides a pure-white stallion. In many icons, Christ and the angels appear in a blaze of red, and the mother of Christ can be identified by her long red veil. In an often-reproduced icon from Yaroslavl, the Archangel Michael wears a brilliant red cloak. However, the fires of Hell that burn sinners are also red, like those in an icon from Pskov.

E A red background for major figures in icons became the norm in representations of mortal beings, partly to add vibrancy to skin tones, and one fine example of this is a portrait of Nikolai Gogol, the writer, from the early 1840s. When wealthy aristocrats wished to be remembered for posterity, they were often depicted in dashing red velvet coats, emulating the cloaks of saints, as in the portraits of Jakob Turgenev in 1696, or of Admiral Ivan Talyzin in the mid-1760s. Portraits of women in Russian art are rare, but the Princess Yekaterina Golitsyna, painted in the early 1800s, wears a fabulous red shawl.

Common people did not appear frequently in Russian fine art until the 19th century when their peasant costumes were often white with red embroidery, and their elaborate headdresses and scarves were red. The women in the 1915 painting, Visiting, by Abram Arkhipov seem aflame with life: their dresses are red; their cheeks are red; and, a jug of vermillion lingonberry cordial glows on the table beside them.

Russian avant-garde painters of the early 20th century are famous beyond Russia as some of the greatest abstract artists. Principal among these are Nathan Altman, Natalia Goncharova, Wassily Kandinsky, and Kazimir Malevich, who painted the ground-breaking White on white as well as Red Square, which is all the more compelling because it isn't quite square. Malevich used primary colours, with red prominent, in much of his mature work. Kuzma Petrov-Vodkin is hailed as a genius at home, but less well-known abroad; his style is often surreal, and his palette is restricted to the many hues of red, contrasting with green or blue. The head in his 1915 Head of a youth is entirely red, while his 1925 painting, Fantasy, shows a man in blue, on a larger-than-life all-red horse, with a blue town in blue mountains behind.

F Part of the enthusiasm for red in the early 20th century was due to the rise of the political movement, communism. Red had first been used as a symbol of revolution in France in the late 18th century. The Russian army from 1918-45 called itself the Red Army to continue this revolutionary tradition, and the flag of the Soviet Union was the Red Flag.

Soviet poster artists and book illustrators also used swathes of red. Some Social Realist painters have been discredited for their political associations, but their art was potent, and a viewer cannot help but be moved by Nikolai Rutkovsky's 1934 Stalin at Kirov's coffin. Likewise, Alexander Gerasimov's 1942 Hymn to October or Dmitry Zhilinsky's 1965 Gymnasts of the USSR stand on their own as memorable paintings, both of which include plenty of red.

G In English, red has many negative connotations – red for debt, a red card for football fouls, or a red-light district – but in Russian, red is beautiful, vivacious, spiritual, and revolutionary. And Russian art contains countless examples of its power.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2 & 3: TO BE ADDED
// ═══════════════════════════════════════════════════════════════

const passage2Text = `A buttercup is a small, bright yellow flower; a butternut is a yellow-fleshed squash; and, there is also a butter bean. The origin of the word \u2018butterfly\u2019 may be similar to these plants \u2013 a creature with wings the colour of butter \u2013 but a more fanciful notion is that \u2018flutterby\u2019 was misspelt by an early English scribe since a butterfly\u2019s method of flight is to flutter by. Etymologists may not concur, but entomologists agree with each other that butterflies belong to the order of Lepidoptera, which includes moths, and that \u2018lepidoptera\u2019 accurately describes the insects since \u2018lepis\u2019 means \u2018scale\u2019 and \u2018pteron\u2019 means \u2018wing\u2019 in Greek.

Until recently, butterflies were prized for their evanescence \u2013 people believed that adults lived for a single day; it is now known this is untrue, and some, like monarch butterflies, live for up to nine months.

**Butterflies versus Moths**

Butterflies and moths have some similarities: as adults, both have fur membranous wings covered in minute scales, attached to a short thorax and a longer abdomen with three pairs of legs. They have moderately large heads, long antennae, and compound eyes; tiny palps for smell; and, a curling proboscis for sucking nectar. Otherwise, their size, colouration, and life cycles are the same.

Fewer than one percent of all insects are butterflies, but they hold a special place in the popular imagination as being beautiful and benign. Views of moths, however, are less kind since some live indoors and fast on cloth; others damage crops; and, most commit suicide, being nocturnal and drawn to artificial light. There are other differences between butterflies and moths; for example, when resting, the former fold their wings vertically above their bodies, while the latter lay theirs flat. Significantly, butterfly antennae thicken slightly towards their tips, whereas moth antennae end in something that looks like a V-shaped TV aerial.

**The Monarch Butterfly**

Originating in North America, the black-orange-and-white monarch butterfly lives as far away as Australia and New Zealand, and for many children, it represents a lesson in metamorphosis, which can even be viewed in one\u2019s living room if a pupa is brought indoors.

It is easy to identify the four stages of a monarch\u2019s life cycle \u2013 egg, larva, pupa, and adult \u2013 but there are really seven. This is because, unlike vertebrates, insects do not have an internal skeleton, but a tough outer covering called an exoskeleton. This is often shell-like and sometimes indigestible by predators. Muscles are hinged to its inside. As the insect grows, however, the constraining exoskeleton must be moulted, and a monarch butterfly undergoes seven moults, including fur as a larva.

Temperature dramatically affects butterfly growth: in warm weather, a monarch may go through its seven moults in just over a month. Time spent inside the egg, for instance, may last three to four days in 25\u00b0 Celsius, but in 18\u00b0, the whole process may take closer to eight weeks, with time inside the egg eight to twelve days. Naturally, longer development means lower populations due to increased predation.

A reliable food supply influences survival and the female monarch butterfly is able to sniff out one particular plant its young can feed off \u2013 milkweed or swan plant. There are a few other plants larvae can eat, but they will resort to these only if the milkweed is exhausted and alternatives are very close by. Moreover, a female butterfly may be conscious of the size of the milkweed on which she lays her eggs since she spaces them, but another butterfly may deposit on the same plant, lessening everyone\u2019s chance of survival.

While many other butterflies are close to extinction due to pollution or dwindling habitat, the global numbers of monarchs have decreased in the past two decades, but less dramatically.

Monarch larvae absorb toxins from milkweed that renders them poisonous to most avian predators who attack them. Insect predators, like aphids, flies, and wasps, seem unaffected by the poison and are therefore common. A recent disturbing occurrence is the death of monarch eggs and larvae from bacterial infection.

Another reason for population decline is reduced wintering conditions. Like many birds, monarch butterflies migrate to warmer climates in winter, often flying extremely long distances, for example, from Canada to southern California or northern Mexico, or from southern Australia to the tropical north. They also spend some time in semi-hibernation in dense colonies deep in forests. In isolated New Zealand, monarchs do not migrate, instead of finding particular trees on which to congregate. In some parts of California, wintering sites are protected, but in Mexico, much of the forest is being logged, and the insects are in grave danger.

Milkweed is native to southern Africa and North America, but it is easy to grow in suburban gardens. Its swan-shaped seed pods contain fluffy seeds used in the 19th century to stuff mattresses, pillows, and lifejackets. After milkweed had hitched a lift on sailing ships around the Pacific, the American butterflies followed with Hawaii seeing their permanent arrival in 1840, Samoa in 1867, Australia in 1870, and New Zealand in 1873. As butterfly numbers decline sharply in the Americas, it may be these Pacific outposts that save the monarch.`;
const passage3Text = `PASSAGE 3 TEXT WILL BE ADDED HERE`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest11 = {
    testId: "READING_ACADEMIC_011",
    testNumber: 11,
    title: "Academic Reading Mock Test 11",
    description: "Academic Reading Test with 3 passages and 40 questions",
    source: "Academic Reading Practice",
    testType: "academic",
    difficulty: "medium",
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: RED IN RUSSIAN ART (Questions 1-14)         ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "Red in Russian Art",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: passage1Text,
            paragraphs: [
                { label: "A", text: "In Old Slavonic, a language that precedes Russian, 'red' has a similar root to the words 'good' and 'beautiful'. Indeed, until the 20th century, Krasnaya Ploshchad, or Red Square, in central Moscow, was understood by locals as 'Beautiful Square'. For Russians, red has great symbolic meaning, being associated with goodness, beauty, warmth, vitality, jubilation, faith, love, salvation, and power." },
                { label: "B", text: "Because red is a long-wave colour at the end of the spectrum, its effect on a viewer is striking: it appears closer than colours with shorter waves, like green, and it also intensifies colours placed alongside it, which accounts for the popularity of red and green combinations in Russian painting." },
                { label: "C", text: "Russians love red. In the applied arts, it predominates – bowls, boxes, trays, wooden spoons, and distaffs for spinning all feature red, as do children's toys, decorative figurines, Easter eggs, embroidered cloths, and garments. In the fine arts, red, white, and gold form the basis of much icon painting." },
                { label: "D", text: "In pre-Christian times, red symbolised blood. Christianity adopted the same symbolism; red represented Christ or saints in their purification or martyrdom. The colour green, meantime, signified wisdom, while white showed a person reborn as a Christian. Thus, in a famous 15th-century icon from the city of Novgorod, Saint George and the Dragon, red-dressed George sports a green cape, and rides a pure-white stallion. In many icons, Christ and the angels appear in a blaze of red, and the mother of Christ can be identified by her long red veil. In an often-reproduced icon from Yaroslavl, the Archangel Michael wears a brilliant red cloak. However, the fires of Hell that burn sinners are also red, like those in an icon from Pskov." },
                { label: "E", text: "A red background for major figures in icons became the norm in representations of mortal beings, partly to add vibrancy to skin tones, and one fine example of this is a portrait of Nikolai Gogol, the writer, from the early 1840s. When wealthy aristocrats wished to be remembered for posterity, they were often depicted in dashing red velvet coats, emulating the cloaks of saints, as in the portraits of Jakob Turgenev in 1696, or of Admiral Ivan Talyzin in the mid-1760s. Portraits of women in Russian art are rare, but the Princess Yekaterina Golitsyna, painted in the early 1800s, wears a fabulous red shawl. Common people did not appear frequently in Russian fine art until the 19th century when their peasant costumes were often white with red embroidery, and their elaborate headdresses and scarves were red. The women in the 1915 painting, Visiting, by Abram Arkhipov seem aflame with life: their dresses are red; their cheeks are red; and, a jug of vermillion lingonberry cordial glows on the table beside them. Russian avant-garde painters of the early 20th century are famous beyond Russia as some of the greatest abstract artists. Principal among these are Nathan Altman, Natalia Goncharova, Wassily Kandinsky, and Kazimir Malevich, who painted the ground-breaking White on white as well as Red Square, which is all the more compelling because it isn't quite square. Malevich used primary colours, with red prominent, in much of his mature work. Kuzma Petrov-Vodkin is hailed as a genius at home, but less well-known abroad; his style is often surreal, and his palette is restricted to the many hues of red, contrasting with green or blue. The head in his 1915 Head of a youth is entirely red, while his 1925 painting, Fantasy, shows a man in blue, on a larger-than-life all-red horse, with a blue town in blue mountains behind." },
                { label: "F", text: "Part of the enthusiasm for red in the early 20th century was due to the rise of the political movement, communism. Red had first been used as a symbol of revolution in France in the late 18th century. The Russian army from 1918-45 called itself the Red Army to continue this revolutionary tradition, and the flag of the Soviet Union was the Red Flag. Soviet poster artists and book illustrators also used swathes of red. Some Social Realist painters have been discredited for their political associations, but their art was potent, and a viewer cannot help but be moved by Nikolai Rutkovsky's 1934 Stalin at Kirov's coffin. Likewise, Alexander Gerasimov's 1942 Hymn to October or Dmitry Zhilinsky's 1965 Gymnasts of the USSR stand on their own as memorable paintings, both of which include plenty of red." },
                { label: "G", text: "In English, red has many negative connotations – red for debt, a red card for football fouls, or a red-light district – but in Russian, red is beautiful, vivacious, spiritual, and revolutionary. And Russian art contains countless examples of its power." }
            ],
            questionGroups: [
                // ── Q1-6: MATCHING HEADINGS ──
                {
                    groupType: "matching-headings",
                    startQuestion: 1,
                    endQuestion: 6,
                    mainInstruction: "Reading Passage 1 has seven sections, A-G.",
                    subInstruction: "Choose the correct heading for sections B-G from the list of headings below.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "The uses of red" },
                        { numeral: "ii", text: "Russian and English views of red" },
                        { numeral: "iii", text: "Red and beauty" },
                        { numeral: "iv", text: "The optics of red" },
                        { numeral: "v", text: "Red and religion" },
                        { numeral: "vi", text: "The hazards of red" },
                        { numeral: "vii", text: "Red and politics" },
                        { numeral: "viii", text: "Portrait painters who copied icons" },
                        { numeral: "ix", text: "Red and art" },
                        { numeral: "x", text: "Revolutionary painters" }
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    matchingItems: [
                        { questionNumber: 1, text: "Section B", correctAnswer: "iv" },
                        { questionNumber: 2, text: "Section C", correctAnswer: "i" },
                        { questionNumber: 3, text: "Section D", correctAnswer: "v" },
                        { questionNumber: 4, text: "Section E", correctAnswer: "ix" },
                        { questionNumber: 5, text: "Section F", correctAnswer: "vii" },
                        { questionNumber: 6, text: "Section G", correctAnswer: "ii" }
                    ]
                },

                // ── Q7-12: NOTE COMPLETION (ONE WORD OR A NUMBER) ──
                {
                    groupType: "note-completion",
                    startQuestion: 7,
                    endQuestion: 12,
                    mainInstruction: "Choose ONE WORD OR A NUMBER from the passage for each answer.",
                    subInstruction: "Write your answers in boxes 7-12 on your answer sheet.",
                    mainHeading: "Red in Russian Art",
                    notesTable: [
                        {
                            title: "Russian Applied Arts",
                            rows: [
                                { label: "Household goods:", content: "Red wooden objects, toys, figurines, & embroidered 7 __________" },
                                { label: "Garments:", content: "Red coats, dresses, headdresses, shawls & scarves" }
                            ]
                        },
                        {
                            title: "Russian Fine Arts",
                            rows: [
                                { label: "Painting: Icon", bullets: [
                                    "Red, white & gold = main colours",
                                    "8 __________-century Novgorod icon of St George in red",
                                    "Christ, saints, angels & mother of Christ in red",
                                    "Fires of Hell = red"
                                ]},
                                { label: "Portrait", bullets: [
                                    "1840s Gogol painted with red 9 __________, like figures in icons",
                                    "1696 Turgenev & mid-1760s Talyzin in red coats, like saints' cloaks",
                                    "1800s Princess Golitsyna in a red shawl",
                                    "1915 Visiting = peasant women & lots of red"
                                ]},
                                { label: "Abstract", bullets: [
                                    "Painters famous worldwide: Altman, Goncharova & Kandinsky",
                                    "Malevich's White on white & Red Square = impressive"
                                ]},
                                { label: "Surrealist", bullets: [
                                    "Petrov-Vodkin famous in Russia",
                                    "1915 Head of a 10 __________ = head all red",
                                    "1925 Fantasy = blue man on a huge red horse"
                                ]},
                                { label: "Social 11 __________:", bullets: [
                                    "Lots of red in Rutkovsky's 1934 Stalin at Kirov's coffin",
                                    "Gerasimov's 1942 Hymn to October",
                                    "Zhilinsky's 12 __________ Gymnasts of the USSR"
                                ]}
                            ]
                        }
                    ],
                    notesSections: []
                },

                // ── Q13: CHOOSE TWO LETTERS (single question, 1 mark) ──
                {
                    groupType: "choose-two-letters",
                    startQuestion: 13,
                    endQuestion: 13,
                    mainInstruction: "Choose TWO letters, A-E.",
                    questionSets: [
                        {
                            questionNumbers: [13],
                            questionText: "The list below includes associations Russians make with the colour red. Which TWO are mentioned by the writer of the passage?",
                            options: [
                                { letter: "A", text: "danger" },
                                { letter: "B", text: "wealth" },
                                { letter: "C", text: "intelligence" },
                                { letter: "D", text: "faith" },
                                { letter: "E", text: "energy" }
                            ],
                            correctAnswers: ["D", "E"]
                        }
                    ]
                }
            ],
            questions: [
                // Matching Headings (Q1-6)
                { questionNumber: 1, questionType: "matching-headings", questionText: "Section B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "iv", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Section C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "i", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Section D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "v", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Section E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "ix", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Section F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "vii", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Section G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "ii", marks: 1 },
                // Note Completion (Q7-12)
                { questionNumber: 7, questionType: "note-completion", questionText: "Household goods: embroidered __________", correctAnswer: "cloths", acceptableAnswers: ["cloths"], marks: 1 },
                { questionNumber: 8, questionType: "note-completion", questionText: "________-century Novgorod icon of St George in red", correctAnswer: "15th", acceptableAnswers: ["15th"], marks: 1 },
                { questionNumber: 9, questionType: "note-completion", questionText: "1840s Gogol painted with red __________", correctAnswer: "background", acceptableAnswers: ["background"], marks: 1 },
                { questionNumber: 10, questionType: "note-completion", questionText: "1915 Head of a __________", correctAnswer: "youth", acceptableAnswers: ["youth"], marks: 1 },
                { questionNumber: 11, questionType: "note-completion", questionText: "Social __________", correctAnswer: "Realist", acceptableAnswers: ["Realist", "realist"], marks: 1 },
                { questionNumber: 12, questionType: "note-completion", questionText: "Zhilinsky's __________ Gymnasts of the USSR", correctAnswer: "1965", acceptableAnswers: ["1965"], marks: 1 },
                // Choose Two Letters (Q13 — single question, both must be correct for 1 mark)
                { questionNumber: 13, questionType: "choose-two-letters", questionText: "Which TWO associations are mentioned?", options: ["A", "B", "C", "D", "E"], correctAnswer: "D,E", marks: 1 }
            ]
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: LEPIDOPTERA MYTHS AND MISNOMERS (Q14-27)    ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "Lepidoptera Myths and Misnomers",
            instructions: "You should spend about 20 minutes on Questions 14-27 which are based on Reading Passage 2 below.",
            passage: passage2Text,
            questionGroups: [
                // ── Q14-17: TRUE/FALSE/NOT GIVEN ──
                {
                    groupType: "true-false-not-given",
                    startQuestion: 14,
                    endQuestion: 17,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 2?",
                    subInstruction: "Write TRUE, FALSE or NOT GIVEN.",
                    statements: [
                        { questionNumber: 14, text: "One theory is that the word \u2018butterfly\u2019 means an insect the colour of butter.", correctAnswer: "TRUE" },
                        { questionNumber: 15, text: "Another theory is that a \u2018buttery\u2019 was a mistake for a \u2018flutterby\u2019.", correctAnswer: "FALSE" },
                        { questionNumber: 16, text: "The Greeks had a special reverence for butterflies.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 17, text: "The relative longevity of butterflies has been understood for some time.", correctAnswer: "FALSE" }
                    ]
                },

                // ── Q18-21: CLASSIFY (matching-features) ──
                {
                    groupType: "matching-features",
                    startQuestion: 18,
                    endQuestion: 21,
                    mainInstruction: "Classify the things on the following page that relate to:",
                    subInstruction: "Write the correct letter A, B, or C, in boxes 18-21 on your answer sheet.",
                    featureListTitle: "Categories",
                    featureOptions: [
                        { letter: "A", text: "butterflies only" },
                        { letter: "B", text: "moths only" },
                        { letter: "C", text: "both butterflies and moths" }
                    ],
                    matchingItems: [
                        { questionNumber: 18, text: "They have complex eyes.", correctAnswer: "C" },
                        { questionNumber: 19, text: "Humans view them negatively.", correctAnswer: "B" },
                        { questionNumber: 20, text: "They fold their wings upright.", correctAnswer: "A" },
                        { questionNumber: 21, text: "They have more pronounced antennae.", correctAnswer: "B" }
                    ]
                },

                // ── Q22-27: SUMMARY WITH OPTIONS ──
                {
                    groupType: "summary-with-options",
                    startQuestion: 22,
                    endQuestion: 27,
                    mainInstruction: "Complete the summary below using the numbers or words, A-I, below.",
                    subInstruction: "Write the correct letter A-I, in boxes 22-27 on your answer sheet.",
                    phraseList: [
                        { letter: "A", text: "bacteria" },
                        { letter: "B", text: "California" },
                        { letter: "C", text: "Canada" },
                        { letter: "D", text: "four" },
                        { letter: "E", text: "Mexico" },
                        { letter: "F", text: "milkweed" },
                        { letter: "G", text: "North America" },
                        { letter: "H", text: "the Pacific" },
                        { letter: "I", text: "seven" }
                    ],
                    mainHeading: "The Monarch Butterfly",
                    summarySegments: [
                        { type: "text", content: "Monarch butterflies can live for up to nine months. Indigenous to" },
                        { type: "blank", questionNumber: 22, correctAnswer: "G" },
                        { type: "text", content: ", they are now found throughout the Pacific as well.\n\nSince all insects have brittle exoskeletons, they must shed these regularly while growing. In the life of a monarch butterfly, there are" },
                        { type: "blank", questionNumber: 23, correctAnswer: "I" },
                        { type: "text", content: "moults.\n\nSeveral factors affect butterfly populations. Low temperatures mean animals take longer to develop, increasing the risk of predation. A steady supply of a specific plant called" },
                        { type: "blank", questionNumber: 24, correctAnswer: "F" },
                        { type: "text", content: "is necessary, and a small number of eggs laid per plant. Birds do attack monarch butterflies, but as larvae and adults contain toxins, such attacks are infrequent. Insects, unaffected by poison, and" },
                        { type: "blank", questionNumber: 25, correctAnswer: "A" },
                        { type: "text", content: "pose a greater threat.\n\nThe gravest danger to monarch butterflies is the reduction of their wintering grounds, by deforestation, especially in" },
                        { type: "blank", questionNumber: 26, correctAnswer: "E" },
                        { type: "text", content: ".\n\nMonarchs do not migrate long distances within New Zealand, but they gather in large colonies on certain trees. It is possible that the isolation of this country and some other islands in" },
                        { type: "blank", questionNumber: 27, correctAnswer: "H" },
                        { type: "text", content: "will save monarchs." }
                    ]
                }
            ],
            questions: [
                // TRUE/FALSE/NOT GIVEN (Q14-17)
                { questionNumber: 14, questionType: "true-false-not-given", questionText: "One theory is that the word \u2018butterfly\u2019 means an insect the colour of butter.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 15, questionType: "true-false-not-given", questionText: "Another theory is that a \u2018buttery\u2019 was a mistake for a \u2018flutterby\u2019.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 16, questionType: "true-false-not-given", questionText: "The Greeks had a special reverence for butterflies.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 17, questionType: "true-false-not-given", questionText: "The relative longevity of butterflies has been understood for some time.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                // CLASSIFY / MATCHING-FEATURES (Q18-21)
                { questionNumber: 18, questionType: "matching-features", questionText: "They have complex eyes.", options: ["A", "B", "C"], correctAnswer: "C", marks: 1 },
                { questionNumber: 19, questionType: "matching-features", questionText: "Humans view them negatively.", options: ["A", "B", "C"], correctAnswer: "B", marks: 1 },
                { questionNumber: 20, questionType: "matching-features", questionText: "They fold their wings upright.", options: ["A", "B", "C"], correctAnswer: "A", marks: 1 },
                { questionNumber: 21, questionType: "matching-features", questionText: "They have more pronounced antennae.", options: ["A", "B", "C"], correctAnswer: "B", marks: 1 },
                // SUMMARY WITH OPTIONS (Q22-27)
                { questionNumber: 22, questionType: "summary-with-options", questionText: "Indigenous to __________", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "G", marks: 1 },
                { questionNumber: 23, questionType: "summary-with-options", questionText: "there are __________ moults", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "I", marks: 1 },
                { questionNumber: 24, questionType: "summary-with-options", questionText: "a specific plant called __________", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "F", marks: 1 },
                { questionNumber: 25, questionType: "summary-with-options", questionText: "Insects, unaffected by poison, and __________", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "A", marks: 1 },
                { questionNumber: 26, questionType: "summary-with-options", questionText: "by deforestation, especially in __________", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "E", marks: 1 },
                { questionNumber: 27, questionType: "summary-with-options", questionText: "some other islands in __________", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "H", marks: 1 }
            ]
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: PLACEHOLDER (Questions 28-40)               ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "Reading Passage 3",
            instructions: "You should spend about 20 minutes on Questions 28-40 which are based on Reading Passage 3.",
            passage: passage3Text,
            questionGroups: [],
            questions: [] as any[]
        }
    ]
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest11() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest11.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest11);
            console.log("✅ Reading Test 11 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest11, createdBy: admin._id });
            console.log("✅ Reading Test 11 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest11.testId });
        if (verify) {
            const sections = (verify as any).sections || [];
            console.log("\n📊 Verification:");
            console.log(`   Title: ${(verify as any).title}`);
            console.log(`   Test Number: ${(verify as any).testNumber}`);
            console.log(`   Sections: ${sections.length}`);
            sections.forEach((s: any, i: number) => {
                console.log(`   Section ${i + 1}: ${s.title} | Groups: ${s.questionGroups?.length || 0} | Questions: ${s.questions?.length || 0}`);
            });
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
}

seedReadingTest11();

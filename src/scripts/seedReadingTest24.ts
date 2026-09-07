import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

/**
 * Academic Reading Mock Test 24 — the reading half of "Test 04.docx" in the
 * New Test batch. Pairs with listening test 24, built from the same paper.
 *
 * ⚠️ ANSWERS ARE DELIBERATELY BLANK. The batch shipped listening answer keys
 * (Mock_1..5) but no reading key, so every correctAnswer here is "" and the test
 * is seeded with isActive: false. The exam endpoint filters on isActive, so no
 * candidate can sit it and score zero while the answers are missing. Fill the
 * answers in, then activate it from the admin panel.
 *
 * The .docx letters passage 2 as "A." with a full stop, which the format guide
 * warns breaks label detection, so those are stored as plain "A " here.
 * Passage 1 says "seven paragraphs A-H" but has eight, A to H, one per
 * question 1-8 — the eight are what is stored.
 */

const readingTest = {
    testId: "READING_ACADEMIC_024",
    testNumber: 24,
    title: "Academic Reading Mock Test 24",
    description: "Academic Reading Test with 3 passages and 40 questions",
    source: "Test 04",
    testType: "academic",
    difficulty: "medium",
    // Stays inactive until the answer key is filled in — see the file header.
    isActive: false,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        {
            sectionNumber: 1,
            title: "Tackling Obesity in the Western World",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: "A Obesity is a huge problem in many Western countries and one which now attracts considerable medical interest as researchers take up the challenge to find a \"cure\" for the common condition of being seriously overweight. However, rather than take responsibility for their weight, obese people have often sought solace in the excuse that they have a slow metabolism, a genetic hiccup which sentences more than half the Australian population (63% of men and 47% of women) to a life of battling with their weight. The argument goes like this: it doesn't matter how little they eat, they gain weight because their bodies break down food and turn it into energy more slowly than those with a so-called normal metabolic rate.\n\nB \"This is nonsense,\" says Dr Susan Jebb from the Dunn Nutrition Unit at Cambridge in England. Despite the persistence of this metabolism myth, science has known for several years that the exact opposite is in fact true. Fat people have faster metabolisms than thin people. \"What is very clear,\" says Dr Jebb, \"is that overweight people actually burn off more energy. They have more cells, bigger hearts, bigger lungs and they all need more energy just to keep going.\"\n\nC It took only one night, spent in a sealed room at the Dunn Unit, to disabuse one of their patients of the beliefs of a lifetime: her metabolism was fast, not slow. By sealing the room and measuring the exact amount of oxygen she used, researchers were able to show her that her metabolism was not the culprit. It wasn't the answer she expected and probably not the one she wanted, but she took the news philosophically.\n\nD Although the metabolism myth has been completely disproved, science has far from discounted our genes as responsible for making us whatever weight we are, fat or thin. One of the world's leading obesity researchers, geneticist Professor Stephen O'Rahilly, goes so far as to say we are on the threshold of a complete change in the way we view not only morbid obesity, but also everyday overweight. Prof. O'Rahilly's groundbreaking work in Cambridge has proven that obesity can be caused by our genes. \"These people are not weak-willed, slothful or lazy,\" says Prof. O'Rahilly. \"They have a medical condition due to a genetic defect and that causes them to be obese.\"\n\nE In Australia, the University of Sydney's Professor Ian Caterson says while major genetic defects may be rare, many people probably have minor genetic variations that combine to dictate weight and are responsible for things such as how much we eat, the amount of exercise we do and the amount of energy we need. When you add up all these little variations, the result is that some people are genetically predisposed to putting on weight. He says while the fast/slow metabolism debate may have been settled, that doesn't mean some other subtle change in the metabolism gene won't be found in overweight people. He is confident that science will, eventually, be able to \"cure\" some forms of obesity, but the only effective way for the vast majority of overweight and obese people to lose weight is a change of diet and an increase in exercise.\n\nF Despite the $500 million a year Australians spend trying to lose weight and the $830 million it costs the community in health care, obesity is at epidemic proportions here, as it is in all Western nations. Until recently, research and treatment for obesity had concentrated on behaviour modification, drugs to decrease appetite and surgery. How the drugs worked was often not understood and many caused severe side effects and even death in some patients.Surgery for obesity has also claimed many lives.\n\nG It has long been known that a part of the brain called the hypothalamus is responsible for regulating hunger, among other things.But it wasn't until 1994 that Professor Jeffery Friedman from Rockefeller University in the US sent science in a new direction by studying an obese mouse. Prof. Friedman found that unlike its thin brothers, the fat mouse did not produce a hitherto unknown hormone called leptin. Manufactured by the fat cells, leptin acts as a messenger, sending signals to the hypothalamus to turn off the appetite. Previously, the fat cells were thought to be responsible simply for storing fat. Prof. Friedman gave the fat mouse leptin and it lost 30% of its body weight in two weeks.\n\nH On the other side of the Atlantic, Prof. O'Rahilly read about this research with great excitement. For many months two blood samples had lain in the bottom of his freezer, taken from two extremely obese young cousins. He hired a doctor to develop a test for leptin in human blood, which eventually resulted in the discovery that neither of the children's blood contained the hormone. When one cousin was given leptin, she lost a stone in weight and Prof. O'Rahilly made medical history. Here was the first proof that a genetic defect could cause obesity in humans. But leptin deficiency turned out to be an extremely rare condition and there is a lot more research to be done before the \"magic\" cure for obesity is ever found. Questions 9-13",
            questionGroups: [
                {
                    "groupType": "matching-headings",
                    "startQuestion": 1,
                    "endQuestion": 8,
                    "mainInstruction": "Reading Passage 1 has paragraphs A-H. From the list of headings below choose the most suitable heading for each paragraph.",
                    "subInstruction": "Select the appropriate numbers (i-xi) in boxes 1-8 on your answer sheet.",
                    "featureListTitle": "List of Headings",
                    "headingsList": [
                        {
                            "numeral": "i",
                            "text": "Obesity in animals"
                        },
                        {
                            "numeral": "ii",
                            "text": "Hidden dangers"
                        },
                        {
                            "numeral": "iii",
                            "text": "Proof of the truth"
                        },
                        {
                            "numeral": "iv",
                            "text": "New perspective on the horizon"
                        },
                        {
                            "numeral": "v",
                            "text": "No known treatment"
                        },
                        {
                            "numeral": "vi",
                            "text": "Rodent research leads the way"
                        },
                        {
                            "numeral": "vii",
                            "text": "Expert explains energy requirements of obese people"
                        },
                        {
                            "numeral": "viii",
                            "text": "A very uncommon complaint"
                        },
                        {
                            "numeral": "ix",
                            "text": "Nature or nurture"
                        },
                        {
                            "numeral": "x",
                            "text": "Shifting the blame"
                        },
                        {
                            "numeral": "xi",
                            "text": "Lifestyle change required despite new findings"
                        }
                    ],
                    "paragraphOptions": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x",
                        "xi"
                    ],
                    "statements": [
                        {
                            "questionNumber": 1,
                            "text": "Paragraph A",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 2,
                            "text": "Paragraph B",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 3,
                            "text": "Paragraph C",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 4,
                            "text": "Paragraph D",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 5,
                            "text": "Paragraph E",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 6,
                            "text": "Paragraph F",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 7,
                            "text": "Paragraph G",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 8,
                            "text": "Paragraph H",
                            "correctAnswer": ""
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 1,
                            "text": "Paragraph A",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 2,
                            "text": "Paragraph B",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 3,
                            "text": "Paragraph C",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 4,
                            "text": "Paragraph D",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 5,
                            "text": "Paragraph E",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 6,
                            "text": "Paragraph F",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 7,
                            "text": "Paragraph G",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 8,
                            "text": "Paragraph H",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "summary-with-options",
                    "startQuestion": 9,
                    "endQuestion": 13,
                    "mainInstruction": "Complete the summary of Reading Passage 1 using letters from the box.",
                    "subInstruction": "Write your answers in boxes 9-13 on your answer sheet.",
                    "mainHeading": "OBESITY",
                    "phraseList": [
                        {
                            "letter": "A",
                            "text": "Weight"
                        },
                        {
                            "letter": "B",
                            "text": "Exercise"
                        },
                        {
                            "letter": "C",
                            "text": "Sleep"
                        },
                        {
                            "letter": "D",
                            "text": "Mind"
                        },
                        {
                            "letter": "E",
                            "text": "Body"
                        },
                        {
                            "letter": "F",
                            "text": "Metabolism"
                        },
                        {
                            "letter": "G",
                            "text": "Less"
                        },
                        {
                            "letter": "H",
                            "text": "Behaviour"
                        },
                        {
                            "letter": "I",
                            "text": "More"
                        },
                        {
                            "letter": "J",
                            "text": "Physical"
                        },
                        {
                            "letter": "K",
                            "text": "Use"
                        },
                        {
                            "letter": "L",
                            "text": "Metal"
                        },
                        {
                            "letter": "M",
                            "text": "Consume"
                        },
                        {
                            "letter": "N",
                            "text": "Genetic"
                        }
                    ],
                    "summarySegments": [
                        {
                            "type": "text",
                            "content": "Example: People with a weight problem often try to deny responsibility. They do this by seeking to blame their "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 9,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " for the fact that they are overweight and erroneously believe that they use "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 10,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " energy than thin people to stay alive. However, recent research has shown that a "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 11,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " problem can be responsible for obesity as some people seem programmed to "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 12,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " more than others. The new research points to a shift from trying to change people's "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 13,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " to seeking an answer to the problem in the laboratory."
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 1,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph A",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x",
                        "xi"
                    ]
                },
                {
                    "questionNumber": 2,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph B",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x",
                        "xi"
                    ]
                },
                {
                    "questionNumber": 3,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph C",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x",
                        "xi"
                    ]
                },
                {
                    "questionNumber": 4,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph D",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x",
                        "xi"
                    ]
                },
                {
                    "questionNumber": 5,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph E",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x",
                        "xi"
                    ]
                },
                {
                    "questionNumber": 6,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph F",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x",
                        "xi"
                    ]
                },
                {
                    "questionNumber": 7,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph G",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x",
                        "xi"
                    ]
                },
                {
                    "questionNumber": 8,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph H",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x",
                        "xi"
                    ]
                },
                {
                    "questionNumber": 9,
                    "questionType": "summary-with-options",
                    "questionText": "OBESITY summary — blank 9",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G",
                        "H",
                        "I",
                        "J",
                        "K",
                        "L",
                        "M",
                        "N"
                    ]
                },
                {
                    "questionNumber": 10,
                    "questionType": "summary-with-options",
                    "questionText": "OBESITY summary — blank 10",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G",
                        "H",
                        "I",
                        "J",
                        "K",
                        "L",
                        "M",
                        "N"
                    ]
                },
                {
                    "questionNumber": 11,
                    "questionType": "summary-with-options",
                    "questionText": "OBESITY summary — blank 11",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G",
                        "H",
                        "I",
                        "J",
                        "K",
                        "L",
                        "M",
                        "N"
                    ]
                },
                {
                    "questionNumber": 12,
                    "questionType": "summary-with-options",
                    "questionText": "OBESITY summary — blank 12",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G",
                        "H",
                        "I",
                        "J",
                        "K",
                        "L",
                        "M",
                        "N"
                    ]
                },
                {
                    "questionNumber": 13,
                    "questionType": "summary-with-options",
                    "questionText": "OBESITY summary — blank 13",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G",
                        "H",
                        "I",
                        "J",
                        "K",
                        "L",
                        "M",
                        "N"
                    ]
                }
            ],
        },
        {
            sectionNumber: 2,
            title: "Wheel of fortune",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: "Emma Duncan discusses the potential effects on the entertainment industry of the digital revolution\n\nA Since moving pictures were invented a century ago, a new way of distributing entertainment to consumers has emerged about once every generation. Each such innovation has changed the industry irreversibly; each has been accompanied by a period of fear mixed with exhilaration. The arrival of digital technology, which translates music, pictures and text into the zeros and ones of computer language, marks one of those periods.\n\nB This may sound familiar, because the digital revolution, and the explosion of choice that would go with it, has been heralded for some time. In 1992, John Malone, chief executive of TCI, an American cable giant, welcomed the '500-channel universe'. Digital television was about to deliver everything except pizzas to people's living rooms. When the entertainment companies tried out the technology, it worked fine - but not at a price that people were prepared to pay.\n\nC Those 500 channels eventually arrived but via the Internet and the PC rather than through television. The digital revolution was starting to affect the entertainment business in unexpected ways. Eventually, it will change every aspect of it, from the way cartoons are made to the way films are screened to the way people buy music. That much is clear. What nobody is sure of is how it will affect the economics of the business.\n\nD New technologies always contain within them both threats and opportunities. They have the potential both to make the companies in the business a great deal richer, and to sweep them away. Old companies always fear new technology. Hollywood was hostile to television, television terrified by the VCR. Go back far enough, points out Hal Varian, an economist at the University of California at Berkeley, and you find publishers complaining that 'circulating libraries' would cannibalise their sales. Yet whenever a new technology has come in, it has made more money for existing entertainment companies. The proliferation of the means of distribution results, gratifyingly, in the proliferation of dollars, pounds, pesetas and the rest to pay for it.\n\nE All the same, there is something in the old companies' fears. New technologies may not threaten their lives, but they usually change their role. Once television became widespread, film and radio stopped being the staple form of entertainment. Cable television has undermined the power of the broadcasters. And as power has shifted the movie studios, the radio companies and the television broadcasters have been swallowed up. These days, the grand old names of entertainment have more resonance than power. Paramount is part of Viacom, a cable company; Universal, part of Seagram, a drinks-and-entertainment company; MGM, once the roaring lion of Hollywood, has been reduced to a whisper because it is not part of one of the giants. And RCA, once the most important broadcasting company in the world, is now a recording label belonging to Bertelsmann, a large German entertainment company.\n\nF Part of the reason why incumbents got pushed aside was that they did not see what was coming. But they also faced a tighter regulatory environment than the present one. In America, laws preventing television broadcasters from owning programme companies were repealed earlier this decade, allowing the creation of vertically integrated businesses. Greater freedom, combined with a sense of history, prompted the smarter companies in the entertainment business to re-invent themselves. They saw what happened to those of their predecessors who were stuck with one form of distribution. So, these days, the powers in the entertainment business are no longer movie studios, or television broadcasters, or publishers; all those businesses have become part of bigger businesses still, companies that can both create content and distribute it in a range of different ways.\n\nG Out of all this, seven huge entertainment companies have emerged - Time Warner, Walt Disney, Bertelsmann, Viacom, News Corp, Seagram and Sony. They cover pretty well every bit of the entertainment business except pornography. Three are American, one is Australian, one Canadian, one German and one Japanese. 'What you are seeing', says Christopher Dixon, managing director of media research at PaineWebber, a stockbroker, 'is the creation of a global oligopoly. It happened to the oil and automotive businesses earlier this century; now it is happening to the entertainment business.' It remains to be seen whether the latest technology will weaken those great companies, or make them stronger than ever.",
            questionGroups: [
                {
                    "groupType": "matching-information",
                    "startQuestion": 14,
                    "endQuestion": 21,
                    "mainInstruction": "Reading Passage 2 has seven paragraphs A-G. Which paragraph mentions the following?",
                    "subInstruction": "Write the appropriate letters (A-G) in boxes 14-21 on your answer sheet.",
                    "note": "NB Some of the paragraphs will be used more than once.",
                    "paragraphOptions": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G"
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 14,
                            "text": "the contrasting effects that new technology can have on existing business",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 15,
                            "text": "the fact that a total transformation is going to take place in the future in the delivery of all forms of entertainment",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 16,
                            "text": "the confused feelings that people are known to have experienced in response to technological innovation",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 17,
                            "text": "the fact that some companies have learnt from the mistakes of others",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 18,
                            "text": "the high cost to the consumer of new ways of distributing entertainment",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 19,
                            "text": "uncertainty regarding the financial impact of wider media access",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 20,
                            "text": "the fact that some companies were the victims of strict government policy",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 21,
                            "text": "the fact that the digital revolution could undermine the giant entertainment companies",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "matching-features",
                    "startQuestion": 22,
                    "endQuestion": 25,
                    "mainInstruction": "The writer refers to various individuals and companies in the reading passage. Match the people or companies (A-E) with the points made about the introduction of new technology.",
                    "subInstruction": "Write the appropriate letter (A-E) in boxes 22-25 on your answer sheet.",
                    "featureListTitle": "People and Companies",
                    "featureOptions": [
                        {
                            "letter": "A",
                            "text": "John Malone"
                        },
                        {
                            "letter": "B",
                            "text": "Hal Valarian"
                        },
                        {
                            "letter": "C",
                            "text": "MGM"
                        },
                        {
                            "letter": "D",
                            "text": "Walt Disney"
                        },
                        {
                            "letter": "E",
                            "text": "Christopher Dixon"
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 22,
                            "text": "Historically, new forms of distributing entertainment have alarmed those well-established in the business.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 23,
                            "text": "The merger of entertainment companies follows a pattern evident in other industries.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 24,
                            "text": "Major entertainment bodies that have remained independent have lost their influence.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 25,
                            "text": "News of the most recent technological development was published some years ago.",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "multiple-choice-full",
                    "startQuestion": 26,
                    "endQuestion": 26,
                    "mainInstruction": "Choose the appropriate letter A-D.",
                    "subInstruction": "Write your answer in box 26 on your answer sheet.",
                    "mcQuestions": [
                        {
                            "questionNumber": 26,
                            "questionText": "How does the writer put across his views on the digital revolution?",
                            "options": [
                                {
                                    "letter": "A",
                                    "text": "by examining the forms of media that will be affected by it"
                                },
                                {
                                    "letter": "B",
                                    "text": "by analysing the way entertainment companies have reacted to it"
                                },
                                {
                                    "letter": "C",
                                    "text": "by giving a personal definition of technological innovation"
                                },
                                {
                                    "letter": "D",
                                    "text": "by drawing comparisons with other periods of technological innovation"
                                }
                            ],
                            "correctAnswer": ""
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 14,
                    "questionType": "matching-information",
                    "questionText": "the contrasting effects that new technology can have on existing business",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G"
                    ]
                },
                {
                    "questionNumber": 15,
                    "questionType": "matching-information",
                    "questionText": "the fact that a total transformation is going to take place in the future in the delivery of all forms of entertainment",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G"
                    ]
                },
                {
                    "questionNumber": 16,
                    "questionType": "matching-information",
                    "questionText": "the confused feelings that people are known to have experienced in response to technological innovation",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G"
                    ]
                },
                {
                    "questionNumber": 17,
                    "questionType": "matching-information",
                    "questionText": "the fact that some companies have learnt from the mistakes of others",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G"
                    ]
                },
                {
                    "questionNumber": 18,
                    "questionType": "matching-information",
                    "questionText": "the high cost to the consumer of new ways of distributing entertainment",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G"
                    ]
                },
                {
                    "questionNumber": 19,
                    "questionType": "matching-information",
                    "questionText": "uncertainty regarding the financial impact of wider media access",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G"
                    ]
                },
                {
                    "questionNumber": 20,
                    "questionType": "matching-information",
                    "questionText": "the fact that some companies were the victims of strict government policy",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G"
                    ]
                },
                {
                    "questionNumber": 21,
                    "questionType": "matching-information",
                    "questionText": "the fact that the digital revolution could undermine the giant entertainment companies",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G"
                    ]
                },
                {
                    "questionNumber": 22,
                    "questionType": "matching-features",
                    "questionText": "Historically, new forms of distributing entertainment have alarmed those well-established in the business.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E"
                    ]
                },
                {
                    "questionNumber": 23,
                    "questionType": "matching-features",
                    "questionText": "The merger of entertainment companies follows a pattern evident in other industries.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E"
                    ]
                },
                {
                    "questionNumber": 24,
                    "questionType": "matching-features",
                    "questionText": "Major entertainment bodies that have remained independent have lost their influence.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E"
                    ]
                },
                {
                    "questionNumber": 25,
                    "questionType": "matching-features",
                    "questionText": "News of the most recent technological development was published some years ago.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E"
                    ]
                },
                {
                    "questionNumber": 26,
                    "questionType": "multiple-choice-full",
                    "questionText": "How does the writer put across his views on the digital revolution?",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D"
                    ]
                }
            ],
        },
        {
            sectionNumber: 3,
            title: "Try it and see",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: "In the social sciences, it is often supposed that there can be no such thing as a controlled experiment. Think again.\n\nA In the scientific pecking order, social scientists are usually looked down on by their peers in the natural sciences. Natural scientists do experiments to test their theories or, if they cannot, they try to look for natural phenomena that can act in lieu of experiments. Social scientists, it is widely thought, do not subject their own hypotheses to any such rigorous treatment. Worse, they peddle their untested hypotheses to governments and try to get them turned into policies.\n\nB Governments require sellers of new medicines to demonstrate their safety and effectiveness. The accepted gold standard of evidence is a randomised control trial, in which a new drug is compared with the best existing therapy (or with a placebo, if no treatment is available). Patients are assigned to one arm or the other of such a study at random, ensuring that the only difference between the two groups is the new treatment. The best studies also ensure that neither patient nor physician knows which patient is allocated to which therapy. Drug trials must also include enough patients to make it unlikely that chance alone may determine the result.\n\nC But few education programmes or social initiatives are evaluated in carefully conducted studies prior to their introduction. A case in point is the 'whole-language' approach to reading, which swept much of the English-speaking world in the 1970s and 1980s. The whole-language theory holds that children learn to read best by absorbing contextual clues from texts, not by breaking individual words into their component parts and reassembling them (a method known as phonics). Unfortunately, the educational theorists who pushed the whole-language notion so successfully did not wait for evidence from controlled randomised trials before advancing their claims. Had they done so, they might have concluded, as did an analysis of 52 randomised studies carried out by the US National Reading Panel in 2000, that effective reading instruction requires phonics.\n\nD To avoid the widespread adoption of misguided ideas, the sensible thing is to experiment first and make policy later. This is the idea behind a trial of restorative justice which is taking place in the English courts. The experiment will include criminals who plead guilty to robbery. Those who agree to participate will be assigned randomly either to sentencing as normal or to participation in a conference in which the offender comes face-toface with his victim and discusses how he may make emotional and material restitution. The purpose of the trial is to assess whether such restorative justice limits re-offending. If it does, it might be adopted more widely.\n\nE The idea of experimental evidence is not quite as new to the social sciences as sneering natural scientists might believe. In fact, randomised trials and systematic reviews of evidence were introduced into the social sciences long before they became common in medicine. An apparent example of random allocation is a study carried out in 1927 of how to persuade people to vote in elections. And randomised trials in social work were begun in the 1930s and 1940s. But enthusiasm later waned. This loss of interest can be attributed, at least in part, to the fact that early experiments produced little evidence of positive outcomes. Others suggest that much of the opposition to experimental evaluation stems from a common philosophical malaise among social scientists, who doubt the validity of the natural sciences and therefore reject the potential of knowledge derived from controlled experiments. A more pragmatic factor limiting the growth of evidence-based education and social services may be limitations on the funds available for research.\n\nF Nevertheless, some 11,000 experimental studies are known in the social sciences {compared with over 250,000 in the medical literature). Randomised trials have been used to evaluate the effectiveness of driver-education programmes, job¬training schemes, classroom size, psychological counselling for posttraumatic stress disorder and increased investment in public housing. And where they are carried out, they seem to have a healthy dampening effect on otherwise rosy interpretations of the observations.\n\nG The problem for policymakers is often not too few data, but what to make of multiple and conflicting studies. This is where a body called the Campbell Collaboration comes into its own. This independent non-profit organisation is designed to evaluate existing studies, in a process known as a systematic review. This means attempting to identify every relevant trial of a given question (including studies that have never been published), choosing the best ones using clearly defined criteria for quality, and combining the results in a statistically valid way. An equivalent body, the Cochrane Collaboration, has produced more than 1,004 such reviews in medical fields. The hope is that rigorous review standards will allow Campbell, like Cochrane, to become a trusted and authoritative source of information.",
            questionGroups: [
                {
                    "groupType": "matching-headings",
                    "startQuestion": 27,
                    "endQuestion": 32,
                    "mainInstruction": "Reading Passage 3 has seven paragraphs A-G. Select the correct heading for paragraphs B-G from the list of headings below.",
                    "subInstruction": "Choose the correct number i-x in boxes 27-32 on your answer sheet.",
                    "featureListTitle": "List of Headings",
                    "headingsList": [
                        {
                            "numeral": "i",
                            "text": "Why some early social science methods lost popularity"
                        },
                        {
                            "numeral": "ii",
                            "text": "The cost implications of research"
                        },
                        {
                            "numeral": "iii",
                            "text": "Looking ahead to an unbiased assessment of research"
                        },
                        {
                            "numeral": "iv",
                            "text": "A range of social issues that have been usefully studied"
                        },
                        {
                            "numeral": "v",
                            "text": "An example of a poor decision that was made too quickly"
                        },
                        {
                            "numeral": "vi",
                            "text": "Why criminals are now treated differently"
                        },
                        {
                            "numeral": "vii",
                            "text": "One area of research that is rigorously carried out"
                        },
                        {
                            "numeral": "viii",
                            "text": "The changing nature of medical trials"
                        },
                        {
                            "numeral": "ix",
                            "text": "An investigative study that may lead to a new system"
                        },
                        {
                            "numeral": "x",
                            "text": "Why some scientists' theories are considered second-rate"
                        }
                    ],
                    "paragraphOptions": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x"
                    ],
                    "exampleItems": [
                        {
                            "text": "Paragraph A",
                            "answer": "x"
                        }
                    ],
                    "statements": [
                        {
                            "questionNumber": 27,
                            "text": "Paragraph B",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 28,
                            "text": "Paragraph C",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 29,
                            "text": "Paragraph D",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 30,
                            "text": "Paragraph E",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 31,
                            "text": "Paragraph F",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 32,
                            "text": "Paragraph G",
                            "correctAnswer": ""
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 27,
                            "text": "Paragraph B",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 28,
                            "text": "Paragraph C",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 29,
                            "text": "Paragraph D",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 30,
                            "text": "Paragraph E",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 31,
                            "text": "Paragraph F",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 32,
                            "text": "Paragraph G",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "summary-completion",
                    "startQuestion": 33,
                    "endQuestion": 36,
                    "mainInstruction": "Complete the summary below.",
                    "subInstruction": "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 33-36 on your answer sheet.",
                    "mainHeading": "",
                    "summarySegments": [
                        {
                            "type": "text",
                            "content": "Some criminals in England are agreeing to take part in a trial designed to help reduce their chances of "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 33,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": ". The idea is that while one group of randomly selected criminals undergoes the usual "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 34,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": ", the other group will discuss the possibility of making some repayment for the crime by meeting the "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 35,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": ". It is yet to be seen whether this system, known as "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 36,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": ", will work."
                        }
                    ]
                },
                {
                    "groupType": "matching-features",
                    "startQuestion": 37,
                    "endQuestion": 40,
                    "mainInstruction": "Classify the following characteristics as relating to Social Science, Medical Science, both, or neither.",
                    "subInstruction": "Write the correct letter A, B, C or D in boxes 37-40 on your answer sheet.",
                    "featureListTitle": "Categories",
                    "featureOptions": [
                        {
                            "letter": "A",
                            "text": "Social Science"
                        },
                        {
                            "letter": "B",
                            "text": "Medical Science"
                        },
                        {
                            "letter": "C",
                            "text": "Both Social Science and Medical Science"
                        },
                        {
                            "letter": "D",
                            "text": "Neither Social Science nor Medical Science"
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 37,
                            "text": "a tendency for negative results in early trials",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 38,
                            "text": "the desire to submit results for independent assessment",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 39,
                            "text": "the prioritisation of research areas to meet government needs",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 40,
                            "text": "the widespread use of studies that investigate the quality of new products",
                            "correctAnswer": ""
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 27,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph B",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x"
                    ]
                },
                {
                    "questionNumber": 28,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph C",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x"
                    ]
                },
                {
                    "questionNumber": 29,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph D",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x"
                    ]
                },
                {
                    "questionNumber": 30,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph E",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x"
                    ]
                },
                {
                    "questionNumber": 31,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph F",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x"
                    ]
                },
                {
                    "questionNumber": 32,
                    "questionType": "matching-headings",
                    "questionText": "Paragraph G",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "i",
                        "ii",
                        "iii",
                        "iv",
                        "v",
                        "vi",
                        "vii",
                        "viii",
                        "ix",
                        "x"
                    ]
                },
                {
                    "questionNumber": 33,
                    "questionType": "summary-completion",
                    "questionText": "Summary — blank 33",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 34,
                    "questionType": "summary-completion",
                    "questionText": "Summary — blank 34",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 35,
                    "questionType": "summary-completion",
                    "questionText": "Summary — blank 35",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 36,
                    "questionType": "summary-completion",
                    "questionText": "Summary — blank 36",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 37,
                    "questionType": "matching-features",
                    "questionText": "a tendency for negative results in early trials",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D"
                    ]
                },
                {
                    "questionNumber": 38,
                    "questionType": "matching-features",
                    "questionText": "the desire to submit results for independent assessment",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D"
                    ]
                },
                {
                    "questionNumber": 39,
                    "questionType": "matching-features",
                    "questionText": "the prioritisation of research areas to meet government needs",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D"
                    ]
                },
                {
                    "questionNumber": 40,
                    "questionType": "matching-features",
                    "questionText": "the widespread use of studies that investigate the quality of new products",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D"
                    ]
                }
            ],
        }
    ],
};

async function seedTest() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to database");

        const existing = await ReadingTest.findOne({ testId: readingTest.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest);
            console.log("Test " + readingTest.testNumber + " UPDATED!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) { console.log("No admin user"); process.exit(1); }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log("Test " + readingTest.testNumber + " CREATED!");
        }

        const test = await ReadingTest.findOne({ testNumber: readingTest.testNumber });
        if (test) {
            const sections = (test as any).sections || [];
            console.log("\nVerification:");
            sections.forEach((s: any, i: number) => {
                console.log("  Section " + (i + 1) + ": " + s.title
                    + " | Groups: " + s.questionGroups?.length
                    + " | Qs: " + s.questions?.length);
            });
            console.log("  isActive: " + (test as any).isActive + " (answers pending)");
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}
seedTest();

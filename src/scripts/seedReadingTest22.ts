import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

/**
 * Academic Reading Mock Test 22 — the reading half of "Test 2.docx" in the
 * New Test batch. Pairs with listening test 22, built from the same paper.
 *
 * ⚠️ ANSWERS ARE DELIBERATELY BLANK. The batch shipped listening answer keys
 * (Mock_1..5) but no reading key, so every correctAnswer here is "" and the test
 * is seeded with isActive: false. The exam endpoint filters on isActive, so no
 * candidate can sit it and score zero while the answers are missing. Fill the
 * answers in, then activate it from the admin panel.
 *
 * Passages 1 and 2 run as continuous text; passage 3 carries the A-I paragraph
 * labels the .docx marks up, after a two-paragraph introduction.
 */

const readingTest = {
    testId: "READING_ACADEMIC_022",
    testNumber: 22,
    title: "Academic Reading Mock Test 22",
    description: "Academic Reading Test with 3 passages and 40 questions",
    source: "Test 02",
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
            title: "Complementary and Alternative Medicine",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: "WHAT DO SCIENTISTS IN BRITAIN THINK ABOUT ALTERNATIVE THERAPIES? ORLA KENNEDY READS A SURPRISING SURVEY?\n\nIs complementary medicine hocus-pocus or does it warrant large-scale scientific investigation? Should science range beyond conventional medicine and conduct research on alternative medicine and the supposed growing links between mind and body? This will be hotly debated at the British Association for the Advancement of Science.\n\nOne Briton in five uses complementary medicine, and according to the most recent Mintel survey, one in ten uses herbalism or homoeopathy. Around £130 million is spent on oils, potions and pills every year in Britain, and the complementary and alternative medicine industry is estimated to be worth £1.6 billion. With the help of Professor Edzard Ernst, Laing chair of complementary medicine at The Peninsula Medical School, Universities of Exeter and Plymouth, we asked scientists their views on complementary and alternative medicine. Seventy-five scientists, in fields ranging from molecular biology to neuroscience, replied.\n\nSurprisingly, our sample of scientists was twice as likely as the public to use some form of complementary medicine, at around four in 10 compared with two in 10 of the general population. Three quarters of scientific users believed they were effective. Acupuncture, chiropractic and osteopathy were the most commonly used complementary treatments among scientists and more than 55 per cent believed these were more effective than a placebo and should be available to all on the National Health Service.\n\nScientists appear to place more trust in the more established areas of complementary and alternative medicine, such as acupuncture, chiropractic and osteopathy, for which there are professional bodies and recognised training, than therapies such as aromatherapy and spiritual healing. ‘Osteopathy is now a registered profession requiring a certified four-year degree before you can advertise and practise,’ said one neuroscientist who used the therapy. Nearly two thirds of the scientists who replied to our survey believed that aromatherapy and homoeopathy were no better than placebos, with almost a half thinking the same of herbalism and spiritual thinking. Some of the comments we received were scathing, even though one in ten of our respondents had used homeopathy. ‘Aromatherapy and homoeopathy are scientifically nonsensical,’ said one molecular biologist from the University of Bristol. Dr Romke Bron, a molecular biologist at the Medical Research Council Centre at King’s College London, added: ‘Homoeopathy is a big scam and I am convinced that if someone sneaked into a homoeopathic pharmacy and swapped labels, nobody would notice anything.’\n\nTwo centuries after homeopathy was introduced, it still lacks a watertight demonstration that it works. Scientists are happy that the resulting solutions and sugar baffled by how they can do anything.\n\nBoth complementary and conventional medicine should be used in routine health care, according to followers of the ‘intergrated health approach’, who want to treat an individual ‘as a whole’. But the scientists who responded to our surveys expressed serious concerns about this approach, with more than half believing that integrated medicine was an attempt to bypass rigorous scientific testing. Dr Bron said: ‘There is an awful lot of bad science going on in alternative medicine and the general public has a hard time to distinguish between scientific myth and fact. It is absolutely paramount to maintain rigorous quality control in health care. Although the majority of alternative health workers mean well, there are just too many frauds out there preying on vulnerable people.’\n\nOne molecular biologist from the University of Warwick admitted that ‘by doing this poll I have realised how shamefully little I understand about alternative therapy. Not enough scientific research has been performed. There is enough anecdotal evidence to suggest that at least some of the alternative therapies are effective for some people, suggesting this is an area ripe for research.’\n\nWhen asked if complementary and alternative medicine should get more research funding, scientists believed the top three (acupuncture, chiropractic and osteopathy) should get money, as should herbalism. It seems that therapies based on physical manipulation or a known action – like the active ingredients in a herb on a receptor in the body – are the ones that the scientific community has faith in. Less than a quarter thought that therapies such as aromatherapy, homoeopathy and spiritual healing should get any funding.\n\nScientists believed that the ‘feelgood’ counselling effect of complementary medicine and the time taken to listen to patients’ problems was what worked, rather than any medicinal effect. In contrast, the average visit to the doctor lasts only eight minutes, says the British Medical Association. Dr Stephen Nurrish, a molecular biologist at University College London, said: ‘Much of the benefit people get from complementary medicine is the time to talk to someone and be listened to sympathetically, something that is now lacking from medicine in general.’\n\nBut an anonymous neuroscientist at King’s College London had a more withering view of this benefit: ‘On the validity of complementary and alternative medicines, no one would dispute that ‘feeling good’ is good for your health, but why discriminate between museum-trip therapy, patting-adog therapy and aromatherapy? Is it because only the latter has a cadre of professional ‘practitioners’?’\n\nThere are other hardline scientists who argue that there should be no such thing as complementary and alternative medicine. As Professor David Moore, director of the Medical Research Council’s Institute for Hearing Research, said: ‘Either a treatment works or it doesn’t. The only way to determine if it works is to test it against appropriate controls (that is, scientifically).’",
            questionGroups: [
                {
                    "groupType": "matching-features",
                    "startQuestion": 1,
                    "endQuestion": 6,
                    "mainInstruction": "Look at the following views (Questions 1-6) and the list of people below them. Match each view with the person expressing it in the passage.",
                    "subInstruction": "Select the correct letter A-E in boxes 1-6 on your answer sheet.",
                    "note": "NB You may use any letter more than once.",
                    "featureListTitle": "List of People",
                    "featureOptions": [
                        {
                            "letter": "A",
                            "text": "Dr Romke Bron"
                        },
                        {
                            "letter": "B",
                            "text": "a molecular biologist from the University of Warwick"
                        },
                        {
                            "letter": "C",
                            "text": "Dr Stephen Nurrish"
                        },
                        {
                            "letter": "D",
                            "text": "a neuroscientist at King’s College London"
                        },
                        {
                            "letter": "E",
                            "text": "Professor David Moore"
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 1,
                            "text": "Complementary medicine provides something that conventional medicine no longer does.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 2,
                            "text": "It is hard for people to know whether they are being told the truth or not.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 3,
                            "text": "Certain kinds of complementary and alternative medicine are taken seriously because of the number of people making money from them.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 4,
                            "text": "Nothing can be considered a form of medicine unless it has been proved effective.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 5,
                            "text": "It seems likely that some forms of alternative medicine do work.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 6,
                            "text": "One particular kind of alternative medicine is a deliberate attempt to cheat the public.",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "matching-features",
                    "startQuestion": 7,
                    "endQuestion": 9,
                    "mainInstruction": "Complete each sentence with the correct ending A-F from the box below.",
                    "subInstruction": "Select the correct letter A-F in boxes 7-9 on your answer sheet.",
                    "featureListTitle": "Sentence Endings",
                    "featureOptions": [
                        {
                            "letter": "A",
                            "text": "what makes people use complementary rather than conventional medicine."
                        },
                        {
                            "letter": "B",
                            "text": "how many scientists themselves use complementary and alternative medicine."
                        },
                        {
                            "letter": "C",
                            "text": "whether alternative medicine should be investigated scientifically."
                        },
                        {
                            "letter": "D",
                            "text": "research into the use of complementary and conventional medicine together."
                        },
                        {
                            "letter": "E",
                            "text": "how many people use various kinds of complementary medicine."
                        },
                        {
                            "letter": "F",
                            "text": "the extent to which attitudes to alternative medicine are changing."
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 7,
                            "text": "The British Association for the Advancement of Science will be discussing the issue of __________",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 8,
                            "text": "A recent survey conducted by a certain organisation addressed the issue of __________",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 9,
                            "text": "The survey in which the writer of the article was involved gave information on __________",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "matching-features",
                    "startQuestion": 10,
                    "endQuestion": 13,
                    "mainInstruction": "Classify the following information as being given about acupuncture, aromatherapy, herbalism or homoeopathy.",
                    "subInstruction": "Select the correct letter A, B, C or D in boxes 10-13 on your answer sheet.",
                    "featureListTitle": "List of Therapies",
                    "featureOptions": [
                        {
                            "letter": "A",
                            "text": "acupuncture"
                        },
                        {
                            "letter": "B",
                            "text": "aromatherapy"
                        },
                        {
                            "letter": "C",
                            "text": "herbalism"
                        },
                        {
                            "letter": "D",
                            "text": "homoeopathy"
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 10,
                            "text": "Scientists believe that it is ineffective but harmless.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 11,
                            "text": "Scientists felt that it could be added to the group of therapies that deserved to be provided with resources for further investigation.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 12,
                            "text": "Scientists felt that it deserved to be taken seriously because of the organised way in which it has developed.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 13,
                            "text": "A number of scientists had used it, but harsh criticism was expressed about it.",
                            "correctAnswer": ""
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 1,
                    "questionType": "matching-features",
                    "questionText": "Complementary medicine provides something that conventional medicine no longer does.",
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
                    "questionNumber": 2,
                    "questionType": "matching-features",
                    "questionText": "It is hard for people to know whether they are being told the truth or not.",
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
                    "questionNumber": 3,
                    "questionType": "matching-features",
                    "questionText": "Certain kinds of complementary and alternative medicine are taken seriously because of the number of people making money from them.",
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
                    "questionNumber": 4,
                    "questionType": "matching-features",
                    "questionText": "Nothing can be considered a form of medicine unless it has been proved effective.",
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
                    "questionNumber": 5,
                    "questionType": "matching-features",
                    "questionText": "It seems likely that some forms of alternative medicine do work.",
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
                    "questionNumber": 6,
                    "questionType": "matching-features",
                    "questionText": "One particular kind of alternative medicine is a deliberate attempt to cheat the public.",
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
                    "questionNumber": 7,
                    "questionType": "matching-features",
                    "questionText": "The British Association for the Advancement of Science will be discussing the issue of __________",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F"
                    ]
                },
                {
                    "questionNumber": 8,
                    "questionType": "matching-features",
                    "questionText": "A recent survey conducted by a certain organisation addressed the issue of __________",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F"
                    ]
                },
                {
                    "questionNumber": 9,
                    "questionType": "matching-features",
                    "questionText": "The survey in which the writer of the article was involved gave information on __________",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F"
                    ]
                },
                {
                    "questionNumber": 10,
                    "questionType": "matching-features",
                    "questionText": "Scientists believe that it is ineffective but harmless.",
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
                    "questionNumber": 11,
                    "questionType": "matching-features",
                    "questionText": "Scientists felt that it could be added to the group of therapies that deserved to be provided with resources for further investigation.",
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
                    "questionNumber": 12,
                    "questionType": "matching-features",
                    "questionText": "Scientists felt that it deserved to be taken seriously because of the organised way in which it has developed.",
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
                    "questionNumber": 13,
                    "questionType": "matching-features",
                    "questionText": "A number of scientists had used it, but harsh criticism was expressed about it.",
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
            sectionNumber: 2,
            title: "Flawed Beauty: the problem with toughened glass",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: "On 2nd August 1999, a particularly hot day in the town of Cirencester in the UK, a large pane of toughened glass in the roof of a shopping centre at Bishops Walk shattered without warning and fell from its frame. When fragments were analysed by experts at the giant glass manufacturer Pilkington, which had made the pane, they found that minute crystals of nickel sulphide trapped inside the glass had almost certainly caused the failure.\n\n'The glass industry is aware of the issue,' says Brian Waldron, chairman of the standards committee at the Glass and Glazing Federation, a British trade association, and standards development officer at Pilkington. But he insists that cases are few and far between. 'It's a very rare phenomenon,' he says.\n\nOthers disagree. 'On average I see about one or two buildings a month suffering from nickel sulphide related failures,' says Barrie Josie, a consultant engineer involved in the Bishops Walk investigation. Other experts tell of similar experiences. Tony Wilmott of London-based consulting engineers Sandberg, and Simon Armstrong at CIadTech Associates in Hampshire both say they know of hundreds of cases. 'What you hear is only the tip of the iceberg,' says Trevor Ford, a glass expert at Resolve Engineering in Brisbane, Queensland. He believes the reason is simple: 'No-one wants bad press.'\n\nToughened glass is found everywhere, from cars and bus shelters to the windows, walls and roofs of thousands of buildings around the world. It's easy to see why. This glass has five times the strength of standard glass, and when it does break it shatters into tiny cubes rather than large, razorsharp shards. Architects love it because large panels can be bolted together to make transparent walls, and turning it into ceilings and floors is almost as easy.\n\nIt is made by heating a sheet of ordinary glass to about 620°C to soften it slightly, allowing its structure to expand, and then cooling it rapidly with jets of cold air. This causes the outer layer of the pane to contract and solidify before the interior. When the interior finally solidifies and shrinks, it exerts a pull on the outer layer that leaves it in permanent compression and produces a tensile force inside the glass. As cracks propagate best in materials under tension, the compressive force on the surface must be overcome before the pane will break, making it more resistant to cracking.\n\nThe problem starts when glass contains nickel sulphide impurities. Trace amounts of nickel and sulphur are usually present in the raw materials used to make glass, and nickel can also be introduced by fragments of nickel alloys falling into the molten glass. As the glass is heated, these atoms react to form tiny crystals of nickel sulphide. Just a tenth of a gram of nickel in the furnace can create up to 50,000 crystals.\n\nThese crystals can exist in two forms: a dense form called the alpha phase, which is stable at high temperatures, and a less dense form called the beta phase, which is stable at room temperatures. The high temperatures used in the toughening process convert all the crystals to the dense, compact alpha form. But the subsequent cooling is so rapid that the crystals don't have time to change back to the beta phase. This leaves unstable alpha crystals in the glass, primed like a coiled spring, ready to revert to the beta phase without warning.\n\nWhen this happens, the crystals expand by up to 4%. And if they are within the central, tensile region of the pane, the stresses this unleashes can shatter the whole sheet. The time that elapses before failure occurs is unpredictable. It could happen just months after manufacture, or decades later, although if the glass is heated - by sunlight, for example - the process is speeded up. Ironically, says Graham Dodd, of consulting engineers Arup in London, the oldest pane of toughened glass known to have failed due to nickel sulphide inclusions was in Pilkington's glass research building in Lathom, Lancashire. The pane was 27 years old.\n\nData showing the scale of the nickel sulphide problem is almost impossible to find. The picture is made more complicated by the fact that these crystals occur in batches. So even if on average, there is only one inclusion in 7 tonnes of glass, if you experience one nickel sulphide failure in your building, that probably means you've got a problem in more than one pane.\n\nJosie says that in the last decade he has worked on over 15 buildings with the number of failures into double figures.\n\nOne of the worst examples of this is Waterfront Place, which was completed in 1990. Over the following decade the 40 storey Brisbane block suffered a rash of failures. Eighty panes of its toughened glass shattered due to inclusions before experts were finally called in. John Barry, an expert in nickel sulphide contamination at the University of Queensland, analysed every glass pane in the building. Using a studio camera, a photographer went up in a cradle to take photos of every pane. These were scanned under a modified microfiche reader for signs of niclrel sulphide crystals. 'We discovered at least another 120 panes with potentially dangerous inclusions which were then replaced,' says Barry. 'It was a very expensive and time-consuming process that took around six months to complete.' Though the project cost A$1.6 million (nearly £700,000), the alternative - re-cladding the entire building - would have cost ten times as much.",
            questionGroups: [
                {
                    "groupType": "matching-features",
                    "startQuestion": 14,
                    "endQuestion": 17,
                    "mainInstruction": "Look at the following people and the list of statements below. Match each person with the correct statement.",
                    "subInstruction": "Select the correct letter A-H in boxes 14-17 on your answer sheet.",
                    "featureListTitle": "List of Statements",
                    "featureOptions": [
                        {
                            "letter": "A",
                            "text": "suggests that publicity about nickel sulphide failure has been suppressed"
                        },
                        {
                            "letter": "B",
                            "text": "regularly sees cases of nickel sulphide failure"
                        },
                        {
                            "letter": "C",
                            "text": "closely examined all the glass in one building"
                        },
                        {
                            "letter": "D",
                            "text": "was involved with the construction of Bishops Walk"
                        },
                        {
                            "letter": "E",
                            "text": "recommended the rebuilding of Waterfront Place"
                        },
                        {
                            "letter": "F",
                            "text": "thinks the benefits of toughened glass are exaggerated"
                        },
                        {
                            "letter": "G",
                            "text": "claims that nickel sulphide failure is very unusual"
                        },
                        {
                            "letter": "H",
                            "text": "refers to the most extreme case of delayed failure"
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 14,
                            "text": "Brian Waldron",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 15,
                            "text": "Trevor Ford",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 16,
                            "text": "Graham Dodd",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 17,
                            "text": "John Barry",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "summary-with-options",
                    "startQuestion": 18,
                    "endQuestion": 23,
                    "mainInstruction": "Complete the summary with the list of words A-P below.",
                    "subInstruction": "Select your answers in boxes 18-23 on your answer sheet.",
                    "mainHeading": "Toughened Glass",
                    "phraseList": [
                        {
                            "letter": "A",
                            "text": "numerous"
                        },
                        {
                            "letter": "B",
                            "text": "detected"
                        },
                        {
                            "letter": "C",
                            "text": "quickly"
                        },
                        {
                            "letter": "D",
                            "text": "agreed"
                        },
                        {
                            "letter": "E",
                            "text": "warm"
                        },
                        {
                            "letter": "F",
                            "text": "sharp"
                        },
                        {
                            "letter": "G",
                            "text": "expands"
                        },
                        {
                            "letter": "H",
                            "text": "slowly"
                        },
                        {
                            "letter": "I",
                            "text": "unexpectedly"
                        },
                        {
                            "letter": "J",
                            "text": "removed"
                        },
                        {
                            "letter": "K",
                            "text": "contracts"
                        },
                        {
                            "letter": "L",
                            "text": "disputed"
                        },
                        {
                            "letter": "M",
                            "text": "cold"
                        },
                        {
                            "letter": "N",
                            "text": "moved"
                        },
                        {
                            "letter": "O",
                            "text": "small"
                        },
                        {
                            "letter": "P",
                            "text": "calculated"
                        }
                    ],
                    "summarySegments": [
                        {
                            "type": "text",
                            "content": "Toughened glass is favoured by architects because it is much stronger than ordinary glass, and the fragments are not as "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 18,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " when it breaks. However, it has one disadvantage: it can shatter "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 19,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": ". This fault is a result of the manufacturing process. Ordinary glass is first heated, then cooled very "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 20,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": ". The outer layer "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 21,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " before the inner layer and the tension between the two layers which is created because of this makes the glass stronger. However, if the glass contains nickel sulphide impurities, crystals of nickel sulphide are formed. These are unstable, and can expand suddenly, particularly if the weather is "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 22,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": ". If this happens, the pane of glass may break. The frequency with which such problems occur is "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 23,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " by glass experts. Furthermore, the crystals cannot be detected without sophisticated equipment."
                        }
                    ]
                },
                {
                    "groupType": "true-false-not-given",
                    "startQuestion": 24,
                    "endQuestion": 26,
                    "mainInstruction": "Do the following statements agree with the information given in the Reading Passage?",
                    "subInstruction": "In boxes 24-26 on your answer sheet, select TRUE, FALSE or NOT GIVEN.",
                    "optionsExplanation": [
                        {
                            "label": "TRUE",
                            "description": "if the statement agrees with the information"
                        },
                        {
                            "label": "FALSE",
                            "description": "if the statement contradicts the information"
                        },
                        {
                            "label": "NOT GIVEN",
                            "description": "if there is no information on this"
                        }
                    ],
                    "statements": [
                        {
                            "questionNumber": 24,
                            "text": "Little doubt was expressed about the reason for the Bishops Walk accident.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 25,
                            "text": "Toughened glass has the same appearance as ordinary glass.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 26,
                            "text": "There is plenty of documented evidence available about the incidence of nickel sulphide failure.",
                            "correctAnswer": ""
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 14,
                    "questionType": "matching-features",
                    "questionText": "Brian Waldron",
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
                        "H"
                    ]
                },
                {
                    "questionNumber": 15,
                    "questionType": "matching-features",
                    "questionText": "Trevor Ford",
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
                        "H"
                    ]
                },
                {
                    "questionNumber": 16,
                    "questionType": "matching-features",
                    "questionText": "Graham Dodd",
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
                        "H"
                    ]
                },
                {
                    "questionNumber": 17,
                    "questionType": "matching-features",
                    "questionText": "John Barry",
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
                        "H"
                    ]
                },
                {
                    "questionNumber": 18,
                    "questionType": "summary-with-options",
                    "questionText": "Toughened Glass summary — blank 18",
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
                        "N",
                        "O",
                        "P"
                    ]
                },
                {
                    "questionNumber": 19,
                    "questionType": "summary-with-options",
                    "questionText": "Toughened Glass summary — blank 19",
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
                        "N",
                        "O",
                        "P"
                    ]
                },
                {
                    "questionNumber": 20,
                    "questionType": "summary-with-options",
                    "questionText": "Toughened Glass summary — blank 20",
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
                        "N",
                        "O",
                        "P"
                    ]
                },
                {
                    "questionNumber": 21,
                    "questionType": "summary-with-options",
                    "questionText": "Toughened Glass summary — blank 21",
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
                        "N",
                        "O",
                        "P"
                    ]
                },
                {
                    "questionNumber": 22,
                    "questionType": "summary-with-options",
                    "questionText": "Toughened Glass summary — blank 22",
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
                        "N",
                        "O",
                        "P"
                    ]
                },
                {
                    "questionNumber": 23,
                    "questionType": "summary-with-options",
                    "questionText": "Toughened Glass summary — blank 23",
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
                        "N",
                        "O",
                        "P"
                    ]
                },
                {
                    "questionNumber": 24,
                    "questionType": "true-false-not-given",
                    "questionText": "Little doubt was expressed about the reason for the Bishops Walk accident.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 25,
                    "questionType": "true-false-not-given",
                    "questionText": "Toughened glass has the same appearance as ordinary glass.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 26,
                    "questionType": "true-false-not-given",
                    "questionText": "There is plenty of documented evidence available about the incidence of nickel sulphide failure.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                }
            ],
        },
        {
            sectionNumber: 3,
            title: "The Fruit Book",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: "It’s not every scientist who writes books for people who can’t read. And how many scientists want their books to look as dog-eared as possible?\n\nBut Patricia Shanley, an ethnobotanist, wanted to give something back. After the poorest people of the Amazon allowed her to study their land and its ecology, she turned her research findings into a picture book that tells the local people how to get a good return on their trees without succumbing to the lure of a quick buck from a logging company. It has proved a big success.\n\nA The book is called Fruit Trees and Useful Plants in the Lives of Amazonians, but is better known simply as the “fruit book”. The second edition was produced at the request of politicians in western Amazonia. Its blend of hard science and local knowledge on the use and trade of 35 native forest species has been so well received (and well used) that no less a dignitary than Brazil’s environment minister, Marina Silva, has written the foreword. “There is nothing else like the Shanley book,” says Adalberto Verissimo, director of the Institute of People and the Environment of the Amazon. “It gives science back to the poor, to the people who really need it.”\n\nB Shanley’s work on the book began a decade ago, with a plea for help from the Rural Workers’ Union of Paragominas, a Brazilian town whose prosperity is based on exploitation of timber. The union realised that logging companies would soon be knocking on the doors of the caboclos, peasant farmers living on the Rio Capim, an Amazon tributary in the Brazilian state of Para. Isolated and illiterate, the caboclos would have little concept of the true value of their trees; communities downstream had already sold off large blocks of forest for a pittance. “What they wanted to know was how valuable the forests were,” recalls Shanley, then a researcher in the area for the Massachusetts-based Woods Hole Research Centre.\n\nC The Rural Workers’ Union wanted to know whether harvesting wild fruits would make economic sense in the Rio Capim. “There was a lot of interest in trading non-timber forest products (NTFPs),” Shanley says. At the time, environmental groups and green-minded businesses were promoting the idea. This was the view presented in a seminal paper, Valuation of an Amazonian Rainforest, published in Nature in 1989. The researchers had calculated that revenues from the sale of fruits could far exceed those from a one- off sale of trees to loggers. “The union was keen to discover whether it made more sense conserving the forest for subsistence use and the possible sale of fruit, game and medicinal plants, than selling trees for timber,” says Shanley. Whether it would work for the caboclos was far from clear.\n\nD Although Shanley had been invited to work in the Rio Capim, some caboclos were suspicious. “When Patricia asked if she could study my forest,” says Joao Fernando Moreira Brito, \"my neighbours said she was a foreigner who’d come to rob me of my trees.\" In the end, Moreira Brito, or Mangueira as he is known, welcomed Shanley and worked on her study. His land, an hour's walk from the Rio Capim, is almost entirely covered with primary forest. A study of this and other tracts of forest selected by the communities enabled Shanley to identify three trees, found throughout the Amazon, whose fruit was much favoured by the caboclos: bacuri (Platonia insignis), uxi (Endop- leura uchi) and piquia (Cayocas villosum). The caboclos used their fruits, extracted oils, and knew what sort of wildlife they attracted. But, in the face of aggressive tactics from the logging companies, they had no measure of the trees' financial worth. The only way to find out, Shanley decided, was to start from scratch with a scientific study. “From a scientific point of view, hardly anything was known about these trees,” she says. But six years of field research yielded a mass of data on their flowering and fruiting behaviour. During 1993 and 1994, 30 families weighed everything they used from the forest - game, fruit, fibre, medicinal plants - and documented its source.\n\nE After three logging sales and a major fire in 1997, the researchers were also able to study the ecosystem's reaction to logging and disturbance. They carried out a similar, though less exhaustive, study in 1999, this time with 15 families. The changes were striking. Average annual household consumption of forest fruit had fallen from 89 to 28 kilogrammes between 1993 and 1999. “What we found,” says Shanley, “was that fruit collection could coexist with a certain amount of logging, but after the forest fire it dropped dramatically.” Over the same period, fibre use also dropped from around 20 to 4 kilogrammes. The fire and logging also changed the nature of the caboclo diet. In 1993 most households ate game two or three times a month. By 1999 some were fortunate if they ate game more than two or three times a year.\n\nF The loss of certain species of tree was especially significant. Shanley’s team persuaded local hunters to weigh their catch, noting the trees under which the animals were caught. Over the year, they trapped five species of game averaging 232 kilogrammes under piquia trees. Under copaiba, they caught just two species averaging 63 kilogrammes; and under uxi, four species weighing 38 kilogrammes. At last, the team was getting a handle on which trees were worth keeping, and which could reasonably be sold. “This showed that selling piquia trees to loggers for a few dollars made little sense,” explains Shanley. “Their local value lies in providing a prized fruit, as well as flowers which attract more game than any other species.”\n\nG As a result of these studies, Shanley had to tell the Rural Workers’ Union of Paragominas that the Nature thesis could not be applied wholesale to their community - harvesting NTFPs would not always yield more than timber sales. Fruiting patterns of trees such as uxi were unpredictable, for example. In 1994, one household collected 3,654 uxi fruits; the following year, none at all.\n\nH This is not to say that wild fruit trees were unimportant. On the contrary, argues Shanley, they are critical for subsistence, something that is often ignored in much of the current research on NTFPs, which tends to focus on their commercial potential. Geography was another factor preventing the Rio Capim caboclos from establishing a serious trade in wild fruit: villagers in remote areas could not compete with communities collecting NTFPs close to urban markets, although they could sell them to passing river boats.\n\nI But Shanley and her colleagues decided to do more than just report their results to the union. Together with two of her research colleagues, Shanley wrote the fruit book. This, the Bible and a publication on medicinal plants co-authored by Shanley and designed for people with minimal literacy skills are about the only books you will see along this stretch of the Rio Capim. The first print ran to only 3,000 copies, but the fruit book has been remarkably influential, and is used by colleges, peasant unions, industries and the caboclos themselves. Its success is largely due to the fact that people with poor literacy skills can understand much of the information it contains about the non-timber forest products, thanks to its illustrations, anecdotes, stories and songs. “The book doesn’t tell people what to do,” says Shanley, “but it does provide them with choices.” The caboclos who have used the book now have a much better understanding of which trees to sell to the loggers, and which to protect. Questions 27-32",
            questionGroups: [
                {
                    "groupType": "matching-information",
                    "startQuestion": 27,
                    "endQuestion": 32,
                    "mainInstruction": "Reading Passage 3 has nine paragraphs A-I. Which paragraph contains the following information?",
                    "subInstruction": "Select the correct letter A-I in boxes 27-32 on your answer sheet.",
                    "paragraphOptions": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G",
                        "H",
                        "I"
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 27,
                            "text": "A description of Shanley’s initial data collection",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 28,
                            "text": "Why a government official also contributes to the book",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 29,
                            "text": "Reasons why the community asked Shanley to conduct the research",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 30,
                            "text": "Reference to the starting point of her research",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 31,
                            "text": "Two factors that alter food consumption patterns",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 32,
                            "text": "Why the book is successful",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "summary-completion",
                    "startQuestion": 33,
                    "endQuestion": 40,
                    "mainInstruction": "Complete the summary below.",
                    "subInstruction": "Choose NO MORE THAN THREE WORDS from the passage for each answer. Write your answers in boxes 33-40 on your answer sheet.",
                    "mainHeading": "",
                    "summarySegments": [
                        {
                            "type": "text",
                            "content": "Forest fire has caused local villagers to consume less "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 33,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " and "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 34,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": ". Game: there is the least amount of game hunted under "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 35,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": "; yield is also "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 36,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": ". Thus, it is more reasonable to keep "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 37,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": ". All the trees can also be used for "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 38,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " besides selling them to loggers. But this is often ignored, because most research usually focuses on the "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 39,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " of the trees. The purpose of the book: to give information about "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 40,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": "."
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 27,
                    "questionType": "matching-information",
                    "questionText": "A description of Shanley’s initial data collection",
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
                        "I"
                    ]
                },
                {
                    "questionNumber": 28,
                    "questionType": "matching-information",
                    "questionText": "Why a government official also contributes to the book",
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
                        "I"
                    ]
                },
                {
                    "questionNumber": 29,
                    "questionType": "matching-information",
                    "questionText": "Reasons why the community asked Shanley to conduct the research",
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
                        "I"
                    ]
                },
                {
                    "questionNumber": 30,
                    "questionType": "matching-information",
                    "questionText": "Reference to the starting point of her research",
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
                        "I"
                    ]
                },
                {
                    "questionNumber": 31,
                    "questionType": "matching-information",
                    "questionText": "Two factors that alter food consumption patterns",
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
                        "I"
                    ]
                },
                {
                    "questionNumber": 32,
                    "questionType": "matching-information",
                    "questionText": "Why the book is successful",
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
                        "I"
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
                    "questionType": "summary-completion",
                    "questionText": "Summary — blank 37",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 38,
                    "questionType": "summary-completion",
                    "questionText": "Summary — blank 38",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 39,
                    "questionType": "summary-completion",
                    "questionText": "Summary — blank 39",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 40,
                    "questionType": "summary-completion",
                    "questionText": "Summary — blank 40",
                    "correctAnswer": "",
                    "marks": 1
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

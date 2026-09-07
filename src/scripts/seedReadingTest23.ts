import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

/**
 * Academic Reading Mock Test 23 — the reading half of "Test 3.docx" in the
 * New Test batch. Pairs with listening test 23, built from the same paper.
 *
 * ⚠️ ANSWERS ARE DELIBERATELY BLANK. The batch shipped listening answer keys
 * (Mock_1..5) but no reading key, so every correctAnswer here is "" and the test
 * is seeded with isActive: false. The exam endpoint filters on isActive, so no
 * candidate can sit it and score zero while the answers are missing. Fill the
 * answers in, then activate it from the admin panel.
 *
 * Passage 1 carries A-G labels and passage 2 A-F; passage 3 needs none, since
 * nothing there is matched to a paragraph.
 */

const readingTest = {
    testId: "READING_ACADEMIC_023",
    testNumber: 23,
    title: "Academic Reading Mock Test 23",
    description: "Academic Reading Test with 3 passages and 40 questions",
    source: "Test 03",
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
            title: "Otters",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: "A Otters have long, thin bodies and short legs – ideal for pushing through dense undergrowth or hunting in tunnels. An adult male may be up to 4 feet long and 30lbs. Females are smaller typically. The Eurasian otter’s nose is about the smallest among the otter species and has a characteristic shape described as a shallow ‘W’. An otter’s tail (or rudder, or stern) is stout at the base and tapers towards the tip where it flattens. This forms part of the propulsion unit when swimming fast underwater. Otter fur consists of two types of hair: stout guard hairs which form a waterproof outer covering, and under-fur which is dense and fine, equivalent to an otter’s thermal underwear. The fur must be kept in good condition by grooming. Seawater reduces the waterproofing and insulating qualities of otter fur when saltwater in the fur. This is why freshwater pools are important to otters living on the coast. After swimming, they wash the salts off in pools and the squirm on the ground to rub dry against vegetation.\n\nB The scent is used for hunting on land, for communication and for detecting danger. Otterine sense of smell is likely to be similar in sensitivity to dogs. Otters have small eyes and are probably short-sighted on land. But they do have the ability to modify the shape of the lens in the eye to make it more spherical, and hence overcome the refraction of water. In clear water and good light, otters can hunt fish by sight. The otter’s eyes and nostrils are placed high on its head so that it can see and breathe even when the rest of the body is submerged. Underwater, the cotter holds its legs against the body, except for steering, and the hind end of the body is flexed in a series of vertical undulations. River otters have webbing which extends for much of the length of each digit, though not to the very end. Giant otters and sea otters have even more prominent webs, while the Asian short-clawed otter has no webbing – they hunt for shrimps in ditches and paddy fields so they don’t need the swimming speed. Otter’s ears are tiny for streamlining, but they still have very sensitive hearing and are protected by valves which close them against water pressure.\n\nC A number of constraints and preferences limit suitable habitats of otters. Water is a must and the rivers must be large enough to support a healthy population of fish. Being such shy and wary creatures, they will prefer territories where man’s activities do not impinge greatly. Of course, there must also be no other otter already in residence – this has only become significant again recently as populations start to recover. Coastal otters have a much more abundant food supply and range for males and females may be just a few kilometres of coastline. Because male range overlaps with two or three females – not bad! Otters will eat anything that they can get hold of – there are records of sparrows and snakes and slugs being gobbled. Apart from fish, the most common prey are crayfish, crabs and water birds. Small mammals are occasionally taken, most commonly rabbits but sometimes even moles.\n\nD Eurasian otters will breed any time where food is readily available. In places where the condition is more severe, Sweden for example where the lakes are frozen for much of winter, cubs are born in spring. This ensures that they are well grown before severe weather returns. In the Shetlands, cubs are born in summer when fish is more abundant. Though otters can breed every year, some do not. Again, this depends on food availability. Other factors such as food range and quality of the female may have an effect. Gestation for Eurasian otter is 63 days, with the exception of Lutra canadensis whose embryos may undergo delayed implantation. Otters normally give birth in more secure dens to avoid disturbances. Nests are lined with bedding to keep the cub’s warm mummy is away feeding.\n\nE Otters normally give birth in more secure dens to avoid disturbances. Nests are lined with bedding (reeds, waterside plants, grass) to keep the cub’s warm while is away feeding. Litter Size varies between 1 and 5. For some unknown reason, coastal otters tend to produce smaller litters. At five weeks they open their eyes – a tiny cub of 700g. At seven weeks they’re weaned onto solid food. At ten weeks they leave the nest, blinking into daylight for the first time. After three months they finally meet the water and learn to swim. After eight months they are hunting, though the mother still provides a lot of food herself. Finally, after nine months she can chase them all away with a clear conscience, and relax – until the next fella shows up.\n\nF The plight of the British otter was recognised in the early 60s, but it wasn’t until the late 70s that the chief cause was discovered. Pesticides, such as dieldrin and aldrin, were first used in1955 in agriculture and other industries – these chemicals are very persistent and had already been recognised as the cause of huge declines in the population of peregrine falcons, sparrow hawks and other predators. The pesticides entered the river systems and the food chain – micro-organisms, fish and finally otters, with every step increasing the concentration of the chemicals. From 1962 the chemicals were phased out, but while some species recovered quickly, otter numbers did not – and continued to fall into the 80s. This was probably due mainly to habitat destruction and road deaths. Acting on populations fragmented by the sudden decimation in the 50s and 60s, the loss of just a handful of otters in one area can make an entire population unviable and spell the end.\n\nG Otter numbers are recovering all around Britain – populations are growing again in the few areas where they had remained and have expanded from those areas into the rest of the country. This is almost entirely due to legislation, conservation efforts, slowing down and reversing the destruction of suitable otter habitat and reintroductions from captive breeding programs. Releasing captive-bred otters is seen by many as a last resort. The argument runs that where there is no suitable habitat for them they will not survive after release and where there is suitable habitat, natural populations should be able to expand into the area. However, reintroducing animals into a fragmented and fragile population may add just enough impetus for it to stabilise and expand, rather than die out. This is what the Otter Trust accomplished in Norfolk, where the otter population may have been as low as twenty animals at the beginning of the 1980s. The Otter Trust has now finished its captive breeding program entirely, great news because it means it is no longer needed.",
            questionGroups: [
                {
                    "groupType": "matching-information",
                    "startQuestion": 1,
                    "endQuestion": 9,
                    "mainInstruction": "The Reading Passage has seven paragraphs A-G. Which paragraph contains the following information?",
                    "subInstruction": "Write the correct letter A-G, in boxes 1-9 on your answer sheet.",
                    "note": "NB You may use any letter more than once.",
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
                            "questionNumber": 1,
                            "text": "A description of how otters regulate vision underwater",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 2,
                            "text": "The fit-for-purpose characteristics of otter’s body shape",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 3,
                            "text": "A reference to an underdeveloped sense",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 4,
                            "text": "An explanation of why agriculture failed in otter conservation efforts",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 5,
                            "text": "A description of some of the otter’s social characteristics",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 6,
                            "text": "A description of how baby otters grow",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 7,
                            "text": "The conflicting opinions on how to preserve",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 8,
                            "text": "A reference to the legislative act",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 9,
                            "text": "An explanation of how otters compensate for heat loss",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "short-answer",
                    "startQuestion": 10,
                    "endQuestion": 13,
                    "mainInstruction": "Answer the questions below.",
                    "subInstruction": "Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.",
                    "questions": [
                        {
                            "questionNumber": 10,
                            "questionText": "What affects the outer fur of otters?",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 11,
                            "questionText": "What skill is not necessary for Asian short-clawed otters?",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 12,
                            "questionText": "Which type of otters has the shortest range?",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 13,
                            "questionText": "Which type of animals do otters hunt occasionally?",
                            "correctAnswer": ""
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 1,
                    "questionType": "matching-information",
                    "questionText": "A description of how otters regulate vision underwater",
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
                    "questionNumber": 2,
                    "questionType": "matching-information",
                    "questionText": "The fit-for-purpose characteristics of otter’s body shape",
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
                    "questionNumber": 3,
                    "questionType": "matching-information",
                    "questionText": "A reference to an underdeveloped sense",
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
                    "questionNumber": 4,
                    "questionType": "matching-information",
                    "questionText": "An explanation of why agriculture failed in otter conservation efforts",
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
                    "questionNumber": 5,
                    "questionType": "matching-information",
                    "questionText": "A description of some of the otter’s social characteristics",
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
                    "questionNumber": 6,
                    "questionType": "matching-information",
                    "questionText": "A description of how baby otters grow",
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
                    "questionNumber": 7,
                    "questionType": "matching-information",
                    "questionText": "The conflicting opinions on how to preserve",
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
                    "questionNumber": 8,
                    "questionType": "matching-information",
                    "questionText": "A reference to the legislative act",
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
                    "questionNumber": 9,
                    "questionType": "matching-information",
                    "questionText": "An explanation of how otters compensate for heat loss",
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
                    "questionNumber": 10,
                    "questionType": "short-answer",
                    "questionText": "What affects the outer fur of otters?",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 11,
                    "questionType": "short-answer",
                    "questionText": "What skill is not necessary for Asian short-clawed otters?",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 12,
                    "questionType": "short-answer",
                    "questionText": "Which type of otters has the shortest range?",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 13,
                    "questionType": "short-answer",
                    "questionText": "Which type of animals do otters hunt occasionally?",
                    "correctAnswer": "",
                    "marks": 1
                }
            ],
        },
        {
            sectionNumber: 2,
            title: "The Grand Banks",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: "A The Grand Banks is a large area of submerged highlands south-east of Newfoundland and east of the Laurentian Channel on the North American continental shelf. Covering 93,200 square kilometres, the Grand Banks are relatively shallow, ranging from 25 to 100 meters in depth. It is in this area that the cold Labrador Current mixes with the warm waters of the Gulf Stream. The mixing of these waters and the shape of the ocean bottom lifts nutrients to the surface and these conditions created one of the richest fishing grounds in the world. Extensive marine life flourishes in the Grand Banks, whose range extends beyond the Canadian 200-mile exclusive economic zone (EEZ) and into international waters. This has made it an important part of both the Canadian and the high seas fisheries, with fishermen risking their lives in the extremely inhospitable environment consisting of rogue waves, fog, icebergs, sea ice, hurricanes, winter storms and earthquakes.\n\nB While the area’s ‘official’ discovery is credited to John Cabot in 1497, English and Portuguese vessels are known to have first sought out these waters prior to that, based upon reports they received from earlier Viking voyages to Newfoundland. Several navigators, including Basque fishermen, are known to have fished these waters in the fifteenth century. Some texts from that era refer to a land called Bacalao, ‘the land of the codfish’, which is possibly Newfoundland. However, it was not until John Cabot noted the waters’ abundance of sea life that the existence of these fishing grounds became widely known in Europe. Soon, fishermen and merchants from France, Spain, Portugal and England developed seasonal inshore fisheries producing for European markets. Known as ‘dry’ fishery, cod were split, salted, and dried on shore over the summer before crews returned to Europe. The French pioneered ‘wet’ or ‘green’ fishery on the Grand Banks proper around 1550, heavily salting the cod on board and immediately returning home.\n\nC The Grand Banks were possibly the world’s most important international fishing area in the nineteenth and twentieth centuries. Technological advances in fishing, such as sonar and large factory ships, including the massive factory freezer trawlers introduced in the 1950’s, led to overfishing and a serious decline in the fish stocks. Based upon the many foreign policy agreements Newfoundland had entered into prior to its admittance into the Canadian Confederation, foreign fleets, some from as far away as Russia, came to the Grand Banks in force, catching unprecedented quantities of fish.\n\nD Between 1973 and 1982, the United Nations and its member states negotiated the Third Convention of the Law of the Sea, one component of which was the concept of nations being allowed to declare an EEZ. Many nations worldwide-declared 200-nautical mile EEZ’s, including Canada and the United States. On the whole, the EEZ was very well received by fishermen in eastern Canada, because it meant they could fish unhindered out to the limit without fear of competing with the foreign fleets. During the late 1970’s and early 1980s, Canada’s domestic offshore fleet grew as fishermen and fish-processing companies rushed to take advantage. It was during this time that it was noticed that the foreign fleets now pushed out to areas of the Grand Banks off Newfoundland outside the Canadian EEZ. By the late 1980’s, dwindling catches of Atlantic cod were being reported throughout Newfoundland and eastern Canada, and the federal government and citizens of coastal regions in the area began to face the reality that the domestic and foreign overfishing had taken its toll. The Canadian government was finally forced to take drastic action in 1992, when a total moratorium was declared indefinitely for the northern cod.\n\nE Over the last ten years, it has been noted that cod appear to be returning to the Grand Banks in small numbers. The reasons for this fragile recovery are still unknown. Perhaps, the damage done by trawlers is not permanent and the marine fauna and ecosystems can rebuild themselves if given a prolonged period of time without any commercial activity. Either way, the early stage recovery of the Grand Banks is encouraging news, but caution is needed, as, after nearly twenty years of severe limitations, cod stocks are still only at approximately ten per cent of 1960’s levels. It is hoped that in another ten to twenty years, stocks may be close to a full recovery, although this would require political pressure to maintain strict limitations on commercial fishing. If cod do come back to the Grand Banks in meaningful numbers, it is to be hoped that the Canadians will not make the same mistakes again.\n\nF Further riches have now been found in the Grand Banks. Petroleum reserves have been discovered and a number of oil fields are under development in the region. The vast Hibernia oil field was discovered in 1979, and, following several years of aborted start-up attempts, the Hibernia megaproject began construction of the production platform and gravity base structures in the early 1990’s. Production commenced on November 17, 1997, with initial production rates in excess of 50,000 barrels of crude oil per day from a single well. Hibernia has proven to be the most prolific oil well in Canada. However, earthquake and iceberg activity in the Grand Banks pose a potential ecological disaster that could devastate the fishing grounds that are only now starting to recover.",
            questionGroups: [
                {
                    "groupType": "matching-information",
                    "startQuestion": 14,
                    "endQuestion": 20,
                    "mainInstruction": "The reading passage has 6 paragraphs A-F. Which paragraph contains the following information?",
                    "subInstruction": "Select your answers in boxes 14-20 on your answer sheet.",
                    "paragraphOptions": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F"
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 14,
                            "text": "Many countries could legally fish Newfoundland waters because of treaties Newfoundland had made before becoming part of Canada.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 15,
                            "text": "The establishment of the EEZ did not stop over-fishing in the Grand Banks.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 16,
                            "text": "Natural disasters could cause oil to destroy what is left of the Grand Banks ecosystem.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 17,
                            "text": "The original amount of fish in the Grand Banks was due to different temperature waters mixing.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 18,
                            "text": "East Canadian fishermen were generally happy with the establishment of the Canadian EEZ.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 19,
                            "text": "Grand Banks’ cod stocks are still 90 per cent lower than what they were in the 1960’s.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 20,
                            "text": "The French were the first to prepare the cod on board their ships before going back to France.",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "multiple-choice-full",
                    "startQuestion": 21,
                    "endQuestion": 23,
                    "mainInstruction": "Choose the correct letter A, B, C or D.",
                    "subInstruction": "Write your answers in boxes 21-23 on your answer sheet.",
                    "mcQuestions": [
                        {
                            "questionNumber": 21,
                            "questionText": "The first English fishermen to come to the Grand Banks to fish",
                            "options": [
                                {
                                    "letter": "A",
                                    "text": "were told about the fishery by Basque fishermen."
                                },
                                {
                                    "letter": "B",
                                    "text": "were sent word about the fishery from the first American colonists."
                                },
                                {
                                    "letter": "C",
                                    "text": "acted on information from previous Viking expeditions."
                                },
                                {
                                    "letter": "D",
                                    "text": "discovered the fishery themselves while exploring."
                                }
                            ],
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 22,
                            "questionText": "John Cabot’s reports of the Grand Banks",
                            "options": [
                                {
                                    "letter": "A",
                                    "text": "led to the establishment of the Canadian EEZ."
                                },
                                {
                                    "letter": "B",
                                    "text": "meant the fishery was well known in Europe."
                                },
                                {
                                    "letter": "C",
                                    "text": "led to fighting between rival fishing fleets."
                                },
                                {
                                    "letter": "D",
                                    "text": "were not immediately publicised, so that English fishermen could benefit."
                                }
                            ],
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 23,
                            "questionText": "The establishment of the Canadian EEZ",
                            "options": [
                                {
                                    "letter": "A",
                                    "text": "did not stop foreign fishermen from fishing the Grand Banks."
                                },
                                {
                                    "letter": "B",
                                    "text": "was not ratified by the United Nations."
                                },
                                {
                                    "letter": "C",
                                    "text": "temporarily stopped the over-fishing of cod in the Grand Banks."
                                },
                                {
                                    "letter": "D",
                                    "text": "meant Canadian fishermen were excluded from fishing the Grand Banks."
                                }
                            ],
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "true-false-not-given",
                    "startQuestion": 24,
                    "endQuestion": 26,
                    "mainInstruction": "Do the following statements agree with the information given in the text?",
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
                            "text": "Even now, cod stocks have shown no signs of recovery in the Grand Banks.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 25,
                            "text": "Initial efforts to extract oil from the Grand Banks’ Hibernia oil field were unsuccessful.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 26,
                            "text": "Oil exploration companies have to follow strict safety controls imposed by the Canadian government.",
                            "correctAnswer": ""
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 14,
                    "questionType": "matching-information",
                    "questionText": "Many countries could legally fish Newfoundland waters because of treaties Newfoundland had made before becoming part of Canada.",
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
                    "questionNumber": 15,
                    "questionType": "matching-information",
                    "questionText": "The establishment of the EEZ did not stop over-fishing in the Grand Banks.",
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
                    "questionNumber": 16,
                    "questionType": "matching-information",
                    "questionText": "Natural disasters could cause oil to destroy what is left of the Grand Banks ecosystem.",
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
                    "questionNumber": 17,
                    "questionType": "matching-information",
                    "questionText": "The original amount of fish in the Grand Banks was due to different temperature waters mixing.",
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
                    "questionNumber": 18,
                    "questionType": "matching-information",
                    "questionText": "East Canadian fishermen were generally happy with the establishment of the Canadian EEZ.",
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
                    "questionNumber": 19,
                    "questionType": "matching-information",
                    "questionText": "Grand Banks’ cod stocks are still 90 per cent lower than what they were in the 1960’s.",
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
                    "questionNumber": 20,
                    "questionType": "matching-information",
                    "questionText": "The French were the first to prepare the cod on board their ships before going back to France.",
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
                    "questionNumber": 21,
                    "questionType": "multiple-choice-full",
                    "questionText": "The first English fishermen to come to the Grand Banks to fish",
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
                    "questionNumber": 22,
                    "questionType": "multiple-choice-full",
                    "questionText": "John Cabot’s reports of the Grand Banks",
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
                    "questionNumber": 23,
                    "questionType": "multiple-choice-full",
                    "questionText": "The establishment of the Canadian EEZ",
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
                    "questionNumber": 24,
                    "questionType": "true-false-not-given",
                    "questionText": "Even now, cod stocks have shown no signs of recovery in the Grand Banks.",
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
                    "questionText": "Initial efforts to extract oil from the Grand Banks’ Hibernia oil field were unsuccessful.",
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
                    "questionText": "Oil exploration companies have to follow strict safety controls imposed by the Canadian government.",
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
            title: "Numeration",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: "One of the first great intellectual feats of a young child is learning how to talk, closely followed by learning how to count. From earliest childhood, we are so bound up with our system of numeration that it is a feat of imagination to consider the problems faced by early humans who had not yet developed this facility. Careful consideration of our system of numeration leads to the conviction that, rather than being a facility that comes naturally to a person, it is one of the great and remarkable achievements of the human race.\n\nIt is impossible to learn the sequence of events that led to our developing the concept of number. Even the earliest of tribes had a system of numeration that, if not advanced, was sufficient for the tasks that they had to perform. Our ancestors had little use for actual numbers; instead, their considerations would have been more of the kind Is this enough? rather than He many? when they were engaged in food gathering, for example. However, when early humans first began to reflect on the nature of things around them, they discovered that they needed an idea of number simply to keep their thoughts in order. As they began to settle, grow plants and herd animals, the need for a sophisticated number system became paramount. It will never be known how and when this numeration ability developed, but it is certain that numeration was well developed by the time humans had formed even semipermanent settlements.\n\nEvidence of early stages of arithmetic and numeration can be readily found. The indigenous peoples of Tasmania were only able to count one, two, many; those of South Africa counted one, two, two and one, two twos, two twos and one, and so on. But in real situations, the number and words are often accompanied by gestures to help resolve any confusion. For example, when using the one, two, many types of system, the word many would mean, Look my hands and see how many fingers 1 am showing you. This basic approach is limited in the range of numbers that it can express, but this range will generally suffice when dealing with the simpler aspects of human existence.\n\nThe lack of ability of some cultures to deal with large numbers is not really surprising. European languages, when traced back to their earlier version, are very poor in number words and expressions. The ancient Gothic word for ten, tachund, is used to express the number 100 as tachund tachund. By the seventh century, the word teon had become interchangeable with the tachund or hund of the Anglo-Saxon language, and so 100 was denoted as hund teontig, or ten times ten. The average person in the seventh century in Europe was not as familiar with numbers as we are today. In fact, to qualify as a witness in a court law a man had to be able to count to nine!\n\nPerhaps the most fundamental step in developing a sense of number is not the ability to count, but rather to see that a number is really an abstract idea instead of a simple attachment to a group of particular objects. It must have been within the grasp of the earliest humans to conceive that four birds are distinct from two birds; however, it is not an elementary step to associate the number 4, as connected with four birds, to the number 4, as connected with four rocks. Associating a number as one of the qualities of a specific object is a great hindrance to the development of a true number sense. When the number 4 can be registered in the mind as a specific word, independent of the object being referenced, the individual is ready to take the first step toward the development of a notational system for numbers and, from there, to arithmetic.\n\nTraces of the very first stages in the development of numeration can be seen in several living languages today. The numeration system of the Tsimshian language in British Columbia contains seven distinct sets of words for numbers according to the class of the item being counted: for counting flat objects and animals, for round objects and time, for people, for long objects and trees, for canoes, for measures, and for counting when no particular object is being numerated. It seems that the last is a later development while the first six groups show the relics of an older system. This diversity of number names can also be found in some widely used languages such as Japanese.\n\nIntermixed with the development of a number sense is the development of an ability to count. Counting is not directly related to the formation of a number concept because it is possible to count by matching the items being counted. against a group of pebbles, grains of corn, or the counter's fingers. These aids would have been indispensable to very early people who would have found the process impossible without some form of mechanical aid. Such aids, while different, are still used even by the most educated in today's society due to their convenience. AII counting ultimately involves reference to something other than the things being counted. At first, it may have been grains or pebbles but now it is a memorised sequence of words that happen to be the names of the numbers.",
            questionGroups: [
                {
                    "groupType": "matching-features",
                    "startQuestion": 27,
                    "endQuestion": 31,
                    "mainInstruction": "Complete each sentence with the correct ending, A-G, below.",
                    "subInstruction": "Select the correct letter, A-G, in boxes 27-31 on your answer sheet.",
                    "featureListTitle": "Sentence Endings",
                    "featureOptions": [
                        {
                            "letter": "A",
                            "text": "was necessary in order to fulfil a civic role."
                        },
                        {
                            "letter": "B",
                            "text": "was necessary when people began farming."
                        },
                        {
                            "letter": "C",
                            "text": "was necessary for the development of arithmetic."
                        },
                        {
                            "letter": "D",
                            "text": "persists in all societies."
                        },
                        {
                            "letter": "E",
                            "text": "was used when the range of number words was restricted."
                        },
                        {
                            "letter": "F",
                            "text": "can be traced back to early European languages."
                        },
                        {
                            "letter": "G",
                            "text": "was a characteristic of early numeration systems."
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 27,
                            "text": "A developed system of numbering",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 28,
                            "text": "An additional hand signal",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 29,
                            "text": "In seventh-century Europe, the ability to count to a certain number",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 30,
                            "text": "Thinking about numbers as concepts separate from physical objects",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 31,
                            "text": "Expressing number differently according to class of item",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "true-false-not-given",
                    "startQuestion": 32,
                    "endQuestion": 40,
                    "mainInstruction": "Do the following statements agree with the information given in the Reading Passage?",
                    "subInstruction": "In boxes 32-40 on your answer sheet, select TRUE, FALSE or NOT GIVEN.",
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
                            "questionNumber": 32,
                            "text": "For the earliest tribes, the concept of sufficiency was more important than the concept of quantity.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 33,
                            "text": "Indigenous Tasmanians used only four terms to indicate numbers of objects.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 34,
                            "text": "Some peoples with simple number systems use body language to prevent misunderstanding of expressions of the number.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 35,
                            "text": "All cultures have been able to express large numbers clearly.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 36,
                            "text": "The word 'thousand' has Anglo-Saxon origins.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 37,
                            "text": "In general, people in seventh-century Europe had poor counting ability.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 38,
                            "text": "In the Tsimshian language, the number for long objects and canoes is expressed with the same word.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 39,
                            "text": "The Tsimshian language contains both older and newer systems of counting.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 40,
                            "text": "Early peoples found it easier to count by using their fingers rather than a group of pebbles.",
                            "correctAnswer": ""
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 27,
                    "questionType": "matching-features",
                    "questionText": "A developed system of numbering",
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
                    "questionNumber": 28,
                    "questionType": "matching-features",
                    "questionText": "An additional hand signal",
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
                    "questionNumber": 29,
                    "questionType": "matching-features",
                    "questionText": "In seventh-century Europe, the ability to count to a certain number",
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
                    "questionNumber": 30,
                    "questionType": "matching-features",
                    "questionText": "Thinking about numbers as concepts separate from physical objects",
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
                    "questionNumber": 31,
                    "questionType": "matching-features",
                    "questionText": "Expressing number differently according to class of item",
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
                    "questionNumber": 32,
                    "questionType": "true-false-not-given",
                    "questionText": "For the earliest tribes, the concept of sufficiency was more important than the concept of quantity.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 33,
                    "questionType": "true-false-not-given",
                    "questionText": "Indigenous Tasmanians used only four terms to indicate numbers of objects.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 34,
                    "questionType": "true-false-not-given",
                    "questionText": "Some peoples with simple number systems use body language to prevent misunderstanding of expressions of the number.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 35,
                    "questionType": "true-false-not-given",
                    "questionText": "All cultures have been able to express large numbers clearly.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 36,
                    "questionType": "true-false-not-given",
                    "questionText": "The word 'thousand' has Anglo-Saxon origins.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 37,
                    "questionType": "true-false-not-given",
                    "questionText": "In general, people in seventh-century Europe had poor counting ability.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 38,
                    "questionType": "true-false-not-given",
                    "questionText": "In the Tsimshian language, the number for long objects and canoes is expressed with the same word.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 39,
                    "questionType": "true-false-not-given",
                    "questionText": "The Tsimshian language contains both older and newer systems of counting.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 40,
                    "questionType": "true-false-not-given",
                    "questionText": "Early peoples found it easier to count by using their fingers rather than a group of pebbles.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "TRUE",
                        "FALSE",
                        "NOT GIVEN"
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

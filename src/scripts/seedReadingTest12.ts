/**
 * Seed Script: Academic Reading Mock Test 12
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest12.ts
 *
 * Passages:
 *   1 - Anxiety (Q1-13)
 *   2 - The Grand Banks (Q14-26)
 *   3 - An Aging Population (Q27-40)
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: ANXIETY
// ═══════════════════════════════════════════════════════════════

const passage1Text = `Anxiety is a common experience that can be a useful motivator or even lifesaver in situations that are objectively dangerous. However, when the anxiety is out of proportion to the danger inherent in a given situation, is persistent and is markedly disabling, an anxiety disorder can be developed.

Anxiety is an emotion that all people experience from time to time, and we do that for very good reasons. It has been built into us; we have inherited it from our evolutionary past, because, in general, anxiety has a survival function. If there is a real danger for a primitive man, then anxiety kicks in in an adaptive way. We freeze, we stop doing whatever we were doing, we devote all of your attention to the danger, and our bodies react with a big release of adrenalin, an increase in blood flow to the muscles, getting us ready to run as fast as we can or fight as fiercely as we can.

So some anxiety is adaptive, not only for primitive man, but in modern society as well. It helps us to focus on things when we have deadlines and, if someone is driving too fast when we cross the road, it helps us to jump out of the way quickly. So, there is nothing wrong with anxiety in general, and in fact, we would have difficulties if we did not experience it to some extent, but of course it can get problematic if the danger is one that is imagined rather than real, or the danger is something that is exaggerated. In those cases, particularly if the perceived danger is out of proportion to the real danger, and it is persistent and disabling, then there is a danger of an anxiety disorder. About 17 per cent of the population will have an anxiety disorder at some stage in their life.

Anxiety can be caused in a variety of different ways, but any mental disorder is always difficult to diagnose. Scientists are looking at what role genes play in the development of these disorders and are also investigating the effects of environmental factors, such as pollution, physical and psychological stress, and diet. Several parts of the brain are key actors in the production of fear and anxiety. Using brain imaging technology and neurochemical techniques, scientists have discovered that the amygdala plays a significant role in most anxiety disorders. By learning more about how the brain creates fear and anxiety, scientists may be able to devise better treatments for these disorders.

Anxiety disorders are a very costly problem in terms of society. Some published figures show that, in the US, it cost $60 billion in one year in terms of lost productivity and in terms of excessive medical investigations that many people with anxiety seek, often thinking they have a physical problem.

Given all of this, it is rather worrying that anxiety also has a rather low treatment-seeking rate. Only 10 per cent of people with an anxiety disorder will seek treatment. That seems to be largely because people do not realise there are effective treatments available. Most people tend to think they have had it for most of their lives, so it is just their personality and they cannot change their personality, and so they feel rather hopeless about it.

The first psychotherapy treatment that was shown to be effective was exposure therapy, which essentially encourages people in a graded way to go into their feared situations and stay in them as long as they can and build up their confidence that way. Often, the therapist will accompany the person to a feared situation to provide support and guidance. Group cognitive behaviour therapy has also been shown to be effective. This is a talking therapy that helps people to understand the link between negative thoughts and mood and how altering their behaviour can enable them to manage anxiety and feel in control.

There are, of course, drugs that can help people with anxiety. Medication will not cure an anxiety disorder, but it can keep it under control while the person receives psychotherapy. The principal medications used for anxiety disorders are antidepressants, anti-anxiety drugs, and beta-blockers to control some of the physical symptoms. With proper treatment, many people with anxiety disorders can lead normal, fulfilling lives.

There is plenty of evidence that exercise can help with anxiety problems. When stress affects the brain, with its many nerve connections, the rest of the body feels the impact as well. Exercise and other physical activity produce endorphins, which are chemicals in the brain that act as natural painkillers. In addition to this, getting physically tired can help people fall asleep faster and have deeper and more relaxing sleep. As many people suffering from anxiety often have problems with insomnia, just the ability to get a good night\u2019s rest can change people\u2019s whole perspectives.

Anxiety is a normal, but highly subjective, human emotion. While normal anxiety serves a beneficial and adaptive purpose, anxiety can also become the cause of tremendous suffering for millions of people. It is important that people recognise excessive anxiety in themselves as soon as possible, as treatment can be very successful and living untreated can be a misery.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: THE GRAND BANKS
// ═══════════════════════════════════════════════════════════════

const passage2Text = `A The Grand Banks is a large area of submerged highlands southeast of Newfoundland and east of the Laurentian Channel on the North American continental shelf. Covering 93,200 square kilometres, the Grand Banks are relatively shallow, ranging from 25 to 100 meters in depth. It is in this area that the cold Labrador Current mixes with the warm waters of the Gulf Stream. The mixing of these waters and the shape of the ocean bottom lifts nutrients to the surface and these conditions created one of the richest fishing grounds in the world. Extensive marine life flourishes in the Grand Banks, whose range extends beyond the Canadian 200-mile exclusive economic zone (EEZ) and into international waters. This has made it an important part of both the Canadian and the high seas fisheries, with fishermen risking their lives in the extremely inhospitable environment consisting of rogue waves, fog, icebergs, sea ice, hurricanes, winter storms and earthquakes.

B While the area\u2019s official discovery is credited to John Cabot in 1497, English and Portuguese vessels are known to have first sought out these waters prior to that, based upon reports they received from earlier Viking voyages to Newfoundland. Several navigators, including Basque fishermen, are known to have fished these waters in the fifteenth century. Some texts from that era refer to a land called Bacalao, \u2018the land of the codfish\u2019, which is possibly Newfoundland. However, it was not until John Cabot noted the water\u2019s abundance of sea life that the existence of these fishing grounds became widely known in Europe. Soon, fishermen and merchants from France, Spain, Portugal and England developed seasonal inshore fisheries producing for European markets. Known as \u2018dry fishery\u2019, cod were split, salted, and dried on shore over the summer before crews returned to Europe. The French pioneered \u2018wet\u2019 or \u2018green\u2019 fishery on the Grand Banks proper around 1550, heavily salting the cod on board and immediately returning home.

C The Grand Banks were possibly the world\u2019s most important international fishing area in the nineteenth and twentieth centuries. Technological advances in fishing, such as sonar and large factory ships, including the massive factory freezer trawlers introduced in the 1950s, led to overfishing and a serious decline in the fish stocks. Based upon the many foreign policy agreements Newfoundland had entered into prior to its admittance into the Canadian Confederation, foreign fleets, some from as far away as Russia, came to the Grand Banks in force, catching unprecedented quantities of fish.

D Between 1973 and 1982, the United Nations and its member states negotiated the Third Convention of the Law of the Sea, one component of which was the concept of nations being allowed to declare an EEZ. Many nations worldwide declared 200-nautical mile EEZs, including Canada and the United States. On the whole, the EEZ was very well received by fishermen in eastern Canada, because it meant they could fish unhindered out to the limit without fear of competing with the foreign fleets. During the late 1970s and early 1980s, Canada\u2019s domestic offshore fleet grew as fishermen and fish processing companies rushed to take advantage. It was during this time that it was noticed that the foreign fleets now pushed out to areas of the Grand Banks off Newfoundland outside the Canadian EEZ. By the late 1980s, dwindling catches of Atlantic cod were being reported throughout Newfoundland and eastern Canada, and the federal government and citizens of coastal regions in the area began to face the reality that the domestic and foreign overfishing had taken its toll. The Canadian government was finally forced to take drastic action in 1992, when a total moratorium was declared indefinitely for the northern cod.

E Over the last ten years, it has been noted that cod appear to be returning to the Grand Banks in small numbers. The reasons for this fragile recovery are still unknown. Perhaps, the damage done by trawlers is not permanent and the marine fauna and ecosystems can rebuild themselves if given a prolonged period of time without any commercial activity. Either way, the early stage recovery of the Grand Banks is encouraging news, but caution is needed, as, after nearly twenty years of severe limitations, cod stocks are still only at approximately ten per cent of 1960s levels. It is hoped that in another ten to twenty years, stocks may be close to a full recovery, although this would require political pressure to maintain strict limitations on commercial fishing. If cod do come back to the Grand Banks in meaningful numbers, it is to be hoped that the Canadians will not make the same mistakes again.

F Further riches have now been found in the Grand Banks. Petroleum reserves have been discovered and a number of oil fields are under development in the region. The vast Hibernia oil field was discovered in 1979, and, following several years of aborted start-up attempts, the Hibernia megaproject began construction of the production platform and gravity base structures in the early 1990s. Production commenced on November 17, 1997, with initial production rates in excess of 50,000 barrels of crude oil per day from a single well. Hibernia has proven to be the most prolific oil well in Canada. However, earthquake and iceberg activity in the Grand Banks pose a potential ecological disaster that could devastate the fishing grounds that are only now starting to recover.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: AN AGING POPULATION
// ═══════════════════════════════════════════════════════════════

const passage3Text = `People are living longer and, in some parts of the world, healthier lives. This represents one of the crowning achievements of the last century, but also a significant challenge. Longer lives must be planned for. Societal aging may affect economic growth and lead to many other issues, including the sustainability of families, the ability of states and communities to provide resources for older citizens, and international relations. The Global Burden of Disease, a study conducted by the World Health Organization, predicts a very large increase in age-related chronic disease in all regions of the world. Dealing with this will be a significant challenge for all countries\u2019 health services.

Population aging is driven by declines in fertility and improvements in health and longevity. In more developed countries, falling fertility beginning in the early 1900s has resulted in current levels being below the population replacement rate of two live births per woman. Perhaps the most surprising demographic development of the past 20 years has been the pace of fertility decline in many less developed countries. In 2006, for example, the total fertility rate was at or below the replacement rate in 44 less developed countries.

One central issue for policymakers in regard to pension funds is the relationship between the official retirement age and actual retirement age. Over several decades in the latter part of the 20th century, many of the more developed nations lowered the official age at which people become fully entitled to public pension benefits. This was propelled by general economic conditions, changes in welfare philosophy, and private pension trends. Despite the recent trend toward increased workforce participation at older ages, a significant gap between official and actual ages of retirement persists. This trend is emerging in rapidly aging developing countries as well. Many countries already have taken steps towards much-needed reform of their old-age social insurance programs. One common reform has been to raise the age at which workers are eligible for full public pension benefits. Another strategy for bolstering economic security for older people has been to increase the contributions by workers. Other measures to enhance income for older people include new financial instruments for private savings, tax incentives for individual retirement savings, and supplemental occupational pension plans.

As life expectancy increases in most nations, so do the odds of different generations within a family coexisting. In more developed countries, this has manifested itself as the \u2018beanpole family\u2019, a vertical extension of family structure characterised by an increase in the number of living generations within a lineage and a decrease in the number of people within each generation. As mortality rates continue to improve, more people in their 50s and 60s will have surviving parents, aunts, and uncles. Consequently, more children will know their grandparents and even their great-grandparents, especially their great-grandmothers. There is no historical precedent for a majority of middle-aged and older adults having living parents.

As the World Health Organisation study, The Global Burden of Disease, predicts that in a few decades the loss of health and life worldwide will be greater from non-communicable or chronic diseases than from infectious diseases, childhood diseases, and accidents. The study estimates that today, noncommunicable diseases account for 85 per cent of the burden of disease in high-income countries and a surprising 44 per cent of the burden of disease in low- and middle-income countries. Noncommunicable diseases already account for as much of the burden of disease in low- and middle-income countries as all communicable diseases, maternal and perinatal conditions, and nutritional conditions. By 2030, according to projections, the share of the burden attributed to noncommunicable diseases in low- and middle-income countries will reach 54 per cent, while the share attributed to communicable diseases will fall to 32 per cent. If we restrict attention to older ages, noncommunicable diseases already account for more than 87 per cent of the burden for the over-60 population in low-, middle-, and high-income countries. The critical issue for low- and middle-income countries is how to mobilise and allocate resources to address non-communicable diseases, as they continue to struggle with the continued high prevalence of communicable diseases.

Of course, a significant jump in disability numbers has accompanied the increase in longevity. Because countries age at different paces, it is possible for the elements of production \u2013 labour and capital \u2013 to flow across national boundaries and mitigate the impact of population aging. Studies predict that, in the near term, surplus capital will flow from Europe and North America to emerging markets in Asia and Latin America, where the population is younger and cheaper and supplies of capital relatively low. In another 20 years, when the baby boom generation in the West has mostly retired, capital will most likely flow in the opposite direction. However, these studies rest on the uncertain assumption that capital will flow easily across national boundaries.

Despite the weight of scientific evidence, the significance of population aging and its global implications have yet to be wholly appreciated. There is a need to raise awareness about not only global aging issues, but also the importance of rigorous cross-national scientific research and policy dialogue that will help us address the challenges and opportunities of an aging world. Preparing financially for longer lives and finding ways to reduce aging-related disability should become national and global priorities. Experience shows that for nations, as for individuals, it is critical to address problems sooner rather than later. Waiting significantly increases the costs and difficulties of addressing these challenges.`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest12 = {
    testId: "READING_ACADEMIC_012",
    testNumber: 12,
    title: "Academic Reading Mock Test 12",
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
        // ║  SECTION 1: ANXIETY (Questions 1-13)                    ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "Anxiety",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: passage1Text,
            questionGroups: [
                // ── Q1-3: MATCHING FEATURES (sentence endings) ──
                {
                    groupType: "matching-features",
                    startQuestion: 1,
                    endQuestion: 3,
                    mainInstruction: "Complete each sentence with the correct ending, A\u2013E, below.",
                    subInstruction: "Write the correct letter, A\u2013E, in boxes 1\u20133 on your answer sheet.",
                    featureListTitle: "Sentence Endings",
                    featureOptions: [
                        { letter: "A", text: "be very beneficial." },
                        { letter: "B", text: "never have to deal with anxiety." },
                        { letter: "C", text: "lead to unhelpful levels of anxiety." },
                        { letter: "D", text: "experience anxiety at some point." },
                        { letter: "E", text: "increase the possibility of physical disease." },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Experiencing small doses of anxiety can", correctAnswer: "A" },
                        { questionNumber: 2, text: "Imagining or exaggerating problems can", correctAnswer: "C" },
                        { questionNumber: 3, text: "Nearly one in five people can", correctAnswer: "D" },
                    ],
                },

                // ── Q4-6: SHORT ANSWER ──
                {
                    groupType: "short-answer",
                    startQuestion: 4,
                    endQuestion: 6,
                    mainInstruction: "Answer the questions below.",
                    subInstruction: "Write NO MORE THAN THREE WORDS AND/OR A NUMBER from the text for each answer. Write your answers in boxes 4\u20136 on your answer sheet.",
                    questions: [
                        { questionNumber: 4, questionText: "Which area of the brain have scientists identified as being significant in anxiety problems?", correctAnswer: "the amygdala" },
                        { questionNumber: 5, questionText: "What proportion of people look for treatment for their anxiety?", correctAnswer: "10 per cent" },
                        { questionNumber: 6, questionText: "What part of themselves do most people blame for their anxiety?", correctAnswer: "their personality" },
                    ],
                },

                // ── Q7-13: NOTE COMPLETION (TABLE) ──
                {
                    groupType: "note-completion",
                    startQuestion: 7,
                    endQuestion: 13,
                    mainInstruction: "Complete the table below.",
                    subInstruction: "Write NO MORE THAN TWO WORDS from the text for each answer. Write your answers in boxes 7\u201313 on your answer sheet.",
                    mainHeading: "Treatment for Anxiety",
                    notesTable: [
                        {
                            title: "Exposure Therapy",
                            rows: [
                                { label: "Method:", content: "Patients face their fears in a 7 __________ fashion, often with their 8 __________" },
                            ],
                        },
                        {
                            title: "Group Cognitive Behaviour Therapy",
                            rows: [
                                { label: "Description:", content: "A talking therapy." },
                                { label: "Focus 1:", content: "Explores the links between 9 __________ and feelings." },
                                { label: "Focus 2:", content: "Explores how changing people\u2019s 10 __________ can help them regain control." },
                            ],
                        },
                        {
                            title: "Drugs",
                            rows: [
                                { label: "Note:", content: "These cannot cure people, but they can help in conjunction with 11 __________." },
                            ],
                        },
                        {
                            title: "Exercise",
                            rows: [
                                { label: "Benefit 1:", content: "By creating 12 __________, the body can help dull the pain of anxiety." },
                                { label: "Benefit 2:", content: "It can allow a good sleep for people who suffer from the 13 __________ caused by their anxiety." },
                            ],
                        },
                    ],
                },
            ],
            questions: [
                // Matching Features / Sentence Endings (Q1-3)
                { questionNumber: 1, questionType: "matching-features", questionText: "Experiencing small doses of anxiety can", options: ["A", "B", "C", "D", "E"], correctAnswer: "A", marks: 1 },
                { questionNumber: 2, questionType: "matching-features", questionText: "Imagining or exaggerating problems can", options: ["A", "B", "C", "D", "E"], correctAnswer: "C", marks: 1 },
                { questionNumber: 3, questionType: "matching-features", questionText: "Nearly one in five people can", options: ["A", "B", "C", "D", "E"], correctAnswer: "D", marks: 1 },
                // Short Answer (Q4-6)
                { questionNumber: 4, questionType: "short-answer", questionText: "Which area of the brain have scientists identified as being significant in anxiety problems?", correctAnswer: "the amygdala", acceptableAnswers: ["the amygdala", "amygdala"], marks: 1 },
                { questionNumber: 5, questionType: "short-answer", questionText: "What proportion of people look for treatment for their anxiety?", correctAnswer: "10 per cent", acceptableAnswers: ["10 per cent", "10%"], marks: 1 },
                { questionNumber: 6, questionType: "short-answer", questionText: "What part of themselves do most people blame for their anxiety?", correctAnswer: "their personality", acceptableAnswers: ["their personality", "personality"], marks: 1 },
                // Note Completion (Q7-13)
                { questionNumber: 7, questionType: "note-completion", questionText: "Patients face their fears in a __________ fashion", correctAnswer: "graded", acceptableAnswers: ["graded"], marks: 1 },
                { questionNumber: 8, questionType: "note-completion", questionText: "often with their __________", correctAnswer: "therapist", acceptableAnswers: ["therapist"], marks: 1 },
                { questionNumber: 9, questionType: "note-completion", questionText: "Links between __________ and feelings", correctAnswer: "negative thoughts", acceptableAnswers: ["negative thoughts"], marks: 1 },
                { questionNumber: 10, questionType: "note-completion", questionText: "Changing people\u2019s __________", correctAnswer: "behaviour", acceptableAnswers: ["behaviour", "behavior"], marks: 1 },
                { questionNumber: 11, questionType: "note-completion", questionText: "Help in conjunction with __________", correctAnswer: "psychotherapy", acceptableAnswers: ["psychotherapy"], marks: 1 },
                { questionNumber: 12, questionType: "note-completion", questionText: "By creating __________", correctAnswer: "endorphins", acceptableAnswers: ["endorphins"], marks: 1 },
                { questionNumber: 13, questionType: "note-completion", questionText: "Suffer from the __________ caused by their anxiety", correctAnswer: "insomnia", acceptableAnswers: ["insomnia"], marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: THE GRAND BANKS (Questions 14-26)           ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "The Grand Banks",
            instructions: "You should spend about 20 minutes on Questions 14\u201326 which are based on Reading Passage 2 below.",
            passage: passage2Text,
            questionGroups: [
                // ── Q14-20: MATCHING INFORMATION ──
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 20,
                    mainInstruction: "The text has 6 paragraphs, A\u2013F. Which paragraph contains the following information?",
                    subInstruction: "Write your answers in boxes 14\u201320 on your answer sheet.",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F"],
                    matchingItems: [
                        { questionNumber: 14, text: "Many countries could legally fish Newfoundland waters because of treaties Newfoundland had made before becoming part of Canada.", correctAnswer: "C" },
                        { questionNumber: 15, text: "The establishment of the EEZ did not stop over-fishing in the Grand Banks.", correctAnswer: "D" },
                        { questionNumber: 16, text: "Natural disasters could cause oil to destroy what is left of the Grand Banks ecosystem.", correctAnswer: "F" },
                        { questionNumber: 17, text: "The original amount of fish in the Grand Banks was due to different temperature waters mixing.", correctAnswer: "A" },
                        { questionNumber: 18, text: "East Canadian fishermen were generally happy with the establishment of the Canadian EEZ.", correctAnswer: "D" },
                        { questionNumber: 19, text: "Grand Banks cod stocks are still 90 per cent lower than what they were in the 1960s.", correctAnswer: "E" },
                        { questionNumber: 20, text: "The French were the first to prepare the cod on board their ships before going back to France.", correctAnswer: "B" },
                    ],
                },

                // ── Q21-23: MULTIPLE CHOICE FULL ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 21,
                    endQuestion: 23,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 21\u201323 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 21,
                            questionText: "The first English fishermen to come to the Grand Banks to fish",
                            options: [
                                { letter: "A", text: "were told about the fishery by Basque fishermen." },
                                { letter: "B", text: "were sent word about the fishery from the first American colonists." },
                                { letter: "C", text: "acted on information from previous Viking expeditions." },
                                { letter: "D", text: "discovered the fishery themselves while exploring." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 22,
                            questionText: "John Cabot\u2019s reports of the Grand Banks",
                            options: [
                                { letter: "A", text: "led to the establishment of the Canadian EEZ." },
                                { letter: "B", text: "meant the fishery was well known in Europe." },
                                { letter: "C", text: "led to fighting between rival fishing fleets." },
                                { letter: "D", text: "were not immediately publicised, so that English fishermen could benefit." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 23,
                            questionText: "The establishment of the Canadian EEZ",
                            options: [
                                { letter: "A", text: "did not stop foreign fishermen from fishing the Grand Banks." },
                                { letter: "B", text: "was not ratified by the United Nations." },
                                { letter: "C", text: "temporarily stopped the over-fishing of cod in the Grand Banks." },
                                { letter: "D", text: "meant Canadian fishermen were excluded from fishing the Grand Banks." },
                            ],
                            correctAnswer: "A",
                        },
                    ],
                },

                // ── Q24-26: TRUE/FALSE/NOT GIVEN ──
                {
                    groupType: "true-false-not-given",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Do the following statements agree with the information given in the text?",
                    subInstruction: "In boxes 24\u201326 on your answer sheet write TRUE, FALSE or NOT GIVEN.",
                    statements: [
                        { questionNumber: 24, text: "Even now, cod stocks have shown no signs of recovery in the Grand Banks.", correctAnswer: "FALSE" },
                        { questionNumber: 25, text: "Initial efforts to extract oil from the Grand Banks Hibernia oil field were unsuccessful.", correctAnswer: "TRUE" },
                        { questionNumber: 26, text: "Oil exploration companies have to follow strict safety controls imposed by the Canadian government.", correctAnswer: "NOT GIVEN" },
                    ],
                },
            ],
            questions: [
                // Matching Information (Q14-20)
                { questionNumber: 14, questionType: "matching-information", questionText: "Many countries could legally fish Newfoundland waters because of treaties Newfoundland had made before becoming part of Canada.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "C", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "The establishment of the EEZ did not stop over-fishing in the Grand Banks.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "D", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "Natural disasters could cause oil to destroy what is left of the Grand Banks ecosystem.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "F", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "The original amount of fish in the Grand Banks was due to different temperature waters mixing.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "A", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "East Canadian fishermen were generally happy with the establishment of the Canadian EEZ.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "D", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "Grand Banks cod stocks are still 90 per cent lower than what they were in the 1960s.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "E", marks: 1 },
                { questionNumber: 20, questionType: "matching-information", questionText: "The French were the first to prepare the cod on board their ships before going back to France.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "B", marks: 1 },
                // Multiple Choice (Q21-23)
                { questionNumber: 21, questionType: "multiple-choice-full", questionText: "The first English fishermen to come to the Grand Banks to fish", correctAnswer: "C", marks: 1 },
                { questionNumber: 22, questionType: "multiple-choice-full", questionText: "John Cabot\u2019s reports of the Grand Banks", correctAnswer: "B", marks: 1 },
                { questionNumber: 23, questionType: "multiple-choice-full", questionText: "The establishment of the Canadian EEZ", correctAnswer: "A", marks: 1 },
                // True/False/Not Given (Q24-26)
                { questionNumber: 24, questionType: "true-false-not-given", questionText: "Even now, cod stocks have shown no signs of recovery in the Grand Banks.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 25, questionType: "true-false-not-given", questionText: "Initial efforts to extract oil from the Grand Banks Hibernia oil field were unsuccessful.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 26, questionType: "true-false-not-given", questionText: "Oil exploration companies have to follow strict safety controls imposed by the Canadian government.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: AN AGING POPULATION (Questions 27-40)       ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "An Aging Population",
            instructions: "You should spend about 20 minutes on Questions 27\u201340 which are based on Reading Passage 3 below.",
            passage: passage3Text,
            questionGroups: [
                // ── Q27-33: NOTE COMPLETION (PASSAGE FORMAT) ──
                {
                    groupType: "note-completion",
                    startQuestion: 27,
                    endQuestion: 33,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Write NO MORE THAN THREE WORDS for each answer. Write your answers in boxes 27\u201333 on your answer sheet.",
                    mainHeading: "An Aging Population",
                    passage: `The longer lives of people of today must be prepared for.\n\nThe longer lives will affect economics, family life, old age care and health services.\n\nThe aging population has been caused by a drop in fertility, improvements in health and 27 __________; the former is surprisingly seen in many 28 __________.\n\nOne key area to consider is the age for retirement benefits to be paid \u2013 this has changed a lot recently in 29 __________, due to various conditions and trends.\n\nA lot of 30 __________ is required in many countries and some have already done this \u2013 usually by raising the official pension age or raising the 31 __________ of people still working.\n\nOther new financial instruments have also been launched.\n\nLonger life expectancy will also lead to different family 32 __________ living with each other more.\n\nThere has been no previous 33 __________ of such a change in family demographics.`,
                },

                // ── Q34-39: YES/NO/NOT GIVEN ──
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 34,
                    endQuestion: 39,
                    mainInstruction: "Do the following statements agree with the views of the writer of the text?",
                    subInstruction: "In boxes 34\u201339 on your answer sheet write YES, NO or NOT GIVEN.",
                    statements: [
                        { questionNumber: 34, text: "It is no shock that low- and middle-income countries have experienced a significant rise in non-communicable diseases.", correctAnswer: "NO" },
                        { questionNumber: 35, text: "While the numbers of people with chronic diseases have increased around the world, the numbers of people with disability problems have reduced.", correctAnswer: "NO" },
                        { questionNumber: 36, text: "It is theorised that money invested short-term in Asia will later be reinvested back in the West.", correctAnswer: "YES" },
                        { questionNumber: 37, text: "It is predicted that problems in the international flow of capital will lead to armed conflict between some countries.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 38, text: "All the effects of population aging around the world have still not been fully realised.", correctAnswer: "YES" },
                        { questionNumber: 39, text: "It would be better to wait a while to see how the situation develops, as fast decisions could create problems in the future.", correctAnswer: "NO" },
                    ],
                },

                // ── Q40: MULTIPLE CHOICE FULL ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 40,
                    endQuestion: 40,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in box 40 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 40,
                            questionText: "What is the writer\u2019s purpose in Reading Passage 3?",
                            options: [
                                { letter: "A", text: "To provide suggestions on how developed countries can deal with their aging populations." },
                                { letter: "B", text: "To provide an overview of the causes and effects of the world\u2019s aging population." },
                                { letter: "C", text: "To provide potential suggestions on how to prevent the world\u2019s aging population from increasing." },
                                { letter: "D", text: "To provide a historical analysis of the causes of today\u2019s aging population." },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
            ],
            questions: [
                // Note Completion (Q27-33)
                { questionNumber: 27, questionType: "note-completion", questionText: "improvements in health and __________", correctAnswer: "longevity", acceptableAnswers: ["longevity"], marks: 1 },
                { questionNumber: 28, questionType: "note-completion", questionText: "surprisingly seen in many __________", correctAnswer: "less developed countries", acceptableAnswers: ["less developed countries", "developing countries"], marks: 1 },
                { questionNumber: 29, questionType: "note-completion", questionText: "changed a lot recently in __________", correctAnswer: "developed nations", acceptableAnswers: ["developed nations", "more developed nations", "developed countries"], marks: 1 },
                { questionNumber: 30, questionType: "note-completion", questionText: "A lot of __________ is required", correctAnswer: "reform", acceptableAnswers: ["reform"], marks: 1 },
                { questionNumber: 31, questionType: "note-completion", questionText: "raising the __________ of people still working", correctAnswer: "contributions", acceptableAnswers: ["contributions"], marks: 1 },
                { questionNumber: 32, questionType: "note-completion", questionText: "different family __________ living with each other", correctAnswer: "generations", acceptableAnswers: ["generations"], marks: 1 },
                { questionNumber: 33, questionType: "note-completion", questionText: "no previous __________ of such a change", correctAnswer: "historical precedent", acceptableAnswers: ["historical precedent", "precedent"], marks: 1 },
                // Yes/No/Not Given (Q34-39)
                { questionNumber: 34, questionType: "yes-no-not-given", questionText: "It is no shock that low- and middle-income countries have experienced a significant rise in non-communicable diseases.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 35, questionType: "yes-no-not-given", questionText: "While the numbers of people with chronic diseases have increased around the world, the numbers of people with disability problems have reduced.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 36, questionType: "yes-no-not-given", questionText: "It is theorised that money invested short-term in Asia will later be reinvested back in the West.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 37, questionType: "yes-no-not-given", questionText: "It is predicted that problems in the international flow of capital will lead to armed conflict between some countries.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 38, questionType: "yes-no-not-given", questionText: "All the effects of population aging around the world have still not been fully realised.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 39, questionType: "yes-no-not-given", questionText: "It would be better to wait a while to see how the situation develops, as fast decisions could create problems in the future.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                // Multiple Choice (Q40)
                { questionNumber: 40, questionType: "multiple-choice-full", questionText: "What is the writer\u2019s purpose in Reading Passage 3?", correctAnswer: "B", marks: 1 },
            ],
        },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest12() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testId: readingTest12.testId });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest12);
            console.log("✅ Reading Test 12 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest12, createdBy: admin._id });
            console.log("✅ Reading Test 12 CREATED successfully!");
        }

        // Verify
        const verify = await ReadingTest.findOne({ testId: readingTest12.testId });
        if (verify) {
            const sections = (verify as any).sections || [];
            console.log("\n📊 Verification:");
            console.log(`   Title: ${(verify as any).title}`);
            console.log(`   Test Number: ${(verify as any).testNumber}`);
            console.log(`   Sections: ${sections.length}`);
            sections.forEach((s: any, i: number) => {
                console.log(`   Section ${i + 1}: ${s.title} | Groups: ${s.questionGroups?.length || 0} | Questions: ${s.questions?.length || 0}`);
            });
            const totalQ = sections.reduce((sum: number, s: any) => sum + (s.questions?.length || 0), 0);
            console.log(`   Total Questions: ${totalQ}`);
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
}

seedReadingTest12();

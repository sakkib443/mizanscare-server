/**
 * Seed Script: Academic Reading Test 01
 * Source: public/mock/mock-01/AC.docx
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest01.ts
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: Hello Happiness!
// ═══════════════════════════════════════════════════════════════

const passage1Text = `Ask 100 people what would make them happy, and a sizable majority would say \u201cwinning the lottery.\u201d Yet, if they won a vast fortune, within a year they would be back to their previous level of happiness. The fact is that money has many uses, but more money does not mean more happiness. Surveys carried out in recent years by leading psychologists and sociologists all confirm that while individuals may increase their material wealth during the course of their lifetime, this has no bearing on their well-being. And what is true for individuals can be applied on a larger scale to the world population. Statistically, wealthier nations do not achieve higher scores on the happiness-ometer than developing or underdeveloped nations. Once the basic criteria of adequate shelter and nutrition are satisfied, increased wealth plays no significant role. So why the obsession with getting rich? The answer, say researchers, is simple. Call it jealousy, competitiveness, or just keeping up with the Joneses, however well we are doing, there is always someone else who is doing better. Just as we acquire a new $25,000 car, our neighbour parks his brand spanking new $40,000 set of wheels in his drive, causing us much consternation, but fueling us with new aspirations in the process. And so, the cycle continues. Money, or material wealth, may be a prime mover, but it is not the foundation of our well-being.

If money isn\u2019t the key to happiness, then what is? In all 44 countries surveyed by a prominent research centre, family life provided the greatest source of satisfaction. Married people live on average three years longer and enjoy greater physical and psychological health than the unmarried and, surprisingly, couples in a cohabitational relationship. Having a family enhances well-being, and spending more time with one\u2019s family helps even more. Social interaction among families, neighbourhoods, workplaces, communities and religious groups correlates strongly with subjective well-being. In fact, the degree of individuals\u2019 social connections is the best benchmark of their happiness.

Friendship is another major factor. Indeed, to return to the dollar-equals-happiness equation, in one survey, having a friend converted into $50,000 worth of happiness, confirms the well-known phenomenon that loneliness can lead to depression. Work is another area central to well-being, and certain features correlate highly with happiness. These include autonomy over how, where, and at what pace work is done, trust between employer and employee, fair treatment, and active participation in the making of decisions. Occupationally, happiness tends to be more common among professionals and managers, that is, people who are in control of the work they do, rather than subservient to their bosses, inequality implies less control for those who are in the weaker position, although there are more risks of losing their privileges for those in the stronger position.

Control of one\u2019s life in general is also key. Happiness is clearly correlated with the presence of favourable events such as promotion or marriage, and the absence of troubles or bad luck such as accidents, being laid off or conflicts. These events on their own signal the success or failure to reach one\u2019s goals, and therefore the control one has. On a national level, the more that governments recognise individual preferences, the happier their citizens will be. Choice, and citizens\u2019 belief that they can affect the political process, increase subjective well-being. Furthermore, evidence exists for an association between unhappiness and poor health: people from underdeveloped countries are among the unhappiest in the world, and their life expectancy has been falling steadily. People are more satisfied in societies which minimally restrict their freedom of action, in other words, where they are in control rather than being controlled. Happy people are characterised by the belief that they are able to control their situation, whereas unhappy people tend to believe that they are a victim of fate. Happy people are also more psychologically resilient, assertive and open to experience.

But how good is the evidence for this alternative viewpoint then \u2013 that happiness, and not financial status, contributes to good health, and long life? A study of nuns, spanning seven decades, supports this theory. Autobiographies written by the nuns in their early 1920s were scored for positive and negative emotions. Nuns expressing the most positive emotions lived on average ten years longer than those expressing the least positive emotions. Happy people, it seems, are much less likely to fall ill and die than unhappy people.

But what must we do to be happy? Experts cite the old maxim \u201cbe happy with what you\u2019ve got.\u201d Look around you, they say, and identify the positive factors in your life. Concentrating on the negative aspects of one\u2019s life is a no-no, and so is worrying. Worrying is a negative thinking habit that is nearly always about something that lies in the future. It stems, apparently, from our cave dwelling days, when we had to think on a day-to-day basis about how and where to find food and warmth, for example. But in the modern world, worrying simply undermines our ability to enjoy life in the present. More often than not, the things we worry about never come to pass anyway. Just as important is not to dwell on the past \u2013 past mistakes, bad experiences, missed opportunities and so on.

What else can we do? Well, engage in a loving relationship with another adult, and work hard to sustain it. Try to plan frequent interactions with your family, friends and neighbours (in that order). Make sure you\u2019re not working so hard that you\u2019ve no time left for personal relationships and leisure. If you are, leave your job voluntarily to become self-employed, but don\u2019t get sacked \u2014 that\u2019s more damaging to well-being than the loss of a spouse, and its effects last longer. In your spare time, join a club, volunteer for community service, or take up religion.

If none of the above works, then vote for a political party with the same agenda as the King of Bhutan, who announced that his nation\u2019s objective is national happiness.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: One Who Hopes
// ═══════════════════════════════════════════════════════════════

const passage2ParaA = `Language lovers, just like music lovers, enjoy variety. For the latter there\u2019s Mozart, The Rolling Stones and Beyonce. For the former there\u2019s English, French, Swahili, Urdu... the list is endless. But what about those poor overworked students who find learning difficult, confusing languages a drudge? Wouldn\u2019t it put a smile on their faces if there were just one simple, easy-to-learn tongue that would cut their study time by years? Well, of course, it exists. It\u2019s called Esperanto, and it\u2019s been around for more than 120 years. Esperanto is the most widely spoken artificially constructed international language. The name derives from Doktoro Esperanto, the pseudonym under which L. L. Zamenhof first published his Unua Libro in 1887. The phrase itself means \u2018one who hopes\u2019. Zamenhof\u2019s goal was to create an easy and flexible language as a universal second language to promote peace and international understanding.`;

const passage2ParaB = `Zamenhof, after ten years of developing his brainchild from the late 1870s to the early 1880s, had the first Esperanto grammar published in Warsaw in July 1887. The number of speakers grew rapidly over the next few decades, at first primarily in the Russian empire and Eastern Europe, then in Western Europe and the Americas, China, and Japan. In the early years, speakers of Esperanto kept in contact primarily through correspondence and periodicals, but since 1905 world congresses have been held on five continents every year except during the two World Wars. Latest estimates for the numbers of Esperanto speakers are around 2 million. Put in percentage terms, that\u2019s about 0.03% of the world\u2019s population \u2013 no staggering figure, comparatively speaking. One reason is that Esperanto has no official status in any country, but it is an optional subject on the curriculum of several state education systems. It is widely estimated that it can be learned in anywhere between a quarter to a twentieth of the time required for other languages.`;

const passage2ParaC = `As a constructed language, Esperanto is not genealogically related to any ethnic language. Whilst it is described as \u2018a language lexically predominantly Romanic\u2019, the phonology, grammar, vocabulary, and semantics are based on the western Indo-European languages. For those of us who are not naturally predisposed to tucking languages under our belts, it is an easy language to learn. It has 5 vowels and 23 consonants. It has one simple way of conjugating all of its verbs. Words are often made from many other roots, making the number of words which one must memorise much smaller. The language is phonetic, and the rules of pronunciation are very simple, so that everyone knows how to pronounce a written word and vice-versa, and word order follows a standard, logical pattern. Through prefixing and suffixing, Esperanto makes it easy to identify words as nouns, verbs, adjectives, adverbs, direct objects and so on, by means of easy-to-spot endings. All this makes for easy language learning. What\u2019s more, several research studies demonstrate that studying Esperanto before another foreign language speeds up and improves the learning of the other language. This is presumably because learning subsequent foreign languages is easier than learning one\u2019s first, while the use of a grammatically simple and culturally flexible language like Esperanto softens the blow of learning one\u2019s first foreign language. In one study, a group of European high school students studied Esperanto for one year, then French for three years, and ended up with a significantly better command of French than a control group who had studied French for all four years.`;

const passage2ParaD = `Needless to say, the language has its critics. Some point to the Eastern European features of the language as being harsh and difficult to pronounce, and argue that Esperanto has an artificial feel to it, without the flow of a natural tongue, and that by nature of its artificiality, it is impossible to become emotionally involved with the language. Others cite its lack of cultural history, indigenous literature \u2013 \u201cno one has ever written a novel straight into Esperanto\u201d \u2013 together with its minimal vocabulary and its inability to express all the necessary philosophical, emotional and psychological concepts.`;

const passage2ParaE = `The champions of Esperanto \u2013 Esperantists \u2013 disagree. They claim that it is a language in which a great body of world literature has appeared in translation: in poetry, novels, literary journals, and, to rebut the accusation that it is not a \u2018real\u2019 language, point out that it is frequently used at international meetings which draw hundreds and thousands of participants. Moreover, on an international scale, it is most useful \u2013 and fair \u2013 for neutral communication. That means that communication through Esperanto does not give advantages to the members of any particular people or culture, but provides an ethos of equality of rights, tolerance and true internationalism.`;

const passage2ParaF = `Esperantists further claim that Esperanto has the potential \u2013 were it universally taught for a year or two throughout the world \u2013 to empower ordinary people to communicate effectively worldwide on a scale that far exceeds that which is attainable today by only the most linguistically brilliant among us. It offers the opportunity to improve communication in business, diplomacy, scholarship and other fields so that those who speak many different native languages will be able to participate fluently in international conferences and chat comfortably with each other after the formal presentations are made. Nowadays that privilege is often restricted to native speakers of English and those who have special talents and opportunities for learning English as a foreign language.`;

const passage2ParaG = `What Esperanto does offer in concrete terms is the potential of saving billions of dollars which are now being spent on translators and interpreters, billions which would be freed up to serve the purposes of governments and organisations that spend so much of their resources to change words from one language into the words of others. Take, for example, the enormously costly conferences, meetings and documentation involved in the European Union parliamentary and administrative procedures \u2013 all funded, essentially, by tax payers. And instead of the World Health Organisation, and all NGOs for that matter, devoting enormous sums to provide interpreters and translations, they would be able to devote those huge amounts of money to improving the health of stricken populations throughout the world.`;

const passage2Text = `A  ${passage2ParaA}

B  ${passage2ParaB}

C  ${passage2ParaC}

D  ${passage2ParaD}

E  ${passage2ParaE}

F  ${passage2ParaF}

G  ${passage2ParaG}`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: LONG-TERM FORECAST: HOT AND DRY
// ═══════════════════════════════════════════════════════════════

const passage3ParaA = `Melting land ice in the Arctic is set to cause a global rise in sea levels, leading to disastrous effects for both man and wildlife. Many species worldwide are threatened with extinction, and low-lying islands and land masses will disappear entirely. But the havoc wreaked by the effect of greenhouse gases won\u2019t be confined to just too much water, but the absence of it, as well. In other words, desertification. A decrease in the total amount of rainfall in arid and semi-arid areas could increase the total area of drylands worldwide, and thus the total amount of land potentially at risk from desertification.`;

const passage3ParaB = `Desertification is officially recognised as land degradation in arid, semi-arid and dry sub-humid areas resulting from various factors including climatic variations and human activities. This degradation of formerly productive land is a complex process. It involves multiple causes, and it proceeds at varying rates in different climates. Desertification may intensify a general climatic trend, or initiate a change in local climate, both leading towards greater aridity. The more arid conditions associated with desertification accelerate the depletion of vegetation and soils. Land degradation occurs all over the world, but it is only referred to as desertification when it takes place in drylands. This is because these areas are especially prone to more permanent damage as different areas of degraded land spread and merge together to form desert-like conditions.`;

const passage3ParaC = `Global warming brought about by increasing greenhouse gas levels in the atmosphere is expected to increase the variability of weather conditions and extreme events. Many dryland areas face increasingly low and erratic rainfalls, coupled with soil erosion by wind and the drying-up of water resources through increased regional temperatures. Deforestation can also reduce rainfall in certain areas, increasing the threat of desertification. It is not yet possible, despite sophisticated technology, to identify with an acceptable degree of reliability those parts of the Earth where desertification will occur. Existing drylands, which cover over 40% of the total land area of the world, most significantly in Africa and Asia, will probably be most at risk from climate change. These areas already experience low rainfall, and any that falls is usually in the form of short, erratic, high-intensity storms. In addition, such areas also suffer from land degradation due to over-cultivation, overgrazing, deforestation and poor irrigation practices.`;

const passage3ParaD = `It is a misconception that droughts cause desertification. Droughts are common in arid and semi-arid lands. Well-managed lands can recover from drought when the rains return. Continued land abuse during droughts, however, increases land degradation. Nor does desertification occur in linear, easily definable patterns. Deserts advance erratically, forming patches on their borders. Areas far from natural deserts can degrade quickly to barren soil, rock, or sand through poor land management. The presence of a nearby desert has no direct relationship to desertification. Unfortunately, an area undergoing desertification is brought to public attention only after the process is well underway. Often little or no data are available to indicate the previous state of the ecosystem or the rate of degradation. Scientists still question whether desertification, as a process of global change, is permanent or how and when it can be halted or reversed.`;

const passage3ParaE = `But desertification will not be limited to the drylands of Africa and Asia. According to the environmental organisation Greenpeace, the Mediterranean will suffer substantially, too. If current trends in emissions of greenhouse gases continue, global temperatures are expected to rise faster over the next century than over any time during the last 10,000 years. Significant uncertainties surround predictions of regional climate changes, but it is likely that the Mediterranean region will also warm significantly, increasing the frequency and severity of droughts across the region. As the world warms, global sea levels will rise as oceans expand and glaciers melt. Around much of the Mediterranean basin, sea levels could rise by close to 1m by 2100. As a result, some low-lying coastal areas would be lost through flooding or erosion, while rivers and coastal aquifers would become more salty. The worst affected areas will be the Nile Delta, Venice in Italy and Thessaloniki in Greece, two major cities where local subsidence means that sea levels could rise by at least one-and-a-half times as much as elsewhere.`;

const passage3ParaF = `The consequences of all this, says Greenpeace, are far-reaching, and the picture is a gloomy one. Livestock production would suffer due to a deterioration in the quality of rangeland. Yields of grains and other crops could decrease substantially across the Mediterranean region due to increased frequency of drought. Crop production would be further threatened by increases in competition for water and the prevalence of pests and diseases and land loss through desertification and sea-level rise. The combination of heat and pollution would lead to an upsurge in respiratory illness among urban populations, while extreme weather events could increase death and injury rates. Water shortages and damaged infrastructure would increase the risk of cholera and dysentery, while higher temperatures would increase the incidence of infectious diseases, such as malaria and dengue fever. Serious social disruption could occur as millions are forced from their homelands as a result of desertification, poor harvests and sea-level rise, while international disputes over shared water resources could turn into conflict.`;

const passage3ParaG = `Future climate change could critically undermine efforts for sustainable development in the Mediterranean region through its impacts on the environment and social and economic well-being. While in many respects climate change exacerbates existing problems instead of creating new ones, the sheer magnitude of the potential problem means it cannot be ignored. There is some scope for adaptation, but the fact that many measures would be beneficial irrespective of climate change suggests that radical changes in our policies and practices will be needed. It is also vital that developed countries meet their obligations to assist adaptation in developing countries through access to know-how and financial assistance. Ultimately, however, the long-term sustainability of the Mediterranean region requires keeping climate change within tolerable bounds. Current understanding of safe limits points to the need for prompt international agreement \u2013 and action \u2013 to make the drastic cuts in emissions of greenhouse gases required to stabilise atmospheric concentrations of these gases.`;

const passage3Text = `A  ${passage3ParaA}

B  ${passage3ParaB}

C  ${passage3ParaC}

D  ${passage3ParaD}

E  ${passage3ParaE}

F  ${passage3ParaF}

G  ${passage3ParaG}`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest01 = {
    testId: "READING_AC_01_376",
    testNumber: 1,
    title: "Academic Reading Mock Test 01",
    description: "Academic Reading Test with 3 passages and 40 questions",
    source: "Academic Reading Practice",
    testType: "academic" as const,
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: Hello Happiness! (Questions 1-13)           ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "Hello Happiness!",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: passage1Text,
            questionGroups: [
                // ── Q1-3: CHOOSE THREE LETTERS A-H ──
                {
                    groupType: "choose-two-letters",
                    startQuestion: 1,
                    endQuestion: 3,
                    mainInstruction: "Choose THREE letters A-H. Circle the correct letters, A-H, below.",
                    subInstruction: "NB: Your answers may be given in any order.",
                    questionSets: [
                        {
                            questionNumbers: [1, 2, 3],
                            questionText: "Which THREE of the following statements are true, according to the text?",
                            options: [
                                { letter: "A", text: "Money can bring misery." },
                                { letter: "B", text: "Wealthier nations place more emphasis on happiness than poorer ones." },
                                { letter: "C", text: "Securing a place to live is a basic human need." },
                                { letter: "D", text: "The desire for social status is a global phenomenon." },
                                { letter: "E", text: "An unmarried couple living together is less likely to be happy than a married couple." },
                                { letter: "F", text: "The less responsibility one has, the happier one is." },
                                { letter: "G", text: "Involvement in policy-making can increase well-being." },
                                { letter: "H", text: "Our prehistoric ancestors were happier than we are." }
                            ],
                            correctAnswers: ["C", "E", "G"]
                        }
                    ]
                },

                // ── Q4-7: SUMMARY WITH OPTIONS ──
                {
                    groupType: "summary-with-options",
                    startQuestion: 4,
                    endQuestion: 7,
                    mainInstruction: "Complete the summary using the list of words, A-I, below.",
                    subInstruction: "Write the correct letter, A-I, for the questions 4-7 on your answer sheet.",
                    phraseList: [
                        { letter: "A", text: "episode" },
                        { letter: "B", text: "interaction" },
                        { letter: "C", text: "cooperation" },
                        { letter: "D", text: "control" },
                        { letter: "E", text: "number" },
                        { letter: "F", text: "level" },
                        { letter: "G", text: "course" },
                        { letter: "H", text: "conflict" },
                        { letter: "I", text: "limit" }
                    ],
                    summarySegments: [
                        { type: "text", content: "Money can buy you just about anything, but not, it seems happiness. Whether on a personal or national " },
                        { type: "blank", questionNumber: 4, correctAnswer: "F" },
                        { type: "text", content: ", your bank balance won\u2019t make you happier. Once the basic criteria of a roof over your head and food on the table have been met, money ceases to play a part. One of the most important factors in achieving happiness is the extent of our social " },
                        { type: "blank", questionNumber: 5, correctAnswer: "B" },
                        { type: "text", content: " \u2013 our relationships with family, friends, colleagues, and so on. Equally important is the amount of " },
                        { type: "blank", questionNumber: 6, correctAnswer: "D" },
                        { type: "text", content: " we have, either in our personal life, working life, or even in our ability to influence the political " },
                        { type: "blank", questionNumber: 7, correctAnswer: "G" },
                        { type: "text", content: " that our country embarks on." }
                    ]
                },

                // ── Q8-13: TRUE / FALSE / NOT GIVEN ──
                {
                    groupType: "true-false-not-given",
                    startQuestion: 8,
                    endQuestion: 13,
                    mainInstruction: "Do the following statements agree with the information given in the Reading Passage?",
                    subInstruction: "For the questions (8-13) on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 8, text: "People from underdeveloped nations try to attain the same standard of living as those from developed nations.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 9, text: "Seeing what others have makes people want to have it too.", correctAnswer: "TRUE" },
                        { questionNumber: 10, text: "The larger the family is, the happier the parents will probably be.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 11, text: "One\u2019s attitude to life has no influence on one\u2019s health.", correctAnswer: "FALSE" },
                        { questionNumber: 12, text: "Instinct can be a barrier to happiness.", correctAnswer: "TRUE" },
                        { questionNumber: 13, text: "Family and friends rank equally as sources of happiness.", correctAnswer: "FALSE" }
                    ]
                }
            ],
            questions: [
                { questionNumber: 1, questionType: "choose-two-letters", questionText: "Which THREE statements are true? (Answer 1 of 3)", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "C", marks: 1 },
                { questionNumber: 2, questionType: "choose-two-letters", questionText: "Which THREE statements are true? (Answer 2 of 3)", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "E", marks: 1 },
                { questionNumber: 3, questionType: "choose-two-letters", questionText: "Which THREE statements are true? (Answer 3 of 3)", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "G", marks: 1 },
                { questionNumber: 4, questionType: "summary-with-options", questionText: "on a personal or national __________", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "F", marks: 1 },
                { questionNumber: 5, questionType: "summary-with-options", questionText: "the extent of our social __________", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "B", marks: 1 },
                { questionNumber: 6, questionType: "summary-with-options", questionText: "the amount of __________ we have", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "D", marks: 1 },
                { questionNumber: 7, questionType: "summary-with-options", questionText: "the political __________ our country embarks on", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "G", marks: 1 },
                { questionNumber: 8, questionType: "true-false-not-given", questionText: "People from underdeveloped nations try to attain the same standard of living as those from developed nations.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 9, questionType: "true-false-not-given", questionText: "Seeing what others have makes people want to have it too.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 10, questionType: "true-false-not-given", questionText: "The larger the family is, the happier the parents will probably be.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "One\u2019s attitude to life has no influence on one\u2019s health.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "Instinct can be a barrier to happiness.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "Family and friends rank equally as sources of happiness.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 }
            ]
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: One Who Hopes (Questions 14-26)             ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "One Who Hopes",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: passage2Text,
            paragraphs: [
                { label: "A", text: passage2ParaA },
                { label: "B", text: passage2ParaB },
                { label: "C", text: passage2ParaC },
                { label: "D", text: passage2ParaD },
                { label: "E", text: passage2ParaE },
                { label: "F", text: passage2ParaF },
                { label: "G", text: passage2ParaG }
            ],
            questionGroups: [
                // ── Q14-19: MATCHING HEADINGS ──
                {
                    groupType: "matching-headings",
                    startQuestion: 14,
                    endQuestion: 19,
                    mainInstruction: "Reading Passage 2 has seven paragraphs, A - G.",
                    subInstruction: "Choose the correct heading for paragraphs B - G from the list of headings below. Write the correct number i - ix in spaces 14-19 below.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "A non-exclusive language" },
                        { numeral: "ii", text: "A cost-effective solution" },
                        { numeral: "iii", text: "Language is personal" },
                        { numeral: "iv", text: "What\u2019s fashionable in language" },
                        { numeral: "v", text: "From the written word to the spoken word" },
                        { numeral: "vi", text: "A real language" },
                        { numeral: "vii", text: "Harmony through language" },
                        { numeral: "viii", text: "The mechanics of a language" },
                        { numeral: "ix", text: "Lost in translation" }
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "vii" }
                    ],
                    matchingItems: [
                        { questionNumber: 14, text: "Paragraph B", correctAnswer: "v" },
                        { questionNumber: 15, text: "Paragraph C", correctAnswer: "viii" },
                        { questionNumber: 16, text: "Paragraph D", correctAnswer: "iii" },
                        { questionNumber: 17, text: "Paragraph E", correctAnswer: "vi" },
                        { questionNumber: 18, text: "Paragraph F", correctAnswer: "i" },
                        { questionNumber: 19, text: "Paragraph G", correctAnswer: "ii" }
                    ]
                },

                // ── Q20-22: MULTIPLE CHOICE FULL ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 20,
                    endQuestion: 22,
                    mainInstruction: "Choose the correct letter A, B, C or D.",
                    mcQuestions: [
                        {
                            questionNumber: 20,
                            questionText: "What advantage is there to learning Esperanto as one\u2019s first foreign language?",
                            options: [
                                { letter: "A", text: "Its pronunciation rules follow those of most European languages." },
                                { letter: "B", text: "There are no grammar rules to learn." },
                                { letter: "C", text: "It can make the learning of other foreign languages less complicated." },
                                { letter: "D", text: "Its verbs are not conjugated." }
                            ],
                            correctAnswer: "C"
                        },
                        {
                            questionNumber: 21,
                            questionText: "What do its critics say of Esperanto?",
                            options: [
                                { letter: "A", text: "It is only used in artificial situations." },
                                { letter: "B", text: "It requires emotional involvement." },
                                { letter: "C", text: "It cannot translate works of literature." },
                                { letter: "D", text: "It lacks depth of expression." }
                            ],
                            correctAnswer: "D"
                        },
                        {
                            questionNumber: 22,
                            questionText: "How could Esperanto help on a global level?",
                            options: [
                                { letter: "A", text: "It would eliminate the need for conferences." },
                                { letter: "B", text: "More aid money would reach those who need it." },
                                { letter: "C", text: "The world population would be speaking only one language." },
                                { letter: "D", text: "More funds could be made available for learning foreign languages." }
                            ],
                            correctAnswer: "B"
                        }
                    ]
                },

                // ── Q23-26: YES / NO / NOT GIVEN ──
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 23,
                    endQuestion: 26,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 2?",
                    subInstruction: "In spaces 23-26 below, write YES if the statement agrees with the views of the writer, NO if the statement contradicts the views of the writer, NOT GIVEN if it is impossible to say what the writer thinks about this.",
                    statements: [
                        { questionNumber: 23, text: "Supporters of Esperanto say it gives everyone an equal voice.", correctAnswer: "YES" },
                        { questionNumber: 24, text: "Esperanto is the only artificially-constructed language.", correctAnswer: "NO" },
                        { questionNumber: 25, text: "Esperanto can be learned as part of a self-study course.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 26, text: "Esperanto can be used equally in formal and casual situations.", correctAnswer: "YES" }
                    ]
                }
            ],
            questions: [
                { questionNumber: 14, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "v", marks: 1 },
                { questionNumber: 15, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "viii", marks: 1 },
                { questionNumber: 16, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "iii", marks: 1 },
                { questionNumber: 17, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "vi", marks: 1 },
                { questionNumber: 18, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "i", marks: 1 },
                { questionNumber: 19, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix"], correctAnswer: "ii", marks: 1 },
                { questionNumber: 20, questionType: "multiple-choice-full", questionText: "What advantage is there to learning Esperanto as one\u2019s first foreign language?", correctAnswer: "C", marks: 1 },
                { questionNumber: 21, questionType: "multiple-choice-full", questionText: "What do its critics say of Esperanto?", correctAnswer: "D", marks: 1 },
                { questionNumber: 22, questionType: "multiple-choice-full", questionText: "How could Esperanto help on a global level?", correctAnswer: "B", marks: 1 },
                { questionNumber: 23, questionType: "yes-no-not-given", questionText: "Supporters of Esperanto say it gives everyone an equal voice.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 24, questionType: "yes-no-not-given", questionText: "Esperanto is the only artificially-constructed language.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 25, questionType: "yes-no-not-given", questionText: "Esperanto can be learned as part of a self-study course.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 26, questionType: "yes-no-not-given", questionText: "Esperanto can be used equally in formal and casual situations.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 }
            ]
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: LONG-TERM FORECAST: HOT AND DRY (Q27-40)    ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "LONG-TERM FORECAST: HOT AND DRY",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: passage3Text,
            paragraphs: [
                { label: "A", text: passage3ParaA },
                { label: "B", text: passage3ParaB },
                { label: "C", text: passage3ParaC },
                { label: "D", text: passage3ParaD },
                { label: "E", text: passage3ParaE },
                { label: "F", text: passage3ParaF },
                { label: "G", text: passage3ParaG }
            ],
            questionGroups: [
                // ── Q27-32: FLOW-CHART COMPLETION ──
                {
                    groupType: "flow-chart-completion",
                    startQuestion: 27,
                    endQuestion: 32,
                    mainInstruction: "Complete the flow-chart below.",
                    subInstruction: "Write NO MORE THAN THREE WORDS for each answer.",
                    flowchartStages: [
                        {
                            label: "productive land",
                            lines: [
                                { segments: [{ type: "text", content: "productive land" }] }
                            ]
                        },
                        {
                            label: "degradation proceeds",
                            lines: [
                                {
                                    segments: [
                                        { type: "text", content: "degradation proceeds at " },
                                        { type: "blank", questionNumber: 27, width: 180 },
                                        { type: "text", content: " \u2014 multiple causes" }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "DESERTIFICATION",
                            lines: [
                                { segments: [{ type: "text", content: "DESERTIFICATION" }] },
                                {
                                    segments: [
                                        { type: "blank", questionNumber: 28, width: 140 },
                                        { type: "text", content: " a climate trend" }
                                    ]
                                },
                                {
                                    segments: [
                                        { type: "blank", questionNumber: 29, width: 140 },
                                        { type: "text", content: " a change in climate" }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "resulting in greater",
                            lines: [
                                {
                                    segments: [
                                        { type: "text", content: "resulting in greater " },
                                        { type: "blank", questionNumber: 30, width: 150 }
                                    ]
                                }
                            ]
                        },
                        {
                            label: "depletion",
                            lines: [
                                {
                                    segments: [
                                        { type: "text", content: "depletion of " },
                                        { type: "blank", questionNumber: 31, width: 150 },
                                        { type: "text", content: " and depletion of " },
                                        { type: "blank", questionNumber: 32, width: 150 }
                                    ]
                                }
                            ]
                        }
                    ]
                },

                // ── Q33-36: MATCHING INFORMATION ──
                {
                    groupType: "matching-information",
                    startQuestion: 33,
                    endQuestion: 36,
                    mainInstruction: "Reading Passage 3 has seven paragraphs, A - G.",
                    subInstruction: "Which paragraph contains the following information? Write the correct letter A - G in spaces 33 - 36 below.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    matchingItems: [
                        { questionNumber: 33, text: "Human intervention is a potential solution to potential disaster.", correctAnswer: "G" },
                        { questionNumber: 34, text: "The rate of climate change is set to accelerate dramatically.", correctAnswer: "E" },
                        { questionNumber: 35, text: "There is seldom enough information available in some areas to track how fast the effects of climate change have happened in the past.", correctAnswer: "D" },
                        { questionNumber: 36, text: "Desertification is attributable to a number of factors.", correctAnswer: "B" }
                    ]
                },

                // ── Q37-40: SUMMARY WITH OPTIONS ──
                {
                    groupType: "summary-with-options",
                    startQuestion: 37,
                    endQuestion: 40,
                    mainInstruction: "Complete the summary with the list of words A - I below.",
                    subInstruction: "Write the correct letter A - I in spaces 37-40 below.",
                    phraseList: [
                        { letter: "A", text: "Irrigation" },
                        { letter: "B", text: "Cooling" },
                        { letter: "C", text: "Drylands" },
                        { letter: "D", text: "Cause" },
                        { letter: "E", text: "Loss" },
                        { letter: "F", text: "Abuse" },
                        { letter: "G", text: "Desertification" },
                        { letter: "H", text: "Deserts" },
                        { letter: "I", text: "Emission" }
                    ],
                    summarySegments: [
                        { type: "text", content: "Climate change may have catastrophic effects on the human and animal world. As glaciers melt, sea levels will rise, causing extensive flooding and land " },
                        { type: "blank", questionNumber: 37, correctAnswer: "E" },
                        { type: "text", content: ". Another consequence of global warming is " },
                        { type: "blank", questionNumber: 38, correctAnswer: "G" },
                        { type: "text", content: ", which affects areas known as " },
                        { type: "blank", questionNumber: 39, correctAnswer: "C" },
                        { type: "text", content: ". These areas are subject to irregular weather patterns, but also suffer from human intervention or neglect, such as inadequate or inefficient " },
                        { type: "blank", questionNumber: 40, correctAnswer: "A" },
                        { type: "text", content: " systems." }
                    ]
                }
            ],
            questions: [
                { questionNumber: 27, questionType: "flow-chart-completion", questionText: "degradation proceeds at __________", correctAnswer: "varying rates", acceptableAnswers: ["varying rates"], marks: 1 },
                { questionNumber: 28, questionType: "flow-chart-completion", questionText: "__________ a climate trend", correctAnswer: "intensify", acceptableAnswers: ["intensify"], marks: 1 },
                { questionNumber: 29, questionType: "flow-chart-completion", questionText: "__________ a change in climate", correctAnswer: "initiate", acceptableAnswers: ["initiate"], marks: 1 },
                { questionNumber: 30, questionType: "flow-chart-completion", questionText: "resulting in greater __________", correctAnswer: "aridity", acceptableAnswers: ["aridity"], marks: 1 },
                { questionNumber: 31, questionType: "flow-chart-completion", questionText: "depletion of __________", correctAnswer: "vegetation", acceptableAnswers: ["vegetation"], marks: 1 },
                { questionNumber: 32, questionType: "flow-chart-completion", questionText: "depletion of __________", correctAnswer: "soils", acceptableAnswers: ["soils"], marks: 1 },
                { questionNumber: 33, questionType: "matching-information", questionText: "Human intervention is a potential solution to potential disaster.", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "G", marks: 1 },
                { questionNumber: 34, questionType: "matching-information", questionText: "The rate of climate change is set to accelerate dramatically.", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                { questionNumber: 35, questionType: "matching-information", questionText: "There is seldom enough information available in some areas to track how fast the effects of climate change have happened in the past.", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
                { questionNumber: 36, questionType: "matching-information", questionText: "Desertification is attributable to a number of factors.", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
                { questionNumber: 37, questionType: "summary-with-options", questionText: "flooding and land __________", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "E", marks: 1 },
                { questionNumber: 38, questionType: "summary-with-options", questionText: "Another consequence of global warming is __________", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "G", marks: 1 },
                { questionNumber: 39, questionType: "summary-with-options", questionText: "areas known as __________", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "C", marks: 1 },
                { questionNumber: 40, questionType: "summary-with-options", questionText: "inadequate or inefficient __________ systems", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "A", marks: 1 }
            ]
        }
    ]
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest01() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        const existing = await ReadingTest.findOne({ testNumber: readingTest01.testNumber });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest01);
            console.log("✅ Reading Test 01 UPDATED successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest01, createdBy: admin._id });
            console.log("✅ Reading Test 01 CREATED successfully!");
        }

        const verify = await ReadingTest.findOne({ testId: readingTest01.testId });
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

seedReadingTest01();

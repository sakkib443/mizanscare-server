import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_TEST_10",
    testNumber: 10,
    title: "Reading Mock Test 10 - Academic",
    description: "IELTS Academic Reading Test featuring passages on India's Modern Women",
    source: "IELTS Practice Test",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══ SECTION 1: India's Modern Women (Q1-13) ═══
        {
            sectionNumber: 1,
            title: "India\u2019s Modern Women",
            passage: `The country\u2019s younger generation is shedding submissive attitudes, wants careers, and longs for wealth. And marketers are paying attention. When the first American music videos and popular TV shows began appearing in Indian homes in the early 1990s thanks to satellite and cable, many pundits predicted Indian society would never be the same. For the first time, female viewers saw independent, successful women and fun, sensitive guys. Sex and divorce were openly discussed in these TV imports and couples kissed passionately \u2013 then still a taboo in Indian TV shows and movies.\n\nIndeed, the impact on younger generations of Indian women has been profound. Whereas Indian women traditionally have been submissive to parents and husbands and valued frugality and modesty, a number of sociological studies show that young Indian females now prize financial independence, freedom to decide when to marry and have children, and glamorous careers. A generation back, women would sacrifice themselves and believed in saving. Today, it is spend, spend, spend. It is OK for a woman to want something for herself, and people will accept it if she goes out into a man\u2019s world making a statement.\n\nBecause today\u2019s young women are the key consumer group of tomorrow, these shifts have big implications for marketing companies. And the trends come out clearly in two recent studies. One study examined 3,400 unmarried women aged 19-22 of different income and social levels. Altogether, the project involved 40 focus groups in five large urban areas and five smaller cities. In some cases, the researchers lived with the women for a while to study them more closely. The researchers supplemented this data with interviews of journalists, teachers, and psychologists.\n\nAmong the findings:\n\nGuilt-free materialism. 51% of young single women in major urban areas say it is necessary to have a big house and big car to be happy. In smaller cities, 86% agreed with this statement. This shows that the less women have, the greater are their aspirations. One woman interviewed was making just $200 a year but said she wants to own a jet plane. A typical comment in recent interviews was, \u2018I want money, fame, and success.\u2019\n\nParental ties. Traditionally, parents regarded girls as somebody else\u2019s future property. They arranged marriages for their daughters, and then the daughters would go away and take care of their in-laws, so parents needed and doted on sons. However, today\u2019s young women are rebelling against that. 67% say they plan to take care of their parents into their old age \u2013 and that means they need money. The company Unilever played on that sentiment with a recent controversial \u2013 but successful \u2013 ad for its Fair and Lovely line of beauty products. A daughter came home and found that her parents had no sugar for coffee because they couldn\u2019t afford it. She became an airline hostess after using the Fair and Lovely products to make her beautiful. She then visited her parents and took them to a first-class restaurant.\n\nMarital freedom. Now, many women say they will marry when ready \u2013 not when their parents decide to marry them off. 65% say dating is essential, and they also want to become financially independent before they marry. 76% say they want to maintain that independence afterwards. 60% say they will decide how to spend their own salaries. What is more, 76% say they will decide when to have children. They now regard this as the woman\u2019s decision completely. In big metro areas, 24% say they never want children, and that number reaches 40% in smaller cities.\n\nIndividualism. Female role models in Indian culture used to personify perfection. Now, 62% of girls say it is OK if they have faults and that people see them. They do not want to be seen as Mrs. Perfect. Popular TV role models are like Phoebe in \u2018Friends\u2019 \u2013 women who commit blunders.\n\nCareerism. A decade ago, most young women saw themselves as housewives. After that, most said they wanted to be teachers or doctors. If they had a profession at all, it had to be a noble cause. Now, it is about glamour, money, and fame. A surprising 45% of young single females say they would like to be journalists. This may be because prominent female Indian journalists, especially TV reporters, are seen as very glamorous. Another 39% say they would like to be managers, 38% are interested in design, and 20% think they want to be teachers. Interestingly, 13% say they would like to be in the military. The percentage of those saying they want to be a full-time housewife is minuscule.\n\nModern husbands. The relationship with the husband used to be one of awe. Now, women want a partner and a relationship of equals. A recent Whirlpool ad shows a man washing the family clothes before his wife comes home from work, while a Samsung home appliance ad shows a husband and wife cooking together.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 1-13",
            questionGroups: [
                // Q1-4: Matching Findings
                {
                    groupType: "matching-features",
                    startQuestion: 1,
                    endQuestion: 4,
                    mainInstruction: "The text refers to 6 main findings when young Indian women were surveyed. Which finding contains each of the following pieces of information?",
                    subInstruction: "",
                    featureListTitle: "List of Findings",
                    featureOptions: [
                        { letter: "A", text: "Guilt-free materialism" },
                        { letter: "B", text: "Parental ties" },
                        { letter: "C", text: "Marital freedom" },
                        { letter: "D", text: "Individualism" },
                        { letter: "E", text: "Careerism" },
                        { letter: "F", text: "Modern husbands" },
                    ],
                    paragraphOptions: ["A", "B", "C", "D", "E", "F"],
                    matchingItems: [
                        { questionNumber: 1, text: "Young Indian women who want more tend to be poorer.", correctAnswer: "A" },
                        { questionNumber: 2, text: "Few young Indian women want to be housewives.", correctAnswer: "E" },
                        { questionNumber: 3, text: "Most young Indian women want to take care of their retired parents.", correctAnswer: "B" },
                        { questionNumber: 4, text: "Most young Indian women want to be financially independent.", correctAnswer: "C" },
                    ],
                },
                // Q5-8: Sentence Completion
                {
                    groupType: "sentence-completion",
                    startQuestion: 5,
                    endQuestion: 8,
                    mainInstruction: "Complete the following sentences using NO MORE THAN THREE WORDS from the text for each gap.",
                    subInstruction: "",
                    statements: [
                        { questionNumber: 5, text: "_________ are freely talked about on American TV shows.", correctAnswer: "Sex and divorce" },
                        { questionNumber: 6, text: "Young women are considered to be the future\u2019s most important _________ by many companies.", correctAnswer: "consumer group" },
                        { questionNumber: 7, text: "Most young Indian women surveyed agree that _________ before marriage is necessary.", correctAnswer: "dating" },
                        { questionNumber: 8, text: "In the past, young Indian women who wanted careers were most likely to consider teaching or becoming doctors because each of these is considered to be _________.", correctAnswer: "a noble cause" },
                    ],
                },
                // Q9-13: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 9,
                    endQuestion: 13,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "Write TRUE, FALSE or NOT GIVEN.",
                    statements: [
                        { questionNumber: 9, text: "The effect of American culture on young Indian women was not forecast when satellite and cable TV arrived in India.", correctAnswer: "FALSE" },
                        { questionNumber: 10, text: "Researchers used three methods to get their data.", correctAnswer: "TRUE" },
                        { questionNumber: 11, text: "Most young Indian women are aiming for perfection.", correctAnswer: "FALSE" },
                        { questionNumber: 12, text: "Most of the best journalists on TV in India are women.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 13, text: "Modern men and women in India cook together.", correctAnswer: "NOT GIVEN" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "matching-features", questionText: "Young Indian women who want more tend to be poorer.", correctAnswer: "A", marks: 1 },
                { questionNumber: 2, questionType: "matching-features", questionText: "Few young Indian women want to be housewives.", correctAnswer: "E", marks: 1 },
                { questionNumber: 3, questionType: "matching-features", questionText: "Most young Indian women want to take care of their retired parents.", correctAnswer: "B", marks: 1 },
                { questionNumber: 4, questionType: "matching-features", questionText: "Most young Indian women want to be financially independent.", correctAnswer: "C", marks: 1 },
                { questionNumber: 5, questionType: "sentence-completion", questionText: "___ are freely talked about on American TV shows.", correctAnswer: "Sex and divorce", marks: 1 },
                { questionNumber: 6, questionType: "sentence-completion", questionText: "Young women are the future\u2019s most important ___.", correctAnswer: "consumer group", marks: 1 },
                { questionNumber: 7, questionType: "sentence-completion", questionText: "___ before marriage is necessary.", correctAnswer: "dating", marks: 1 },
                { questionNumber: 8, questionType: "sentence-completion", questionText: "Teaching or doctors because it\u2019s considered to be ___.", correctAnswer: "a noble cause", marks: 1 },
                { questionNumber: 9, questionType: "true-false-not-given", questionText: "The effect of American culture was not forecast.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 10, questionType: "true-false-not-given", questionText: "Researchers used three methods to get their data.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "Most young Indian women are aiming for perfection.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "Most of the best journalists on TV in India are women.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "Modern men and women in India cook together.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },
        // ═══ SECTION 2: Childhood Obesity (Q14-26) ═══
        {
            sectionNumber: 2,
            title: "Childhood Obesity",
            passage: `A.\nIf a child becomes obese, their body processes can change. Some of these may be difficult or even impossible to alter in adulthood. Fat cells are created in the first few years of life. If fat is stored quickly, more fat cells are created. So an obese child can have up to three times as many as a normal child. Eventually, fat cells stop multiplying, and an adult has a fixed number for the rest of their life. The existing cells simply swell or shrink to accommodate more fat. The amount of fat the body wants to store is thought to be proportional to the total number of fat cells. So if you were overweight as a child, your body is programmed to carry more fat. This does not mean that you cannot lose weight through diet and exercise, but it will be harder.\n\nB.\nFew health problems are observed in obese children, but they may develop conditions that cause problems later in life, such as high blood pressure. They may also suffer from \u2018sleep apnoea\u2019. When this happens, soft tissue in the throat blocks the airways during sleep. This can stop their breathing for up to a minute. This process can happen hundreds of times a night, leading to heart disease, memory problems, headaches, and tiredness. Some obese children may develop diabetes. Normally, this condition only starts much later in life. When it strikes, the body stops being able to process sugar properly, and the cells are starved of energy. Diabetes cannot be cured, but it can be treated. It may lead to problems such as nerve damage, heart disease, kidney disease, and blindness. Children with this condition will have to live with it all their lives, increasing the chance of problems.\n\nC.\nNegative body image can cause depression and social problems \u2013 overweight children are often teased. Low self-esteem may not directly affect physical health, but it is actually the biggest problem obese children meet in everyday life. It may even lead to \u2018comfort eating\u2019 (eating to feel good), making the situation even worse. If modern-day culture placed less emphasis on the \u2018perfect body\u2019, then at least one set of problems associated with obesity would disappear.\n\nD.\nAlthough the causes are not yet completely understood, it is clear to scientists that both genes and the environment play a role. The recent increase in obesity in many countries around the world seems to be linked to environmental factors. Firstly, many people are much less physically active nowadays. Secondly, fatty and sugary foods are more accessible to more people. Thirdly, average portion sizes have become larger as people have more food to eat and restaurants, particularly fast food ones, serve larger portions for relatively little extra money. Fourthly, calories per mouthful of food have increased.\n\nE.\nTraditionally, children all over the world have been forced by their parents to finish all the food that is on their plate. Don\u2019t force children to eat more when they say they are full \u2013 otherwise they could lose their ability to naturally regulate what they eat. Wait a few minutes before serving a second portion of food at mealtimes. It takes some time for the messages that tell us we have had enough to eat to reach the brain. Another global tradition is that of giving children their favourite food as a reward for good behaviour or good grades at school. Using food as a reward is never a good idea because your child will learn to value these particular \u2018treat\u2019 foods and may turn to food for comfort. Use non-food rewards instead \u2013 they don\u2019t need to be large material rewards. One of the best motivators is praise! Don\u2019t tell your child off for being fat. Your child may already feel upset about their weight. Telling them off will only make them feel worse and may add to the problem if they then turn to food for comfort. Don\u2019t single out your child as the one with the problem. Introduce healthier meals to the whole family. This way, everyone can make healthy changes to their lifestyle.\n\nF.\nIt is not worth forbidding fattening foods, because forbidding certain foods can make them seem more attractive to children. Teach your child about the health value of foods, particularly those that are rich in vitamins and nutrients. Make your home a healthy food zone. Fill up the fruit bowl instead of buying biscuits and crisps. Remember that your child is likely to model themselves on your behaviour, so choose healthy food options whenever possible. Offering a child a choice of food is generally not a good idea. Research has shown that when there is more choice available, we tend to eat more. Even the sight or smell of tempting food can override the body\u2019s natural mechanism of regulation, so we eat when we\u2019re not hungry. If you do decide to offer your child a choice, keep the options to an absolute minimum.\n\nG.\nWeight management camps can be a good way to treat obesity. One of the problems is keeping off the weight that kids lose at such camps. If the child comes home and none of the family members have altered their eating habits, improvements may be difficult to sustain. Again, lead by example! An increasing number of parents ask their doctors about surgery (e.g. liposuction) to tackle obesity. If a child has massive obesity and his or her health is being put at serious risk, then all options have to be considered. Surgical treatments have shown good results in adults, but there are serious risks. Performing surgery on children would raise some difficult issues. This option should really only be considered when all others have been exhausted.\n\nH.\nParents of even young children can make sure the family changes to a healthy lifestyle rather than targeting weight loss specifically. Children grow at different rates, and many overweight children will \u2018grow out of it\u2019 as they grow taller. Few treatments are targeted at children under the age of seven years. From age eight to ten, a child who is obese should have a medical evaluation to assess the severity of the problem. The older your child is, the less likely they are to grow out of it. A 15-year-old who is overweight is likely to remain so in adulthood.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 14-26",
            questionGroups: [
                // Q14-17: Matching Information
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 17,
                    mainInstruction: "Which paragraph contains the following information?",
                    subInstruction: "Write the correct letter A-H.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G", "H"],
                    matchingItems: [
                        { questionNumber: 14, text: "Feeling bad about yourself", correctAnswer: "C" },
                        { questionNumber: 15, text: "Reducing weight", correctAnswer: "G" },
                        { questionNumber: 16, text: "Age is a factor", correctAnswer: "H" },
                        { questionNumber: 17, text: "Fat cells", correctAnswer: "A" },
                    ],
                },
                // Q18-22: Choose 5 TRUE statements
                {
                    groupType: "choose-two-letters",
                    startQuestion: 18,
                    endQuestion: 22,
                    mainInstruction: "According to the text, FIVE of the following statements are true. Write the corresponding letters in answer boxes 18 to 22 in any order.",
                    questionSets: [
                        {
                            questionNumbers: [18, 19, 20, 21, 22],
                            questionText: "Which FIVE statements are true?",
                            options: [
                                { letter: "A", text: "Adults do not gain fat cells." },
                                { letter: "B", text: "Diabetes is not a permanent problem for a person." },
                                { letter: "C", text: "Low self-esteem is a major problem." },
                                { letter: "D", text: "Being obese is generally considered to be partly genetic." },
                                { letter: "E", text: "Messages about food requirement go from the stomach to the brain instantly." },
                                { letter: "F", text: "Parents should take the lead by buying healthy foods." },
                                { letter: "G", text: "Performing liposuction on children is a good idea." },
                                { letter: "H", text: "Some young children appear overweight when they are short." },
                            ],
                            correctAnswers: ["A", "C", "D", "F", "H"],
                        },
                    ],
                },
                // Q23-26: Multiple Choice
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 23,
                    endQuestion: 26,
                    mainInstruction: "According to the information given in the text, choose the correct answer or answers from the choices given.",
                    subInstruction: "",
                    mcQuestions: [
                        { questionNumber: 23, questionText: "People suffering from obesity may suffer from", options: [
                            { letter: "A", text: "sleep apnoea." }, { letter: "B", text: "diabetes." }, { letter: "C", text: "low blood pressure." },
                        ], correctAnswer: "A, B" },
                        { questionNumber: 24, questionText: "Environmental factors contributing to obesity include", options: [
                            { letter: "A", text: "lack of exercise." }, { letter: "B", text: "larger portions of food at restaurants." }, { letter: "C", text: "comfort eating." },
                        ], correctAnswer: "A, B" },
                        { questionNumber: 25, questionText: "Bad things that parents do include", options: [
                            { letter: "A", text: "using food as a reward." }, { letter: "B", text: "not telling children to finish their dinners." }, { letter: "C", text: "waiting before serving second portions of food." },
                        ], correctAnswer: "A" },
                        { questionNumber: 26, questionText: "Forbidding foods is bad because children", options: [
                            { letter: "A", text: "will want them even more." }, { letter: "B", text: "should be offered a choice of food." }, { letter: "C", text: "should be treated equally." },
                        ], correctAnswer: "A" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 14, questionType: "matching-information", questionText: "Feeling bad about yourself", correctAnswer: "C", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "Reducing weight", correctAnswer: "G", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "Age is a factor", correctAnswer: "H", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "Fat cells", correctAnswer: "A", marks: 1 },
                { questionNumber: 18, questionType: "choose-two-letters", questionText: "Which FIVE statements are true?", correctAnswer: "A", marks: 1 },
                { questionNumber: 19, questionType: "choose-two-letters", questionText: "Which FIVE statements are true?", correctAnswer: "C", marks: 1 },
                { questionNumber: 20, questionType: "choose-two-letters", questionText: "Which FIVE statements are true?", correctAnswer: "D", marks: 1 },
                { questionNumber: 21, questionType: "choose-two-letters", questionText: "Which FIVE statements are true?", correctAnswer: "F", marks: 1 },
                { questionNumber: 22, questionType: "choose-two-letters", questionText: "Which FIVE statements are true?", correctAnswer: "H", marks: 1 },
                { questionNumber: 23, questionType: "multiple-choice-full", questionText: "May suffer from", correctAnswer: "A, B", marks: 1 },
                { questionNumber: 24, questionType: "multiple-choice-full", questionText: "Environmental factors", correctAnswer: "A, B", marks: 1 },
                { questionNumber: 25, questionType: "multiple-choice-full", questionText: "Bad things parents do", correctAnswer: "A", marks: 1 },
                { questionNumber: 26, questionType: "multiple-choice-full", questionText: "Forbidding foods is bad because", correctAnswer: "A", marks: 1 },
            ],
        },
        // ═══ SECTION 3: Learning about the Past (Q27-40) ═══
        {
            sectionNumber: 3,
            title: "Learning about the Past",
            passage: `If the past is a foreign country, the version that used to be taught in Irish schools had a simple landscape. For 750 years after the first invasion by an English king, Ireland suffered oppression. Then at Easter 1916, her brave sons rose against the tyrant; their leaders were shot but their cause prevailed, and Ireland (or 26 of her 32 counties) lived happily ever after. Awkward episodes, like the conflict between rival Irish nationalist groups in 1922 \u2013 23, were airbrushed away. \u201cThe civil war was just an embarrassment, it was hardly mentioned,\u201d says Jimmy Joyce, who went to school in Dublin in the 1950s.\n\nThese days, Irish history lessons are more sophisticated. They deal happily with facts that have no place in a plain tale of heroes and tyrants: like the fact that hundreds of thousands of Irish people, Catholic and Protestant, fought for Britain during the two world wars. Why the change? First, because in the 1980s, some people in Ireland became uneasy about the fact that a crude view of their national history was fuelling a conflict in the north of the island. Then, came a fall in the influence of the Catholic church, whose authority had rested on a deft fusion between religion and patriotism. Also at work was an even broader shift: a state that was rich, confident, and cosmopolitan saw less need to drum simple ideas into its youth, especially if those ideas risked encouraging violence.\n\nAs countries all over the world argue over \u201cwhat to tell the children\u201d about their collective past, many will look to Ireland rather enviously. Its seamless transition from a nationalist view of history to an open-minded one is an exception. A history curriculum is often a telling sign of how a nation and its elites see themselves: as victims of colonialism or practitioners (either repentant or defiant) of imperial power. In the modern history of Mexico, for example, a big landmark was the introduction, 15 years ago, of textbooks that were a bit less anti-American. Many states still see history teaching, and the inculcation of foundation myths, as a strategic imperative; others see it as an exercise in teaching children to think for themselves. The experience of several countries suggests that, whatever educators and politicians might want, there is a limit to how far history lessons can diverge in their tone from society as a whole.\n\nTake Australia. John Howard, the conservative prime minister, has made history one of his favourite causes. At a \u201chistory summit\u201d he held last August, educators were urged to \u201creestablish a structured narrative\u201d about the nation\u2019s past. This was seen by liberal critics as a doomed bid to revive a romantic vision of white settlement in the 18th century. The romantic story has been fading since the 1980s, when a liberal, revisionist view came to dominate curricula: one that replaced \u201csettlement\u201d with \u201cinvasion\u201d and that looked for the first time at the stories of aborigines and women. How much difference have Australia\u2019s policy battles made to what children in that cosmopolitan land are taught? Under Mr. Howard\u2019s 11-year government, \u201cmulticultural\u201d and \u201caboriginal reconciliation\u201d, two terms that once had currency, have faded from the policy lexicon, but not from classrooms. Australia\u2019s curricula are controlled by the states, not from Canberra. Most states have rolled Australian history into social studies courses, often rather muddled. In New South Wales, where the subject is taught in its own right, Mr. Howard\u2019s bid to promote a patriotic view of history meets strong resistance.\n\nJudy King, head of Riverside Girls High School in Sydney, has students from more than 40 ethnic groups at her school. \u201cIt\u2019s simply not possible to present one story to them, and nor do we,\u201d she says. \u201cWe canvass all the terms for white settlement: colonialism, invasion, and genocide. Are all views valid? Yes. What\u2019s the problem with that? If the prime minister wants a single narrative instead, then speaking as someone who\u2019s taught history for 42 years he\u2019ll have an absolute fight on his hands.\u201d Tom Ying, head of history at Burwood Girls High School in Sydney, grew up as a Chinese child in the white Australia of the 1950s. In a school where most students are from non-English-speaking homes, he welcomes an approach that includes the dark side of European settlement. \u201cWhen you have only one side of the story, immigrants, women, and aborigines aren\u2019t going to have an investment in it.\u201d\n\nAustralia is a country where a relatively gentle (by world standards) effort to re-impose a sort of national ideology looks destined to fail. Russia, by contrast, is a country where the general principle of a toughly enforced ideology, and a national foundation story, still seems natural to many people, including the country\u2019s elite. In a telling sign of how he wants Russians to imagine their past, President Vladimir Putin has introduced a new national day \u2013 November 4 \u2013 to replace the old Revolution Day holiday on November 7. What the new date recalls is the moment in 1612 when Russia, after a period of chaos, drove the Catholic Poles and Lithuanians out of Moscow. Despite the bonhomie of this week\u2019s 25-minute chat between Mr. Putin and Pope Benedict XVI, the president is promoting a national day which signals \u201cisolation and defensiveness\u201d towards western Christendom, says Andrei Zorin, a Russian historian.\n\nIn South Africa, where white rule collapsed, the authorities seem to have done a better job at forging a new national story and avoiding the trap of replacing one rigid ideology with another. \u201cThe main message of the new school curriculum is inclusion and reconciliation,\u201d says Linda Chisholm, who designed post-apartheid lessons. \u201cWe teach pupils to handle primary sources, like oral history and documents, instead of spoon-feeding them on textbooks,\u201d adds Aled Jones, a history teacher at Bridge House School in Cape Province. It helps that symbols and anniversaries have been redefined with skill. December 16 was a day to remember white settlers clashing with the Zulus in 1838; now it is the Day of Reconciliation.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 27-40",
            questionGroups: [
                // Q27-30: Multiple Choice
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 27,
                    endQuestion: 30,
                    mainInstruction: "For each question, only ONE of the choices is correct.",
                    subInstruction: "",
                    mcQuestions: [
                        { questionNumber: 27, questionText: "The Irish Civil War was not taught much in Ireland in the past because", options: [
                            { letter: "A", text: "it didn\u2019t fit in with the history of the Irish fighting British rule." },
                            { letter: "B", text: "the Irish people couldn\u2019t understand why it happened." },
                            { letter: "C", text: "the Irish didn\u2019t want to anger the British." },
                        ], correctAnswer: "A" },
                        { questionNumber: 28, questionText: "John Howard favours teaching history", options: [
                            { letter: "A", text: "as it was taught in Australia before the 1980s." },
                            { letter: "B", text: "as it is taught in Australia now." },
                            { letter: "C", text: "as it is taught in most other countries." },
                        ], correctAnswer: "A" },
                        { questionNumber: 29, questionText: "The new Russian holiday appears to demonstrate that Russia is", options: [
                            { letter: "A", text: "becoming less authoritative." },
                            { letter: "B", text: "strongly enforcing a link between ideology and history." },
                            { letter: "C", text: "becoming opposed to the influence of western Christianity." },
                        ], correctAnswer: "C" },
                        { questionNumber: 30, questionText: "History in South Africa is now taught differently because", options: [
                            { letter: "A", text: "of the collapse of apatheism." },
                            { letter: "B", text: "of the collapse of rule by white people." },
                            { letter: "C", text: "teachers are better than before." },
                        ], correctAnswer: "B" },
                    ],
                },
                // Q31-35: Sentence Completion
                {
                    groupType: "sentence-completion",
                    startQuestion: 31,
                    endQuestion: 35,
                    mainInstruction: "Complete the following sentences using NO MORE THAN THREE WORDS from the text for each gap.",
                    subInstruction: "",
                    statements: [
                        { questionNumber: 31, text: "Many Irish people thought a simple view of history was _________ in Northern Ireland.", correctAnswer: "fuelling a conflict" },
                        { questionNumber: 32, text: "The things that are taught in history classes often tell us how countries and people _________.", correctAnswer: "see themselves" },
                        { questionNumber: 33, text: "The terms \u2018multicultural\u2019 and \u2018aboriginal reconciliation\u2019 can still be found in Australian _________.", correctAnswer: "classrooms" },
                        { questionNumber: 34, text: "Judy King says John Howard would like _________ rather than look at history from different standpoints.", correctAnswer: "a single narrative" },
                        { questionNumber: 35, text: "In South Africa, changing a _________ for another has been avoided.", correctAnswer: "rigid ideology" },
                    ],
                },
                // Q36-40: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 36,
                    endQuestion: 40,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 3?",
                    subInstruction: "Write TRUE, FALSE or NOT GIVEN.",
                    statements: [
                        { questionNumber: 36, text: "As Ireland became richer, Irish people became less interested in simple ideas.", correctAnswer: "TRUE" },
                        { questionNumber: 37, text: "Most countries believe learning about history should allow students to think for themselves.", correctAnswer: "FALSE" },
                        { questionNumber: 38, text: "The meanings of the words \u2018settlement\u2019 and \u2018invasion\u2019 are not the same.", correctAnswer: "TRUE" },
                        { questionNumber: 39, text: "A foundation story is an important part of history classes in Russia.", correctAnswer: "TRUE" },
                        { questionNumber: 40, text: "The new South African history curriculum aims to include different standpoints and bring people together.", correctAnswer: "TRUE" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 27, questionType: "multiple-choice-full", questionText: "Irish Civil War not taught because", correctAnswer: "A", marks: 1 },
                { questionNumber: 28, questionType: "multiple-choice-full", questionText: "Howard favours teaching history", correctAnswer: "A", marks: 1 },
                { questionNumber: 29, questionType: "multiple-choice-full", questionText: "New Russian holiday demonstrates", correctAnswer: "C", marks: 1 },
                { questionNumber: 30, questionType: "multiple-choice-full", questionText: "SA history taught differently because", correctAnswer: "B", marks: 1 },
                { questionNumber: 31, questionType: "sentence-completion", questionText: "Simple view of history was ___.", correctAnswer: "fuelling a conflict", marks: 1 },
                { questionNumber: 32, questionType: "sentence-completion", questionText: "How countries and people ___.", correctAnswer: "see themselves", marks: 1 },
                { questionNumber: 33, questionType: "sentence-completion", questionText: "Can still be found in Australian ___.", correctAnswer: "classrooms", marks: 1 },
                { questionNumber: 34, questionType: "sentence-completion", questionText: "Howard would like ___.", correctAnswer: "a single narrative", marks: 1 },
                { questionNumber: 35, questionType: "sentence-completion", questionText: "Changing a ___ for another avoided.", correctAnswer: "rigid ideology", marks: 1 },
                { questionNumber: 36, questionType: "true-false-not-given", questionText: "Ireland richer, less interested in simple ideas.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 37, questionType: "true-false-not-given", questionText: "Most countries believe history should allow thinking.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 38, questionType: "true-false-not-given", questionText: "Settlement and invasion not the same.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 39, questionType: "true-false-not-given", questionText: "Foundation story important in Russia.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 40, questionType: "true-false-not-given", questionText: "SA curriculum includes different standpoints.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
            ],
        },
    ],
};

async function seedTest() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to database");
        const existing = await ReadingTest.findOne({ $or: [{ testId: readingTest.testId }, { testNumber: readingTest.testNumber }] });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest, { runValidators: false });
            console.log("\u2705 Reading Test 10 updated!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) { console.log("\u274C No admin"); process.exit(1); }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log("\u2705 Reading Test 10 created!");
        }
        const test = await ReadingTest.findOne({ testNumber: readingTest.testNumber });
        if (test) {
            console.log(`\n\uD83D\uDCDD Test: ${test.title}`);
            (test.sections as any[]).forEach((s, i) => console.log(`  S${i+1}: ${s.title} | G:${s.questionGroups?.length} Q:${s.questions?.length}`));
        }
        await mongoose.disconnect();
        process.exit(0);
    } catch (error) { console.error("\u274C Error:", error); process.exit(1); }
}
seedTest();

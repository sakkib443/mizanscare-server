import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_ACADEMIC_019",
    testNumber: 19,
    title: "Academic Reading Mock Test 19",
    description: "IELTS Academic Reading Test featuring passages on Leisure Time in America, Reclaiming the Night, and The Drinking of Wine.",
    source: "Academic Reading Practice",
    testType: "academic" as const,
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: Leisure Time in America (Q1-13)
        // Q1-9: Matching Headings (Paragraphs A-I)
        // Q10-13: Multiple Choice (A/B/C)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "Leisure Time in America",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: `A As most Americans will tell you if you can stop them long enough to ask, working people in the United States are as busy as ever. Sure, technology and competition are boosting the economy; but nearly everyone thinks they have increased the demands on people at home and in the workplace. But is the overworked American a creature of myth?\n\nB A pair of economists have looked closely at how Americans actually spend their time. Mark Aguiar, at the Federal Reserve Bank of Boston and Erik Hurst, at the University of Chicago\u2019s Graduate School of Business constructed four different measures of leisure. The narrowest includes only activities that nearly everyone considers relaxing or fun; the broadest counts anything that is not related to a paying job, housework or errands as \u201cleisure\u201d. No matter how the two economists slice the data, Americans seem to have much more free time than before.\n\nC Over the past four decades, depending on which of their measures one uses, the amount of time that working-age Americans are devoting to leisure activities has risen by 4\u20138 hours a week. For somebody working 40 hours a week, that is equivalent to 5\u201310 weeks of extra holiday a year. Nearly every category of American has more spare time: single or married, with or without children, both men and women. Americans may put in longer hours at the office than other countries, but that is because average hours in the workplace in other rich countries have dropped sharply.\n\nD How then have Messrs Aguiar and Hurst uncovered a more relaxed America, where leisure has actually increased? It is partly to do with the definition of work, and partly to do with the data they base their research upon. Most American labour studies rely on well-known official surveys, such as those collected by the Bureau of Labour Statistics (BLS) and the Census Bureau, that concentrate on paid work. These are good at gleaning trends in factories and offices, but they give only a murky impression of how Americans use the rest of their time. Messrs Aguiar and Hurst think that the hours spent at your employer\u2019s are too narrow a definition of work. Americans also spend lots of time shopping, cooking, running errands and keeping house. These chores are among the main reasons why people say they are so overstretched, especially working women with children.\n\nE However, Messrs Aguiar and Hurst show that Americans actually spend much less time doing them than they did 40 years ago. There has been a revolution in the household economy. Appliances, home delivery, the internet, 24-hour shopping, and more varied and affordable domestic services have increased flexibility and freed up people\u2019s time.\n\nF The data for Messrs Aguiar and Hurst\u2019s study comes from time-use diaries that American social scientists have been collecting methodically, once a decade, since 1965. These diaries ask people to give detailed information on everything they did the day before, and for how long they did it. The beauty of such surveys, which are also collected in Australia and many European countries, is that they cover the whole day, not just the time at work, and they also have a built-in accuracy check, since they must always account for every hour of the day.\n\nG Do the numbers add up? One thing missing in Messrs Aguiar\u2019s and Hurst\u2019s work is that they have deliberately ignored the biggest leisure-gainers in the population, the growing number of retired folks. The two economists excluded anyone who has reached 65 years old, as well as anyone under that age who retired early. So, America\u2019s true leisure boom is even bigger than their estimate.\n\nH The biggest theoretical problem with time diaries is \u201cmulti-tasking\u201d. Do you measure the time you spend cleaning your house while listening to portable music as \u201cleisure\u201d or \u201cwork\u201d? This problem may be exaggerated: usually people seem to combine two work activities, using a laptop computer on a plane, or two leisure ones, watching television and doing something else. The two economists counted many combinations of work and leisure, such as reading a novel while commuting or goofing off on the internet at the office, as time spent working.\n\nI Is all this leisure a good thing? Some part-time workers might well wish they had less leisure and more income. For most Americans, however, the leisure dividend appears to be a bonus. Using average hourly wages after tax, Steven Davis, a colleague of Mr Hurst\u2019s, reckons that the national value of five extra hours of leisure per week is $570 billion, or $3,300 per worker, every year.`,
            questionGroups: [
                // Q1-9: Matching Headings
                {
                    groupType: "matching-headings",
                    startQuestion: 1,
                    endQuestion: 9,
                    mainInstruction: "Match each heading to the most suitable paragraph.",
                    subInstruction: "Write the correct number, i-x, in boxes 1-9 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "One possible source of inaccuracies" },
                        { numeral: "ii", text: "Less time doing chores" },
                        { numeral: "iii", text: "A difference between perception and reality" },
                        { numeral: "iv", text: "The value of extra leisure time" },
                        { numeral: "v", text: "Americans are working harder" },
                        { numeral: "vi", text: "Significantly more free time" },
                        { numeral: "vii", text: "The effect of including retirees" },
                        { numeral: "viii", text: "The need for a wider description of work" },
                        { numeral: "ix", text: "An effective system for measuring time spent" },
                        { numeral: "x", text: "How Americans think about their time" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph A", correctAnswer: "" },
                        { questionNumber: 2, text: "Paragraph B", correctAnswer: "" },
                        { questionNumber: 3, text: "Paragraph C", correctAnswer: "" },
                        { questionNumber: 4, text: "Paragraph D", correctAnswer: "" },
                        { questionNumber: 5, text: "Paragraph E", correctAnswer: "" },
                        { questionNumber: 6, text: "Paragraph F", correctAnswer: "" },
                        { questionNumber: 7, text: "Paragraph G", correctAnswer: "" },
                        { questionNumber: 8, text: "Paragraph H", correctAnswer: "" },
                        { questionNumber: 9, text: "Paragraph I", correctAnswer: "" },
                    ],
                },
                // Q10-13: Multiple Choice (A/B/C only)
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 10,
                    endQuestion: 13,
                    mainInstruction: "Choose A, B or C.",
                    subInstruction: "Write the correct letter in boxes 10-13 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 10,
                            questionText: "Americans seem to spend more time in the office than people in other rich countries",
                            options: [
                                { letter: "A", text: "Because of the increase in Americans leisure time" },
                                { letter: "B", text: "Because of a decrease in leisure time in the other rich countries" },
                                { letter: "C", text: "Because of a decrease in office time in the other rich countries" },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 11,
                            questionText: "One problem with data from the BLS is that",
                            options: [
                                { letter: "A", text: "it is unclear about out of work time" },
                                { letter: "B", text: "it is limited to factories and offices" },
                                { letter: "C", text: "it does not include leisure time" },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 12,
                            questionText: "Time-use diaries",
                            options: [
                                { letter: "A", text: "are only available in America and Australia" },
                                { letter: "B", text: "are the most accurate time use measurement tool" },
                                { letter: "C", text: "provide data for 24 hours of each day" },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 13,
                            questionText: "Aguiar and Hurst counted multi-tasking activities of leisure and work",
                            options: [
                                { letter: "A", text: "as free time" },
                                { letter: "B", text: "as work time" },
                                { letter: "C", text: "as neither free time or work time" },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph A", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 7, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 8, questionType: "matching-headings", questionText: "Paragraph H", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 9, questionType: "matching-headings", questionText: "Paragraph I", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 10, questionType: "multiple-choice-full", questionText: "Americans seem to spend more time in the office than people in other rich countries", correctAnswer: "", marks: 1 },
                { questionNumber: 11, questionType: "multiple-choice-full", questionText: "One problem with data from the BLS is that", correctAnswer: "", marks: 1 },
                { questionNumber: 12, questionType: "multiple-choice-full", questionText: "Time-use diaries", correctAnswer: "", marks: 1 },
                { questionNumber: 13, questionType: "multiple-choice-full", questionText: "Aguiar and Hurst counted multi-tasking activities of leisure and work", correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 2: Reclaiming the Night (Q14-26)
        // Q14-18: Matching Information (A-F)
        // Q19-26: Summary Completion (ONE WORD)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "Reclaiming the Night",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: `A On a summer\u2019s day, apart from the intermittent drizzle and lowering sky, South Street in Romford looks as close to an Englishman\u2019s dream of a continental-style piazza as it is possible to get. Leafy trees line the extended pavements crowded with seats and tables as young families, pensioners, teenagers and businessmen tuck into a variety of faux-European dishes for lunch. Local cafes serve the full range of meaningless variations on the theme of coffee, from cappuccino through mochaccino to doppos, all at top prices. Round the corner, in the Market Place, it is French week. There are several stalls, complete with real Frenchmen, selling claret and cheeses.\n\nB The cafes are open during the day, and the clubs stay open until two or three in the morning most nights. In this respect, Romford is typical of contemporary Britain. In the late 1980s, the centres of many towns and cities went into decline as retailers, and particularly supermarkets, moved to new big, out-of-town shopping centres. So in the early 1990s, many local councils, in league with local businesses, re-developed their increasingly desolate town centres into \u201cleisure zones\u201d. They looked to continental Europe for the inspiration to create modern 24-hour environments, mixing cafes, bars and clubs to keep people in the centres spending money for as long as possible.\n\nC By night however, South Street turns into a very different place. The street becomes a mass of 18\u201326-year-olds, drinking as much as they can. For anyone else, the place becomes almost a no-go area. Gillian Balfe, the council\u2019s town-centre manager and a strong supporter of the \u201cleisuring\u201d of South Street, concedes that the crowds become uncontrollable, and the atmosphere quickly turns \u201chostile and threatening\u201d. Buses are now barred from going down South Street after 9.30pm: there are too many drunken people milling about.\n\nD In a survey for the local council done last year, 49% of the residents of the surrounding areas of South Street confessed that they did not want to come to the city centre any more for fear of crime. The local police concede that they are virtually overwhelmed. Violence is commonplace. There has only been one consequent fatality in the area in the past couple of years, but the police say that this is mainly thanks to the merciful proximity of the local hospital. Romford\u2019s dilemma is typical of what has happened in the other \u201cleisure zones\u201d in towns and cities throughout the country. What were meant to be civilised places for entertainment and shopping have too often turned into alcoholic ghettos for the young.\n\nE For all the problems, however, Romford\u2019s local authority thinks that the idea of a 24-hour city is already too profitable to be stopped. Local authorities think that new repressive legislation, or even a decision not to reform the licensing laws, would be unworkable. So instead of trying to pack everyone back off to bed, Romford is trying to reclaim the town centre for a broader mix of people, and so to fulfil the original ambitions of the 24-hour-city dreamers.\n\nF The first part of the strategy involves security. The police accept that, with their current resources, they will never be able to make South Street safe on their own. So, they now work closely with the 528 \u201cdoor-staff\u201d, previously known as bouncers, to target drug-dealers in the bars and clubs. In the year since that scheme came into effect, there have been more than 300 arrests for drugs. In the six months before that, there had been only one. All the premises now have a radio link to the police station for an instant response to trouble.\n\nG The second part of the strategy involves trying to encourage more, and different kinds of people to use the town centre at night. New attractions are opening next year to rival the pubs. On the site of the old Romford brewery there will be a 16-screen cinema and a 24-hour supermarket. A new health and leisure centre, open on some nights until 9pm, starts up soon. The hope is that these facilities will draw in a different, more sober and ethnically diverse crowd. The police have bravely encouraged one club to start a gay night on Wednesdays.\n\nH Together with other measures such as better street lighting, Romford hopes that it can show that the phrase \u201c24-hour city\u201d can be more than a euphemism for an all-night drinkathon. As the new licensing laws delegate the job of granting alcohol licences to local councils, cities across England will be trying to reclaim the night.`,
            questionGroups: [
                // Q14-18: Matching Information
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 18,
                    mainInstruction: "Which paragraph contains the following information?",
                    subInstruction: "Write the correct letter, A-F, in boxes 14-18 on your answer sheet.",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F"],
                    matchingItems: [
                        { questionNumber: 14, text: "why some local people stay out of the centre at night", correctAnswer: "" },
                        { questionNumber: 15, text: "how communication with the police has been made faster", correctAnswer: "" },
                        { questionNumber: 16, text: "reasons behind the growth in inner-city leisure venues", correctAnswer: "" },
                        { questionNumber: 17, text: "examples of Romford\u2019s similarity to mainland Europe", correctAnswer: "" },
                        { questionNumber: 18, text: "how illegal substances are being controlled", correctAnswer: "" },
                    ],
                },
                // Q19-26: Summary Completion (ONE WORD ONLY)
                {
                    groupType: "summary-completion",
                    startQuestion: 19,
                    endQuestion: 26,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage. Write your answers in boxes 19-26 on your answer sheet.",
                    mainHeading: "",
                    summarySegments: [
                        { type: "text", content: "In an attempt to get a wider variety of " },
                        { type: "blank", questionNumber: 19, correctAnswer: "" },
                        { type: "text", content: " into the " },
                        { type: "blank", questionNumber: 20, correctAnswer: "" },
                        { type: "text", content: " at night time, the local government and private organizations are going to provide different kinds of " },
                        { type: "blank", questionNumber: 21, correctAnswer: "" },
                        { type: "text", content: ". Some examples include a " },
                        { type: "blank", questionNumber: 22, correctAnswer: "" },
                        { type: "text", content: " and a 24-hour supermarket. They hope this will encourage people who are different " },
                        { type: "blank", questionNumber: 23, correctAnswer: "" },
                        { type: "text", content: ", and not drunk, to use the city-centre " },
                        { type: "blank", questionNumber: 24, correctAnswer: "" },
                        { type: "text", content: ". The local government of Romford thinks that with these " },
                        { type: "blank", questionNumber: 25, correctAnswer: "" },
                        { type: "text", content: " in place it will be able to " },
                        { type: "blank", questionNumber: 26, correctAnswer: "" },
                        { type: "text", content: " the city centre in the evenings." },
                    ],
                },
            ],
            questions: [
                { questionNumber: 14, questionType: "matching-information", questionText: "why some local people stay out of the centre at night", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "how communication with the police has been made faster", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "reasons behind the growth in inner-city leisure venues", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "examples of Romford\u2019s similarity to mainland Europe", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "how illegal substances are being controlled", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 19, questionType: "summary-completion", questionText: "a wider variety of ___ into the city centre", correctAnswer: "", marks: 1 },
                { questionNumber: 20, questionType: "summary-completion", questionText: "into the ___ at night time", correctAnswer: "", marks: 1 },
                { questionNumber: 21, questionType: "summary-completion", questionText: "provide different kinds of ___", correctAnswer: "", marks: 1 },
                { questionNumber: 22, questionType: "summary-completion", questionText: "examples include a ___ and a 24-hour supermarket", correctAnswer: "", marks: 1 },
                { questionNumber: 23, questionType: "summary-completion", questionText: "people who are different ___", correctAnswer: "", marks: 1 },
                { questionNumber: 24, questionType: "summary-completion", questionText: "use the city-centre ___", correctAnswer: "", marks: 1 },
                { questionNumber: 25, questionType: "summary-completion", questionText: "with these ___ in place", correctAnswer: "", marks: 1 },
                { questionNumber: 26, questionType: "summary-completion", questionText: "it will be able to ___ the city centre", correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 3: The Drinking of Wine (Q27-40)
        // Q27-32: Matching Features (Names A-E)
        // Q33-39: Summary Completion (NO MORE THAN TWO WORDS)
        // Q40: Multiple Choice (single)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "The Drinking of Wine",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: `THE birth of the cult of fine wine can be dated precisely. On April 10th 1663, Samuel Pepys, diarist and man-about-London, noted that he had enjoyed \u201ca sort of French wine called Ho Bryan that hath a good and most particular taste that I never met with\u201d.\n\nThe owners of Ho Bryan were the Pontacs. They were the top winemaking family of their day, and founded a fashionable restaurant, called Pontack\u2019s Head, in London, in 1663. John Locke, the philosopher whose theory of the social contract inspired America\u2019s revolutionaries, but who had worldlier interests too, spotted the reasons for the superiority of Ho Bryan on a visit to the vineyard in 1667. He found \u201ca little rise of ground\u2026white sand mixed with a little gravel; scarce fit to bear anything.\u201d He added that \u201cthey say the wine in the next vineyard to it, tho\u2019 seeming equal to me, is not so good.\u201d Today that vineyard is still rated just below its neighbour.\n\nLocke had seized on the essential concept of terroir, the combination of soil, subsoil, drainage and microclimate which provide the conditions for the production of fine wine. Another connoisseur, the 18th-century economist Adam Smith, noted that \u201cthe vine is more affected by the difference of soils than any other fruit tree. From some it derives a flavour which no culture or management can equal.\u201d\n\nBy the early 18th century claret was getting more popular partly because it was getting better. The craft of claret-making had developed. The wine was designed to be kept for years not months, notably by being carefully stored in oak casks. Better corks allowed wine to be stored longer and more safely. Bottles were produced that could be \u201cbinned\u201d\u2014laid down on their sides to mature.\n\nIn the latter part of the 18th century drinking claret helped the rich to distinguish themselves from England\u2019s port-sodden squirearchy. Port was not only the more traditional drink, but also\u2014because it attracted much lower duties\u2014far cheaper. John Hervey, the first Earl of Bristol, spent four times as much on claret as on port, whereas the lusty trenchermen who gathered in the Barbers Hall in the City of London spent a mere \u00a32 on claret as against \u00a3850 on port.\n\nWhen Britain made peace with France in 1713, claret became more accessible and the wine trade flourished. Claret was pricey but rich Londoners, who were also by then big spenders on theatres, spas and music produced by fashionable immigrants, such as Handel, consumed conspicuous quantities. Sir Robert Walpole, Britain\u2019s first prime minister, used navy ships to smuggle his favourite wines from France. The most expensive one he bought was old burgundy, but that\u2014as now\u2014was available only in tiny quantities. So, he relied largely on claret, buying four hogsheads of 24 dozen bottles of Margaux and one hogshead of Lafite every three months. In a single year his wine bill amounted to over \u00a31,200 (\u00a3100,000 today). British consumers bought the best stuff and paid top prices. By the time of the French revolution, the British were paying five times as much for their claret as the wine\u2019s other main customers, the notoriously parsimonious Dutch, who preferred the cheaper, lower-grade stuff.\n\nBy the late 19th century claret was beginning to flow down the social hierarchy. A free-trade treaty between Britain and France in 1860 drastically reduced the duty on French wines, thus encouraging the British middle classes to ape their social superiors; and in that year the chancellor of the exchequer, William Gladstone, keen to stiffen the nation\u2019s moral spine, cut the duty on table wines to 40% of that on more intoxicating fortified wines such as port and sherry.\n\nThe following year came the Single Bottle Act, allowing grocers to sell wine by the bottle. A much-despised, enormously popular drink called \u201cgrocers\u2019 claret\u201d was born, with the result that, between 1859 and 1878, sales of French wines, largely from Bordeaux, rose sixfold to 36m bottles. The Gilbey family, one of the most remarkable commercial dynasties of Victorian England, franchised 2,000 grocers licensed to sell wine, largely claret. Their business grew so fast that by 1875 they were able to buy Ch\u00e2teau Loudenne in the M\u00e9doc to hold their gigantic stocks of claret. As the middle classes turned to claret, so the upper classes abandoned this increasingly common tipple in favour of hock and champagne.\n\nThen the fortunes of the claret business turned. In the late 1870s and 1880s an attack of mildew tainted the wines: the reputation of Lafite, for instance, was ruined when the 1884 vintage turned mouldy after only a couple of years in bottle. At the same time, the phylloxera bug began to devastate Bordeaux\u2019s vineyards.\n\nClaret came back into its own in 1960 when the splendid 1959 vintage coincided with the arrival of big American buyers. Its popularity has risen steadily since. London remains at the centre of the fine-wine business\u2014home of organisations such as the Institute of Masters of Wine, of Decanter and World of Fine Wine magazines, and of most of the world\u2019s biggest wine auctions. Liv-Ex, the world\u2019s first stockmarket for fine wine, is based in London; and its figures show that nine-tenths of the wine trade is still in \u201cclassed growth\u201d (leading) clarets. Newcomers from vineyards in a dozen countries trying to launch their finest wines on the world market come to London first for validation. Yet though London may still have much of the knowledge and the market, as consumers the British may be past their best. This year, 57% of the fine wine that Sotheby\u2019s sold globally, by value, was bought by Asians; four-fifths of those buyers were from China and Hong Kong.`,
            questionGroups: [
                // Q27-32: Matching Features (Names)
                {
                    groupType: "matching-features",
                    startQuestion: 27,
                    endQuestion: 32,
                    mainInstruction: "Match each name to the sentences below.",
                    subInstruction: "Write the correct letter, A-E, in boxes 27-32 on your answer sheet.",
                    featureListTitle: "List of Names",
                    featureOptions: [
                        { letter: "A", text: "John Hervey" },
                        { letter: "B", text: "Adam Smith" },
                        { letter: "C", text: "John Locke" },
                        { letter: "D", text: "William Gladstone" },
                        { letter: "E", text: "Robert Walpole" },
                    ],
                    matchingItems: [
                        { questionNumber: 27, text: "was perhaps the first person to notice why Ho Bryan tasted so good", correctAnswer: "" },
                        { questionNumber: 28, text: "imported wine illegally", correctAnswer: "" },
                        { questionNumber: 29, text: "wanted to discourage people from drinking strong wines", correctAnswer: "" },
                        { questionNumber: 30, text: "drank more claret than port", correctAnswer: "" },
                        { questionNumber: 31, text: "was a specialist in wine and economics", correctAnswer: "" },
                        { questionNumber: 32, text: "bought more claret than any other kind of wine", correctAnswer: "" },
                    ],
                },
                // Q33-39: Summary Completion (NO MORE THAN TWO WORDS)
                {
                    groupType: "summary-completion",
                    startQuestion: 33,
                    endQuestion: 39,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 33-39 on your answer sheet.",
                    mainHeading: "",
                    summarySegments: [
                        { type: "text", content: "Sales of claret fell considerably in the late 19th century due in part to two factors. One of these was when " },
                        { type: "blank", questionNumber: 33, correctAnswer: "" },
                        { type: "text", content: " destroyed the good name of Lafite and the other was when Bordeaux\u2019s vineyards were hit by a " },
                        { type: "blank", questionNumber: 34, correctAnswer: "" },
                        { type: "text", content: ". It took many years for the wine to recover. In 1960, this recovery was helped by the production of an excellent claret in 1959 and the " },
                        { type: "blank", questionNumber: 35, correctAnswer: "" },
                        { type: "text", content: " of buyers from America. Today, London is the centre of the " },
                        { type: "blank", questionNumber: 36, correctAnswer: "" },
                        { type: "text", content: " trade. People trying to enter the " },
                        { type: "blank", questionNumber: 37, correctAnswer: "" },
                        { type: "text", content: " with new wines need to get " },
                        { type: "blank", questionNumber: 38, correctAnswer: "" },
                        { type: "text", content: " for them in London. The growing markets for the fine wines however now seems to be coming from outside the UK. This year, the majority of Sotheby\u2019s wine sales " },
                        { type: "blank", questionNumber: 39, correctAnswer: "" },
                        { type: "text", content: " were to Asia." },
                    ],
                },
                // Q40: Multiple Choice
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 40,
                    endQuestion: 40,
                    mainInstruction: "Choose the correct letter, A, B or C.",
                    subInstruction: "Write the correct letter in box 40 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 40,
                            questionText: "The main purpose of the article is to",
                            options: [
                                { letter: "A", text: "Present the main reasons why claret has always been popular." },
                                { letter: "B", text: "Give a brief history of claret." },
                                { letter: "C", text: "Describe some of the problems claret has faced." },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
            ],
            questions: [
                { questionNumber: 27, questionType: "matching-features", questionText: "was perhaps the first person to notice why Ho Bryan tasted so good", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 28, questionType: "matching-features", questionText: "imported wine illegally", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 29, questionType: "matching-features", questionText: "wanted to discourage people from drinking strong wines", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 30, questionType: "matching-features", questionText: "drank more claret than port", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 31, questionType: "matching-features", questionText: "was a specialist in wine and economics", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 32, questionType: "matching-features", questionText: "bought more claret than any other kind of wine", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 33, questionType: "summary-completion", questionText: "when ___ destroyed the good name of Lafite", correctAnswer: "", marks: 1 },
                { questionNumber: 34, questionType: "summary-completion", questionText: "Bordeaux's vineyards were hit by a ___", correctAnswer: "", marks: 1 },
                { questionNumber: 35, questionType: "summary-completion", questionText: "the ___ of buyers from America", correctAnswer: "", marks: 1 },
                { questionNumber: 36, questionType: "summary-completion", questionText: "centre of the ___ trade", correctAnswer: "", marks: 1 },
                { questionNumber: 37, questionType: "summary-completion", questionText: "trying to enter the ___ with new wines", correctAnswer: "", marks: 1 },
                { questionNumber: 38, questionType: "summary-completion", questionText: "need to get ___ for them in London", correctAnswer: "", marks: 1 },
                { questionNumber: 39, questionType: "summary-completion", questionText: "majority of Sotheby's wine sales ___ were to Asia", correctAnswer: "", marks: 1 },
                { questionNumber: 40, questionType: "multiple-choice-full", questionText: "The main purpose of the article is to", correctAnswer: "", marks: 1 },
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
        console.error("\u274c Error seeding Reading Test 19:", error);
        process.exit(1);
    }
}

seedTest();

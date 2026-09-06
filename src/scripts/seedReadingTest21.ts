import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

/**
 * Academic Reading Mock Test 21 — the reading half of "Test 01.docx" in the
 * New Test batch. Pairs with listening test 21, built from the same paper.
 *
 * ⚠️ ANSWERS ARE DELIBERATELY BLANK. The batch shipped listening answer keys
 * (Mock_1..5) but no reading key, so every correctAnswer here is "" and the
 * test is seeded with isActive: false. An inactive test is invisible to
 * /api/reading/exam/:testNumber, which filters on isActive, so no candidate can
 * sit it and score zero while the answers are missing. Fill the answers in,
 * then activate it from the admin panel.
 *
 * Source text is kept as it appears in the .docx, apart from obvious OCR noise
 * — stray full stops used as commas, capitals in the middle of sentences, and
 * words run together ("massproduced", "cacaogrowing").
 */

const BLANK = ""; // answer to be supplied later

const PASSAGE_1 = `A The cacao tree, once native to the equatorial American forest, has some exotic traits for a plant. Slender and shrubby, the cacao has adapted to life close to the leaf-littered forest floor. Its large leaves droop down, away from the sun. Cacao doesn't flower, as most plants do, at the tips of its outer and uppermost branches. Instead, its sweet white buds hang from the trunk and along a few fat branches which form where leaves drop off. These tiny flowers transform into pulp-filled pods almost the size of rugby balls. The low-hanging pods contain the bitter-tasting magical seeds.

B Somehow, more than 2,000 years ago, ancient humans in Mesoamerica discovered the secret of these beans. If you scoop them from the pod with their pulp, let them ferment and dry in the sun, then roast them over a gentle fire, something extraordinary happens: they become chocolaty. And if you then grind and press the beans, which are half-cocoa butter or more, you will obtain a rich, crumbly, chestnut brown paste — chocolate at its most pure and simple.

C The Maya and Aztecs revered this chocolate, which they frothed up with water and spices to make bracing concoctions. It was an edible treasure, offered up to their gods, used as money and hoarded like gold. Long after Spanish explorers introduced the beverage to Europe in the sixteenth century, chocolate retained an aura of aristocratic luxury. In 1753, the Swedish botanist Carolus Linnaeus gave the cacao tree genus the name Theobroma, which means 'food of the gods'.

D In the last 200 years, the bean has been thoroughly democratized — transformed from an elite drink into ubiquitous candy bars, cocoa powders and confections. Today chocolate is becoming more popular worldwide, with new markets opening up in Eastern Europe and Asia. This is both good news and bad because, although farmers are producing record numbers of the cacao bean, this is not enough, some researchers worry, to keep pace with global demand. Cacao is also facing some alarming problems.

E Philippe Petithuguenin, head of the cacao program at the Centre for International Cooperation in Development-Oriented Agricultural Research (CiRAD) in France, recently addressed a seminar in the Dominican Republic. He displayed a map of the world revealing a narrow band within 18° north and south of the equator, where cacao grows. In the four centuries since the Spanish first happened upon cacao, it has been planted all around this hot humid tropical belt — from South America and the Caribbean to West Africa, East Asia, and New Guinea and Vanuatu in the Pacific.

F Today 70% of all chocolate beans come from West Africa and Central Africa. In many parts, growers practice so-called pioneer farming. They strip patches of forest of all but the tallest canopy trees and then they put in cacao, using temporary plantings of banana to shade the cacao while it's young. With luck, groves like this may produce annual yields of 50 to 60 pods per tree for 25 to 30 years. But eventually, pests, pathogens and soil exhaustion take their toll and yields diminish. Then the growers move on and clear a new forest patch — unless farmers of other crops get there first. 'You cannot keep cutting the tropical forest, because the forest itself is endangered,' said Petithuguenin. 'World demand for chocolate increases by 3% a year on average. With a lack of land for new plantings in tropical forests, how do you meet that?'

G Many farmers have a more imminent worry: outrunning disease. Cacao, especially when grown in plantations, is at the mercy of many afflictions, mostly rotting diseases caused by various species of fungi which cover the pods in fungus or kill the trees. These fungi and other diseases spoil more than a quarter of the world's yearly harvest and can devastate entire cacao-growing regions.

H One such disease, witches broom, devastated the cacao plantations in the Bahia region of Brazil. Brazil was the third largest producer of cacao beans but in the 1980s the yields fell by 75%. According to Petithuguenin, 'if a truly devastating disease like witches broom reached West Africa (the world's largest producer), it could be catastrophic.' If another producer had the misfortune to falter now, the ripples would be felt the world over. In the United States, for example, imported cacao is the linchpin of an $8.6 billion domestic chocolate industry that in turn supports the nation's dairy and nut industries; 20% of all dairy products in the US go into confectionery.

I Today research is being carried out to try to address this problem by establishing disease-resistant plants. However, even the best plants are useless if there isn't anywhere to grow them. Typically, farmers who grow cacao get a pittance for their beans compared with the profits reaped by the rest of the chocolate business. Most are at the mercy of local middlemen who buy the beans then sell them for a much higher price to the chocolate manufacturers. If the situation is to improve for farmers, these people need to be removed from the process. But the economics of cacao is rapidly changing because of the diminishing supply of beans. Some companies have realized that they need to work more closely with the farmers to ensure that sustainable farming practices are used. They need to replant areas and create a buffer for the forest, to have ground cover, shrubs and small trees as well as the canopy trees. Then the soil will be more robust and more productive. They also need to empower the farmers by guaranteeing them a higher price for their beans so that they will be encouraged to grow cacao and can maintain their way of life.`;

const PASSAGE_2 = `A The first anybody knew about Dutchman Frank Siegmund and his family was when workmen tramping through a field found a narrow steel chimney protruding through the grass. Closer inspection revealed a chink of sky-light window among the thistles, and when amazed investigators moved down the side of the hill they came across a pine door complete with leaded diamond glass and a brass knocker set into an underground building. The Siegmunds had managed to live undetected for six years outside the border town of Breda, in Holland. They are the latest in a clutch of individualistic homemakers who have burrowed underground in search of tranquillity.

B Most, falling foul of strict building regulations, have been forced to dismantle their individualistic homes and return to more conventional lifestyles. But subterranean suburbia, Dutch-style, is about to become respectable and chic. Seven luxury homes cosseted away inside a high earth-covered noise embankment next to the main Tilburg city road recently went on the market for $296,500 each. The foundations had yet to be dug, but customers queued up to buy the unusual part-submerged houses, whose back wall consists of a grassy mound and whose front is a long glass gallery.

C The Dutch are not the only would-be moles. Growing numbers of Europeans are burrowing below ground to create houses, offices, discos and shopping malls. It is already proving a way of life in extreme climates; in winter months in Montreal, Canada, for instance, citizens can escape the cold in an underground complex complete with shops and even health clinics. In Tokyo, builders are planning a massive underground city to be begun in the next decade, and underground shopping malls are already common in Japan, where 90 percent of the population is squeezed into 20 percent of the land space.

D Building big commercial buildings underground can be a way to avoid disfiguring or threatening a beautiful or 'environmentally sensitive' landscape. Indeed many of the buildings which consume most land — such as cinemas, supermarkets, theatres, warehouses or libraries — have no need to be on the surface since they do not need windows.

E There are big advantages, too, when it comes to private homes. A development of 194 houses which would take up 14 hectares of land above ground would occupy 2.7 hectares below it, while the number of roads would be halved. Under several metres of earth, noise is minimal and insulation is excellent. "We get 40 to 50 enquiries a week," says Peter Carpenter, secretary of the British Earth Sheltering Association, which builds similar homes in Britain. "People see this as a way of building for the future." An underground dweller himself, Carpenter has never paid a heating bill, thanks to solar panels and natural insulation.

F In Europe the obstacle has been conservative local authorities and developers who prefer to ensure quick sales with conventional mass-produced housing. But the Dutch development was greeted with undisguised relief by South Limburg planners because of Holland's chronic shortage of land. It was the Tilburg architect Jo Hurkmans who hit on the idea of making use of noise embankments on main roads. His two-floored, four-bedroomed, two-bathroomed detached homes are now taking shape. "They are not so much below the earth as in it," he says. "All the light will come through the glass front, which runs from the second-floor ceiling to the ground. Areas which do not need much natural lighting are at the back. The living accommodation is to the front so nobody notices that the back is dark."

G In the US, where energy-efficient homes became popular after the oil crisis of 1973, 10,000 underground houses have been built. A terrace of five homes, Britain's first subterranean development, is under way in Nottinghamshire. Italy's outstanding example of subterranean architecture is the Olivetti residential centre in Ivrea. Commissioned by Roberto Olivetti in 1969, it comprises 82 one-bedroomed apartments and 12 maisonettes and forms a house/hotel for Olivetti employees. It is built into a hill and little can be seen from outside except a glass facade. Patrizia Vallecchi, a resident since 1992, says it is little different from living in a conventional apartment.

H Not everyone adapts so well, and in Japan scientists at the Shimizu Corporation have developed "space creation" systems which mix light, sounds, breezes and scents to stimulate people who spend long periods below ground. Underground offices in Japan are being equipped with "virtual" windows and mirrors, while underground departments in the University of Minnesota have periscopes to reflect views and light.

I But Frank Siegmund and his family love their hobbit lifestyle. Their home evolved when he dug a cool room for his bakery business in a hill he had created. During a heatwave, they took to sleeping there. "We felt at peace and so close to nature," he says. "Gradually I began adding to the rooms. It sounds strange but we are so close to the earth we draw strength from its vibrations. Our children love it; not every child can boast of being watched through their playroom windows by rabbits."`;

const PASSAGE_3 = `A Unusual incidents are being reported across the Arctic. Inuit families going off on snowmobiles to prepare their summer hunting camps have found themselves cut off from home by a sea of mud, following early thaws. There are reports of igloos losing their insulating properties as the snow drips and refreezes, of lakes draining into the sea as permafrost melts, and sea ice breaking up earlier than usual, carrying seals beyond the reach of hunters. Climate change may still be a rather abstract idea to most of us, but in the Arctic, it is already having dramatic effects — if summertime ice continues to shrink at its present rate, the Arctic Ocean could soon become virtually ice-free in summer. The knock-on effects are likely to include more warming, cloudier skies, increased precipitation and higher sea levels. Scientists are increasingly keen to find out what's going on because they consider the Arctic the 'canary in the mine' for global warming — a warning of what's in store for the rest of the world.

B For the Inuit the problem is urgent. They live in precarious balance with one of the toughest environments on earth. Climate change, whatever its causes, is a direct threat to their way of life. Nobody knows the Arctic as well as the locals, which is why they are not content simply to stand back and let outside experts tell them what's happening. In Canada, where the Inuit people are jealously guarding their hard-won autonomy in the country's newest territory, Nunavut, they believe their best hope of survival in this changing environment lies in combining their ancestral knowledge with the best of modern science. This is a challenge in itself.

C The Canadian Arctic is a vast, treeless polar desert that's covered with snow for most of the year. Venture into this terrain and you get some idea of the hardships facing anyone who calls this home. Farming is out of the question and nature offers meagre pickings. Humans first settled in the Arctic a mere 4,500 years ago, surviving by exploiting sea mammals and fish. The environment tested them to the limits: sometimes the colonists were successful, sometimes they failed and vanished. But around a thousand years ago, one group emerged that was uniquely well adapted to cope with the Arctic environment. These Thule people moved in from Alaska, bringing kayaks, sleds, dogs, pottery and iron tools. They are the ancestors of today's Inuit people.

D Life for the descendants of the Thule people is still harsh. Nunavut is 1.9 million square kilometres of rock and ice, and a handful of islands around the North Pole. It's currently home to 2,500 people, all but a handful of them indigenous Inuit. Over the past 40 years, most have abandoned their nomadic ways and settled in the territory's 28 isolated communities, but they still rely heavily on nature to provide food and clothing. Provisions available in local shops have to be flown into Nunavut on one of the most costly air networks in the world, or brought by supply ship during the few ice-free weeks of summer. It would cost a family around £7,000 a year to replace meat they obtained themselves through hunting with imported meat. Economic opportunities are scarce, and for many people state benefits are their only income.

E While the Inuit may not actually starve if hunting and trapping are curtailed by climate change, there has certainly been an impact on people's health. Obesity, heart disease and diabetes are beginning to appear in a people for whom these have never before been problems. There has been a crisis of identity as the traditional skills of hunting, trapping and preparing skins have begun to disappear. In Nunavut's 'igloo and email' society, where adults who were born in igloos have children who may never have been out on the land, there's a high incidence of depression.

F With so much at stake, the Inuit are determined to play a key role in teasing out the mysteries of climate change in the Arctic. Having survived there for centuries, they believe their wealth of traditional knowledge is vital to the task. And Western scientists are starting to draw on this wisdom, increasingly referred to as 'Inuit Qaujimajatuqangit', or IQ. 'In the early days, scientists ignored us when they came up here to study anything. They just figured these people don't know very much so we won't ask them,' says John Amagoalik, an Inuit leader and politician. 'But in recent years IQ has had much more credibility and weight.' In fact it is now a requirement for anyone hoping to get permission to do research that they consult the communities, who are helping to set the research agenda to reflect their most important concerns. They can turn down applications from scientists they believe will work against their interests or research projects that will impinge too much on their daily lives and traditional activities.

G Some scientists doubt the value of traditional knowledge because the occupation of the Arctic doesn't go back far enough. Others, however, point out that the first weather stations in the far north date back just 50 years. There are still huge gaps in our environmental knowledge, and despite the scientific onslaught, many predictions are no more than best guesses. IQ could help to bridge the gap and resolve the tremendous uncertainty about how much of what we're seeing is natural capriciousness and how much is the consequence of human activity.`;

const HEADINGS_S2 = [
    { numeral: "i", text: "A designer describes his houses" },
    { numeral: "ii", text: "Most people prefer conventional housing" },
    { numeral: "iii", text: "Simulating a natural environment" },
    { numeral: "iv", text: "How an underground family home developed" },
    { numeral: "v", text: "Demands on space and energy are reduced" },
    { numeral: "vi", text: "The plans for future homes" },
    { numeral: "vii", text: "Worldwide examples of underground living accommodation" },
    { numeral: "viii", text: "Some buildings do not require natural light" },
    { numeral: "ix", text: "Developing underground services around the world" },
    { numeral: "x", text: "Underground living improves health" },
    { numeral: "xi", text: "Homes sold before completion" },
    { numeral: "xii", text: "An underground home is discovered" },
];
const NUMERALS_S2 = HEADINGS_S2.map(h => h.numeral);

const HEADINGS_S3 = [
    { numeral: "i", text: "The reaction of the Inuit community to climate change" },
    { numeral: "ii", text: "Understanding of climate change remains limited" },
    { numeral: "iii", text: "Alternative sources of essential supplies" },
    { numeral: "iv", text: "Respect for Inuit opinion grows" },
    { numeral: "v", text: "A healthier choice of food" },
    { numeral: "vi", text: "A difficult landscape" },
    { numeral: "vii", text: "Negative effects on well-being" },
    { numeral: "viii", text: "Alarm caused by unprecedented events in the Arctic" },
    { numeral: "ix", text: "The benefits of an easier existence" },
];
const NUMERALS_S3 = HEADINGS_S3.map(h => h.numeral);

const LETTERS_AI = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// Q14–21: paragraphs B–I of passage 2 (A is the worked example)
const S2_ITEMS = ["B", "C", "D", "E", "F", "G", "H", "I"].map((p, i) => ({
    questionNumber: 14 + i, text: `Paragraph ${p}`, correctAnswer: BLANK,
}));

// Q27–32: paragraphs B–G of passage 3 (A is the worked example)
const S3_ITEMS = ["B", "C", "D", "E", "F", "G"].map((p, i) => ({
    questionNumber: 27 + i, text: `Paragraph ${p}`, correctAnswer: BLANK,
}));

const readingTest = {
    testId: "READING_ACADEMIC_021",
    testNumber: 21,
    title: "Academic Reading Mock Test 21",
    description: "Academic Reading Test with 3 passages and 40 questions",
    source: "Test 01",
    testType: "academic",
    difficulty: "medium",
    // Stays inactive until the answer key is filled in — see the file header.
    isActive: false,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══ SECTION 1 (Q1–13) — Endangered chocolate ═══
        {
            sectionNumber: 1,
            title: "Endangered chocolate",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: PASSAGE_1,
            questionGroups: [
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 1,
                    endQuestion: 3,
                    mainInstruction: "Select the correct letter, A, B, C or D.",
                    subInstruction: "Write your answers in boxes 1-3 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 1,
                            questionText: "The flowers of the cacao plant appear",
                            options: [
                                { letter: "A", text: "at the end of its top branches." },
                                { letter: "B", text: "along all of its branches." },
                                { letter: "C", text: "mainly on its trunk." },
                                { letter: "D", text: "close to its leaves." },
                            ],
                            correctAnswer: BLANK,
                        },
                        {
                            questionNumber: 2,
                            questionText: "In Africa, banana trees are planted with the cacao plants in order to",
                            options: [
                                { letter: "A", text: "replace the largest trees." },
                                { letter: "B", text: "protect the new plants." },
                                { letter: "C", text: "provide an extra crop." },
                                { letter: "D", text: "help improve soil quality." },
                            ],
                            correctAnswer: BLANK,
                        },
                        {
                            questionNumber: 3,
                            questionText: "In paragraph H, what is the writer referring to when he says 'the ripples would be felt the world over'?",
                            options: [
                                { letter: "A", text: "the impact a collapse in chocolate production could have on other industries" },
                                { letter: "B", text: "the possibility of disease spreading to other crops" },
                                { letter: "C", text: "the effects of the economy on world chocolate growers" },
                                { letter: "D", text: "the link between Brazilian growers and African growers" },
                            ],
                            correctAnswer: BLANK,
                        },
                    ],
                },
                {
                    groupType: "matching-information",
                    startQuestion: 4,
                    endQuestion: 9,
                    mainInstruction: "The Reading Passage has nine paragraphs labelled A-I. Which paragraph contains the following information?",
                    subInstruction: "Select the correct letter A-I in boxes 4-9 on your answer sheet.",
                    paragraphOptions: LETTERS_AI,
                    matchingItems: [
                        { questionNumber: 4, text: "a list of the cacao growing areas", correctAnswer: BLANK },
                        { questionNumber: 5, text: "an example of how disease has affected one cacao growing region", correctAnswer: BLANK },
                        { questionNumber: 6, text: "details of an ancient chocolate drink", correctAnswer: BLANK },
                        { questionNumber: 7, text: "a brief summary of how the chocolate industry has changed in modern times", correctAnswer: BLANK },
                        { questionNumber: 8, text: "the typical lifespan and crop size of a cacao plantation", correctAnswer: BLANK },
                        { questionNumber: 9, text: "a reference to the scientific identification of the cacao plant", correctAnswer: BLANK },
                    ],
                },
                {
                    groupType: "note-completion",
                    startQuestion: 10,
                    endQuestion: 13,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Write NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 10-13 on your answer sheet.",
                    mainHeading: "Ways of dealing with the plant's problems",
                    passage: `• Need to find plants which are not affected by 10 __________.\n• Chocolate producers need to work directly with farmers instead of 11 __________.\n• Need to encourage farmers to use 12 __________ methods to grow cacao plants.\n• Make sure farmers receive some of the 13 __________ made by the chocolate industry.`,
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "multiple-choice-full", questionText: "The flowers of the cacao plant appear", correctAnswer: BLANK, marks: 1 },
                { questionNumber: 2, questionType: "multiple-choice-full", questionText: "In Africa, banana trees are planted with the cacao plants in order to", correctAnswer: BLANK, marks: 1 },
                { questionNumber: 3, questionType: "multiple-choice-full", questionText: "In paragraph H, what is the writer referring to when he says 'the ripples would be felt the world over'?", correctAnswer: BLANK, marks: 1 },
                { questionNumber: 4, questionType: "matching-information", questionText: "a list of the cacao growing areas", options: LETTERS_AI, correctAnswer: BLANK, marks: 1 },
                { questionNumber: 5, questionType: "matching-information", questionText: "an example of how disease has affected one cacao growing region", options: LETTERS_AI, correctAnswer: BLANK, marks: 1 },
                { questionNumber: 6, questionType: "matching-information", questionText: "details of an ancient chocolate drink", options: LETTERS_AI, correctAnswer: BLANK, marks: 1 },
                { questionNumber: 7, questionType: "matching-information", questionText: "a brief summary of how the chocolate industry has changed in modern times", options: LETTERS_AI, correctAnswer: BLANK, marks: 1 },
                { questionNumber: 8, questionType: "matching-information", questionText: "the typical lifespan and crop size of a cacao plantation", options: LETTERS_AI, correctAnswer: BLANK, marks: 1 },
                { questionNumber: 9, questionType: "matching-information", questionText: "a reference to the scientific identification of the cacao plant", options: LETTERS_AI, correctAnswer: BLANK, marks: 1 },
                { questionNumber: 10, questionType: "note-completion", questionText: "Need to find plants which are not affected by __________.", correctAnswer: BLANK, marks: 1 },
                { questionNumber: 11, questionType: "note-completion", questionText: "Chocolate producers need to work directly with farmers instead of __________.", correctAnswer: BLANK, marks: 1 },
                { questionNumber: 12, questionType: "note-completion", questionText: "Need to encourage farmers to use __________ methods to grow cacao plants.", correctAnswer: BLANK, marks: 1 },
                { questionNumber: 13, questionType: "note-completion", questionText: "Make sure farmers receive some of the __________ made by the chocolate industry.", correctAnswer: BLANK, marks: 1 },
            ],
        },

        // ═══ SECTION 2 (Q14–26) — Moles happy as homes go underground ═══
        {
            sectionNumber: 2,
            title: "Moles happy as homes go underground",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: PASSAGE_2,
            questionGroups: [
                {
                    groupType: "matching-headings",
                    startQuestion: 14,
                    endQuestion: 21,
                    mainInstruction: "Reading Passage 2 has nine paragraphs (A-I). Choose the most suitable heading for each paragraph from the list of headings below.",
                    subInstruction: "Select the appropriate numbers (i-xii) in boxes 14-21 on your answer sheet. Paragraph A has been done for you as an example.",
                    note: "NB There are more headings than paragraphs so you will not use all of them.",
                    featureListTitle: "List of Headings",
                    headingsList: HEADINGS_S2,
                    paragraphOptions: NUMERALS_S2,
                    exampleItems: [{ text: "Paragraph A", answer: "xii" }],
                    // The DB keeps matching-headings items in both fields; the exam
                    // page reads matchingItems and the admin editor reads statements.
                    statements: S2_ITEMS,
                    matchingItems: S2_ITEMS,
                },
                {
                    groupType: "sentence-completion",
                    startQuestion: 22,
                    endQuestion: 26,
                    mainInstruction: "Complete the sentences below with words taken from the reading passage.",
                    subInstruction: "Use NO MORE THAN THREE WORDS for each answer. Write your answers in boxes 22-26 on your answer sheet.",
                    statements: [
                        { questionNumber: 22, text: "Many developers prefer mass-produced houses because they __________", correctAnswer: BLANK },
                        { questionNumber: 23, text: "The Dutch development was welcomed by __________", correctAnswer: BLANK },
                        { questionNumber: 24, text: "Hurkmans' houses are built into __________", correctAnswer: BLANK },
                        { questionNumber: 25, text: "The Ivrea centre was developed for __________", correctAnswer: BLANK },
                        { questionNumber: 26, text: "Japanese scientists are helping people __________ underground life.", correctAnswer: BLANK },
                    ],
                },
            ],
            questions: [
                ...S2_ITEMS.map(it => ({
                    questionNumber: it.questionNumber,
                    questionType: "matching-headings",
                    questionText: it.text,
                    options: NUMERALS_S2,
                    correctAnswer: BLANK,
                    marks: 1,
                })),
                { questionNumber: 22, questionType: "sentence-completion", questionText: "Many developers prefer mass-produced houses because they __________", correctAnswer: BLANK, marks: 1 },
                { questionNumber: 23, questionType: "sentence-completion", questionText: "The Dutch development was welcomed by __________", correctAnswer: BLANK, marks: 1 },
                { questionNumber: 24, questionType: "sentence-completion", questionText: "Hurkmans' houses are built into __________", correctAnswer: BLANK, marks: 1 },
                { questionNumber: 25, questionType: "sentence-completion", questionText: "The Ivrea centre was developed for __________", correctAnswer: BLANK, marks: 1 },
                { questionNumber: 26, questionType: "sentence-completion", questionText: "Japanese scientists are helping people __________ underground life.", correctAnswer: BLANK, marks: 1 },
            ],
        },

        // ═══ SECTION 3 (Q27–40) — Climate change and the Inuit ═══
        {
            sectionNumber: 3,
            title: "Climate change and the Inuit",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: PASSAGE_3,
            questionGroups: [
                {
                    groupType: "matching-headings",
                    startQuestion: 27,
                    endQuestion: 32,
                    mainInstruction: "Reading Passage 3 has seven paragraphs, A-G. Choose the correct heading for paragraphs B-G from the list of headings below.",
                    subInstruction: "Select the correct number i-ix, in boxes 27-32 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: HEADINGS_S3,
                    paragraphOptions: NUMERALS_S3,
                    exampleItems: [{ text: "Paragraph A", answer: "viii" }],
                    statements: S3_ITEMS,
                    matchingItems: S3_ITEMS,
                },
                {
                    groupType: "summary-completion",
                    startQuestion: 33,
                    endQuestion: 40,
                    mainInstruction: "Complete the summary of paragraphs C and D below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from paragraphs C and D for each answer. Write your answers in boxes 33-40 on your answer sheet.",
                    mainHeading: "",
                    summarySegments: [
                        { type: "text", content: "If you visit the Canadian Arctic, you immediately appreciate the problems faced by people for whom this is home. It would clearly be impossible for the people to engage in " },
                        { type: "blank", questionNumber: 33, correctAnswer: BLANK },
                        { type: "text", content: " as a means of supporting themselves. For thousands of years they have had to rely on catching " },
                        { type: "blank", questionNumber: 34, correctAnswer: BLANK },
                        { type: "text", content: " and " },
                        { type: "blank", questionNumber: 35, correctAnswer: BLANK },
                        { type: "text", content: " as a means of sustenance. The harsh surroundings saw many who tried to settle there pushed to their limits, although some were successful. The " },
                        { type: "blank", questionNumber: 36, correctAnswer: BLANK },
                        { type: "text", content: " people were an example of the latter and for them the environment did not prove unmanageable. For the present inhabitants, life continues to be a struggle. The territory of Nunavut consists of little more than ice, rock and a few " },
                        { type: "blank", questionNumber: 37, correctAnswer: BLANK },
                        { type: "text", content: ". In recent years, many of them have been obliged to give up their " },
                        { type: "blank", questionNumber: 38, correctAnswer: BLANK },
                        { type: "text", content: " lifestyle, but they continue to depend mainly on " },
                        { type: "blank", questionNumber: 39, correctAnswer: BLANK },
                        { type: "text", content: " their food and clothes. " },
                        { type: "blank", questionNumber: 40, correctAnswer: BLANK },
                        { type: "text", content: " produce is particularly expensive." },
                    ],
                },
            ],
            questions: [
                ...S3_ITEMS.map(it => ({
                    questionNumber: it.questionNumber,
                    questionType: "matching-headings",
                    questionText: it.text,
                    options: NUMERALS_S3,
                    correctAnswer: BLANK,
                    marks: 1,
                })),
                ...[33, 34, 35, 36, 37, 38, 39, 40].map(n => ({
                    questionNumber: n,
                    questionType: "summary-completion",
                    questionText: `Summary of paragraphs C and D — blank ${n}`,
                    correctAnswer: BLANK,
                    marks: 1,
                })),
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
            console.log(`✅ Test ${readingTest.testNumber} UPDATED!`);
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) { console.log("❌ No admin user"); process.exit(1); }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log(`✅ Test ${readingTest.testNumber} CREATED!`);
        }

        const test = await ReadingTest.findOne({ testNumber: readingTest.testNumber });
        if (test) {
            const sections = (test as any).sections || [];
            console.log(`\n📊 Verification:`);
            sections.forEach((s: any, i: number) => {
                console.log(`  Section ${i + 1}: ${s.title} | Groups: ${s.questionGroups?.length} | Qs: ${s.questions?.length}`);
            });
            console.log(`  isActive: ${(test as any).isActive} (answers pending)`);
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
}
seedTest();

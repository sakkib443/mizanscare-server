import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_AC_007",
    testNumber: 107,
    testType: "academic" as const,
    title: "Reading Mock Test 07 - Academic",
    description: "IELTS Academic Reading Test featuring passages on The King of Fruits and Esperanto",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // SECTION 1: The King of Fruits (Q1-13)
        {
            sectionNumber: 1,
            title: "The King of Fruits",
            passage: `A One fact is certain: you\u2019ll smell it before you see it. The scent (or should that be odor?) is overpowering (or should that be nauseating?). One inhales it with delight, or shrinks back in disgust. Is it sweet almonds with vanilla custard and a splash of whiskey? Or old socks garnished with rotten onion and a sprinkling of turpentine? Whatever the description, it wafts from what must be considered the most singular fruit on the planet\u2014the durian, a Southeast Asian favorite, commonly called the \u2018king of fruits\u2019.\n\nB Its title is, in many ways, deserved. As big as a basketball, up to three kilograms heavy, and most noticeably, covered with a thick and tough thorn-covered husk, it demands a royal respect. The thorns are so sharp that even holding the massive object is difficult. In supermarkets, they are usually put into mesh bags to ease handling, while extracting the flesh itself requires the wearing of thick protective gloves, a delicate and dexterous use of a large knife, and visible effort. One can see why it is increasingly popular, in western markets, to have that flesh removed, wrapped up, and purchased directly.\n\nC This leads one to wonder why nature designed such a smelly fruit in such an inconvenient package. Nature is, however, cleverer than one might think. For a start, that pungent odor allows easier detection by animals in the thick tropical forests of Brunei, Indonesia, and Malaysia, where the wild durian originates. When the pod falls, and the husk begins to crack open, wild deer, pigs, orangutans, and elephants are easily drawn forth, navigating from hundreds of meters away directly to the tree. The second clever fact is that, since the inner seeds are rather large, the durian tree needs correspondingly larger animals to eat, ingest, and transport these seeds away, hence the use of that tough spiny cover. Only the largest and strongest animals can get past that.\n\nD And what are they seeking? Upon prising open the large pod, one is presented with white fibrous pith in which are nestled pockets of soft yellowish flesh, divided into lobes. Each lobe holds a large brown seed within. Although these seeds themselves can be cooked and eaten, it is the surrounding flesh over which all the fuss is made. One of the best descriptions comes from the British naturalist, Alfred Wallace. Written in 1856, his experience is typical of many, and certainly of mine. At first, he struggled hard to overcome the \u2018disagreeable aroma\u2019, but upon \u2018eating it out of doors\u2019 found the flesh to have a \u2018rich glutinous smoothness, neither acid nor sweet nor juicy; yet it wants neither of these qualities, for it is in itself perfect\u2019. He \u2018at once became a confirmed durian eater\u2019. Exactly!\n\nE In actual fact, the flavor can vary considerably depending on the stage of ripeness and methods of storage. In Southern Thailand, the people prefer younger durians, with firmer texture and milder flavor, whereas in Malaysia, the preference is to allow the durian to fall naturally from the tree, then further ripen during transport. This results in a buttery texture and highly individual aroma, often slightly fermented. Whatever the case, it is this soft creamy consistency which easily allows durian to blend with other Southeast Asian delicacies, from candy and cakes, to modern milkshakes and ice cream. It can also appear in meals, mixed with vegetables or chili, and lower-grade durian (otherwise unfit for human consumption) is fermented into paste, used in a variety of local rice dishes.\n\nF Such popularity has seen the widespread cultivation of durian, although the tree will only respond to tropical climates\u2014for example, only in the very northern parts of Australia, where it was introduced in the early 1960s. Since that time, modern breeding and cultivation techniques have resulted in the introduction of hundreds of cultivars (subspecies bred, and maintained by propagation, for desirable characteristics). They produce different degrees of odor, seed size, color, and texture of flesh. The tree itself is always very large, up to 50 meters, and given that the heavy thorny pods can hang from even the highest branches, and will drop when ripened, one does not walk within a durian plantation without a hardhat\u2014or at least, not without risking serious injury.\n\nG Thailand, where durian remains very popular, now exports most of this fruit, with five cultivars in large-scale commercial production. The market is principally other Asian nations, although interest is growing in the West as Asian immigrants take their tastes and eating preferences with them \u2014 for example, in Canada and Australia. The fruit is seasonal, and local, sale of durian pods is usually done by weight. These can fetch high prices, particularly in the more affluent Asian countries, and especially when one considers that less than one third of that heavy pod contains the edible pulp. In the true spirit of Alfred Wallace, there are certainly a large and growing number of \u2018confirmed durian eaters\u2019 out there.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 1-13",
            questionGroups: [
                // Q1-4: Matching Information
                {
                    groupType: "matching-information",
                    startQuestion: 1,
                    endQuestion: 4,
                    mainInstruction: "Reading Passage 1 has seven paragraphs, A-G. Which paragraph gives a reason for durian\u2019s",
                    subInstruction: "Write the correct letter, A-G, next to the questions.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    matchingItems: [
                        { questionNumber: 1, text: "spread outside of Asia?", correctAnswer: "G" },
                        { questionNumber: 2, text: "varieties of forms?", correctAnswer: "F" },
                        { questionNumber: 3, text: "variety of food uses?", correctAnswer: "E" },
                        { questionNumber: 4, text: "defining characteristics?", correctAnswer: "B" },
                    ],
                },
                // Q5-7: Diagram Labeling (using short-answer)
                {
                    groupType: "short-answer",
                    startQuestion: 5,
                    endQuestion: 7,
                    mainInstruction: "Label the diagram.",
                    subInstruction: "Choose ONE WORD from the passage for each answer.",
                    questions: [
                        { questionNumber: 5, questionText: "Label 5 on the durian diagram (outer spiny projections)", correctAnswer: "thorns" },
                        { questionNumber: 6, questionText: "Label 6 on the durian diagram (inner rounded part inside the lobe)", correctAnswer: "seed" },
                        { questionNumber: 7, questionText: "Label 7: _________ of flesh", correctAnswer: "pockets" },
                    ],
                },
                // Q8-10: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 8,
                    endQuestion: 10,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "Write TRUE, FALSE or NOT GIVEN.",
                    statements: [
                        { questionNumber: 8, text: "The seeds can be eaten.", correctAnswer: "TRUE" },
                        { questionNumber: 9, text: "Durian trees are grown in many parts of Australia.", correctAnswer: "FALSE" },
                        { questionNumber: 10, text: "Thailand consumes the most durians.", correctAnswer: "NOT GIVEN" },
                    ],
                },
                // Q11-13: Short Answer
                {
                    groupType: "short-answer",
                    startQuestion: 11,
                    endQuestion: 13,
                    mainInstruction: "Answer the questions.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer.",
                    questions: [
                        { questionNumber: 11, questionText: "What can help to carry durians around?", correctAnswer: "mesh bags" },
                        { questionNumber: 12, questionText: "Which sort of durian is usually fermented into paste?", correctAnswer: "lower-grade" },
                        { questionNumber: 13, questionText: "What should one wear when walking among durian trees?", correctAnswer: "a hardhat" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "matching-information", questionText: "spread outside of Asia?", correctAnswer: "G", marks: 1 },
                { questionNumber: 2, questionType: "matching-information", questionText: "varieties of forms?", correctAnswer: "F", marks: 1 },
                { questionNumber: 3, questionType: "matching-information", questionText: "variety of food uses?", correctAnswer: "E", marks: 1 },
                { questionNumber: 4, questionType: "matching-information", questionText: "defining characteristics?", correctAnswer: "B", marks: 1 },
                { questionNumber: 5, questionType: "diagram-labeling", questionText: "Label 5 on diagram", correctAnswer: "thorns", marks: 1 },
                { questionNumber: 6, questionType: "diagram-labeling", questionText: "Label 6 on diagram", correctAnswer: "seed", marks: 1 },
                { questionNumber: 7, questionType: "diagram-labeling", questionText: "Label 7: ___ of flesh", correctAnswer: "pockets", marks: 1 },
                { questionNumber: 8, questionType: "true-false-not-given", questionText: "The seeds can be eaten.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 9, questionType: "true-false-not-given", questionText: "Durian trees are grown in many parts of Australia.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 10, questionType: "true-false-not-given", questionText: "Thailand consumes the most durians.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 11, questionType: "short-answer", questionText: "What can help to carry durians around?", correctAnswer: "mesh bags", marks: 1 },
                { questionNumber: 12, questionType: "short-answer", questionText: "Which sort of durian is usually fermented into paste?", correctAnswer: "lower-grade", marks: 1 },
                { questionNumber: 13, questionType: "short-answer", questionText: "What should one wear when walking among durian trees?", correctAnswer: "a hardhat", acceptableAnswers: ["hardhat"], marks: 1 },
            ],
        },
        // SECTION 2: Esperanto (Q14-26)
        {
            sectionNumber: 2,
            title: "Esperanto",
            passage: `Cu vi paroli Esperanton? Ne? Can you understand this? Should you be expected to? Depending on who you ask, somewhere from 10,000 to two million people in places all over the world could understand this sentence, and presumably reply in this same language. And it is not one that ever evolved through any natural process. To give it its technical name, it is a \u2018constructed auxiliary language\u2019. More specifically, it is \u2018Esperanto\u2019, and out of the several attempts throughout modern history to create artificial languages, Esperanto remains the most widely spoken.\n\n\u2018Widely spoken\u2019 is a relative term here. Compared to any natural language, the number of Esperanto speakers remains pitiably small \u2014 a far cry from the high hopes of its inventor, Dr. Ludwig Zamenhof, who was an eye doctor growing up in the racially divided Eastern-European town of Bialystok. In this complex and uneasy mixture of Poles, Jews, Russians, and Germans, each speaking their own language, a high-minded Zamenhof lamented how these languages so obviously categorised the city\u2019s residents into different, and often hostile, groups. He resolved to create an easily learnt and politically neutral language, one that would transcend nationality, ethnicity, race, colour, and creed. It would be a universal second language, and his first book detailing this idea was published in 1887.\n\nSurprisingly perhaps, the concept quickly gained acceptance and a loyal following. It seems that in a linguistically divided Eastern Europe, many people possessed the same idealism which drove Zamenhof. From there, then to the West, then into the Americas and Asia, Esperanto journals, magazines, and clubs, were formed, ultimately leading to the first world congress of Esperanto speakers in France, in 1905. These congresses have been held every year since then, apart from when world wars delayed proceedings. And today, Esperanto is still present, although very much under the radar. Whilst not yet having achieved the status of being an official language of any state or governing body, it is, at least, occasionally taught at schools and educational institutions on an informal or experimental basis.\n\nWhat actually keeps Esperanto going is the motivation of those who become interested. Language books, journals, and various online and video-based self-learning technologies exist, as well as an active speaking community, but the key question remains: whether it is worth investing the time in acquiring the language. In other words, does it have any innate advantages over other languages or equip its speakers with a useful skill in life? The first question can be promptly answered. Proponents explain that, by being so simple and internally consistent, Esperanto is easy to learn, being able to be mastered in a fraction of the time needed for any conventional language.\n\nWhile we may accept that, the second question is far more problematic and raises further issues, the main one being whether the language is even necessary. Would international communication indeed be better if we all spoke Esperanto? Are there not other factors involved? And why cannot the English language take that role (which it virtually has)? Why divert state funds to support what may always remain a marginalised speech community, especially when there exists so many other languages spoken by far more people, and of far greater utility? The answers are emotional, complex, and confusing.\n\nOne problem with Esperanto is that it is culturally European. Its vocabulary and internal rules of construction derive from European languages, making it difficult for Asian learners. There is also a large and imposing vocabulary, with many nouns rather idiosyncratically chosen, and a certain unnecessary complexity which Zamenhof (who was not a professional linguist) had not realised. In 1894, he suggested a \u2018reformed Esperanto\u2019; however, the Esperanto speakers of that day were loathe to alter a language which they had already mastered, rejecting Zamenhof\u2019s proposals, and also those of a special French committee formed 13 years later to discuss the adoption of a standard international language.\n\nIn the meantime, another artificial language had emerged. Called \u2018Ido\u2019, it was a product of various academics who embedded the changes that Esperanto was thought to have needed. This new language, sharing the same lofty goals, divided the support base of Esperanto. A large number defected to Ido, which then underwent further changes through committee after committee, and eventually the formation of an independent academy. However, Ido suffered substantial decline when its best-known advocate was killed in a car accident, and with the advent of World War One. After the war, its most vocal proponent published his own constructed language, \u2018Novial\u2019, making the schism all too confusing, such that the original Esperanto quickly became the predominant language of its type.\n\nEsperanto may lead the field, but it falls far short of the aim of both its creator and many of its speakers \u2014 that of a truly global second language uniting all in mutual understanding. This high-minded goal, almost universally shared in the early days of the language, has mellowed among many followers, who are now content just to have a special language and its culture and community with whom they can interact. The unlikelihood of achieving more than this was even admitted in an Esperanto convention in 1980, although many still cling to the pracelo, the \u2018original goal\u2019, of an official status and worldwide use. Will this ever be achieved? All I can say is estus agrable pensas tiel, sed preskau certe ne estos.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 14-26",
            questionGroups: [
                // Q14-17: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 14,
                    endQuestion: 17,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 2?",
                    subInstruction: "Write TRUE, FALSE or NOT GIVEN.",
                    statements: [
                        { questionNumber: 14, text: "The number of Esperanto speakers is quite large.", correctAnswer: "FALSE" },
                        { questionNumber: 15, text: "Zamenhof spoke many languages.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 16, text: "Esperanto is easier to learn than other languages.", correctAnswer: "TRUE" },
                        { questionNumber: 17, text: "Esperanto World Congresses have been held every year since 1905.", correctAnswer: "FALSE" },
                    ],
                },
                // Q18-21: Sentence Completion
                {
                    groupType: "sentence-completion",
                    startQuestion: 18,
                    endQuestion: 21,
                    mainInstruction: "Complete the sentences.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer.",
                    statements: [
                        { questionNumber: 18, text: "The different ethnic groups in Zamenhof\u2019s hometown were frequently _________.", correctAnswer: "hostile" },
                        { questionNumber: 19, text: "The first Esperanto speakers shared Zamenhof\u2019s _________.", correctAnswer: "idealism" },
                        { questionNumber: 20, text: "English now essentially provides the means of _________.", correctAnswer: "international communication" },
                        { questionNumber: 21, text: "Official support of Esperanto could be considered a waste of _________.", correctAnswer: "state funds" },
                    ],
                },
                // Q22-26: Matching Features (E/I/B)
                {
                    groupType: "matching-features",
                    startQuestion: 22,
                    endQuestion: 26,
                    mainInstruction: "Choose the correct letter, E, I, or B.",
                    subInstruction: "",
                    featureListTitle: "Languages",
                    featureOptions: [
                        { letter: "E", text: "Esperanto" },
                        { letter: "I", text: "Ido" },
                        { letter: "B", text: "Both" },
                    ],
                    paragraphOptions: ["E", "I", "B"],
                    matchingItems: [
                        { questionNumber: 22, text: "had many stages in its development?", correctAnswer: "I" },
                        { questionNumber: 23, text: "had its development affected by World War One?", correctAnswer: "I" },
                        { questionNumber: 24, text: "has some strange words?", correctAnswer: "E" },
                        { questionNumber: 25, text: "was designed by many people?", correctAnswer: "I" },
                        { questionNumber: 26, text: "has never achieved its aim?", correctAnswer: "B" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 14, questionType: "true-false-not-given", questionText: "The number of Esperanto speakers is quite large.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 15, questionType: "true-false-not-given", questionText: "Zamenhof spoke many languages.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 16, questionType: "true-false-not-given", questionText: "Esperanto is easier to learn than other languages.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 17, questionType: "true-false-not-given", questionText: "Esperanto World Congresses have been held every year since 1905.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 18, questionType: "sentence-completion", questionText: "The different ethnic groups were frequently ___.", correctAnswer: "hostile", marks: 1 },
                { questionNumber: 19, questionType: "sentence-completion", questionText: "The first Esperanto speakers shared Zamenhof\u2019s ___.", correctAnswer: "idealism", marks: 1 },
                { questionNumber: 20, questionType: "sentence-completion", questionText: "English now essentially provides the means of ___.", correctAnswer: "international communication", marks: 1 },
                { questionNumber: 21, questionType: "sentence-completion", questionText: "Official support of Esperanto could be considered a waste of ___.", correctAnswer: "state funds", marks: 1 },
                { questionNumber: 22, questionType: "matching-features", questionText: "had many stages in its development?", correctAnswer: "I", marks: 1 },
                { questionNumber: 23, questionType: "matching-features", questionText: "had its development affected by World War One?", correctAnswer: "I", marks: 1 },
                { questionNumber: 24, questionType: "matching-features", questionText: "has some strange words?", correctAnswer: "E", marks: 1 },
                { questionNumber: 25, questionType: "matching-features", questionText: "was designed by many people?", correctAnswer: "I", marks: 1 },
                { questionNumber: 26, questionType: "matching-features", questionText: "has never achieved its aim?", correctAnswer: "B", marks: 1 },
            ],
        },
        // SECTION 3: A Year without a Summer (Q27-40)
        {
            sectionNumber: 3,
            title: "A Year without a Summer",
            passage: `1816 was a strange year indeed. In America, in midsummer, a \u2018dry fog\u2019 covered the land so thickly that snow fell, and large parts of the country were gripped by an intense and lingering cold front. The situation was no better in Great Britain and Europe, where cool temperatures and wet weather persisted for months. Mary Shelley, author of Frankenstein, while holidaying in Switzerland, complained of \u2018incessant rainfall\u2019, a feeling which may have put her in the mood for writing her most famous work. But there were to be far more significant effects of what became known as the \u2018year without a summer\u2019.\n\nBut where did the summer go? The main culprit, surprisingly, was a volcano on the other side of the planet: Mount Tambora, in Indonesia, whose eruption of the year before was of such colossal magnitude that it altered global climate. In the years leading to this, the mountain had experienced minor eruptions, but the 1815 event was the culmination \u2014 a huge explosive outburst of the central volcanic vent with subsequent caldera collapse. Over 70,000 people in the vicinity were killed from lava flows, tsunamis, and pumice and ash falls. But more significantly, the eruption \u2014 now acknowledged as the largest in recorded history \u2014 ejected huge amounts of dust into the stratosphere. This atmospheric layer is the highest and most static, and least affected by rainfall, which means that it takes relatively long periods for volcanic dust to be washed out. If these dust particles are of fine composition, they are quickly blown around the globe, to remain there for years.\n\nOn a somewhat benign note, this air-borne ash resulted in beautiful pastel-coloured sunsets and extended twilights in Northern Europe. However, on a (quite literally) darker note, it set into motion a \u2018volcanic winter\u2019 due to the filtering of the sun\u2019s rays, and the increased reflectivity of the atmosphere, where heat and sunlight are bounced back into space. But what is intriguing in this case is that even without the Tambora explosion, the period 1790 to 1830 was already one of the coldest on record. This period has officially become known as the \u2018Dalton Minimum\u2019, after John Dalton, a London-based meteorologist who noted that the sun at that time did not seem as active in its production of sunspots and solar flares. Whether there is a correlation between this and the average amount of solar radiation emitted is still unclear. If this does exist, the effect would be small\u2014a fraction of a percent less, but, arguably, significant to our small planet orbiting so far away.\n\nAdding further complexity to the issue, there had been other significant volcanic eruptions in the years prior to Tambora \u2014 in the Caribbean, Japan, and the Philippines \u2014 in which massive dust clouds were the characterising feature. Looking at the Philippino example, 1814 saw the most destructive eruption of Mt Mayon ever. Killing thousands, burying whole towns and villages, the volcano spewed out millions of tons of ash and rock into the high atmosphere. When we put all these factors together, the sequence is thus clearer. With the world already suffering from lower temperatures due to natural variations in the sun\u2019s surface action, a series of severe volcanic eruptions occurred. As a result, the accumulation of ash in the stratosphere rose to a historic high, to which the mammoth Tambora explosion substantially added, sending a savage cold spike throughout the already cooler globe.\n\nThe consequences were dire. With the dramatic temperature swings, falling to near-freezing within hours, and with the sudden summer frosts and sustained drenching rainfall, all across the Northern Hemisphere, staple crops such as maize and wheat failed to mature, and much livestock were killed. With agricultural production already low due to the cooler preceding years, and with the rudimentary road systems of those times rendering the importation and distribution of emergency food supplies limited, this final blow was devastating. It resulted in widespread malnutrition, starvation, and outbreaks of diseases such as typhus and cholera. It created streams of starving refugees, large shifts of population, riots, looting of food warehouses, and other breakdowns of civic order. 100,000 people were thought to have died in Ireland alone, with many times that figure on the European continent. There was such mortality that the famine is now considered the worst of that century.\n\nThe question then is whether it could happen again. And the answer is, since it has happened many times before in geological history, a definite yes. The most extreme case occurred about 70,000 years ago, when the world\u2019s largest known eruption took place at Lake Toba (relatively close to Tambora). This is thought to have plunged the planet into a decade-long volcanic winter, and triggered the onset of the last ice age, a deep freeze of the planet which lasted many tens of thousands of years, all of which, some speculate, just about wiped out the human race. We can rest in the assurance, however, that such events are extremely few and far between. You will certainly be able to enjoy your summer holidays, for a long time to come.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 27-40",
            questionGroups: [
                // Q27-34: Flow Chart Completion
                {
                    groupType: "sentence-completion",
                    startQuestion: 27,
                    endQuestion: 34,
                    mainInstruction: "Complete the flowchart.",
                    subInstruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer.",
                    statements: [
                        { questionNumber: 27, text: "The period 1790\u20131830 was already cold due to the _________.", correctAnswer: "Dalton Minimum" },
                        { questionNumber: 28, text: "The sun was less active in its production of _________ and solar flares.", correctAnswer: "sunspots" },
                        { questionNumber: 29, text: "Other volcanic eruptions occurred in the Caribbean, Japan, and the _________.", correctAnswer: "Philippines" },
                        { questionNumber: 30, text: "Mt Tambora experienced _________ before the 1815 event.", correctAnswer: "minor eruptions" },
                        { questionNumber: 31, text: "The eruption ejected huge amounts of dust into the _________.", correctAnswer: "stratosphere" },
                        { questionNumber: 32, text: "This caused a \u2018_________\u2019 due to the filtering of the sun\u2019s rays.", correctAnswer: "volcanic winter" },
                        { questionNumber: 33, text: "Staple crops such as _________ failed to mature.", correctAnswer: "maize and wheat" },
                        { questionNumber: 34, text: "There were outbreaks of diseases such as _________ and cholera.", correctAnswer: "typhus" },
                    ],
                },
                // Q35-40: Matching Information (Locations)
                {
                    groupType: "matching-information",
                    startQuestion: 35,
                    endQuestion: 40,
                    mainInstruction: "Which location saw",
                    subInstruction: "Write the correct letter, A-G, next to the questions.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    featureListTitle: "Locations",
                    featureOptions: [
                        { letter: "A", text: "America" },
                        { letter: "B", text: "Lake Toba" },
                        { letter: "C", text: "London" },
                        { letter: "D", text: "Northern Europe" },
                        { letter: "E", text: "Philippines" },
                        { letter: "F", text: "Switzerland" },
                        { letter: "G", text: "Tambora" },
                    ],
                    matchingItems: [
                        { questionNumber: 35, text: "a positive effect of a volcanic eruption?", correctAnswer: "D" },
                        { questionNumber: 36, text: "the biggest volcanic eruption?", correctAnswer: "B" },
                        { questionNumber: 37, text: "scientific observation?", correctAnswer: "C" },
                        { questionNumber: 38, text: "a series of eruptions?", correctAnswer: "G" },
                        { questionNumber: 39, text: "buildings destroyed?", correctAnswer: "E" },
                        { questionNumber: 40, text: "a book written?", correctAnswer: "F" },
                    ],
                },
            ],
            questions: [
                // Q27-34: Flow Chart
                { questionNumber: 27, questionType: "sentence-completion", questionText: "The period was already cold due to the ___.", correctAnswer: "Dalton Minimum", marks: 1 },
                { questionNumber: 28, questionType: "sentence-completion", questionText: "The sun was less active in production of ___.", correctAnswer: "sunspots", marks: 1 },
                { questionNumber: 29, questionType: "sentence-completion", questionText: "Other eruptions occurred in Caribbean, Japan, and ___.", correctAnswer: "Philippines", marks: 1 },
                { questionNumber: 30, questionType: "sentence-completion", questionText: "Mt Tambora experienced ___ before 1815.", correctAnswer: "minor eruptions", marks: 1 },
                { questionNumber: 31, questionType: "sentence-completion", questionText: "Dust ejected into the ___.", correctAnswer: "stratosphere", marks: 1 },
                { questionNumber: 32, questionType: "sentence-completion", questionText: "Caused a ___ due to filtering of sun\u2019s rays.", correctAnswer: "volcanic winter", marks: 1 },
                { questionNumber: 33, questionType: "sentence-completion", questionText: "Staple crops such as ___ failed to mature.", correctAnswer: "maize and wheat", marks: 1 },
                { questionNumber: 34, questionType: "sentence-completion", questionText: "Outbreaks of diseases such as ___ and cholera.", correctAnswer: "typhus", marks: 1 },
                // Q35-40: Matching Locations
                { questionNumber: 35, questionType: "matching-information", questionText: "a positive effect of a volcanic eruption?", correctAnswer: "D", marks: 1 },
                { questionNumber: 36, questionType: "matching-information", questionText: "the biggest volcanic eruption?", correctAnswer: "B", marks: 1 },
                { questionNumber: 37, questionType: "matching-information", questionText: "scientific observation?", correctAnswer: "C", marks: 1 },
                { questionNumber: 38, questionType: "matching-information", questionText: "a series of eruptions?", correctAnswer: "G", marks: 1 },
                { questionNumber: 39, questionType: "matching-information", questionText: "buildings destroyed?", correctAnswer: "E", marks: 1 },
                { questionNumber: 40, questionType: "matching-information", questionText: "a book written?", correctAnswer: "F", marks: 1 },
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
            console.log("\u2705 Reading Test 07 updated successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) { console.log("\u274C No admin user found"); process.exit(1); }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log("\u2705 Reading Test 07 created successfully!");
        }
        const test = await ReadingTest.findOne({ testNumber: readingTest.testNumber });
        if (test) {
            console.log(`\n\uD83D\uDCDD Test Details:`);
            console.log(`   Title: ${test.title}`);
            (test.sections as any[]).forEach((s, i) => {
                console.log(`   Section ${i + 1}: ${s.title} \u2014 Groups: ${s.questionGroups?.length || 0}, Questions: ${s.questions?.length || 0}`);
            });
        }
        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("\u274C Error:", error);
        process.exit(1);
    }
}
seedTest();

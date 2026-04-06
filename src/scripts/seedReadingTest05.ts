import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_TEST_05",
    testNumber: 5,
    title: "Reading Mock Test 05 - Academic",
    description: "IELTS Academic Reading Test featuring passages on MIT\u2019s 150-year legacy of innovation",
    source: "IELTS Practice Test",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: The MIT factor (Q1-13)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "The MIT factor: celebrating 150 years of maverick genius",
            passage: `The musician Yo-Yo Ma\u2019s cello may not be the obvious starting point for a journey into one of the world\u2019s great universities. But, as you quickly realise when you step inside the Massachusetts Institute of Technology, there\u2019s precious little going on that you would normally see on a university campus. The cello, resting in a corner of MIT\u2019s celebrated media laboratory \u2014 a hub of creativity \u2014 looks like any other electric classical instrument. But it is much more. Machover, the composer, teacher and inventor responsible for its creation, calls it a \u2018hyperinstrument\u2019, a sort of thinking machine that allows Ma and his cello to interact with one another and make music together. \u2018The aim is to build an instrument worthy of a great musician like Yo-Yo Ma that can understand what he is trying to do and respond to it,\u2019 Machover says. The cello has numerous sensors across its body and by measuring the pressure, speed and angle of the virtuoso\u2019s performance it can interpret his mood and engage with it, producing extraordinary new sounds. The virtuoso cellist frequently performs on the instrument as he tours around the world.\n\nMachover\u2019s passion for pushing at the boundaries of the existing world to extend and unleash human potential is not a bad description of MIT as a whole. This unusual community brings highly gifted, highly motivated individuals together from a vast range of disciplines, united by a common desire: to leap into the dark and reach for the unknown.\n\nThe result of that single unifying ambition is visible all around. For the past 150 years, MIT has been leading the world into the future. The discoveries of its teachers and students have become the common everyday objects that we now all take for granted. The telephone, electromagnets, radars, high-speed photography, office photocopiers, cancer treatments, pocket calculators, computers, the Internet, the decoding of the human genome, lasers, space travel ... the list of innovations that involved essential contributions from MIT and its faculty goes on and on.\n\nFrom the moment MIT was founded by William Barton Rogers in 1861, it was clear what it was not. While Harvard stuck to the English model of a classical education, with its emphasis on Latin and Greek, MIT looked to the German system of learning based on research and hands-on experimentation. Knowledge was at a premium, but it had to be useful.\n\nThis down-to-earth quality is enshrined in the school motto, Mens et manus \u2013 Mind and hand \u2013 as well as its logo, which shows a gowned scholar standing beside an ironmonger bearing a hammer and anvil. That symbiosis of intellect and craftsmanship still suffuses the institute\u2019s classrooms, where students are not so much taught as engaged and inspired.\n\nTake Christopher Merrill, 21, a third-year undergraduate in computer science. He is spending most of his time on a competition set in his robotics class. The contest is to see which student can most effectively program a robot to build a house out of blocks in under ten minutes. Merrill says he could have gone for the easiest route \u2013 designing a simple robot that would build the house quickly. But he wanted to try to master an area of robotics that remains unconquered \u2014 adaptability, the ability of the robot to rethink its plans as the environment around it changes, as would a human. \u2018I like to take on things that have never been done before rather than to work in an iterative way just making small steps forward,\u2019 he explains.\n\nMerrill is already planning the start-up he wants to set up when he graduates in a year\u2019s time. He has an idea for an original version of a contact lens that would augment reality by allowing consumers to see additional visual information. He is fearful that he might be just too late in taking his concept to market, as he has heard that a Silicon Valley firm is already developing something similar. As such, he might become one of many MIT graduates who go on to form companies that fail. Alternatively, he might become one of those who go on to succeed in spectacular fashion. And there are many of them. A survey of living MIT alumni found that they have formed 25,800 companies, employing more than three million people, including about a quarter of the workforce of Silicon Valley.\n\nWhat MIT delights in is taking brilliant minds from around the world in vastly diverse disciplines and putting them together. You can see that in its sparkling new David Koch Institute for Integrative Cancer Research, which brings scientists, engineers and clinicians under one roof. Or in its Energy Initiative, which acts as a bridge for MIT\u2019s combined work across all its five schools, channelling huge resources into the search for a solution to global warming. It works to improve the efficiency of existing energy sources, including nuclear power. It is also forging ahead with alternative energies from solar to wind and geothermal, and has recently developed the use of viruses to synthesise batteries that could prove crucial in the advancement of electric cars.\n\nIn the words of Tim Berners-Lee, the Briton who invented the World Wide Web, \u2018It\u2019s not just another university. Even though I spend my time with my head buried in the details of web technology, the nice thing is that when I do walk the corridors, I bump into people who are working in other fields with their students that are fascinating, and that keeps me intellectually alive.\u2019`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 1-13",
            questionGroups: [
                // Questions 1-5: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 1,
                    endQuestion: 5,
                    mainInstruction: "Do the following statements agree with the information in the reading passage?",
                    subInstruction: "Write TRUE, FALSE or NOT GIVEN.",
                    statements: [
                        { questionNumber: 1, text: "The activities going on at the MIT campus are like those at any other university.", correctAnswer: "FALSE" },
                        { questionNumber: 2, text: "Harvard and MIT shared a similar approach to education when they were founded.", correctAnswer: "FALSE" },
                        { questionNumber: 3, text: "The school motto was suggested by a former MIT student.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 4, text: "MIT\u2019s logo reflects the belief that intellect and craftsmanship go together.", correctAnswer: "TRUE" },
                        { questionNumber: 5, text: "Silicon Valley companies pay higher salaries to graduates from MIT.", correctAnswer: "NOT GIVEN" },
                    ],
                },
                // Questions 6-9: Note Completion
                {
                    groupType: "note-completion",
                    startQuestion: 6,
                    endQuestion: 9,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer.",
                    mainHeading: "Christopher Merrill \u2013 student at MIT",
                    passage: `Degree subject: 6 __________\n\nCompetition: to 7 __________ the automated construction of a house\n\nSpecial focus on: the 8 __________ of robots\n\nFuture plans: to develop new type of 9 __________`,
                    notesSections: [
                        {
                            subHeading: "Christopher Merrill \u2013 student at MIT",
                            bullets: [
                                { type: "question" as const, questionNumber: 6, textBefore: "Degree subject:", textAfter: "", correctAnswer: "computer science" },
                                { type: "question" as const, questionNumber: 7, textBefore: "Competition: to", textAfter: "the automated construction of a house", correctAnswer: "program" },
                                { type: "question" as const, questionNumber: 8, textBefore: "Special focus on: the", textAfter: "of robots", correctAnswer: "adaptability" },
                                { type: "question" as const, questionNumber: 9, textBefore: "Future plans: to develop new type of", textAfter: "", correctAnswer: "contact lens" },
                            ],
                        },
                    ],
                },
                // Questions 10-13: Short Answer
                {
                    groupType: "short-answer",
                    startQuestion: 10,
                    endQuestion: 13,
                    mainInstruction: "Answer the questions below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the reading passage for each answer.",
                    questions: [
                        { questionNumber: 10, questionText: "What proportion of workers at Silicon Valley are employed in companies set up by MIT graduates?", correctAnswer: "a quarter" },
                        { questionNumber: 11, questionText: "What problem does MIT\u2019s Energy Initiative aim to solve?", correctAnswer: "global warming" },
                        { questionNumber: 12, questionText: "Which \u2018green\u2019 innovation might MIT\u2019s work with viruses help improve?", correctAnswer: "electric cars" },
                        { questionNumber: 13, questionText: "In which part of the university does Tim Berners-Lee enjoy stimulating conversations with other MIT staff?", correctAnswer: "corridors" },
                    ],
                },
            ],
            questions: [
                // Q1-5: True/False/Not Given
                { questionNumber: 1, questionType: "true-false-not-given", questionText: "The activities going on at the MIT campus are like those at any other university.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 2, questionType: "true-false-not-given", questionText: "Harvard and MIT shared a similar approach to education when they were founded.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 3, questionType: "true-false-not-given", questionText: "The school motto was suggested by a former MIT student.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 4, questionType: "true-false-not-given", questionText: "MIT\u2019s logo reflects the belief that intellect and craftsmanship go together.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 5, questionType: "true-false-not-given", questionText: "Silicon Valley companies pay higher salaries to graduates from MIT.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                // Q6-9: Note Completion
                { questionNumber: 6, questionType: "note-completion", questionText: "Degree subject:", correctAnswer: "computer science", marks: 1 },
                { questionNumber: 7, questionType: "note-completion", questionText: "Competition: to ___ the automated construction of a house", correctAnswer: "program", marks: 1 },
                { questionNumber: 8, questionType: "note-completion", questionText: "Special focus on: the ___ of robots", correctAnswer: "adaptability", marks: 1 },
                { questionNumber: 9, questionType: "note-completion", questionText: "Future plans: to develop new type of", correctAnswer: "contact lens", marks: 1 },
                // Q10-13: Short Answer
                { questionNumber: 10, questionType: "short-answer", questionText: "What proportion of workers at Silicon Valley are employed in companies set up by MIT graduates?", correctAnswer: "a quarter", marks: 1 },
                { questionNumber: 11, questionType: "short-answer", questionText: "What problem does MIT\u2019s Energy Initiative aim to solve?", correctAnswer: "global warming", marks: 1 },
                { questionNumber: 12, questionType: "short-answer", questionText: "Which \u2018green\u2019 innovation might MIT\u2019s work with viruses help improve?", correctAnswer: "electric cars", marks: 1 },
                { questionNumber: 13, questionType: "short-answer", questionText: "In which part of the university does Tim Berners-Lee enjoy stimulating conversations with other MIT staff?", correctAnswer: "corridors", marks: 1 },
            ],
        },
        // ═══════════════════════════════════════════
        // SECTION 2: Art to the Aid of Technology (Q14-26)
        // Q14-19: Matching Information, Q20-23: Matching Features
        // Q24-26: PENDING — user to provide
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "Art to the Aid of Technology",
            passage: `A.\nOur brains are incredibly agile machines, and it is hard to think of anything they do more efficiently than recognize faces. Just hours after birth, the eyes of newborns are drawn to facelike patterns. An adult brain knows it is seeing a face within 100 milliseconds, and it takes just over a second to realize that two different pictures of a face, even if they are lit or rotated in very different ways, belong to the same person.\n\nB.\nPerhaps the most vivid illustration of our gift for recognition is the magic of caricature\u2014the fact that the sparest cartoon of a familiar face, even a single line dashed off in two seconds, can be identified by our brains in an instant. It is often said that a good caricature looks more like a person than the person themselves. As it happens, this notion, counterintuitive though it may sound, is actually supported by research. In the field of vision science, there is even a term for this seeming paradox\u2014the caricature effect\u2014a phrase that hints at how our brains misperceive faces as much as perceive them.\n\nC.\nHuman faces are all built pretty much the same: two eyes above a nose that\u2019s above a mouth, the features varying from person to person generally by mere millimetres. So, what our brains look for, according to vision scientists, are the outlying features\u2014those characteristics that deviate most from the ideal face we carry around in our heads, the running average of every \u201cvisage\u201d we have ever seen. We code each new face we encounter not in absolute terms but in the several ways, it differs markedly from the mean. In other words, we accentuate what is most important for recognition and largely ignore what is not. Our perception fixates on the upturned nose, the sunken eyes or the fleshy cheeks, making them loom larger. To better identify and remember people, we turn them into caricatures.\n\nD.\nTen years ago, we all imagined that as soon as surveillance cameras had been equipped with the appropriate software, the face of a crime suspect would stand out in a crowd. Like a thumbprint, its unique features and configuration would offer a biometric key that could be immediately checked against any database of suspects. But now a decade has passed, and face-recognition systems still perform miserably in real-world conditions. Just recently, a couple who accidentally swapped passports at an airport in England sailed through electronic gates that were supposed to match their faces to file photos.\n\nE.\nAll this leads to an interesting question. What if, to secure our airports and national landmarks, we need to learn more about caricature? After all, it\u2019s the skill of the caricaturist\u2014the uncanny ability to quickly distill faces down to their most salient features\u2014that our computers most desperately need to acquire. Clearly, better cameras and faster computers simply aren\u2019t going to be enough.\n\nF.\nAt the University of Central Lancashire in England, Charlie Frowd, a senior lecturer in psychology, has used insights from caricature to develop a better police-composite generator. His system, called EvoFIT, produces animated caricatures, with each successive frame showing facial features that are more exaggerated than the last. Frowd\u2019s research supports the idea that we all store memories as caricatures, but with our own personal degree of amplification. So, as an animated composite depicts faces at varying stages of caricature, viewers respond to the stage that is most recognizable to them. In tests, Frowd\u2019s technique has increased positive identifications from as low as 3 percent to upwards of 30 percent.\n\nG.\nTo achieve similar results in computer face recognition, scientists would need to model the artist\u2019s genius even more closely\u2014a feat that might seem impossible if you listen to some of the artists describe their nearly mystical acquisition of skills. Jason Seiler recounts how he trained his mind for years, beginning in middle school, until he gained what he regards as nothing less than a second sight. \u2018A lot of people think that caricature is about picking out someone\u2019s worst feature and exaggerating it as far as you can,\u2019 Seiler says. \u2018That\u2019s wrong. Caricature is basically finding the truth. And then you push the truth.\u2019 Capturing a likeness, it seems, has less to do with the depiction of individual features than with their placement in relationship to one another. \u2018It\u2019s how the human brain recognizes a face. When the ratios between the features are correct, you see that face instantly.\u2019\n\nH.\nPawan Sinha, director of MIT\u2019s Sinha Laboratory for Vision Research, and one of the nation\u2019s most innovative computer-vision researchers, contends that these simple, exaggerated drawings can be objectively and systematically studied and that such work will lead to breakthroughs in our understanding of both human and machine-based vision. His lab at MIT is preparing to computationally analyze hundreds of caricatures this year, from dozens of different artists, with the hope of tapping their intuitive knowledge of what is and isn\u2019t crucial for recognition. He has named this endeavor the Hirschfeld Project, after the famous New York Times caricaturist Al Hirschfeld.\n\nI.\nQuite simply, by analyzing sketches, Sinha hopes to pinpoint the recurring exaggerations in the caricatures that most strongly correlate to particular ways that the original faces deviate from the norm. The results, he believes, will ultimately produce a rank-ordered list of the 20 or so facial attributes that are most important for recognition: \u2018It\u2019s a recipe for how to encode the face,\u2019 he says. In preliminary tests, the lab has already isolated important areas\u2014for example, the ratio of the height of the forehead to the distance between the top of the nose and the mouth.\n\nJ.\nOn a given face, four of 20 such Hirschfeld attributes, as Sinha plans to call them, will be several standard deviations greater than the mean; on another face, a different handful of attributes might exceed the norm. But in all cases, it\u2019s the exaggerated areas of the face that hold the key. As matters stand today, an automated system must compare its target faces against the millions of continually altering faces it encounters. But so far, the software doesn\u2019t know what to look for amid this onslaught of variables. Armed with the Hirschfeld attributes, Sinha hopes that computers can be trained to focus on the features most salient for recognition, tuning out the others. \u2018Then,\u2019 Sinha says, \u2018the sky is the limit.\u2019`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 14-26",
            questionGroups: [
                // Questions 14-19: Matching Information
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 19,
                    mainInstruction: "Reading Passage 2 has ten paragraphs, A-J. Which paragraph contains the following information?",
                    subInstruction: "",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
                    matchingItems: [
                        { questionNumber: 14, text: "why we have mental images of faces that are essentially caricatures", correctAnswer: "C" },
                        { questionNumber: 15, text: "mention of the length of time it can take to become a good caricaturist", correctAnswer: "G" },
                        { questionNumber: 16, text: "an example of how unreliable current security systems can be", correctAnswer: "D" },
                        { questionNumber: 17, text: "reference to the fact that we can match even a hastily drawn caricature to the person it represents", correctAnswer: "B" },
                        { questionNumber: 18, text: "a summary of how the use of multiple caricatures has improved recognition rates in a particular field", correctAnswer: "F" },
                        { questionNumber: 19, text: "a comparison between facial recognition and another well-established form of identification", correctAnswer: "D" },
                    ],
                },
                // Questions 20-23: Matching Features
                {
                    groupType: "matching-features",
                    startQuestion: 20,
                    endQuestion: 23,
                    mainInstruction: "Look at the following statements and the list of people, A-C, below. Match each statement with the correct person.",
                    subInstruction: "",
                    featureListTitle: "List of People",
                    featureOptions: [
                        { letter: "A", text: "Charlie Frowd" },
                        { letter: "B", text: "Jason Seiler" },
                        { letter: "C", text: "Pawan Sinha" },
                    ],
                    matchingItems: [
                        { questionNumber: 20, text: "A single caricature can be recognised straight away if the parts of the face are appropriately positioned.", correctAnswer: "B" },
                        { questionNumber: 21, text: "An evaluation of the work of different caricaturists will provide new information about how we see faces.", correctAnswer: "C" },
                        { questionNumber: 22, text: "People misunderstand what is involved in the design of a caricature.", correctAnswer: "B" },
                        { questionNumber: 23, text: "When given a choice, people will have different views regarding which caricature best represents a particular person\u2019s face.", correctAnswer: "A" },
                    ],
                },
                // Questions 24-26: Sentence Completion
                {
                    groupType: "sentence-completion",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer.",
                    statements: [
                        { questionNumber: 24, text: "Sinha\u2019s aim in the project is to come up with a specific number of what he terms _________ that are key to identification purposes.", correctAnswer: "Hirschfeld attributes" },
                        { questionNumber: 25, text: "He hopes these can be used to enable an _________ to identify faces more quickly and more accurately.", correctAnswer: "automated system" },
                        { questionNumber: 26, text: "In order to do this, his team must examine the most frequently _________ features in a large number of cartoon faces.", correctAnswer: "exaggerated" },
                    ],
                },
            ],
            questions: [
                // Q14-19: Matching Information
                { questionNumber: 14, questionType: "matching-information", questionText: "why we have mental images of faces that are essentially caricatures", options: ["A","B","C","D","E","F","G","H","I","J"], correctAnswer: "C", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "mention of the length of time it can take to become a good caricaturist", options: ["A","B","C","D","E","F","G","H","I","J"], correctAnswer: "G", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "an example of how unreliable current security systems can be", options: ["A","B","C","D","E","F","G","H","I","J"], correctAnswer: "D", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "reference to the fact that we can match even a hastily drawn caricature to the person it represents", options: ["A","B","C","D","E","F","G","H","I","J"], correctAnswer: "B", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "a summary of how the use of multiple caricatures has improved recognition rates in a particular field", options: ["A","B","C","D","E","F","G","H","I","J"], correctAnswer: "F", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "a comparison between facial recognition and another well-established form of identification", options: ["A","B","C","D","E","F","G","H","I","J"], correctAnswer: "D", marks: 1 },
                // Q20-23: Matching Features
                { questionNumber: 20, questionType: "matching-features", questionText: "A single caricature can be recognised straight away if the parts of the face are appropriately positioned.", options: ["A","B","C"], correctAnswer: "B", marks: 1 },
                { questionNumber: 21, questionType: "matching-features", questionText: "An evaluation of the work of different caricaturists will provide new information about how we see faces.", options: ["A","B","C"], correctAnswer: "C", marks: 1 },
                { questionNumber: 22, questionType: "matching-features", questionText: "People misunderstand what is involved in the design of a caricature.", options: ["A","B","C"], correctAnswer: "B", marks: 1 },
                { questionNumber: 23, questionType: "matching-features", questionText: "When given a choice, people will have different views regarding which caricature best represents a particular person\u2019s face.", options: ["A","B","C"], correctAnswer: "A", marks: 1 },
                // Q24-26: Sentence Completion
                { questionNumber: 24, questionType: "sentence-completion", questionText: "Sinha\u2019s aim in the project is to come up with a specific number of what he terms ___ that are key to identification purposes.", correctAnswer: "Hirschfeld attributes", marks: 1 },
                { questionNumber: 25, questionType: "sentence-completion", questionText: "He hopes these can be used to enable an ___ to identify faces more quickly and more accurately.", correctAnswer: "automated system", marks: 1 },
                { questionNumber: 26, questionType: "sentence-completion", questionText: "In order to do this, his team must examine the most frequently ___ features in a large number of cartoon faces.", correctAnswer: "exaggerated", marks: 1 },
            ],
        },
        // ═══════════════════════════════════════════
        // SECTION 3: Clocking Cultures (Q27-40)
        // Q27-32: Matching Headings, Q33-37: MCQ, Q38-40: Sentence Completion
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "Clocking Cultures",
            passage: `A.\nIf you show up a bit late for a meeting in Brazil, no one will be too worried. But if you keep someone in New York City for ten or fifteen minutes, you may have some explaining to do. Time is seen as relatively flexible in some cultures but is viewed rigidly in others. Indeed, the way members of a culture perceive and use time tells us about their society\u2019s priorities, even their own personal view of the world.\n\nB.\nBack in the 1950s, anthropologist Edward T. Hall described how the social rules of time are like a \u2018silent language\u2019 for a given culture. These rules might not always be made explicit, he stated, but \u2018they exist in the air\u2019. He described how variations in the perception of time can lead to misunderstandings between people from separate cultures. \u2018An ambassador who has been kept waiting by a foreign visitor needs to understand that if his visitor \u201cjust mutters an apology\u201d, this is not necessarily an insult,\u2019 Hall wrote. \u2018You must know the social rules of the country to know at what point apologies are really due.\u2019\n\nC.\nSocial psychologist Robert V. Levine says, \u2018One of the beauties of studying time is that it\u2019s a wonderful window on culture. You get answers on what cultures value and believe in.\u2019 Levine and his colleagues have conducted so-called pace-of-life studies in 31 countries. In A Geography of Time, published in 1997, Levine describes how he ranked the countries by measuring three things: walking speed on urban sidewalks, how quickly postal clerks could fulfill a request for a common stamp, and the accuracy of the public clocks. From the data he collected, he concluded that the five fastest-paced countries are Switzerland, Ireland, Germany, Japan and Italy; the five slowest are Syria, El Salvador, Brazil, Indonesia and Mexico.\n\nD.\nKevin Birth, an anthropologist, has examined time perceptions in Trinidad. In that country, Birth observes, \u2018If you are meeting friends at 6:00 at night, people show up at 6:45 or 7:00 and say, \u201cany time is Trinidad time\u201d.\u2019 When it comes to business, however, that loose approach works only for the people with power. A boss can show up late and just say \u2018any time is Trinidad time\u2019, but those under him are expected to come on time. Birth adds that the connection between power and waiting time is true for many other cultures as well.\n\nE.\nThe complex nature of time makes it hard for anthropologists and social psychologists to investigate. \u2018You can\u2019t simply go into a society, walk up to someone and say \u201cTell me about your concept of time\u201d,\u2019 Birth says. \u2018People don\u2019t really have an answer to that. You have to come up with other ways to find out.\u2019\n\nF.\nBirth attempted to get at how Trinidadians regard time by exploring how closely their society links time and money. He surveyed rural residents and found that farmers\u2014whose days are dictated by natural events, such as sunrise\u2014did not recognize the phrases \u2018time is money\u2019, \u2018budget your time\u2019, or \u2018time management\u2019 even though they had satellite TV and were familiar with Western popular culture. But tailors in the same areas were aware of such notions. Birth concluded that wage work altered the tailors\u2019 views of time. \u2018The ideas of associating time with money are not found globally,\u2019 he says, \u2018but are attached to your job and the people you work with.\u2019\n\nG.\nIn addition to cultural variations in how people deal with time at a practical level, there may be differences in how they visualize it from a more theoretical perspective. The Western idea of time has been compared to that of an arrow in flight towards the future; a one-way view of the future which often includes the expectation that life should get better as time passes. Some cultures see time as closely connected with space: the Australian Aborigines\u2019 concept of the \u2018Dreamtime\u2019 combines a myth of how the world began with stories of sacred sites and orientation points that enable the nomadic Aborigines to find their way across the Australian landscape. For other cultures, time may be seen as a pattern incorporating the past, present and future, or a wheel in which past, present and future revolve endlessly. But theory and practice do not necessarily go together. \u2018There\u2019s often considerable variation between how a culture views the mythology of time and how they think about time in their daily lives,\u2019 Birth asserts.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 27-40",
            questionGroups: [
                // Questions 27-32: Matching Headings
                {
                    groupType: "matching-headings",
                    startQuestion: 27,
                    endQuestion: 32,
                    mainInstruction: "The reading passage has seven paragraphs A-G. Choose the correct heading for each paragraph from the list of headings below.",
                    subInstruction: "Example: Paragraph A \u2014 Answer x",
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    headingsList: [
                        { numeral: "i", text: "Time and technological development" },
                        { numeral: "ii", text: "A problem for those researching attitudes to time" },
                        { numeral: "iii", text: "Learning the laws of time for intercultural understanding" },
                        { numeral: "iv", text: "Time and individual psychology" },
                        { numeral: "v", text: "Comparing the value of time for different groups of workers" },
                        { numeral: "vi", text: "Research and conclusions on the speed different nationalities live at" },
                        { numeral: "vii", text: "The history of time measurement" },
                        { numeral: "viii", text: "Attitudes to time and authority \u2013 a cross-cultural relationship" },
                        { numeral: "ix", text: "Variation on theoretical views of time" },
                        { numeral: "x", text: "Attitudes to time as an indication of cultural and individual differences" },
                    ],
                    matchingItems: [
                        { questionNumber: 27, text: "Paragraph B", correctAnswer: "iii" },
                        { questionNumber: 28, text: "Paragraph C", correctAnswer: "vi" },
                        { questionNumber: 29, text: "Paragraph D", correctAnswer: "viii" },
                        { questionNumber: 30, text: "Paragraph E", correctAnswer: "ii" },
                        { questionNumber: 31, text: "Paragraph F", correctAnswer: "v" },
                        { questionNumber: 32, text: "Paragraph G", correctAnswer: "ix" },
                    ],
                },
                // Questions 33-37: Multiple Choice Full
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 33,
                    endQuestion: 37,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "",
                    mcQuestions: [
                        {
                            questionNumber: 33,
                            questionText: "Edward Hall used the example of an ambassador to show that",
                            options: [
                                { letter: "A", text: "people in power are easily insulted" },
                                { letter: "B", text: "rules of time are different now from the past" },
                                { letter: "C", text: "problems can be caused by different views of time" },
                                { letter: "D", text: "misunderstandings over time cannot be avoided" },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 34,
                            questionText: "In his research, Robert Levine measured the speed at which postal workers",
                            options: [
                                { letter: "A", text: "delivered letters" },
                                { letter: "B", text: "performed a task" },
                                { letter: "C", text: "learned a new skill" },
                                { letter: "D", text: "answered a question" },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 35,
                            questionText: "Kevin Birth found out that in Trinidad",
                            options: [
                                { letter: "A", text: "expectations of punctuality vary according to relationships" },
                                { letter: "B", text: "time is regarded differently from anywhere else" },
                                { letter: "C", text: "employees as well as bosses may be late for work" },
                                { letter: "D", text: "people who are punctual eventually become more powerful" },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 36,
                            questionText: "Birth studied Trinidadians\u2019 attitudes to time by",
                            options: [
                                { letter: "A", text: "asking questions connected with language" },
                                { letter: "B", text: "asking people how they felt about time" },
                                { letter: "C", text: "observing how people behaved in different settings" },
                                { letter: "D", text: "collecting phrases to do with time" },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 37,
                            questionText: "Birth finds there is often a difference between",
                            options: [
                                { letter: "A", text: "what cultures believe about time and what individuals believe" },
                                { letter: "B", text: "people\u2019s practical and theoretical attitudes to time" },
                                { letter: "C", text: "what people believe about time and what they say" },
                                { letter: "D", text: "people\u2019s past and present attitudes to time" },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
                // Questions 38-40: Sentence Completion
                {
                    groupType: "sentence-completion",
                    startQuestion: 38,
                    endQuestion: 40,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer.",
                    statements: [
                        { questionNumber: 38, text: "Different cultures have different theories of time. In the West, time is sometimes said to be like an _________.", correctAnswer: "arrow" },
                        { questionNumber: 39, text: "\u2018Dreamtime\u2019 for Australian Aborigines involves a special relationship between time and space. In other cultures, time may be compared to a _________", correctAnswer: "pattern" },
                        { questionNumber: 40, text: "or a _________.", correctAnswer: "wheel" },
                    ],
                },
            ],
            questions: [
                // Q27-32: Matching Headings
                { questionNumber: 27, questionType: "matching-headings", questionText: "Paragraph B", correctAnswer: "iii", marks: 1 },
                { questionNumber: 28, questionType: "matching-headings", questionText: "Paragraph C", correctAnswer: "vi", marks: 1 },
                { questionNumber: 29, questionType: "matching-headings", questionText: "Paragraph D", correctAnswer: "viii", marks: 1 },
                { questionNumber: 30, questionType: "matching-headings", questionText: "Paragraph E", correctAnswer: "ii", marks: 1 },
                { questionNumber: 31, questionType: "matching-headings", questionText: "Paragraph F", correctAnswer: "v", marks: 1 },
                { questionNumber: 32, questionType: "matching-headings", questionText: "Paragraph G", correctAnswer: "ix", marks: 1 },
                // Q33-37: Multiple Choice Full
                { questionNumber: 33, questionType: "multiple-choice-full", questionText: "Edward Hall used the example of an ambassador to show that", correctAnswer: "C", marks: 1 },
                { questionNumber: 34, questionType: "multiple-choice-full", questionText: "In his research, Robert Levine measured the speed at which postal workers", correctAnswer: "B", marks: 1 },
                { questionNumber: 35, questionType: "multiple-choice-full", questionText: "Kevin Birth found out that in Trinidad", correctAnswer: "A", marks: 1 },
                { questionNumber: 36, questionType: "multiple-choice-full", questionText: "Birth studied Trinidadians\u2019 attitudes to time by", correctAnswer: "A", marks: 1 },
                { questionNumber: 37, questionType: "multiple-choice-full", questionText: "Birth finds there is often a difference between", correctAnswer: "B", marks: 1 },
                // Q38-40: Sentence Completion
                { questionNumber: 38, questionType: "sentence-completion", questionText: "In the West, time is sometimes said to be like an ___.", correctAnswer: "arrow", marks: 1 },
                { questionNumber: 39, questionType: "sentence-completion", questionText: "In other cultures, time may be compared to a ___", correctAnswer: "pattern", marks: 1 },
                { questionNumber: 40, questionType: "sentence-completion", questionText: "or a ___.", correctAnswer: "wheel", marks: 1 },
            ],
        },
    ],
};

async function seedTest() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to database");

        const existing = await ReadingTest.findOne({
            $or: [{ testId: readingTest.testId }, { testNumber: readingTest.testNumber }]
        });

        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest, { runValidators: false });
            console.log("\u2705 Reading Test 05 updated successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) { console.log("\u274C No admin user found"); process.exit(1); }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log("\u2705 Reading Test 05 created successfully!");
        }

        // Verify
        const test = await ReadingTest.findOne({ testNumber: readingTest.testNumber });
        if (test) {
            console.log(`\n\uD83D\uDCDD Test Details:`);
            console.log(`   Title: ${test.title}`);
            console.log(`   Test Number: ${test.testNumber}`);
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

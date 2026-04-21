import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_ACADEMIC_013",
    testNumber: 13,
    title: "Academic Reading Mock Test 13",
    description: "IELTS Academic Reading Test featuring passages on Classifying Societies, From A Novice to An Expert, and Accidental Scientists.",
    source: "Academic Reading Practice",
    testType: "academic" as const,
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: Classifying Societies (Q1-13)
        // Q1-7: True/False/Not Given
        // Q8-13: Short Answer
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "Classifying Societies",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: `Although humans have established many types of societies throughout history, sociologists and anthropologists tend to classify different societies according to the degree to which different groups within a society have unequal access to advantages such as resources, prestige or power, and usually refer to four basic types of societies. From least to most socially Complex they are clans, tribes, chiefdoms and states.\n\n**Clan**\n\nThese are small-scale societies of hunters and gatherers, generally of fewer than 100 people, who move seasonally to exploit wild (undomesticated) food resources. Most surviving hunter-gatherer groups are of this kind, such as the Hadza of Tanzania or the San of southern Africa. Clan members are generally kinsfolk, related by descent or marriage. Clans lack formal leaders, so there are no marked economic differences or disparities in status among their members.\n\nBecause clans are composed of mobile groups of hunter-gatherers, their sites consist mainly of seasonally occupied camps, and other smaller and more specialised sites. Among the latter are kill or butchery sites\u2014locations where large mammals are killed and sometimes butchered\u2014and work sites, where tools are made or other specific activities carried out. The base camp of such a group may give evidence of rather insubstantial dwellings or temporary shelters, along with the debris of residential occupation.\n\n**Tribe**\n\nThese are generally larger than mobile hunter-gatherer groups, but rarely number more than a few thousand, and their diet or subsistence is based largely on cultivated plants and domesticated animals. Typically, they are settled farmers, but they may be nomadic with a very different, mobile economy based on the intensive exploitation of livestock. These are generally multi-community societies, with the individual communities integrated into the larger society through kinship ties. Although some tribes have officials and even a \u201ccapital\u201d or seat of government, such officials lack the economic base necessary for effective use of power.\n\nThe typical settlement pattern for tribes is one of settled agricultural homesteads or villages. Characteristically, no one settlement dominates any of the others in the region. Instead, the archaeologist finds evidence for isolated, permanently occupied houses or for permanent villages. Such villages may be made up of a collection of free-standing houses, like those of the first farms of the Danube valley in Europe. Or they may be clusters of buildings grouped together, for example, the pueblos of the American Southwest, and the early farming village or small town of \u00c7atalh\u00f6y\u00fck in modern Turkey.\n\n**Chiefdom**\n\nThese operate on the principle of ranking\u2014differences in social status between people. Different lineages (a lineage is a group claiming descent from a common ancestor) are graded on a scale of prestige, and the senior lineage, and hence the society as a whole, is governed by a chief. Prestige and rank are determined by how closely related one is to the chief, and there is no true stratification into classes. The role of the chief is crucial.\n\nOften, there is local specialization in craft products, and surpluses of these and of foodstuffs are periodically paid as obligation to the chief. He uses these to maintain his retainers, and may use them for redistribution to his subjects. The chiefdom generally has a center of power, often with temples, residences of the chief and his retainers, and craft specialists. Chiefdoms vary greatly in size, but the range is generally between about 5000 and 20,000 persons.\n\n**Early State**\n\nThese preserve many of the features of chiefdoms, but the ruler (perhaps a king or sometimes a queen) has explicit authority to establish laws and also to enforce them by the use of a standing army. Society no longer depends totally upon kin relationships: it is now stratified into different classes. Agricultural workers and the poorer urban dwellers form the lowest classes, with the craft specialists above, and the priests and kinsfolk of the ruler higher still. The functions of the ruler are often separated from those of the priest: palace is distinguished from temple. The society is viewed as a territory owned by the ruling lineage and populated by tenants who have an obligation to pay taxes. The central capital houses a bureaucratic administration of officials; one of their principal purposes is to collect revenue (often in the form of taxes and tolls) and distribute it to government, army and craft specialists. Many early states developed complex redistribution systems to support these essential services.\n\nThis rather simple social typology, set out by Elman Service and elaborated by William Sanders and Joseph Marino, can be criticized, and it should not be used unthinkingly. Nevertheless, if we are seeking to talk about early societies, we must use words and hence concepts to do so. Service\u2019s categories provide a good framework to help organize our thoughts.`,
            questionGroups: [
                // Q1-7: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 1,
                    endQuestion: 7,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "In boxes 1-7 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 1, text: "There\u2019s little economic difference between members of a clan.", correctAnswer: "" },
                        { questionNumber: 2, text: "The farmers of a tribe grow a wide range of plants.", correctAnswer: "" },
                        { questionNumber: 3, text: "One settlement is more important than any other settlements in a tribe.", correctAnswer: "" },
                        { questionNumber: 4, text: "A member\u2019s status in a chiefdom is determined by how much land he owns.", correctAnswer: "" },
                        { questionNumber: 5, text: "There are people who craft goods in chiefdoms.", correctAnswer: "" },
                        { questionNumber: 6, text: "The king keeps the order of a state by using an army.", correctAnswer: "" },
                        { questionNumber: 7, text: "Bureaucratic officers receive higher salaries than other members.", correctAnswer: "" },
                    ],
                },
                // Q8-13: Short Answer
                {
                    groupType: "short-answer",
                    startQuestion: 8,
                    endQuestion: 13,
                    mainInstruction: "Answer the questions below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS OR/AND A NUMBER from the passage for each answer. Write your answers in boxes 8-13 on your answer sheet.",
                    questions: [
                        { questionNumber: 8, questionText: "What are made at the clan work sites?", correctAnswer: "" },
                        { questionNumber: 9, questionText: "What is the other way of life for tribes besides settled farming?", correctAnswer: "" },
                        { questionNumber: 10, questionText: "How are \u00c7atalh\u00f6y\u00fck\u2019s housing units arranged?", correctAnswer: "" },
                        { questionNumber: 11, questionText: "What does a chief give to his subjects as rewards besides crafted goods?", correctAnswer: "" },
                        { questionNumber: 12, questionText: "What is the largest possible population of a chiefdom?", correctAnswer: "" },
                        { questionNumber: 13, questionText: "Which group of people is at the bottom of an early state but higher than the farmers?", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "true-false-not-given", questionText: "There\u2019s little economic difference between members of a clan.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 2, questionType: "true-false-not-given", questionText: "The farmers of a tribe grow a wide range of plants.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 3, questionType: "true-false-not-given", questionText: "One settlement is more important than any other settlements in a tribe.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 4, questionType: "true-false-not-given", questionText: "A member\u2019s status in a chiefdom is determined by how much land he owns.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 5, questionType: "true-false-not-given", questionText: "There are people who craft goods in chiefdoms.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 6, questionType: "true-false-not-given", questionText: "The king keeps the order of a state by using an army.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 7, questionType: "true-false-not-given", questionText: "Bureaucratic officers receive higher salaries than other members.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 8, questionType: "short-answer", questionText: "What are made at the clan work sites?", correctAnswer: "", marks: 1 },
                { questionNumber: 9, questionType: "short-answer", questionText: "What is the other way of life for tribes besides settled farming?", correctAnswer: "", marks: 1 },
                { questionNumber: 10, questionType: "short-answer", questionText: "How are \u00c7atalh\u00f6y\u00fck\u2019s housing units arranged?", correctAnswer: "", marks: 1 },
                { questionNumber: 11, questionType: "short-answer", questionText: "What does a chief give to his subjects as rewards besides crafted goods?", correctAnswer: "", marks: 1 },
                { questionNumber: 12, questionType: "short-answer", questionText: "What is the largest possible population of a chiefdom?", correctAnswer: "", marks: 1 },
                { questionNumber: 13, questionType: "short-answer", questionText: "Which group of people is at the bottom of an early state but higher than the farmers?", correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 2: From A Novice to An Expert (Q14-26)
        // Q14-18: Flow-Chart Completion
        // Q19-23: True/False/Not Given
        // Q24-26: Summary Completion
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "From A Novice to An Expert",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: `Expertise is commitment coupled with creativity. Specifically, it is the commitment of time, energy, and resources to a relatively narrow field of study and the creative energy necessary to generate new knowledge in that field. It takes a considerable amount of time and regular exposure to a large number of cases to become an expert.\n\nAn individual enters a field of study as a novice. The novice needs to learn the guiding principles and rules of a given task in order to perform that task. Concurrently, the novice needs to be exposed to specific cases, or instances, that test the boundaries of such principles. Generally, a novice will find a mentor to guide her through the process of acquiring new knowledge. A fairly simple example would be someone learning to play chess. The novice chess player seeks a mentor to teach her the object of the game, the number of spaces, the names of the pieces, the function of each piece, how each piece is moved, and the necessary conditions for winning, or losing the game.\n\nIn time, and with much practice, the novice begins to recognize patterns of behavior within cases and, thus, becomes a journeyman. With more practice and exposure to increasingly complex cases, the journeyman finds patterns not only within cases but also between cases. More importantly, the journeyman learns that these patterns often repeat themselves over time. The journeyman still maintains regular contact with a mentor to solve specific problems and learn more complex strategies. Returning to the example of the chess player, the individual begins to learn patterns of opening moves, offensive and defensive game-playing, strategies, and patterns of victory and defeat.\n\nWhen a journeyman starts to make and test hypotheses about future behavior based on past experiences, she begins the next transition. Once she creatively generates knowledge, rather than simply matching superficial patterns, she becomes an expert. At this point, she is confident in her knowledge and no longer needs a mentor as a guide\u2014she becomes responsible for her own knowledge. In the chess example, once a journeyman begins competing against experts, makes predictions based on patterns, and tests those predictions against actual behavior, she is generating new knowledge and a deeper understanding of the game. She is creating her own case, rather than relying on the cases of others.\n\n**The Power of Expertise**\n\nAn expert perceives meaningful patterns in her domain better than non-experts. Where a novice perceives random or disconnected data points, an expert connects regular patterns within and between cases. This ability to identify patterns is not an innate perceptual skill; rather it reflects the organization of knowledge after exposure to and experience with thousands of cases.\n\nExperts have a deeper understanding of their domains than novices do, and utilize higher-order principles to solve problems. A novice, for example, might group objects together by color or size, whereas an expert would group the same objects according to their function or utility. Experts comprehend the meaning of data and weigh variables with different criteria within their domains better than novices. Experts recognize variables that have the largest influence on a particular problem and focus their attention on those variables.\n\nExperts have better domain-specific short-term and long-term memory than novices do. Moreover, experts perform tasks in their domains faster than novices and commit fewer errors while problem solving. Interestingly, experts go about solving problems differently than novices. Experts spend more time thinking about a problem to fully understand it at the beginning of a task than do novices, who immediately seek to find a solution. Experts use their knowledge of previous cases as context for creating mental models to solve given problems.\n\nBetter at self-monitoring than novices, experts are more aware of instances where they have committed errors or failed to understand a problem. Experts check their solutions more often than novices and recognize when they are missing information necessary for solving a problem. Experts are aware of the limits of their domain knowledge and apply their domain\u2019s heuristics to solve problems that fall outside of their experience base.\n\n**The Paradox of Expertise**\n\nThe strengths of expertise can also be weaknesses. Although one would expect experts to be good forecasters, they are not particularly good at making predictions about the future. Since the 1930s, researchers have been testing the ability of experts to make forecasts. The performance of experts has been tested against actuarial tables to determine if they are better at making predictions than simple statistical models. Seventy years later, with more than two hundred experiments in different domains, it is clear that the answer is no. If supplied with an equal amount of data about a particular case, an actuarial table is as good, or better, than an expert at making calls about the future. Even if an expert is given more specific case information than is available to the statistical model, the expert does not tend to outperform the actuarial table.\n\nTheorists and researchers differ when trying to explain why experts are less accurate forecasters than statistical models. Some have argued that experts, like all humans, are inconsistent when using mental models to make predictions. That is, the model an expert uses for predicting X in one month is different from the model used for predicting X in a following month, although precisely the same case and same data set are used in both instances.\n\nA number of researchers point to human biases to explain unreliable expert predictions. During the last 30 years, researchers have categorized, experimented, and theorized about the cognitive aspects of forecasting. Despite such efforts, the literature shows little consensus regarding the causes or manifestations of human bias.`,
            questionGroups: [
                // Q14-18: Flow-chart Completion (NEW generic type)
                {
                    groupType: "flow-chart-completion",
                    startQuestion: 14,
                    endQuestion: 18,
                    mainInstruction: "Complete the flow-chart below.",
                    subInstruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer. Write your answers in boxes 14-18 on your answer sheet.",
                    flowchartStages: [
                        {
                            label: "Novice",
                            lines: [
                                {
                                    segments: [
                                        { type: "text", content: "Novice: needs " },
                                        { type: "blank", questionNumber: 14, subIndex: 0, width: 110 },
                                        { type: "text", content: " and " },
                                        { type: "blank", questionNumber: 14, subIndex: 1, width: 110 },
                                        { type: "text", content: " to perform a given task;" },
                                    ],
                                },
                                { segments: [{ type: "text", content: "exposed to specific cases;" }] },
                                {
                                    segments: [
                                        { type: "text", content: "guided by a " },
                                        { type: "blank", questionNumber: 15, width: 110 },
                                        { type: "text", content: " through learning" },
                                    ],
                                },
                            ],
                        },
                        {
                            label: "Journeyman",
                            lines: [
                                {
                                    segments: [
                                        { type: "text", content: "Journeyman: starts to identify " },
                                        { type: "blank", questionNumber: 16, width: 110 },
                                        { type: "text", content: " within and between cases;" },
                                    ],
                                },
                                {
                                    segments: [
                                        { type: "text", content: "often exposed to " },
                                        { type: "blank", questionNumber: 17, width: 110 },
                                        { type: "text", content: " cases;" },
                                    ],
                                },
                                { segments: [{ type: "text", content: "contacts a mentor when facing difficult problems" }] },
                            ],
                        },
                        {
                            label: "Expert",
                            lines: [
                                {
                                    segments: [
                                        { type: "text", content: "Expert: creates predictions and new " },
                                        { type: "blank", questionNumber: 18, width: 110 },
                                        { type: "text", content: ";" },
                                    ],
                                },
                                { segments: [{ type: "text", content: "performs task independently without the help of a mentor" }] },
                            ],
                        },
                    ],
                },
                // Q19-23: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 19,
                    endQuestion: 23,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 2?",
                    subInstruction: "In boxes 19-23 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 19, text: "Novices and experts use the same system to classify objects.", correctAnswer: "" },
                        { questionNumber: 20, text: "A novice\u2019s training is focused on memory skills.", correctAnswer: "" },
                        { questionNumber: 21, text: "Experts have higher efficiency than novices when solving problems in their own field.", correctAnswer: "" },
                        { questionNumber: 22, text: "When facing a problem, a novice always tries to solve it straight away.", correctAnswer: "" },
                        { questionNumber: 23, text: "Experts are better at recognizing their own mistakes and limits.", correctAnswer: "" },
                    ],
                },
                // Q24-26: Summary Completion
                {
                    groupType: "summary-completion",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 24-26 on your answer sheet.",
                    mainHeading: "",
                    summarySegments: [
                        { type: "text", content: "Though experts are quite effective at solving problems in their own domains, their strengths can also be turned against them. Studies have shown that experts are less" },
                        { type: "blank", questionNumber: 24, correctAnswer: "" },
                        { type: "text", content: "at making predictions than statistical models. Some researchers theorise it is because experts can also be inconsistent like all others. Yet some believe it is due to" },
                        { type: "blank", questionNumber: 25, correctAnswer: "" },
                        { type: "text", content: ", but there isn\u2019t a great deal of" },
                        { type: "blank", questionNumber: 26, correctAnswer: "" },
                        { type: "text", content: "as to its cause and manifestation." },
                    ],
                },
            ],
            questions: [
                { questionNumber: 14, questionType: "flow-chart-completion", questionText: "Novice needs ___ and ___ to perform a given task", correctAnswer: "", marks: 1 },
                { questionNumber: 15, questionType: "flow-chart-completion", questionText: "guided by a ___ through learning", correctAnswer: "", marks: 1 },
                { questionNumber: 16, questionType: "flow-chart-completion", questionText: "starts to identify ___ within and between cases", correctAnswer: "", marks: 1 },
                { questionNumber: 17, questionType: "flow-chart-completion", questionText: "often exposed to ___ cases", correctAnswer: "", marks: 1 },
                { questionNumber: 18, questionType: "flow-chart-completion", questionText: "creates predictions and new ___", correctAnswer: "", marks: 1 },
                { questionNumber: 19, questionType: "true-false-not-given", questionText: "Novices and experts use the same system to classify objects.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 20, questionType: "true-false-not-given", questionText: "A novice\u2019s training is focused on memory skills.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 21, questionType: "true-false-not-given", questionText: "Experts have higher efficiency than novices when solving problems in their own field.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 22, questionType: "true-false-not-given", questionText: "When facing a problem, a novice always tries to solve it straight away.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 23, questionType: "true-false-not-given", questionText: "Experts are better at recognizing their own mistakes and limits.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 24, questionType: "summary-completion", questionText: "experts are less ___ at making predictions", correctAnswer: "", marks: 1 },
                { questionNumber: 25, questionType: "summary-completion", questionText: "it is due to ___", correctAnswer: "", marks: 1 },
                { questionNumber: 26, questionType: "summary-completion", questionText: "there isn't a great deal of ___", correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 3: Accidental Scientists (Q27-40)
        // Q27-32: Matching Headings (with Example: B = iii)
        // Q33-37: Multiple Choice
        // Q38-40: Short Answer
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "Accidental Scientists",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: `A A paradox lies close to the heart of scientific discovery. If you know just what you are looking for, finding it can hardly count as a discovery, since it was fully anticipated. But if, on the other hand, you have no notion of what you are looking for, you cannot know when you have found it, and discovery, as such, is out of the question. In the philosophy of science, these extremes map onto the purist forms of deductivism and inductivism: In the former, the outcome is supposed to be logically contained in the premises you start with; in the latter, you are recommended to start with no expectations whatsoever and see what turns up.\n\nB As in so many things, the ideal position is widely supposed to reside somewhere in between these two impossible-to-realise extremes. You want to have a good enough idea of what you are looking for to be surprised when you find something else of value, and you want to be ignorant enough of your end point that you can entertain alternative outcomes. Scientific discovery should, therefore, have an accidental aspect, but not too much of one. Serendipity is a word that expresses a position something like that. It\u2019s a fascinating word, and the late Robert King Merton\u2014\u201cthe father of the sociology of science\u201d\u2014liked it well enough to compose its biography, assisted by the French cultural historian Elinor Barber.\n\nC The word did not appear in the published literature until the early 19th century and did not become well enough known to use without explanation until sometime in the first third of the 20th century. Serendipity means a \u201chappy accident\u201d or \u201cpleasant surprise\u201d, specifically, the accident of finding something good or useful without looking for it. The first noted use of \u201cserendipity\u201d in the English language was by Horace Walpole. He explained that it came from the fairy tale, called The Three Princes of Serendip (the ancient name for Ceylon, or present-day Sri Lanka), whose heroes \u201cwere always making discoveries, by accidents and sagacity, of things which they were not in quest of\u201d.\n\nD Antiquarians, following Walpole, found use for it, as they were always rummaging about for curiosities, and unexpected but pleasant surprises were not unknown to them. Some people just seemed to have a knack for that sort of thing, and serendipity was used to express that special capacity. The other community that came to dwell on serendipity to say something important about their practice was that of scientists, and here usages cut to the heart of the matter and were often vigorously contested. Many scientists, including the Harvard physiologist Walter Cannon and, later, the British immunologist Peter Medawar, liked to emphasize how much of scientific discovery was unplanned and even accidental. One of the examples is Hans Christian \u00d8rsted\u2019s discovery of electromagnetism when he unintentionally brought a current-carrying wire parallel to a magnetic needle. Rhetoric about the sufficiency of rational method was so much hot air. Indeed, as Medawar insisted, \u201cThere is no such thing as The Scientific Method,\u201d no way at all of systematizing the process of discovery. Really important discoveries had a way of showing up when they had a mind to do so and not when you were looking for them. Maybe some scientists, like some book collectors, had a happy knack; maybe serendipity described the situation rather than a personal skill or capacity.\n\nE Some scientists using the word meant to stress those accidents belonging to the situation; some treated serendipity as a personal capacity; many others exploited the ambiguity of the notion. Yet what Cannon and Medawar took as a benign nose-thumbing at Dreams of Method, other scientists found incendiary. To say that science had a significant serendipitous aspect was taken by some as dangerous denigration. If scientific discovery were really accidental, then what was the special basis of expert authority? In this connection, the aphorism of choice came from no less an authority on scientific discovery than Louis Pasteur: \u201cChance favors the prepared mind.\u201d Accidents may happen, and things may turn up unplanned and unforeseen, as one is looking for something else, but the ability to notice such events, to see their potential bearing and meaning, to exploit their occurrence and make constructive use of them\u2014these are the results of systematic mental preparation. What seems like an accident is just another form of expertise. On closer inspection, it is insisted, accident dissolves into sagacity.\n\nF The context in which scientific serendipity was most contested and had its greatest resonance was that connected with the idea of planned science. The serendipitists were not all inhabitants of academic ivory towers. As Merton and Barber note, two of the great early-20th century American pioneers of industrial research\u2014Willis Whitney and Irving Langmuir, both of General Electric\u2014made much play of serendipity, in the course of arguing against overly rigid research planning. Langmuir thought that misconceptions about the certainty and rationality of the research process did much harm and that a mature acceptance of uncertainty was far more likely to result in productive research policies. For his own part, Langmuir said that satisfactory outcomes \u201coccurred as though we were just drifting with the wind. These things came about by accident.\u201d If there is no very determinate relationship between cause and effect in research, he said, \u201cthen planning does not get us very far.\u201d So, from within the bowels of corporate capitalism came powerful arguments, by way of serendipity, for scientific spontaneity and autonomy. The notion that industry was invariably committed to the regimentation of scientific research just doesn\u2019t wash.\n\nG For Merton himself\u2014who one supposes must have been the senior author\u2014serendipity represented the keystone in the arch of his social scientific work. In 1936, as a very young man, Merton wrote a seminal essay on \u201cThe Unanticipated Consequences of Purposive Social Action.\u201d It is, he argued, the nature of social action that what one intends is rarely what one gets: Intending to provide resources for buttressing Christian religion, the natural philosophers of the Scientific Revolution laid the groundwork for secularism; people wanting to be alone with nature in Yosemite Valley wind up crowding one another. We just don\u2019t know enough\u2014and we can never know enough\u2014to ensure that the past is an adequate guide to the future: Uncertainty about outcomes, even of our best-laid plans, is endemic. All social action, including that undertaken with the best evidence and formulated according to the most rational criteria, is uncertain in its consequences.`,
            questionGroups: [
                // Q27-32: Matching Headings (with Example: Paragraph B = iii)
                {
                    groupType: "matching-headings",
                    startQuestion: 27,
                    endQuestion: 32,
                    mainInstruction: "Reading Passage 3 has seven paragraphs, A-G.",
                    subInstruction: "Choose the most suitable heading for paragraphs A-G from the list of headings below. Write the appropriate number, i-x, in boxes 27-32 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "Examples of some scientific discoveries" },
                        { numeral: "ii", text: "Horace Walpole\u2019s fairy tale" },
                        { numeral: "iii", text: "Resolving the contradiction" },
                        { numeral: "iv", text: "What is the Scientific Method" },
                        { numeral: "v", text: "The contradiction of views on scientific discovery" },
                        { numeral: "vi", text: "Some misunderstandings of serendipity" },
                        { numeral: "vii", text: "Opponents of authority" },
                        { numeral: "viii", text: "Reality doesn\u2019t always match expectation" },
                        { numeral: "ix", text: "How the word came into being" },
                        { numeral: "x", text: "Illustration of serendipity in the business sector" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    exampleItems: [
                        { text: "Paragraph B", answer: "iii" },
                    ],
                    matchingItems: [
                        { questionNumber: 27, text: "Paragraph A", correctAnswer: "" },
                        { questionNumber: 28, text: "Paragraph C", correctAnswer: "" },
                        { questionNumber: 29, text: "Paragraph D", correctAnswer: "" },
                        { questionNumber: 30, text: "Paragraph E", correctAnswer: "" },
                        { questionNumber: 31, text: "Paragraph F", correctAnswer: "" },
                        { questionNumber: 32, text: "Paragraph G", correctAnswer: "" },
                    ],
                },
                // Q33-37: Multiple Choice
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 33,
                    endQuestion: 37,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 33-37 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 33,
                            questionText: "In paragraph A, the word \u201cinductivism\u201d means",
                            options: [
                                { letter: "A", text: "anticipate results in the beginning." },
                                { letter: "B", text: "work with prepared premises." },
                                { letter: "C", text: "accept chance discoveries." },
                                { letter: "D", text: "look for what you want." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 34,
                            questionText: "Medawar says \u201cthere is no such thing as The Scientific Method\u201d because",
                            options: [
                                { letter: "A", text: "discoveries are made by people with determined mind." },
                                { letter: "B", text: "discoveries tend to happen unplanned." },
                                { letter: "C", text: "the process of discovery is unpleasant." },
                                { letter: "D", text: "serendipity is not a skill." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 35,
                            questionText: "Many scientists dislike the idea of serendipity because",
                            options: [
                                { letter: "A", text: "it is easily misunderstood and abused." },
                                { letter: "B", text: "it is too unpredictable." },
                                { letter: "C", text: "it is beyond their comprehension." },
                                { letter: "D", text: "it devalues their scientific expertise." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 36,
                            questionText: "The writer mentions Irving Langmuir to illustrate",
                            options: [
                                { letter: "A", text: "planned science should be avoided." },
                                { letter: "B", text: "industrial development needs uncertainty." },
                                { letter: "C", text: "people tend to misunderstand the relationship between cause and effect." },
                                { letter: "D", text: "accepting uncertainty can help produce positive results." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 37,
                            questionText: "The example of Yosemite is to show",
                            options: [
                                { letter: "A", text: "the conflict between reality and expectation." },
                                { letter: "B", text: "the importance of systematic planning." },
                                { letter: "C", text: "the intention of social action." },
                                { letter: "D", text: "the power of anticipation." },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
                // Q38-40: Short Answer
                {
                    groupType: "short-answer",
                    startQuestion: 38,
                    endQuestion: 40,
                    mainInstruction: "Answer the questions below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 38-40 on your answer sheet.",
                    questions: [
                        { questionNumber: 38, questionText: "Who is the person that first used the word \u201cserendipity\u201d?", correctAnswer: "" },
                        { questionNumber: 39, questionText: "What kind of story does the word come from?", correctAnswer: "" },
                        { questionNumber: 40, questionText: "What is the present name of serendip?", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 27, questionType: "matching-headings", questionText: "Paragraph A", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 28, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 29, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 30, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 31, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 32, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 33, questionType: "multiple-choice-full", questionText: "In paragraph A, the word \u201cinductivism\u201d means", correctAnswer: "", marks: 1 },
                { questionNumber: 34, questionType: "multiple-choice-full", questionText: "Medawar says \u201cthere is no such thing as The Scientific Method\u201d because", correctAnswer: "", marks: 1 },
                { questionNumber: 35, questionType: "multiple-choice-full", questionText: "Many scientists dislike the idea of serendipity because", correctAnswer: "", marks: 1 },
                { questionNumber: 36, questionType: "multiple-choice-full", questionText: "The writer mentions Irving Langmuir to illustrate", correctAnswer: "", marks: 1 },
                { questionNumber: 37, questionType: "multiple-choice-full", questionText: "The example of Yosemite is to show", correctAnswer: "", marks: 1 },
                { questionNumber: 38, questionType: "short-answer", questionText: "Who is the person that first used the word \u201cserendipity\u201d?", correctAnswer: "", marks: 1 },
                { questionNumber: 39, questionType: "short-answer", questionText: "What kind of story does the word come from?", correctAnswer: "", marks: 1 },
                { questionNumber: 40, questionType: "short-answer", questionText: "What is the present name of serendip?", correctAnswer: "", marks: 1 },
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
        console.error("\u274c Error seeding Reading Test 13:", error);
        process.exit(1);
    }
}

seedTest();

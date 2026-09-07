import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

/**
 * Academic Reading Mock Test 25 — the reading half of "Test 5.docx" in the
 * New Test batch. Pairs with listening test 25, built from the same paper.
 *
 * ⚠️ ANSWERS ARE DELIBERATELY BLANK. The batch shipped listening answer keys
 * (Mock_1..5) but no reading key, so every correctAnswer here is "" and the test
 * is seeded with isActive: false. The exam endpoint filters on isActive, so no
 * candidate can sit it and score zero while the answers are missing. Fill the
 * answers in, then activate it from the admin panel.
 *
 * Passage 1 carries A-J labels and passage 2 A-I after an introduction;
 * passage 3 needs none, since nothing there is matched to a paragraph.
 *
 * The paper heads questions 11-13 "Questions 11-14" and asks for letters in
 * "boxes 11-14", but lists only three items. Three is what the numbering
 * supports, so 11-13 is used.
 */

const readingTest = {
    testId: "READING_ACADEMIC_025",
    testNumber: 25,
    title: "Academic Reading Mock Test 25",
    description: "Academic Reading Test with 3 passages and 40 questions",
    source: "Test 05",
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
            title: "Twist in the Tale",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: "A Less than three years ago, doom merchants were predicting that the growth in video games and the rise of the Internet would sound the death knell for children’s literature. But contrary to popular myth, children are reading more books than ever. A recent survey by Books Marketing found that children up to the age of 11 read on average for four hours a week, particularly girls.\n\nB Moreover, the children’s book market, which traditionally was seen as a poor cousin to the more lucrative and successful adult market, has come into its own. Publishing houses are now making considerable profits on the back of new children’s books and children’s authors can now command significant advances. ‘Children’s books are going through an incredibly fertile period,’ says Wendy Cooling, a children’s literature consultant. ‘There’s a real buzz around them. Book clubs are happening, sales are good, and people are much more willing to listen to children’s authors.’\n\nC The main growth area has been the market for eight to fourteen-yearolds, and there is little doubt that the boom has been fuelled by the bespectacled apprentice, Harry Potter. So influential has J. K. Rowling’s series of books been that they have helped to make reading fashionable for pre-teens. ‘Harry made it OK to be seen on a bus reading a book,’ says Cooling. ‘To a child, that is important.’ The current buzz around the publication of the fourth Harry Potter beats anything in the world of adult literature.\n\nD ‘People still tell me, “Children don’t read nowadays”,’ says David Almond, the award-winning author of children’s books such as Skellig. The truth is that they are skilled, creative readers. When I do classroom visits, they ask me very sophisticated questions about the use of language, story structure, chapters and dialogue.’ No one is denying that books are competing with other forms of entertainment for children’s attention but it seems as though children find a special kind of mental nourishment within the printed page.\n\nE ‘A few years ago, publishers lost confidence and wanted to make books more like television, the medium that frightened them most,’ says children’s book critic Julia Eccleshare. ‘But books aren’t TV, and you will find that children always say that the good thing about books is that you can see them in your head. Children are demanding readers,’ she says. ‘If they don’t get it in two pages, they’ll drop it.’\n\nF No more are children’s authors considered mere sentimentalists or failed adult writers. 'Some feted adult writers would kill for the sales,’ says Almond, who sold 42,392 copies of Skellig in 1999 alone. And advances seem to be growing too: UK publishing outfit Orion recently negotiated a six-figure sum from US company Scholastic for The Seeing Stone, a children's novel by Kevin Crossley-Holland, the majority of which will go to the author.\n\nG It helps that once smitten, children are loyal and even fanatical consumers. Author Jacqueline Wilson says that children spread news of her books like a bushfire. 'My average reader is a girl of ten,’ she explains. ‘They’re sociable and acquisitive. They collect. They have parties - where books are a good present. If they like something, they have to pass it on.’ After Rowling, Wilson is currently the best-selling children’s writer, and her sales have boomed over the past three years. She has sold more than three million books, but remains virtually invisible to adults, although most ten- year-old girls know about her.\n\nH Children’s books are surprisingly relevant to contemporary life. Provided they are handled with care, few topics are considered off-limits for children. One senses that children’s writers relish the chance to discuss the whole area of topics and language. But Anne Fine, author of many awardwinning children’s books is concerned that the British literati still ignore children’s culture. ‘It’s considered worthy but boring,’ she says.\n\nI I think there’s still a way to go,’ says Almond, who wishes that children’s books were taken more seriously as literature. Nonetheless, he derives great satisfaction from his child readers. ‘They have a powerful literary culture,’ he says. ‘It feels as if you’re able to step into the store of mythology and ancient stories that run through all societies and encounter the great themes: love and loss and death and redemption.’\n\nJ At the moment, the race is on to find the next Harry Potter. The bidding for new books at Bologna this year - the children’s equivalent of the Frankfurt Book Fair - was as fierce as anything anyone has ever seen. All of which bodes well for the long-term future of the market - and for children’s authors, who have traditionally suffered the lowest profile in literature, despite the responsibility of their role.",
            questionGroups: [
                {
                    "groupType": "matching-features",
                    "startQuestion": 1,
                    "endQuestion": 7,
                    "mainInstruction": "Look at the following list of people A-E and the list of statements below. Match each statement with one of the people listed.",
                    "subInstruction": "Choose the appropriate letters A-E in boxes 1-7 on your answer sheet.",
                    "featureListTitle": "List of People",
                    "featureOptions": [
                        {
                            "letter": "A",
                            "text": "Wendy Cooling"
                        },
                        {
                            "letter": "B",
                            "text": "David Almond"
                        },
                        {
                            "letter": "C",
                            "text": "Julia Eccleshare"
                        },
                        {
                            "letter": "D",
                            "text": "Jacqueline Wilson"
                        },
                        {
                            "letter": "E",
                            "text": "Anne Fine"
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 1,
                            "text": "Children take pleasure in giving books to each other.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 2,
                            "text": "Reading in public is an activity that children have not always felt comfortable about doing.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 3,
                            "text": "Some well-known writers of adult literature regret that they earn less than popular children’s writers.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 4,
                            "text": "Children are quick to decide whether they like or dislike a book.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 5,
                            "text": "Children will read many books by an author that they like.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 6,
                            "text": "The public do not realise how much children read today.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 7,
                            "text": "We are experiencing a rise in the popularity of children’s literature.",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "short-answer",
                    "startQuestion": 8,
                    "endQuestion": 10,
                    "mainInstruction": "Using NO MORE THAN THREE WORDS taken from the reading passage, answer the following questions.",
                    "subInstruction": "Write your answers in boxes 8-10 on your answer sheet.",
                    "questions": [
                        {
                            "questionNumber": 8,
                            "questionText": "For which age group have sales of books risen the most?",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 9,
                            "questionText": "Which company has just invested heavily in an unpublished children’s book?",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 10,
                            "questionText": "Who is currently the best-selling children’s writer?",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "matching-information",
                    "startQuestion": 11,
                    "endQuestion": 13,
                    "mainInstruction": "Reading Passage 1 has ten paragraphs A-J. Which paragraph mentions the following?",
                    "subInstruction": "Write the appropriate letters (A-J) in boxes 11-13 on your answer sheet.",
                    "paragraphOptions": [
                        "A",
                        "B",
                        "C",
                        "D",
                        "E",
                        "F",
                        "G",
                        "H",
                        "I",
                        "J"
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 11,
                            "text": "the fact that children are able to identify and discuss the important elements of fiction",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 12,
                            "text": "the undervaluing of children’s society",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 13,
                            "text": "the impact of a particular fictional character on the sales of children’s books",
                            "correctAnswer": ""
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 1,
                    "questionType": "matching-features",
                    "questionText": "Children take pleasure in giving books to each other.",
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
                    "questionText": "Reading in public is an activity that children have not always felt comfortable about doing.",
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
                    "questionText": "Some well-known writers of adult literature regret that they earn less than popular children’s writers.",
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
                    "questionText": "Children are quick to decide whether they like or dislike a book.",
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
                    "questionText": "Children will read many books by an author that they like.",
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
                    "questionText": "The public do not realise how much children read today.",
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
                    "questionText": "We are experiencing a rise in the popularity of children’s literature.",
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
                    "questionNumber": 8,
                    "questionType": "short-answer",
                    "questionText": "For which age group have sales of books risen the most?",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 9,
                    "questionType": "short-answer",
                    "questionText": "Which company has just invested heavily in an unpublished children’s book?",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 10,
                    "questionType": "short-answer",
                    "questionText": "Who is currently the best-selling children’s writer?",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 11,
                    "questionType": "matching-information",
                    "questionText": "the fact that children are able to identify and discuss the important elements of fiction",
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
                        "J"
                    ]
                },
                {
                    "questionNumber": 12,
                    "questionType": "matching-information",
                    "questionText": "the undervaluing of children’s society",
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
                        "J"
                    ]
                },
                {
                    "questionNumber": 13,
                    "questionType": "matching-information",
                    "questionText": "the impact of a particular fictional character on the sales of children’s books",
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
                        "J"
                    ]
                }
            ],
        },
        {
            sectionNumber: 2,
            title: "Sustainable growth at Didcot",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: "The outline of a report by South Oxfordshire District Council\n\nA The UK Government’s South East Plan proposes additional housing growth in the town of Didcot, which has been a designated growth area since 1979. We in South Oxfordshire District Council consider that, although Didcot does have potential for further growth, such development should be sustainable, well-planned, and supported by adequate infrastructure and community services.\n\nB Recent experience in Didcot has demonstrated that large greenfield [1] developments cannot resource all the necessary infrastructure and lowcost housing requirements. The ensuing compromises create a legacy of local transport, infrastructure and community services deficits, with no obvious means of correction. We wish to ensure that there is greater recognition of the cost attached to housing growth, and that a means is found to resource the establishment of sustainable communities in growth areas.\n\nC Until the 1950s, the development of job opportunities in the railway industry, and in a large, military ordnance depot, was the spur to Didcot’s expansion. Development at that time was geared to providing homes for the railway and depot workers, with limited investment in shopping and other services for the local population. Didcot failed to develop Broadway as a compact town centre, and achieved only a strip of shops along one side of the main street hemmed in by low density housing and service trade uses.\n\nD From the 1970s, strategic planning policies directed significant new housing development to Didcot. Planners recognised Didcot’s potential, with rapid growth in local job opportunities and good rail connections for those choosing to work farther afield. However, the town is bisected by the east-west railway, and people living in Ladygrove, the urban extension to the north which has been built since the 1980s, felt, and still feel, cut off from the town and its community.\n\nE Population growth in the new housing areas failed to spark adequate private-sector investment in town centre uses, and the limited investment which did take place - Didcot Market Place development in 1982, for instance - did not succeed in delivering the number and range of town centre uses needed by the growing population. In 1990, public-sector finance was used to buy the land required for the Orchard Centre development, comprising a superstore, parking and a new street of stores running parallel to Broadway. The development took 13 years to complete.\n\nF The idea that, by obliging developers of new housing to contribute to the cost of infrastructure and service requirements, all the necessary finance could be raised, has proved unachievable. Substantial public finance was still needed to deliver major projects such as the new link road to the A34 on the outskirts of the town at Milton, the improved railway crossing at Marsh Bridge and new schools. Such projects were delayed due to difficulties in securing public finance. The same problem also held back the expansion of health and social services in the town.\n\nG In recent years, government policy, in particular, the requirement for developers that forty percent of the units in a new housing development should be low-cost homes, has had a major impact on the economics of such development, as it has limited the developers’ contribution to the costs of infrastructure. The planning authorities are facing difficult choices in prioritising the items of infrastructure which must be funded by development, and this, in turn, means that from now on public finance will need to provide a greater proportion of infrastructure project costs.\n\nH The Government’s Sustainable Communities Plan seeks a holistic approach to new urban development in which housing, employment, services and infrastructure of all kinds are carefully planned and delivered in a way which avoids the infrastructure deficits that have occurred in places like Didcot in the past. This report, therefore, is structured around the individual components of a sustainable community, and shows the baseline position for each component.\n\nI Didcot has been identified as one of the towns with which the Government is working to evaluate whether additional growth will strengthen the economic potential of the town, deliver the necessary infrastructure and improve environmental standards. A programme of work, including discussions with the local community about their aspirations for the town as well as other stakeholders, will be undertaken over the coming months, and will lead to the development of a strategic master plan. The challenge will be in optimising scarce resources to achieve maximum benefits for the town. Questions 14-19",
            questionGroups: [
                {
                    "groupType": "matching-information",
                    "startQuestion": 14,
                    "endQuestion": 19,
                    "mainInstruction": "Reading Passage 2 has 9 paragraphs, A-I. Which paragraph contains the following information?",
                    "subInstruction": "Select the correct letter, A-I in boxes 14-19 on your answer sheet.",
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
                            "questionNumber": 14,
                            "text": "reference to the way the council’s report is organised",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 15,
                            "text": "the reason why inhabitants in one part of Didcot are isolated",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 16,
                            "text": "a statement concerning future sources of investment",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 17,
                            "text": "the identification of two major employers at Didcot",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 18,
                            "text": "reference to groups who will be consulted about a new development plan",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 19,
                            "text": "an account of how additional town centre facilities were previously funded",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "matching-features",
                    "startQuestion": 20,
                    "endQuestion": 23,
                    "mainInstruction": "Look at the following places and the list of statements below. Match each place with the correct statement, A-F.",
                    "subInstruction": "Choose the correct letter, A-F in boxes 20-23 on your answer sheet.",
                    "featureListTitle": "List of statements",
                    "featureOptions": [
                        {
                            "letter": "A",
                            "text": "It provided extra facilities for shopping and cars."
                        },
                        {
                            "letter": "B",
                            "text": "Its location took a long time to agree."
                        },
                        {
                            "letter": "C",
                            "text": "Its layout was unsuitable."
                        },
                        {
                            "letter": "D",
                            "text": "Its construction was held up due to funding problems."
                        },
                        {
                            "letter": "E",
                            "text": "It was privately funded."
                        },
                        {
                            "letter": "F",
                            "text": "It failed to get Council approval at first."
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 20,
                            "text": "Broadway",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 21,
                            "text": "Market Place",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 22,
                            "text": "Orchard Centre",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 23,
                            "text": "Marsh Bridge",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "sentence-completion",
                    "startQuestion": 24,
                    "endQuestion": 26,
                    "mainInstruction": "Complete the sentences below.",
                    "subInstruction": "Choose NO MORE THAN THREE WORDS from the passage for each answer.",
                    "statements": [
                        {
                            "questionNumber": 24,
                            "text": "A certain proportion of houses in any new development now have to be of the ________ type.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 25,
                            "text": "The government is keen to ensure that adequate ________ will be provided for future housing developments.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 26,
                            "text": "The views of Didcot’s inhabitants and others will form the basis of a ________ for the town.",
                            "correctAnswer": ""
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 14,
                    "questionType": "matching-information",
                    "questionText": "reference to the way the council’s report is organised",
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
                    "questionNumber": 15,
                    "questionType": "matching-information",
                    "questionText": "the reason why inhabitants in one part of Didcot are isolated",
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
                    "questionNumber": 16,
                    "questionType": "matching-information",
                    "questionText": "a statement concerning future sources of investment",
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
                    "questionNumber": 17,
                    "questionType": "matching-information",
                    "questionText": "the identification of two major employers at Didcot",
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
                    "questionNumber": 18,
                    "questionType": "matching-information",
                    "questionText": "reference to groups who will be consulted about a new development plan",
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
                    "questionNumber": 19,
                    "questionType": "matching-information",
                    "questionText": "an account of how additional town centre facilities were previously funded",
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
                    "questionNumber": 20,
                    "questionType": "matching-features",
                    "questionText": "Broadway",
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
                    "questionType": "matching-features",
                    "questionText": "Market Place",
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
                    "questionNumber": 22,
                    "questionType": "matching-features",
                    "questionText": "Orchard Centre",
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
                    "questionNumber": 23,
                    "questionType": "matching-features",
                    "questionText": "Marsh Bridge",
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
                    "questionNumber": 24,
                    "questionType": "sentence-completion",
                    "questionText": "A certain proportion of houses in any new development now have to be of the ________ type.",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 25,
                    "questionType": "sentence-completion",
                    "questionText": "The government is keen to ensure that adequate ________ will be provided for future housing developments.",
                    "correctAnswer": "",
                    "marks": 1
                },
                {
                    "questionNumber": 26,
                    "questionType": "sentence-completion",
                    "questionText": "The views of Didcot’s inhabitants and others will form the basis of a ________ for the town.",
                    "correctAnswer": "",
                    "marks": 1
                }
            ],
        },
        {
            sectionNumber: 3,
            title: "Keep taking the tablets",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: "The history of aspirin is a product of a rollercoaster ride through time, of accidental discoveries, intuitive reasoning and intense corporate rivalry.\n\nIn the opening pages of Aspirin: The Remarkable Story of a Wonder Drug , Diarmuid Jeffreys describes this little white pill as ‘one of the most amazing creations in medical history, a drug so astonishingly versatile that it can relieve headache, ease your aching limbs, lower your temperature and treat some of the deadliest human diseases’.\n\nIts properties have been known for thousands of years. Ancient Egyptian physicians used extracts from the willow tree as an analgesic, or pain killer. Centuries later the Greek physician Hippocrates recommended the bark of the willow tree as a remedy for the pains of childbirth and as a fever reducer. But it wasn't until the eighteenth and nineteenth centuries that salicylates the chemical found in the willow tree became the subject of serious scientific investigation. The race was on to identify the active ingredient and to replicate it synthetically. At the end of the nineteenth century a German company, Friedrich Bayer & Co. succeeded in creating a relatively safe and very effective chemical compound, acetylsalicylic acid, which was renamed aspirin.\n\nThe late nineteenth century was a fertile period for experimentation, partly because of the hunger among scientists to answer some of the great scientific questions, but also because those questions were within their means to answer. One scientist in a laboratory with some chemicals and a test tube could make significant breakthroughs whereas today, in order to map the human genome for instance, one needs ‘an army of researchers, a bank of computers and millions and millions of dollars’.\n\nBut an understanding of the nature of science and scientific inquiry is not enough on its own to explain how society innovates. In the nineteenth century, scientific advance was closely linked to the industrial revolution. This was a period when people frequently had the means, motive and determination to take an idea and turn it into reality. In the case of aspirin that happened piecemeal - a series of minor, often unrelated advances, fertilised by the century’s broader economic, medical and scientific developments, that led to one big final breakthrough.\n\nThe link between big money and pharmaceutical innovation is also a significant one. Aspirin s continued shelf life was ensured because, for the first 70 years of its life, huge amounts of money were put into promoting it as an ordinary everyday analgesic. In the 1070s other analgesics, such as ibuprofen and paracetamol, were entering the market, and the pharmaceutical companies then focused on publicising these new drugs. But just at the same time, discoveries were made regarding the beneficial role of aspirin in preventing heart attacks, strokes and other afflictions. Had it not been for these findings, this pharmaceutical marvel may well have disappeared.\n\nSo the relationship between big money and drugs is an odd one. Commercial markets are necessary for developing new products and ensuring that they remain around long enough for scientists to carry out research on them. But the commercial markets are just as likely to kill off' certain products when something more attractive comes along. In the case of aspirin, a potential ‘wonder drug* was around for over 70 years without anybody investigating the way in which it achieved its effects, because they were making more than enough money out of it as it was. If ibuprofen or paracetamol had entered the market just a decade earlier, aspirin might then not be here today. It would be just another forgotten drug that people hadn't bothered to explore.\n\nNone of the recent discoveries of aspirin's benefits was made by the big pharmaceutical companies; they were made by scientists working in the public sector. 'The reason for that is very simple and straightforward,' Jeffreys says in his book. 'Drug companies will only pursue research that is going to deliver financial benefits. There's no profit in aspirin anymore. It is incredibly inexpensive with tiny profit margins and it has no patent anymore, so anyone can produce it.' In fact, there's almost a disincentive for drug companies to further boost the drug, he argues, as it could possibly put them out of business by stopping them from selling their more expensive brands.\n\nSo what is the solution to a lack of commercial interest in further exploring the therapeutic benefits of aspirin? More public money going into clinical trials, says Jeffreys. ‘If I were the Department of Health. I would say “this is a very inexpensive drug. There may be a lot of other things we could do with it.\" We should put a lot more money into trying to find out.'\n\nJeffreys' book which not only tells the tale of a 'wonder drug' but also explores the nature of innovation and the role of big business, public money and regulation reminds us why such research is so important.",
            questionGroups: [
                {
                    "groupType": "matching-features",
                    "startQuestion": 27,
                    "endQuestion": 32,
                    "mainInstruction": "Complete each sentence with the correct ending A-H from the box below.",
                    "subInstruction": "Choose the correct letter A-H in boxes 27-32 on your answer sheet.",
                    "featureListTitle": "Sentence Endings",
                    "featureOptions": [
                        {
                            "letter": "A",
                            "text": "the discovery of new medical applications."
                        },
                        {
                            "letter": "B",
                            "text": "the negative effects of publicity."
                        },
                        {
                            "letter": "C",
                            "text": "the large pharmaceutical companies."
                        },
                        {
                            "letter": "D",
                            "text": "the industrial revolution."
                        },
                        {
                            "letter": "E",
                            "text": "the medical uses of a particular tree."
                        },
                        {
                            "letter": "F",
                            "text": "the limited availability of new drugs."
                        },
                        {
                            "letter": "G",
                            "text": "the chemical found in the willow tree."
                        },
                        {
                            "letter": "H",
                            "text": "commercial advertising campaigns."
                        }
                    ],
                    "matchingItems": [
                        {
                            "questionNumber": 27,
                            "text": "Ancient Egyptian and Greek doctors were aware of",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 28,
                            "text": "Frederick Bayer & Co were able to reproduce",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 29,
                            "text": "The development of aspirin was partly due to the effects of",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 30,
                            "text": "The creation of a market for aspirin as a painkiller was achieved through",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 31,
                            "text": "Aspirin might have become unavailable without",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 32,
                            "text": "The way in which aspirin actually worked was not investigated by",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "yes-no-not-given",
                    "startQuestion": 33,
                    "endQuestion": 37,
                    "mainInstruction": "Do the following statements agree with the views of the writer in Reading Passage 3?",
                    "subInstruction": "In boxes 33-37 on your answer sheet, select YES, NO or NOT GIVEN.",
                    "optionsExplanation": [
                        {
                            "label": "YES",
                            "description": "if the statement agrees with the views of the writer"
                        },
                        {
                            "label": "NO",
                            "description": "if the statement contradicts the views of the writer"
                        },
                        {
                            "label": "NOT GIVEN",
                            "description": "if it is impossible to say what the writer thinks about this"
                        }
                    ],
                    "statements": [
                        {
                            "questionNumber": 33,
                            "text": "For nineteenth-century scientists, small-scale research was enough to make important discoveries.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 34,
                            "text": "The nineteenth-century industrial revolution caused a change in the focus of scientific research.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 35,
                            "text": "The development of aspirin in the nineteenth century followed a structured pattern of development.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 36,
                            "text": "In the 1970s sales of new analgesic drugs overtook sales of aspirin.",
                            "correctAnswer": ""
                        },
                        {
                            "questionNumber": 37,
                            "text": "Commercial companies may have both good and bad effects on the availability of pharmaceutical products.",
                            "correctAnswer": ""
                        }
                    ]
                },
                {
                    "groupType": "summary-with-options",
                    "startQuestion": 38,
                    "endQuestion": 40,
                    "mainInstruction": "Complete the summary below using the list of words A-I below.",
                    "subInstruction": "Write the correct letter A-I in boxes 38-40 on your answer sheet.",
                    "mainHeading": "Research into aspirin",
                    "phraseList": [
                        {
                            "letter": "A",
                            "text": "useful"
                        },
                        {
                            "letter": "B",
                            "text": "cheap"
                        },
                        {
                            "letter": "C",
                            "text": "state"
                        },
                        {
                            "letter": "D",
                            "text": "international"
                        },
                        {
                            "letter": "E",
                            "text": "major drug companies"
                        },
                        {
                            "letter": "F",
                            "text": "profitable"
                        },
                        {
                            "letter": "G",
                            "text": "commercial"
                        },
                        {
                            "letter": "H",
                            "text": "public sector scientists"
                        },
                        {
                            "letter": "I",
                            "text": "health officials"
                        }
                    ],
                    "summarySegments": [
                        {
                            "type": "text",
                            "content": "Jeffreys argues that the reason why "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 38,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " did not find out about new uses of aspirin is that aspirin is no longer a "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 39,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " drug. He, therefore, suggests that there should be "
                        },
                        {
                            "type": "blank",
                            "questionNumber": 40,
                            "correctAnswer": ""
                        },
                        {
                            "type": "text",
                            "content": " support for further research into the possible applications of the drug."
                        }
                    ]
                }
            ],
            questions: [
                {
                    "questionNumber": 27,
                    "questionType": "matching-features",
                    "questionText": "Ancient Egyptian and Greek doctors were aware of",
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
                    "questionNumber": 28,
                    "questionType": "matching-features",
                    "questionText": "Frederick Bayer & Co were able to reproduce",
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
                    "questionNumber": 29,
                    "questionType": "matching-features",
                    "questionText": "The development of aspirin was partly due to the effects of",
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
                    "questionNumber": 30,
                    "questionType": "matching-features",
                    "questionText": "The creation of a market for aspirin as a painkiller was achieved through",
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
                    "questionNumber": 31,
                    "questionType": "matching-features",
                    "questionText": "Aspirin might have become unavailable without",
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
                    "questionNumber": 32,
                    "questionType": "matching-features",
                    "questionText": "The way in which aspirin actually worked was not investigated by",
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
                    "questionNumber": 33,
                    "questionType": "yes-no-not-given",
                    "questionText": "For nineteenth-century scientists, small-scale research was enough to make important discoveries.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "YES",
                        "NO",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 34,
                    "questionType": "yes-no-not-given",
                    "questionText": "The nineteenth-century industrial revolution caused a change in the focus of scientific research.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "YES",
                        "NO",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 35,
                    "questionType": "yes-no-not-given",
                    "questionText": "The development of aspirin in the nineteenth century followed a structured pattern of development.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "YES",
                        "NO",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 36,
                    "questionType": "yes-no-not-given",
                    "questionText": "In the 1970s sales of new analgesic drugs overtook sales of aspirin.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "YES",
                        "NO",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 37,
                    "questionType": "yes-no-not-given",
                    "questionText": "Commercial companies may have both good and bad effects on the availability of pharmaceutical products.",
                    "correctAnswer": "",
                    "marks": 1,
                    "options": [
                        "YES",
                        "NO",
                        "NOT GIVEN"
                    ]
                },
                {
                    "questionNumber": 38,
                    "questionType": "summary-with-options",
                    "questionText": "Research into aspirin — blank 38",
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
                    "questionNumber": 39,
                    "questionType": "summary-with-options",
                    "questionText": "Research into aspirin — blank 39",
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
                    "questionNumber": 40,
                    "questionType": "summary-with-options",
                    "questionText": "Research into aspirin — blank 40",
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

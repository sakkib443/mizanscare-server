import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_ACADEMIC_018",
    testNumber: 18,
    title: "Academic Reading Mock Test 18",
    description: "IELTS Academic Reading Test featuring passages on The Forgotten Forest, Tidal Power in Britain, and The Columbian Exchange.",
    source: "Academic Reading Practice",
    testType: "academic" as const,
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: The Forgotten Forest (Q1-13)
        // Q1-5: Note Completion
        // Q6-9: Flow-chart Completion
        // Q10-13: True/False/Not Given
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "The Forgotten Forest",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: `Found only in the Deep South of America, longleaf pine woodlands have dwindled to about 3 percent of their former range, but new efforts are under way to restore them.\n\nTHE BEAUTY AND THE BIODIVERSITY of the longleaf pine forest are well-kept secrets, even in its native South. Yet it is among the richest ecosystems in North America, rivaling tallgrass prairies and the ancient forests of the Pacific Northwest in the number of species it shelters. And like those two other disappearing wildlife habitats, longleaf is also critically endangered.\n\nIn longleaf pine forests, trees grow widely scattered, creating an open, parklike environment, more like a savanna than a forest. The trees are not so dense as to block the sun. This openness creates a forest floor that is among the most diverse in the world, where plants such as many-flowered grass pinks, trumpet pitcher plants, Venus flytraps, lavender ladies and pineland bog-buttons grow. As many as 50 different species of wildflowers, shrubs, grasses and ferns have been cataloged in just a single square meter.\n\nOnce, nearly 92 million acres of longleaf forest flourished from Virginia to Texas, the only place in the world where it is found. By the turn of the 21st century, however, virtually all of it had been logged, paved or farmed into oblivion. Only about 3 percent of the original range still supports longleaf forest, and only about 10,000 acres of that is uncut old-growth\u2014the rest is forest that has regrown after cutting. An estimated 100,000 of those acres are still vanishing every year. However, a quiet movement to reverse this trend is rippling across the region. Governments, private organisations (including NWF) and individual conservationists are looking for ways to protect and preserve the remaining longleaf and to plant new forests for future generations.\n\nFiguring out how to bring back the piney woods also will allow biologists to help the plants and animals that depend on this habitat. Nearly two-thirds of the declining, threatened or endangered species in the southeastern United States are associated with longleaf. The outright destruction of longleaf is only part of their story, says Mark Danaher, the biologist for South Carolina\u2019s Francis Marion National Forest. He says the demise of these animals and plants also is tied to a lack of fire, which once swept through the southern forests on a regular basis. \u201cFire is absolutely critical for this ecosystem and for the species that depend on it,\u201d says Danaher.\n\nName just about any species that occurs in longleaf and you can find a connection to fire. Bachman\u2019s sparrow is a secretive bird with a beautiful song that echoes across the longleaf flatwoods. It tucks its nest on the ground beneath clumps of wiregrass and little bluestem in the open under-story. But once fire has been absent for several years, and a tangle of shrubs starts to grow, the sparrows disappear. Gopher tortoises, the only native land tortoises east of the Mississippi, are also abundant in longleaf. A keystone species for these forests, its burrows provide homes and safety to more than 300 species of vertebrates and invertebrates ranging from eastern diamond-back rattlesnakes to gopher frogs. If fire is suppressed, however, the tortoises are choked out. \u201cIf we lose fire,\u201d says Bob Mitchell, an ecologist at the Jones Center, \u201cwe lose wildlife.\u201d\n\nWithout fire, we also lose longleaf. Fire knocks back the oaks and other hardwoods that can grow up to overwhelm longleaf forests. \u201cThey are fire forests,\u201d Mitchell says. \u201cThey evolved in the lightning capital of the eastern United States.\u201d And it wasn\u2019t only lightning strikes that set the forest aflame. \u201cNative Americans also lit fires to keep the forest open,\u201d Mitchell says. \u201cSo did the early pioneers. They helped create the longleaf pine forests that we know today.\u201d\n\nFire also changes how nutrients flow throughout longleaf ecosystems, in ways we are just beginning to understand. For example, researchers have discovered that frequent fires provide extra calcium, which is critical for egg production, to endangered red-cockaded woodpeckers. Frances James, a retired avian ecologist from Florida State University, has studied these small black-and-white birds for more than two decades in Florida\u2019s sprawling Apalachicola National Forest. When she realised female woodpeckers laid larger clutches in the first breeding season after their territories were burned, she and her colleagues went searching for answers. \u201cWe learned calcium is stashed away in woody shrubs when the forest is not burned,\u201d James says. \u201cBut when there is a fire, a pulse of calcium moves down into the soil and up into the longleaf.\u201d Eventually, this calcium makes its way up the food chain to a tree-dwelling species of ant, which is the red-cockaded\u2019s favorite food. The result: more calcium for the birds, which leads to more eggs, more young and more woodpeckers.\n\nToday, fire is used as a vital management tool for preserving both longleaf and its wildlife. Most of these fires are prescribed burns, deliberately set with a drip torch. Although the public often opposes any type of fire\u2014and the smoke that goes with it\u2014these frequent, low-intensity burns reduce the risk of catastrophic concentrations. \u201cForests are going to burn,\u201d says Amadou Diop, NWF\u2019s southern forests restoration manager. \u201cIt\u2019s just a question of when. With prescribed burns, we can pick the time and the place.\u201d\n\nDiop is spearheading a new NWF effort to restore longleaf. \u201cIt\u2019s a species we need to go back to,\u201d he says. Educating landowners about the advantages of growing longleaf is part of the program, he adds, which will soon be under way in nine southern states. \u201cRight now, most longleaf is on public land,\u201d says Jerry McCollum, president of the Georgia Wildlife Federation. \u201cPrivate land is where we need to work,\u201d he adds, pointing out that more than 90 percent of the acreage within the historic range of longleaf falls under this category.\n\nInterest among private landowners is growing throughout the South, but restoring longleaf is not an easy task. The herbaceous layer\u2014the understory of wiregrasses and other plants \u2013 also needs to be re-created. In areas where the land has not been chewed up by farming, but converted to loblolly or slash pine plantations, the seed bank of the longleaf forest usually remains viable beneath the soil. In time, this original vegetation can be coaxed back. Where agriculture has destroyed the seeds, however, wiregrass must be replanted. Right now, the expense is prohibitive, but researchers are searching for low-cost solutions.\n\nBringing back longleaf is not for the short-sighted, however. Few of us will be alive when the pines being planted today become mature forests in 70 to 80 years. But that is not stopping longleaf enthusiasts. \u201cToday, it\u2019s getting hard to find longleaf seedlings to buy,\u201d one of the private landowners says. \u201cEveryone wants them. Longleaf is in a resurgence.\u201d`,
            questionGroups: [
                // Q1-5: Note Completion (passage format)
                {
                    groupType: "note-completion",
                    startQuestion: 1,
                    endQuestion: 5,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 1-5 on your answer sheet.",
                    mainHeading: "Forest fire ensures that:",
                    passage: `Birds can locate their 1 __________ in the ground.\n\nThe burrows of a species of 2 __________ provide homes to many other animals.\n\nHardwoods such as 3 __________ can grow and outnumber long-leaf trees.\n\nApart from fires lit by lightning:\n\nFires are created by 4 __________ and settlers.\n\nFires deliberately lit are called 5 __________`,
                },
                // Q6-9: Flow-chart Completion
                {
                    groupType: "flow-chart-completion",
                    startQuestion: 6,
                    endQuestion: 9,
                    mainInstruction: "Complete the flow-chart below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 6-9 on your answer sheet.",
                    flowchartStages: [
                        {
                            label: "",
                            lines: [
                                {
                                    segments: [
                                        { type: "text", content: "Calcium stored in " },
                                        { type: "blank", questionNumber: 6, width: 110 },
                                    ],
                                },
                            ],
                        },
                        {
                            label: "",
                            lines: [
                                { segments: [{ type: "text", content: "Shrubs are burned" }] },
                            ],
                        },
                        {
                            label: "",
                            lines: [
                                {
                                    segments: [
                                        { type: "text", content: "Calcium released into " },
                                        { type: "blank", questionNumber: 7, width: 110 },
                                    ],
                                },
                            ],
                        },
                        {
                            label: "",
                            lines: [
                                { segments: [{ type: "text", content: "Travel up to the leaves" }] },
                            ],
                        },
                        {
                            label: "",
                            lines: [
                                {
                                    segments: [
                                        { type: "blank", questionNumber: 8, width: 110 },
                                        { type: "text", content: " are eaten" },
                                    ],
                                },
                            ],
                        },
                        {
                            label: "",
                            lines: [
                                {
                                    segments: [
                                        { type: "text", content: "Number of " },
                                        { type: "blank", questionNumber: 9, width: 110 },
                                        { type: "text", content: " increases" },
                                    ],
                                },
                            ],
                        },
                        {
                            label: "",
                            lines: [
                                { segments: [{ type: "text", content: "More cockaded woodpeckers" }] },
                            ],
                        },
                    ],
                },
                // Q10-13: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 10,
                    endQuestion: 13,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "In boxes 10-13 on your answer sheet, write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 10, text: "The sparse distribution of longleaf pine trees leads to the most diversity of species.", correctAnswer: "" },
                        { questionNumber: 11, text: "It is easier to restore forests converted to farms than forests converted to plantations.", correctAnswer: "" },
                        { questionNumber: 12, text: "The cost to restore forest is increasing recently.", correctAnswer: "" },
                        { questionNumber: 13, text: "Few can live to see the replanted forest reach its maturity.", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "note-completion", questionText: "Birds can locate their __________ in the ground.", correctAnswer: "", acceptableAnswers: [], marks: 1 },
                { questionNumber: 2, questionType: "note-completion", questionText: "The burrows of a species of __________ provide homes to many other animals.", correctAnswer: "", acceptableAnswers: [], marks: 1 },
                { questionNumber: 3, questionType: "note-completion", questionText: "Hardwoods such as __________ can grow and outnumber long-leaf trees.", correctAnswer: "", acceptableAnswers: [], marks: 1 },
                { questionNumber: 4, questionType: "note-completion", questionText: "Fires are created by __________ and settlers.", correctAnswer: "", acceptableAnswers: [], marks: 1 },
                { questionNumber: 5, questionType: "note-completion", questionText: "Fires deliberately lit are called __________", correctAnswer: "", acceptableAnswers: [], marks: 1 },
                { questionNumber: 6, questionType: "flow-chart-completion", questionText: "Calcium stored in __________", correctAnswer: "", marks: 1 },
                { questionNumber: 7, questionType: "flow-chart-completion", questionText: "Calcium released into __________", correctAnswer: "", marks: 1 },
                { questionNumber: 8, questionType: "flow-chart-completion", questionText: "__________ are eaten", correctAnswer: "", marks: 1 },
                { questionNumber: 9, questionType: "flow-chart-completion", questionText: "Number of __________ increases", correctAnswer: "", marks: 1 },
                { questionNumber: 10, questionType: "true-false-not-given", questionText: "The sparse distribution of longleaf pine trees leads to the most diversity of species.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "It is easier to restore forests converted to farms than forests converted to plantations.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "The cost to restore forest is increasing recently.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "Few can live to see the replanted forest reach its maturity.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 2: Tidal Power in Britain (Q14-26)
        // Q14-17: Matching Information (A-F)
        // Q18-22: Choose FIVE letters (A-I)
        // Q23-26: Summary Completion
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "Tidal Power in Britain",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: `Tidal power, also called tidal energy, is a form of hydropower that converts the energy of tides into useful forms of power-mainly electricity. Although not yet widely used, tidal power has potential for future electricity generation. Tides are more predictable than wind energy and solar power. Among sources of renewable energy, tidal power has traditionally suffered from relatively high cost and limited availability of sites with sufficiently high tidal ranges or flow velocities, thus constricting its total availability. However, many recent technological developments and improvements, both in design and turbine technology, indicate that the total availability of tidal power may be much higher than previously assumed, and that economic and environmental costs may be brought down to competitive levels. Undersea turbines which produce electricity from the tides are set to become an important source of renewable energy for Britain. It is still too early to predict the extent of the impact they may have, but all the signs are that they will play a significant role in the future.\n\nA Operating on the same principle as wind turbines, the power in sea turbines comes from tidal currents which turn blades similar to ships\u2019 propellers, but, unlike wind, the tides are predictable and the power input is constant. The technology raises the prospect of Britain becoming self-sufficient in renewable energy and drastically reducing its carbon dioxide emissions. If tide, wind and wave power are all developed, Britain would be able to close gas, coal and nuclear power plants and export renewable power to other parts of Europe. Unlike wind power, which Britain originally developed and then abandoned for 20 years allowing the Dutch to make it a major industry, undersea turbines could become a big export earner to island nations such as Japan and New Zealand.\n\nB Tidal sites have already been identified that will produce one sixth or more of the UK\u2019s power and at prices competitive with modern gas turbines and undercutting those of the already ailing nuclear industry. One site alone, the Pentland Firth, between Orkney and mainland Scotland, could produce 10% of the country\u2019s electricity with banks of turbines under the sea, and another at Alderney in the Channel Islands three times the 1,200 megawatts of Britain\u2019s largest and newest nuclear plant, Sizewell B, in Suffolk. Other sites identified include the Bristol Channel and the west coast of Scotland, particularly the channel between Campbeltown and Northern Ireland.\n\nC Work on designs for the new turbine blades and sites are well advanced at the University of Southampton\u2019s sustainable energy research group. The first station is expected to be installed off Lynmouth in Devon shortly to test the technology in a venture jointly funded by the department of Trade and Industry and the European Union. AbuBakr Bahaj, in charge of the Southampton research, said: \u2018The prospects for energy from tidal currents are far better than from wind because the flows of water are predictable and constant. The technology for dealing with the hostile saline environment under the sea has been developed in the North Sea oil industry and much is already known about turbine blade design, because of wind power and ship propellers. There are a few technical difficulties, but I believe in the next five to ten years we will be installing commercial marine turbine farms.\u2019 Southampton has been awarded \u00a3215,000 over three years to develop the turbines and is working with Marine Current Turbines, a subsidiary of IT power, on the Lynmouth project. EU research has now identified 106 potential sites for tidal power, 80% round the coasts of Britain. The best sites are between islands or around heavily indented coasts where there are strong tidal currents.\n\nD A marine turbine blade needs to be only one third of the size of a wind generator to produce three times as much power. The blades will be about 20 meters in diameter, so around 30 meters of water is required. Unlike wind power, there are unlikely to be environmental objections. Fish and other creatures are thought unlikely to be at risk from the relatively slow-turning blades. Each turbine will be mounted on a tower which will connect to the national power supply grid via underwater cables. The towers will stick out of the water and be lit, to warn shipping, and also be designed to be lifted out of the water for maintenance and to clean seaweed from the blades.\n\nE Dr. Bahaj has done most work on the Alderney site, where there are powerful currents. The single undersea turbine farm would produce far more power than needed for the Channel Islands and most would be fed into the French Grid and be re-imported into Britain via the cable under the Channel.\n\nF One technical difficulty is cavitation, where low pressure behind a turning blade causes air bubbles. These can cause vibration and damage the blades of the turbines. Dr. Bahaj said: \u201cWe have to test a number of blade types to avoid this happening or at least make sure it does not damage the turbines or reduce performance. Another slight concern is submerged debris floating into the blades. So far we do not know how much of a problem it might be. We will have to make the turbines robust because the sea is a hostile environment, but all the signs are good that we can do it.\u201d`,
            questionGroups: [
                // Q14-17: Matching Information (A-F)
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 17,
                    mainInstruction: "Reading Passage 2 has six paragraphs, A-F. Which paragraph contains the following information?",
                    subInstruction: "Write the correct letter, A-F, in boxes 14-17 on your answer sheet.",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F"],
                    matchingItems: [
                        { questionNumber: 14, text: "the location of the first test site", correctAnswer: "" },
                        { questionNumber: 15, text: "bringing the power produced on one site back into Britain again", correctAnswer: "" },
                        { questionNumber: 16, text: "a potentially promising alternative energy for island countries", correctAnswer: "" },
                        { questionNumber: 17, text: "possibility of applying technique from another field due to its stable feature", correctAnswer: "" },
                    ],
                },
                // Q18-22: Choose FIVE letters, A-I (using choose-two-letters type which supports multiple numbers)
                {
                    groupType: "choose-two-letters",
                    startQuestion: 18,
                    endQuestion: 22,
                    mainInstruction: "Choose FIVE letters, A-I.",
                    subInstruction: "Write the correct letters in boxes 18-22 on your answer sheet.",
                    questionSets: [
                        {
                            questionNumbers: [18, 19, 20, 21, 22],
                            questionText: "Which FIVE of the following statements about tidal power are made by the author?",
                            options: [
                                { letter: "A", text: "It is best produced in the scene of particular coastlines." },
                                { letter: "B", text: "It would take place all other ways of energy in Britain." },
                                { letter: "C", text: "It is a more reliable source of energy than wind power." },
                                { letter: "D", text: "It would cut down on air pollution." },
                                { letter: "E", text: "It could generate a lot of carbon dioxide to the environment." },
                                { letter: "F", text: "It could contribute to the closure of many existing power stations in Britain." },
                                { letter: "G", text: "It could be the most expensive energy in Britain." },
                                { letter: "H", text: "It could be a means of increasing national income." },
                                { letter: "I", text: "It could compensate for the shortage of inland sites." },
                            ],
                            correctAnswers: ["", "", "", "", ""],
                        },
                    ],
                },
                // Q23-26: Summary Completion
                {
                    groupType: "summary-completion",
                    startQuestion: 23,
                    endQuestion: 26,
                    mainInstruction: "Complete the following summary of the paragraphs of Reading Passage 2.",
                    subInstruction: "Use NO MORE THAN TWO WORDS from the Reading Passage for each answer. Write your answers in boxes 23-26 on your answer sheet.",
                    mainHeading: "",
                    summarySegments: [
                        { type: "text", content: "Marine turbine has small environmental impact, for example, sea life would not in danger due to the fact that blades are comparatively" },
                        { type: "blank", questionNumber: 23, correctAnswer: "" },
                        { type: "text", content: ". Each tower equipped with turbine can be raised for" },
                        { type: "blank", questionNumber: 24, correctAnswer: "" },
                        { type: "text", content: "and extracted seaweed from the blades. However, one practical issue is that air bubble may result from the" },
                        { type: "blank", questionNumber: 25, correctAnswer: "" },
                        { type: "text", content: "(behind blades). This is known as" },
                        { type: "blank", questionNumber: 26, correctAnswer: "" },
                        { type: "text", content: "." },
                    ],
                },
            ],
            questions: [
                { questionNumber: 14, questionType: "matching-information", questionText: "the location of the first test site", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "bringing the power produced on one site back into Britain again", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "a potentially promising alternative energy for island countries", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "possibility of applying technique from another field due to its stable feature", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 18, questionType: "choose-two-letters", questionText: "Which FIVE of the following statements about tidal power are made by the author?", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "", marks: 1 },
                { questionNumber: 19, questionType: "choose-two-letters", questionText: "Which FIVE of the following statements about tidal power are made by the author?", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "", marks: 1 },
                { questionNumber: 20, questionType: "choose-two-letters", questionText: "Which FIVE of the following statements about tidal power are made by the author?", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "", marks: 1 },
                { questionNumber: 21, questionType: "choose-two-letters", questionText: "Which FIVE of the following statements about tidal power are made by the author?", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "", marks: 1 },
                { questionNumber: 22, questionType: "choose-two-letters", questionText: "Which FIVE of the following statements about tidal power are made by the author?", options: ["A", "B", "C", "D", "E", "F", "G", "H", "I"], correctAnswer: "", marks: 1 },
                { questionNumber: 23, questionType: "summary-completion", questionText: "blades are comparatively ___", correctAnswer: "", marks: 1 },
                { questionNumber: 24, questionType: "summary-completion", questionText: "Each tower can be raised for ___", correctAnswer: "", marks: 1 },
                { questionNumber: 25, questionType: "summary-completion", questionText: "air bubble may result from the ___", correctAnswer: "", marks: 1 },
                { questionNumber: 26, questionType: "summary-completion", questionText: "This is known as ___", correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 3: The Columbian Exchange (Q27-40)
        // Q27-34: Matching Information (A-H)
        // Q35-38: True/False/Not Given
        // Q39-40: Short Answer
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "The Columbian Exchange",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: `A Millions of years ago, continental drift carried the Old World and New World apart, splitting North and South America from Eurasia and Africa. That separation lasted so long that it fostered divergent evolution; for instance, the development of rattlesnakes on one side of the Atlantic and of vipers on the other. After 1492, human voyagers in part reversed this tendency. Their artificial re-establishment of connections through the commingling of Old and New World plants, animals, and bacteria, commonly known as the Columbian Exchange, is one of the more spectacular and significant ecological events of the past millennium.\n\nB When Europeans first touched the shores of the Americas, Old World crops such as wheat, barley, rice, and turnips had not travelled west across the Atlantic, and New World crops such as maize, white potatoes, sweet potatoes, and manioc had not travelled east to Europe. In the Americas, there were no horses, cattle, sheep, or goats, all animals of Old World origin. Except for the llama, alpaca, dog, a few fowl, and guinea pig, the New World had no equivalents to the domesticated animals associated with the Old World, nor did it have the pathogens associated with the Old World\u2019s dense populations of humans and such associated creatures as chickens, cattle, black rats, and Aedes aegypti mosquitoes. Among these germs were those that carried smallpox, measles, chickenpox, influenza, malaria, and yellow fever.\n\nC As might be expected, the Europeans who settled on the east coast of the United States cultivated crops like wheat and apples, which they had brought with them. European weeds, which the colonists did not cultivate, and, in fact, preferred to uproot, also fared well in the New World. John Josselyn, an Englishman and amateur naturalist who visited New England twice in the seventeenth century, left us a list, \u201cOf Such Plants as Have Sprung Up since the English Planted and Kept Cattle in New England,\u201d which included couch grass, dandelion, shepherd\u2019s purse, groundsel, sow thistle, and chickweed.\n\nOne of these, a plantain (Plantago major), was named \u201cEnglishman\u2019s Foot\u201d by the Amerindians of New England and Virginia who believed that it would grow only where the English \u201chave trodden, and was never known before the English came into this country\u201d. Thus, as they intentionally sowed Old World crop seeds, the European settlers were unintentionally contaminating American fields with weed seeds. More importantly, they were stripping and burning forests, exposing the native minor flora to direct sunlight, and the hooves and teeth of Old World livestock. The native flora could not tolerate the stress. The imported weeds could, because they had lived with large numbers of grazing animals for thousands of years.\n\nD Cattle and horses were brought ashore in the early 1600s and found hospitable climate and terrain in North America. Horses arrived in Virginia as early as 1620 and in Massachusetts in 1629. Many wandered free with little more evidence of their connection to humanity than collars with a hook at the bottom to catch on fences as they tried to leap over them to get at crops. Fences were not for keeping livestock in, but for keeping livestock out.\n\nE Native American resistance to the Europeans was ineffective. Indigenous peoples suffered from white brutality, alcoholism, the killing and driving off of game, and the expropriation of farmland, but all these together are insufficient to explain the degree of their defeat. The crucial factor was not people, plants, or animals, but germs. Smallpox was the worst and the most spectacular of the infectious diseases mowing down the Native Americans. The first recorded pandemic of that disease in British North America detonated among the Algonquin of Massachusetts in the early 1630s. William Bradford of Plymouth Plantation wrote that the victims \u201cfell down so generally of this disease as they were in the end not able to help one another, no, not to make a fire nor fetch a little water to drink, nor any to bury the dead\u201d. The missionaries and the traders who ventured into the American interior told the same appalling story about smallpox and the indigenes. In 1738 alone, the epidemic destroyed half the Cherokee; in 1759 nearly half the Catawbas; in the first years of the next century, two thirds of the Omahas and perhaps half the entire population between the Missouri River and New Mexico; in 1837-38 nearly every last one of the Mandans and perhaps half the people of the high plains.\n\nF The export of America\u2019s native animals has not revolutionised Old World agriculture or ecosystems as the introduction of European animals to the New World did. America\u2019s grey squirrels and muskrats and a few others have established themselves east of the Atlantic and west of the Pacific, but that has not made much of a difference. Some of America\u2019s domesticated animals are raised in the Old World, but turkeys have not displaced chickens and geese, and guinea pigs have proved useful in laboratories, but have not usurped rabbits in the butcher shops.\n\nG The New World\u2019s great contribution to the Old is in crop plants. Maize, white potatoes, sweet potatoes, various squashes, chiles, and manioc have become essentials in the diets of hundreds of millions of Europeans, Africans, and Asians. Their influence on Old World peoples, like that of wheat and rice on New World peoples, goes far to explain the global population explosion of the past three centuries. The Columbian Exchange has been an indispensable factor in that demographic explosion.\n\nH All this had nothing to do with superiority or inferiority of biosystems in any absolute sense. It has to do with environmental contrasts. Amerindians were accustomed to living in one particular kind of environment, Europeans and Africans in another. When the Old World peoples came to America, they brought with them all their plants, animals, and germs, creating a kind of environment to which they were already adapted, and so they increased in number. Amerindians had not adapted to European germs, and so initially their numbers plunged. That decline has reversed in our time as Amerindian populations have adapted to the Old World\u2019s environmental influence, but the demographic triumph of the invaders, which was the most spectacular feature of the Old World\u2019s invasion of the New, still stands.`,
            questionGroups: [
                // Q27-34: Matching Information (A-H)
                {
                    groupType: "matching-information",
                    startQuestion: 27,
                    endQuestion: 34,
                    mainInstruction: "Reading Passage 3 has eight paragraphs A-H. Which paragraph contains the following information?",
                    subInstruction: "Write the correct letter A-H in boxes 27-34 on your answer sheet.",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G", "H"],
                    matchingItems: [
                        { questionNumber: 27, text: "A description of an imported species that is named after the English colonists", correctAnswer: "" },
                        { questionNumber: 28, text: "The reason why both the New World and Old World experienced population growth", correctAnswer: "" },
                        { questionNumber: 29, text: "The formation of new continents explained", correctAnswer: "" },
                        { questionNumber: 30, text: "The reason why the indigenous population declined", correctAnswer: "" },
                        { questionNumber: 31, text: "An overall description of the species lacked in the Old World and New World", correctAnswer: "" },
                        { questionNumber: 32, text: "A description of some animal species being ineffective in affecting the Old World", correctAnswer: "" },
                        { questionNumber: 33, text: "An overall explanation of the success of the Old World species invasion", correctAnswer: "" },
                        { questionNumber: 34, text: "An account of European animals taking roots in the New World", correctAnswer: "" },
                    ],
                },
                // Q35-38: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 35,
                    endQuestion: 38,
                    mainInstruction: "Do the following statements agree with the claims of the writer in Reading Passage 3?",
                    subInstruction: "In boxes 35-38 on your answer sheet write TRUE if the statement agrees with the information, FALSE if the statement contradicts the information, NOT GIVEN if there is no information on this.",
                    statements: [
                        { questionNumber: 35, text: "European settlers built fences to keep their cattle and horses inside.", correctAnswer: "" },
                        { questionNumber: 36, text: "The indigenous people had been brutally killed by the European colonists.", correctAnswer: "" },
                        { questionNumber: 37, text: "America\u2019s domesticated animals, such as turkey, became popular in the Old World.", correctAnswer: "" },
                        { questionNumber: 38, text: "Crop exchange between the two worlds played a major role in world population growth.", correctAnswer: "" },
                    ],
                },
                // Q39-40: Short Answer
                {
                    groupType: "short-answer",
                    startQuestion: 39,
                    endQuestion: 40,
                    mainInstruction: "Answer the questions below.",
                    subInstruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer.",
                    questions: [
                        { questionNumber: 39, questionText: "Who reported the same story of European diseases among the indigenes from the American interior?", correctAnswer: "" },
                        { questionNumber: 40, questionText: "What is the still existing feature of the Old World\u2019s invasion of the New?", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 27, questionType: "matching-information", questionText: "A description of an imported species that is named after the English colonists", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 28, questionType: "matching-information", questionText: "The reason why both the New World and Old World experienced population growth", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 29, questionType: "matching-information", questionText: "The formation of new continents explained", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 30, questionType: "matching-information", questionText: "The reason why the indigenous population declined", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 31, questionType: "matching-information", questionText: "An overall description of the species lacked in the Old World and New World", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 32, questionType: "matching-information", questionText: "A description of some animal species being ineffective in affecting the Old World", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 33, questionType: "matching-information", questionText: "An overall explanation of the success of the Old World species invasion", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 34, questionType: "matching-information", questionText: "An account of European animals taking roots in the New World", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 35, questionType: "true-false-not-given", questionText: "European settlers built fences to keep their cattle and horses inside.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 36, questionType: "true-false-not-given", questionText: "The indigenous people had been brutally killed by the European colonists.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 37, questionType: "true-false-not-given", questionText: "America\u2019s domesticated animals, such as turkey, became popular in the Old World.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 38, questionType: "true-false-not-given", questionText: "Crop exchange between the two worlds played a major role in world population growth.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 39, questionType: "short-answer", questionText: "Who reported the same story of European diseases among the indigenes from the American interior?", correctAnswer: "", marks: 1 },
                { questionNumber: 40, questionType: "short-answer", questionText: "What is the still existing feature of the Old World\u2019s invasion of the New?", correctAnswer: "", marks: 1 },
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
        console.error("\u274c Error seeding Reading Test 18:", error);
        process.exit(1);
    }
}

seedTest();

/**
 * Seed Script: Academic Reading Test 02
 * Passages: Vikings' Wayfaring Ways / Dyslexia / Catastrophe theory
 * Run: npx ts-node-dev --transpile-only src/scripts/seedReadingTest02.ts
 */

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

// ═══════════════════════════════════════════════════════════════
// PASSAGE 1: THE VIKINGS' WAYFARING WAYS (paragraphs A-L)
// ═══════════════════════════════════════════════════════════════

const passage1Text = `A Perhaps best known as fierce warriors, the Vikings were also the most far-ranging of peoples. In fact, the term Viking, in Old Norse, means "to go on an expedition." From the late 700s until the eleventh century, Viking explorers journeyed from their native Norway, Denmark, and Sweden to many distant lands. They travelled as far west as Newfoundland in present-day Canada, and as far east as Baghdad.

B Those from Norway sailed west to the British Isles, and eventually across the Atlantic Ocean. During their first expedition, in 793, a force of Viking warriors sacked the famed abbey at Lindisfarne, on England's northeast coast. In the 800s, groups of raiders went on to occupy the Shetland Islands, north of the British Isles and west of Norway, and the Orkney Islands off northern Scotland.

C By 870, the Vikings were settling Iceland. In 980, an Icelandic assembly found a man named Eric "the Red" Ericson guilty of murder and sent him into exile. Eric the Red responded by sailing to a large island to the west, which he called "Greenland." An Icelandic saga mentions that people would be attracted to go to Greenland if it had a favourable name. Around 998, Eric the Red's son, Leif "the Lucky" Ericson, and a small Viking fleet sailed west to North America. There they established the first European settlement in the New World, called "Vinland."

D Vikings from Denmark, meanwhile, ravaged large swaths of England and France. In 866, a Viking "Great Army" landed in England, occupying much of the country's north and east. They forced the English king to acknowledge their control of much of England under the so-called Danelaw. To the west, they conquered coastal portions of Ireland, and in 841 founded Dublin, today a major Irish city, but originally a Viking fort. The Vikings remained a major power in Ireland until the early eleventh century.

E To the south, the Vikings conquered France, moving swiftly up rivers in longboats, powered by oar and sail. From 845 to 886, they surged up the Seine to attack Paris three times. To stop the raids, French King Charles III the Simple in 911 offered the Viking chief Rollo territories in northwest France, called Normandy, after the Normans or "Northmen." There they set up a powerful kingdom and, in 1066, under William, Duke of Normandy defeated King Harold at the battle of Hastings in England.

F Farther south, in 844, the Vikings had raided Portugal and Spain, then largely controlled by Arab Moors. A fleet of 100 Viking ships seized Lisbon and boldly sailed up the Guadalquivir River to occupy Seville. However, the Moors dealt them a rare defeat. The Moors catapulted flaming projectiles onto the Viking vessels, forcing a retreat.

G Still other Vikings sailed much farther, to raid Morocco, then to the eastern Mediterranean and beyond. Many of these Vikings enlisted with the military forces of the Byzantine Empire, the Greek speaking successors to the Roman Empire. Vikings made up the Byzantine Emperor's elite Varangian Guard. In 902, hundreds of Varangians served as marines during a Byzantine naval assault on the island of Crete. Varangians battled Arab forces in Syria in 955, and even fought in Jerusalem. So many men left Scandinavia for the Byzantine Empire that, to stem the outflow, Sweden passed a law denying inherited property to anyone serving under the Byzantines.

H The Vikings of Sweden, meanwhile, were moving out of Scandinavia to the east and south. They journeyed through the Baltic Sea, then built inland trading posts in Germany and Poland. In time, they struck out across Central and Eastern Europe, down the Vistula River in Poland, and the Dnieper, Volga, and Don Rivers in Russia. Their vessel of choice was the "knar," a cargo ship with a deep draft and wide hull. Viking merchants on horseback penetrated far into the Asian heartland, trading with towns on the Caspian and Black seas.

I The most significant settlements were in Russia and Ukraine. In 862, Vikings settled in the town of Novgorod, in northwestern Russia. It became the capital of a country called Rus, after the Finnish name for the Swedes. Rus came from the word Rutosi, meaning "rowers." Rus formed the foundation of Russia, as the Russian and Viking leaders of Rus intermarried, converted to Christianity, and steadily expanded their territory. And after lucrative trade relations were established with the Byzantines and with Muslim lands, the Rus moved their capital southward to Kiev, later the capital of Ukraine.

J Another important Viking market town was Bulgar, on the Volga River. There, merchants peddled honey, wax, amber, and steel swords. The Viking's most common commodity may have been skins: they dealt in horse, beaver, rabbit, mink, ermine, and sable skins. They also traded hazelnuts, fish, cattle, and falcons. Another commodity was slaves, many of them Slavs from Eastern Europe. The merchants eagerly exchanged their goods for Arab silver coins. In Sweden, archeologists have excavated about 100,000 such coins, minted in such distant cities as Cairo and Tashkent.

K Like their Danish and Norwegian relatives, the Swedish Vikings travelled to the most exotic realms. They took part in the Silk Road trade with India and China. Archeological evidence shows that Viking traders even travelled by camel caravan to Baghdad.

L Given the wide-ranging travel of the Vikings, it is fitting that the Anglo Saxons gave them the nickname "Faergenga" \u2014 "Far Going."`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 2: DYSLEXIA (numbered paragraphs 1-11)
// ═══════════════════════════════════════════════════════════════

const passage2Text = `Paragraph 1 People who left school unable to read were often dismissed as being lazy. Some probably were but many were simply unable to learn because they were dyslexic. Four key findings now suggest that dyslexia is an organic problem and not a motivational one. Firstly the brain anatomy of dyslexics differs slightly from those of non-dyslexics. Secondly, their brain functions as measured by electrical activity are dissimilar. Thirdly they have behavioural differences apart from an inability to read. Finally, there is more and more evidence to suggest that their condition is linked to particular genes.

Paragraph 2 The anatomical differences between the brains of dyslexics and non-dyslexics were first noticed in 1979 by Albert Galaburda of Harvard Medical School. He found two sorts of microscopic flaws in the language centres of dyslexic\u2019s brains. These are called ectoplasts and microgyria.

Paragraph 3 The language centres form part of the cerebral cortex and are situated on the left side of the brain. The cortex consists of six layers of cells. Ectopia is a collection of nerve cells that push up from the lower layers of the cortex into the outer ones, where they are not normally found. A microgyrus is a small fold in the cortex which results in a reduction in the normal number of layers from six to four.

Paragraph 4 The formation of microgyria causes confusion in the neutral connections between the language centres and other parts of the brain. Microgyria have been induced in rat embryos and as adults these rats are found to have a reduced ability in distinguishing between two sounds played in quick succession. This inability to distinguish between two sounds in quick succession is also a symptom of dyslexia in people.

Paragraph 5 Dyslexia not only affects language centres but also causes brain abnormalities in visual pathways as well. One such abnormality is the reduction in the cell size in the layers of the lateral geniculate nucleus. This is where the nerve tracts which transmit information from the eyes to the visual cortex at the back of the brain are found. This is significant as dyslexia is essentially an inability to deal with linguistic information in visual form.

Paragraph 6 This parallel failure of visual and auditory systems is seen elsewhere in the brain. Uinevere Eden and Thomas Zeffiro, who work at Georgetown University in Washington D.C. have found an example of it using a brain-scanning technique called functional magnetic resonance imaging (MRI).

Paragraph 7 A fundamental characteristic of dyslexia is difficulty in processing written phenomes. Phenomes are the units of sound which make up a language. By giving dyslexic people tasks such as removing phenomes from the beginning of words, while at the same time monitoring brain activity with their scanner, Dr Eden and Dr Zeffiro were able to stimulate both the visual and auditory pathways simultaneously. Their findings demonstrated that dyslexics showed low activity in a part of the brain called Brodmann\u2019s area 37, another part of the brain where visual and auditory information are handled in close proximity.

Paragraph 8 Dr Eden and Dr Zeffiro have also compared the brain activity of dyslexic and non-dyslexic readers who were given a task not related to reading. Another symptom of dyslexia is difficulty in detecting visual motion. On this basis, Dr Eden and Dr Zeffiro devised a task whereby people were asked to look at dots on a screen and identify which of them was moving and in which direction. While monitoring brain activity with the scanner, it was found that dyslexics performing this task showed significantly less brain activity in Brodmann\u2019s area 37 than non-dyslexics. As this task did not require reading skills it could be used to test children for incipient dyslexia before they reach the reading age; then they could be given special tuition.

Paragraph 9 To broaden their investigation, Dr Eden and Dr Zeffiro teamed up with Frank Wood and his colleagues at the Wake Forest University School of Medicine in North Carolina, an institution specializing in dyslexia. Dr Eden and Dr Zeffiro borrowed some of its patients and monitored them in the fMRI machine at Georgetown University. This was done both before and after the individuals had participated in an intensive programme designed to improve their reading. Non-dyslexics were also scanned and used as controls in the investigation.

Paragraph 10 The results were significant. After the programme, the participants showed enhanced brain activity while reading. However, this activity was not on the left side of the brain but in areas on the right side, corresponding exactly to language centres in the opposite hemisphere. The reading programme had stimulated the brains of the participants to recruit batches of nerve cells in a place not normally associated with language processing.

Paragraph 11 The primary cause for these problems is another of Dr Wood\u2019s interests. The abnormal brain tissue in dyslexia is developed by the fifth month of gestation, which indicates that the cause of the disorder must act before that time. This suggests that it may be genetic. Many people argue about the relative contributions of genes and the environment to human behaviour and human disease. Dyslexia is both behavioural and, to a certain degree, it is a disease. It appears to have a biological origin and genetic roots. Yet looking at it from a different angle its cause is almost purely environmental. People living in illiterate societies are hardly troubled by their other symptoms. It was the invention of writing that brought the difficulty to light, not the mutation of genes. Nature or the environment? You will have to decide between the two.`;

// ═══════════════════════════════════════════════════════════════
// PASSAGE 3: CATASTROPHE THEORY (paragraphs A-F)
// ═══════════════════════════════════════════════════════════════

const passage3Text = `A In the late eighteenth and early nineteenth centuries, the popular theory among Earth scientists was that a number of major catastrophes had taken place over a relatively short period of time to give Earth its shape. French geologist Baron Georges Cuvier introduced this idea, which was later coined the "Catastrophe Theory." Proponents of the catastrophe theory used fossilized creatures and the faunal changes in rock strata to support their beliefs that major events such as volcanoes had occurred on a worldwide scale. The catastrophe theory was used to support the notion that Earth's history was not a relatively long one.

B In response to the catastrophe theory, a handful of Earth scientists searched for explanations that would provide a better scientific basis for Earth's geology. James Hutton, the father of geology, is best known for his gradualist theory, a paradigm that became known as "Uniformitarianism." Hutton published the theory of the Earth in 1795, after which many other geologists including Charles Lyell, adopted the idea that small changes on Earth occurred over a large expanse of time. Uniformitarianism rejected the idea that cataclysmic events could shape the Earth so quickly, and instead proposed the theory that the key to the present is the past. The term deep time was used to describe the span in which gradual geological processes occurred, especially the formation of sedimentary rock. Charles Darwin later based his work on the idea, by developing his theory of evolution.

C The majority of paleontologists and geologists adopted the gradualist theory of Earth's history for more than 100 years. In 1980, a discovery in Italy gave scientists a reason to reconsider the discarded theories of catastrophism. Geologist Walter Alvarez discovered a clay layer in the K-T boundary that intrigued him. The K-T boundary refers to the layer of Earth between the Cretaceous and Tertiary periods. The geologist with the help of his father Luis Alvarez, a prominent physicist, analysed the clay for heavy metals. After careful examination, the clay was found to contain high levels of iridium. Samples taken from the K-T boundary in other parts of the world were examined, with the same findings.

D The Alvarez group wrote a historic paper that applied the catastrophe theory to their discovery. According to their hypothesis, the iridium in the K-T boundary was caused by an asteroid or a comet that hit Earth near the end of the Cretaceous period, over 65 million years ago. They also proposed that the impact would have raised enough dust to block the sun and cool Earth, which in turn would have prevented photosynthesis. This chain reaction would have led to the extinction of plants and animals. The main reason that the Alvarez theory took hold so quickly in both the world of science and the public realm, was that it could account for the extinction of the dinosaurs at the end of the Cretaceous period. The acceptance of this theory was widespread, even before the discovery in 1990 of a 180-kilometer crater in Mexico's Yucatan Peninsula, a potential piece of evidence of the asteroid impact.

E Events that have occurred on Earth in the last 100 years or more have proved to geologists that not all processes are gradual. Major rivers have flooded areas in a matter of days, and volcanoes have erupted, causing mass devastation. The eruption of Mount St. Helens was proof of how a catastrophe could easily change the Earth's landscape. Modern research on fossils even supports the theory of a marine catastrophe, not unlike the legends and stories among many peoples of great floods. Some scientists believe that animal remains found within the layers of sedimentary rock may have been casualties of such a flood. Sedimentary rock is made up of layers such as sandstone and limestone and is created by water movement. In addition, some scientists propose that the glacial ice sheet that once spread out across North America melted catastrophically rather than having a slow glacial retreat. Deep erosion up to 100 meters wide was discovered along the bottom of some of the Great Lakes. Within the gullies, layers of periodic sediment point to catastrophic melting.

F Though there is little debate that catastrophic events caused the mass extinction of several of Earth's species, namely the dinosaurs, geologists still question whether asteroids, volcanoes, or other natural disasters were the cause. The idea that the moon was formed as a result of catastrophic events is a related field of study and one that has been debated for decades.`;

// ═══════════════════════════════════════════════════════════════
// FULL TEST DATA
// ═══════════════════════════════════════════════════════════════

const readingTest02 = {
    testId: "READING_TEST_02",
    testNumber: 2,
    title: "Academic Reading Mock Test 02",
    description: "Academic Reading Test with 3 passages and 40 questions \u2014 Vikings, Dyslexia, Catastrophe Theory",
    source: "Academic Reading Practice",
    testType: "academic",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 1: THE VIKINGS' WAYFARING WAYS (Q1-13)          ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 1,
            title: "The Vikings' Wayfaring Ways",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: passage1Text,
            questionGroups: [
                // ── Q1-5: SHORT-ANSWER (ONE NUMBER) ──
                {
                    groupType: "short-answer",
                    startQuestion: 1,
                    endQuestion: 5,
                    mainInstruction: "Answer the questions below.",
                    subInstruction: "Choose ONE NUMBER ONLY from the text for each answer.",
                    questions: [
                        { questionNumber: 1, questionText: "When did Viking warriors raid an abbey on the coast of England?", correctAnswer: "793" },
                        { questionNumber: 2, questionText: "When was Eric the Red convicted of a crime?", correctAnswer: "980" },
                        { questionNumber: 3, questionText: "When did Vikings establish a fort in Ireland?", correctAnswer: "841" },
                        { questionNumber: 4, questionText: "When was a Viking chief granted lands by a king of France?", correctAnswer: "911" },
                        { questionNumber: 5, questionText: "When did Viking warriors defeat an English king?", correctAnswer: "1066" },
                    ],
                },

                // ── Q6-13: SUMMARY WITH OPTIONS (A-O) ──
                {
                    groupType: "summary-with-options",
                    startQuestion: 6,
                    endQuestion: 13,
                    mainInstruction: "Complete the summary using the list of words, A-O, below.",
                    subInstruction: "Write the correct letter, A-O, on lines 6-13 on your answer sheet.",
                    mainHeading: "",
                    phraseList: [
                        { letter: "A", text: "warriors" },
                        { letter: "B", text: "an attack" },
                        { letter: "C", text: "capital" },
                        { letter: "D", text: "explorers" },
                        { letter: "E", text: "trade with" },
                        { letter: "F", text: "conquered" },
                        { letter: "G", text: "burning objects" },
                        { letter: "H", text: "settled in" },
                        { letter: "I", text: "ship" },
                        { letter: "J", text: "oars" },
                        { letter: "K", text: "market" },
                        { letter: "L", text: "a parade" },
                        { letter: "M", text: "archeologists" },
                        { letter: "N", text: "silver coins" },
                        { letter: "O", text: "horse" },
                    ],
                    summarySegments: [
                        { type: "text" as const, content: "The people known as Vikings were given this name because " },
                        { type: "blank" as const, questionNumber: 6, correctAnswer: "D" },
                        { type: "text" as const, content: ". Groups of Vikings from Norway travelled west to Britain, Iceland, and beyond. They were the first Europeans who " },
                        { type: "blank" as const, questionNumber: 7, correctAnswer: "H" },
                        { type: "text" as const, content: " North America. Groups from Denmark cover large areas of England and France. Other " },
                        { type: "blank" as const, questionNumber: 8, correctAnswer: "F" },
                        { type: "text" as const, content: " groups of Vikings raided areas of Portugal and Spain. The people of Seville, Spain, drove the Vikings away by throwing " },
                        { type: "blank" as const, questionNumber: 9, correctAnswer: "G" },
                        { type: "text" as const, content: " at them. Large numbers of Vikings left Scandinavia for the Byzantine Empire, and many of these joined the Byzantine military. At one point, they took part in " },
                        { type: "blank" as const, questionNumber: 10, correctAnswer: "B" },
                        { type: "text" as const, content: " on the Greek island of Crete. Groups of Swedish Vikings crossed the Baltic Sea to explore the lands beyond. They travelled down Russian rivers, then journeyed deep into Asia by " },
                        { type: "blank" as const, questionNumber: 11, correctAnswer: "O" },
                        { type: "text" as const, content: ". After settling in northwest Russia, they expanded their territories toward the south. Kiev, Ukraine, eventually became the Vikings' territorial " },
                        { type: "blank" as const, questionNumber: 12, correctAnswer: "C" },
                        { type: "text" as const, content: ". The Vikings also had an important " },
                        { type: "blank" as const, questionNumber: 13, correctAnswer: "K" },
                        { type: "text" as const, content: " in the town of Bulgar on the Volga River." },
                    ],
                },
            ],
            questions: [
                // Q1-5: Short Answer
                { questionNumber: 1, questionType: "short-answer", questionText: "When did Viking warriors raid an abbey on the coast of England?", correctAnswer: "793", acceptableAnswers: ["793"], marks: 1 },
                { questionNumber: 2, questionType: "short-answer", questionText: "When was Eric the Red convicted of a crime?", correctAnswer: "980", acceptableAnswers: ["980"], marks: 1 },
                { questionNumber: 3, questionType: "short-answer", questionText: "When did Vikings establish a fort in Ireland?", correctAnswer: "841", acceptableAnswers: ["841"], marks: 1 },
                { questionNumber: 4, questionType: "short-answer", questionText: "When was a Viking chief granted lands by a king of France?", correctAnswer: "911", acceptableAnswers: ["911"], marks: 1 },
                { questionNumber: 5, questionType: "short-answer", questionText: "When did Viking warriors defeat an English king?", correctAnswer: "1066", acceptableAnswers: ["1066"], marks: 1 },
                // Q6-13: Summary With Options
                { questionNumber: 6, questionType: "summary-with-options", questionText: "Vikings were given this name because ___", options: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"], correctAnswer: "D", marks: 1 },
                { questionNumber: 7, questionType: "summary-with-options", questionText: "first Europeans who ___ North America", options: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"], correctAnswer: "H", marks: 1 },
                { questionNumber: 8, questionType: "summary-with-options", questionText: "Other ___ groups of Vikings raided Portugal and Spain", options: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"], correctAnswer: "F", marks: 1 },
                { questionNumber: 9, questionType: "summary-with-options", questionText: "drove the Vikings away by throwing ___", options: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"], correctAnswer: "G", marks: 1 },
                { questionNumber: 10, questionType: "summary-with-options", questionText: "they took part in ___ on Crete", options: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"], correctAnswer: "B", marks: 1 },
                { questionNumber: 11, questionType: "summary-with-options", questionText: "journeyed deep into Asia by ___", options: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"], correctAnswer: "O", marks: 1 },
                { questionNumber: 12, questionType: "summary-with-options", questionText: "Kiev became the Vikings' territorial ___", options: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"], correctAnswer: "C", marks: 1 },
                { questionNumber: 13, questionType: "summary-with-options", questionText: "an important ___ in Bulgar", options: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"], correctAnswer: "K", marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 2: DYSLEXIA (Q14-26)                            ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 2,
            title: "Dyslexia",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: passage2Text,
            questionGroups: [
                // ── Q14-18: TRUE/FALSE/NOT GIVEN ──
                {
                    groupType: "true-false-not-given",
                    startQuestion: 14,
                    endQuestion: 18,
                    mainInstruction: "Do the following statements agree with the views of the writer in the reading passage?",
                    subInstruction: "Write TRUE, FALSE or NOT GIVEN.",
                    optionsExplanation: [
                        { option: "TRUE", explanation: "if the statement agrees with the writer" },
                        { option: "FALSE", explanation: "if the statement contradicts the writer" },
                        { option: "NOT GIVEN", explanation: "if there is no information about this" },
                    ],
                    statements: [
                        { questionNumber: 14, text: "Dyslexia is probably caused by motivational problems.", correctAnswer: "FALSE" },
                        { questionNumber: 15, text: "Dyslexia affects language as well as visual and audio processes.", correctAnswer: "TRUE" },
                        { questionNumber: 16, text: "In modern society dyslexia is essentially the inability to distinguish between visual forms.", correctAnswer: "FALSE" },
                        { questionNumber: 17, text: "It has been demonstrated that special reading programmes can teach dyslexic people to read as well as non-dyslexic ones.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 18, text: "The cause of dyslexia is partly genetic and partly environmental.", correctAnswer: "TRUE" },
                    ],
                },

                // ── Q19-23: MATCHING FEATURES (A-D) ──
                {
                    groupType: "matching-features",
                    startQuestion: 19,
                    endQuestion: 23,
                    mainInstruction: "Match the items from the reading passage to the definitions.",
                    subInstruction: "Choose the correct letters A, B, C or D.",
                    featureListTitle: "Definitions",
                    featureOptions: [
                        { letter: "A", text: "A term relating to layers or pathways in the cortex (see each question for specifics)." },
                        { letter: "B", text: "See question-specific definition B." },
                        { letter: "C", text: "See question-specific definition C." },
                        { letter: "D", text: "See question-specific definition D." },
                    ],
                    paragraphOptions: ["A", "B", "C", "D"],
                    matchingItems: [
                        {
                            questionNumber: 19,
                            text: "Ectopia \u2014 A: a reduction in the number of layers in part of the cortex of the brain. / B: a collection of nerve cells in a part of the cortex of the brain where they are not normally found. / C: a formation of six layers in the cortex of the brain, where normally there are four. / D: an inability to deal with linguistic information in visual form.",
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 20,
                            text: "Microgyria \u2014 A: a symptom of dyslexia. / B: abnormal pathways of visual information in the brain. / C: an abnormal formation of layers in the cortex of the brain. / D: confusion resulting in inability to distinguish sounds in quick succession.",
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 21,
                            text: "Phenomes \u2014 A: sounds made in quick succession. / B: part of language that dyslexics are unable to identify. / C: brain activity that can be monitored with special scanning techniques. / D: the units of sound which make up a language.",
                            correctAnswer: "D",
                        },
                        {
                            questionNumber: 22,
                            text: "MRI \u2014 A: a scientific equipment for assessing reading skills. / B: a technique for scanning activity of the brain. / C: a technique for stimulating visual and auditory pathways in the brain. / D: a machine to stimulate visual motion.",
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 23,
                            text: "Brodmann\u2019s area 37 \u2014 A: a less active part of the brain. / B: an abnormal formation in the brain of dyslexics. / C: where all visual information is handled in the brain. / D: part of the brain where visual and auditory information are handled.",
                            correctAnswer: "D",
                        },
                    ],
                },

                // ── Q24-26: SENTENCE COMPLETION (NO MORE THAN THREE WORDS) ──
                {
                    groupType: "sentence-completion",
                    startQuestion: 24,
                    endQuestion: 26,
                    mainInstruction: "Complete the sentences below with words taken from the reading passage.",
                    subInstruction: "Use NO MORE THAN THREE WORDS for each answer.",
                    statements: [
                        { questionNumber: 24, text: "In the language centres of dyslexics brains, Dr Albert Galaburda discovered two sorts of __________.", correctAnswer: "microscopic flaws" },
                        { questionNumber: 25, text: "One abnormality in the dyslexics brains is the reduction in the cell size in the layers of the __________.", correctAnswer: "lateral geniculate nucleus" },
                        { questionNumber: 26, text: "Dyslexia is a behavioural problem and also a __________.", correctAnswer: "disease" },
                    ],
                },
            ],
            questions: [
                // Q14-18: TFNG
                { questionNumber: 14, questionType: "true-false-not-given", questionText: "Dyslexia is probably caused by motivational problems.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 15, questionType: "true-false-not-given", questionText: "Dyslexia affects language as well as visual and audio processes.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 16, questionType: "true-false-not-given", questionText: "In modern society dyslexia is essentially the inability to distinguish between visual forms.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 17, questionType: "true-false-not-given", questionText: "It has been demonstrated that special reading programmes can teach dyslexic people to read as well as non-dyslexic ones.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 18, questionType: "true-false-not-given", questionText: "The cause of dyslexia is partly genetic and partly environmental.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                // Q19-23: Matching Features
                { questionNumber: 19, questionType: "matching-features", questionText: "Ectopia", options: ["A","B","C","D"], correctAnswer: "B", marks: 1 },
                { questionNumber: 20, questionType: "matching-features", questionText: "Microgyria", options: ["A","B","C","D"], correctAnswer: "C", marks: 1 },
                { questionNumber: 21, questionType: "matching-features", questionText: "Phenomes", options: ["A","B","C","D"], correctAnswer: "D", marks: 1 },
                { questionNumber: 22, questionType: "matching-features", questionText: "MRI", options: ["A","B","C","D"], correctAnswer: "B", marks: 1 },
                { questionNumber: 23, questionType: "matching-features", questionText: "Brodmann's area 37", options: ["A","B","C","D"], correctAnswer: "D", marks: 1 },
                // Q24-26: Sentence Completion
                { questionNumber: 24, questionType: "sentence-completion", questionText: "Dr Albert Galaburda discovered two sorts of ___", correctAnswer: "microscopic flaws", acceptableAnswers: ["microscopic flaws"], marks: 1 },
                { questionNumber: 25, questionType: "sentence-completion", questionText: "reduction in the cell size in the layers of the ___", correctAnswer: "lateral geniculate nucleus", acceptableAnswers: ["lateral geniculate nucleus"], marks: 1 },
                { questionNumber: 26, questionType: "sentence-completion", questionText: "Dyslexia is a behavioural problem and also a ___", correctAnswer: "disease", acceptableAnswers: ["disease", "a disease"], marks: 1 },
            ],
        },

        // ╔═══════════════════════════════════════════════════════════╗
        // ║  SECTION 3: CATASTROPHE THEORY (Q27-40)                  ║
        // ╚═══════════════════════════════════════════════════════════╝
        {
            sectionNumber: 3,
            title: "Catastrophe theory",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: passage3Text,
            questionGroups: [
                // ── Q27-32: SUMMARY WITH OPTIONS (A-K) ──
                {
                    groupType: "summary-with-options",
                    startQuestion: 27,
                    endQuestion: 32,
                    mainInstruction: "Complete the notes using the list of words, A-K, below.",
                    subInstruction: "Write the correct letter, A-K, on lines 27-32 on your answer sheet.",
                    mainHeading: "",
                    phraseList: [
                        { letter: "A", text: "Short" },
                        { letter: "B", text: "Small" },
                        { letter: "C", text: "Charles Darwin" },
                        { letter: "D", text: "Long" },
                        { letter: "E", text: "definite" },
                        { letter: "F", text: "Disasters" },
                        { letter: "G", text: "James Hutton" },
                        { letter: "H", text: "Mysterious" },
                        { letter: "I", text: "Walter Alvarez" },
                        { letter: "J", text: "Evolution" },
                        { letter: "K", text: "George Cuvier" },
                    ],
                    summarySegments: [
                        { type: "text" as const, content: "Catastrophe Theory\n\nFirst introduced by " },
                        { type: "blank" as const, questionNumber: 27, correctAnswer: "K" },
                        { type: "text" as const, content: "\nProposes that major " },
                        { type: "blank" as const, questionNumber: 28, correctAnswer: "F" },
                        { type: "text" as const, content: " have given Earth its shape.\nSupports the idea that the Earth has a " },
                        { type: "blank" as const, questionNumber: 29, correctAnswer: "A" },
                        { type: "text" as const, content: " history.\n\nGradualist Theory\n\nFirst introduced by " },
                        { type: "blank" as const, questionNumber: 30, correctAnswer: "G" },
                        { type: "text" as const, content: "\nProposes that many " },
                        { type: "blank" as const, questionNumber: 31, correctAnswer: "B" },
                        { type: "text" as const, content: " changes in the shape of the Earth happened over a " },
                        { type: "blank" as const, questionNumber: 32, correctAnswer: "D" },
                        { type: "text" as const, content: " period of time." },
                    ],
                },

                // ── Q33-39: MATCHING INFORMATION (A-F) ──
                {
                    groupType: "matching-information",
                    startQuestion: 33,
                    endQuestion: 39,
                    mainInstruction: "The passage has six paragraphs, A-F.",
                    subInstruction: "Which paragraph mentions the following information?",
                    note: "You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F"],
                    matchingItems: [
                        { questionNumber: 33, text: "proof that not all changes on Earth have occurred gradually", correctAnswer: "E" },
                        { questionNumber: 34, text: "a theory explaining the presence of iridium beneath Earth\u2019s surface", correctAnswer: "D" },
                        { questionNumber: 35, text: "publication of a book about the gradualist theory", correctAnswer: "B" },
                        { questionNumber: 36, text: "discovery of a large crater that could have been caused by an asteroid", correctAnswer: "D" },
                        { questionNumber: 37, text: "evidence of the occurrence of a large flood in Earth\u2019s past", correctAnswer: "E" },
                        { questionNumber: 38, text: "recurrence of interest in the catastrophe theory", correctAnswer: "C" },
                        { questionNumber: 39, text: "ideas about how quickly ice age glaciers disappeared", correctAnswer: "E" },
                    ],
                },

                // ── Q40: MULTIPLE CHOICE (A-C) ──
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 40,
                    endQuestion: 40,
                    mainInstruction: "Choose the correct letter, A, B or C.",
                    subInstruction: "Write the correct letter on line 40 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 40,
                            questionText: "Most scientists now agree that",
                            options: [
                                { letter: "A", text: "The gradualist theory is correct." },
                                { letter: "B", text: "Catastrophic events occur regularly on the moon." },
                                { letter: "C", text: "A major catastrophe caused the dinosaurs to disappear." },
                            ],
                            correctAnswer: "C",
                        },
                    ],
                },
            ],
            questions: [
                // Q27-32: Summary With Options
                { questionNumber: 27, questionType: "summary-with-options", questionText: "Catastrophe Theory: First introduced by ___", options: ["A","B","C","D","E","F","G","H","I","J","K"], correctAnswer: "K", marks: 1 },
                { questionNumber: 28, questionType: "summary-with-options", questionText: "major ___ have given Earth its shape", options: ["A","B","C","D","E","F","G","H","I","J","K"], correctAnswer: "F", marks: 1 },
                { questionNumber: 29, questionType: "summary-with-options", questionText: "Earth has a ___ history", options: ["A","B","C","D","E","F","G","H","I","J","K"], correctAnswer: "A", marks: 1 },
                { questionNumber: 30, questionType: "summary-with-options", questionText: "Gradualist Theory: First introduced by ___", options: ["A","B","C","D","E","F","G","H","I","J","K"], correctAnswer: "G", marks: 1 },
                { questionNumber: 31, questionType: "summary-with-options", questionText: "many ___ changes in the shape of the Earth", options: ["A","B","C","D","E","F","G","H","I","J","K"], correctAnswer: "B", marks: 1 },
                { questionNumber: 32, questionType: "summary-with-options", questionText: "over a ___ period of time", options: ["A","B","C","D","E","F","G","H","I","J","K"], correctAnswer: "D", marks: 1 },
                // Q33-39: Matching Information
                { questionNumber: 33, questionType: "matching-information", questionText: "proof that not all changes on Earth have occurred gradually", options: ["A","B","C","D","E","F"], correctAnswer: "E", marks: 1 },
                { questionNumber: 34, questionType: "matching-information", questionText: "a theory explaining the presence of iridium beneath Earth's surface", options: ["A","B","C","D","E","F"], correctAnswer: "D", marks: 1 },
                { questionNumber: 35, questionType: "matching-information", questionText: "publication of a book about the gradualist theory", options: ["A","B","C","D","E","F"], correctAnswer: "B", marks: 1 },
                { questionNumber: 36, questionType: "matching-information", questionText: "discovery of a large crater that could have been caused by an asteroid", options: ["A","B","C","D","E","F"], correctAnswer: "D", marks: 1 },
                { questionNumber: 37, questionType: "matching-information", questionText: "evidence of the occurrence of a large flood in Earth's past", options: ["A","B","C","D","E","F"], correctAnswer: "E", marks: 1 },
                { questionNumber: 38, questionType: "matching-information", questionText: "recurrence of interest in the catastrophe theory", options: ["A","B","C","D","E","F"], correctAnswer: "C", marks: 1 },
                { questionNumber: 39, questionType: "matching-information", questionText: "ideas about how quickly ice age glaciers disappeared", options: ["A","B","C","D","E","F"], correctAnswer: "E", marks: 1 },
                // Q40: MCQ
                { questionNumber: 40, questionType: "multiple-choice-full", questionText: "Most scientists now agree that", correctAnswer: "C", marks: 1 },
            ],
        },
    ],
};

// ═══════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════

async function seedReadingTest02() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to MongoDB");

        // Find by testNumber (DB might have different testId)
        const existing = await ReadingTest.findOne({ testNumber: readingTest02.testNumber });
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest02);
            console.log(`\u2705 Reading Test 02 UPDATED successfully!`);
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("\u274c Admin user not found!");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest02, createdBy: admin._id });
            console.log(`\u2705 Reading Test 02 CREATED successfully!`);
        }

        // Verify
        const verify = await ReadingTest.findOne({ testNumber: readingTest02.testNumber });
        if (verify) {
            const sections = (verify as any).sections || [];
            console.log("\n\ud83d\udcca Verification:");
            console.log(`   Title: ${(verify as any).title}`);
            console.log(`   Test Number: ${(verify as any).testNumber}`);
            console.log(`   Sections: ${sections.length}`);
            sections.forEach((s: any, i: number) => {
                const answers = (s.questions || []).map((q: any) => `${q.questionNumber}:${q.correctAnswer}`).join(", ");
                console.log(`   Section ${i + 1}: ${s.title} | Groups: ${s.questionGroups?.length || 0} | Qs: ${s.questions?.length || 0}`);
                console.log(`     Answers: ${answers}`);
            });
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("\u274c Error:", error);
        process.exit(1);
    }
}

seedReadingTest02();

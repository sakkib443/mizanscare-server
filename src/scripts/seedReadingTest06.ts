import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_TEST_06",
    testNumber: 6,
    title: "Reading Mock Test 06 - Academic",
    description: "IELTS Academic Reading Test featuring passages on pollination, Gold Dusters",
    source: "IELTS Practice Test",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: Gold Dusters (Q1-13)
        // Q1-7: Matching Headings, Q8-11: Sentence Completion, Q12-13: Choose Two
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "Gold Dusters",
            passage: `A.\nRow upon row, tomato plants stand in formation inside a greenhouse. To reproduce, most flowering plants depend on a third party to transfer pollen between their male and female parts. Some require extra encouragement to give up that golden dust. The tomato flower, for example, needs a violent shake, a vibration roughly equivalent to 30 times the pull of Earth\u2019s gravity, explains Arizona entomologist Stephen Buchmann. Growers have tried numerous ways to rattle pollen from tomato blossoms. They have used shaking tables, air blowers and blasts of sound. But natural means seem to work better.\n\nB.\nIt is no surprise that nature\u2019s design works best. What\u2019s astonishing is the array of workers that do it: more than 200,000 individual animal species, by varying strategies, help the world\u2019s 240,000 species of flowering plants make more flowers. Flies and beetles are the original pollinators, going back to when flowering plants first appeared 130 million years ago. As for bees, scientists have identified some 20,000 distinct species so far. Hummingbirds, butterflies, moths, wasps and ants are also up to the job. Even non-flying mammals do their part: sugar-loving opossums, some rainforest monkeys, and lemurs in Madagascar, all with nimble hands that tear open flower stalks and furry coats to which pollen sticks. Most surprising, some lizards, such as geckos, lap up nectar and pollen and then transport the stuff on their faces and feet as they forage onward.\n\nC.\nAll that messy diversity, unfortunately, is not well suited to the monocrops and mega-yields of modern commercial farmers. Before farms got so big, says conservation biologist Claire Kremen of the University of California, Berkeley, \u2018we didn\u2019t have to manage pollinators. They were all around because of the diverse landscapes. Now you need to bring in an army to get pollination done.\u2019 The European honeybee was first imported to the US some 400 years ago. Now at least a hundred commercial crops rely almost entirely on managed honeybees, which beekeepers raise and rent out to tend to big farms. And although other species of bees are five to ten times more efficient, on a per-bee basis, at pollinating certain fruits, honeybees have bigger colonies, cover longer distances, and tolerate management and movement better than most insects. They\u2019re not picky \u2013 they\u2019ll spend their time on almost any crop. It\u2019s tricky to calculate what their work is truly worth; some economists put it at more than $200 billion globally a year.\n\nD.\nIndustrial-scale farming, however, may be wearing down the system. Honeybees have suffered diseases and parasite infestations for as long as they\u2019ve been managed, but in 2006 came an extreme blow. Around the world, bees began to disappear over the winter in massive numbers. Beekeepers would lift the lid of a hive and be amazed to find only the queen and a few stragglers, the worker bees gone. In the US, a third to half of all hives crashed; some beekeepers reported colony losses near 90 percent. The mysterious culprit was named colony collapse disorder (CCD) and it remains an annual menace \u2013 and an enigma.\n\nE.\nWhen it first hit, many people, from agronomists to the public, assumed that our slathering of chemicals on agricultural fields was to blame for the mystery. Indeed, says Jeff Pettis of the USDA Bee Research Laboratory, \u2018we do find more disease in bees that have been exposed to pesticides, even at low levels.\u2019 But it is likely that CCD involves multiple stressors. Poor nutrition and chemical exposure, for instance, might wear down a bee\u2019s immunities before a virus finishes the insect off. It\u2019s hard to tease apart factors and outcomes, Pettis says. New studies reveal that fungicides \u2013 not previously thought toxic to bees \u2013 can interfere with microbes that break down pollen in the insects\u2019 guts, affecting nutrient absorption and thus long-term health and longevity. Some findings pointed to viral and fungal pathogens working together. \u2018I only wish we had a single agent causing all the declines,\u2019 Pettis says, \u2018that would make our work much easier!\u2019\n\nF.\nHowever, habitat loss and alteration, he says, are even more of a menace to pollinators than pathogens. Claire Kremen encourages farmers to cultivate the flora surrounding farmland to help solve habitat problems. \u2018You can\u2019t move the farm,\u2019 she says, \u2018but you can diversify what grows in its vicinity: along roads, even in tractor yards.\u2019 Planting hedgerows and patches of native flowers that bloom at different times and seeding fields with multiple plant species rather than monocrops \u2018not only is better for native pollinators, but it\u2019s just better agriculture,\u2019 she says. Pesticide-free wildflower havens, adds Buchmann, would also bolster populations of useful insects. Fortunately, too, \u2018there are far more generalist plants than specialist plants, so there\u2019s a lot of redundancy in pollination,\u2019 Buchmann says. \u2018Even if one pollinator drops out, there are often pretty good surrogates left to do the job.\u2019 The key to keeping our gardens growing strong, he says, is letting that diversity thrive.\n\nG.\nTake away that variety, and we\u2019ll lose more than honey. \u2018We wouldn\u2019t starve,\u2019 says Kremen. \u2018But what we eat, and even what we wear \u2013 pollinators, after all, give us some of our cotton and flax \u2013 would be limited to crops whose pollen travels by other means.\u2019 \u2018In a sense,\u2019 she says, \u2018our lives would be dictated by the wind.\u2019 It\u2019s vital that we give pollinators more of what they need and less of what they don\u2019t, and ease the burden on managed bees by letting native animals do their part, say scientists.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 1-13",
            questionGroups: [
                // Questions 1-7: Matching Headings
                {
                    groupType: "matching-headings",
                    startQuestion: 1,
                    endQuestion: 7,
                    mainInstruction: "The reading passage has seven sections, A-G. Choose the correct heading for each section from the list of headings below.",
                    subInstruction: "",
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    headingsList: [
                        { numeral: "i", text: "Looking for clues" },
                        { numeral: "ii", text: "Blaming the beekeepers" },
                        { numeral: "iii", text: "Solutions to a more troublesome issue" },
                        { numeral: "iv", text: "Discovering a new bee species" },
                        { numeral: "v", text: "An impossible task for any human" },
                        { numeral: "vi", text: "The preferred pollinator" },
                        { numeral: "vii", text: "Plant features designed to suit the pollinator" },
                        { numeral: "viii", text: "Some obvious and less obvious pollen carriers" },
                        { numeral: "ix", text: "The undesirable alternative" },
                        { numeral: "x", text: "An unexpected setback" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Section A", correctAnswer: "v" },
                        { questionNumber: 2, text: "Section B", correctAnswer: "viii" },
                        { questionNumber: 3, text: "Section C", correctAnswer: "vi" },
                        { questionNumber: 4, text: "Section D", correctAnswer: "x" },
                        { questionNumber: 5, text: "Section E", correctAnswer: "i" },
                        { questionNumber: 6, text: "Section F", correctAnswer: "iii" },
                        { questionNumber: 7, text: "Section G", correctAnswer: "ix" },
                    ],
                },
                // Questions 8-11: Sentence Completion
                {
                    groupType: "sentence-completion",
                    startQuestion: 8,
                    endQuestion: 11,
                    mainInstruction: "Complete the sentences below.",
                    subInstruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer.",
                    statements: [
                        { questionNumber: 8, text: "Both _________ were the first creatures to pollinate the world\u2019s plants.", correctAnswer: "flies and beetles" },
                        { questionNumber: 9, text: "Monkeys transport pollen on their _________.", correctAnswer: "furry coats" },
                        { questionNumber: 10, text: "Honeybees are favoured pollinators among bee species partly because they travel _________.", correctAnswer: "longer distances" },
                        { questionNumber: 11, text: "A feature of CCD is often the loss of all the _________.", correctAnswer: "worker bees" },
                    ],
                },
                // Questions 12-13: Choose Two Letters
                {
                    groupType: "choose-two-letters",
                    startQuestion: 12,
                    endQuestion: 13,
                    mainInstruction: "Which TWO methods of combating the problems caused by CCD and habitat loss are mentioned in the article?",
                    subInstruction: "Choose TWO letters, A-E.",
                    questionSets: [
                        {
                            questionNumbers: [12, 13],
                            questionText: "Which TWO methods of combating the problems caused by CCD and habitat loss are mentioned in the article?",
                            options: [
                                { letter: "A", text: "using more imported pest controllers" },
                                { letter: "B", text: "removing microbes from bees\u2019 stomachs" },
                                { letter: "C", text: "cultivating a wide range of flowering plants" },
                                { letter: "D", text: "increasing the size of many farms" },
                                { letter: "E", text: "placing less reliance on honeybees" },
                            ],
                            correctAnswers: ["C", "E"],
                        },
                    ],
                },
            ],
            questions: [
                // Q1-7: Matching Headings
                { questionNumber: 1, questionType: "matching-headings", questionText: "Section A", correctAnswer: "v", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Section B", correctAnswer: "viii", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Section C", correctAnswer: "vi", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Section D", correctAnswer: "x", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Section E", correctAnswer: "i", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Section F", correctAnswer: "iii", marks: 1 },
                { questionNumber: 7, questionType: "matching-headings", questionText: "Section G", correctAnswer: "ix", marks: 1 },
                // Q8-11: Sentence Completion
                { questionNumber: 8, questionType: "sentence-completion", questionText: "Both ___ were the first creatures to pollinate the world\u2019s plants.", correctAnswer: "flies and beetles", marks: 1 },
                { questionNumber: 9, questionType: "sentence-completion", questionText: "Monkeys transport pollen on their ___.", correctAnswer: "furry coats", acceptableAnswers: ["coats"], marks: 1 },
                { questionNumber: 10, questionType: "sentence-completion", questionText: "Honeybees are favoured pollinators among bee species partly because they travel ___.", correctAnswer: "longer distances", acceptableAnswers: ["distances"], marks: 1 },
                { questionNumber: 11, questionType: "sentence-completion", questionText: "A feature of CCD is often the loss of all the ___.", correctAnswer: "worker bees", marks: 1 },
                // Q12-13: Choose Two Letters
                { questionNumber: 12, questionType: "choose-two-letters", questionText: "Which TWO methods of combating CCD and habitat loss are mentioned?", correctAnswer: ["C", "E"], marks: 1 },
                { questionNumber: 13, questionType: "choose-two-letters", questionText: "Which TWO methods of combating CCD and habitat loss are mentioned?", correctAnswer: ["C", "E"], marks: 1 },
            ],
        },
        // ═══════════════════════════════════════════
        // SECTION 2: Getting the Picture from DNA (Q14-26)
        // Q14-16: MCQ, Q17-20: Flow Chart, Q21-26: Short Answer
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "Getting the Picture from DNA",
            passage: `A.\nAt present if police find DNA which could be that of the criminal at the scene of a crime (for example in blood or hair), standard forensic techniques can help in two ways. If there is a suspect in custody, the police can see if their DNA matches the crime stain, as it is called. Or in the absence of a suspect, they can see if it matches the DNA of any known criminal held in their archives.\n\nB.\nBoth techniques have proved their worth in criminal investigations. But what if there is no suspect and no match in the archive? Ever since DNA testing was introduced, forensic scientists have wondered how much a DNA sample on its own could tell them about what a criminal might look like.\n\nC.\nScientists have already had some success with predicting hair colour from DNA samples. For example, researchers at Britain\u2019s Forensic Science Service (FSS) have developed a DNA test which will tell with 98% accuracy whether or not someone has red hair. However, the red-hair test is of limited use in Britain, where only 6% of the population are red-headed. What about blonde, brown and black-haired criminals? Hair colour is usually determined by the cumulative effect of several genes, so unfortunately there is no such thing as a single gene for blonde hair that could be turned into a simple test, for example. It is the same with eye colour.\n\nD.\nBut biotechnology firm DNAPrint Genomics of Florida, USA, is having a crack at both problems. As a starting point, research was carried out using mice to discover the genes that controlled eye colour. Similar sequences in human DNA were investigated, and 10 possible genes were found. Next, the DNAPrint researchers took DNA samples from 500 volunteers and recorded their eye colours. They then applied a technique called SNP mapping to see if they could discover any correlations between the two. (SNP stands for \u2018single nucleotide polymorphism\u2019 \u2013 a single \u2018letter\u2019 change in the genetic code. These variations account for most of the genetic differences between individuals.) The researchers sequenced the ten possible genes from each volunteer, then sifted through the sequences looking for SNPs. They found 50 in total. Then they set computers to work out how the SNPs correlated with eye colour. Of the ten genes, they found that only four really matter. By looking at these, they can classify someone as having dark eyes (black and brown), light coloured eyes (blue and grey) or hazel eyes (greenish brown) \u2013 with 97% certainty.\n\nE.\nDNAPrint is now applying exactly the same technique to hair colour, identifying possible genes and looking for SNPs. Representatives say they have made some headway and can classify people into one of three groups \u2013 blonde, brown or black haired \u2013 with some accuracy, from their DNA alone.\n\nF.\nBack in Britain, the Forensic Science Service has also been pursuing the genetic basis of facial features. A few years ago it helped fund a major project carried out by scientists at University College London (UCL). Over several months, an exhibit at a London Museum invited visitors to leave DNA samples and have their faces scanned using 3D surface mapping. About 600 people volunteered. The UCL researchers tried to break down this data on overall facial shape into distinct features such as nose curvature or chin clefts, and correlate them to DNA sequences. But they made little progress. Just as with eye colour there is no one gene for a big nose, so the enormous complexity of the task defeated the researchers. When the lead scientist retired, the project was wound down without drawing any firm conclusions.\n\nG.\nBut the idea of finding genes for facial features is not dead. Many of the genes involved are common to most mammals. So, a gene for large jaw in mice, for example, might very well be found in humans too. One promising project has found that mice show significant variation in jaw shape and size, and has begun to unravel the genetics behind the variation. Project leader Chris Klingenberg of the University of Konstanz in Germany cautions that, as with humans, the genetics controlling jaw shape in mice is horribly complicated, but the project is making some progress. In one study of 535 mice, it has identified genes for jaw shape, jaw size and jaw symmetry and found two basic patterns resulting from the contribution of these genes.\n\nH.\nThe UK-based human rights group known as \u2018Liberty\u2019 has concerns, saying that existing tests are not yet sufficiently conclusive to be used as a basis for arresting suspects. Certainly, genes never tell the whole story with physical characteristics \u2013 environment plays a key role too. Kevin Sullivan, from the Forensic Science Service, points out that when it comes to someone\u2019s facial characteristics, \u2018playing rugby might have more of an effect on your ear and nose shape than your genes.\u2019 But he is optimistic about the future of the research. \u2018Law-abiding citizens do not have anything to worry about,\u2019 he says. \u2018But criminals do.\u2019`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 14-26",
            questionGroups: [
                // Questions 14-16: Multiple Choice Full
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 14,
                    endQuestion: 16,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "",
                    mcQuestions: [
                        {
                            questionNumber: 14,
                            questionText: "What is meant by a \u2018crime stain\u2019?",
                            options: [
                                { letter: "A", text: "traces of blood left at the scene of a crime" },
                                { letter: "B", text: "DNA belonging to known criminals" },
                                { letter: "C", text: "samples of blood or hair in criminal archives" },
                                { letter: "D", text: "DNA samples left at the scene of a crime" },
                            ],
                            correctAnswer: "D",
                        },
                        {
                            questionNumber: 15,
                            questionText: "Forensic scientists are interested in finding out",
                            options: [
                                { letter: "A", text: "if the genes responsible for criminal tendencies can be identified" },
                                { letter: "B", text: "how far personal appearance can be predicted from DNA" },
                                { letter: "C", text: "if hair colour could be linked to criminal behaviour" },
                                { letter: "D", text: "whether or not DNA can be used to identify a suspected criminal" },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 16,
                            questionText: "What problems do scientists face in developing DNA tests for hair and eye colour?",
                            options: [
                                { letter: "A", text: "the fact that these characteristics are not generally determined by one gene" },
                                { letter: "B", text: "the variation in the test procedures required for these characteristics" },
                                { letter: "C", text: "the fact that these characteristics are not necessarily related" },
                                { letter: "D", text: "the variation in distribution of these characteristics from one country to another" },
                            ],
                            correctAnswer: "A",
                        },
                    ],
                },
                // Questions 17-20: Sentence Completion (Flow Chart)
                {
                    groupType: "sentence-completion",
                    startQuestion: 17,
                    endQuestion: 20,
                    mainInstruction: "Complete the flow chart below.",
                    subInstruction: "Choose NO MORE THAN THREE WORDS and/or A NUMBER from the text for each answer.",
                    statements: [
                        { questionNumber: 17, text: "Identification of genes determining eye colour in _________.", correctAnswer: "mice" },
                        { questionNumber: 18, text: "SNP mapping of these ten genes to find _________ between eye colour and DNA.", correctAnswer: "correlations" },
                        { questionNumber: 19, text: "Identification of _________ SNPs.", correctAnswer: "50" },
                        { questionNumber: 20, text: "Identification of the _________ genes that determine eye colour.", correctAnswer: "four" },
                    ],
                },
                // Questions 21-26: Short Answer
                {
                    groupType: "short-answer",
                    startQuestion: 21,
                    endQuestion: 26,
                    mainInstruction: "Answer the questions below.",
                    subInstruction: "Choose NO MORE THAN THREE WORDS and/or A NUMBER for each answer.",
                    questions: [
                        { questionNumber: 21, questionText: "Which American company is doing research on the genetic basis of hair and eye colour?", correctAnswer: "DNAPrint Genomics" },
                        { questionNumber: 22, questionText: "How many groups of eye colour can now be identified through SNP mapping?", correctAnswer: "three" },
                        { questionNumber: 23, questionText: "Which British institution unsuccessfully researched data from humans on the genetic basis of facial features?", correctAnswer: "University College London" },
                        { questionNumber: 24, questionText: "In which country is research being done on mice to find out about genes for facial features?", correctAnswer: "Germany" },
                        { questionNumber: 25, questionText: "Which association is concerned about the possible applications of the research described in this text?", correctAnswer: "Liberty" },
                        { questionNumber: 26, questionText: "Which environmental factor could be important in determining your facial characteristics according to Kevin Sullivan?", correctAnswer: "playing rugby" },
                    ],
                },
            ],
            questions: [
                // Q14-16: MCQ
                { questionNumber: 14, questionType: "multiple-choice-full", questionText: "What is meant by a \u2018crime stain\u2019?", correctAnswer: "D", marks: 1 },
                { questionNumber: 15, questionType: "multiple-choice-full", questionText: "Forensic scientists are interested in finding out", correctAnswer: "B", marks: 1 },
                { questionNumber: 16, questionType: "multiple-choice-full", questionText: "What problems do scientists face in developing DNA tests for hair and eye colour?", correctAnswer: "A", marks: 1 },
                // Q17-20: Flow Chart Completion
                { questionNumber: 17, questionType: "sentence-completion", questionText: "Identification of genes determining eye colour in ___.", correctAnswer: "mice", marks: 1 },
                { questionNumber: 18, questionType: "sentence-completion", questionText: "SNP mapping to find ___ between eye colour and DNA.", correctAnswer: "correlations", acceptableAnswers: ["correlation"], marks: 1 },
                { questionNumber: 19, questionType: "sentence-completion", questionText: "Identification of ___ SNPs.", correctAnswer: "50", marks: 1 },
                { questionNumber: 20, questionType: "sentence-completion", questionText: "Identification of the ___ genes that determine eye colour.", correctAnswer: "four", acceptableAnswers: ["4"], marks: 1 },
                // Q21-26: Short Answer
                { questionNumber: 21, questionType: "short-answer", questionText: "Which American company is doing research on the genetic basis of hair and eye colour?", correctAnswer: "DNAPrint Genomics", marks: 1 },
                { questionNumber: 22, questionType: "short-answer", questionText: "How many groups of eye colour can now be identified through SNP mapping?", correctAnswer: "three", acceptableAnswers: ["3"], marks: 1 },
                { questionNumber: 23, questionType: "short-answer", questionText: "Which British institution unsuccessfully researched data from humans on the genetic basis of facial features?", correctAnswer: "University College London", marks: 1 },
                { questionNumber: 24, questionType: "short-answer", questionText: "In which country is research being done on mice to find out about genes for facial features?", correctAnswer: "Germany", marks: 1 },
                { questionNumber: 25, questionType: "short-answer", questionText: "Which association is concerned about the possible applications of the research?", correctAnswer: "Liberty", marks: 1 },
                { questionNumber: 26, questionType: "short-answer", questionText: "Which environmental factor could be important in determining your facial characteristics?", correctAnswer: "playing rugby", marks: 1 },
            ],
        },
        // ═══════════════════════════════════════════
        // ═══════════════════════════════════════════
        // SECTION 3: The Earth and Space Foundation (Q27-40)
        // Q27-31: YNNG, Q32-35: MCQ, Q36-40: Summary with Options
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "The Earth and Space Foundation",
            passage: `The community that focuses its efforts on the exploration of space has largely been different from the community focused on the study and protection of the Earth\u2019s environment, despite the fact that both fields of interest involve what might be referred to as \u201cscientific exploration\u201d. The reason for this dichotomous existence is chiefly historical. The exploration of the Earth has been occurring over many centuries, and the institutions created to do it are often very different from those founded in the second part of the 20th century to explore space. This separation is also caused by the fact that space exploration has attracted experts from mainly non-biological disciplines \u2013 primarily engineers and physicists \u2013 but the study of Earth and its environment is a domain heavily populated by biologists.\n\nThe separation between the two communities is often reflected in attitudes. In the environmental community, it is not uncommon for space exploration to be regarded as a waste of money, distracting governments from solving major environmental problems here at home. In the space exploration community, it is not uncommon for environmentalists to be regarded as introspective people who divert attention from the more expansive visions of the exploration of space \u2013 the \u2018new frontier\u2019. These perceptions can also be negative in consequence because the full potential of both communities can be realised better when they work together to solve problems. For example, those involved in space exploration can provide the satellites to monitor the Earth\u2019s fragile environments, and environmentalists can provide information on the survival of life in extreme environments.\n\nIn the sense that Earth and space exploration both stem from the same human drive to understand our environment and our place within it, there is no reason for the split to exist. A more accurate view of Earth and space exploration is to see them as a continuum of exploration with many interconnected and mutually beneficial links. The Earth and Space Foundation, a registered charity, was established for the purposes of fostering such links through field research and by direct practical action.\n\nProjects that have been supported by the Foundation include environmental projects using technologies resulting from space exploration: satellite communications, GPS, remote sensing, advanced materials and power sources. For example, in places where people are faced with destruction of the forests on which their livelihood depends, rather than rejecting economic progress and trying to save the forests on their intrinsic merit, another approach is to enhance the value of the forests \u2013 although these schemes must be carefully assessed to be successful. In the past, the Foundation provided a grant to a group of expeditions that used remote sensing to plan eco-tourism routes in the forests of Guatemala, thus providing capital to the local communities through the tourist trade. This novel approach is now making the protection of the forests a sensible economic decision.\n\nThe Foundation funds expeditions making astronomical observations from remote, difficult-to-access Earth locations, archaeological field projects studying the development of early civilisations that made significant contributions to astronomy and space sciences, and field expeditions studying the way in which views of the astronomical environment shaped the nature of past civilisations. A part of Syria \u2013 \u2018the Fertile Crescent\u2019 \u2013 was the birthplace of astronomy, accountancy, animal domestication and many other fundamental developments of human civilisation. The Foundation helped fund a large archaeology project by the Society for Syrian Archaeology at the University of California, Los Angeles, in collaboration with the Syrian government that used GPS and satellite imagery to locate mounds, or \u2018tels\u2019, containing artefacts and remnants of early civilisations. These collections are being used to build a better picture of the nature of the civilisations that gave birth to astronomy.\n\nField research also applies the Earth\u2019s environmental and biological resources to the human exploration and settlement of space. This may include the use of remote environments on Earth, as well as physiological and psychological studies in harsh environments. In one research project, the Foundation provided a grant to an international caving expedition to study the psychology of explorers subjected to long-term isolation in caves in Mexico. The psychometric tests on the cavers were used to enhance US astronaut selection criteria by the NASA Johnson Space Center.\n\nSpace-like environments on Earth help us understand how to operate in the space environment or help us characterise extraterrestrial environments for future scientific research. In the Arctic, a 24-kilometre-wide impact crater formed by an asteroid or comet 23 million years ago has become home to a Mars-analogue programme. The Foundation helped fund the NASA Haughton-Mars Project to use this crater to test communications and exploration technologies in preparation for the human exploration of Mars. The crater, which sits in high Arctic permafrost, provides an excellent replica of the physical processes occurring on Mars, a permafrosted, impact-altered planet. Geologists and biologists can work at the site to help understand how impact craters shape the geological characteristics and possibly biological potential of Mars.\n\nIn addition to its fieldwork and scientific activities, the Foundation has award programmes. These include a series of awards for the future human exploration of Mars, a location with a diverse set of exploration challenges. The awards will honour a number of \u2018firsts\u2019 on Mars that include landing on the surface, undertaking an overland expedition to the Martian South Pole, undertaking an overland expedition to the Martian North Pole, climbing Olympus Mons, the highest mountain in the solar system, and descending to the bottom of Valles Marineris, the deepest canyon on Mars. The Foundation will offer awards for expeditions further out in the solar system once these Mars awards have been claimed. Together, they demonstrate that the programme really has no boundary in what it could eventually support, and they provide longevity for the objectives of the Foundation.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 27-40",
            questionGroups: [
                // Questions 27-31: Yes/No/Not Given
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 27,
                    endQuestion: 31,
                    mainInstruction: "Do the following statements agree with the views of the writer in the reading passage?",
                    subInstruction: "Write YES, NO or NOT GIVEN.",
                    statements: [
                        { questionNumber: 27, text: "Activities related to environmental protection and space exploration have a common theme.", correctAnswer: "YES" },
                        { questionNumber: 28, text: "It is unclear why space exploration evolved in a different way from environmental studies on Earth.", correctAnswer: "NO" },
                        { questionNumber: 29, text: "Governments tend to allocate more money to environmental projects than space exploration.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 30, text: "Unfortunately, the environmental and space exploration communities have little to offer each other in terms of resources.", correctAnswer: "NO" },
                        { questionNumber: 31, text: "The Earth and Space Foundation was set up later than it was originally intended.", correctAnswer: "NOT GIVEN" },
                    ],
                },
                // Questions 32-35: Multiple Choice Full
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 32,
                    endQuestion: 35,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "",
                    mcQuestions: [
                        {
                            questionNumber: 32,
                            questionText: "What was the significance of the \u2018novel approach\u2019 adopted in the Guatemala project?",
                            options: [
                                { letter: "A", text: "It minimised the need to protect the forests." },
                                { letter: "B", text: "It reduced the impact of tourists on the forests." },
                                { letter: "C", text: "It showed that preserving the forests can be profitable." },
                                { letter: "D", text: "It gave the Foundation greater control over the forests." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 33,
                            questionText: "GPS and satellite imagery were used in the Syrian project to",
                            options: [
                                { letter: "A", text: "help archaeologists find ancient items." },
                                { letter: "B", text: "explore land that is hard to reach." },
                                { letter: "C", text: "reduce the impact of archaeological activity." },
                                { letter: "D", text: "evaluate some early astronomical theories." },
                            ],
                            correctAnswer: "A",
                        },
                        {
                            questionNumber: 34,
                            questionText: "One of the purposes of the Foundation\u2019s awards is to",
                            options: [
                                { letter: "A", text: "attract non-scientists to its work." },
                                { letter: "B", text: "establish priorities for Mars exploration." },
                                { letter: "C", text: "offer financial incentives for space exploration." },
                                { letter: "D", text: "establish the long-term continuity of its activities." },
                            ],
                            correctAnswer: "D",
                        },
                        {
                            questionNumber: 35,
                            questionText: "What is the writer\u2019s purpose in the passage?",
                            options: [
                                { letter: "A", text: "to persuade people to support the Foundation" },
                                { letter: "B", text: "to explain the nature of the Foundation\u2019s work" },
                                { letter: "C", text: "to show how views on the Foundation have changed" },
                                { letter: "D", text: "to reject earlier criticisms of the Foundation\u2019s work" },
                            ],
                            correctAnswer: "B",
                        },
                    ],
                },
                // Questions 36-40: Summary with Options
                {
                    groupType: "summary-with-options",
                    startQuestion: 36,
                    endQuestion: 40,
                    mainInstruction: "Complete the summary using the words, A-I, below.",
                    subInstruction: "",
                    phraseList: [
                        { letter: "A", text: "comparable" },
                        { letter: "B", text: "extreme" },
                        { letter: "C", text: "connected" },
                        { letter: "D", text: "ideal" },
                        { letter: "E", text: "unexpected" },
                        { letter: "F", text: "beneficial" },
                        { letter: "G", text: "scientific" },
                        { letter: "H", text: "extended" },
                        { letter: "I", text: "individual" },
                    ],
                    statements: [
                        { questionNumber: 36, text: "Some studies have looked at how humans function in _________ situations.", correctAnswer: "B" },
                        { questionNumber: 37, text: "In one project, it was decided to review cave explorers in Mexico who tolerate _________ periods on their own.", correctAnswer: "H" },
                        { questionNumber: 38, text: "It is also possible to prepare for space exploration by studying environments on Earth that are _________ to those on Mars.", correctAnswer: "A" },
                        { questionNumber: 39, text: "A huge crater in the Arctic is the _________ place to test the technologies needed to explore Mars.", correctAnswer: "D" },
                        { questionNumber: 40, text: "and gather other relevant _________ information.", correctAnswer: "G" },
                    ],
                },
            ],
            questions: [
                // Q27-31: Yes/No/Not Given
                { questionNumber: 27, questionType: "yes-no-not-given", questionText: "Activities related to environmental protection and space exploration have a common theme.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 28, questionType: "yes-no-not-given", questionText: "It is unclear why space exploration evolved in a different way from environmental studies on Earth.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 29, questionType: "yes-no-not-given", questionText: "Governments tend to allocate more money to environmental projects than space exploration.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 30, questionType: "yes-no-not-given", questionText: "Unfortunately, the environmental and space exploration communities have little to offer each other in terms of resources.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 31, questionType: "yes-no-not-given", questionText: "The Earth and Space Foundation was set up later than it was originally intended.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                // Q32-35: MCQ
                { questionNumber: 32, questionType: "multiple-choice-full", questionText: "What was the significance of the \u2018novel approach\u2019 adopted in the Guatemala project?", correctAnswer: "C", marks: 1 },
                { questionNumber: 33, questionType: "multiple-choice-full", questionText: "GPS and satellite imagery were used in the Syrian project to", correctAnswer: "A", marks: 1 },
                { questionNumber: 34, questionType: "multiple-choice-full", questionText: "One of the purposes of the Foundation\u2019s awards is to", correctAnswer: "D", marks: 1 },
                { questionNumber: 35, questionType: "multiple-choice-full", questionText: "What is the writer\u2019s purpose in the passage?", correctAnswer: "B", marks: 1 },
                // Q36-40: Summary with Options
                { questionNumber: 36, questionType: "summary-with-options", questionText: "Some studies have looked at how humans function in ___ situations.", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "B", marks: 1 },
                { questionNumber: 37, questionType: "summary-with-options", questionText: "cave explorers who tolerate ___ periods on their own.", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "H", marks: 1 },
                { questionNumber: 38, questionType: "summary-with-options", questionText: "environments on Earth that are ___ to those on Mars.", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "A", marks: 1 },
                { questionNumber: 39, questionType: "summary-with-options", questionText: "A huge crater is the ___ place to test technologies.", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "D", marks: 1 },
                { questionNumber: 40, questionType: "summary-with-options", questionText: "and gather other relevant ___ information.", options: ["A","B","C","D","E","F","G","H","I"], correctAnswer: "G", marks: 1 },
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
            console.log("\u2705 Reading Test 06 updated successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) { console.log("\u274C No admin user found"); process.exit(1); }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log("\u2705 Reading Test 06 created successfully!");
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

import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_ACADEMIC_014",
    testNumber: 14,
    title: "Academic Reading Mock Test 14",
    description: "IELTS Academic Reading Test featuring passages on The Research for Intelligence, The Sweet Scent of Success, and Who Wrote Shakespeare?",
    source: "Academic Reading Practice",
    testType: "academic" as const,
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: The Research for Intelligence (Q1-13)
        // Q1-6: Matching Headings (with Example: Paragraph A = ix)
        // Q7-10: Matching Features (people A-F)
        // Q11-13: Summary Completion
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "The Research for Intelligence",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: `A In Robert Plomin\u2019s line of work, patience is essential. Plomin, a behavioral geneticist at the Institute of Psychiatry in London, wants to understand the nature of intelligence. As part of his research, he has been watching thousands of children grow up. Plomin asks the children questions such as \u201cWhat do water and milk have in common?\u201d and \u201cIn what direction does the sun set?\u201d At first he and his colleagues quizzed the children in person or over the telephone. Today many of those children are in their early teens, and they take their tests on the Internet. In one sense, the research has been a rousing success. The children who take the tests are all twins, and throughout the study identical twins have tended to get scores closer to each other than those of non-identical twins, who in turn have closer scores than unrelated children. These results\u2014 along with similar ones from other studies\u2014 make clear to the scientists that genes have an important influence on how children score on intelligence tests.\n\nB But Plomin wants to know more. He wants to find the specific genes that are doing the influencing. And now he has a tool for pinpointing genes that he could not have even dreamed of when he began quizzing children. Plomin and his colleagues have been scanning the genes of his subjects with a device called a micro array, a small chip that can recognize half a million distinctive snippets of DNA. The combination of this powerful tool with a huge number of children to study meant that he could detect genes that had only a tiny effect on the variation in scores.\n\nC Still, when Plomin and his co-workers unveiled the results of their micro-array study\u2014the biggest dragnet for intelligence-linked genes ever undertaken\u2014they were underwhelming. The researchers found only six genetic markers that showed any sign of having an influence on the test scores. When they ran stringent statistical tests to see if the results were flukes, only one gene passed. It accounted for 0.4 percent of variation in the scores. And to cap it all off, no one knows what the gene does in the body. \u201cIt\u2019s a real drag in some ways,\u201d Plomin says.\n\nD Plomin\u2019s experience is a typical one for scientists who study intelligence. Along with using micro-arrays, they are employing brain scans and other sophisticated technologies to document some of the intricate dance steps that genes and environment take together in the development of intelligence. They are beginning to see how differences in intelligence are reflected in the structure and function of the brain. Some scientists have even begun to build a new vision of intelligence as a reflection of the ways in which information flows through the brain. But for all these advances, intelligence remains a profound mystery. \u201cIt\u2019s amazing the extent to which we know very little,\u201d says Wendy Johnson, a psychologist at the University of Minnesota.\n\nE In some ways, intelligence is very simple. \u201cIt\u2019s something that everybody observes in others,\u201d says Eric Turkheimer of the University of Virginia. Everybody knows that some people are smarter than others, whatever it means technically. It\u2019s something you sense in people when you talk to them. Yet that kind of gut instinct does not translate easily into a scientific definition. In 1996 the American Psychological Association issued a report on intelligence, which stated only that \u201cindividuals differ from one another in their ability to understand complex ideas, to adapt effectively to the environment, to learn from experience, to engage in various forms of reasoning, to overcome obstacles by taking thought.\u201d\n\nF To measure these differences, psychologists in the early 1900s invented tests of various kinds of thought, such as math, spatial reasoning and verbal skills. To compare scores on one type of test to those on another, some psychologists developed standard scales of intelligence. The most familiar of them is the intelligence quotient, which is produced by setting the average score at 100. IQ scores are not arbitrary numbers, however. Psychologists can use them to make strong predictions about other features of people\u2019s lives. It is possible to make reasonably good predictions, based on IQ scores in childhood, about how well people will fare in school and in the workplace. People with high IQs even tend to live longer than average. \u201cIf you have an IQ score, does that tell you everything about a person\u2019s cognitive strengths and weaknesses? No,\u201d says Richard J. Haier of the University of California, Irvine. But even a simple number has the potential to say a lot about a person. \u201cWhen you go see your doctor, what\u2019s the first thing that happens? Somebody takes your blood pressure and temperature. So you get two numbers. No one would say blood pressure and temperature summarize everything about your health, but they are key numbers.\u201d\n\nG Then what underlies an intelligence score? \u201cIt\u2019s certainly tapping something,\u201d says Philip Shaw, a psychiatrist at the National Institute of Mental Health (NIMH). The most influential theory of what the score reflects is more than a century old. In 1904 psychologist Charles Spearman observed that people who did well on one kind of test tended to do well on others. The link from one score to another was not very tight, but Spearman saw enough of a connection to declare that it was the result of something he called a g factor, short for general intelligence factor. How general intelligence arose from the brain, Spearman could not say. In recent decades, scientists have searched for an answer by finding patterns in the test scores of large groups of people. Roughly speaking, there are two possible sources for these variations. Environmental influences\u2014 anything from the way children are raised by their parents to the diseases they may suffer as they develop \u2014 are one source. Genes are another. Genes may shape the brain in ways that make individuals better or worse at answering questions on intelligence tests.`,
            questionGroups: [
                // Q1-6: Matching Headings (with Example: Paragraph A = ix)
                {
                    groupType: "matching-headings",
                    startQuestion: 1,
                    endQuestion: 6,
                    mainInstruction: "The reading passage has seven paragraphs, A-G.",
                    subInstruction: "Choose the correct heading for paragraphs B-G from the list below. Write the correct number, i-x, in boxes 1-6 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "Low probability triggers unpersuasive findings" },
                        { numeral: "ii", text: "Understanding of intelligence remains limited" },
                        { numeral: "iii", text: "Difficulty in accurately defining intelligence" },
                        { numeral: "iv", text: "People with high IQ seldom fall sick" },
                        { numeral: "v", text: "An innovative appliance to improve the probe" },
                        { numeral: "vi", text: "The financial cost of a new research" },
                        { numeral: "vii", text: "Why an indicator is imperfect but referable" },
                        { numeral: "viii", text: "Genes mean extra when compared with environment" },
                        { numeral: "ix", text: "A vital indicator for kids\u2019 intelligence performance" },
                        { numeral: "x", text: "Multiple factors involved in intelligence" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"],
                    exampleItems: [
                        { text: "Paragraph A", answer: "ix" },
                    ],
                    matchingItems: [
                        { questionNumber: 1, text: "Paragraph B", correctAnswer: "" },
                        { questionNumber: 2, text: "Paragraph C", correctAnswer: "" },
                        { questionNumber: 3, text: "Paragraph D", correctAnswer: "" },
                        { questionNumber: 4, text: "Paragraph E", correctAnswer: "" },
                        { questionNumber: 5, text: "Paragraph F", correctAnswer: "" },
                        { questionNumber: 6, text: "Paragraph G", correctAnswer: "" },
                    ],
                },
                // Q7-10: Matching Features (people A-F)
                {
                    groupType: "matching-features",
                    startQuestion: 7,
                    endQuestion: 10,
                    mainInstruction: "Use the information in the passage to match the people (listed A-F) with opinions or deeds below.",
                    subInstruction: "Write the appropriate letters A-F in boxes 7-10 on your answer sheet.",
                    featureListTitle: "List of People",
                    featureOptions: [
                        { letter: "A", text: "Plomin" },
                        { letter: "B", text: "Philip Shawn" },
                        { letter: "C", text: "Eric Turkheimer" },
                        { letter: "D", text: "Charles Spearman" },
                        { letter: "E", text: "Richard J. Haier" },
                        { letter: "F", text: "Wendy Johnson" },
                    ],
                    matchingItems: [
                        { questionNumber: 7, text: "A full conclusion can be hardly reached just by the one example in IQ test.", correctAnswer: "" },
                        { questionNumber: 8, text: "It is not easy to exclude the occasionality existed in the research.", correctAnswer: "" },
                        { questionNumber: 9, text: "Humans still have more to explore in terms of the real nature of intelligence.", correctAnswer: "" },
                        { questionNumber: 10, text: "It is quite difficult to find the real origins where the general intelligence comes.", correctAnswer: "" },
                    ],
                },
                // Q11-13: Summary Completion
                {
                    groupType: "summary-completion",
                    startQuestion: 11,
                    endQuestion: 13,
                    mainInstruction: "Complete the following summary of the paragraphs of Reading Passage, using NO MORE THAN THREE WORDS from the Reading Passage for each answer.",
                    subInstruction: "Write your answers in boxes 11-13 on your answer sheet.",
                    mainHeading: "Summary",
                    summarySegments: [
                        { type: "text", content: "Many researchers including Plomin have faced with the typical challenge when " },
                        { type: "blank", questionNumber: 11, correctAnswer: "" },
                        { type: "text", content: " are implemented. They try to use all possible methods to record certain " },
                        { type: "blank", questionNumber: 12, correctAnswer: "" },
                        { type: "text", content: " performed both by genes and environment which contributes to the progress of intelligence. The relationship between intelligence and brain become their targeted area. What\u2019s more, according to some researchers, intelligence is regarded to be " },
                        { type: "blank", questionNumber: 13, correctAnswer: "" },
                        { type: "text", content: " of how messages transmit in the brain." },
                    ],
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 2, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 3, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 4, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 5, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 6, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"], correctAnswer: "", marks: 1 },
                { questionNumber: 7, questionType: "matching-features", questionText: "A full conclusion can be hardly reached just by the one example in IQ test.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 8, questionType: "matching-features", questionText: "It is not easy to exclude the occasionality existed in the research.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 9, questionType: "matching-features", questionText: "Humans still have more to explore in terms of the real nature of intelligence.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 10, questionType: "matching-features", questionText: "It is quite difficult to find the real origins where the general intelligence comes.", options: ["A", "B", "C", "D", "E", "F"], correctAnswer: "", marks: 1 },
                { questionNumber: 11, questionType: "summary-completion", questionText: "typical challenge when ___ are implemented", correctAnswer: "", marks: 1 },
                { questionNumber: 12, questionType: "summary-completion", questionText: "to record certain ___ performed both by genes and environment", correctAnswer: "", marks: 1 },
                { questionNumber: 13, questionType: "summary-completion", questionText: "intelligence is regarded to be ___ of how messages transmit", correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 2: The Sweet Scent of Success (Q14-26)
        // Q14-20: Matching Information (paragraphs A-G)
        // Q21-24: Matching Features (people A-E statements)
        // Q25-26: Multiple Choice
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "The Sweet Scent of Success",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: `A Innovation and entrepreneurship, in the right mix, can bring spectacular results and propel a business ahead of the pack. Across a diverse range of commercial successes, from the Hills Hoist clothes line to the Cochlear ear implant, it is hard to generalize beyond saying the creators tapped into something consumers could not wait to get their hands on. However, most ideas never make it to the market. Some ideas that innovators are spruiking to potential investors include new water-saving shower heads, a keyless locking system, ping-pong balls that keep pollution out of rainwater tanks, making teeth grow from stem cells inserted in the gum, and technology to stop LPG tanks from exploding. Grant Kearney, chief executive of the Innovation Xchange, which connects businesses to innovation networks, says he hears of great business ideas that he knows will never get on the market. \u201cIdeas by themselves are absolutely useless,\u201d he says. \u201cAn idea only becomes innovation when it is connected to the right resources and capabilities\u201d.\n\nB One of Australia\u2019s latest innovation successes stems from a lemon-scented bathroom cleaner called Shower Power, the formula for which was concocted in a factory in Yatala, Queensland. In 1995, Tom Quinn and John Heron bought a struggling cleaning products business, OzKleen, for 250,000. It was selling 100 different kinds of cleaning products, mainly in bulk. The business was in bad shape, the cleaning formulas were ineffective and environmentally harsh, and there were few regular clients. Now Shower Power is claimed to be the top-selling bathroom cleaning product in the country. In the past 12 months, almost four million bottles of OzKleen\u2019s Power products have been sold and the company forecasts 2004 sales of 10 million bottles. The company\u2019s sales in 2003 reached $11 million, with 70% of business being exports. In particular, Shower Power is making big inroads on the British market.\n\nC OzKleen\u2019s turnaround began when Quinn and Heron hired an industrial chemist to revitalize the product line. Market research showed that people were looking for a better cleaner for the bathroom, universally regarded as the hardest room in the home to clean. The company also wanted to make the product formulas more environmentally friendly. One of Tom Quinn\u2019s sons, Peter, aged 24 at the time, began working with the chemist on the formulas, looking at the potential for citrus-based cleaning products. He detested all the chlorine-based cleaning products that dominated the market. \u201cWe didn\u2019t want to use chlorine, simple as that,\u201d he says. \u201cIt offers bad working conditions and there\u2019s no money in it.\u201d Peter looked at citrus ingredients, such as orange peel, to replace the petroleum by-products in cleaners. He is credited with finding the Shower Power formula. \u201cThe head,\u201d he says. The company is the recipe is in a vault somewhere and in my sole owner of the intellectual property.\n\nD To begin with, Shower Power was sold only in commercial quantities but Tom Quinn decided to sell it in 750ml bottles after the constant \u201craves\u201d from customers at their retail store at Beenleigh, near Brisbane. Customers were travelling long distances to buy supplies. Others began writing to OzKleen to say how good Shower Power was. \u201cWe did a dummy label and went to see Woolworths,\u201d Tom Quinn says. The Woolworths buyer took a bottle home and was able to remove a stain from her basin that had been impossible to shift. From that point on, she championed the product and OzKleen had its first supermarket order, for a palette of Shower Power worth $3000. \u201cWe were over the moon,\u201d says OzKleen\u2019s financial controller, Belinda McDonnell.\n\nE Shower Power was released in Australian supermarkets in 1997 and became the top-selling product in its category within six months. It was all hands on deck at the factory, labelling and bottling Shower Power to keep up with demand. OzKleen ditched all other products and rebuilt the business around Shower Power. This stage, recalls McDonnell, was very tough. \u201cIt was hand-to-mouth, cash flow was very difficult,\u201d she says. OzKleen had to pay new-line fees to supermarket chains, which also squeezed margins.\n\nF OzKleen\u2019s next big break came when the daughter of a Coles Myer executive used the product while on holidays in Queensland and convinced her father that Shower Power should be in Coles supermarkets. Despite the product success, Peter Quinn says the company was wary of how long the sales would last and hesitated to spend money on upgrading the manufacturing process. As a result, he remembers long periods of working round the clock to keep up with orders. Small tanks were still being used, so batches were small and bottles were labelled and filled manually. The privately owned OzKleen relied on cash flow to expand. \u201cThe equipment could not keep up with demand,\u201d Peter Quinn says. Eventually a new bottling machine was bought for $50,000 in the hope of streamlining production, but he says: \u201cWe got ripped off.\u201d Since then, he has been developing a new automated bottling machine that can control the amount of foam produced in the liquid, so that bottles can be filled more effectively \u2013 \u201cI love coming up with new ideas.\u201d The machine is being patented.\n\nG Peter Quinn says OzKleen\u2019s approach to research and development is open slather. \u201cIf I need it, I get it. It is about doing something simple that no one else is doing. Most of these things are just sitting in front of people \u2026 it\u2019s just seeing the opportunities.\u201d With a tried and tested product, OzKleen is expanding overseas and developing more Power-brand household products. Tom Quinn, who previously ran a real estate agency, says: \u201cWe are competing with the same market all over the world, the cleaning products are sold everywhere.\u201d Shower Power, known as Bath Power in Britain, was launched four years ago with the help of an export development grant from the Federal Government. \u201cWe wanted to do it straight away because we realised we had the same opportunities worldwide.\u201d OzKleen is already number three in the British market, and the next stop is France. The Power range includes cleaning products for carpets, kitchens and pre-wash stain removal. The Quinn and Heron families are still involved. OzKleen has been approached with offers to buy the company, but Tom Quinn says he is happy with things as they are. \u201cWe\u2019re having too much fun.\u201d`,
            questionGroups: [
                // Q14-20: Matching Information
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 20,
                    mainInstruction: "Reading Passage 2 has seven paragraphs, A-G.",
                    subInstruction: "Which paragraph contains the following information? Write the correct letter A-G, in boxes 14-20 on your answer sheet.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    matchingItems: [
                        { questionNumber: 14, text: "Description of one family member persuading another of selling cleaning products", correctAnswer: "" },
                        { questionNumber: 15, text: "An account of the cooperation of all factory staff to cope with sales increase", correctAnswer: "" },
                        { questionNumber: 16, text: "An account of the creation of the formula of Shower Power", correctAnswer: "" },
                        { questionNumber: 17, text: "An account of buying the original OzKleen company", correctAnswer: "" },
                        { questionNumber: 18, text: "Description of Shower Power\u2019s international expansion", correctAnswer: "" },
                        { questionNumber: 19, text: "The reason for changing the packaging size of Shower Power", correctAnswer: "" },
                        { questionNumber: 20, text: "An example of some innovative ideas", correctAnswer: "" },
                    ],
                },
                // Q21-24: Matching Features (people to statements)
                {
                    groupType: "matching-features",
                    startQuestion: 21,
                    endQuestion: 24,
                    mainInstruction: "Look at the following people and the list of statements below.",
                    subInstruction: "Match each person with the correct statement. Write the correct letter A-E in boxes 21-24 on your answer sheet.",
                    featureListTitle: "List of Statements",
                    featureOptions: [
                        { letter: "A", text: "Described his story of selling his product to a chain store" },
                        { letter: "B", text: "Explained there was a shortage of money when sales suddenly increased" },
                        { letter: "C", text: "Believe innovations need support to succeed" },
                        { letter: "D", text: "Believes new products like Shower Power may incur risks" },
                        { letter: "E", text: "Says business won\u2019t succeed with innovations" },
                    ],
                    matchingItems: [
                        { questionNumber: 21, text: "Grant Kearney", correctAnswer: "" },
                        { questionNumber: 22, text: "Tom Quinn", correctAnswer: "" },
                        { questionNumber: 23, text: "Peter Quinn", correctAnswer: "" },
                        { questionNumber: 24, text: "Belinda McDonnell", correctAnswer: "" },
                    ],
                },
                // Q25-26: Multiple Choice
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 25,
                    endQuestion: 26,
                    mainInstruction: "Choose the correct letter A, B, C or D.",
                    subInstruction: "Write your answers in boxes 25-26 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 25,
                            questionText: "Tom Quinn changed the bottle size to 750ml to make Shower Power",
                            options: [
                                { letter: "A", text: "easier to package." },
                                { letter: "B", text: "appealing to individual customers." },
                                { letter: "C", text: "popular in foreign markets." },
                                { letter: "D", text: "attractive to supermarkets." },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 26,
                            questionText: "Why did Tom Quinn decide not to sell OzKleen?",
                            options: [
                                { letter: "A", text: "No one wanted to buy OzKleen." },
                                { letter: "B", text: "New products were being developed in OzKleen." },
                                { letter: "C", text: "He couldn\u2019t make an agreement on the price with the buyer." },
                                { letter: "D", text: "He wanted to keep things unchanged." },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
            ],
            questions: [
                { questionNumber: 14, questionType: "matching-information", questionText: "Description of one family member persuading another of selling cleaning products", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "An account of the cooperation of all factory staff to cope with sales increase", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "An account of the creation of the formula of Shower Power", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "An account of buying the original OzKleen company", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "Description of Shower Power\u2019s international expansion", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "The reason for changing the packaging size of Shower Power", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 20, questionType: "matching-information", questionText: "An example of some innovative ideas", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 21, questionType: "matching-features", questionText: "Grant Kearney", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 22, questionType: "matching-features", questionText: "Tom Quinn", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 23, questionType: "matching-features", questionText: "Peter Quinn", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 24, questionType: "matching-features", questionText: "Belinda McDonnell", options: ["A", "B", "C", "D", "E"], correctAnswer: "", marks: 1 },
                { questionNumber: 25, questionType: "multiple-choice-full", questionText: "Tom Quinn changed the bottle size to 750ml to make Shower Power", correctAnswer: "", marks: 1 },
                { questionNumber: 26, questionType: "multiple-choice-full", questionText: "Why did Tom Quinn decide not to sell OzKleen?", correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 3: Who Wrote Shakespeare? (Q27-40)
        // Q27-29: Choose THREE letters (A-G) -- rendered as choose-two-letters pattern
        // Q30-35: Note Completion (table-like, Evidence for Different Authors)
        // Q36: Multiple Choice
        // Q37-40: Matching Features (sentence endings A-G)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "Who Wrote Shakespeare?",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: `William Shakespeare is the Western world\u2019s most famous playwright \u2013 but did he really write the plays and poems that are attributed to him?\n\nThere has been controversy over the authorship of the works of Shakespeare since the nineteenth century. The initial impetus for this debate came from the fact that nineteenth-century critics, poets, and readers were puzzled and displeased when they were presented with the few remaining scraps of evidence about the life of \u201cShakspere\u201d, as his name was most commonly spelled. The author they admired and loved must have been scholarly and intellectual, linguistically gifted, knowledgeable about the lifestyle of those who lived in royal courts, and he appeared to have travelled in Europe.\n\nThese critics felt that the son of a Stratford glove-maker, whose only definite recorded dealings concerned buying property, some minor legal action over a debt, tax records, and the usual entries for birth, marriage, and death, could not possibly have written poetry based on Classical models. Nor could he have been responsible for the wide-ranging intellectually and emotionally challenging plays for which he is so famous, because, in the nineteenth-century world-view, writers inevitably called upon their own experiences for the content of their work.\n\nBy compiling the various bits and pieces of surviving evidence, most Shakespearian scholars have satisfied themselves that the man from Stratford is indeed the legitimate author of all the works published under his name. A man called William Shakespeare did become a member of the Lord Chamberlain\u2019s Men, the dramatic company that owned the Globe and Blackfriars Theatres, and he enjoyed exclusive rights to the publication and performance of the dramatic works. There are 23 extant contemporary documents that indicate that he was a well-known poet or playwright. Publication and even production of plays had to be approved by government officials, who are recorded as having met with Shakespeare to discuss authorship and licensing of some of the plays, for example, \u2018King Lear\u2019.\n\nHowever, two Elizabethans who are still strongly defended as the true Shakespeare are Christopher Marlowe and Edward de Vere, both of whom would have benefited from writing under the secrecy of an assumed name.\n\nMarlowe\u2019s writing is acknowledged by all as the precursor of Shakespeare\u2019s dramatic verse style: declamatory blank verse that lifted and ennobled the content of the plays. The records indicate that he was accused of being an atheist: denying the existence of God would have been punishable by the death penalty. He is recorded as having \u2018died\u2019 in a street fight before Shakespeare\u2019s greatest works were written, and therefore it is suggested that he may have continued producing literary works while in hiding from the authorities.\n\nDe Vere was Earl of Oxford and an outstanding Classical scholar as a child. He was a strong supporter of the arts, including literature, music and acting. He is also recorded as being a playwright, although no works bearing his name still exist. However, in 16th century England it was not acceptable for an aristocrat to publish verse for ordinary people, nor to have any personal dealings with the low-class denizens of popular theatre.\n\nTo strengthen the case for their respective alternatives, literary detectives have looked for relationships between the biographies of their chosen authors and the published works of Shakespeare. However, during the sixteenth and seventeenth centuries, there was no tradition of basing plays on the author\u2019s own life experiences, and therefore, the focus of this part of the debate has shifted to the sonnets. These individual poems of sixteen lines are sincerely felt reactions to emotionally charged situations such as love and death, a goldmine for the biographically inclined researcher.\n\nThe largest group of these poems express love and admiration and, interestingly, they are written to a \u201cMr W.H.\u201d This person is clearly a nobleman, yet he is sometimes given forthright advice by the poet, suggesting that the writing comes from a mature father figure. How can de Vere or Marlowe be established as the author of the sonnets?\n\nAs the son of a tradesman, Marlowe had no aristocratic status; unlike Shakespeare, however, he did attend and excel at Cambridge University where he mingled with the wealthy. Any low-born artist needed a rich patron, and such is the argument for his authorship of the sonnets. The possible recipient of these sonnets is Will Hatfield, a minor noble who was wealthy and could afford to contribute to the arts; this young man\u2019s friendship would have assisted a budding poet and playwright. Marlowe\u2019s defenders contend that expressions of love between men were common at this time and had none of the homosexual connotations that Westerners of the twenty-first century may ascribe to them.\n\nThe Earl of Oxford had no need of a wealthy patron. The object of De Vere\u2019s sonnets, it is suggested, is Henry Wriothesley, Earl of Southampton, whose name only fits the situation if one accepts that it is not uncommon to reverse the first and surnames on formal occasions. De Vere was a rash and careless man and, because of his foolish behaviour, he fell out of favour with Queen Elizabeth herself. He needed, not an artistic patron, but someone like Henry to put in a good word for him in the complex world of the royal court. This, coupled with a genuine affection for the young man, may have inspired the continuing creation of poems addressed to him. Some even postulate that the mix of love and stern advice may stem from the fact that Henry was de Vere\u2019s illegitimate son, though there is no convincing evidence of this fact.`,
            questionGroups: [
                // Q27-29: Choose THREE letters A-G (each correct answer = its own question number)
                {
                    groupType: "choose-two-letters",
                    startQuestion: 27,
                    endQuestion: 29,
                    mainInstruction: "Choose THREE letters A \u2013 G.",
                    subInstruction: "Write the correct letters A \u2013 G, in boxes 27-29 on your answer sheet.",
                    questionSets: [
                        {
                            questionNumbers: [27, 28, 29],
                            questionText: "Which THREE of the following are given as reasons for the arguments that someone else wrote Shakespeare\u2019s works?",
                            options: [
                                { letter: "A", text: "Shakespeare did not come from Stratford." },
                                { letter: "B", text: "We have little information about Shakespeare\u2019s life." },
                                { letter: "C", text: "We know that Shakespeare did not go overseas." },
                                { letter: "D", text: "Shakespeare went to prison for owing money." },
                                { letter: "E", text: "Shakespeare spoke only the English language." },
                                { letter: "F", text: "Shakespeare\u2019s life appears to have been limited." },
                                { letter: "G", text: "The plays suggest that the writer was familiar with a high-class lifestyle." },
                            ],
                            correctAnswers: ["", "", ""],
                        },
                    ],
                },
                // Q30-35: Note Completion (Evidence for Different Authors) - passage format
                {
                    groupType: "note-completion",
                    startQuestion: 30,
                    endQuestion: 35,
                    mainInstruction: "Complete the table below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 30-35 on your answer sheet.",
                    mainHeading: "Evidence for Different Authors",
                    notesTable: [
                        {
                            title: "Shakespeare",
                            rows: [
                                { label: "", content: "He was an actor." },
                                { label: "", content: "He had 30 __________ for printing and putting on the plays." },
                                { label: "", content: "31 __________ consulted Shakespeare before approving performance of the plays." },
                            ],
                        },
                        {
                            title: "Marlowe",
                            rows: [
                                { label: "", content: "The plays use his writing style." },
                                { label: "", content: "He was in trouble because some people said he was an 32 __________." },
                                { label: "", content: "He may have faked his own death in a 33 __________. He needed to write in secrecy." },
                            ],
                        },
                        {
                            title: "De Vere",
                            rows: [
                                { label: "", content: "He was an excellent student." },
                                { label: "", content: "He supported other writers, musicians and actors." },
                                { label: "", content: "He may have been a 34 __________." },
                                { label: "", content: "As a member of the upper class he could not write for 35 __________." },
                            ],
                        },
                    ],
                },
                // Q36: Multiple Choice (single question)
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 36,
                    endQuestion: 36,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in box 36 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 36,
                            questionText: "The sonnets are useful for researchers because they are",
                            options: [
                                { letter: "A", text: "shorter and easier than the plays." },
                                { letter: "B", text: "all written to the same person." },
                                { letter: "C", text: "more personal than the plays." },
                                { letter: "D", text: "addressed to a lower-class person." },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
                // Q37-40: Matching Features (sentence endings A-G)
                {
                    groupType: "matching-features",
                    startQuestion: 37,
                    endQuestion: 40,
                    mainInstruction: "Complete each sentence with the correct ending, A-G, below.",
                    subInstruction: "Write the correct letter, A-G, in boxes 37-40 on your answer sheet.",
                    featureListTitle: "Sentence Endings",
                    featureOptions: [
                        { letter: "A", text: "W.H. had some influence with important people." },
                        { letter: "B", text: "the poems are addressed to the writer\u2019s child." },
                        { letter: "C", text: "the content of the poems strongly suggests this." },
                        { letter: "D", text: "W.H. was able to provide financial support." },
                        { letter: "E", text: "W.H. had been to Cambridge University." },
                        { letter: "F", text: "W.H. had a lot of high-class enemies." },
                        { letter: "G", text: "the poet may have changed the order of his initials" },
                    ],
                    matchingItems: [
                        { questionNumber: 37, text: "W.H. was probably a young man because", correctAnswer: "" },
                        { questionNumber: 38, text: "W.H. could have been Marlowe\u2019s friend because", correctAnswer: "" },
                        { questionNumber: 39, text: "W.H.\u2019s name could have been Henry Wriothesley because", correctAnswer: "" },
                        { questionNumber: 40, text: "W.H. could have been De Vere\u2019s friend because", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 27, questionType: "choose-two-letters", questionText: "Which THREE of the following are given as reasons for the arguments that someone else wrote Shakespeare\u2019s works?", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 28, questionType: "choose-two-letters", questionText: "Which THREE of the following are given as reasons for the arguments that someone else wrote Shakespeare\u2019s works?", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 29, questionType: "choose-two-letters", questionText: "Which THREE of the following are given as reasons for the arguments that someone else wrote Shakespeare\u2019s works?", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 30, questionType: "note-completion", questionText: "He had ___ for printing and putting on the plays.", correctAnswer: "", marks: 1 },
                { questionNumber: 31, questionType: "note-completion", questionText: "___ consulted Shakespeare before approving performance of the plays.", correctAnswer: "", marks: 1 },
                { questionNumber: 32, questionType: "note-completion", questionText: "He was in trouble because some people said he was an ___.", correctAnswer: "", marks: 1 },
                { questionNumber: 33, questionType: "note-completion", questionText: "He may have faked his own death in a ___.", correctAnswer: "", marks: 1 },
                { questionNumber: 34, questionType: "note-completion", questionText: "He may have been a ___.", correctAnswer: "", marks: 1 },
                { questionNumber: 35, questionType: "note-completion", questionText: "As a member of the upper class he could not write for ___.", correctAnswer: "", marks: 1 },
                { questionNumber: 36, questionType: "multiple-choice-full", questionText: "The sonnets are useful for researchers because they are", correctAnswer: "", marks: 1 },
                { questionNumber: 37, questionType: "matching-features", questionText: "W.H. was probably a young man because", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "W.H. could have been Marlowe\u2019s friend because", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 39, questionType: "matching-features", questionText: "W.H.\u2019s name could have been Henry Wriothesley because", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
                { questionNumber: 40, questionType: "matching-features", questionText: "W.H. could have been De Vere\u2019s friend because", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "", marks: 1 },
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
        console.error("\u274c Error seeding Reading Test 14:", error);
        process.exit(1);
    }
}

seedTest();

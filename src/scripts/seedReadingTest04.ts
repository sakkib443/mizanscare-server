import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_TEST_04",
    testNumber: 4,
    title: "Reading Mock Test 04 - Academic",
    description: "IELTS Academic Reading Test featuring passages on genetically modified crops and more",
    source: "IELTS Practice Test",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: Genetically Modified Crops: Accepting the Inevitable?
        // Questions 1-13
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "Genetically Modified Crops: Accepting the Inevitable?",
            passage: `A.\nCabaceiras is a town of around 5,000 people situated in Brazil\u2019s northern state of Para. The people are mostly small-scale vegetable farmers, with specialist, traditional knowledge handed down over hundreds of years. But now the natural purity of their produce is under threat from one of the 21st century\u2019s most controversial technological issues: genetically modified organisms (GMOs). Previously one of the world\u2019s last major agricultural exporters to remain GMO free, the Brazilian government has now decided to allow the biotechnology industry to sell GM seed to the country\u2019s farmers.\n\nB.\nMany people in Brazil feel the acceptance of transgenic crops is a dangerous move. Before this decision, Brazil was the world\u2019s largest exporter of GM-free soya. In 2001, sales of this product alone earned the country US$ 4.1billion \u2013 just under one-third of the country\u2019s total income from agricultural exports. Its main market was Europe, where consumers are still suspicious as to whether food species that have been genetically engineered in a laboratory may affect their health. Several UK supermarket chains, for example, insist on GM-free soya and refuse to buy from the USA, where 69 per cent of all soya crops are GM.\n\nC.\nEuropean law requires all produce containing more than one per cent of GM ingredients to be labelled as such. At the time when Brazil was totally GM-free, Adriano Campolini, policy director of the development agency ActionAid, pointed out, \u2018Brazil faces pressure from countries like the USA and from the biotech industry to come into line. They are afraid that Brazil will have a competitive advantage because of its GM-free status.\u2019 Fearful that health and safety worries were being ignored, ActionAid joined with other non-governmental organisations to stall attempts in Brazil\u2019s congress to legalise GMOs, insisting there must be further research. They gained support among rural peasants such as those who live in Cabaceiras through a public education campaign, staging mock jury trials at which scientists, large-scale farmers, peasants and civic leaders alike were invited to debate the case for and against.\n\nD.\nEven now, small family farmers like Lilian Marques, 33, who lives in Cabaceiras with her family, fear GM technology could harm them and their businesses. Lilian is well aware of the possible effects on health of eating GM food, but she also has other concerns, \u2018I am afraid that the rich farmers will plant GM seed now it is legalised,\u2019 she explains. \u2018The wind could bring the pollen to our plantation, then it will be as if we have planted GM seed too. We produce only natural vegetables, yet we could not be sure what we were eating.\u2019\n\nE.\nThere are other potential consequences that trouble many in this fragile Amazon region, whose biodiversity is the richest on the planet. Some fear there may be a risk of chemical pollution from the products that must be used on the crops. One type of GM maize has even been engineered to be insect-resistant \u2013 if a caterpillar eats the leaf, the caterpillar dies. \u2018Maybe GM crops could be harmful to the forest and the animals that we eat,\u2019 Lilian suggests. \u2018What if an insect eats from the crop, then an animal eats the insect, then we eat the animal?\u2019\n\nF.\nThe biotech industry says such fears about GM technology are misguided. Monsanto, an international food biotechnology company, has launched a campaign in Brazil, costing US$2 million, to provide information to the public about genetically modified crops. The company insists the process that kills the insects is harmless to humans and that \u2018Round-up\u2019 \u2013 the herbicide used on GM crops \u2013 is \u2018no more toxic than table-salt\u2019. \u2018We are as close to 100 per cent as science can ever be that GM products are safe for human health and the environment,\u2019 says spokesman Gary Barton. Monsanto hails the USA and Argentina \u2013 the other two largest exporters of soya \u2013 as examples of agricultural exporters that thrive on GM crops, whose merits it says include increased resistance to disease, improved nutritional value and increased levels of production. \u2018Three and a half million farmers around the world wouldn\u2019t have adopted biotechnology in their fields if they weren\u2019t seeing any benefits,\u2019 says Barton.\n\nG.\nIt is not just the biotechnology companies that have an interest in Brazil lifting its GM ban, though they will undoubtedly reap the biggest profits. Francisco Campos, a professor of plant molecular biology in the northeastern city of Fortaleza, has made his own scientific breakthrough but cannot implement it because the embargo has only been lifted on GM soya, not other crops. \u2018We need plants to feed animals in order to have milk and meat. In this region, most of the plants we use for animal food, like cassava and prickly pear, are nutritionally deficient. But we can now insert a gene to add nutritional quality. In my laboratory, we have created our first transgenic cassava like this, but we are not allowed to put it to use. This GM ban undermines the confidence people have in science and its ability to help feed our nation!\u2019\n\nH.\nBut the villagers in Cabaceiras are not convinced. \u2018In my view, people still don\u2019t know if GM seed is good or bad,\u2019 says Lilian. \u2018Therefore, I don\u2019t want to take the risk.\u2019`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 1-13",
            questionGroups: [
                // Questions 1-8: Matching Information
                {
                    groupType: "matching-information",
                    startQuestion: 1,
                    endQuestion: 8,
                    mainInstruction: "The Reading Passage has eight paragraphs labelled A-H. Which paragraph contains the following information?",
                    subInstruction: "NB You may use any letter more than once.",
                    featureListTitle: "Paragraphs",
                    featureOptions: [
                        { letter: "A", text: "Paragraph A" },
                        { letter: "B", text: "Paragraph B" },
                        { letter: "C", text: "Paragraph C" },
                        { letter: "D", text: "Paragraph D" },
                        { letter: "E", text: "Paragraph E" },
                        { letter: "F", text: "Paragraph F" },
                        { letter: "G", text: "Paragraph G" },
                        { letter: "H", text: "Paragraph H" },
                    ],
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G", "H"],
                    matchingItems: [
                        { questionNumber: 1, text: "An example of a part of the world which valued Brazil's GM-free status", correctAnswer: "B" },
                        { questionNumber: 2, text: "An important decision that has been made by Brazilian authorities", correctAnswer: "A" },
                        { questionNumber: 3, text: "An account of one organisation's efforts to reassure the people of Brazil about GMOs", correctAnswer: "F" },
                        { questionNumber: 4, text: "The effect on public attitudes to science of the continued ban on some GM techniques", correctAnswer: "G" },
                        { questionNumber: 5, text: "The reason why other countries felt threatened by Brazil's ban on GM products", correctAnswer: "C" },
                        { questionNumber: 6, text: "An example of a small community which has, up to now, has been free of GMOs", correctAnswer: "A" },
                        { questionNumber: 7, text: "A warning about the possible effects of GM technology on the food chain", correctAnswer: "E" },
                        { questionNumber: 8, text: "A method of raising awareness of both positive and negative aspects of GMOs", correctAnswer: "C" },
                    ],
                },
                // Questions 9-13: Note Completion
                {
                    groupType: "note-completion",
                    startQuestion: 9,
                    endQuestion: 13,
                    mainInstruction: "Complete the notes below.",
                    subInstruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer.",
                    mainHeading: "GM Technology: Arguments For and Against",
                    passage: `Arguments against GM technology

Health could be affected by eating GMO foods
\u2022 Danger of 9 __________ of GM crops being carried to plantations of non-GM produce
\u2022 Danger of 10 __________ from products such as insecticides

Arguments for GM technology

\u2022 Insecticides and 11 __________ products used on GMOs are safe
\u2022 GMO crops bring many benefits
  \u2013 e.g. less danger of 12 __________
  \u2013 more nutritious
  \u2013 more productive
\u2022 Already used by 3.5 m farmers worldwide
\u2022 New type of 13 __________ plant developed through the insertion of an extra gene could improve yields of meat and milk if used as animal food`,
                    notesSections: [
                        {
                            subHeading: "Arguments against GM technology",
                            bullets: [
                                { type: "context" as const, text: "Health could be affected by eating GMO foods" },
                                { type: "question" as const, questionNumber: 9, textBefore: "Danger of", textAfter: "of GM crops being carried to plantations of non-GM produce", correctAnswer: "pollen" },
                                { type: "question" as const, questionNumber: 10, textBefore: "Danger of", textAfter: "from products such as insecticides", correctAnswer: "chemical pollution" },
                            ],
                        },
                        {
                            subHeading: "Arguments for GM technology",
                            bullets: [
                                { type: "question" as const, questionNumber: 11, textBefore: "Insecticides and", textAfter: "products used on GMOs are safe", correctAnswer: "herbicide" },
                                { type: "context" as const, text: "GMO crops bring many benefits" },
                                { type: "question" as const, questionNumber: 12, textBefore: "e.g. less danger of", textAfter: "", correctAnswer: "disease" },
                                { type: "context" as const, text: "more nutritious" },
                                { type: "context" as const, text: "more productive" },
                                { type: "context" as const, text: "Already used by 3.5 m farmers worldwide" },
                                { type: "question" as const, questionNumber: 13, textBefore: "New type of", textAfter: "plant developed through the insertion of an extra gene could improve yields of meat and milk if used as animal food", correctAnswer: "cassava" },
                            ],
                        },
                    ],
                },
            ],
            questions: [
                // Q1-8: Matching Information
                { questionNumber: 1, questionType: "matching-information", questionText: "An example of a part of the world which valued Brazil's GM-free status", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "B", marks: 1 },
                { questionNumber: 2, questionType: "matching-information", questionText: "An important decision that has been made by Brazilian authorities", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "A", marks: 1 },
                { questionNumber: 3, questionType: "matching-information", questionText: "An account of one organisation's efforts to reassure the people of Brazil about GMOs", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "F", marks: 1 },
                { questionNumber: 4, questionType: "matching-information", questionText: "The effect on public attitudes to science of the continued ban on some GM techniques", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "G", marks: 1 },
                { questionNumber: 5, questionType: "matching-information", questionText: "The reason why other countries felt threatened by Brazil's ban on GM products", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "C", marks: 1 },
                { questionNumber: 6, questionType: "matching-information", questionText: "An example of a small community which has, up to now, has been free of GMOs", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "A", marks: 1 },
                { questionNumber: 7, questionType: "matching-information", questionText: "A warning about the possible effects of GM technology on the food chain", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "E", marks: 1 },
                { questionNumber: 8, questionType: "matching-information", questionText: "A method of raising awareness of both positive and negative aspects of GMOs", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "C", marks: 1 },
                // Q9-13: Note Completion
                { questionNumber: 9, questionType: "note-completion", questionText: "Danger of __________ of GM crops being carried to plantations of non-GM produce", correctAnswer: "pollen", acceptableAnswers: ["pollen", "the pollen"], marks: 1, wordLimit: 3 },
                { questionNumber: 10, questionType: "note-completion", questionText: "Danger of __________ from products such as insecticides", correctAnswer: "chemical pollution", acceptableAnswers: ["chemical pollution"], marks: 1, wordLimit: 3 },
                { questionNumber: 11, questionType: "note-completion", questionText: "Insecticides and __________ products used on GMOs are safe", correctAnswer: "herbicide", acceptableAnswers: ["herbicide"], marks: 1, wordLimit: 3 },
                { questionNumber: 12, questionType: "note-completion", questionText: "e.g. less danger of __________", correctAnswer: "disease", acceptableAnswers: ["disease", "diseases"], marks: 1, wordLimit: 3 },
                { questionNumber: 13, questionType: "note-completion", questionText: "New type of __________ plant developed through the insertion of an extra gene", correctAnswer: "cassava", acceptableAnswers: ["cassava", "transgenic cassava"], marks: 1, wordLimit: 3 },
            ],
        },
        // ═══════════════════════════════════════════
        // SECTION 2: What is an ASBO?
        // Questions 14-26
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "What is an ASBO?",
            passage: `Ask somebody to make a list of crimes and they will probably come up with the usual suspects that you or I would: murder, robbery, assault, burglary and so on. They might even include acts which are merely \u2018against the law\u2019 like parking on a double yellow line. But if you ask them to make a list of anti-social behaviours, you are getting into an area where there is going to be considerable disagreement. This didn\u2019t stop the UK government which introduced Anti-Social Behaviour Orders, or ASBOs, in 1998 as part of the Crime and Disorder Act \u2013 legislation designed to deal with practically all aspects of criminal activity and disorderly behaviour.\n\nA subjective definition of anti-social behaviour permits you to cast your net wide and include anything you find personally disagreeable; the legal definition is also widely inclusive. To quote the Crime and Disorder Act it is behaviour which \u2018causes or is likely to cause harassment alarm or distress to one or more people who are not in the same household as the perpetrator\u2019.\n\nThis includes, among many other things, foul and abusive language, threatening behaviour, shouting, disorderly conduct, vandalism, intimidation, behaviour as the result of drug or alcohol misuse, graffiti and noise which is excessive, particularly at night.\n\nThe idea is that ASBOs are sanctions designed to deal with issues that affect everyone in the community and as such are civil sanctions, not criminal ones, and need the cooperation of the community to be effective. For example, a private individual cannot apply for an ASBO; he or she must make a complaint to the police or local authority, who will then work together to gather more information and build up evidence. This involves getting witnesses, among whom will no doubt be neighbours and acquaintances, to make statements to the authorities. When the authorities are satisfied that they have enough evidence, the local council applies to the magistrates\u2019 court to have an ASBO imposed.\n\nWe still haven\u2019t decided what constitutes anti-social behaviour. It doesn\u2019t have to be physical violence, of course, but is far easier to identify and deal with if it is. What about threatening behaviour? We\u2019re not talking here about direct threats such as \u2018If you come round here again, I\u2019ll beat you up!\u2019, but situations perceived as threatening. Let\u2019s say a pensioner or a person of timid disposition is on their way home and they run into a group of young people who are shouting, swearing and kicking a ball about and who happen to make a few unkind remarks as the person passes. Let\u2019s say the person is alarmed or feels threatened by the situation. Does it merit getting the ASBO process going?\n\nIn fact, young people merely hanging out in public places, however boisterous their behaviour might seem to be to some people, are not considered to be indulging in anti-social behaviour. However, there is a proviso. Such behaviour in its own right is not considered anti-social unless it is thought it is being done with other, more serious, behavioural attitudes involved. This, of course, can be very subjective.\n\nA person faced with an ASBO can argue in their defence that their behaviour was reasonable and unthreatening. This too is subjective, and both sides\u2019 claims are open to wide interpretation. Something else that has to be taken into account here is that ASBOs are made on an individual basis even if that person is part of a group of people committing anti-social behaviour.\n\nIf a case reaches the magistrates\u2019 court, witnesses can be called to provide further evidence for or against the defendant. However, the magistrate, as well as considering the complaints made against the defendant, will take into account his or her family situation, welfare issues, and whether or not he or she has been victimised or discriminated against. It is worth bearing in mind, though, that witnesses can be intimidated or otherwise persuaded not to appear in court and give evidence.\n\nWhen the Crime and Disorder Act came into force, ASBOs were generally intended to be a measure to deal with adult anti-social behaviour, yet within the Act it states that an order can be applied for against any individual over the age of ten years old. It is a striking fact that the majority of ASBOs imposed since the law was enacted have been handed out to young people and children.\n\nThe question is, have they been effective? The government, naturally, claims that they have brought about a real improvement in the quality of life in communities around the country. Nay-sayers, such as civil rights campaigners, claim the measures are far too open to abuse. Some say they go too far and some that they don\u2019t go far enough and lack bite. However, a genuine impediment to their effectiveness is that to impose an ASBO takes a lot of time and paperwork, involving the cooperation of community, police and local council, and they are very expensive to implement. One estimate is that an ASBO can cost in excess of \u00a320,000. What all this means is that ASBOs are being used very rarely in many parts of the country. So the jury is still out as to how effective they really are.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 14-26",
            questionGroups: [
                // Questions 14-16: Choose THREE Letters
                {
                    groupType: "choose-two-letters",
                    startQuestion: 14,
                    endQuestion: 16,
                    mainInstruction: "Choose THREE letters A-H. Which THREE of the following statements are true of ASBOs, according to the text?",
                    subInstruction: "NB Your answers may be given in any order.",
                    questionSets: [
                        {
                            questionNumbers: [14, 15, 16],
                            questionText: "Which THREE of the following statements are true of ASBOs, according to the text?",
                            options: [
                                { letter: "A", text: "They were introduced to deal with specific crimes." },
                                { letter: "B", text: "Parking on a double yellow line could get you served with an ASBO." },
                                { letter: "C", text: "Swearing is one of the offences referred to in the Crime and Disorder Act." },
                                { letter: "D", text: "As a private householder you can apply for an ASBO against a noisy neighbour." },
                                { letter: "E", text: "It is not illegal for young people to gather in groups in public places." },
                                { letter: "F", text: "An ASBO cannot be served on a group of people behaving in a disorderly manner." },
                                { letter: "G", text: "A large proportion of those served with ASBOs are over the age of 21." },
                                { letter: "H", text: "Most people agree that ASBOs have been effective all over the country." },
                            ],
                            correctAnswers: ["C", "E", "F"],
                        },
                    ],
                },
                // Questions 17-19: Multiple Choice Full
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 17,
                    endQuestion: 19,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "",
                    mcQuestions: [
                        {
                            questionNumber: 17,
                            questionText: "The writer suggests that",
                            options: [
                                { letter: "A", text: "anti-social behaviour should be seen as a crime." },
                                { letter: "B", text: "few people agree on how to define a crime." },
                                { letter: "C", text: "anti-social behaviour is difficult to define." },
                                { letter: "D", text: "the legal definition of crime is too exclusive." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 18,
                            questionText: "What surprised the writer about the imposition of ASBOs?",
                            options: [
                                { letter: "A", text: "the number of ten-year-olds that had been given one" },
                                { letter: "B", text: "that very few adults had been served with ASBOs" },
                                { letter: "C", text: "that most of those served with ASBOs were youngsters" },
                                { letter: "D", text: "how few ASBOs had been imposed since 1998" },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 19,
                            questionText: "In the writer\u2019s opinion, how effective have ASBOs been?",
                            options: [
                                { letter: "A", text: "There isn\u2019t enough evidence to decide." },
                                { letter: "B", text: "They are too expensive to be effective." },
                                { letter: "C", text: "They are ineffective because they are not strict enough." },
                                { letter: "D", text: "Being open to abuse renders them ineffective." },
                            ],
                            correctAnswer: "A",
                        },
                    ],
                },
                // Questions 20-26: Sentence Completion
                {
                    groupType: "sentence-completion",
                    startQuestion: 20,
                    endQuestion: 26,
                    mainInstruction: "Complete the sentences.",
                    subInstruction: "Choose NO MORE THAN THREE WORDS from the passage for each answer.",
                    statements: [
                        { questionNumber: 20, text: "The official _________ says that anti-social behaviour is behaviour which can cause alarm or distress.", correctAnswer: "definition" },
                        { questionNumber: 21, text: "Along with swearing and destruction of public or private property, making _________ noise is considered anti-social behaviour.", correctAnswer: "excessive" },
                        { questionNumber: 22, text: "ASBOs are considered to be part of _________ law rather than criminal law.", correctAnswer: "civil" },
                        { questionNumber: 23, text: "Citizens have to _________ either the local council or the police before any action can be taken.", correctAnswer: "make a complaint" },
                        { questionNumber: 24, text: "In their efforts to collect evidence the authorities may call on _________ to get more information.", correctAnswer: "witnesses" },
                        { questionNumber: 25, text: "ASBOs are issued at a _________.", correctAnswer: "magistrates court" },
                        { questionNumber: 26, text: "_________ is the most straightforward form of anti-social behaviour to determine.", correctAnswer: "physical violence" },
                    ],
                },
            ],
            questions: [
                // Q14-16: Choose THREE Letters
                { questionNumber: 14, questionType: "choose-two-letters", questionText: "Which THREE statements are true of ASBOs?", correctAnswer: "C", marks: 1 },
                { questionNumber: 15, questionType: "choose-two-letters", questionText: "Which THREE statements are true of ASBOs?", correctAnswer: "E", marks: 1 },
                { questionNumber: 16, questionType: "choose-two-letters", questionText: "Which THREE statements are true of ASBOs?", correctAnswer: "F", marks: 1 },
                // Q17-19: Multiple Choice Full
                { questionNumber: 17, questionType: "multiple-choice-full", questionText: "The writer suggests that", correctAnswer: "C", marks: 1 },
                { questionNumber: 18, questionType: "multiple-choice-full", questionText: "What surprised the writer about the imposition of ASBOs?", correctAnswer: "C", marks: 1 },
                { questionNumber: 19, questionType: "multiple-choice-full", questionText: "In the writer\u2019s opinion, how effective have ASBOs been?", correctAnswer: "A", marks: 1 },
                // Q20-26: Sentence Completion
                { questionNumber: 20, questionType: "sentence-completion", questionText: "The official _________ says that anti-social behaviour is behaviour which can cause alarm or distress.", correctAnswer: "definition", acceptableAnswers: ["definition", "legal definition"], marks: 1, wordLimit: 3 },
                { questionNumber: 21, questionType: "sentence-completion", questionText: "Along with swearing and destruction, making _________ noise is considered anti-social behaviour.", correctAnswer: "excessive", acceptableAnswers: ["excessive"], marks: 1, wordLimit: 3 },
                { questionNumber: 22, questionType: "sentence-completion", questionText: "ASBOs are considered to be part of _________ law rather than criminal law.", correctAnswer: "civil", acceptableAnswers: ["civil"], marks: 1, wordLimit: 3 },
                { questionNumber: 23, questionType: "sentence-completion", questionText: "Citizens have to _________ either the local council or the police.", correctAnswer: "make a complaint", acceptableAnswers: ["make a complaint"], marks: 1, wordLimit: 3 },
                { questionNumber: 24, questionType: "sentence-completion", questionText: "The authorities may call on _________ to get more information.", correctAnswer: "witnesses", acceptableAnswers: ["witnesses", "neighbours", "acquaintances"], marks: 1, wordLimit: 3 },
                { questionNumber: 25, questionType: "sentence-completion", questionText: "ASBOs are issued at a _________.", correctAnswer: "magistrates court", acceptableAnswers: ["magistrates court", "magistrates' court"], marks: 1, wordLimit: 3 },
                { questionNumber: 26, questionType: "sentence-completion", questionText: "_________ is the most straightforward form of anti-social behaviour to determine.", correctAnswer: "physical violence", acceptableAnswers: ["physical violence"], marks: 1, wordLimit: 3 },
            ],
        },
        // ═══════════════════════════════════════════
        // SECTION 3: Mind readers
        // Questions 27-40
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "Mind readers",
            passage: `It may one day be possible to eavesdrop on another person\u2019s inner voice.\n\nAs you begin to read this article and your eyes follow the words across the page, you may be aware of a voice in your head silently muttering along. The very same thing happens when we write: a private, internal narrative shapes the words before we commit them to text.\n\nWhat if it were possible to tap into this inner voice? Thinking of words does, after all, create characteristic electrical signals in our brains, and decoding them could make it possible to piece together someone\u2019s thoughts. Such an ability would have phenomenal prospects, not least for people unable to communicate as a result of brain damage. But it would also carry profoundly worrisome implications for the future of privacy.\n\nThe first scribbled records of electrical activity in the human brain were made in 1924 by a German doctor called Hans Berger using his new invention \u2013 the electroencephalogram (EEG). This uses electrodes placed on the skull to read the output of the brain\u2019s billions of nerve cells or neurons. By the mid-1990s, the ability to translate the brain\u2019s activity into readable signals had advanced so far that people could move computer cursors using only the electrical fields created by their thoughts.\n\nThe electrical impulses such innovations tap into are produced in a part of the brain called the motor cortex, which is responsible for muscle movement. To move a cursor on a screen, you do not think \u2018move left\u2019 in natural language. Instead, you imagine a specific motion like hitting a ball with a tennis racket. Training the machine to realise which electrical signals correspond to your imagined movements, however, is time consuming and difficult. And while this method works well for directing objects on a screen, its drawbacks become apparent when you try using it to communicate. At best, you can use the cursor to select letters displayed on an on-screen keyboard. Even a practised mind would be lucky to write 15 words per minute with that approach. Speaking, we can manage 150.\n\nMatching the speed at which we can think and talk would lead to devices that could instantly translate the electrical signals of someone\u2019s inner voice into sound produced by a speech synthesiser. To do this, it is necessary to focus only on the signals coming from the brain areas that govern speech. However, real mind reading requires some way to intercept those signals before they hit the motor cortex.\n\nThe translation of thoughts to language in the brain is an incredibly complex and largely mysterious process, but this much is known: before they end up in the motor cortex, thoughts destined to become spoken words pass through two \u2018staging areas\u2019 associated with the perception and expression of speech.\n\nThe first is called Wernicke\u2019s area, which deals with semantics \u2013 in this case, ideas based in meaning, which can include images, smells or emotional memories. Damage to Wernicke\u2019s area can result in the loss of semantic associations: words can\u2019t make sense when they are decoupled from their meaning. Suffer a stroke in that region, for example, and you will have trouble understanding not just what others are telling you, but what you yourself are thinking.\n\nThe second is called Broca\u2019s area, agreed to be the brain\u2019s speech-processing centre. Here, semantics are translated into phonetics and ultimately, word components. From here, the assembled sentences take a quick trip to the motor cortex, which activates the muscles that will turn the desired words into speech. Injure Broca\u2019s area, and though you might know what you want to say, you just can\u2019t send those impulses.\n\nWhen you listen to your inner voice, two things are happening. You \u2018hear\u2019 yourself producing language in Wernicke\u2019s area as you construct it in Broca\u2019s area. The key to mind reading seems to lie in these two areas.\n\nThe work of Bradley Greger in 2010 broke new ground by marking the first-ever excursion beyond the motor cortex into the brain\u2019s language centres. His team used electrodes placed inside the skull to detect the electrical signatures of whole words, such as \u2018yes\u2019, \u2018no\u2019, \u2018hot\u2019, \u2018cold\u2019, \u2018thirsty\u2019, \u2018hungry\u2019, etc. Promising as it is, this approach requires a new signal to be learned for each new word. English contains a quarter of a million distinct words. And though this was the first instance of monitoring Wernicke\u2019s area, it still relied largely on the facial motor cortex.\n\nGreger decided there might be another way. The building blocks of language are called phonemes, and the English language has about 40 of them \u2013 the \u2018kuh\u2019 sound in \u2018school\u2019, for example, the \u2018sh\u2019 in \u2018shy\u2019. Every English word contains some subset of these components. Decode the brain signals that correspond to the phonemes, and you would have a system to unlock any word at the moment someone thinks it.\n\nIn 2011, Eric Leuthardt and his colleague Gerwin Schalk positioned electrodes over the language regions of four fully conscious people and were able to detect the phonemes \u2018oo\u2019, \u2018ah\u2019, \u2018eh\u2019 and \u2018ee\u2019. What they also discovered was that spoken phonemes activated both the language areas and the motor cortex, while imagined speech \u2013 that inner voice \u2013 boosted the activity of neurons in Wernicke\u2019s area. Leuthardt had effectively read his subjects\u2019 minds. \u2018I would call it brain reading,\u2019 he says. To arrive at whole words, Leuthardt\u2019s next step is to expand his library of sounds and to find out how the production of phonemes translates across different languages.\n\nFor now, the research is primarily aimed at improving the lives of people with locked-in syndrome, but the ability to explore the brain\u2019s language centres could revolutionise other fields. The consequences of these findings could ripple out to more general audiences who might like to use extreme hands-free mobile communication technologies that can be manipulated by inner voice alone. For linguists, it could provide previously unobtainable insight into the neural origins and structures of language. Knowing what someone is thinking without needing words at all would be functionally indistinguishable from telepathy.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 27-40",
            questionGroups: [
                // Questions 27-32: Yes/No/Not Given
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 27,
                    endQuestion: 32,
                    mainInstruction: "Do the following statements agree with the claims of the writer in the Reading Passage?",
                    subInstruction: "In boxes 27-32 on your answer sheet, write",
                    optionsExplanation: [
                        { label: "YES", description: "if the statement agrees with the claims of the writer" },
                        { label: "NO", description: "if the statement contradicts the claims of the writer" },
                        { label: "NOT GIVEN", description: "if it is impossible to say what the writer thinks about this" },
                    ],
                    statements: [
                        { questionNumber: 27, text: "Our inner voice can sometimes distract us when we are reading or writing.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 28, text: "The possibility of reading minds has both positive and negative implications.", correctAnswer: "YES" },
                        { questionNumber: 29, text: "Little progress was made in understanding electrical activity in the brain between 1924 and the mid-1990s.", correctAnswer: "NO" },
                        { questionNumber: 30, text: "Machines can be readily trained to interpret electrical signals from the brain that correspond to movements on a keyboard.", correctAnswer: "NO" },
                        { questionNumber: 31, text: "Much has been written about the potential use of speech synthesisers with paralysed patients.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 32, text: "It has been proven that the perception and expression of speech occur in different parts of the brain.", correctAnswer: "YES" },
                    ],
                },
                // Questions 33-36: Matching Features (Sentence Endings)
                {
                    groupType: "matching-features",
                    startQuestion: 33,
                    endQuestion: 36,
                    mainInstruction: "Complete each sentence with the correct ending, A-G.",
                    subInstruction: "",
                    featureListTitle: "Sentence Endings",
                    featureOptions: [
                        { letter: "A", text: "receive impulses from the motor cortex." },
                        { letter: "B", text: "pass directly to the motor cortex." },
                        { letter: "C", text: "are processed into language." },
                        { letter: "D", text: "require a listener." },
                        { letter: "E", text: "consist of decoded phonemes." },
                        { letter: "F", text: "are largely non-verbal." },
                        { letter: "G", text: "match the sounds that they make." },
                    ],
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    matchingItems: [
                        { questionNumber: 33, text: "In Wernicke\u2019s area, our thoughts", correctAnswer: "F" },
                        { questionNumber: 34, text: "It is only in Broca\u2019s area that ideas we wish to express", correctAnswer: "C" },
                        { questionNumber: 35, text: "The muscles that articulate our sentences", correctAnswer: "A" },
                        { questionNumber: 36, text: "The words and sentences that we speak", correctAnswer: "E" },
                    ],
                },
                // Questions 37-40: Multiple Choice Full
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 37,
                    endQuestion: 40,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "",
                    mcQuestions: [
                        {
                            questionNumber: 37,
                            questionText: "What does the underlined phrase \u2018broke new ground\u2019 mean?",
                            options: [
                                { letter: "A", text: "built on the work of others" },
                                { letter: "B", text: "produced unusual or unexpected results" },
                                { letter: "C", text: "proved earlier theories on the subject to be false" },
                                { letter: "D", text: "achieved something that had not been done before" },
                            ],
                            correctAnswer: "D",
                        },
                        {
                            questionNumber: 38,
                            questionText: "What was most significant about Leuthardt and Schalk\u2019s work?",
                            options: [
                                { letter: "A", text: "They succeeded in grouping certain phonemes into words." },
                                { letter: "B", text: "They linked the production of certain phonemes to recognisable brain activity." },
                                { letter: "C", text: "Their methods worked for speakers of languages other than English." },
                                { letter: "D", text: "Their subjects were awake during the course of their experiments." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 39,
                            questionText: "What does the writer conclude about mind reading?",
                            options: [
                                { letter: "A", text: "It could become a form of entertainment." },
                                { letter: "B", text: "It may contribute to studies on language acquisition." },
                                { letter: "C", text: "Most people are keenly awaiting the possibility of doing it." },
                                { letter: "D", text: "Mobile technologies may become unreliable because of it." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 40,
                            questionText: "What is the main purpose of the writer of this passage?",
                            options: [
                                { letter: "A", text: "to give an account of the developments in mind-reading research" },
                                { letter: "B", text: "to show how scientists\u2019 attitudes towards mind reading have changed" },
                                { letter: "C", text: "to explain why mind-reading research should be given more funding" },
                                { letter: "D", text: "to fully explore the arguments for and against mind reading" },
                            ],
                            correctAnswer: "A",
                        },
                    ],
                },
            ],
            questions: [
                // Q27-32: Yes/No/Not Given
                { questionNumber: 27, questionType: "yes-no-not-given", questionText: "Our inner voice can sometimes distract us when we are reading or writing.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 28, questionType: "yes-no-not-given", questionText: "The possibility of reading minds has both positive and negative implications.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 29, questionType: "yes-no-not-given", questionText: "Little progress was made in understanding electrical activity in the brain between 1924 and the mid-1990s.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 30, questionType: "yes-no-not-given", questionText: "Machines can be readily trained to interpret electrical signals from the brain.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 31, questionType: "yes-no-not-given", questionText: "Much has been written about the potential use of speech synthesisers with paralysed patients.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 32, questionType: "yes-no-not-given", questionText: "It has been proven that the perception and expression of speech occur in different parts of the brain.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                // Q33-36: Matching Features
                { questionNumber: 33, questionType: "matching-features", questionText: "In Wernicke\u2019s area, our thoughts", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                { questionNumber: 34, questionType: "matching-features", questionText: "It is only in Broca\u2019s area that ideas we wish to express", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 35, questionType: "matching-features", questionText: "The muscles that articulate our sentences", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                { questionNumber: 36, questionType: "matching-features", questionText: "The words and sentences that we speak", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "E", marks: 1 },
                // Q37-40: Multiple Choice Full
                { questionNumber: 37, questionType: "multiple-choice-full", questionText: "What does the underlined phrase \u2018broke new ground\u2019 mean?", correctAnswer: "D", marks: 1 },
                { questionNumber: 38, questionType: "multiple-choice-full", questionText: "What was most significant about Leuthardt and Schalk\u2019s work?", correctAnswer: "B", marks: 1 },
                { questionNumber: 39, questionType: "multiple-choice-full", questionText: "What does the writer conclude about mind reading?", correctAnswer: "B", marks: 1 },
                { questionNumber: 40, questionType: "multiple-choice-full", questionText: "What is the main purpose of the writer of this passage?", correctAnswer: "A", marks: 1 },
            ],
        },
    ],
};

async function seedTest() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("Connected to database");

        // Check by testId first, then by testNumber
        const existing = await ReadingTest.findOne({ 
            $or: [{ testId: readingTest.testId }, { testNumber: readingTest.testNumber }] 
        });
        
        if (existing) {
            await ReadingTest.findByIdAndUpdate(existing._id, readingTest, { runValidators: false });
            console.log("✅ Reading Test 04 updated successfully! (replaced existing testNumber 4)");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("❌ Admin user not found. Please create an admin user first.");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log("✅ Reading Test 04 created successfully!");
        }

        console.log(`
📝 Test Details:
   Title: ${readingTest.title}
   Test ID: ${readingTest.testId}
   Test Number: ${readingTest.testNumber}
   Total Questions: ${readingTest.totalQuestions}
   Sections:
     1. ${readingTest.sections[0].title} (Q1-13)
     2. ${readingTest.sections[1].title} (Q14-26) — PENDING
     3. ${readingTest.sections[2].title} (Q27-40) — PENDING
        `);

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
}

seedTest();

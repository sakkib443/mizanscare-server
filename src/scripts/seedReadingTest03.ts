import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_AC_003",
    testNumber: 103,
    title: "Reading Mock Test 03 - Academic",
    description: "IELTS Academic Reading Test featuring passages on How to Spot a Liar, Being Left-handed in a Right-handed World, and What is a dinosaur?",
    source: "IELTS Academic Practice",
    testType: "academic" as const,
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: How to Spot a Liar (Q1-13)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "How to Spot a Liar",
            passage: `However much we may abhor it, deception comes naturally to all living things. Birds do it by feigning injury to lead hungry predators away from nesting young. Spider crabs do it by disguise: adorning themselves with strips of kelp and other debris, they pretend to be something they are not \u2013 and so escape their enemies. Nature amply rewards successful deceivers by allowing them to survive long enough to mate and reproduce. So it may come as no surprise to learn that human beings \u2013 who, according to psychologist Gerald Johnson of the University of South California, lie about 200 times a day, roughly one untruth every 5 minutes \u2013 often deceive for exactly the same reasons: to save their own skins or to get something they can\u2019t get by other means.

But knowing how to catch deceit can be just as important a survival skill as knowing how to tell a lie and get away with it. A person able to spot falsehood quickly is unlikely to be swindled by an unscrupulous business associate or hoodwinked by a devious spouse. Luckily, nature provides more than enough clues to trap dissemblers in their own tangled webs \u2013 if you know where to look. By closely observing facial expressions, body language and tone of voice, practically anyone can recognise the tell-tale signs of lying. Researchers are even programming computers \u2013 like those used on Lie Detector \u2013 to get at the truth by analysing the same physical cues available to the naked eye and ear. \u201cWith the proper training, many people can learn to reliably detect lies,\u201d says Paul Ekman, professor of psychology at the University of California, San Francisco, who has spent the past 15 years studying the secret art of deception.

In order to know what kind of lies work best, successful liars need to accurately assess other people\u2019s emotional states. Ekman\u2019s research shows that this same emotional intelligence is essential for good lie detectors, too. The emotional state to watch out for is stress, the conflict most liars feel between the truth and what they actually say and do.

Even high-tech lie detectors don\u2019t detect lies as such; they merely detect the physical cues of emotions, which may or may not correspond to what the person being tested is saying. Polygraphs, for instance, measure respiration, heart rate and skin conductivity, which tend to increase when people are nervous \u2013 as they usually are when lying. Nervous people typically perspire, and the salts contained in perspiration conduct electricity. That\u2019s why a sudden leap in skin conductivity indicates nervousness \u2013 about getting caught, perhaps \u2013 which may, in turn, suggest that someone is being economical with the truth. On the other hand, it might also mean that the lights in the television studio are too hot \u2013 which is one reason polygraph tests are inadmissible in court. \u201cGood lie detectors don\u2019t rely on a single thing,\u201d says Ekman, \u201cbut interpret clusters of verbal and non-verbal clues that suggest someone might be lying.\u201d

The clues are written all over the face. Because the musculature of the face is directly connected to the areas of the brain that process emotion, the countenance can be a window to the soul. Neurological studies even suggest that genuine emotions travel different pathways through the brain than insincere ones. If a patient paralysed by stroke on one side of the face, for example, is asked to smile deliberately, only the mobile side of the mouth is raised. But tell that same person a funny joke, and the patient breaks into a full and spontaneous smile. Very few people \u2013 most notably, actors and politicians \u2013 are able to consciously control all of their facial expressions. Lies can often be caught when the liars\u2019 true feelings briefly leak through the mask of deception. \u201cWe don\u2019t think before we feel,\u201d Ekman says. \u201cExpressions tend to show up on the face before we\u2019re even conscious of experiencing an emotion.\u201d

One of the most difficult facial expressions to fake \u2013 or conceal, if it\u2019s genuinely felt \u2013 is sadness. When someone is truly sad, the forehead wrinkles with grief and the inner corners of the eyebrows are pulled up. Fewer than 15% of the people Ekman tested were able to produce this eyebrow movement voluntarily. By contrast, the lowering of the eyebrows associated with an angry scowl can be replicated at will by almost everybody. \u201cIf someone claims they are sad and the inner corners of their eyebrows don\u2019t go up,\u201d Ekman says, \u201cthe sadness is probably false.\u201d

The smile, on the other hand, is one of the easiest facial expressions to counterfeit. It takes just two muscles \u2013 the zygomaticus major muscles that extend from the cheekbones to the corners of the lips \u2013 to produce a grin. But there\u2019s a catch. A genuine smile affects not only the corners of the lips but also the orbicularis oculi, the muscle around the eye that produces the distinctive \u201ccrow\u2019s feet\u201d associated with people who laugh a lot. A counterfeit grin can be unmasked if the corners of the lips go up, the eyes crinkle, but the inner corners of the eyebrows are not lowered, a movement controlled by the orbicularis oculi that is difficult to fake. The absence of lowered eyebrows is one reason why a false smile looks so strained and stiff.`,
            passageSource: "IELTS Academic Practice",
            instructions: "You should spend about 20 minutes on Questions 1-13, which are based on Reading Passage 1.",
            questionGroups: [
                // Questions 1-5: Yes/No/Not Given
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 1,
                    endQuestion: 5,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "In boxes 1-5 on your answer sheet, write",
                    optionsExplanation: [
                        { option: "YES", explanation: "if the statement agrees with the information" },
                        { option: "NO", explanation: "if the statement contradicts the information" },
                        { option: "NOT GIVEN", explanation: "if there is no information on this" },
                    ],
                    statements: [
                        { questionNumber: 1, text: "All living animals can lie.", correctAnswer: "NO" },
                        { questionNumber: 2, text: "Some people tell lies for self-preservation.", correctAnswer: "YES" },
                        { questionNumber: 3, text: "Scientists have used computers to analyse which part of the brain is responsible for telling lies.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 4, text: "Lying as a survival skill is more important than detecting a lie.", correctAnswer: "NOT GIVEN" },
                        { questionNumber: 5, text: "To be a good liar, one has to understand other people\u2019s emotions.", correctAnswer: "YES" },
                    ],
                },
                // Questions 6-9: Multiple Choice Full
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 6,
                    endQuestion: 9,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write your answers in boxes 6-9 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 6,
                            questionText: "How does the lie detector work?",
                            options: [
                                { letter: "A", text: "It detects whether one\u2019s emotional state is stable." },
                                { letter: "B", text: "It detects one\u2019s brain activity level." },
                                { letter: "C", text: "It detects body behaviour during one\u2019s verbal response." },
                                { letter: "D", text: "It analyses one\u2019s verbal response word by word." },
                            ],
                            correctAnswer: "C",
                        },
                        {
                            questionNumber: 7,
                            questionText: "Lie detectors can\u2019t be used as evidence in a court of law because",
                            options: [
                                { letter: "A", text: "lights often cause lie detectors to malfunction." },
                                { letter: "B", text: "they are based on too many verbal and non-verbal clues." },
                                { letter: "C", text: "polygraph tests are often inaccurate." },
                                { letter: "D", text: "there may be many causes of certain body behaviour." },
                            ],
                            correctAnswer: "D",
                        },
                        {
                            questionNumber: 8,
                            questionText: "Why does the author mention the paralysed patients?",
                            options: [
                                { letter: "A", text: "To demonstrate how a paralysed patient smiles." },
                                { letter: "B", text: "To show the relation between true emotions and body behaviour." },
                                { letter: "C", text: "To examine how they were paralysed." },
                                { letter: "D", text: "To show the importance of happiness from recovery." },
                            ],
                            correctAnswer: "B",
                        },
                        {
                            questionNumber: 9,
                            questionText: "The author uses politicians to exemplify that they can",
                            options: [
                                { letter: "A", text: "have emotions." },
                                { letter: "B", text: "imitate actors." },
                                { letter: "C", text: "detect other people\u2019s lies." },
                                { letter: "D", text: "mask their true feelings." },
                            ],
                            correctAnswer: "D",
                        },
                    ],
                },
                // Questions 10-13: Matching Features (classify facial traits)
                {
                    groupType: "matching-features",
                    startQuestion: 10,
                    endQuestion: 13,
                    mainInstruction: "Classify the following facial traits as referring to",
                    subInstruction: "Write the correct letter A, B or C in boxes 10-13 on your answer sheet.",
                    featureListTitle: "Emotions",
                    featureOptions: [
                        { letter: "A", text: "sadness" },
                        { letter: "B", text: "anger" },
                        { letter: "C", text: "happiness" },
                    ],
                    matchingItems: [
                        { questionNumber: 10, text: "Inner corners of eyebrows raised", correctAnswer: "A" },
                        { questionNumber: 11, text: "The whole eyebrows lowered", correctAnswer: "B" },
                        { questionNumber: 12, text: "Lines formed around the eyes", correctAnswer: "C" },
                        { questionNumber: 13, text: "Lines form above the eyebrows", correctAnswer: "A" },
                    ],
                },
            ],
            questions: [
                // Q1-5: Yes/No/Not Given
                { questionNumber: 1, questionType: "yes-no-not-given", questionText: "All living animals can lie.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 2, questionType: "yes-no-not-given", questionText: "Some people tell lies for self-preservation.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 3, questionType: "yes-no-not-given", questionText: "Scientists have used computers to analyse which part of the brain is responsible for telling lies.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 4, questionType: "yes-no-not-given", questionText: "Lying as a survival skill is more important than detecting a lie.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 5, questionType: "yes-no-not-given", questionText: "To be a good liar, one has to understand other people\u2019s emotions.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                // Q6-9: Multiple Choice Full
                { questionNumber: 6, questionType: "multiple-choice-full", questionText: "How does the lie detector work?", correctAnswer: "C", marks: 1 },
                { questionNumber: 7, questionType: "multiple-choice-full", questionText: "Lie detectors can\u2019t be used as evidence in a court of law because", correctAnswer: "D", marks: 1 },
                { questionNumber: 8, questionType: "multiple-choice-full", questionText: "Why does the author mention the paralysed patients?", correctAnswer: "B", marks: 1 },
                { questionNumber: 9, questionType: "multiple-choice-full", questionText: "The author uses politicians to exemplify that they can", correctAnswer: "D", marks: 1 },
                // Q10-13: Matching Features
                { questionNumber: 10, questionType: "matching-features", questionText: "Inner corners of eyebrows raised", options: ["A", "B", "C"], correctAnswer: "A", marks: 1 },
                { questionNumber: 11, questionType: "matching-features", questionText: "The whole eyebrows lowered", options: ["A", "B", "C"], correctAnswer: "B", marks: 1 },
                { questionNumber: 12, questionType: "matching-features", questionText: "Lines formed around the eyes", options: ["A", "B", "C"], correctAnswer: "C", marks: 1 },
                { questionNumber: 13, questionType: "matching-features", questionText: "Lines form above the eyebrows", options: ["A", "B", "C"], correctAnswer: "A", marks: 1 },
            ],
        },
        // ═══════════════════════════════════════════
        // SECTION 2: Being Left-handed in a Right-handed World (Q14-26)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "Being Left-handed in a Right-handed World",
            passage: `The world is designed for right-handed people. Why does a tenth of the population prefer the left?

A The probability that two right-handed people would have a left-handed child is only about 9.5 percent. The chance rises to 19.5 percent if one parent is a lefty and 26 percent if both parents are left-handed. The preference, however, could also stem from an infant\u2019s imitation of his parents. To test genetic influence, starting in the 1970s British biologist Marian Annett of the University of Leicester hypothesised that no single gene determines handedness. Rather, during fetal development, a certain molecular factor helps to strengthen the brain\u2019s left hemisphere, which increases the probability that the right hand will be dominant, because the left side of the brain controls the right side of the body, and vice versa. Among the minority of people who lack this factor, handedness develops entirely by chance. Research conducted on twins complicates the theory, however. One in five sets of identical twins involves one right-handed and one left-handed person, despite the fact that their genetic material is the same. Genes, therefore, are not solely responsible for handedness.

B Genetic theory is also undermined by results from Peter Hepper and his team at Queen\u2019s University in Belfast, Ireland. In 2004 the psychologists used ultrasound to show that by the 15th week of pregnancy, fetuses already have a preference as to which thumb they suck. In most cases, the preference continued after birth. At 15 weeks, though, the brain does not yet have control over the body\u2019s limbs. Hepper speculates that fetuses tend to prefer whichever side of the body is developing quicker and that their movements, in turn, influence the brain\u2019s development. Whether this early preference is temporary or holds up throughout development and infancy is unknown. Genetic predetermination is also contradicted by the widespread observation that children do not settle on either their right or left hand until they are two or three years old.

C But even if these correlations were true, they did not explain what actually causes left-handedness. Furthermore, specialisation on either side of the body is common among animals. Cats will favour one paw over another when fishing toys out from under the couch. Horses stomp more frequently with one hoof than the other. Certain crabs motion predominantly with the left or right claw. In evolutionary terms, focusing power and dexterity in one limb is more efficient than having to train two, four or even eight limbs equally. Yet for most animals, the preference for one side or the other is seemingly random. The overwhelming dominance of the right hand is associated only with humans. That fact directs attention toward the brain\u2019s two hemispheres and perhaps toward language.

D Interest in hemispheres dates back to at least 1836. That year, at a medical conference, French physician Marc Dax reported on an unusual commonality among his patients. During his many years as a country doctor, Dax had encountered more than 40 men and women for whom speech was difficult, the result of some kind of brain damage. What was unique was that every individual suffered damage to the left side of the brain. At the conference, Dax elaborated on his theory, stating that each half of the brain was responsible for certain functions and that the left hemisphere controlled speech. Other experts showed little interest in the Frenchman\u2019s ideas. Over time, however, scientists found more and more evidence of people experiencing speech difficulties following injury to the left brain. Patients with damage to the right hemisphere most often displayed disruptions in perception or concentration. Major advancements in understanding the brain\u2019s asymmetry were made in the 1960s as a result of so-called split-brain surgery, developed to help patients with epilepsy. During this operation, doctors severed the corpus callosum \u2013 the nerve bundle that connects the two hemispheres. The surgical cut also stopped almost all normal communication between the two hemispheres, which offered researchers the opportunity to investigate each side\u2019s activity.

E In 1949 neurosurgeon Juhn Wada devised the first test to provide access to the brain\u2019s functional organisation of language. By injecting an anaesthetic into the right or left carotid artery, Wada temporarily paralysed one side of a healthy brain, enabling him to more closely study the other side\u2019s capabilities. Based on this approach, Brenda Milner and the late Theodore Rasmussen of the Montreal Neurological Institute published a major study in 1975 that confirmed the theory that country doctor Dax had formulated nearly 140 years earlier: in 96 percent of right-handed people, language is processed much more intensely in the left hemisphere. The correlation is not as clear in lefties, however. For two-thirds of them, the left hemisphere is still the most active language processor. But for the remaining third, either the right side is dominant or both sides work equally, controlling different language functions. That last statistic has slowed acceptance of the notion that the predominance of right-handedness is driven by left-hemisphere dominance in language processing. It is not at all clear why language control should somehow have dragged the control of body movement with it. Some experts think one reason the left hemisphere reigns over language is because the organs of speech processing \u2013 the larynx and tongue \u2013 are positioned on the body\u2019s symmetry axis. Because these structures were centred, it may have been unclear, in evolutionary terms, which side of the brain should control them, and it seems unlikely that shared operation would result in smooth motor activity. Language and handedness could have developed preferentially for very different reasons as well. For example, some researchers, including evolutionary psychologist Michael C. Corballis of the University of Auckland in New Zealand, think that the origin of human speech lies in gestures. Gestures predated words and helped language emerge. If the left hemisphere began to dominate speech, it would have dominated gestures, too, and because the left brain controls the right side of the body, the right hand developed more strongly.

F Perhaps we will know more soon. In the meantime, we can revel in what, if any, differences handedness brings to our human talents. Popular wisdom says right-handed, left-brained people excel at logical, analytical thinking. Left-handed, right-brained individuals are thought to possess more creative skills and may be better at combining the functional features emergent in both sides of the brain. Yet some neuroscientists see such claims as pure speculation. Fewer scientists are ready to claim that left-handedness means greater creative potential. Yet lefties are prevalent among artists, composers and the generally acknowledged great political thinkers. Possibly if these individuals are among the lefties whose language abilities are evenly distributed between hemispheres, the intense interplay required could lead to unusual mental capabilities.

G Or perhaps some lefties become highly creative simply because they must be more clever to get by in our right-handed world. This battle, which begins during the very early stages of childhood, may lay the groundwork for exceptional achievements.`,
            passageSource: "IELTS Academic Practice",
            instructions: "You should spend about 20 minutes on Questions 14-26, which are based on Reading Passage 2.",
            questionGroups: [
                // Questions 14-18: Matching Information
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 18,
                    mainInstruction: "Reading Passage 2 has seven sections A-G. Which section contains the following information?",
                    subInstruction: "Write the correct letter A-G in boxes 14-18 on your answer sheet.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G"],
                    matchingItems: [
                        { questionNumber: 14, text: "Preference of using one side of the body in animal species.", correctAnswer: "C" },
                        { questionNumber: 15, text: "How likely one-handedness is born.", correctAnswer: "A" },
                        { questionNumber: 16, text: "The age when the preference of using one hand is settled.", correctAnswer: "B" },
                        { questionNumber: 17, text: "Occupations usually found in left-handed population.", correctAnswer: "F" },
                        { questionNumber: 18, text: "A reference to an early discovery of each hemisphere\u2019s function.", correctAnswer: "D" },
                    ],
                },
                // Questions 19-22: Matching Features (researchers → findings)
                {
                    groupType: "matching-features",
                    startQuestion: 19,
                    endQuestion: 22,
                    mainInstruction: "Look at the following researchers (Questions 19-22) and the list of findings below. Match each researcher with the correct finding.",
                    subInstruction: "Write the correct letter A-G in boxes 19-22 on your answer sheet.",
                    featureListTitle: "List of Findings",
                    featureOptions: [
                        { letter: "A", text: "Early language evolution is correlated to body movement and thus affecting the preference of use of one hand." },
                        { letter: "B", text: "No single biological component determines the handedness of a child." },
                        { letter: "C", text: "Each hemisphere of the brain is in charge of different body functions." },
                        { letter: "D", text: "Language process is mainly centered in the left-hemisphere of the brain." },
                        { letter: "E", text: "Speech difficulties are often caused by brain damage." },
                        { letter: "F", text: "The rate of development of one side of the body has influence on hemisphere preference in fetus." },
                        { letter: "G", text: "Brain function already matures by the end of the fetal stage." },
                    ],
                    matchingItems: [
                        { questionNumber: 19, text: "Marian Annett", correctAnswer: "B" },
                        { questionNumber: 20, text: "Peter Hepper", correctAnswer: "F" },
                        { questionNumber: 21, text: "Brenda Milner & Theodore Rasmussen", correctAnswer: "D" },
                        { questionNumber: 22, text: "Michael Corballis", correctAnswer: "A" },
                    ],
                },
                // Questions 23-26: Yes/No/Not Given
                {
                    groupType: "yes-no-not-given",
                    startQuestion: 23,
                    endQuestion: 26,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 2?",
                    subInstruction: "In boxes 23-26 on your answer sheet, write",
                    optionsExplanation: [
                        { option: "YES", explanation: "if the statement agrees with the information" },
                        { option: "NO", explanation: "if the statement contradicts the information" },
                        { option: "NOT GIVEN", explanation: "if there is no information on this" },
                    ],
                    statements: [
                        { questionNumber: 23, text: "The study of twins shows that genetic determination is not the only factor for left-handedness.", correctAnswer: "YES" },
                        { questionNumber: 24, text: "Marc Dax\u2019s report was widely accepted in his time.", correctAnswer: "NO" },
                        { questionNumber: 25, text: "Juhn Wada based his findings on his research of people with language problems.", correctAnswer: "NO" },
                        { questionNumber: 26, text: "There tend to be more men with left-handedness than women.", correctAnswer: "NOT GIVEN" },
                    ],
                },
            ],
            questions: [
                // Q14-18: Matching Information
                { questionNumber: 14, questionType: "matching-information", questionText: "Preference of using one side of the body in animal species.", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "C", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "How likely one-handedness is born.", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "The age when the preference of using one hand is settled.", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "Occupations usually found in left-handed population.", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "A reference to an early discovery of each hemisphere\u2019s function.", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
                // Q19-22: Matching Features
                { questionNumber: 19, questionType: "matching-features", questionText: "Marian Annett", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "B", marks: 1 },
                { questionNumber: 20, questionType: "matching-features", questionText: "Peter Hepper", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "F", marks: 1 },
                { questionNumber: 21, questionType: "matching-features", questionText: "Brenda Milner & Theodore Rasmussen", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "D", marks: 1 },
                { questionNumber: 22, questionType: "matching-features", questionText: "Michael Corballis", options: ["A", "B", "C", "D", "E", "F", "G"], correctAnswer: "A", marks: 1 },
                // Q23-26: Yes/No/Not Given
                { questionNumber: 23, questionType: "yes-no-not-given", questionText: "The study of twins shows that genetic determination is not the only factor for left-handedness.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 24, questionType: "yes-no-not-given", questionText: "Marc Dax\u2019s report was widely accepted in his time.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 25, questionType: "yes-no-not-given", questionText: "Juhn Wada based his findings on his research of people with language problems.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NO", marks: 1 },
                { questionNumber: 26, questionType: "yes-no-not-given", questionText: "There tend to be more men with left-handedness than women.", options: ["YES", "NO", "NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
            ],
        },
        // ═══════════════════════════════════════════
        // SECTION 3: What is a dinosaur? (Q27-40)
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "What is a dinosaur?",
            passage: `A Although the name dinosaur is derived from the Greek for \u201cterrible lizard\u201d, dinosaurs were not, in fact, lizards at all. Like lizards, dinosaurs are included in the class Reptilia, or reptiles, one of the five main classes of Vertebrata, animals with backbones. However, at the next level of classification, within reptiles, significant differences in the skeletal anatomy of lizards and dinosaurs have led scientists to place these groups of animals into two different superorders: Lepidosauria, or lepidosaurs, and Archosauria, or archosaurs.

B Classified as lepidosaurs are lizards and snakes and their prehistoric ancestors. Included among the archosaurs, or \u201cruling reptiles\u201d, are prehistoric and modern crocodiles, and the now extinct thecodonts, pterosaurs and dinosaurs. Palaeontologists believe that both dinosaurs and crocodiles evolved, in the later years of the Triassic Period (c. 248-208 million years ago), from creatures called pseudosuchian thecodonts. Lizards, snakes and different types of thecodont are believed to have evolved earlier in the Triassic Period from reptiles known as eosuchians.

C The most important skeletal differences between dinosaurs and other archosaurs are in the bones of the skull, pelvis and limbs. Dinosaur skulls are found in a great range of shapes and sizes, reflecting the different eating habits and lifestyles of a large and varied group of animals that dominated life on Earth for an extraordinary 165 million years. However, unlike the skulls of any other known animals, the skulls of dinosaurs had two long bones known as vomers. These bones extended on either side of the head, from the front of the snout to the level of the holes on the skull known as the antorbital fenestra, situated in front of the dinosaur\u2019s orbits or eye sockets.

D All dinosaurs, whether large or small, quadrupedal or bipedal, fleet-footed or slow-moving, shared a common body plan. Identification of this plan makes it possible to differentiate dinosaurs from any other types of animal, even other archosaurs. Most significantly, in dinosaurs, the pelvis and femur had evolved so that the hind limbs were held vertically beneath the body, rather than sprawling out to the sides like the limbs of a lizard. The femur of a dinosaur had a sharply in-turned neck and a ball-shaped head, which slotted into a fully open acetabulum or hip socket. A supra-acetabular crest helped prevent dislocation of the femur. The position of the knee joint, aligned below the acetabulum, made it possible for the whole hind limb to swing backwards and forwards. This unique combination of features gave dinosaurs what is known as a \u201cfully improved gait\u201d. Evolution of this highly efficient method of walking also developed in mammals, but among reptiles, it occurred only in dinosaurs.

E For the purpose of further classification, dinosaurs are divided into two orders: Saurischia, or saurischian dinosaurs, and Ornithischia, or ornithischian dinosaurs. This division is made on the basis of their pelvic anatomy. All dinosaurs had a pelvic girdle with each side comprised of three bones: the pubis, ilium and ischium. However, the orientation of these bones follows one of two patterns. In saurischian dinosaurs, also known as lizard-hipped dinosaurs, the pubis points forwards, as is usual in most types of reptile. By contrast, in ornithischian, or bird-hipped, dinosaurs, the pubis points backwards towards the rear of the animal, which is also true of birds.

F Of the two orders of dinosaurs, the Saurischia was the larger and the first to evolve. It is divided into two suborders: Therapoda, or therapods, and Sauropodomorpha, or sauropodomorphs. The therapods, or \u201cbeast feet\u201d, were bipedal, predatory carnivores. They ranged in size from the mighty Tyrannosaurus rex, 12m long, 5.6m tall and weighing an estimated 6.4 tonnes, to the smallest known dinosaur, Compsognathus, a mere 1.4m long and estimated 3kg in weight when fully grown. The sauropodomorphs, or \u201clizard feet forms\u201d, included both bipedal and quadrupedal dinosaurs. Some sauropodomorphs were carnivorous or omnivorous but later species were typically herbivorous. They included some of the largest and best-known of all dinosaurs, such as Diplodocus, a huge quadruped with an elephant-like body, a long, thin tail and neck that gave it a total length of 27m, and a tiny head.

G Ornithischian dinosaurs were bipedal or quadrupedal herbivores. They are now usually divided into three suborders: Ornithipoda, Thyreophora and Marginocephalia. The ornithopods, or \u201cbird feet\u201d, both large and small, could walk or run on their long hind legs, balancing their body by holding their tails stiffly off the ground behind them. An example is Iguanodon, up to 9m long, 5m tall and weighing 4.5 tonnes. The thyreophorans, or \u201cshield bearers\u201d, also known as armoured dinosaurs, were quadrupeds with rows of protective bony spikes, studs, or plates along their backs and tails. They included Stegosaurus, 9m long and weighing 2 tonnes.

H The marginocephalians, or \u201cmargined heads\u201d, were bipedal or quadrupedal ornithischians with a deep bony frill or narrow shelf at the back of the skull. An example is Triceratops, a rhinoceros-like dinosaur, 9m long, weighing 5.4 tonnes and bearing a prominent neck frill and three large horns.`,
            passageSource: "IELTS Academic Practice",
            instructions: "You should spend about 20 minutes on Questions 27-40, which are based on Reading Passage 3.",
            questionGroups: [
                // Questions 27-33: Matching Headings (with example Paragraph H → x)
                {
                    groupType: "matching-headings",
                    startQuestion: 27,
                    endQuestion: 33,
                    mainInstruction: "Reading Passage 3 has 8 paragraphs (A-H). Choose the most suitable heading for each paragraph from the List of Headings below.",
                    subInstruction: "Write the appropriate numbers (i-xiii) in boxes 27-33 on your answer sheet. NB There are more headings than paragraphs, so you will not use all of them.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "165 million years" },
                        { numeral: "ii", text: "The body plan of archosaurs" },
                        { numeral: "iii", text: "Dinosaurs \u2013 terrible lizards" },
                        { numeral: "iv", text: "Classification according to pelvic anatomy" },
                        { numeral: "v", text: "The suborders of Saurischia" },
                        { numeral: "vi", text: "Lizards and dinosaurs \u2013 two distinct superorders" },
                        { numeral: "vii", text: "Unique body plan helps identify dinosaurs from other animals" },
                        { numeral: "viii", text: "Herbivore dinosaurs" },
                        { numeral: "ix", text: "Lepidosaurs" },
                        { numeral: "x", text: "Frills and shelves" },
                        { numeral: "xi", text: "The origins of dinosaurs and lizards" },
                        { numeral: "xii", text: "Bird-hipped dinosaurs" },
                        { numeral: "xiii", text: "Skull bones distinguish dinosaurs from other archosaurs" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii"],
                    exampleItems: [
                        { text: "Paragraph H", answer: "x" },
                    ],
                    matchingItems: [
                        { questionNumber: 27, text: "Paragraph A", correctAnswer: "vi" },
                        { questionNumber: 28, text: "Paragraph B", correctAnswer: "xi" },
                        { questionNumber: 29, text: "Paragraph C", correctAnswer: "xiii" },
                        { questionNumber: 30, text: "Paragraph D", correctAnswer: "vii" },
                        { questionNumber: 31, text: "Paragraph E", correctAnswer: "iv" },
                        { questionNumber: 32, text: "Paragraph F", correctAnswer: "v" },
                        { questionNumber: 33, text: "Paragraph G", correctAnswer: "viii" },
                    ],
                },
                // Questions 34-36: Sentence Completion
                {
                    groupType: "sentence-completion",
                    startQuestion: 34,
                    endQuestion: 36,
                    mainInstruction: "Complete the sentences below.",
                    subInstruction: "Use NO MORE THAN THREE WORDS from the passage for each blank space. Write your answers in boxes 34-36 on your answer sheet.",
                    statements: [
                        { questionNumber: 34, text: "Lizards and dinosaurs are classified into two different superorders because of the difference in their __________.", correctAnswer: "skeletal anatomy" },
                        { questionNumber: 35, text: "In the Triassic Period, __________ evolved into thecodonts, for example, lizards and snakes.", correctAnswer: "eosuchians" },
                        { questionNumber: 36, text: "Dinosaur skulls differed from those of any other known animals because of the presence of vomers __________.", correctAnswer: "on either side" },
                    ],
                },
                // Questions 37-40: Matching Features (Dinosaurs → features)
                {
                    groupType: "matching-features",
                    startQuestion: 37,
                    endQuestion: 40,
                    mainInstruction: "Choose one phrase (A-H) from the List of Features to match with the Dinosaurs listed below.",
                    subInstruction: "Write the appropriate letters (A-H) in boxes 37-40 on your answer sheet. NB There are more phrases than sentences, so you will not need to use them all. You may use each phrase once only.",
                    featureListTitle: "List of Features",
                    featureOptions: [
                        { letter: "A", text: "are both divided into two orders." },
                        { letter: "B", text: "the former had a \u201cfully improved gait\u201d." },
                        { letter: "C", text: "were not usually very heavy." },
                        { letter: "D", text: "could walk or run on their back legs." },
                        { letter: "E", text: "their hind limbs sprawled out to the side." },
                        { letter: "F", text: "walked or ran on four legs, rather than two." },
                        { letter: "G", text: "both had a pelvic girdle comprising six bones." },
                        { letter: "H", text: "did not always eat meat." },
                    ],
                    matchingItems: [
                        { questionNumber: 37, text: "Dinosaurs differed from lizards, because", correctAnswer: "B" },
                        { questionNumber: 38, text: "Saurischian and ornithischian dinosaurs", correctAnswer: "G" },
                        { questionNumber: 39, text: "Unlike therapods, sauropodomorphs", correctAnswer: "H" },
                        { questionNumber: 40, text: "Some dinosaurs used their tails to balance, others", correctAnswer: "F" },
                    ],
                },
            ],
            questions: [
                // Q27-33: Matching Headings
                { questionNumber: 27, questionType: "matching-headings", questionText: "Paragraph A", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii"], correctAnswer: "vi", marks: 1 },
                { questionNumber: 28, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii"], correctAnswer: "xi", marks: 1 },
                { questionNumber: 29, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii"], correctAnswer: "xiii", marks: 1 },
                { questionNumber: 30, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii"], correctAnswer: "vii", marks: 1 },
                { questionNumber: 31, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii"], correctAnswer: "iv", marks: 1 },
                { questionNumber: 32, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii"], correctAnswer: "v", marks: 1 },
                { questionNumber: 33, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x", "xi", "xii", "xiii"], correctAnswer: "viii", marks: 1 },
                // Q34-36: Sentence Completion
                { questionNumber: 34, questionType: "sentence-completion", questionText: "Lizards and dinosaurs are classified into two different superorders because of the difference in their __________.", correctAnswer: "skeletal anatomy", acceptableAnswers: ["skeletal anatomy"], marks: 1, wordLimit: 3 },
                { questionNumber: 35, questionType: "sentence-completion", questionText: "In the Triassic Period, __________ evolved into thecodonts, for example, lizards and snakes.", correctAnswer: "eosuchians", acceptableAnswers: ["eosuchians"], marks: 1, wordLimit: 3 },
                { questionNumber: 36, questionType: "sentence-completion", questionText: "Dinosaur skulls differed from those of any other known animals because of the presence of vomers __________.", correctAnswer: "on either side", acceptableAnswers: ["on either side", "on either side of the head"], marks: 1, wordLimit: 3 },
                // Q37-40: Matching Features
                { questionNumber: 37, questionType: "matching-features", questionText: "Dinosaurs differed from lizards, because", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "B", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "Saurischian and ornithischian dinosaurs", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "G", marks: 1 },
                { questionNumber: 39, questionType: "matching-features", questionText: "Unlike therapods, sauropodomorphs", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "H", marks: 1 },
                { questionNumber: 40, questionType: "matching-features", questionText: "Some dinosaurs used their tails to balance, others", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "F", marks: 1 },
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
            console.log(`\u2705 Reading Mock Test 03 (${readingTest.testId}) UPDATED successfully!`);
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) {
                console.log("\u274c Admin user not found. Please create an admin user first.");
                process.exit(1);
            }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log(`\u2705 Reading Mock Test 03 (${readingTest.testId}) CREATED successfully!`);
        }

        const verify = await ReadingTest.findOne({ testId: readingTest.testId });
        if (verify) {
            const sections = (verify as any).sections || [];
            console.log(`\n\ud83d\udcca Verification:`);
            console.log(`   Title: ${(verify as any).title}`);
            console.log(`   Test ID: ${(verify as any).testId}`);
            console.log(`   Test Number: ${(verify as any).testNumber}`);
            console.log(`   isActive: ${(verify as any).isActive}`);
            console.log(`   Total Questions: ${(verify as any).totalQuestions}`);
            sections.forEach((s: any, i: number) => {
                console.log(`   Section ${i + 1}: "${s.title}" | Groups: ${s.questionGroups?.length || 0} | Qs: ${s.questions?.length || 0}`);
            });
        }

        await mongoose.disconnect();
        process.exit(0);
    } catch (error) {
        console.error("\u274c Error:", error);
        process.exit(1);
    }
}

seedTest();

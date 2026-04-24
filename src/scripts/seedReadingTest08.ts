import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_AC_008",
    testNumber: 108,
    testType: "academic" as const,
    title: "Reading Mock Test 08 - Academic",
    description: "IELTS Academic Reading Test featuring passages on Roller Coasters, Monkeys and Forests, and Telegraph Lines",
    source: "IELTS Academic Practice",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══ SECTION 1: Roller Coaster (Q1-13) ═══
        {
            sectionNumber: 1,
            title: "Roller Coaster",
            passage: `A 600 years ago, roller coaster pioneers never would have imagined the advancements that have been made to create the roller coasters of today. The tallest and fastest roller coaster in the world is the Kingda Ka, a coaster in New Jersey that launches its passengers from zero to 128 miles per hour in 3.5 seconds (most sports cars take over four seconds to get to just 60 miles per hour). It then heaves its riders skyward at a 90-degree angle (straight up) until it reaches a height of 456 feet, over one and a half football fields, above the ground, before dropping another 418 feet. With that said, roller coasters are about more than just speed and height, they are about the creativity of the designers that build them, each coaster having its own unique way of producing intense thrills at a lesser risk than the average car ride. Roller coasters have evolved drastically over the years, from their primitive beginnings as Russian ice slides, to the metal monsters of today. Their combination of creativity and structural elements make them one of the purest forms of architecture.\n\nB At first glance, a roller coaster is something like a passenger train. It consists of a series of connected cars that move on tracks. But unlike a passenger train, a roller coaster has no engine or power source of its own. For most of the ride, the train is moved by gravity and momentum. To build up this momentum, you need to get the train to the top of the first hill or give it a powerful launch. The traditional lifting mechanism is a long length of chain running up the hill under the track. The chain is fastened in a loop, which is wound around a gear at the top of the hill and another one at the bottom of the hill. The gear at the bottom of the hill is turned by a simple motor. This turns the chain loop so that it continually moves up the hill like a long conveyor belt. The coaster cars grip onto the chain with several chain dogs, sturdy hinged hooks. When the train rolls to the bottom of the hill, the dogs catch onto the chain links. Once the chain dog is hooked, the chain simply pulls the train to the top of the hill. At the summit, the chain dog is released and the train starts its descent down the hill.\n\nC Roller coasters have a long, fascinating history. The direct ancestors of roller coasters were monumental ice slides \u2013 long, steep wooden slides covered in ice, some as high as 70 feet \u2013 that were popular in Russia in the 16th and 17th centuries. Riders shot down the slope in sledges made out of wood or blocks of ice, crash-landing in a sand pile. Coaster historians diverge on the exact evolution of these ice slides into actual rolling carts. The most widespread account is that a few entrepreneurial Frenchmen imported the ice slide idea to France. The warmer climate of France tended to melt the ice, so the French started building waxed slides instead, eventually adding wheels to the sledges. In 1817, the Russes a Belleville (Russian Mountains of Belleville) became the first roller coaster where the train was attached to the track (in this case, the train axle fit into a carved groove). The French continued to expand on this idea, coming up with more complex track layouts, with multiple cars and all sorts of twists and turns.\n\nD In comparison to the world\u2019s first roller coaster, there is perhaps an even greater debate over what was America\u2019s first true coaster. Many will say that it is Pennsylvania\u2019s own Mauch Chunk-Summit Hill and Switch Back Railroad. The Mauch Chunk-Summit Hill and Switch Back Railroad was originally America\u2019s second railroad and considered by many to be the greatest coaster of all time. Located in the Lehigh Valley, it was originally used to transport coal from the top of Mount Pisgah to the bottom of Mount Jefferson, until Josiah White, a mining entrepreneur, had the idea of turning it into a part-time thrill ride. Because of its immediate popularity, it soon became strictly a passenger train. A steam engine would haul passengers to the top of the mountain, before letting them coast back down, with speeds rumoured to reach 100 miles per hour! The reason that it was called a switchback railroad, a switch backtrack was located at the top \u2013 where the steam engine would let the riders coast back down. This type of track featured a dead end where the steam engine would detach its cars, allowing riders to coast down backwards. The railway went through a couple of minor track changes and name changes over the years but managed to last from 1829 to 1937, over 100 years.\n\nE The coaster craze in America was just starting to build. The creation of the SwitchBack Railway, by La Marcus Thompson, gave roller coasters national attention. Originally built at New York\u2019s Coney Island in 1884, SwitchBack Railways began popping up all over the country. The popularity of these rides may puzzle the modern-day thrill-seeker, due to the mild ride they gave in comparison to the modern-day roller coaster. Guests would pay a nickel to wait in line up to five hours just to go down a pair of side-by-side tracks with gradual hills that vehicles coasted down at top speed around six miles per hour. Regardless, Switchback Railways were very popular, and sparked many people, including Thompson, to design coasters that were bigger and better.\n\nF The 1910s and 1920s were probably the best decades that the roller coaster has ever seen. The new wave of technology, such as the \u201cunstop wheels\u201d, an arrangement that kept a coaster\u2019s wheels to its tracks by resisting high gravitational forces, showed coasters a realm of possibilities that have never been seen before. In 1919, North America alone had about 1,500 roller coasters, a number that was rising rampantly. Then, the Great Depression gave a crushing blow to amusement parks all over America. As bad as it was, amusement parks had an optimistic look at the future in the late 1930s. But, in 1942 roller coasters could already feel the effects of World War Two, as they were forced into a shadow of neglect. Most, nearly all of America\u2019s roller coasters were shut down. To this very day, the number of roller coasters in America is just a very tiny fraction of the amount of roller coasters in the 1920s.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 1-13",
            questionGroups: [
                { groupType: "short-answer", startQuestion: 1, endQuestion: 4, mainInstruction: "The working mechanism of a roller-coaster is explained through the diagram.", subInstruction: "Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.", questions: [
                    { questionNumber: 1, questionText: "Traditional roller coasters\u2019 lifting force depends on a long line of _________ for climbing up.", correctAnswer: "chain" },
                    { questionNumber: 2, questionText: "which is connected firmly to a _________ shape track.", correctAnswer: "loop" },
                    { questionNumber: 3, questionText: "There are both _________ on the top and underneath the hill.", correctAnswer: "gears" },
                    { questionNumber: 4, questionText: "and it is powered by a _________ when it takes a turn.", correctAnswer: "simple motor" },
                ]},
                { groupType: "sentence-completion", startQuestion: 5, endQuestion: 10, mainInstruction: "Complete the summary using NO MORE THAN TWO WORDS for each answer.", subInstruction: "", statements: [
                    { questionNumber: 5, text: "The first roller coaster was perhaps originated from Russia which is wrapped up by _________.", correctAnswer: "ice" },
                    { questionNumber: 6, text: "which was introduced into France, and it was modified to _________ because the temperature there would", correctAnswer: "waxed slides" },
                    { questionNumber: 7, text: "_________ the ice.", correctAnswer: "melt" },
                    { questionNumber: 8, text: "This time _________ were installed on the board.", correctAnswer: "wheels" },
                    { questionNumber: 9, text: "In America, it was actually a railroad that was designed to send _________ between two mountains.", correctAnswer: "coal" },
                    { questionNumber: 10, text: "a _________ there allowed riders to slide down back again.", correctAnswer: "dead end" },
                ]},
                { groupType: "yes-no-not-given", startQuestion: 11, endQuestion: 13, mainInstruction: "Do the following statements present the opinion of the writer in the passage?", subInstruction: "Write YES, NO or NOT GIVEN.", statements: [
                    { questionNumber: 11, text: "The most exciting roller coaster in the world is in New Jersey.", correctAnswer: "NOT GIVEN" },
                    { questionNumber: 12, text: "French added more innovation on Russian ice slide including both cars and tracks.", correctAnswer: "YES" },
                    { questionNumber: 13, text: "The Great Depression affected amusement parks yet did not shake the significant role of US roller coasters in the world.", correctAnswer: "NO" },
                ]},
            ],
            questions: [
                { questionNumber: 1, questionType: "short-answer", questionText: "Lifting force depends on a long line of ___.", correctAnswer: "chain", marks: 1 },
                { questionNumber: 2, questionType: "short-answer", questionText: "Connected to a ___ shape track.", correctAnswer: "loop", marks: 1 },
                { questionNumber: 3, questionType: "short-answer", questionText: "Both ___ on top and underneath the hill.", correctAnswer: "gears", acceptableAnswers: ["gear"], marks: 1 },
                { questionNumber: 4, questionType: "short-answer", questionText: "Powered by a ___ when it takes a turn.", correctAnswer: "simple motor", marks: 1 },
                { questionNumber: 5, questionType: "sentence-completion", questionText: "Russia which is wrapped up by ___.", correctAnswer: "ice", marks: 1 },
                { questionNumber: 6, questionType: "sentence-completion", questionText: "Modified to ___.", correctAnswer: "waxed slides", marks: 1 },
                { questionNumber: 7, questionType: "sentence-completion", questionText: "Temperature would ___ the ice.", correctAnswer: "melt", marks: 1 },
                { questionNumber: 8, questionType: "sentence-completion", questionText: "___ were installed on the board.", correctAnswer: "wheels", marks: 1 },
                { questionNumber: 9, questionType: "sentence-completion", questionText: "Designed to send ___ between mountains.", correctAnswer: "coal", marks: 1 },
                { questionNumber: 10, questionType: "sentence-completion", questionText: "A ___ allowed riders to slide down back.", correctAnswer: "dead end", marks: 1 },
                { questionNumber: 11, questionType: "yes-no-not-given", questionText: "The most exciting roller coaster in the world is in New Jersey.", options: ["YES","NO","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 12, questionType: "yes-no-not-given", questionText: "French added more innovation including both cars and tracks.", options: ["YES","NO","NOT GIVEN"], correctAnswer: "YES", marks: 1 },
                { questionNumber: 13, questionType: "yes-no-not-given", questionText: "The Great Depression did not shake the significant role of US roller coasters.", options: ["YES","NO","NOT GIVEN"], correctAnswer: "NO", marks: 1 },
            ],
        },
        // ═══ SECTION 2: Monkeys and Forests (Q14-26) ═══
        {
            sectionNumber: 2,
            title: "Monkeys and Forests",
            passage: `A Ken Glander, a primatologist from Duke University, gazes into the canopy, tracking the female\u2019s movements. Holding a dart gun, he waits with infinite patience for the right moment to shoot. With great care, Glander aims and fires. Hit in the rump, the monkey wobbles. This howler belongs to a population that has lived for decades at Hacienda La Pacifica, a working cattle ranch in Guanacaste province. Other native primates \u2013 white-faced capuchin monkeys and spider monkeys \u2013 once were common in this area, too, but vanished after the Pan-American Highway was built nearby in the 1950s. Most of the surrounding land was clear-cut for pasture.\n\nB Howlers persist at La Pacifica, Glander explains, because they are leaf-eaters. They eat fruit when it\u2019s available but, unlike capuchin and spider monkeys, do not depend on large areas of fruiting trees. \u201cHowlers can survive anyplace you have half a dozen trees because their eating habits are so flexible,\u201d he says. In forests, life is an arms race between trees and the myriad creatures that feed on leaves. Plants have evolved a variety of chemical defenses, ranging from bad-tasting tannins, which bind with plant-produced nutrients, rendering them indigestible, to deadly poisons, such as alkaloids and cyanide.\n\nC All primates, including humans, have some ability to handle plant toxins. \u201cWe can detoxify a dangerous poison known as caffeine, which is deadly to a lot of animals,\u201d Glander says. For leaf-eaters, long-term exposure to a specific plant toxin can increase their ability to defuse the poison and absorb the leaf nutrients. The leaves that grow in regenerating forests, like those at La Pacifica, are actually more howler friendly than those produced by the undisturbed, centuries-old trees that survive farther south, in the Amazon Basin. In younger forests, trees put most of their limited energy into growing wood, leaves and fruit, so they produce much lower levels of the toxin than do well-established, old-growth trees.\n\nD The value of maturing forests to primates is a subject of study at Santa Rosa National Park, about 35 miles northwest of Hacienda La Pacifica. The park hosts populations not only of mantled howlers but also of white-faced capuchins and spider monkeys. Yet the forests there are young, most of them less than 50 years old. Capuchins were the first to begin using the reborn forests when the trees were as young as 14 years. Howlers, larger and heavier than capuchins, need somewhat older trees, with limbs that can support their greater body weight. \u201cHowlers are more resilient than capuchins and spider monkeys for several reasons,\u201d Fedigan explains. \u201cThey can live within a small home range, as long as the trees have the right food for them. Spider monkeys, on the other hand, occupy a huge home range, so they can\u2019t make it in fragmented habitat.\u201d\n\nE Howlers also reproduce faster than do other monkey species in the area. Capuchins don\u2019t bear their first young until about 7 years old, and spider monkeys do so even later, but howlers give birth for the first time at about 3.5 years of age. Also, while a female spider monkey will have a baby about once every four years, well-fed howlers can produce an infant every two years.\n\nF The leaves howlers eat hold plenty of water, so the monkeys can survive away from open streams and water holes. This ability gives them a real advantage over capuchin and spider monkeys, which have suffered during the long, ongoing drought in Guanacaste.\n\nG Growing human population pressures in Central and South America have led to persistent destruction of forests. During the 1990s, about 1.1 million acres of Central American forest were felled yearly. Alejandro Estrada, an ecologist at Estacion de Biologia Los Tuxtlas in Veracruz, Mexico, has been exploring how monkeys survive in a landscape increasingly shaped by humans. He and his colleagues recently studied the ecology of a group of mantled howler monkeys that thrive in a habitat completely altered by humans: a cacao plantation in Tabasco, Mexico. Like many varieties of coffee, cacao plants need shade to grow, so 40 years ago the landowners planted fig, monkeypod and other tall trees to form a protective canopy over their crop. The howlers moved in about 25 years ago after nearby forests were cut. This strange habitat, a hodgepodge of cultivated native and exotic plants, seems to support about as many monkeys as would a same-sized patch of wild forest. The howlers eat the leaves and fruit of the shade trees, leaving the valuable cacao pods alone, so the farmers tolerate them.\n\nH Estrada believes the monkeys bring underappreciated benefits to such farms, dispersing the seeds of fig and other shade trees and fertilizing the soil with faeces. He points out that howler monkeys live in shade coffee and cacao plantations in Nicaragua and Costa Rica as well as in Mexico. Spider monkeys also forage in such plantations, though they need nearby areas of forest to survive in the long term. He hopes that farmers will begin to see the advantages of associating with wild monkeys, which includes potential ecotourism projects. \u201cConservation is usually viewed as a conflict between agricultural practices and the need to preserve nature,\u201d Estrada says. \u201cWe\u2019re moving away from that vision and beginning to consider ways in which agricultural activities may become a tool for the conservation of primates in human-modified landscapes.\u201d`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 14-26",
            questionGroups: [
                { groupType: "matching-information", startQuestion: 14, endQuestion: 19, mainInstruction: "Which paragraph contains the following information?", subInstruction: "Write the correct letter A-H.", paragraphOptions: ["A","B","C","D","E","F","G","H"], matchingItems: [
                    { questionNumber: 14, text: "a reference of reduction in forest inhabitant", correctAnswer: "G" },
                    { questionNumber: 15, text: "Only one species of monkey survived while the other two species were vanished.", correctAnswer: "A" },
                    { questionNumber: 16, text: "a reason for Howler Monkey of choosing new leaves", correctAnswer: "C" },
                    { questionNumber: 17, text: "mention to Howler Monkey\u2019s nutrient and eating habits", correctAnswer: "B" },
                    { questionNumber: 18, text: "a reference of asking farmers\u2019 changing attitude toward wildlife", correctAnswer: "H" },
                    { questionNumber: 19, text: "the advantage for Howler Monkey\u2019s flexibility living in a segmented habitat", correctAnswer: "D" },
                ]},
                { groupType: "matching-features", startQuestion: 20, endQuestion: 22, mainInstruction: "Match each description with the correct place, A-E.", subInstruction: "", featureListTitle: "List of Places", featureOptions: [
                    { letter: "A", text: "Hacienda La Pacifica" },
                    { letter: "B", text: "Santa Rosa National Park" },
                    { letter: "C", text: "a cacao plantation in Tabasco, Mexico" },
                    { letter: "D", text: "Estacion de Biologia Los Tuxtlas in Veracruz, Mexico" },
                    { letter: "E", text: "Amazon Basin" },
                ], paragraphOptions: ["A","B","C","D","E"], matchingItems: [
                    { questionNumber: 20, text: "howler Monkey\u2019s benefit to the local region\u2019s agriculture", correctAnswer: "C" },
                    { questionNumber: 21, text: "The original home for all three native monkeys", correctAnswer: "A" },
                    { questionNumber: 22, text: "A place where Capuchins monkey comes for a better habitat", correctAnswer: "B" },
                ]},
                { groupType: "sentence-completion", startQuestion: 23, endQuestion: 26, mainInstruction: "Complete the sentences below.", subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer.", statements: [
                    { questionNumber: 23, text: "Howlers in La Pacifica since they can feed themselves with the leaf when _________ is not easily found.", correctAnswer: "fruit" },
                    { questionNumber: 24, text: "Howlers have better ability to alleviate the _________, which old and young trees used to protect themselves.", correctAnswer: "plant toxins" },
                    { questionNumber: 25, text: "The _________ rate of Howlers is relatively faster.", correctAnswer: "reproduction" },
                    { questionNumber: 26, text: "The leaves howlers eat hold high content of _________ which ensure them to resist drought.", correctAnswer: "water" },
                ]},
            ],
            questions: [
                { questionNumber: 14, questionType: "matching-information", questionText: "a reference of reduction in forest inhabitant", correctAnswer: "G", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "Only one species survived while other two vanished", correctAnswer: "A", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "a reason for choosing new leaves", correctAnswer: "C", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "Howler Monkey\u2019s nutrient and eating habits", correctAnswer: "B", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "asking farmers\u2019 changing attitude toward wildlife", correctAnswer: "H", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "advantage for flexibility living in segmented habitat", correctAnswer: "D", marks: 1 },
                { questionNumber: 20, questionType: "matching-features", questionText: "howler Monkey\u2019s benefit to agriculture", correctAnswer: "C", marks: 1 },
                { questionNumber: 21, questionType: "matching-features", questionText: "The original home for all three native monkeys", correctAnswer: "A", marks: 1 },
                { questionNumber: 22, questionType: "matching-features", questionText: "Capuchins monkey comes for a better habitat", correctAnswer: "B", marks: 1 },
                { questionNumber: 23, questionType: "sentence-completion", questionText: "feed themselves with leaf when ___ is not found.", correctAnswer: "fruit", marks: 1 },
                { questionNumber: 24, questionType: "sentence-completion", questionText: "better ability to alleviate the ___.", correctAnswer: "plant toxins", acceptableAnswers: ["chemical defenses","poison"], marks: 1 },
                { questionNumber: 25, questionType: "sentence-completion", questionText: "The ___ rate of Howlers is relatively faster.", correctAnswer: "reproduction", acceptableAnswers: ["reproductive"], marks: 1 },
                { questionNumber: 26, questionType: "sentence-completion", questionText: "Leaves hold high content of ___.", correctAnswer: "water", marks: 1 },
            ],
        },
        // ═══ SECTION 3: The History of building telegraph lines (Q27-40) ═══
        {
            sectionNumber: 3,
            title: "The History of Building Telegraph Lines",
            passage: `A The idea of electrical communication seems to have begun as long ago as 1746 when about 200 monks at a monastery in Paris arranged themselves in a line over a mile long, each holding ends of 25 ft iron wires. The abbot, also a scientist, discharged a primitive electrical battery into the wire, giving all the monks a simultaneous electrical shock. \u201cThis all sounds very silly, but is in fact extremely important because, firstly, they all said \u2018ow\u2019 which showed that you were sending a signal right along the line; and, secondly, they all said \u2018ow\u2019 at the same time, and that meant that you were sending the signal very quickly,\u201d explains Tom Standage, author of the Victorian Internet and technology editor at the Economist. Given a more humane detection system, this could be a way of signaling over long distances.\n\nB With wars in Europe and colonies beyond, such a signaling system was urgently needed. All sorts of electrical possibilities were proposed, some of them quite ridiculous. Two Englishmen, William Cooke and Charles Wheatstone came up with a system in which dials were made to point at different letters, but that involved five wires and would have been expensive to construct.\n\nC Much simpler was that of an American, Samuel Morse, whose system only required a single wire to send a code of dots and dashes. At first, it was imagined that only a few highly skilled encoders would be able to use it but it soon became clear that many people could become proficient in Morse code. A system of lines strung on telegraph poles began to spread in Europe and America.\n\nD The next problem was to cross the sea. Britain, as an island with an empire, led the way. Any such cable had to be insulated and the first breakthrough came with the discovery that a rubber-like latex from a tropical tree on the Malay peninsula could do the trick. It was called gutta-percha. The first attempt at a cross channel cable came in 1850. With thin wire and thick insulation, it floated and had to be weighed down with a lead pipe.\n\nE It never worked well as the effect of water on its electrical properties was not understood, and it is reputed that a French fisherman hooked out a section and took it home as a strange new form of seaweed. The cable was too big for a single boat so two had to start in the middle of the Atlantic, join their cables and sail in opposite directions. Amazingly, they succeeded in 1858, and this enabled Queen Victoria to send a telegraph message to President Buchanan. However, the 98-word message took more than 19 hours to send and a misguided attempt to increase the speed by increasing the voltage resulted in the failure of the line a week later.\n\nF By 1870, a submarine cable was heading towards Australia. It seemed likely that it would come ashore at the northern port of Darwin from where it might connect around the coast to Queensland and New South Wales. It was an undertaking more ambitious than spanning an ocean. Flocks of sheep had to be driven with the 400 workers to provide food. They needed horses and bullock carts and, for the parched interior, camels. In the north, tropical rains left the teams flooded. In the centre, it seemed that they would die of thirst.\n\nG The water was not only essential for the construction team. There had to be telegraph repeater stations every few hundred miles to boost the signal and the staff obviously had to have a supply of water. Just as one mapping team was about to give up and resort to drinking brackish water, some aboriginals took pity on them. Altogether, 40,000 telegraph poles were used in the Australian overland wire. Some were cut from trees. Where there were no trees, or where termites ate the wood, steel poles were imported.\n\nH On Thursday, August 22, 1872, the overland line was completed and the first messages could be sent across the continent; and within a few months, Australia was at last in direct contact with England via the submarine cable, too. The line remained in service to bring news of the Japanese attack on Darwin in 1942. It could cost several pounds to send a message and it might take several hours for it to reach its destination on the other side of the globe, but the world would never be the same again. Governments could be in touch with their colonies. Traders could send cargoes based on demand and the latest prices. Newspapers could publish news that had just happened and was not many months old.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 27-40",
            questionGroups: [
                { groupType: "true-false-not-given", startQuestion: 27, endQuestion: 32, mainInstruction: "Do the following statements agree with the information given in Reading Passage?", subInstruction: "Write TRUE, FALSE or NOT GIVEN.", statements: [
                    { questionNumber: 27, text: "In the research of French scientists, the metal lines were used to send a message.", correctAnswer: "TRUE" },
                    { questionNumber: 28, text: "Abbots gave the monks an electrical shock at the same time, which constitutes the exploration of the long-distance signaling.", correctAnswer: "TRUE" },
                    { questionNumber: 29, text: "Using Morse Code to send message need to simplify the message firstly.", correctAnswer: "NOT GIVEN" },
                    { questionNumber: 30, text: "Morse was a famous inventor before he invented the code.", correctAnswer: "NOT GIVEN" },
                    { questionNumber: 31, text: "The water is significant to early telegraph repeater on the continent.", correctAnswer: "TRUE" },
                    { questionNumber: 32, text: "US Government offered fund to the 1st overland line across the continent.", correctAnswer: "NOT GIVEN" },
                ]},
                { groupType: "short-answer", startQuestion: 33, endQuestion: 40, mainInstruction: "Answer the questions below.", subInstruction: "Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.", questions: [
                    { questionNumber: 33, questionText: "Why is the disadvantage for Charles Wheatstone\u2019s telegraph system to fail in the beginning?", correctAnswer: "five wires" },
                    { questionNumber: 34, questionText: "What material was used for insulating cable across the sea?", correctAnswer: "gutta-percha" },
                    { questionNumber: 35, questionText: "What was used by British pioneers to increase the weight of the cable in the sea?", correctAnswer: "lead pipe", acceptableAnswers: ["a lead pipe"] },
                    { questionNumber: 36, questionText: "What did Fisherman mistakenly take the cable as?", correctAnswer: "seaweed" },
                    { questionNumber: 37, questionText: "Who was the message firstly sent to across the Atlantic by the Queen?", correctAnswer: "President Buchanan" },
                    { questionNumber: 38, questionText: "What giant animals were used to carry the cable through the desert?", correctAnswer: "camels" },
                    { questionNumber: 39, questionText: "What weather condition did it delay the construction in north Australia?", correctAnswer: "tropical rains" },
                    { questionNumber: 40, questionText: "How long did it take to send a telegraph message from Australia to England?", correctAnswer: "several hours" },
                ]},
            ],
            questions: [
                { questionNumber: 27, questionType: "true-false-not-given", questionText: "Metal lines were used to send a message.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 28, questionType: "true-false-not-given", questionText: "Monks\u2019 shock constitutes exploration of long-distance signaling.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 29, questionType: "true-false-not-given", questionText: "Morse Code needs to simplify messages first.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 30, questionType: "true-false-not-given", questionText: "Morse was famous before inventing the code.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 31, questionType: "true-false-not-given", questionText: "Water is significant to telegraph repeater.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 32, questionType: "true-false-not-given", questionText: "US Government funded the 1st overland line.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 33, questionType: "short-answer", questionText: "Disadvantage of Wheatstone\u2019s system?", correctAnswer: "five wires", marks: 1 },
                { questionNumber: 34, questionType: "short-answer", questionText: "Material for insulating cable?", correctAnswer: "gutta-percha", marks: 1 },
                { questionNumber: 35, questionType: "short-answer", questionText: "What increased cable weight?", correctAnswer: "lead pipe", acceptableAnswers: ["a lead pipe"], marks: 1 },
                { questionNumber: 36, questionType: "short-answer", questionText: "Fisherman took cable as?", correctAnswer: "seaweed", marks: 1 },
                { questionNumber: 37, questionType: "short-answer", questionText: "Who received Queen\u2019s message?", correctAnswer: "President Buchanan", marks: 1 },
                { questionNumber: 38, questionType: "short-answer", questionText: "Animals used in desert?", correctAnswer: "camels", marks: 1 },
                { questionNumber: 39, questionType: "short-answer", questionText: "Weather delaying north Australia?", correctAnswer: "tropical rains", marks: 1 },
                { questionNumber: 40, questionType: "short-answer", questionText: "Time to send message Australia to England?", correctAnswer: "several hours", marks: 1 },
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
            console.log("\u2705 Reading Test 08 updated successfully!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) { console.log("\u274C No admin user found"); process.exit(1); }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log("\u2705 Reading Test 08 created successfully!");
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

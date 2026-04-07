import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_TEST_09",
    testNumber: 9,
    title: "Reading Mock Test 09 - Academic",
    description: "IELTS Academic Reading Test: History of Refrigeration, Ancient People in Sahara, Texting the Television",
    source: "IELTS Practice Test",
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══ SECTION 1: History of Refrigeration (Q1-14) ═══
        {
            sectionNumber: 1,
            title: "History of Refrigeration",
            passage: `Refrigeration is a process of removing heat, which means cooling an area or a substance below the environmental temperature. Mechanical refrigeration makes use of the evaporation of a liquid refrigerant, which goes through a cycle so that it can be reused. The main cycles include vapour-compression, absorption steam-jet or steam-ejector, and airing. The term \u2018refrigerator\u2019 was first introduced by a Maryland farmer Thomas Moore in 1803, but it is in the 20th century that the appliance we know today first appeared.\n\nPeople used to find various ways to preserve their food before the advent of mechanical refrigeration systems. Some preferred using cooling systems of ice or snow, which meant that diets would have consisted of very little fresh food or fruits and vegetables, but mostly of bread, cheese and salted meals. For milk and cheeses, it was very difficult to keep them fresh, so such foods were usually stored in a cellar or window box. In spite of those measures, they could not survive rapid spoilage. Later on, people discovered that adding such chemical as sodium nitrate or potassium nitrate to water could lead to a lower temperature. In 1550 when this technique was first recorded, people used it to cool wine, as was the term \u2018to refrigerate\u2019. Cooling drinks grew very popular in Europe by 1600, particularly in Spain, France, and Italy. Instead of cooling water at night, people used a new technique: rotating long-necked bottles of water which held dissolved saltpeter. The solution was intended to create very low temperatures and even to make ice. By the end of the 17th century, iced drinks including frozen juices and liquors had become extremely fashionable in France.\n\nPeople\u2019s demand for ice soon became strong. Consumers\u2019 soaring requirement for fresh food, especially for green vegetables, resulted in reform in people\u2019s dieting habits between 1830 and the American Civil War, accelerated by a drastic expansion of the urban areas and the rapid amelioration in an economy of the populace. With the growth of the cities and towns, the distance between the consumer and the source of food was enlarged. In 1799 as a commercial product, ice was first transported out of Canal Street in New York City to Charleston, South Carolina. Unfortunately, this transportation was not successful because when the ship reached the destination, little ice was left. Frederick Tudor and Nathaniel Wyeth, two New England businessmen, grasped the great potential opportunities for ice business and managed to improve the storage method of ice in the process of shipment. The acknowledged \u2018Ice King\u2019 in that time, Tudor concentrated his efforts on bringing the ice to the tropical areas. In order to achieve his goal and guarantee the ice to arrive at the destination safely he tried many insulating materials in an experiment and successfully constructed the ice containers, which reduced the ice loss from 66 per cent to less than 8 per cent drastically. Wyeth invented an economical and speedy method to cut the ice into uniform blocks, which had a tremendous positive influence on the ice industry. Also, he improved the processing techniques for storing, transporting and distributing ice with less waste.\n\nWhen people realised that the ice transported from the distance was not as clean as previously thought and gradually caused many health problems, it was more demanding to seek the clean natural sources of ice. To make it worse, by the 1890s water pollution and sewage dumping made clean ice even more unavailable. The adverse effect first appeared in the brewing industry, and then seriously spread to such sectors as meat packing and dairy industries. As a result, the clean, mechanical refrigeration was considerably in need.\n\nMany inventors with creative ideas took part in the process of inventing refrigeration, and each version was built on the previous discoveries. Dr William Cullen initiated to study the evaporation of liquid under the vacuum conditions in 1720. He soon invented the first man-made refrigerator at the University of Glasgow in 1748 with the employment of ethyl ether boiling into a partial vacuum. American inventor Oliver Evans designed the refrigerator firstly using vapour rather than liquid in 1805. Although his conception was not put into practice in the end, the mechanism was adopted by an American physician John Gorrie, who made one cooling machine similar to Evans\u2019 in 1842 with the purpose of reducing the temperature of the patient with yellow fever in a Florida hospital. Until 1851, Evans obtained the first patent for mechanical refrigeration in the USA. In 1820, Michael Faraday, a Londoner, first liquefied ammonia to cause cooling. In 1859, Ferdinand Carre from France invented the first version of the ammonia water cooling machine. In 1873, Carl von Linde designed the first practical and portable compressor refrigerator in Munich, and in 1876 he abandoned the methyl ether system and began using ammonia cycle. Linde later created a new method (\u2018Linde technique\u2019) for liquefying large amounts of air in 1894. Nearly a decade later, this mechanical refrigerating method was adopted subsequently by the meat packing industry in Chicago.\n\nSince 1840, cars with the refrigerating system had been utilised to deliver and distribute milk and butter. Until 1860, most seafood and dairy products were transported with cold-chain logistics. In 1867, refrigerated railroad cars were patented to J.B. Sutherland from Detroit, Michigan, who invented insulated cars by installing the ice bunkers at the end of the cars: air came in from the top, passed through the bunkers, circulated through the cars by gravity and controlled by different quantities of hanging flaps which caused different air temperatures. Depending on the cargo (such as meat, fruits etc.) transported by the cars, different car designs came into existence. In 1867, the first refrigerated car to carry fresh fruit was manufactured by Parker Earle of Illinois, who shipped strawberries on the Illinois Central Railroad. Each chest was freighted with 100 pounds of ice and 200 quarts of strawberries. Until 1949, the trucking industry began to be equipped with the refrigeration system with a roof-mounted cooling device, invented by Fred Jones.\n\nFrom the late 1800s to 1929, the refrigerators employed toxic gases \u2013 methyl chloride, ammonia, and sulfur dioxide \u2013 as refrigerants. But in the 1920s, a great number of lethal accidents took place due to the leakage of methyl chloride out of refrigerators. Therefore, some American companies started to seek some secure methods of refrigeration. Frigidaire detected a new class of synthetic refrigerants called halocarbons or CFCs (chlorofluorocarbons) in 1928. This research led to the discovery of chlorofluorocarbons (Freon), which quickly became the prevailing material in compressor refrigerators. Freon was safer for the people in the vicinity, but in 1973 it was discovered to have detrimental effects on the ozone layer. After that, new improvements were made, and Hydrofluorocarbons, with no known harmful effects, were used in the cooling system. Simultaneously, nowadays, Chlorofluorocarbons (CFCs) are no longer used; they are announced illegal in several places, making the refrigeration far safer than before.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 1-14",
            questionGroups: [
                { groupType: "matching-features", startQuestion: 1, endQuestion: 5, mainInstruction: "Match each event with the correct date, A-F.", subInstruction: "", featureListTitle: "List of Dates", featureOptions: [
                    { letter: "A", text: "1550" }, { letter: "B", text: "1799" }, { letter: "C", text: "1803" },
                    { letter: "D", text: "1840" }, { letter: "E", text: "1949" }, { letter: "F", text: "1973" },
                ], paragraphOptions: ["A","B","C","D","E","F"], matchingItems: [
                    { questionNumber: 1, text: "Vehicles with refrigerator were used to transport on the road.", correctAnswer: "E" },
                    { questionNumber: 2, text: "Ice was sold around the United States for the first time.", correctAnswer: "B" },
                    { questionNumber: 3, text: "Some kind of chemical refrigerant was found harmful to the atmosphere.", correctAnswer: "F" },
                    { questionNumber: 4, text: "The term \u2018refrigerator\u2019 was firstly introduced.", correctAnswer: "C" },
                    { questionNumber: 5, text: "Some chemicals were added to refrigerate wine.", correctAnswer: "A" },
                ]},
                { groupType: "matching-features", startQuestion: 6, endQuestion: 10, mainInstruction: "Match each opinion or deed with the correct person, A-G.", subInstruction: "", featureListTitle: "List of People", featureOptions: [
                    { letter: "A", text: "Thomas Moore" }, { letter: "B", text: "Frederick Tudor" }, { letter: "C", text: "Carl Von Linde" },
                    { letter: "D", text: "Nathaniel Wyeth" }, { letter: "E", text: "J.B Sutherland" }, { letter: "F", text: "Fred Jones" },
                    { letter: "G", text: "Parker Earle" },
                ], paragraphOptions: ["A","B","C","D","E","F","G"], matchingItems: [
                    { questionNumber: 6, text: "patented the idea that refrigerating system can be installed on tramcars", correctAnswer: "E" },
                    { questionNumber: 7, text: "invented an ice-cutting technical method that could save money and time", correctAnswer: "D" },
                    { questionNumber: 8, text: "enabled the cold storage technology to be applied in fruit", correctAnswer: "G" },
                    { questionNumber: 9, text: "invented a cooling device applied into the trucking industry", correctAnswer: "F" },
                    { questionNumber: 10, text: "created a new technique to liquefy the air", correctAnswer: "C" },
                ]},
                { groupType: "matching-features", startQuestion: 11, endQuestion: 14, mainInstruction: "Complete each sentence with the correct ending, A-E.", subInstruction: "", featureListTitle: "Endings", featureOptions: [
                    { letter: "A", text: "new developments, such as the application of Hydrofluorocarbons." },
                    { letter: "B", text: "consumers\u2019 demand for fresh food, especially for vegetables." },
                    { letter: "C", text: "the discovery of chlorofluorocarbons (Freon)." },
                    { letter: "D", text: "regional transportation system for refrigeration for a long distance." },
                    { letter: "E", text: "extensive spread of the refrigeration method." },
                ], paragraphOptions: ["A","B","C","D","E"], matchingItems: [
                    { questionNumber: 11, text: "A healthy dietary change between 1830 and the American Civil War was greatly associated with", correctAnswer: "B" },
                    { questionNumber: 12, text: "The development of urbanisation was likely to cause", correctAnswer: "D" },
                    { questionNumber: 13, text: "Problems due to water treatment contributed to", correctAnswer: "E" },
                    { questionNumber: 14, text: "The risk of the environmental devastation from the refrigeration led to", correctAnswer: "A" },
                ]},
            ],
            questions: [
                { questionNumber: 1, questionType: "matching-features", questionText: "Vehicles with refrigerator on the road.", correctAnswer: "E", marks: 1 },
                { questionNumber: 2, questionType: "matching-features", questionText: "Ice sold in US for first time.", correctAnswer: "B", marks: 1 },
                { questionNumber: 3, questionType: "matching-features", questionText: "Chemical refrigerant harmful to atmosphere.", correctAnswer: "F", marks: 1 },
                { questionNumber: 4, questionType: "matching-features", questionText: "Term refrigerator introduced.", correctAnswer: "C", marks: 1 },
                { questionNumber: 5, questionType: "matching-features", questionText: "Chemicals added to refrigerate wine.", correctAnswer: "A", marks: 1 },
                { questionNumber: 6, questionType: "matching-features", questionText: "Refrigerating system on tramcars.", correctAnswer: "E", marks: 1 },
                { questionNumber: 7, questionType: "matching-features", questionText: "Ice-cutting method.", correctAnswer: "D", marks: 1 },
                { questionNumber: 8, questionType: "matching-features", questionText: "Cold storage for fruit.", correctAnswer: "G", marks: 1 },
                { questionNumber: 9, questionType: "matching-features", questionText: "Cooling device for trucking.", correctAnswer: "F", marks: 1 },
                { questionNumber: 10, questionType: "matching-features", questionText: "Technique to liquefy air.", correctAnswer: "C", marks: 1 },
                { questionNumber: 11, questionType: "matching-features", questionText: "Healthy dietary change associated with.", correctAnswer: "B", marks: 1 },
                { questionNumber: 12, questionType: "matching-features", questionText: "Urbanisation likely to cause.", correctAnswer: "D", marks: 1 },
                { questionNumber: 13, questionType: "matching-features", questionText: "Water treatment problems contributed to.", correctAnswer: "E", marks: 1 },
                { questionNumber: 14, questionType: "matching-features", questionText: "Environmental devastation led to.", correctAnswer: "A", marks: 1 },
            ],
        },
        // ═══ SECTION 2: Ancient People in Sahara (Q15-27) ═══
        {
            sectionNumber: 2,
            title: "Ancient People in Sahara",
            passage: `On Oct. 13, 2000, Paul Sereno, a professor from the University of Chicago, guided a team of palaeontologists to climb out of three broken Land Rovers, contented their water bottles and walked across the toffee-coloured desert called Tenere Desert. Tenere, one of the most barren areas on the Earth, is located on the southern flank of Sahara. According to the turbaned nomads Tuareg who have ruled this infertile domain for a few centuries, this California-size ocean of sand and rock is a \u2018desert within a desert\u2019. In the Tenere Desert, massive dunes might stretch a hundred miles, as far as the eyes can reach. In addition, 120-degree heat waves and inexorable winds can take almost all the water from a human body in less than a day.\n\nMike Hettwer, a photographer in the team, was attracted by the amazing scenes and walked to several dunes to take photos of the amazing landscape. When reaching the first slope of the dune, he was shocked by the fact that the dunes were scattered with many bones. He photographed these bones with his digital camera and went to the Land Rover in a hurry. \u2018I found some bones,\u2019 Hettwer said to other group members, \u2018to my great surprise, they do not belong to the dinosaurs. They are human bones.\u2019\n\nOne day in the spring of 2005, Paul Sereno got in touch with Elena Garcea, a prestigious archaeologist at the University of Cassino in Italy, asking her to return to the site with him together. After spending 30 years in researching the history of Nile in Sudan and of the mountains in the Libyan Desert, Garcea got well acquainted with the life of the ancient people in Sahara. But she did not know Sereno before this exploration, whose claim of having found so many skeletons in Tenere desert was unreliable to some archaeologists, among whom one person considered Sereno just as a \u2018moonlighting palaeontologist\u2019. However, Garcea was so obsessive with his perspective as to accept his invitation willingly.\n\nIn the following three weeks, Sereno and Garcea (along with five excavators, five Tuareg guides, and five soldiers from Niger\u2019s army) sketched a detailed map of the destined site, which was dubbed Gobero after the Tuareg name for the area, a place the ancient Kiffian and Tuareg nomads used to roam. After that, they excavated eight tombs and found twenty pieces of artefacts for the above mentioned two civilisations. From these artefacts, it is evidently seen that Kiffian fishermen caught not only the small fish, but also some huge ones: the remains of Nile perch, a fierce fish weighing about 300 pounds, along with those of the alligators and hippos, were left in the vicinity of dunes.\n\nSereno went back with some essential bones and artefacts, and planned for the next trip to the Sahara area. Meanwhile, he pulled out the teeth of skeletons carefully and sent them to a researching laboratory for radiocarbon dating. The results indicated that while the smaller \u2018sleeping\u2019 bones might date back to 6,000 years ago (well within the Tenerian period), the bigger compactly tied artefacts were approximately 9,000 years old, just in the heyday of Kiffian era. The scientists now can distinguish one culture from the other.\n\nIn the fall of 2006, for the purpose of exhuming another 80 burials, these people had another trip to Gobero, taking more crew members and six extra scientists specialising in different areas. Even at the site, Chris Stojanowski, bio-archaeologist in Arizona State University, found some clues by matching the pieces. Judged from the bones, the Kiffian could be a people of peace and hardworking. \u2018No injuries in heads or forearms indicate that they did not fight too much,\u2019 he said. \u2018And they had strong bodies.\u2019 He pointed at a long narrow femur and continued, \u2018From this muscle attachment, we could infer the huge leg muscles, which means this individual lived a strenuous lifestyle and ate much protein. Both of these two inferences coincide with the lifestyle of the people living on fishing.\u2019 To create a striking contrast, he displayed a femur of a Tenerian male. This ridge was scarcely seen. \u2018This individual had a less laborious lifestyle, which you might expect of the herder.\u2019\n\nStojanowski concluded that the Tenerian were herders, which was consistent with the other scholars\u2019 dominant view of the lifestyle in Sahara area 6,000 years ago, when the dry climate favoured herding rather than hunting. But Sereno proposed some confusing points: if the Tenerian was herders, where were the herds? Despite thousands of animal bones excavated in Gobero, only three cow skeletons were found, and none of goats or sheep found. \u2018It is common for the herding people not to kill the cattle, particularly in a cemetery.\u2019 Elena Garcea remarked, \u2018Even the modern pastoralists such as Niger\u2019s Wodaabe are reluctant to slaughter the animals in their herd.\u2019 Sereno suggested, \u2018Perhaps the Tenerian in Gobero were a transitional group that had still relied greatly on hunting and fishing and not adopted herding completely.\u2019`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 15-27",
            questionGroups: [
                { groupType: "true-false-not-given", startQuestion: 15, endQuestion: 18, mainInstruction: "Do the following statements agree with the information given in Reading Passage 2?", subInstruction: "Write TRUE, FALSE or NOT GIVEN.", statements: [
                    { questionNumber: 15, text: "The pictures of rock engravings found in Green Sahara is similar to those in other places.", correctAnswer: "NOT GIVEN" },
                    { questionNumber: 16, text: "Tenere Desert was quite a fertile area in Sahara Desert.", correctAnswer: "FALSE" },
                    { questionNumber: 17, text: "Hettwer found human remains in the desert by chance.", correctAnswer: "TRUE" },
                    { questionNumber: 18, text: "Sereno and Garcea have cooperated in some archaeological activities before studying ancient Sahara people.", correctAnswer: "FALSE" },
                ]},
                { groupType: "short-answer", startQuestion: 19, endQuestion: 21, mainInstruction: "Answer the questions below.", subInstruction: "Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the passage for each answer.", questions: [
                    { questionNumber: 19, questionText: "What did Sereno and Garcea produce in the initial weeks before digging work?", correctAnswer: "a detailed map" },
                    { questionNumber: 20, questionText: "What did Sereno send to the research centre?", correctAnswer: "teeth" },
                    { questionNumber: 21, questionText: "How old were the bigger tightly bundled burials estimated to be?", correctAnswer: "9,000 years old" },
                ]},
                { groupType: "sentence-completion", startQuestion: 22, endQuestion: 27, mainInstruction: "Complete the notes below.", subInstruction: "Choose ONE WORD ONLY from the passage for each answer.", statements: [
                    { questionNumber: 22, text: "The Kiffian seemed to be peaceful and industrious since the researcher did not find _________ on their heads and forearms.", correctAnswer: "injuries" },
                    { questionNumber: 23, text: "Their lifestyle was _________.", correctAnswer: "strenuous" },
                    { questionNumber: 24, text: "Through the observation on the huge leg muscles, it could be inferred that their diet had plenty of _________.", correctAnswer: "protein" },
                    { questionNumber: 25, text: "Stojanowski presumed that the Tenerian preferred herding to _________.", correctAnswer: "hunting" },
                    { questionNumber: 26, text: "But only the bones of individual animals such as _________ were found.", correctAnswer: "cows" },
                    { questionNumber: 27, text: "Sereno supposed the Tenerian in Gobero lived in a _________ group at that time.", correctAnswer: "transitional" },
                ]},
            ],
            questions: [
                { questionNumber: 15, questionType: "true-false-not-given", questionText: "Rock engravings in Green Sahara similar to other places.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "NOT GIVEN", marks: 1 },
                { questionNumber: 16, questionType: "true-false-not-given", questionText: "Tenere Desert was fertile.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 17, questionType: "true-false-not-given", questionText: "Hettwer found human remains by chance.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "TRUE", marks: 1 },
                { questionNumber: 18, questionType: "true-false-not-given", questionText: "Sereno and Garcea cooperated before.", options: ["TRUE","FALSE","NOT GIVEN"], correctAnswer: "FALSE", marks: 1 },
                { questionNumber: 19, questionType: "short-answer", questionText: "What did they produce before digging?", correctAnswer: "a detailed map", acceptableAnswers: ["detailed map"], marks: 1 },
                { questionNumber: 20, questionType: "short-answer", questionText: "What did Sereno send to research centre?", correctAnswer: "teeth", marks: 1 },
                { questionNumber: 21, questionType: "short-answer", questionText: "How old were bigger burials?", correctAnswer: "9,000 years old", acceptableAnswers: ["9000 years old", "9,000 years"], marks: 1 },
                { questionNumber: 22, questionType: "sentence-completion", questionText: "Did not find ___ on heads/forearms.", correctAnswer: "injuries", marks: 1 },
                { questionNumber: 23, questionType: "sentence-completion", questionText: "Their lifestyle was ___.", correctAnswer: "strenuous", marks: 1 },
                { questionNumber: 24, questionType: "sentence-completion", questionText: "Diet had plenty of ___.", correctAnswer: "protein", marks: 1 },
                { questionNumber: 25, questionType: "sentence-completion", questionText: "Preferred herding to ___.", correctAnswer: "hunting", marks: 1 },
                { questionNumber: 26, questionType: "sentence-completion", questionText: "Only bones of ___ were found.", correctAnswer: "cows", acceptableAnswers: ["cow"], marks: 1 },
                { questionNumber: 27, questionType: "sentence-completion", questionText: "Lived in a ___ group.", correctAnswer: "transitional", marks: 1 },
            ],
        },
        // ═══ SECTION 3: Texting the Television (Q28-40) ═══
        {
            sectionNumber: 3,
            title: "Texting the Television",
            passage: `A.\nOnce upon a time, if a television show with any self-respect wanted to target a young audience, it needed to have an e-mail address. However, in Europe\u2019s TV shows, such addresses are gradually substituted by telephone numbers so that audiences can text the show from their mobile phones. Therefore, it comes as no shock that according to Gartner\u2019s research, texting has recently surpassed Internet usage across Europe. Besides, among the many uses of text messaging, one of the fastest-growing uses is to interact with television. The statistics provided by Gartner can display that 20% of French teenagers, 11% in Britain and 9% in Germany have responded to TV programmes by sending a text message.\n\nB.\nThis phenomenon can be largely attributed to the rapid growth of reality TV shows such as \u2018Big Brother\u2019, where viewers get to decide the result through voting. The majority of reality shows are now open to text-message voting, and in some shows like the latest series of Norway\u2019s \u2018Big Brother\u2019, most votes are collected in this manner. But TV-texting isn\u2019t just about voting. News shows encourage viewers to comment by texting messages; game shows enable the audience to be part of the competition; music shows answer requests by taking text messages; and broadcasters set up on-screen chatrooms. TV audiences tend to sit on the sofa with their mobile phones right by their sides, and \u2018it\u2019s a natural way to interact,\u2019 says Adam Daum of Gartner.\n\nC.\nMobile service providers charge appreciable rates for messages to certain numbers, which is why TV-texting can bring in a lot of cash. Take the latest British series of \u2018Big Brother\u2019 as an example. It brought about 5.4m text-message votes and \u00a31.35m ($2.1m) of profit. In Germany, MTV\u2019s \u2018Videoclash\u2019 encourages the audience to vote for one of two rival videos, and induces up to 40,000 texts per hour, and each one of those texts costs \u20ac0.30 ($0.29), according to a consultancy based in Amsterdam. The Belgian quiz show \u20181 Against 100\u2019 had an eight-round texting match on the side, which brought in 110,000 participants in one month, and each of them paid \u20ac0.50 for each question. In Spain, a cryptic-crossword clue invites the audience to send their answers through text at the expense of \u20ac1, so that they can be enrolled in the poll to win a \u20ac300 prize. Normally, 6,000 viewers would participate within one day.\n\nAt the moment, TV-related text messaging takes up a considerable proportion of mobile service providers\u2019 data revenues. In July, Mm02 (a British operator) reported an unexpectedly satisfactory result, which could be attributed to the massive text waves created by \u2018Big Brother\u2019. Providers usually own 40%-50% of the profits from each text, and the rest is divided among the broadcaster, the programme producer and the company which supplies the message-processing technology. So far, revenues generated from text messages have been an indispensable part of the business model for various shows. Obviously, there has been grumbling that the providers take too much of the share. Endemol, the Netherlands-based production firm that is responsible for many reality TV shows including \u2018Big Brother\u2019, has begun constructing its own database for mobile-phone users. It plans to set up a direct billing system with the users and bypass the providers.\n\nD.\nHow come the joining forces of television and text message turn out to be this successful? One crucial aspect is the emergence of one-of-a-kind four-, five- or six-digit numbers known as \u2018short codes\u2019. Every provider has control over its own short codes, but not until recently have they come to realise that it would make much more sense to work together to offer short codes compatible with all networks. The emergence of this universal short codes was a game-changer, because short codes are much easier to remember on the screen, according to Lars Becker of Flytxt, a mobile-marketing company.\n\nE.\nOperators\u2019 co-operation on enlarging the market is part of a larger trend, observes Katrina Bond of Analysys, a consultancy. When challenged by the dilemma between holding on tight to their margins and permitting the emergence of a new medium, no provider has ever chosen the latter. WAP, a technology for mobile-phone users to read cut-down web pages on their screens, failed because of service providers\u2019 reluctance towards revenue sharing with content providers. Now that they\u2019ve learnt their lesson, they are altering the way of operating. Orange, a French operator, has come such a long way as to launch a rate card for sharing revenue of text messages, a new level of transparency that used to be unimaginable.\n\nF.\nAt a recent conference, Han Weegink of CMG, a company that offers the television market text-message infrastructure, pointed out that the television industry is changing in a subtle yet fundamental way. Instead of the traditional one-way presentation, more and more TV shows are now getting viewers\u2019 reactions involved.\n\nCertainly, engaging the audiences more has always been the promise of interactive TV. An interactive TV was originally designed to work with exquisite set-top devices, which could be directly plugged into the TV. However, as Mr Daum points out, that method was flawed in many ways. Developing and testing software for multiple and incompatible types of set-top box could be costly, not to mention that the 40% (or lower) market penetration is below that of mobile phones (around 85%). What\u2019s more, it\u2019s quicker to develop and set up apps for mobile phones. \u2018You can approach the market quicker, and you don\u2019t have to go through as many greedy middlemen,\u2019 Mr Daum says. Providers of set-top box technology are now adding texting function to the design of their products.\n\nG.\nThe triumph of TV-related texting reminds everyone in the business of how easily a fancy technology can all of a sudden be replaced by a less complicated, lower-tech method. That being said, the old-fashioned approach to interactive TV is not necessarily over; at least it proves that strong demands for interactive services still exist. It appears that the viewers would sincerely like to do more than simply staring at the TV screen. After all, couch potatoes would love some thumb exercises.`,
            passageSource: "IELTS Practice Test",
            instructions: "Questions 28-40",
            questionGroups: [
                { groupType: "matching-headings", startQuestion: 28, endQuestion: 32, mainInstruction: "Choose the correct heading for sections B-E and G from the list of headings below.", subInstruction: "", headingsList: [
                    { roman: "i", text: "An application of short codes on the TV screen" },
                    { roman: "ii", text: "An overview of a fast-growing business" },
                    { roman: "iii", text: "The trend that profitable games are gaining more concerns" },
                    { roman: "iv", text: "Why Netherlands takes the leading role" },
                    { roman: "v", text: "A new perspective towards sharing the business opportunities" },
                    { roman: "vi", text: "Factors relevant to the rapid increase in interactive TV" },
                    { roman: "vii", text: "The revenue gains and bonus share" },
                    { roman: "viii", text: "The possibility of the complex technology replaced by the simpler ones" },
                    { roman: "ix", text: "The mind change of set-top box providers" },
                ], statements: [
                    { questionNumber: 28, text: "Section B", correctAnswer: "vi" },
                    { questionNumber: 29, text: "Section C", correctAnswer: "vii" },
                    { questionNumber: 30, text: "Section D", correctAnswer: "i" },
                    { questionNumber: 31, text: "Section E", correctAnswer: "v" },
                    { questionNumber: 32, text: "Section G", correctAnswer: "viii" },
                ]},
                { groupType: "multiple-choice-full", startQuestion: 33, endQuestion: 35, mainInstruction: "Choose the correct letter, A, B, C or D.", subInstruction: "", mcQuestions: [
                    { questionNumber: 33, questionText: "In Europe, a research hints that young audiences spend more money on", options: [
                        { letter: "A", text: "thumbing text messages" }, { letter: "B", text: "writing e-mails" },
                        { letter: "C", text: "watching TV programmes" }, { letter: "D", text: "talking through mobile phones" },
                    ], correctAnswer: "A" },
                    { questionNumber: 34, questionText: "What would happen when reality TV shows invite the audience to vote?", options: [
                        { letter: "A", text: "Viewers would get attractive bonus." }, { letter: "B", text: "They would be part of the competition." },
                        { letter: "C", text: "Their questions would be replied." }, { letter: "D", text: "Their participation could change the result." },
                    ], correctAnswer: "D" },
                    { questionNumber: 35, questionText: "Interactive TV will change from concentrating on set-top devices to", options: [
                        { letter: "A", text: "increasing their share in the market." }, { letter: "B", text: "setting up a modified set-top box." },
                        { letter: "C", text: "building an embedded message platform." }, { letter: "D", text: "marching into the European market." },
                    ], correctAnswer: "C" },
                ]},
                { groupType: "matching-features", startQuestion: 36, endQuestion: 40, mainInstruction: "Match each description with the correct company, A-F.", subInstruction: "", featureListTitle: "List of Companies", featureOptions: [
                    { letter: "A", text: "Flytxt" }, { letter: "B", text: "Analysys" }, { letter: "C", text: "Endemol" },
                    { letter: "D", text: "CMG" }, { letter: "E", text: "Mm02" }, { letter: "F", text: "Gartner" },
                ], paragraphOptions: ["A","B","C","D","E","F"], matchingItems: [
                    { questionNumber: 36, text: "offered mobile phone message technology", correctAnswer: "D" },
                    { questionNumber: 37, text: "earned considerable amount of money through a famous programme", correctAnswer: "E" },
                    { questionNumber: 38, text: "expressed the view that short codes are convenient to remember when turning up", correctAnswer: "A" },
                    { questionNumber: 39, text: "built their own mobile phone operating applications", correctAnswer: "C" },
                    { questionNumber: 40, text: "indicated that it is easy for people to send message in an interactive TV", correctAnswer: "F" },
                ]},
            ],
            questions: [
                { questionNumber: 28, questionType: "matching-headings", questionText: "Section B", correctAnswer: "vi", marks: 1 },
                { questionNumber: 29, questionType: "matching-headings", questionText: "Section C", correctAnswer: "vii", marks: 1 },
                { questionNumber: 30, questionType: "matching-headings", questionText: "Section D", correctAnswer: "i", marks: 1 },
                { questionNumber: 31, questionType: "matching-headings", questionText: "Section E", correctAnswer: "v", marks: 1 },
                { questionNumber: 32, questionType: "matching-headings", questionText: "Section G", correctAnswer: "viii", marks: 1 },
                { questionNumber: 33, questionType: "multiple-choice-full", questionText: "Young audiences spend more on", correctAnswer: "A", marks: 1 },
                { questionNumber: 34, questionType: "multiple-choice-full", questionText: "When audience votes on reality TV", correctAnswer: "D", marks: 1 },
                { questionNumber: 35, questionType: "multiple-choice-full", questionText: "Interactive TV will change to", correctAnswer: "C", marks: 1 },
                { questionNumber: 36, questionType: "matching-features", questionText: "Offered mobile phone message technology", correctAnswer: "D", marks: 1 },
                { questionNumber: 37, questionType: "matching-features", questionText: "Earned money through famous programme", correctAnswer: "E", marks: 1 },
                { questionNumber: 38, questionType: "matching-features", questionText: "Short codes convenient to remember", correctAnswer: "A", marks: 1 },
                { questionNumber: 39, questionType: "matching-features", questionText: "Built own mobile phone apps", correctAnswer: "C", marks: 1 },
                { questionNumber: 40, questionType: "matching-features", questionText: "Easy to send message in interactive TV", correctAnswer: "F", marks: 1 },
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
            console.log("\u2705 Reading Test 09 updated!");
        } else {
            const admin = await User.findOne({ role: "admin" });
            if (!admin) { console.log("\u274C No admin"); process.exit(1); }
            await ReadingTest.create({ ...readingTest, createdBy: admin._id });
            console.log("\u2705 Reading Test 09 created!");
        }
        const test = await ReadingTest.findOne({ testNumber: readingTest.testNumber });
        if (test) {
            console.log(`\n\uD83D\uDCDD Test: ${test.title}`);
            (test.sections as any[]).forEach((s, i) => console.log(`   S${i+1}: ${s.title} | G:${s.questionGroups?.length} Q:${s.questions?.length}`));
        }
        await mongoose.disconnect();
        process.exit(0);
    } catch (error) { console.error("\u274C Error:", error); process.exit(1); }
}
seedTest();

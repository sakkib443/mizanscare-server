import mongoose from "mongoose";
import { ReadingTest } from "../app/modules/reading/reading.model";
import { User } from "../app/modules/user/user.model";
import config from "../app/config";

const readingTest = {
    testId: "READING_ACADEMIC_016",
    testNumber: 16,
    title: "Academic Reading Mock Test 16",
    description: "IELTS Academic Reading Test featuring passages on The Pearl, How deserts are formed, and Can Hurricanes be Moderated or Diverted.",
    source: "Academic Reading Practice",
    testType: "academic" as const,
    difficulty: "medium" as const,
    isActive: true,
    duration: 60,
    totalQuestions: 40,
    totalMarks: 40,
    sections: [
        // ═══════════════════════════════════════════
        // SECTION 1: The Pearl (Q1-13)
        // Q1-4: Matching Information (A-H)
        // Q5-10: Summary Completion
        // Q11-13: True/False/Not Given
        // ═══════════════════════════════════════════
        {
            sectionNumber: 1,
            title: "The Pearl",
            instructions: "You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.",
            passage: `A The pearl has always had a special status in the rich and powerful all through the history. For instance, women from ancient Rome went to bed with pearls on them, so that they could remind themselves how wealthy they were after waking up. Pearls used to have more commercial value than diamonds until jewellers learnt to cut gems. In the eastern countries like Persia, ground pearl powders could be used as a medicine to cure anything including heart diseases and epilepsy.\n\nB Pearls can generally be divided into three categories: natural, cultured and imitation. When an irritant (such as a grain of sand) gets inside a certain type of oyster, mussel, or clam, the mollusc will secrete a fluid as a means of defence to coat the irritant. Gradually, layers are accumulated around the irritant until a lustrous natural pearl is formed.\n\nC A cultured pearl undergoes the same process. There is only one difference between cultured pearls and natural ones: in cultured pearls, the irritant is a head called \u2018mother of pearl\u2019 and is placed in the oyster through surgical implantation. This results in much larger cores in cultivated pearls than those in natural pearls. As long as there are enough layers of nacre (the secreted fluid covering the irritant) to create a gorgeous, gem-quality pearl; the size of the nucleus wouldn\u2019t make a difference to beauty or durability.\n\nD Pearls can come from both salt and freshwater sources. Typically, pearls from salt water usually have high quality, although several freshwater pearls are considered high in quality, too. In addition, freshwater pearls often have irregular shapes, with a puffed rice appearance. Nevertheless, it is the individual merits that determine the pearl\u2019s value more than the sources of pearls. Saltwater pearl oysters are usually cultivated in protected lagoons or volcanic atolls, while most freshwater cultured pearls sold today come from China. There are a number of options for producing cultured pearls: use fresh water or sea water shells, transplant the graft into the mantle or into the gonad, add a spherical bead or do it nonbeaded.\n\nE No matter which method is used to get pearls, the process usually takes several years. Mussels must reach a mature age, which may take up almost three years, and then be transplanted an irritant. When the irritant is put in place, it takes approximately another three years for a pearl to reach its full size. Sometimes, the irritant may be rejected. As a result, the pearl may be seriously deformed, or the oyster may directly die from such numerous complications as diseases. At the end of a 5- to 10-year circle, only half of the oysters may have made it through. Among the pearls that are actually produced in the end, only about 5% of them will be high-quality enough for the jewellery makers.\n\nF Imitation pearls are of another different story. The Island of Mallorca in Spain is renowned for its imitation pearl industry. In most cases, a bead is dipped into a solution made from fish scales. But this coating is quite thin and often wears off. One way to distinguish the imitation pearls is to have a bite on it. Fake pearls glide through your teeth, while the layers of nacre on the real pearls feel gritty.\n\nG Several factors are taken into account to evaluate a pearl: size, shape, Colour, the quality of surface and luster. Generally, the three types of pearls come in such order (with the value decreasing): natural pearls, cultured pearls and imitation pearls (which basically are worthless). For jewellers, one way to tell whether a pearl is natural or cultured is to send it to a gem lab and perform an X-ray on it. High-quality natural pearls are extremely rare. Japan\u2019s Akoya pearls are one of the glossiest pearls out there, while the south sea water of Australia is a cradle to bigger pearls.\n\nH Historically, the pearls with the highest quality around the globe are found in the Persian Gulf, particularly around Bahrain. These pearls have to be hand-harvested by divers with no advanced equipment. Unfortunately, when the large reserve of oil was discovered in the early 1930s, Persian Gulf\u2019s natural pearl industry came to a sudden end because the contaminated water destroyed the once pristine pearls. In the present days, India probably has the largest stock of natural pearls. However, it is quite an irony that a large part of India\u2019s stock of natural pearls are originally from Bahrain.`,
            questionGroups: [
                // Q1-4: Matching Information (paragraphs A-H)
                {
                    groupType: "matching-information",
                    startQuestion: 1,
                    endQuestion: 4,
                    mainInstruction: "Reading Passage 1 has eight paragraphs, A-H. Which paragraph contains the following information?",
                    subInstruction: "Write the correct letter, A-H, in boxes 1-4 on your answer sheet.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G", "H"],
                    matchingItems: [
                        { questionNumber: 1, text: "ancient stories around pearls and its customers", correctAnswer: "" },
                        { questionNumber: 2, text: "difficulties in cultivating process", correctAnswer: "" },
                        { questionNumber: 3, text: "factors which decide the value of natural pearls", correctAnswer: "" },
                        { questionNumber: 4, text: "a growth mechanism that distinguishes cultured pearls from natural ones", correctAnswer: "" },
                    ],
                },
                // Q5-10: Summary Completion
                {
                    groupType: "summary-completion",
                    startQuestion: 5,
                    endQuestion: 10,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose NO MORE THAN TWO WORDS from the passage for each answer. Write your answers in boxes 5-10 on your answer sheet.",
                    mainHeading: "",
                    summarySegments: [
                        { type: "text", content: "In history, pearls have had great importance within the men of wealth and power, which were treated as gems for women in " },
                        { type: "blank", questionNumber: 5, correctAnswer: "" },
                        { type: "text", content: ". Also, pearls were even used as a medicine for people in " },
                        { type: "blank", questionNumber: 6, correctAnswer: "" },
                        { type: "text", content: ". There are essentially three types of pearls: natural, cultured and imitation. Most freshwater cultured pearls sold today come from China while " },
                        { type: "blank", questionNumber: 7, correctAnswer: "" },
                        { type: "text", content: " Island is famous for its imitation pearl industry. Good-quality natural pearls are exceedingly unusual. " },
                        { type: "blank", questionNumber: 8, correctAnswer: "" },
                        { type: "text", content: " often manufactures some of the glitteriest pearls while " },
                        { type: "blank", questionNumber: 9, correctAnswer: "" },
                        { type: "text", content: " produces larger size ones due to the favorable environment along the coastline. In the past, " },
                        { type: "blank", questionNumber: 10, correctAnswer: "" },
                        { type: "text", content: " in Persian Gulf produced the world\u2019s best pearls. Nowadays, the major remaining suppliers of natural pearls belong to India." },
                    ],
                },
                // Q11-13: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 11,
                    endQuestion: 13,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 1?",
                    subInstruction: "In boxes 11-13 on your answer sheet, write TRUE if the statement is true, FALSE if the statement is false, NOT GIVEN if the information is not given in the passage.",
                    statements: [
                        { questionNumber: 11, text: "Generally speaking, the centre of cultured pearl is significantly larger than that of a natural pearl.", correctAnswer: "" },
                        { questionNumber: 12, text: "Sometimes, fake pearls can be more expensive.", correctAnswer: "" },
                        { questionNumber: 13, text: "The size of the pearls produced in Japan is usually smaller than those in Australia.", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 1, questionType: "matching-information", questionText: "ancient stories around pearls and its customers", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 2, questionType: "matching-information", questionText: "difficulties in cultivating process", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 3, questionType: "matching-information", questionText: "factors which decide the value of natural pearls", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 4, questionType: "matching-information", questionText: "a growth mechanism that distinguishes cultured pearls from natural ones", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 5, questionType: "summary-completion", questionText: "treated as gems for women in ___", correctAnswer: "", marks: 1 },
                { questionNumber: 6, questionType: "summary-completion", questionText: "used as a medicine for people in ___", correctAnswer: "", marks: 1 },
                { questionNumber: 7, questionType: "summary-completion", questionText: "___ Island is famous for its imitation pearl industry", correctAnswer: "", marks: 1 },
                { questionNumber: 8, questionType: "summary-completion", questionText: "___ often manufactures some of the glitteriest pearls", correctAnswer: "", marks: 1 },
                { questionNumber: 9, questionType: "summary-completion", questionText: "___ produces larger size ones due to the favorable environment", correctAnswer: "", marks: 1 },
                { questionNumber: 10, questionType: "summary-completion", questionText: "___ in Persian Gulf produced the world's best pearls", correctAnswer: "", marks: 1 },
                { questionNumber: 11, questionType: "true-false-not-given", questionText: "Generally speaking, the centre of cultured pearl is significantly larger than that of a natural pearl.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 12, questionType: "true-false-not-given", questionText: "Sometimes, fake pearls can be more expensive.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 13, questionType: "true-false-not-given", questionText: "The size of the pearls produced in Japan is usually smaller than those in Australia.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 2: How deserts are formed? (Q14-26)
        // Q14-20: Matching Information (A-H, may repeat)
        // Q21-26: True/False/Not Given
        // ═══════════════════════════════════════════
        {
            sectionNumber: 2,
            title: "How deserts are formed?",
            instructions: "You should spend about 20 minutes on Questions 14-26 which are based on Reading Passage 2 below.",
            passage: `A A desert refers to a barren section of land, mainly in arid and semi-arid areas, where there is almost no precipitation, and the environment is hostile for any creature to inhabit. Deserts have been classified in a number of ways, generally combining total precipitation, how many days the rainfall occurs, temperature, humidity, and sometimes additional factors. In some places, deserts have clear boundaries marked by rivers, mountains or other landforms, while in other places, there are no clear-cut borders between desert and other landscape features.\n\nB In arid areas where there is not any covering of vegetation protecting the land, sand and dust storms will frequently take place. This phenomenon often occurs along the desert margins instead of within the deserts, where there are already no finer materials left. When a steady wind starts to blow, fine particles on the open ground will begin vibrating. As the wind picks up, some of the particles are lifted into the air. When they fall onto the ground, they hit other particles which will then be jerked into the air in their turn, initiating a chain reaction.\n\nC There has been a tremendous deal of publicity on how severe desertification can be, but the academic circle has never agreed on the causes of desertification. A common misunderstanding is that a shortage of precipitation causes the desertification\u2014even the land in some barren areas will soon recover after the rain falls. In fact, more often than not, human activities are responsible for desertification. It might be true that the explosion in world population, especially in developing countries, is the primary cause of soil degradation and desertification. Since the population has become denser, the cultivation of crops has gone into progressively drier areas. It\u2019s especially possible for these regions to go through periods of severe drought, which explains why crop failures are common. The raising of most crops requires the natural vegetation cover to be removed first; when crop failures occur, extensive tracts of land are devoid of a plant cover and thus susceptible to wind and water erosion. All through the 1990s, dryland areas went through a population growth of 18.5 per cent, mostly in severely impoverished developing countries.\n\nD Livestock farming in semi-arid areas accelerates the erosion of soil and becomes one of the reasons for advancing desertification. In such areas where the vegetation is dominated by grasses, the breeding of livestock is a major economic activity. Grasses are necessary for anchoring barren topsoil in a dryland area. When a specific field is used to graze an excessive herd, it will experience a loss in vegetation coverage, and the soil will be trampled as well as be pulverised, leaving the topsoil exposed to destructive erosion elements such as winds and unexpected thunderstorms. For centuries, nomads have grazed their flocks and herds to any place where pasture can be found, and oases have offered chances for a more settled way of living. For some nomads, wherever they move to, the desert follows.\n\nE Trees are of great importance when it comes to maintaining topsoil and slowing down the wind speed. In many Asian countries, firewood is the chief fuel used for cooking and heating, which has caused uncontrolled clear-cutting of forests in dryland ecosystems. When too many trees are cut down, windstorms and dust storms tend to occur.\n\nF What\u2019s worse, even political conflicts and wars can also contribute to desertification. To escape from the invading enemies, the refugees will move altogether into some of the most vulnerable ecosystems on the planet. They bring along their cultivation traditions, which might not be the right kind of practice for their new settlement.\n\nG In the 20th century, one of the states of America had a large section of farmland that had turned into desert. Since then, actions have been enforced so that such a phenomenon of desertification will not happen again. To avoid the reoccurring of desertification, people shall find other livelihoods which do not rely on traditional land uses, are not as demanding on local land and natural resource, but can still generate viable income. Such livelihoods include but are not limited to dryland aquaculture for the raising of fish, crustaceans and industrial compounds derived from microalgae, greenhouse agriculture, and activities that are related to tourism. Another way to prevent the reoccurring of desertification is bringing about economic prospects in the city centres of drylands and places outside drylands. Changing the general economic and institutional structures that generate new chances for people to support themselves would alleviate the current pressures accompanying the desertification processes.\n\nH In nowadays society, new technologies are serving as a method to resolve the problems brought by desertification. Satellites have been utilised to investigate the influence that people and livestock have on our planet Earth. Nevertheless, it doesn\u2019t mean that alternative technologies are not needed to help with the problems and process of desertification.`,
            questionGroups: [
                // Q14-20: Matching Information
                {
                    groupType: "matching-information",
                    startQuestion: 14,
                    endQuestion: 20,
                    mainInstruction: "Reading Passage 2 has eight paragraphs, A-H. Which paragraph contains the following information?",
                    subInstruction: "Write the correct letter, A-H, in boxes 14-20 on your answer sheet.",
                    note: "NB You may use any letter more than once.",
                    paragraphOptions: ["A", "B", "C", "D", "E", "F", "G", "H"],
                    matchingItems: [
                        { questionNumber: 14, text: "a reference to the irregular movement of particles", correctAnswer: "" },
                        { questionNumber: 15, text: "mention of a productive land turning into a desert in the 20th century", correctAnswer: "" },
                        { questionNumber: 16, text: "types of deserts", correctAnswer: "" },
                        { questionNumber: 17, text: "mention of technical methods used to tackle the problems of deserts", correctAnswer: "" },
                        { questionNumber: 18, text: "the influence of migration on desertification", correctAnswer: "" },
                        { questionNumber: 19, text: "lack of agreement among the scientists about the causes of desertification", correctAnswer: "" },
                        { questionNumber: 20, text: "a description of the fatal effects of farming practice", correctAnswer: "" },
                    ],
                },
                // Q21-26: True/False/Not Given
                {
                    groupType: "true-false-not-given",
                    startQuestion: 21,
                    endQuestion: 26,
                    mainInstruction: "Do the following statements agree with the information given in Reading Passage 2?",
                    subInstruction: "In boxes 21-26 on your answer sheet, write TRUE if the statement is true, FALSE if the statement is false, NOT GIVEN if the information is not given in the passage.",
                    statements: [
                        { questionNumber: 21, text: "It is difficult to ascertain where the deserts end in some areas.", correctAnswer: "" },
                        { questionNumber: 22, text: "Media is uninterested in the problems of desertification.", correctAnswer: "" },
                        { questionNumber: 23, text: "The most common cause of desertification is the lack of rainfall.", correctAnswer: "" },
                        { questionNumber: 24, text: "Farming animals in semi-arid areas will increase soil erosion.", correctAnswer: "" },
                        { questionNumber: 25, text: "People in Asian countries no longer use firewood as the chief fuel.", correctAnswer: "" },
                        { questionNumber: 26, text: "Technology studying the relationship of people, livestock and desertification has not yet been invented.", correctAnswer: "" },
                    ],
                },
            ],
            questions: [
                { questionNumber: 14, questionType: "matching-information", questionText: "a reference to the irregular movement of particles", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 15, questionType: "matching-information", questionText: "mention of a productive land turning into a desert in the 20th century", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 16, questionType: "matching-information", questionText: "types of deserts", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 17, questionType: "matching-information", questionText: "mention of technical methods used to tackle the problems of deserts", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 18, questionType: "matching-information", questionText: "the influence of migration on desertification", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 19, questionType: "matching-information", questionText: "lack of agreement among the scientists about the causes of desertification", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 20, questionType: "matching-information", questionText: "a description of the fatal effects of farming practice", options: ["A", "B", "C", "D", "E", "F", "G", "H"], correctAnswer: "", marks: 1 },
                { questionNumber: 21, questionType: "true-false-not-given", questionText: "It is difficult to ascertain where the deserts end in some areas.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 22, questionType: "true-false-not-given", questionText: "Media is uninterested in the problems of desertification.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 23, questionType: "true-false-not-given", questionText: "The most common cause of desertification is the lack of rainfall.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 24, questionType: "true-false-not-given", questionText: "Farming animals in semi-arid areas will increase soil erosion.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 25, questionType: "true-false-not-given", questionText: "People in Asian countries no longer use firewood as the chief fuel.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
                { questionNumber: 26, questionType: "true-false-not-given", questionText: "Technology studying the relationship of people, livestock and desertification has not yet been invented.", options: ["TRUE", "FALSE", "NOT GIVEN"], correctAnswer: "", marks: 1 },
            ],
        },

        // ═══════════════════════════════════════════
        // SECTION 3: Can Hurricanes be Moderated or Diverted? (Q27-40)
        // Q27-33: Matching Headings (7 paragraphs A-G)
        // Q34-38: Summary Completion
        // Q39-40: Multiple Choice
        // ═══════════════════════════════════════════
        {
            sectionNumber: 3,
            title: "Can Hurricanes be Moderated or Diverted?",
            instructions: "You should spend about 20 minutes on Questions 27-40 which are based on Reading Passage 3 below.",
            passage: `A Each year, massive swirling storms bringing along winds greater than 74 miles per hour wipe across tropical oceans and land on shorelines\u2014usually devastating vast swaths of territory. When these roiling tempests strike densely inhabited territories, they have the power to kill thousands and cause property damage worth of billions of dollars. Besides, absolutely nothing stands in their way. But can we ever find a way to control these formidable forces of nature?\n\nB To see why hurricanes and other severe tropical storms may be susceptible to human intervention, a researcher must first learn about their nature and origins. Hurricanes grow in the form of thunderstorm clusters above the tropical seas. Oceans in low-latitude areas never stop giving out heat and moisture to the atmosphere, which brings about warm, wet air above the sea surface. When this kind of air rises, the water vapour in it condenses to form clouds and precipitation. Condensation gives out heat in the process the solar heat is used to evaporate the water at the ocean surface. This so-called invisible heat of condensation makes the air more buoyant, leading to it ascending higher while reinforcing itself in the feedback process. At last, the tropical depression starts to form and grow stronger, creating the familiar eye \u2014 the calm centre hub that a hurricane spins around. When reaching the land, the hurricane no longer has a continuous supply of warm water, which causes it to swiftly weaken.\n\nC Our current studies are inspired by my past intuition when I was learning about chaos theory 30 years ago. The reason why long-range forecasting is complicated is that the atmosphere is highly sensitive to small influences and tiny mistakes can compound fast in the weather-forecasting models. However, this sensitivity also made me realise a possibility: if we intentionally applied some slight inputs to a hurricane, we might create a strong influence that could affect the storms, either by steering them away from densely populated areas or by slowing them down. Back then, I was not able to test my ideas, but thanks to the advancement of computer simulation and remote-sensing technologies over the last 10 years, I can now renew my enthusiasm in large-scale weather control.\n\nD To find out whether the sensitivity of the atmospheric system could be exploited to adjust such robust atmospheric phenomena as hurricanes, our research team ran simulation experiments on computers for a hurricane named Iniki that occurred in 1992. The current forecasting technologies were far from perfect, so it took us by surprise that our first simulation turned out to be an immediate success. With the goal of altering the path of Iniki in mind, we first picked the spot where we wanted the storm to stop after six hours. Then we used this target to generate artificial observations and put these into the computer model.\n\nE The most significant alteration turned out to be the initial temperatures and winds. Usually, the temperature changes across the grid were only tenths of a degree, but the most noteworthy change, which was an increase of almost two degrees Celsius, took place in the lowest model layer to the west of the storm centre. The calculations produced wind-speed changes of two or three miles per hour. However, in several spots, the rates shifted by as much as 20 mph due to minor redirections of the winds close to the storm\u2019s centre. In terms of structure, the initial and altered versions of Hurricane Iniki seemed almost the same, but the changes in critical variables were so substantial that the latter one went off the track to the west during the first six hours of the simulation and then travelled due north, leaving Kauai untouched.\n\nF Future earth-orbiting solar power stations, equipped with large mirrors to focus the sun\u2019s rays and panels of photovoltaic cells to gather and send energy to the Earth, might be adapted to beam microwaves which turn to be absorbed by water vapour molecules inside or around the storm. The microwaves would cause the water molecules to vibrate and heat up the surrounding air, which then leads to the hurricane slowing down or moving in a preferred direction.\n\nG Simulations of hurricanes conducted on a computer have implied that by changing the precipitation, evaporation and air temperature, we could make a difference to a storm\u2019s route or abate its winds. Intervention could be in many different forms: exquisitely targeted clouds bearing silver iodide or other rainfall-inducing elements might deprive a hurricane of the water it needs to grow and multiply from its formidable eyewall, which is the essential characteristic of a severe tropical storm.`,
            questionGroups: [
                // Q27-33: Matching Headings (7 paragraphs A-G)
                {
                    groupType: "matching-headings",
                    startQuestion: 27,
                    endQuestion: 33,
                    mainInstruction: "Reading Passage 3 has seven paragraphs, A-G.",
                    subInstruction: "Choose the correct heading for each paragraph from the list of headings below. Write the correct number, i-viii, in boxes 27-33 on your answer sheet.",
                    featureListTitle: "List of Headings",
                    headingsList: [
                        { numeral: "i", text: "Hurricanes in history" },
                        { numeral: "ii", text: "How hurricanes form" },
                        { numeral: "iii", text: "How a laboratory exercise re-route a hurricane" },
                        { numeral: "iv", text: "Exciting ways to utilise future technologies" },
                        { numeral: "v", text: "Are hurricanes unbeatable?" },
                        { numeral: "vi", text: "Re-visit earlier ideas" },
                        { numeral: "vii", text: "How lives might have been saved" },
                        { numeral: "viii", text: "A range of low-tech methods" },
                    ],
                    paragraphOptions: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"],
                    matchingItems: [
                        { questionNumber: 27, text: "Paragraph A", correctAnswer: "" },
                        { questionNumber: 28, text: "Paragraph B", correctAnswer: "" },
                        { questionNumber: 29, text: "Paragraph C", correctAnswer: "" },
                        { questionNumber: 30, text: "Paragraph D", correctAnswer: "" },
                        { questionNumber: 31, text: "Paragraph E", correctAnswer: "" },
                        { questionNumber: 32, text: "Paragraph F", correctAnswer: "" },
                        { questionNumber: 33, text: "Paragraph G", correctAnswer: "" },
                    ],
                },
                // Q34-38: Summary Completion
                {
                    groupType: "summary-completion",
                    startQuestion: 34,
                    endQuestion: 38,
                    mainInstruction: "Complete the summary below.",
                    subInstruction: "Choose ONE WORD ONLY from the passage for each answer. Write your answers in boxes 34-38 on your answer sheet.",
                    mainHeading: "",
                    summarySegments: [
                        { type: "text", content: "Hurricanes originate as groups of " },
                        { type: "blank", questionNumber: 34, correctAnswer: "" },
                        { type: "text", content: " over the tropical oceans. Low-latitude seas continuously provide heat and moisture to the atmosphere, producing warm, humid air above the sea surface. When this air rises, the water vapour in it condenses to form clouds and precipitation. " },
                        { type: "blank", questionNumber: 35, correctAnswer: "" },
                        { type: "text", content: " releases heat\u2014the solar heat it took to evaporate the water at the ocean surface. This so-called latent " },
                        { type: "blank", questionNumber: 36, correctAnswer: "" },
                        { type: "text", content: " of condensation makes the air more buoyant, causing it to ascend still higher in a self-reinforcing feedback process. Eventually, the tropical depression begins to organise and strengthen, forming the familiar " },
                        { type: "blank", questionNumber: 37, correctAnswer: "" },
                        { type: "text", content: "\u2014the calm central hub around which a hurricane spins. On passing over " },
                        { type: "blank", questionNumber: 38, correctAnswer: "" },
                        { type: "text", content: ", the hurricane\u2019s sustaining source of warm water is cut off, which leads to the storm\u2019s rapid weakening." },
                    ],
                },
                // Q39-40: Multiple Choice
                {
                    groupType: "multiple-choice-full",
                    startQuestion: 39,
                    endQuestion: 40,
                    mainInstruction: "Choose the correct letter, A, B, C or D.",
                    subInstruction: "Write the correct letter in boxes 39 and 40 on your answer sheet.",
                    mcQuestions: [
                        {
                            questionNumber: 39,
                            questionText: "What encouraged the writer to restart researching hurricane control?",
                            options: [
                                { letter: "A", text: "the huge damage hurricane triggers" },
                                { letter: "B", text: "the developments in computer technologies" },
                                { letter: "C", text: "the requirement of some local people" },
                                { letter: "D", text: "the chaos theory learnt as a student" },
                            ],
                            correctAnswer: "",
                        },
                        {
                            questionNumber: 40,
                            questionText: "What was the writer\u2019s reaction after their first experiment?",
                            options: [
                                { letter: "A", text: "surprised that their intervention had not achieve a lot." },
                                { letter: "B", text: "ecstatic with the achievement the first experiment had" },
                                { letter: "C", text: "surprised that their intervention had the intended effect" },
                                { letter: "D", text: "regretful about the impending success." },
                            ],
                            correctAnswer: "",
                        },
                    ],
                },
            ],
            questions: [
                { questionNumber: 27, questionType: "matching-headings", questionText: "Paragraph A", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 28, questionType: "matching-headings", questionText: "Paragraph B", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 29, questionType: "matching-headings", questionText: "Paragraph C", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 30, questionType: "matching-headings", questionText: "Paragraph D", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 31, questionType: "matching-headings", questionText: "Paragraph E", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 32, questionType: "matching-headings", questionText: "Paragraph F", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 33, questionType: "matching-headings", questionText: "Paragraph G", options: ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"], correctAnswer: "", marks: 1 },
                { questionNumber: 34, questionType: "summary-completion", questionText: "Hurricanes originate as groups of ___", correctAnswer: "", marks: 1 },
                { questionNumber: 35, questionType: "summary-completion", questionText: "___ releases heat", correctAnswer: "", marks: 1 },
                { questionNumber: 36, questionType: "summary-completion", questionText: "latent ___ of condensation", correctAnswer: "", marks: 1 },
                { questionNumber: 37, questionType: "summary-completion", questionText: "forming the familiar ___", correctAnswer: "", marks: 1 },
                { questionNumber: 38, questionType: "summary-completion", questionText: "On passing over ___", correctAnswer: "", marks: 1 },
                { questionNumber: 39, questionType: "multiple-choice-full", questionText: "What encouraged the writer to restart researching hurricane control?", correctAnswer: "", marks: 1 },
                { questionNumber: 40, questionType: "multiple-choice-full", questionText: "What was the writer\u2019s reaction after their first experiment?", correctAnswer: "", marks: 1 },
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
        console.error("\u274c Error seeding Reading Test 16:", error);
        process.exit(1);
    }
}

seedTest();

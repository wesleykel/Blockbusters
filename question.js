const results = [
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "When was the first Call of Duty title released?",
    correct_answer: "October 29, 2003",
    incorrect_answers: [
      "December 1, 2003",
      "November 14, 2002",
      "July 18, 2004",
    ],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question:
      "What tool lends it&#039;s name to a last-stone advantage in an end in Curling?",
    correct_answer: "Hammer",
    incorrect_answers: ["Wrench", "Drill", "Screwdriver"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "hard",
    question: "What is the approximate value of mathematical constant e?",
    correct_answer: "2.72",
    incorrect_answers: ["3.14", "1.62", "1.41"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Which is the chemical name of H2O?",
    correct_answer: "Dihydrogen Monoxide",
    incorrect_answers: [
      "Ammonium chloride",
      "Anhydrous Sodium Carbonate",
      "Manganese dioxide",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which one of the following titles by Valve is not based on a Community Mod?",
    correct_answer: "Ricochet",
    incorrect_answers: ["Day of Defeat", "Counter-Strike", "Alien Swarm"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who was the original drummer for The Beatles?",
    correct_answer: "Tommy Moore",
    incorrect_answers: ["Ringo Starr", "Stuart Sutcliffe", "Pete Best"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following commercial vehicles from Grand Theft Auto IV did NOT reappear in Grand Theft Auto V?",
    correct_answer: "Steed",
    incorrect_answers: ["Mule", "Benson", "Pony"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question: "Who was not in the band &quot;The Smiths&quot;?",
    correct_answer: "Martin Chambers",
    incorrect_answers: ["Morrissey", "Andy Rourke", "Mike Joyce"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "Sciophobia is the fear of what?",
    correct_answer: "Shadows",
    incorrect_answers: ["Eating", "Bright lights", "Transportation"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Folic acid is the synthetic form of which vitamin?",
    correct_answer: "Vitamin B",
    incorrect_answers: ["Vitamin A", "Vitamin C", "Vitamin D"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which Italian footballer told Neuer where he&#039;s putting his shot and dragging it wide, during the match Italy-Germany, UEFA EURO 2016?",
    correct_answer: "Pelle",
    incorrect_answers: ["Insigne", "Barzagli", "Giaccherini"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following plastic is commonly used for window frames, gutters and drain pipes?",
    correct_answer: "Polyvinylchloride (PVC) ",
    incorrect_answers: [
      "Polyethylene (PE)",
      "Polypropylene (PP)",
      "Polystyrene (PS)",
    ],
  },
  {
    category: "History",
    type: "multiple",
    difficulty: "hard",
    question:
      "The Hagia Sophia was commissioned by which emperor of the Byzantine Empire?",
    correct_answer: "Justinian I",
    incorrect_answers: ["Constantine IV", "Arcadius", "Theodosius the Great"],
  },
  {
    category: "Animals",
    type: "multiple",
    difficulty: "hard",
    question: "What type of creature is a Bonobo?",
    correct_answer: "Ape",
    incorrect_answers: ["Lion", "Parrot", "Wildcat"],
  },
  {
    category: "Vehicles",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which one of the following is NOT a sub-company of the Volkswagen Group?",
    correct_answer: "Opel",
    incorrect_answers: ["Porsche", "Bugatti", "Bentley"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In TF2 Lore, what are the names of the Heavy&#039;s younger sisters?",
    correct_answer: "Yana and Bronislava",
    incorrect_answers: [
      "Gaba and Anna",
      "Yanna and Gaba",
      "Anna and Bronislava",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "The voice actor for which Portal 2 character was not a TV or film actor prior to the game?",
    correct_answer: "GLaDOS",
    incorrect_answers: ["Cave Johnson", "Wheatley", "Atlas / P-Body"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Panic! At the Disco&#039;s song &quot;Nothern Downpour&quot;, which lyric follows &#039;I know the world&#039;s a broken bone&#039;.",
    correct_answer: "&quot;So melt your headaches call it home&quot;",
    incorrect_answers: [
      "&quot;So sing your song until you&#039;re home&quot;",
      "&quot;So let them know they&#039;re on their own&quot;",
      "&quot;So start a fire in their cold stone&quot;",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Pok&eacute;mon series, what is Palkia&#039;s hidden ability?",
    correct_answer: "Telepathy",
    incorrect_answers: ["Pressure", "Water Bubble", "Hydration"],
  },
  {
    category: "Vehicles",
    type: "multiple",
    difficulty: "hard",
    question:
      "What model was the sports car gifted to Yuri Gagarin by the French government in 1965?",
    correct_answer: "Matra Djet",
    incorrect_answers: ["Porsche 911", "Alpine A110", "AC Cobra"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question: "Botanically speaking, which of these fruits is NOT a berry?",
    correct_answer: "Strawberry",
    incorrect_answers: ["Blueberry", "Banana", "Concord Grape"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these is not a key value of Agile software development?",
    correct_answer: "Comprehensive documentation",
    incorrect_answers: [
      "Individuals and interactions",
      "Customer collaboration",
      "Responding to change",
    ],
  },
  {
    category: "Science: Gadgets",
    type: "multiple",
    difficulty: "hard",
    question: "Who built the first laser?",
    correct_answer: "Theodore Harold Maiman",
    incorrect_answers: ["Nikola Tesla", "Jack Kilby", "Edith Clarke"],
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question: "What is the Klingon&#039;s afterlife called?",
    correct_answer: "Sto-vo-kor",
    incorrect_answers: ["Valhalla", "Karon&#039;gahk", "New Jersey"],
  },
  {
    category: "Science: Mathematics",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the plane curve proposed by Descartes to challenge Fermat&#039;s extremum-finding techniques called?",
    correct_answer: "Folium of Descartes",
    incorrect_answers: [
      "Elliptic Paraboloid of Descartes",
      "Cartesian Coordinates",
      "Descarte&#039;s Helicoid",
    ],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which product did Nokia, the telecommunications company, originally sell?",
    correct_answer: "Paper",
    incorrect_answers: ["Phones", "Computers", "Processors"],
  },
  {
    category: "Entertainment: Musicals & Theatres",
    type: "multiple",
    difficulty: "hard",
    question:
      "After England, more Shakespeare plays are set in this present day country than in any other.",
    correct_answer: "Italy",
    incorrect_answers: ["United States", "Greece", "France"],
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "According to &quot;Star Wars&quot; lore, which planet does Obi-Wan Kenobi come from?",
    correct_answer: "Stewjon",
    incorrect_answers: ["Alderaan", "Tatooine", "Naboo"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which artist composed the original soundtrack for &quot;Watch Dogs 2&quot;?",
    correct_answer: "Hudson Mohawke",
    incorrect_answers: ["Rustie", "Machinedrum", "Flying Lotus"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "Electronic artists Boys Noize and Skrillex have collaborated and released tracks under what name?",
    correct_answer: "Dog Blood",
    incorrect_answers: ["Jack &Uuml;", "What So Not", "Noisia"],
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "What three movies, in order from release date, make up the &quot;Dollars Trilogy&quot;?",
    correct_answer:
      "&quot;A Fistful of Dollars&quot;, &quot;For a Few Dollars More&quot;, &quot;The Good, the Bad, and the Ugly&quot;",
    incorrect_answers: [
      "&quot;The Good, the Bad, and the Ugly&quot;, &quot;For A Few Dollars More&quot;, &quot;A Fistful of Dollars&quot;",
      "&quot;For a Few Dollars More&quot;, &quot;The Good, the Bad, and the Ugly&quot;, &quot;A Fistful of Dollars&quot;",
      "&quot;For a Few Dollars More&quot;, &quot;A Fistful of Dollars&quot;, &quot;The Good, the Bad, and the Ugly&quot;",
    ],
  },
  {
    category: "Entertainment: Television",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of the following actors portrayed the Ninth Doctor in the British television show &quot;Doctor Who&quot;?",
    correct_answer: "Christopher Eccleston",
    incorrect_answers: ["David Tennant", "Matt Smith", "Tom Baker"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the scientific name for the extinct hominin known as &quot;Lucy&quot;?",
    correct_answer: "Australopithecus Afarensis",
    incorrect_answers: [
      "Australopithecus Africanus",
      "Australopithecus Architeuthis",
      "Australopithecus Antaris",
    ],
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "What is the species of the &quot;Predator&quot; in the 1987 movie &quot;Predator&quot;?",
    correct_answer: "Yautja",
    incorrect_answers: ["Xenomorph", "Praetorian", "Phocrex"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "The Dice Tower network of board game podcasts and videos is run by which individual?",
    correct_answer: "Tom Vasel",
    incorrect_answers: ["Jason LeVine", "Borth Sampson", "Uncle Pennybags"],
  },
  {
    category: "Entertainment: Board Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which ability from the &quot;Magic: The Gathering&quot; Scars of Mirrodin expansion involves having at least three artifacts in play?",
    correct_answer: "Metalcraft",
    incorrect_answers: ["Affinity", "Imprint", "Living Weapon"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "If you planted the seeds of Quercus robur, what would grow?",
    correct_answer: "Trees",
    incorrect_answers: ["Grains", "Vegetables", "Flowers"],
  },
  {
    category: "Entertainment: Music",
    type: "multiple",
    difficulty: "hard",
    question:
      "A Caixa Malacacheta is what kind of musical instrument which is commonly used in Latin American music?",
    correct_answer: "Snare Drum",
    incorrect_answers: ["Cow Bell", "Bass Drum", "Maraca"],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the MMO RPG &quot;Realm of the Mad God&quot;, what dungeon is widely considered to be the most difficult?",
    correct_answer: "The Shatter&#039;s",
    incorrect_answers: [
      "Snake Pit",
      "The Tomb of the Acient&#039;s",
      "The Puppet Master&#039;s Theater",
    ],
  },
  {
    category: "General Knowledge",
    type: "multiple",
    difficulty: "hard",
    question: "What is the most commonly used noun in the English language?",
    correct_answer: "Time",
    incorrect_answers: ["Home", "Water", "Man"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question:
      "What type of sound chip does the Super Nintendo Entertainment System (SNES) have?",
    correct_answer: "ADPCM Sampler",
    incorrect_answers: [
      "FM Synthesizer",
      "Programmable Sound Generator (PSG)",
      "PCM Sampler",
    ],
  },
  {
    category: "Entertainment: Musicals & Theatres",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which of these plays was famously first performed posthumously after the playwright committed suicide?",
    correct_answer: "4.48 Psychosis",
    incorrect_answers: [
      "Hamilton",
      "Much Ado About Nothing",
      "The Birthday Party",
    ],
  },
  {
    category: "Science: Gadgets",
    type: "multiple",
    difficulty: "hard",
    question: "Which of the following is used to measure blood pressure?",
    correct_answer: "Sphygmomanometer",
    incorrect_answers: ["Barometer", "Ruler", "Haemoerythrometer"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question: "The Mazda 787B won the 24 Hours of Le Mans in what year?",
    correct_answer: "1991",
    incorrect_answers: ["1990", "2000", "1987"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "How many types of quarks are there in the standard model of physics?",
    correct_answer: "6",
    incorrect_answers: ["2", "3", "4"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "In quantum physics, which of these theorised sub-atomic particles has yet to be observed?",
    correct_answer: "Graviton",
    incorrect_answers: ["Z boson", "Tau neutrino", "Gluon"],
  },
  {
    category: "Entertainment: Japanese Anime & Manga",
    type: "multiple",
    difficulty: "hard",
    question: "Who is the horror manga artist who made Uzumaki?",
    correct_answer: "Junji Ito",
    incorrect_answers: ["Kazuo Umezu", "Shintaro Kago", "Sui Ishida"],
  },
  {
    category: "Science & Nature",
    type: "multiple",
    difficulty: "hard",
    question:
      "In physics, conservation of energy and conservation of momentum are both consequences of which of the following?",
    correct_answer: "Noether&#039;s Theorem",
    incorrect_answers: [
      "Bell&#039;s Theorem",
      "Wick&#039;s Theorem",
      "Carnot&#039;s Theorem",
    ],
  },
  {
    category: "Entertainment: Film",
    type: "multiple",
    difficulty: "hard",
    question:
      "What was the wifi password given to Stephen Strange in Doctor Strange?",
    correct_answer: "Shambala",
    incorrect_answers: ["Peace", "Ancient", "Chakra"],
  },
  {
    category: "Sports",
    type: "multiple",
    difficulty: "hard",
    question: "In Canadian football, scoring a rouge is worth how many points?",
    correct_answer: "1",
    incorrect_answers: ["2", "3", "4"],
  },
];

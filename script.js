let verbStems = [
    "walk",
    "bark",
    "blend",
    "laugh",
    "smok"
];

let nouns = [
    "dog",
    "cat",
    "wife",
    "husband",
    "blender",
    "microwave",
    "car"
];

let names = [
    "Sheila",
    "Bruce",
    "Bryce",
    "Derek",
    "Daniel",
    "Chloe"
];

let morals = [
    "Every cloud has a silver lining",
    "Plenty more fish in the sea",
    "A penny saved is a penny earned",
    "Not all love stories will go down in history"
];

let adverbs = [
    "quickly",
    "slowly",
    "quietly",
    "loudly",
    "purposefully",
    "timidly",
    "arrogantly"
];

let noun = nouns[Math.floor(Math.random() * nouns.length)];
let name1 = names[Math.floor(Math.random() * names.length)];
let adverb = "";
let verbStem1 = verbStems[Math.floor(Math.random() * verbStems.length)];
let verbStem2 = verbStems[Math.floor(Math.random() * verbStems.length)];
let verbStem3 = verbStems[Math.floor(Math.random() * verbStems.length)];
let verbStem4 = verbStems[Math.floor(Math.random() * verbStems.length)];
let moral = morals[Math.floor(Math.random() * morals.length)];

let finalStory = `
    I was ${verbStem1}ing the other day, and my ${noun} ${name1} started ${verbStem2}ing. 
    I ${adverb} started ${verbStem3}ing, but ${name1} just ${verbStem4}ed. 
    Moral of the story: ${moral}!`;

console.log(finalStory);
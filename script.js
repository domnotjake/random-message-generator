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

const returnRandomNoun = () => {
    return nouns[Math.floor(Math.random() * nouns.length)];
};

const removeElementFromArray = (array, arrayElementToRemove) => {
    const index = array.indexOf(arrayElementToRemove);
    let newArray = array;

    if (index > -1) { // only splice array when item is found
        newArray.splice(index, 1); // 2nd parameter means remove one item only
    }
    return newArray;    
};

const returnRandomVerbStem = () => {
    randomVerbStem = verbStems[Math.floor(Math.random() * verbStems.length)];
    verbStems = removeElementFromArray(verbStems, randomVerbStem);  // Remove it so it isn't picked again
    return randomVerbStem;
};

const returnRandomName = () => {
    return names[Math.floor(Math.random() * names.length)]
};

const returnRandomAdverb = () => {
    return adverbs[Math.floor(Math.random() * adverbs.length)];
};

const returnRandomMoral = () => {
    return morals[Math.floor(Math.random() * morals.length)];
};

let noun = returnRandomNoun();
let name1 = returnRandomName();
let adverb = returnRandomAdverb();
let verbStem1 = returnRandomVerbStem();
let verbStem2 = returnRandomVerbStem();
let verbStem3 = returnRandomVerbStem();
let verbStem4 = returnRandomVerbStem();
let moral = returnRandomMoral();

let finalStory = `
    I was ${verbStem1}ing the other day, and my ${noun} ${name1} started ${verbStem2}ing. 
    I ${adverb} started ${verbStem3}ing, but ${name1} just ${verbStem4}ed. 
    Moral of the story: ${moral}!`;

console.log(finalStory);
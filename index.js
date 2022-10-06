const process = require("process");
const arguments = process.argv.slice(2, process.argv.length);
let count = 0;

for (let i = 0; i < arguments.length; i++) {
    console.log(`Argument ${ [i+1] }: ${arguments[i]}`)
}

console.log(`There are ${arguments.length} command-line argument${arguments.length === 1 ? '': 's'} passed.`);

const joinArray = arguments.join(" ");
for (let letter of joinArray.toLowerCase()) {
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(letter)) {
        count++;
    }
}

console.log(`There ${count === 1 ? 'is': 'are'} ${count} ${count === 1 ? 'vowel': 'vowels'} found.`);

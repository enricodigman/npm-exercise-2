const process = require("process");
const arguments = process.argv.slice(2, process.argv.length);
let count = 0;

const joinArray = arguments.join(" ");

for (let letter of joinArray.toLowerCase()) {
    const vowels = ["a", "e", "i", "o", "u"];
    if (vowels.includes(letter)) {
        count++;
    }
}

console.log(`There ${arguments.length >  1 ? 'are': 'is'} ${arguments.length === 0 ? '': arguments.length} command-line argument${arguments.length === 1 ? '' : 's'} passed.`);
console.log(`There ${count === 1 ? 'is' : 'are'} ${count} ${count === 1 ? 'vowel' : 'vowels'} found.`);

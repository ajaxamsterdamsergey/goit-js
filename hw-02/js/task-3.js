'use strict';
const findLongestWord = function(string) {
    const words = string.split(' ');
    console.log(words);
    let longestWord = words[0];
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};
const result = findLongestWord('May the force be with you');
console.log(result);

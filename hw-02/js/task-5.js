'use strict';
let checkForSpam = function(string) {
    const isLowercase = string.toLowerCase();
    return isLowercase.includes('spam') || isLowercase.includes('sale');
};
const result = checkForSpam('[SPAM] How to earn fast money?');
console.log(result);

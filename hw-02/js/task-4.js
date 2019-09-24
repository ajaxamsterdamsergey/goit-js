'use strict';
const formatString = function(string) {
    let result = '';
    if (string.length <= 40) {
        result = string;
    } else {
        const croppedString = string.slice(0, 40);
        result = `${croppedString}...`;
    }
    return result;
};
const finalResult = formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
);
console.log(finalResult);

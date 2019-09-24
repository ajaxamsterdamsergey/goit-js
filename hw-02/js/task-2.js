'use strict';
const calculateEngravingPrice = function(message, pricePerWord) {
    const totalWords = message.split(' ');
    const price = totalWords.length;
    const totalPrice = price * pricePerWord;
    return totalPrice;
};
const result = calculateEngravingPrice('May the force be with you', 10);
console.log(result);

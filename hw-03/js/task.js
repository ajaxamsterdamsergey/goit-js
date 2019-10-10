'use strict';
//const countProps = function(obj) {
//  const countKeys = Object.keys(obj).length;
//  return countKeys;
//};
const calculateEngravingPrice = (message, pricePerWord) =>
    message.split(' ').length * pricePerWord;
const result = calculateEngravingPrice({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
});
console.log(result);

'use strict';
const countProps = function(obj) {
    const countKeys = Object.keys(obj).length;
    return countKeys;
};
const result = countProps({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
});
console.log(result);

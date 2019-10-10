'use strict';
const countProps = obj => Object.keys(obj).length;
const result = countProps({
    mail: 'poly@mail.com',
    isOnline: true,
    score: 500,
});
console.log(result);

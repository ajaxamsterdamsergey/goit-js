'use strict';
let input;
const numbers = [];
let total = 0;

do {
    input = prompt('введите число');
    numbers.push(+input);
    console.log(numbers);
} while (input !== null);

numbers.forEach(item => {
    total += item;
    alert(total);
});

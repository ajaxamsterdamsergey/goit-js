'use strict';
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ulList = document.querySelector('#ingredients');
ingredients.forEach(function(array) {
    const items = document.createElement('li');
    items.textContent = array;
    ulList.appendChild(items);
});
console.log(ulList);

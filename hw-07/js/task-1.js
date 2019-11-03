'use strict';
const selectedCatigories = document.querySelector('#categories');
console.log(selectedCatigories);
const totalCatigories = selectedCatigories.querySelectorAll('.item');
console.log(`В списке ${totalCatigories.length} категорий`);
totalCatigories.forEach(text =>
    console.log(
        `Категория: ${text.firstElementChild.textContent}. Количество элементов: ${text.lastElementChild.children.length} `,
    ),
);

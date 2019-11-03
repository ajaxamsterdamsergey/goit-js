'use strict';
const counterWrapper = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
counterValue.textContent = 0;
counterWrapper.addEventListener('click', function(event) {
    const action = event.target.getAttribute('data-action');
    if (action === 'increment') {
        counterValue.textContent = +counterValue.textContent + 1;
    } else if (action === 'decrement') {
        counterValue.textContent = +counterValue.textContent - 1;
    }
});

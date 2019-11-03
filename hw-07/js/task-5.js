'use strict';
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    output.textContent = event.currentTarget.value;
}

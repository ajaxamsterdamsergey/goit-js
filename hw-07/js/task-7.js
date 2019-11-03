'use strict';
const inputRange = document.querySelector('#font-size-slider');
inputRange.addEventListener('input', changeFontSize);
function changeFontSize(e) {
    const text = document.querySelector('#text');
    text.style.fontSize = '16px';
    const fontSize = 16;
    const textZoom = (inputRange.value / 100) * 2;
    text.style.fontSize = `${fontSize * textZoom}px`;
}

'use strict';
let items = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
function logItems(item) {
    let i = 1;
    for (const item of items) {
        console.log(`'${i} - ${item}'`);
        i++;
    }
}

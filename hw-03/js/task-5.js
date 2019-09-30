'use strict';
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];
const getAllPropValues = function(users, key) {
    const values = [];
    for (const user of products) {
        if (key in user) {
            values.push(user[key]);
        }
    }
    return values;
};
const result = getAllPropValues(products, 'name');
console.log(result);

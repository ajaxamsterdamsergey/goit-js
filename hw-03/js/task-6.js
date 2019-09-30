'use strict'
const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
];
const getAllPropValues = function(products, name) {
    const total = products.price * products.quantity;
    return total;
};
const result = getAllPropValues(
    { name: 'Радар', price: 1300, quantity: 4 },
    'Радар',
);
console.log(result);

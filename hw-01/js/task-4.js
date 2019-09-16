'use strict';
let credits = 23580;
const priceDroid = 3000;
let totalPrice = 0;
let userChoiсe = prompt(
    'Введите количество дроидов , которое желаете приобрести',
);

if (userChoiсe !== null) {
    totalPrice = priceDroid * userChoiсe;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
    } else {
        console.log(
            `Вы купили ${userChoiсe} дроидов, на счету осталось ${credits -
                totalPrice} кредитов.'`,
        );
    }
} else {
    console.log('Отменено пользователем!');
}

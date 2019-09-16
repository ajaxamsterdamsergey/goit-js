'use strict';
const costWayChina = 100;
const costWayChili = 250;
const costWayAustralia = 170;
const costWayIndia = 800;
const costWayJamaica = 120;

let userChoise = prompt('Выберите страну доставки').toLowerCase();

let message;
if (userChoise === null) {
    message = 'ну и пусть';
} else {
    switch (userChoise) {
        case 'китай':
            message = `Доставка в Китай будет стоить ${costWayChina} кредитов`;
            break;

        case 'чили':
            message = `Доставка в Чили будет стоить ${costWayChili} кредитов`;
            break;

        case 'австралия':
            message = `Доставка в Австралия будет стоить ${costWayAustralia} кредитов`;
            break;

        case 'индия':
            message = `Доставка в Индия будет стоить ${costWayIndia} кредитов`;
            break;

        case 'ямайка':
            message = `Доставка в Ямайка будет стоить ${costWayJamaica} кредитов`;
            break;
        default:
            message = 'В вашей стране доставка не доступна';
    }
}
alert(message);

'use strict';
const china = 'Китай'.toLowerCase();
const chili = 'Чили'.toLowerCase();
const australia = 'Австралия'.toLowerCase();
const india = 'Индия'.toLowerCase();
const jamaica = 'Ямайка'.toLowerCase();
const costWayChina = 100;
const costWayChili = 250;
const costWayAustralia = 170;
const costWayIndia = 800;
const costWayJamaica = 120;

const userChoise = prompt('Выберите страну доставки');

let message;
if (userChoise === null) {
    message = 'ну и пусть';
} else {
    switch (userChoise) {
        case china:
            message = `Доставка в ${china} будет стоить ${costWayChina} кредитов`;
            break;

        case chili:
            message = `Доставка в ${chili} будет стоить ${costWayChili} кредитов`;
            break;

        case australia:
            message = `Доставка в ${australia} будет стоить ${costWayAustralia} кредитов`;
            break;

        case india:
            message = `Доставка в ${india} будет стоить ${costWayIndia} кредитов`;
            break;

        case jamaica:
            message = `Доставка в ${jamaica} будет стоить ${costWayJamaica} кредитов`;
            break;
        default:
            message = 'В вашей стране доставка не доступна';
    }
}
alert(message);

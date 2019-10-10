'use strict';
/* const Counter = function({ initialValue = 0, step = 1 }) {
    this.value = initialValue;
    this.step = step;

    this.increment = function() {
        this.value += step;
    };
};
const counter = new Counter({ initialValue: 200, step: 5 });
console.log(counter);
const counter2 = new Counter({ initialValue: 400, step: 10 });
console.log(counter2);
counter.increment();
console.log(counter); */
///////////////////////////////////
class Hero {
    constructor(name, xp) {
        this.name = name;
        this.xp = xp;
    }
    changeName(name) {
        this.name = name;
    }
}
console.log(Hero);
const mango = new Hero('Olga', 200);
console.log(mango);

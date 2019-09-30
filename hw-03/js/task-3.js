'use strict';
let max = 0;
let name;
const findBestEmployee = function(employees) {
    const keys = Object.keys(employees);
    for (const key of keys) {
        if (max < employees[key]) {
            max = employees[key];
            name = key;
        }
    }
    return name;
};
const result = findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
});
console.log(result);

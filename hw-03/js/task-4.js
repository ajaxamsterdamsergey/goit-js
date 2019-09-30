'use strict';
let total = 0;
const countTotalSalary = function(employees) {
    const salaryKeys = Object.keys(employees);
    for (const key of salaryKeys) {
        total += employees[key];
    }
    return total;
};
const result = countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
});
console.log(result);

'use strict';
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};
user.mood = 'happy';
console.log(user);
user['hobby'] = 'javascript';
console.log(user);
user['premium'] = 'false';
console.log(user);
const entries = Object.entries(user);
for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];

    console.log(`${key}: ${value}`);
}

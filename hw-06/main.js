import users from './users.js';
const getUserNames = users => users.map(({ name }) => name);
console.log(getUserNames(users));

const getUsersWithEyeColor = (users, color) =>
    users.filter(({ eyeColor }) => eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue'));

const getUsersWithGender = (users, gender) =>
    users.filter(({ gender }) => gender === 'male').map(user => user.name);
console.log(getUsersWithGender(users, 'male'));

const getInactiveUsers = users => users.filter(({ isActive }) => !isActive);
console.log(getInactiveUsers(users));

const getUserWithEmail = (users, mail) =>
    users.find(({ email }) => email === mail);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

const getUsersWithAge = (users, min, max) =>
    users.filter(({ age }) => age >= min && age <= max);
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

const calculateTotalBalance = users =>
    users.reduce((total, { balance }) => (total += balance), 0);
console.log(calculateTotalBalance(users));

const getUsersWithFriend = (users, friendName) =>
    users
        .filter(({ friends }) => friends.find(el => el === friendName))
        .map(user => user.name);
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

const getNamesSortedByFriendsCount = users =>
    users
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(user => user.name);
console.log(getNamesSortedByFriendsCount(users));

const getSortedUniqueSkills = users =>
    users.reduce((total, { skills }) => {
        total.push(...skills);
        return total;
    }, []);

console.log(getSortedUniqueSkills(users));

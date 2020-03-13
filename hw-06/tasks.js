"use strict";

import users from "./users.js";

// ===================Task1========================

// Получить массив имен всех пользователей (поле name).

const getUserNames = users =>
  users.map(user => {
    return user.name;
  });

console.log("Task1: ", getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ===================Task2========================

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  // твой код
  return users.filter(user => user.eyeColor === color);
};

console.log("Task2: ", getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// ===================Task3========================

// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
  // твой код
  return users.filter(user => user.gender === gender).map(user => user.name);
};

console.log("Task3: ", getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ===================Task4========================

// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = users => {
  // твой код
  return users.filter(user => !user.isActive);
};

console.log("Task4: ", getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// ===================Task5========================

// Получить пользователя (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (users, email) => {
  // твой код
  return users.find(user => user.email === email);
};

console.log("Task5  @1: ", getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log("Task5  @2: ", getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

// ===================Task6========================

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (users, min, max) => {
  // твой код
  return users.filter(user => user.age >= min && user.age <= max);
};

console.log("Task6 age range1: ", getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log("Task6 age range2: ", getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ===================Task7========================

// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = users => {
  // твой код
  return users.reduce((sumBalance, user) => sumBalance + user.balance, 0);
};

console.log("Task7: ", calculateTotalBalance(users)); // 20916

// ===================Task8========================

// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  // твой код
  return users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log(
  "Task8 friendNameArray1: ",
  getUsersWithFriend(users, "Briana Decker")
); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(
  "Task8 friendNameArray2: ",
  getUsersWithFriend(users, "Goldie Gentry")
); // [ 'Elma Head', 'Sheree Anthony' ]

// ===================Task9========================

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = users => {
  // твой код
  const sortFriendNumber = (a, b) => a.friends.length - b.friends.length;
  return users.sort(sortFriendNumber).map(user => user.name);
};

console.log("Task9: ", getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// ===================Task10========================

// Получить массив всех умений всех пользователей (поле skills),
//  при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const userSkills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);
    return allSkills.sort();
  }, []);
  return [...new Set(userSkills)];
};

console.log("Task10: ", getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nul

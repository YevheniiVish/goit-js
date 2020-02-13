"use strict";
let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введите любое число!");
  if (input === null) {
    console.log("Отменено пользоватедем!");
    break;
  }
  input = Number(input);

  if (input == isNaN(input)) {
    console.log(`Вы ввели не число ${input} попробуйте еще раз!`);
    continue;
  } else if (input !== isNaN(input)) {
    console.log(`Вы ввели число ${input}!`);
    numbers.push(input);
    console.log(numbers);
    continue;
  }
}
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
  console.log(numbers[i]);
}
console.log(`Общая сумма чисел равна ${total}`);

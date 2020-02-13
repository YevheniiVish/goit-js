"use strict";

const formatString = function(string) {
  if (string.length <= stringSlice) {
    console.log(`Длина ${string} не превышает ${stringSlice} символов!`);
    return string;
  } else if (string.length > stringSlice) {
    console.log(`Длина ${string} превышает ${stringSlice} символов!`);
    return string.slice(0, 40) + "...";
  }
};

let stringSlice = 40;

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка

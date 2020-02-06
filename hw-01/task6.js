"use strict";

const isInputNumber = prompt("Введите число", " ");
let result;
let total = 0;

do {
  result = isInputNumber;
  if (!Number.isNaN(result)) {
    total += result;
  }
  alert(total);
} while (result !== null);

alert(result);

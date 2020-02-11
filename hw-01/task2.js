"use strict";
const total = 100;
const ordered = 20;
let message;

if (ordered > total) {
  message = `На складе не достаточно товаров!`;
} else if (ordered === total) {
  message = `Заказ оформлен, с вами свяжется менеджер`;
} else {
  message = `Заказ оформлен, с вами свяжется менеджер`;
}
console.log(message);

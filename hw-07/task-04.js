/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
*/

"use strict";

let counterValue = 0;

// const incrementBtn = document.querySelector('button[data-action="decrement"]');

const objBtn = {
  decrementBtn: document.querySelector(`button[data-action="decrement"]`),

  incrementBtn: document.querySelector(`button[data-action="increment"]`),

  valueBtn: document.querySelector("#value")
};

objBtn.decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  objBtn.valueBtn.textContent = counterValue;
});

objBtn.incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  objBtn.valueBtn.textContent = counterValue;
});

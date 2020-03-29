/* Напиши скрипт, который реагирует на изменение значения
 input#font-size-control (событие input) и изменяет 
 инлайн-стиль span#text обновляя свойство font-size.
  В результате при перетаскивании ползунка будет меняться 
  размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

const input = document.querySelector("#font-size-control[type=range]");
const text = document.querySelector("#text");

input.addEventListener("input", input => {
  const value = input.currentTarget.value;
  text.style.fontSize = value + "px";
});

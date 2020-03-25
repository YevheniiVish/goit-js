// Напиши скрипт, который для каждого элемента массива ingredients
//  создаст отдельный li, после чего вставит все li
// за одну операцию в список ul.ingredients.
// Для создания DOM-узлов используй document.createElement().

"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const listIngedients = document.querySelector("#ingredients");
console.log(listIngedients);

const ingredientItem = document.createDocumentFragment();

ingredients.forEach(element => {
  const createIngredientLi = document.createElement("li");
  createIngredientLi.textContent = element;
  ingredientItem.append(createIngredientLi);
});

listIngedients.append(ingredientItem);

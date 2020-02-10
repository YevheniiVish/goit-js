//   Напиши скрипт подсчета стоимости гравировки украшений.
//   Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
//   принимающую строку (в строке будут только слова и пробелы)
//   и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.



const calculateEngravingPrice = function(message, pricePerWord = 10) {
  const words = message.split(" ");
  const length = words.length;
  let total = length * pricePerWord;

  for (const word of words) {
    total === pricePerWord;
  }
  return total;
};


console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
//  Функция считает общую сумму запрплаты работников и возращает ее.
//  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
let total = 0;
const countTotalSalary = function(employees) {
  const salaryValues = Object.values(employees);

  console.log(salaryValues);
  let total = 0;

  for (const value of salaryValues) {
    total += value;
  }

  return total;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
); // 400

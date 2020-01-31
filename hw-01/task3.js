const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const promptlabel = `Ведите пароль`;
let userLogin = prompt(promptlabel);

if (userLogin === null) {
  message = "Отменено пользователем!";
} else if (userLogin == ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

alert(message);

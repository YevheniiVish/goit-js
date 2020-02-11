"use strict";
const countryCreditChina = 100;
const countryCreditChile = 250;
const countryCreditAustralia = 170;
const countryCreditIndia = 80;
const countryCreditJamaica = 120;

let result = prompt("Ведите вашу страну", "");

if (result === null) {
  alert("cancel");
} else {
  const country = result.toLowerCase();
  switch (country) {
    case "китай": {
      countryCreditChina;
      alert(
        `Доставка в ${country} будет стоить ${countryCreditChina} кредитов`
      );
      break;
    }
    case "чили": {
      countryCreditChile;
      alert(
        `Доставка в ${country} будет стоить ${countryCreditChile} кредитов`
      );
      break;
    }
    case "австралия": {
      countryCreditAustralia;
      alert(
        `Доставка в ${country} будет стоить ${countryCreditAustralia} кредитов`
      );
      break;
    }
    case "индия": {
      countryCreditIndia;
      alert(
        `Доставка в ${country} будет стоить ${countryCreditIndia} кредитов`
      );
      break;
    }
    case "ямайка": {
      countryCreditJamaica;
      alert(
        `Доставка в ${country} будет стоить ${countryCreditJamaica} кредитов`
      );
      break;
    }

    default: {
      alert("В вашей стране доставка не доступна");
      break;
    }
  }
}

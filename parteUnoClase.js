let Fechas = require("./dateController");

let cumple = "22/12/1979";
let FECHA = new Fechas(cumple);

console.log("TODAY -----> ", FECHA.getToday());
console.log("YEARS -----> ", FECHA.getDifferenceYear());
console.log("DAYS -----> ", FECHA.getDifferenceDays());
console.log("BIRTHDAY -----> ", FECHA.birthday.format("L"));

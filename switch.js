"use strict";

var edad = 18;
var texto = "";

switch (edad) {
  case 17:
    texto = "No tienes 18 años";
    break;

  case 18:
    texto = "Eres mayor de edad";
    break;

  default:
    texto = "Parece que no tienes edad";
}

console.log(texto);

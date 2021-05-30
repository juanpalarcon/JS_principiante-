"use strict";

var numero = 20;
var texto = "hola";
if (true) {
  // con let modificamos el valor de la variable dentro del bloque que estamos ocupando
  let numero = 40;
  let texto = "hola todo el mundo";
  console.log(numero);
  console.log(texto);
}

console.log(numero);
console.log(texto);

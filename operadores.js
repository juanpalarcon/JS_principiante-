"use strict";

var numero = 2;
var numero2 = 5;

//Operadores basicos

//Suma
var resultados_suma = numero + numero2;
//Resta
var resultados_resta = numero - numero2;
//Division
var resultados_division = numero / numero2;
//Multiplicacion
var resultados_multiplicacion = numero * numero2;

console.log("El resultado de la suma es: " + resultados_suma);
console.log("El resultado de la resta es: " + resultados_resta);
console.log("El resultado de la division es: " + resultados_division);
console.log(
  "El resultado de la multiplicacion es: " + resultados_multiplicacion
);

//Operadores de incremento

resultados_suma++;
console.log("Incremento ++ " + resultados_suma);
resultados_suma--;
console.log("Restamos --" + resultados_suma);

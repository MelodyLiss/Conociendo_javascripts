
//!Convertidor 

/* Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día. (3 Puntos)
Se debe considerar lo siguiente:
● 1 año tiene 365 días
● 1 semana tiene 7 días */

console.log ("hola");

var dias = 845 ;


var years = dias /365;
var dias_restantes = dias % 365;
var semanas = dias_restantes/ 7;
dias_restantes = dias_restantes% 7;

console.log(Math.floor(years));
console.log(Math.floor(dias_restantes));
console.log(Math.floor(semanas));
console.log(Math.floor(dias_restantes));


var numero_1 = 5;
var numero_2 = 5;
var numero_3 = 5;
var numero_4 = 5;
var numero_5 = 5;

suma = numero_1 + numero_2 + numero_3 + numero_4 + numero_5
console.log(suma)

promedio = suma / 5
console.log(promedio)
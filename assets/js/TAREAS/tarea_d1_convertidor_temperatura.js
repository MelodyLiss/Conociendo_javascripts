//!Convertidor de grados
//01.-Pedir el dato en Celsius
let Celsius = parseFloat(prompt("Ingresa los grados en Celsius"));

//02.- Transformar a Kelvin 
let Kelvin = Celsius + 273.15 ;

//03.- Transformar a Fahrenheit
let Fahrenheit = (Celsius * 9/5) + 32 ;

//04.- Mostrar en consola 
console.log(`La temperatura actual es: ${Celsius}C° ,  ${Kelvin}K° y  ${Fahrenheit}F°`);

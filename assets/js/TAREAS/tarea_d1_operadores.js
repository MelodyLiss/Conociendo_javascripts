
//! Realización de operaciones aritmeticas

let numero_A; //01 declaramos las variables para los numeros
let numero_B;

numero_A = parseFloat(prompt("Ingresa el primer valor")); // 02 solicitamos los numeros al usuario y los parceamos a numeros
numero_B = parseFloat(prompt("Ingresa el segundo valor"));

let suma = numero_A + numero_B ; //03 realizamos las operaciones 
let resta = numero_A - numero_B ;
let multiplicacion = numero_A * numero_B ;
let division = numero_A / numero_B ;
let modulo = numero_A % numero_B ;

console.log (`La suma de tus numeros es igual a ${suma}`); // 04 mostramos las operaciones por consola
console.log (`La resta de tus numeros es igual a ${resta}`);
console.log (`La multiplicación de tus numeros es igual a ${multiplicacion}`);
console.log (`La división de tus numeros es igual a ${division}`);
console.log (`El residuo de tus numeros es igual a ${modulo}`);

//<> Otra alternativa :
//Si no necesito conservar cada resultado en una nueva variable (suma/resta etc..) tambien podemos crear una unica variable la cual se irá seasignando.

let resultado;

resultado = numero_A + numero_B;    
console.log (`El resultado de la suma es ${resultado}`);
resultado = numero_A - numero_B;
console.log (`El resultado de la resta es ${resultado}`);
resultado = numero_A * numero_B;
console.log (`El resultado de la multiplicacion es ${resultado}`);
resultado = numero_A / numero_B;
console.log (`El resultado de la división es ${resultado}`);
resultado = numero_A % numero_B;
console.log (`El Residuo de la división es ${resultado}`);



//!Convertidor de días
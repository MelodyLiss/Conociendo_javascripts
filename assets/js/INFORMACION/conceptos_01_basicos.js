
//!FUNCIONES:
/* Son un bloque de código o un conjunto de instrucciones que realiza una tarea específica y que puede reutilizarse a voluntad. */


//!Ejemplos de funciones predefinidas por el programa (para mostrar mensajes)
/* 
console.log("Para mensajes visualizados por consola");
alert("Para mensajes emergentes");
prompt("Para mensajes emergentes que te pidan responder"); */

//!Variables 
//Son datos que se almacenan en la memoria ,por lo que son volatiles.

//<> Conceptos en relación a la creación de una variable

// 01.Declaración : Reservar el espacio en memoria.
var mi_variable; // debemos usar una palabra reservada (var - let - const)

// 02.Inicializar : Asignar el primer valor a esa variable.
mi_variable = "Esta es mi variable";

//03.Invocar: Usar dicha variable
console.log(mi_variable); // en la consola se visualizará el mensaje "Esta es mi variable"

//04.Reasignar : Cambiarle el valor a la variable.
mi_variable = "Mi variable tiene un nuevo valor";
console.log(mi_variable)//ahora se visualizará el nuevo valor asignado

var mensaje_1 = "Hola";  //inicializamo y asignamos  las variables mensajes
var mensaje_2 = "¿Como tan muchacho?"; 
var saludo = mensaje_1 + mensaje_2 ; // inicializamos saludo y le asignamos la suma de las variables
console.log(saludo); //invocamos saludo el cual contendrá ambas variables

//!Tipos de datos

var string = "Cadena de carácteres" ; //van entre comas simples o sencillas "" '' 
var number = 1 ; // números enteros (int) ,decimales/flotantes(float) etc...
var bool = true ;// booleanos , solo admite True o False 
var underfined ; // cuando el valor no esta definido

//javascript , es debilmente tipado , esto quiere decir que dentro de nuestro código a una misma variable le podemos reasignar diferentes tipos de datos.

var prueba = "mi variable partió como un string";
console.log(typeof(prueba)); //typeof para ver el tipo de dato.

prueba = 10.5;
console.log(typeof(prueba));  

prueba = false;
console.log(typeof(prueba)); 

//mantuvimos la misma variable , la cual tuvo "tipos de datos distinto"

//!Parcear 
//Es cambiar el tipo de dato. 
console.log("Parcear")
var mi_dato = "12"  //variable de ejemplo
console.log(typeof(mi_dato));  // el tipo de dato es un Str
mi_dato = parseInt(mi_dato); //parseInt cambia a número entero
console.log(typeof(mi_dato));  // ahora al comprobar vemos que a cambiado a number.
console.log(mi_dato) // podemos comprobar que alteramos el tipo de dato no la información del mismo

//!Operar una variable 
//Operadores básicos 

//<> Operadores aritmeticos  
//Los de toda la vida pues 

var a = 9
var b = 3
var c = "9"

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b) //modulo --> entrega el residuo de una división

//<> Operadores Lógicos
//nos entregarán como resultado un valor booleano

console.log (a < b)
console.log (a > b)
console.log (a <= b) //menor o igual a
console.log (a >= b) //mayor o igual a

console.log (a == b ) //¿ a es igual a b?
console.log  (a != b) // a no es igual a b?

console.log (a == c) // ¿a es igual a c? 
console.log (a === c) // ¿a es igual a c?

// Cuando colocamos 3 signos igual para hacer una comparación , estamos indicando que se realizará de manera estricta , tomando en cuenta el valor de la variable y el tipo de dato , por eso nos da con uno "TRUE" y con el otr "FALSE"

//<> Operadores para cadenas de caracteres

var d = "buenos "
var e = "días"

//* Concatenar = juntar/sumar string
console.log (d+e) 

//* Interpolar = inserción de valores de variables o expresiones dentro de una cadena de texto. Es una forma más elegante y legible de combinar strings con valores dinámicos . Para esto , debemos usar  este simbolo backtic --> `` y anteponer un $ y encerrar entre llaves el nombre de la variable.

console.log (`${d} ${e} muchachos!!`)

//* Otro ejemplo comparativo entre concatenar y interpolar
// Queremos mostrar por consola lo siguiente : El resultado de la suma de 2 + 5  es = 7

var n1 = 2
var n2 = 5
var suma = n1 + n2

console.log("El resultado de la suma de " + n1 + " + " + n2 + "es = " + suma  ) // con concatenación
console.log (`El resultado de la suma de ${n1} + ${n2} es = ${suma}`) // con

//<> EXPRESION --> conjunto de datos que se pueden reducir a 1 solo dato.






//!Operadores lógicos ("and --> &&"  //  "Or --> ||"   //     "Negación --> !")
//Recordemos los operdores de comparación // > < = ,
//Podemos usar los operadores logicos para tener varias comparaciones

console.log( 2 == 2  &&  2 == 3); //2 es igual a 2 y 2 es igual a 3 ?  Con el and , todas las condiciones deben ser verdaderas para que de true
console.log( 2 == 2  &&  3 == 3); //2 es igual a 2 y 2 es igual a 3 ?  Con el and , todas las condiciones deben ser verdaderas para que de true

console.log( 2 == 2  || 2 == 3); //2 es igual a 2 y 2 es igual a 3 ?  Con el or , basta que una condición sea verdadera para que tome el true
console.log( 2 == 2  || 3 == 3);


//! Instrucciones de control de flujo 

// <> IF

/* if( condicion que quiero que quiero evaluar ){
    Lo que quiero que ocurra si mi condicion se cumple
} */

// Solicitar la edad a una persona para saber si es mayor de edad

var edad = prompt('Ingrese su edad: ');
edad = parseInt(edad);

if (edad >= 18){
    console.log(`Tiene ${edad}. Menos mal que ya es mayor de edad !!!`)
}

//En base a 2 colores: rojo y verde.Indique cual es el color favorito

var color_favorito = prompt('Entre rojo y verde ¿Cual es su color favorito?');
if (color_favorito == rojo){
    console.log ("Su color favorito es el rojo")
}
else {  //si no se cumple la condición se entrega esto
    console.log("Su color favorito es el verde") 
}

// y si tenemos 4 colores ? Tenemos una nueva opción --> else if 
var color_favorito = prompt('Entre rojo verde amarillo y azul ¿Cual es su color favorito?');
if (color_favorito == rojo){
    console.log("El color favorito es el rojo")
}
else if (color_favorito == verde){ 
    console.log("El color favorito es el verde")
}

else if (color_favorito == amarillo){ 
    console.log("El color favorito es el amarillo")
}
else{
    console.log("El color favorito es el azul")
}

//Anidación --> Es tener un bloque de instruccion dentro de otro

var edad = 18 
if (edad >= 18){
    if (edad <=30){
        console.log ("Tranqui , sigues siendo joven")
    }
    else{
        console.log ("Eres muy joven")
    }
}
else {
    console.log ("Tas muy chiquito")
}

//<> Switch 
// Sirve para condicionar en base a casos. Repasemos el ejemplo de los 4 colores
var color_favorito = "naranjo"

switch (color_favorito){
    case "rojo":
        console.log("El color favorito es el rojo")
        break;

    case "amarillo":
        console.log("El color favorito es el amarillo")
        break;

    case "azul":
        console.log("El color favorito es el azul")
        break;
    
    case "verde":
        console.log("El color favorito es el verde")
        break;

    default:
        console.log("No tengo ese color en mi base de datos xd")
}











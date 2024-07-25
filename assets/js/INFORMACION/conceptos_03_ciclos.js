//! CICLOS Y BUCLES (ITERACIÓN)
//while/ do while --- FOR

//iteracion --> es la acción de repetir un conjunto de pasos una y otra vez, posiblemente con ajustes o modificaciones en cada ciclo, hasta alcanzar un objetivo específico.

//<> FOR (para)

//Ejemplo : Solicitar 10 numeros y mostrarlos por consola.
// para (inicio ; hasta ; salto )
for (var i = 1; i <= 10; i = i + 1) { // i parte en 1 y mientras i sea igual o menor a 10 , a i se le sumará 1.
    var numero = prompt(`Ingrese el ${i}° número: `);
    console.log(`El ${i}° número es : ${numero}`)
}

//Ejemplo 2 , el usuario entrega la candidad de numeros que desea ingresar

var limite = parseInt(prompt('¿Cuantos números quiere ingresar?'))
for (var i = 1; i <= limite; i = i + 1) {
    var numero = prompt(`Ingrese el ${i}° número: `);
    console.log(`El ${i}° número es : ${numero}`)
}

//<> WHILE (mientras)  DO WHILE 
//Se ejecuta mientras se cumpla la condición , por lo que puede ocurrir que no se ejecute nunca (repetirse 0 veces)

// while (condicional){
//bloque de instrucciones}

//Importante !!!!! En algún momento del bloque de instrucciones , debemos hacer que la condición deje de cumplirse , de lo contrario el bucle será infinito .

// Ejemplo

// Identicar si un número es par o impar. Se debe solicitar un numero hasta que ingrese un impar

var numero = prompt("Ingrese un número");
var estado = true;

while (estado) {
    if (numero % 2 ==1){
        estado = false;
    }else{
        numero = prompt("Ingrese un número")
    }
}
// <> DO WHILE 

// do {
// boque de instrucciones
//}while (condicional);

// Si visualizamos el codigo , el "while" esta al final ,esto nos da a entender que, el DO WHILE se va a ejecutar al menos una vez , a diferencia del while que como ya se mencionó se puede dar la instancia de que no se ejecute.

// Identicar si un número es par o impar. Se debe solicitar un numero hasta que ingrese un impar

do{
    var numero = prompt("Ingrese un número");
    var estado = true;
    if(numero % 2 == 1){
        estado = false;
    }
}while(estado == true); 
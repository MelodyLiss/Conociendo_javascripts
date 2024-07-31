
//!FUNCIONES:
/* Son un bloque de código o un conjunto de instrucciones que realiza una tarea específica y que puede reutilizarse a voluntad. */

// function <nombre_funcion> (){
//     bloque de código
// }

// <nombre_funcion>(); --> Llamar a la función


//Ejemplo --> Crear una funcion si un número es par o impar 
//El programa se deberá detener cuando el usuario ingrese un número par
function parImpar(){
    do{
        var numero = prompt("Ingrese un número");
        var estado = true;
        if(numero % 2 == 1){
            estado = false;
        }
    }while(estado == true); 
}

parImpar()

//!funcion con retorno .
    //Retorna algún dato , para ello usamos la palabra reservada "return".
    //La opcion con retorno , siempre es la última en ejecutarse y siempre se retorna un único valor.
    function funcionConRetorno(){
        return "esto es lo que devuelve la funcion";
    }

    console.log(funcionConRetorno());
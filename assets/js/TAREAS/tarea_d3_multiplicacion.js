
// Una empresa del área educacional te ha contratado para desarrollar programas que les
// permitan realizar distintos tipos de cálculos matemáticos para facilitar el aprendizaje de sus
// estudiantes.
// Para ello, en una primera etapa, te han pedido un programa que al ingresar un número,
// obtenga las tablas de multiplicar desde el 1 hasta el número ingresado. Además, debe
// mostrar el factorial para los mismos números. El resultado debe ser mostrado por la consola
// del navegador, por ejemplo, si ingresan el número 3 en la consola deberían obtener el
// siguiente resultado:
// 1 x 3 = 3
// 2 x 3 = 6
// 3 x 3 = 9
// Factorial de 1 es: 1
// Factorial de 2 es: 2
// Factorial de 3 es: 6


function Matematica(){
let numero = parseInt(prompt("Ingresa un número entre el 1 y el 20 "));


    if (numero >= 1 && numero <= 20 ){
        Tablas_multiplicacion(numero);
        Factorial(numero);
    } else {
        console.log("El número ingresado no es válido");
    }
}

function Tablas_multiplicacion(numero){
    for(let i = 1; i <= numero ; i++){  // i++ es para sumar de 1 en 1
        console.log(`${numero} X ${i} = ${numero*i}`)
    }
}

function Factorial(numero){
    let resultado_factorial = 1;
    for(let i = 1; i <= numero ; i++){
        resultado_factorial = i * resultado_factorial ;
        console.log(`El factorial de ${i} es ${resultado_factorial}`)
        }
        console.log("No me gustan las matematicas :c")
    }

Matematica();


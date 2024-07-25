
var numero_jugadas = prompt("¿Cuantas veces quieres jugar?");
numero_jugadas = parseInt(numero_jugadas);

// //---------------------------------------------------------

// // Validación para que sea solo número mejorar esta linea más adelante

// if (! isNaN(numero_jugadas)){
//     numero_jugadas = parseInt(numero_jugadas);
// }
// else {
//     alert("INGRESE SOLO DIGITOS!")
// }

// // --------------------------------------------------------

for (i = 1; i <= numero_jugadas; i = i + 1) {
    //!Logica de piedra papel o tijera

    var jugada_usuario = prompt("ingresa: piedra , papel o tijera");
    var jugada_maquina = Math.floor(Math.random() * 3);

    switch (jugada_maquina) {
        case 0:
            jugada_maquina = "piedra"
            break;
        case 1:
            jugada_maquina = "papel"
            break;
        default:
            jugada_maquina = "tijera"
    }

    if (jugada_usuario == "tijera") {
        if (jugada_maquina == "papel") {
            alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n ¡TU GANAS!🥳🥳🥳`);
        } else if (jugada_maquina == "piedra") {
            alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n ¡MALA SUERTE!☠️☠️☠️`);
        } else {
            alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n 😲¡EMPATE!😲`);
        }
    } else if (jugada_usuario == "papel") {
        if (jugada_maquina == "piedra") {
            alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n ¡TU GANAS!🥳🥳🥳`)
        } else if (jugada_maquina == "tijera") {
            alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n ¡MALA SUERTE!☠️☠️☠️`)
        } else {
            alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n 😲¡EMPATE!😲`)
        }
    } else {
        if (jugada_maquina == "tijera") {
            alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n ¡TU GANAS!🥳🥳🥳`)
        } else if (jugada_maquina == "papel") {
            alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n ¡MALA SUERTE!☠️☠️☠️`)
        } else {
            alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n 😲¡EMPATE!😲`)
        }
    }
}





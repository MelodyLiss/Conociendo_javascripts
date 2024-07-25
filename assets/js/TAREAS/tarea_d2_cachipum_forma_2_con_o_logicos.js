
var numero_jugadas = prompt("¿Cuantas veces quieres jugar?");
numero_jugadas = parseInt(numero_jugadas);

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


if (jugada_usuario == "piedra" && jugada_maquina =="piedra" || jugada_usuario == "papel" && jugada_maquina  =="papel"|| jugada_usuario =="tijera" && jugada_maquina == "tijera" ) {
    alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n 😲¡EMPATE!😲`);
}

else if (jugada_usuario == "piedra" && jugada_maquina =="tijera" || jugada_usuario == "papel" && jugada_maquina == "piedra"|| jugada_usuario =="tijera" && jugada_maquina == "papel" ) {
    alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n ¡TU GANAS!🥳🥳🥳`)
}

else {
    alert(`Has jugado ${jugada_usuario} y la maquina ${jugada_maquina} \n ¡MALA SUERTE!☠️☠️☠️`)
}
}





//!Manipulación del DOM
//Las siglas DOM significan Document Object Model o lo que es lo mismo, la estructura del documento HTML.

var header = document.getElementById('encabezado'); //acceder a un elemento del html , mediante un ID
console.log(header);
var mensaje_js = document.getElementById('mensaje_js');
mensaje_js.innerHTML = "Este mensaje fue escrito desde Javascripts"; //innerHTML sirve para modificar el interior del elemento HTML designado.

var txt_nombre = prompt("ingresa tu nombre");
nombre_input = document.querySelector('.nombre');
nombre_input.innerHTML = txt_nombre;



// EXPRESION --> conjunto de datos que se pueden reducir a 1.
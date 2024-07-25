//!Manipulación del DOM
//Las siglas DOM significan Document Object Model o lo que es lo mismo, la estructura del documento HTML.

//<> Acceder a un elemento HTMl para poder manipularlo
//document.

var header = document.getElementById('encabezado'); //acceder a un elemento del html , mediante un ID
console.log(header);
var mensaje_js = document.getElementById('mensaje_js');
mensaje_js.innerHTML = "Este mensaje fue escrito desde Javascripts"; //innerHTML sirve para modificar el interior del elemento HTML designado.

var txt_nombre = prompt("ingresa tu nombre");
nombre_input = document.querySelector('.nombre');
nombre_input.innerHTML = txt_nombre;

//<> Eventos
//addEventListener(parametro_1,parametro_2 ) Agregar un evento de escucha 
// esta funcion recibe 2 parametros:
    //el primero hace relacion a como quiero que escuche , es decir que evento quiero que haga por ejemplo a través de un click , doble click etc...
    //el segundo recibe la accion que quiero que se realice , es decir una funcion , la cual puedo invocar una funcion previamente creada , o bien en el mismo paremetro declarar la funcion completa . En este último caso la función no necesita ser nombrada a lo que se conoce como función anonima.

btn_naranja = document.querySelector(".naranjo");
btn_celeste = document.querySelector(".celeste");

btn_naranja.addEventListener('click',function(){
    nombre_input.classList.add("naranjo ")
}) //ARREGLAR DESPUES PORQUE YA ME CANSE >:c 













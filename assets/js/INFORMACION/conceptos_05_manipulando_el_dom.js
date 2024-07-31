//<> Manipulación del DOM
//Las siglas DOM significan Document Object Model o lo que es lo mismo, la estructura del documento HTML.

//! Acceder a un elemento HTMl
//document. --> Es un "objeto" que  representa toda la estructura del HTML y proporciona métodos y propiedades que permiten acceder y manipular los elementos del HTML.

let  header = document.getElementById('encabezado'); 
// .getElementByID --> Conseguir un elemento por ID , tenemos para clases , tag etc...

let mensaje = document.querySelector('#mensaje_js');
//querySelector --> Seleccionamos un elemento , ID o Clase , para ello entre los () debemos llamarlo del mismo modo como lo hacemos en el CSS 
    // ID = #nombre   CLASE = .nombre  Etiqueta = Nombre_etiqueta.

console.log(header);

//!Cambiando elementos HTML

//<> innerHTML
//Para obtener el contenido de alguna etiqueta

//<> setAttribute
//Para configurar atributos de los elementos del DOM








mensaje_js.innerHTML = "Este mensaje fue escrito desde Javascripts"; //innerHTML sirve para modificar el interior del elemento HTML designado , modificandolo toooodo lo del interior , asique cuidadito !!


//<> Eventos
//addEventListener(parametro_1,parametro_2 ) Agregar un evento de escucha 
// esta funcion recibe 2 parametros:
    //el primero hace relacion a como quiero que escuche , es decir que evento quiero que haga por ejemplo a través de un click , doble click etc...Se declará como un string. 
    //el segundo recibe la accion que quiero que se realice , es decir una funcion , la cual puedo invocar una funcion previamente creada , o bien en el mismo paremetro declarar la funcion completa . En este último caso la función no necesita ser nombrada a lo que se conoce como función anonima.

btn_naranja = document.querySelector(".naranjo");
btn_celeste = document.querySelector(".celeste");

btn_naranja.addEventListener('click',function(){
    nombre_input.classList.add("naranjo ")
}) //ARREGLAR DESPUES PORQUE YA ME CANSE >:c 















//! 01 ._ Transformar el siguiente código de JavaScript a jQuery.

// let button = document.getElementById('button');
// button.addEventListener('click', function(){
// alert('click sobre el botón');
// });

let button = $('button');
button.click(function(){
    alert('click sobre el botón');
})


//!Manipulación de elementos del DOM con jQuery

    //<> 02.A ._Selecciona, almacena en variables y muestra cada una de ellas para los elementos HTML mediante los selectores del tipo id de jQuery.

    let titulo1ID = $('#titulo_1');
    let titulo2ID = $('#titulo_2');
    let spanID = $('texto_1');
    let btn1ID = $('btn1');

    console.log(titulo1ID);
    console.log(titulo2ID);
    console.log(spanID);
    console.log(btn1ID);

    //<> 02.B ._ Selecciona, almacena en variables y muestra cada una de ellas para los elementosHTML mediante los selectores del tipo class de jQuery.

    let titulosClass = $('titulos');
    
    //<> 02.C ._ Para el siguiente HTML, selecciona mediante los elementos generales todos los <li> que tienen el texto “Nested item”. Igualmente, añade un color al texto, en este caso debe ser el color rojo.
    let lista1 = $('.todos');
    //la segunda lista  , despues un ul y 3 listas

$('.todos li ul li').css('color', 'red')




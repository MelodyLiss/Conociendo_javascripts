//!AGREGAR Y MODIFICAR ELEMENTOS DEL HTML DE MANERA MÁS DINAMICA 

//<> Crear elemento:
let elemento = document.createElement('div'); 
// es igual a la estructura vista antes como el getElementByID :D 

//! Métodos para agregar y modificar elementos al HTML.
//A parte del innerHTML o el setAttribute que nos va a modificar toodo el contenido , tenemos unas opciones más dinamicas.

    //<> appendChild():

    elementopadre.appendChild(elementohijo);
    // Sirve para agregar un elemento(elementohijo)  dentro de otro (elementopadre).
    // El elemento será agregado al final de la lista de elementos que esten dentro del padre.

    //<> insertBefore():
    parentElement.insertBefore(newElement, referenceElement);
    //Inserta un nuevo elemento antes de un elemento de referencia como hijo de un elemento padre especificado. 

    //<> append():
    //Permite añadir múltiples nodos y cadenas de texto al final del elemento padre.
    let padre = document.querySelector('#padre');
    let hijo1 = document.createElement('div');
    let hijo2 = document.createElement('span');
    padre.append(hijo1, 'Texto', hijo2);

    //<> prepend():
    //Similar a append(), pero añade los elementos al principio del elemento padre.
    let padre2 = document.querySelector('#padre');
    let hijo = document.createElement('div');
    padre2.prepend(hijo, 'Texto al principio');

    //<> insertAdjacentElement():
    //Inserta un elemento en una posición específica relativa al elemento objetivo.
    let objetivo = document.querySelector('#objetivo');
    let nuevoElemento = document.createElement('div');
    objetivo.insertAdjacentElement('beforebegin', nuevoElemento);
    // Posiciones: 'beforebegin', 'afterbegin', 'beforeend', 'afterend' (PROFUNDIZAR)

    //<>after():
    // Inserta elementos después del elemento especificado.
    elemento = document.querySelector('#elemento');
    let nuevo = document.createElement('div');
    elemento.after(nuevo, 'Texto después');

    //<> before():
    // Inserta elementos antes del elemento especificado.
    elemento = document.querySelector('#elemento');
    let nuevo2 = document.createElement('div');
    elemento.before(nuevo2, 'Texto antes');

    //<> replaceWith():
    // Reemplaza un elemento con uno o más nodos o cadenas de texto.
    viejo = document.querySelector('#viejo');
    let nuevo3 = document.createElement('div');
    viejo.replaceWith(nuevo3, 'Texto de reemplazo');

    //<> insertAdjacentHTML():
    //Inserta una cadena HTML en una posición específica relativa al elemento.
    elemento = document.querySelector('#elemento');
    elemento.insertAdjacentHTML('beforeend', '<div>Nuevo contenido HTML</div>');
    //Posiciones: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'


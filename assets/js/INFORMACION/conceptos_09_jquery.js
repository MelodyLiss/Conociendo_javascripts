//<> Usando HTML JQuery30julio
//!JQuery (Un framework para JS)

    //FRAMEWORK --> Es un marco de trabajo que comunmente esta compuesto por varias librerias y suele ser escrito en el lenguaje nativo para el que fue construido.

    //Actualmente se recomienda trabajar JS vainilla. o-O pero pues , igual nos toca aprenderlo xd 

//<>EJEMPLO DE COMPARACION
// Cambiar color de fondo con un click al h1

    //! CON JS VAINILLA
        let tituloJS =document.querySelector("#tituloVainilla");
        tituloJS.addEventListener("click",function(){
            tituloJS.style.backgroundColor = "#f7e01e"; 
            tituloJS.style.color ="white";
            tituloJS.style.padding = "2rem";
            tituloJS.style.textAlign = "center";
            //lo se , todo los estilos los pude meter en una pura linea de código pero dejenme ser feliz XD
        })

    //! CON JQUERY
    //jQuery siempre trajaba en relacion a selectores !
    let tituloJQuery =$('#tituloJquery');
    tituloJQuery.click(function(){
        tituloJQuery.css({"background-color":"#13add6","color":"white","padding":"2rem"}); //asi para meter varios estilos
        tituloJQuery.css("text-align","center") // asi para solo 1 estilo
    });


//<> EVENTO FOCUS ON

// completar con el codigo del profe :c que me quede atras por hablar con el Tonoto <3

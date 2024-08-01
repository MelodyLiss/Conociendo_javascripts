//! Funcion de JQuery para usar AJAX y asi poder consumir una APIREST (hacer una solicitud)

$.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    dataType: "Json",
    success: function (response) {
        console.log(response[0]);
    }
});
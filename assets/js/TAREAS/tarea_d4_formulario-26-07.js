
let btnRegistrar = document.querySelector('.btn');

btnRegistrar.addEventListener('click',function(){
    let txtCorreo = document.querySelector('#txtCorreo');
    let txtClave = document.querySelector('#txtClave');
    let txtNombreUsuario = document.querySelector('#txtNombreUsuario');

    let reSoloCadenas = new RegExp("^[a-zA-Z]+$");
    let reFormaClave = new RegExp("");
    let reFormaCorreo = new RegExp("");


    if(txtCorreo.value == txtClave){

    }
    if(txtClave.value == txtClave){

    }
    if(reSoloCadenas.test(txtNombreUsuario.value)) {
        console.log("Nombre Valido")
    }else{
        console.log("Nombre invalido")
    }
});
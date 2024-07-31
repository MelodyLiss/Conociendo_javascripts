
let btnAgregarProducto = document.querySelector("#btnAgregarProducto");
let btnCalcularTotal = document.querySelector("#btnCalcularTotal");

let productos = [];

btnAgregarProducto.addEventListener("click",function(){
    let cuerpoTabla =document.querySelector("#cuerpoTabla");
    let txtCodigoProducto =document.querySelector("#codigoProducto");
    let txtNombreProducto =document.querySelector("#nombreProducto");
    let txtDescripcionProducto =document.querySelector("#descripcionProducto");
    let txtPrecioUnitario =document.querySelector("#precioProducto")
    let txtCantidadProducto =document.querySelector("#cantidadProducto");
    let cadenaDatos ="";

    let producto = {
        codigoProducto : txtCodigoProducto.value,
        nombreProducto: txtNombreProducto.value,
        descripcion: txtDescripcionProducto.value,
        precioUnitario: txtPrecioUnitario.value,
        cantidad:txtCantidadProducto.value
    } 

    productos.push(producto);
    for(let i= 0; i < productos.length;i++){
        cadenaDatos = cadenaDatos + `<tr>
                                        <th>${productos[i].codigoProducto}</th>
                                        <th>${productos[i].nombreProducto}</th>
                                        <th>${productos[i].descripcion}</th>
                                        <th>${productos[i].precioUnitario}</th>
                                        <th>${productos[i].cantidad}</th>
                                        <th>${(productos[i].precioUnitario * productos[0].cantidad)* 0.19}</th>
                                        <th>${(productos[i].precioUnitario * productos[0].cantidad)* 1.19}</th>
                                    </tr>`;
    }
    cuerpoTabla.innerHTML = cadenaDatos;
})

btnCalcularTotal.addEventListener("click",function(){
    let total = 0;
    let contenedorResultado = document.querySelector("#contenedorResultado");

    for(let i=0; i < productos.length; i++){
        let totalDetalle = (productos[i].precioUnitario * productos[0].cantidad)* 1.19;
        total = total +  totalDetalle;
    }
    contenedorResultado.innerHTML= `<p>El total de su boleta es de ${total}</p>`

})

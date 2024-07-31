
//!Métodos de arreglos
//Me permiten manipular los arreglos. 
//funcion = método

let Numeros = [1, 3, 5, 7, -17, 25, 100, -3];

    //!Modificar arreglo (agregar/eliminar)
        
        //<> .push("dato") ---> para agregar elementos.
        Numeros.push(18); //lo agrega al final.
        console.log(Numeros)

        //<> .pop() ---> para eliminar el último elemento
        Numeros.pop();
        console.log(Numeros)

    //!Recorrer un arreglo

        //<> .forEach --->

        Numeros.forEach(function(Numeros){
            console.log(Numeros);
        })

        //<> .map(); ---> Se utiliza cuando quiero modificar el arreglo , conservando el arreglo original.

        let doblesNumeros =Numeros.map(function(Numeros){
            return Numeros*2
        })
        console.log(doblesNumeros);

        //<> .filter

        let numerosPositivos = Numeros.filter(function(Numeros){
            return Numeros > 0;
        });
        console.log(numerosPositivos);



//!Operando arreglos con objetos

let productos = [
    {
        codigo: "#dgmc001",
        precioUnitario: 2335
    },
    {
        codigo: "#dgmc006",
        precioUnitario: 4590
    },
    {
        codigo: "#dgmc001",
        precioUnitario: 22900
    }
]

productos.forEach(function(producto){
    console.log(`El código es ${producto.codigo} y su valor es de $ ${producto.precioUnitario}`)
})

//aplicar 10% de descuento a cada producto , mantener los precios originales en un arrelo
let preciosConDescuento10 = productos.map(function(producto){
    return producto.precioUnitario * 0.9;
})
console.log(preciosConDescuento10);

//mostrar el listado de productos que tiene un valor de 1000 o superior
let productosFiltrados = productos.filter(function(producto){
    return producto.precioUnitario >= 1000;
})
console.log(productosFiltrados)
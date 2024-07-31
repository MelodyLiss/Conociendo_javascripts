
//!Arreglos o Arrays y objetos (literales)
//Arreglo --> Conjunto de datos. Se definen usando []
let arreglo = [1,2,3,4,5,6,7,8,9];
console.log(arreglo);
    //Los datos pueden ser de cualquier tipo , incluso mesclados.
    //aunque no es considerado una muy buena practica O-o!!
let arregloMixto = [2,"Julio", true] 

//<> Importante:
// Debemos diferenciar algunos conceptos :

let estaciones = ["otoño", "invierno","primavera","verano"] //<> Este es muestro arreglo
            //     1         2           3         4        //<> El arreglo tiene 4 valores 
            //     0         1           2         3        //<> Pero el indice parte en 0
// EN CUANTO AL INDICE DEBEMOS SIMPLEMENTE TOMAR LA CANTIDAD DE VALORES -1

    //<> Acceder un valor del arreglo 
    console.log(estaciones[2]); 
    //Podemos acceder mediente el nombre del arreglo y entre "[]"el indice que queremos.
    //Los arreglos son dinámicos.Esto quiere decir que cambiar su tamaño y contenido durante la ejecución del programa. 

        //!Métodos  .length 
            // Nos sirve para ver el largo del arreglo , es decir toma la cantidad de valores que tiene.
                console.log(estaciones.length);

                for(let i=0;i< estaciones.length; i++){
                    console.log(estaciones[i]);
                }

        //let ultimoElemento = arreglo[arreglo.length - 1];
// o
let ultimoElemento = arreglo.at(-1);

//!Objetos literales
    // Los llamamos literales porque el objeto se define directamente en el código usando una sintaxis específica, sin necesidad de utilizar constructores o funciones adicionales.
    //Se definen usando {} y se compone atributos con clave-valor , los cuales separamos entre ",".

    let persona = {
        rut: "12.345.678-9",
        nombre: "Cosme Fulanito",
        fechaNacimiento: "15 09 1990",
        signoZodiacal: "Virgo",
        direccion:{
            calle: "Pasaje mi hogar",
            numero: "1781",
            comuna: "Maipú",
            region: "Metropolitana"
        },
        caminar: function(){
            console.log("Caminando...")
        }
    }

    console.log(`El signo de ${persona.nombre} es ${persona.signoZodiacal}`);
    console.log (`Su domicilio es ${persona.direccion.calle} #${persona.direccion.numero}.`);
    persona.caminar(); 

//!TRABAJANDO CON ARREGLOS Y OBEJTOS A LA VEZ

let clientes = [
    {
        rut: "12.121.121-2",
        nombre: "Juanito el vandolero",
        fechaNacimiento: "05-04-1992"
    },
    {
        rut: "18.383.383-8",
        nombre: "Pedro Pablo Perez Pereila",
        fechaNacimiento: "28-09-1992"
    },
    {
        rut: "23.123.543-k",
        nombre: "Maria Juaquina",
        fechaNacimiento: "16-12-1992"
    }
];


console.log(clientes);
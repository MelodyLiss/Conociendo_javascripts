
//! EXPRESION REGULAR : REGEX
// Se usan para validad un patrón.
// Es un conjunto de carácteres especiales con significado que logran plantear un patrón a cumplir.

/*//! SIGNIFICADO :

//<> Coincidencias Basicas
.       - Cualquier Caracter, excepto nueva linea
\d      - Cualquier Digito (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, salto de linea)
\S      - No es un Espacio, Tab o salto de linea.

//<> Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

//<> Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Numero Exacto
{3,4}   - Rango de Numeros (Minimo, Maximo)

//<> Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

//<> Grupos
( )     - Grupo
|       - Uno u otro 

*/

//!EJEMPLO:

//<> Analicemos esta expresion regular creada para validad un rut Chileno -->   ^\d{7,8}-(\d|k|K)$ 

/*  Aqui estamos indicando que:
    desde el inicio de la cadena (^) 
    deben ser solo digitos (\d) 
    entre el rango de 7 u 8 caracteres ( {7,8} ) 
    despues incluir un "-" (- (podemos incluir un caracter de manera literal como aqui)) 
    despues puede ser ()
    digitos (\d) 
    o (|) "k" minuscula 
    o (|) "k" mayuscula. 
    hasta el final de la cadena ($)
    */

//!USANDO UNA EXPRESION REGULAR EN JS

//Tenemos 2 formas de instanciarla :

    //Usando la notación literal:Esta es la forma más concisa. El patrón va entre barras /.
    let reRut = /^\d{7,8}-(\d|k|K)$ /;

    //Usando el constructor RegExp: Esta forma es útil cuando necesitas crear la expresión regular dinámicamente. El patrón va entre comillas como una cadena.
    let regexRut = new RegExp("^\d{7,8}-(\d|k|K)$");

    
var nombre = "Mario", apellido = "Ramòn";

var nombreEnMayusculas = nombre.toUpperCase();

console.log(nombreEnMayusculas);

var apellidoEnMinusculas = apellido.toLowerCase();

console.log(apellidoEnMinusculas);

var primerLetraDeNombre = nombre.charAt(0);

console.log(primerLetraDeNombre);

var cantidadDeLetrasNombre = nombre.length;

console.log(cantidadDeLetrasNombre);

//var nombreCompleto = nombre + ' ' + apellido;

//interpolaciones de texto, lo que nos permite es interpolar variables osea colocar còdigo JS;
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`;
console.log('Interpolar: ' + nombreCompleto);



//tomó las letras de dicha posicion pero si lo queremos mas facil podemos hacer lo del siguiente còdigo **
/*var str = nombre.charAt(1) + nombre.charAt(2);
*console.log(str);
*/
//**:  .substr(inicio, fin);
var str = nombre.substr(1, 4);
console.log(str);









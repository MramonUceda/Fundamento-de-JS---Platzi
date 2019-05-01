var mario =  {
    nombre: 'Mario',
    apellido: 'Ramòn',
    edad: 25
}

var luis = {
    nombre: 'Luis',
    apellido: 'Gomez',
    edad: 33
}

function imprimirNombreEnMayusculas(persona){ 
// var nombre =persona.nombre; es lo mismo que :
var {nombre} = persona;

    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(mario);
imprimirNombreEnMayusculas(luis);
//nuevo objeto:
//imprimirNombreEnMayusculas({nombre: 'Pepito'});
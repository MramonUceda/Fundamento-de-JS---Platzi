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



// function imprimirNombreEnMayusculas(persona){
//     console.log(persona.nombre.toUpperCase());
// }
// Si solo lo que no interesa de la persona es el nombre, lo que podemos hacer con la persona es lo siguiente:

function imprimirNombreEnMayusculas({nombre}){ //<- solo colocamos los atributos que nos interesan, en este caso solo sería "nombre"
    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(mario);
imprimirNombreEnMayusculas(luis);
//nuevo objeto:
imprimirNombreEnMayusculas({nombre: 'Pepito'});
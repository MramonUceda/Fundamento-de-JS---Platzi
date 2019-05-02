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
var {nombre} = persona;

    console.log(nombre.toUpperCase());
}

imprimirNombreEnMayusculas(mario);
imprimirNombreEnMayusculas(luis);


function cumpleaños(persona){
    return{
        ...persona, //desglozamos a la persona
        edad: persona.edad +1  //pisamos edad
    }
}

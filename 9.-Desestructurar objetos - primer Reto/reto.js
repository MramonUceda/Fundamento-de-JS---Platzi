var mario = {
    nombre : 'Mario',
    apellido: 'Ramón',
    edad: 25
}
var carlos = {
    nombre : 'Carlos',
    apellido: 'Pere',
    edad: 55
}
function imprimirNombreYEdad(persona){
    //Hola me llamo Mario y tengo 25 años;
    var nombre = persona.nombre;
    var edad = persona.edad;
    console.log(`Hola me llamo ${nombre} y tengo ${edad}`);
}


imprimirNombreYEdad(mario);

imprimirNombreYEdad(carlos);
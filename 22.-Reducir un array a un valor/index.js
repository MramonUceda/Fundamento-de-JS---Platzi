var mario = {
    nombre: 'Mario',
    apellido: 'Ramón',
    altura: 1.86,
    cantidadDeLibros: 76
}

var alberto = {
    nombre: 'Alberto',
    apellido: 'Gomez',
    altura: 1.55,
    cantidadDeLibros: 33
}

var juan = {
    nombre: 'Juan',
    apellido: 'Ruiz',
    altura: 1.76,
    cantidadDeLibros: 3
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Perez',
    altura: 1.63,
    cantidadDeLibros: 7
}

var jorge = {
    nombre: 'Jorge',
    apellido: 'Gonzalez',
    altura: 1.86,
    cantidadDeLibros: 49
}

var marco = {
    nombre: 'Marco',
    apellido: 'Ochoa',
    altura: 1.78,
    cantidadDeLibros: 91
}

var jesus = {
    nombre: 'Jesus',
    apellido: 'Vidal',
    altura: 1.83,
    cantidadDeLibros: 23
}
var personas = [mario, alberto, juan, vicky, jorge, marco, jesus];


// var acum = 0;
// for (var i = 0; i < personas.length; i++) {
//     acum += personas[i].cantidadDeLibros;
// }

const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros;


var totalDeLibros = personas.reduce(reducer, 0) // reduce necesita dos cosas la primera es una funcion y la segunda es el acumalador

console.log(`En total todos tienes ${totalDeLibros} de libros`);

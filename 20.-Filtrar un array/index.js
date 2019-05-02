var mario = {
    nombre: 'Mario',
    apellido: 'Ramón',
    altura: 1.86
}

var alberto = {
    nombre: 'Alberto',
    apellido: 'Gomez',
    altura: 1.55
}

var juan = {
    nombre: 'Juan',
    apellido: 'Ruiz',
    altura: 1.76
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Perez',
    altura: 1.63
}

var jorge = {
    nombre: 'Jorge',
    apellido: 'Gonzalez',
    altura: 1.86
}

var marco = {
    nombre: 'Marco',
    apellido: 'Ochoa',
    altura: 1.78
}

var jesus = {
    nombre: 'Jesus',
    apellido: 'Vidal',
    altura: 1.83
}


const esAlta = ({altura}) =>  altura > 1.8


var personas = [mario, alberto, juan, vicky, jorge, marco, jesus];

var personasAltas = personas.filter(esAlta); // filter nos devuelve un array nuevo OJO

console.log(personasAltas);















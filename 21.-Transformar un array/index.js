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

var personas = [mario, alberto, juan, vicky, jorge, marco, jesus];
//funcion de persnas altas
const esAlta = ({altura}) => altura > 1.8
//funcion de personas bajas
const esBaja = ({altura}) => altura < 1.8

//filtrado de personas altas 
var personasAltas = personas.filter(esAlta);
// var personasAltas = personas.filter(function(persona){
//     return persona.altura > 1.8;
// });
//filtrado de personas bajas


var personasBajas = personas.filter(esBaja);


// const pasarAlturaACms = persona => {
    
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }equivalente:
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
});



//cmd = centimetros
var personasCms = personas.map(pasarAlturaACms);  

console.log(personasCms);















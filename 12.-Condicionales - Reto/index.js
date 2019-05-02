var mario = {
    nombre: 'Mario',
    apellido: 'Ramón',
    edad: 12,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: true,
    programador: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `)
    if (persona.ingeniero) {
        console.log('Ingeniero');
    }else{
        console.log('No es ingeniero');
    }
    if (persona.cocinero) {
        console.log('Cocinero');
    }else{
        console.log('No es Cocinero');
    }
    if (persona.cantante) {
        console.log('Cantante');
    }else{
        console.log('No es Cantante');
    }
    if (persona.dj) {
        console.log('DJ');
    }else{
        console.log('No es DJ');
    }
    if (persona.guitarrista) {
        console.log('Guitarrista');
    }else{
        console.log('No es Guitarrista');
    }
    if (persona.programador) {
        console.log('Programador');
    }else{
        console.log('No es Programdor');
    }
    
}


// Reto:
function esMayorDeEdad(persona){
    if (persona.edad >= 18) {
        console.log('Es mayor de edad!.');
    }else{
        console.log('Es menor de edad');
        
    }
}


imprimirProfesiones(mario);


esMayorDeEdad(mario);




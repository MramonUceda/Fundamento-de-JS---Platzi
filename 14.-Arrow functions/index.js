const MAYORIA_DE_EDAD = 18;

var mario = {
    nombre: 'Mario',
    apellido: 'Ramón',
    edad: 25,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: true,
    programador: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomes',
    edad: 13
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


//  const esMayorDeEdad = function (persona){
//     return persona.edad >=  MAYORIA_DE_EDAD
// } equivalente con Arrow functions:

//const esMayorDeEdad =  persona => persona.edad >=  MAYORIA_DE_EDAD;
//desestructurando a la persona ya que solo nos importa la edad:
const esMayorDeEdad =  ({edad}) => edad >=  MAYORIA_DE_EDAD;



function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad!.`);
    }else{
        console.log(`${persona.nombre} es menor de edad!.`);
        
    }
}

function permitirAcceso(persona){
    if (!esMayorDeEdad(personas)) { //si no es mayor de edad
        console.log('Acceso DENAEGADO!');
    }else{
        console.log('Acceso APROBADO');
        
    }
}






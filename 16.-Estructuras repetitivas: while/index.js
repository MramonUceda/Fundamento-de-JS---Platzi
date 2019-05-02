var mario = {
    nombre: 'Mario',
    apellido: 'Ramón',
    edad: 25,
    peso: 75
}

console.log(`Al inicio del año, ${mario.nombre} pesa ${mario.peso}KG`);

const INCREMENTO_DE_PESO = 0.3;
const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO; 
const adelgazarDePeso = persona => persona.peso -= INCREMENTO_DE_PESO; 
const comeMucho = () => Math.random() < .3;
const realizaDeporte = () => Math.random() < .4;


const META = mario.peso - 3;

var dias = 0;
while (mario.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(mario);
    }
    if (realizaDeporte()) {
        adelgazarDePeso(mario);
    }
    dias++;
}

console.log(`Pasaron ${dias}, hasta que  ${mario.nombre} adelgazó 3Kg.`);

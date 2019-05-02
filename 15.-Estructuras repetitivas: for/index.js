var mario = {
    nombre: 'Mario',
    apellido: 'Ramón',
    edad: 25,
    peso: 75
}

console.log(`Al inicio del año, ${mario.nombre} pesa ${mario.peso}KG`);
const INCREMENTO_DE_PESO = 0.2;

// function aumentarDePeso(persona){
//     return persona.persona += 200;
// } equivalente:
const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO; 
const adelgazarDePeso = persona => persona.peso -= INCREMENTO_DE_PESO; 
const DIAS_DEL_ANO = 365;


for (var i=1; i <= DIAS_DEL_ANO; i++ ) {
    var random = Math.random();

    if (random < 0.25) {
        //aumenta de peso:
        aumentarDePeso(mario);
    }else if(random < 0.5 ){
        // adelgazar
        adelgazarDePeso(mario);

    }
    
}
console.log(`Al final de año, ${mario.nombre} pesa ${mario.peso.toFixed(2)}KG`);

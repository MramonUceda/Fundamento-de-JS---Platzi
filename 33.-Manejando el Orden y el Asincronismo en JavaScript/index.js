const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const OPTS = {crossDomain: true};





/**
 * Si queremos garantizar el orden de lo request que hacemos y que se muestren de igual forma en orden 
 * podemos hacer lo siguiente:
 * Ir llamando a la fuciones de obtenerPersonas() con callbacks, pero OJO lo que perdemos es el paralelismo de los request, 
 * con esto lo que hacemos es ir ejecutando request por request.
 * 
 * DICHA MODIFICACIÓN SE VE EN LA PARTE DE **MODIFICACIÓN**
 */
function obtenerPersonaje(id, callback){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;

    $.get(URL, OPTS, function(persona){  // <- es nuestro callback
        console.log(`Hola, yo soy ${persona.name}`);

        if (callback) { //<- si nos envian un callback se ejecuta
            callback();
        }
    });
}

// **MODIFICACIÓN**
//1.-Luke Skywalker
//2.-Hola, yo soy C-3PO
//3.-Hola, yo soy R2-D2
// Callback hell === el infierno de los callback, estos request se hace en serie y no en paralelo.
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){
                  obtenerPersonaje(6, function(){
                      obtenerPersonaje(7, function(){
                          obtenerPersonaje(8)
                      })
                  })  
                })
            })
        })
    })
})



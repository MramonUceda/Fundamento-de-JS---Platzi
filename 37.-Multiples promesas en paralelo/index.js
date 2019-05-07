const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const OPTS = { crossDomain: true };

//Haremos un refactor de dicha funcion:
function obtenerPersonaje(id) {
    return new Promise(function (resolve, reject) {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(URL, OPTS, function (data) { //la data === a personaje, la funcion no se va a ejecutar hasta que el $get sea exitoso
            resolve(data);
        }).fail(function () {
            reject(id)
        })
    });
};


function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`);

}

var ids = [1,2,3,4,5,6,7]; 
// vamos a usar el metodo map(), y lo que haremos es recorrer este array (ids) y por cada uno de los elementos
//retornar un elemento nuevo que será una promesa, y esas promesas se van a guardar en una variable:
var promesas = ids.map(function(id){
    return obtenerPersonaje(id);
}) // tenemos un array lleno de primersas,como obtenemos lo valores de esas promesas cuando ya se resuelvan:
/**
 * Hay un método que tienen la clase de Promesas, "all(array_de_promeas)", y este método lo podemos
 * encadenar con un .then(),en este then() tendremos un arrya con los valores de cada uno de las promesas
 * 
 */
Promise.all(promesas).then(function(personajes){
    console.log(personajes);
}).catch(onError);


















// obtenerPersonaje(1).then(function (personaje) {//resolve(data)
//     console.log(`El personaje 1  es: ${personaje.name}`)
//     return obtenerPersonaje(2)
// }).then(function (personaje) {
//     console.log(`El personaje 2 es: ${personaje.name}`)
//     return obtenerPersonaje(3)
// }).then(function (personaje) {
//     console.log(`El personaje 3 es: ${personaje.name}`)
//     return obtenerPersonaje(4)
// }).then(function (personaje) {
//     console.log(`El personaje 4 es: ${personaje.name}`)
//     return obtenerPersonaje(5)
// }).then(function (personaje) {
//     console.log(`El personaje 5 es: ${personaje.name}`)
//     return obtenerPersonaje(6)
// }).then(function (personaje) {
//     console.log(`El personaje 6 es: ${personaje.name}`)
//     return obtenerPersonaje(7)
// }).then(function (personaje) {
//     console.log(`El personaje 7  es: ${personaje.name}`)
//     return obtenerPersonaje(8)
// }).then(function (personaje) {
//     console.log(`El personaje 8 es: ${personaje.name}`)
// }).catch(onError);


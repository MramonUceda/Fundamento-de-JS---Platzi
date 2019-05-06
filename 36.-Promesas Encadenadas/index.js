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


//Recordemos que estos request los estamos haceindo en serie, no llegan en paralelo:
obtenerPersonaje(1).then(function (personaje) {//resolve(data)
    console.log(`El personaje 1  es: ${personaje.name}`)
    return obtenerPersonaje(2)
}).then(function (personaje) {
    console.log(`El personaje 2 es: ${personaje.name}`)
    return obtenerPersonaje(3)
}).then(function (personaje) {
    console.log(`El personaje 3 es: ${personaje.name}`)
    return obtenerPersonaje(4)
}).then(function (personaje) {
    console.log(`El personaje 4 es: ${personaje.name}`)
    return obtenerPersonaje(5)
}).then(function (personaje) {
    console.log(`El personaje 5 es: ${personaje.name}`)
    return obtenerPersonaje(6)
}).then(function (personaje) {
    console.log(`El personaje 6 es: ${personaje.name}`)
    return obtenerPersonaje(7)
}).then(function (personaje) {
    console.log(`El personaje 7  es: ${personaje.name}`)
    return obtenerPersonaje(8)
}).then(function (personaje) {
    console.log(`El personaje 8 es: ${personaje.name}`)
}).catch(onError);


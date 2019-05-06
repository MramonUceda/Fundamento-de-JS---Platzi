const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const OPTS = { crossDomain: true };


//haciendo un refactor a obtenerPersonaje:
function obtenerPersonaje(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    // Este métdo get(), también se puede encadenar el método fail(callback) que recibe un callback como parametro 
    // que se va a ejecutar si ocurre algún error
    $.get(URL, OPTS, callback).fail(function () {
        console.log(`Sucedió un error, no se pudo obtener el personaje ${id}`);
    })
}

// **MODIFICACIÓN**
//1.-Luke Skywalker
//2.-Hola, yo soy C-3PO
//3.-Hola, yo soy R2-D2
// Callback hell === el infierno de los callback, estos request se hace en serie y no en paralelo.
obtenerPersonaje(1, function (personaje) {
    console.log(`Hola, yo soy ${personaje.name}`);
    obtenerPersonaje(2, function (personaje) {
        console.log(`Hola, yo soy ${personaje.name}`);
        obtenerPersonaje(3, function (personaje) {
            console.log(`Hola, yo soy ${personaje.name}`);
            obtenerPersonaje(4, function (personaje) {
                console.log(`Hola, yo soy ${personaje.name}`);
                obtenerPersonaje(5, function (personaje) {
                    console.log(`Hola, yo soy ${personaje.name}`);
                    obtenerPersonaje(6, function (personaje) {
                        console.log(`Hola, yo soy ${personaje.name}`);
                        obtenerPersonaje(7, function (personaje) {
                            console.log(`Hola, yo soy ${personaje.name}`);
                            obtenerPersonaje(8, function (personaje) {
                                console.log(`Hola, yo soy  ${personaje.name}`);

                            })
                        })
                    })
                })
            })
        })
    })
})



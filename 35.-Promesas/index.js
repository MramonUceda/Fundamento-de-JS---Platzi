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


function onError(id){
    console.log(`SUcedió un error al obtener el personaje ${id}`);
}

obtenerPersonaje(1).then(function(personaje){//resolve(data)
    console.log(`El personaje  es: ${personaje.name}`);
}).catch(onError)


const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const OPTS = {crossDomain: true};


const onPeopleResponse = function(persona){  // <- es nuestro callback
    console.log(`Hola, yo soy ${persona.name}`);
}

function obtenerPersonaje(id){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`;
    $.get(URL, OPTS, onPeopleResponse);
}


//si tenemos esto, ¿en que orden nos llegará la infomación?
obtenerPersonaje(1); //Luke Skywalker
obtenerPersonaje(2); // Hola, yo soy C-3PO
obtenerPersonaje(3); //Hola, yo soy R2-D2

/**
 * El resultado fue el siguiente:
 * Hola, yo soy R2-D2
 * Hola, yo soy C-3PO
 * Hola, yo soy Luke Skywalker
 * 
 * El asincronismo de JS en su maximos explendor, basicamente no sabemos en que orden "nos van a llegar las respuestas".
 * Esto depende del servidor y de cuento tarde uno de los request.
 * 
 * 
 */

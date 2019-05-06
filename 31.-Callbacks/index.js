const API_URL = 'https://swapi.co/api/';    //1.- paso uno
const PEOPLE_URL = 'people/:id';  //2.- paso dos

const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id',1)}`; // nota: este el el primero parametro que necesita jquery para 
                                                            //hacer el REQUEST
const OPTS = {crossDomain: true}; // NOTA: es el segundo parametro que necesita jquery, indicamos que este request se hará 
                                //acía otra página

//para poder hacer un request con jquery tenemos que hacer lo siguiente:
const onPeopleResponse = function(persona){ //PASO 3: NUESTRO CALLBACK, ES UNA FUNCION QUE SE VA A EJECUTAR EN ALGÚN FUTURO, 
                                            //QUE $get será en encargado de llamarla, ¿cuando? pues cuando termine el REQUEST,
                                            // TAMBIÉN PUEDE SER QUE ESE "REQUEST" NUNCA SE COMPLETE Y QUE LA FUNCIÓN NUNCA
                                            //SE LLAME.
    console.log(`Hola yo soy ${persona.name}`);
    
}

$.get(LUKE_URL, OPTS, onPeopleResponse) //<- POR ULTIMO ESTA FUNCION SE VA A EJECUTAR SOLO SI EL REQUEST FUE ÉXITOSO, NO OLVIDEMOS QUE LA QUE LA EJECUTA ES $GET
 //primer parametro(parte), la segunda parate para hacer el request con jquery es despues de la coma ","
// entonces el segundo parametro lo que le decimos a jquery es que el request lo queremos hacía otra página y esto lo hacemos con:
// "{crossDomain: true}". POR ULTIMO LO QUE TENEMOS QUE PONER ES NUESTRO "CALLBACK = success".
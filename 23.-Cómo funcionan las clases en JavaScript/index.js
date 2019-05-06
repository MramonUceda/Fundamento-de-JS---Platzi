// definiendo prototipo de persona y solo saludará
// function Persona(nombre, apellido){ //<-constructor
//     this.nombre = nombre;
//     this.apellido = apellido;
//     console.log('Me ejecutron');
// }

// var mario = new Persona('Mario', 'Ramón');   



// Sí nosotros quisieramos que las persona tuviera un función, esta funcion lo único que hará será saludar, entonces
// lo haremos de la siguiente forma:

function Persona(nombre, apellido, altura){ //<-constructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    // console.log('Me ejecutron');
}

Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}
Persona.prototype.soyAlto = function(){
    return this.altura > 1.8;
}

var mario = new Persona('Mario', 'Ramón', 1.67); 
var erika = new Persona('Erika', 'Luna', 1.89);
var arturo = new Persona('Arturo', 'Gomez', 1.78);
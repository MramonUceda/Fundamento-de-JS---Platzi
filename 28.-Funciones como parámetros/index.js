class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    saludar(fn ) {
        var nombre = this.nombre;
        var apellido = this.apellido;
        console.log(`Hola me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido, false)
        }
    }
    soyAlto() {
        return this.altura > 1.8;
    }
}
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, apellido);
    }
    saludar(fn) {
        var nombre = this.nombre;
        var apellido = this.apellido;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy  desarrollador`);
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`);
    if (esDev) {
        console.log(`Ah mira, no sabía que eras desarrollador/a`);
    }
    
}

var mario = new Persona('Mario', 'Ramón', 1.67);
var erika = new Persona('Erika', 'Luna', 1.89);
var arturo = new Desarrollador('Arturo', 'Gomez', 1.78);

mario.saludar();
erika.saludar(responderSaludo);
arturo.saludar(responderSaludo);
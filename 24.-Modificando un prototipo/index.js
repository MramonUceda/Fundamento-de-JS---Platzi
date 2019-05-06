function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
}
Persona.prototype.soyAlto = function () {
    return this.altura > 1.8;
}

var mario = new Persona('Mario', 'Ramón', 1.67);
var erika = new Persona('Erika', 'Luna', 1.89);
var arturo = new Persona('Arturo', 'Gomez', 1.78);
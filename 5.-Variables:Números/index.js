var edad = 25;

//incremento en uno 
//edad = edad +1;
//edad +=1;
//edad++;


//decremento
var peso = 76;
//peso = peso -2;
peso -= 2; 


//sumar dos numero:
var sandwitch = 8;
peso += sandwitch;


var jugarFutobol = 10;
peso -= jugarFutobol;
 
/**
 * **********************************************OTROS EJERCICIO********************************************+
 */


 /**
  * Cuando trabajamos con decimales, el lenguaje no es tan preciso, algunas librerias/framework arreglan esto, pero
  * para solucionar esto podemos hacer: ** 
  */
 var precioVino = 200.3;

 //var total = precioVino * 3;

//**:
//var total = precioVino * 100 * 3 /100;


//Cuando no estamos seguros de cuantos decimales hay podemos hacer un redondeo de la siguiente forma:
var total = Math.round(precioVino * 100 * 3)/100;  //no importa cuantos decimales tenga, hace el calculo preciso


/**
 * En dado caso que salga en decimal .90, podemos hacer:
 */
var totalStr = total.toFixed(2); //toma en cuenta dos decimales despues de la coma o los que tu quieras,pero esto es un String
//si quiersieramos pasar a numero la variable totalStr lo que tendrìamos que hacer es un parseo.

var total2 = parseFloat(totalStr); // de string a float







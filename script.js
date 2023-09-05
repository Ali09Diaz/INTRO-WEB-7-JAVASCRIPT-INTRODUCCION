alert ("Hola primer archivo de JS");

/* Así es como se hacen los comentarios, como si usaramos CSS*/ 

var frasco = "pastillas";
var frasco = "Pasitas con chocolate";
var frasco = "shampoo";


console.log(frasco);
/* Tipos de datos primitivos y no promitivos 
string
number
boolean
undefined
null
symbol
object  (no es primitivo)
*/


//string es una cadena de texto, que siempre debe de ir entre comillas simples o comillas dobles

//var vaso = "leche";

//number no lleva comillas, y se refiere a un número con el cual podemos hacer operaciones 

//var edad = 31;

//Boolean solamente tiene dos salidas que es true or false

//var cuentasPreium = false;

//undefined es un tipo de dato que existe pero no está definido o inicializado

//var proximaCita =;

//null es un valor que no tenemos pero que declaramos

//var asistenciaInvitados = null;

var edad = "31";
var peso = 66;

console.log(typeof(edad));

//typeof es una palabra reservada que nos ayuda a saber que tipo de dato tenemos

//var es una variable con alcance global (tiene mayor alcance)

//let es una variable con alcance local (solo se utiliza dentro de un bloque de código)

//const es una constante, es decir, que es una varianle no cambia

var pesoCadena = peso.toString();
console.log ((pesoCadena));
console.log(typeof(pesoCadena)); 

var edadNumero = parseInt(edad);
console.log(edadNumero);
console.log (typeof(edadNumero));


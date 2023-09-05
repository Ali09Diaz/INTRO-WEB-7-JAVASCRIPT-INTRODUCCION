//Funciones
/*Una función es un bloque de código que realiza una tarea específica, cuando se llama 

Cada función de JS es un objeto que se llama función
*/
function saludar (){
    console.log("Hola soy una funcion");
}   
saludar();

/* Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */

//Declarar funciones
/* 
-La palabra reservada function, que nos indica que estamos definiendo una funcion.
-El nombre de la funcion, dependiendo de la accion a realizar.
-Un par de parentesis () despues del nombre. Puede contener parametros. En este caso no tenemos ninguno
-Seguido de un juego de llaves para cerrar el bloque de codigo.
-Dependiendo de las instrucciones dentro del cuerpo de la duncion y del proposito de la misma, de dermina si la funcion retorna un valor. 
*/

//Llamamos una funcion y le vamos a almacenar un resultado

function suma (a,b){
    return a + b;
}
var resultado = suma (5,3) //Almacenar funcion en una variable
console.log(resultado); //Funcion.
/*La función suma toma dos argumentos (a y b) y devuelve la suma de estos dos valores. Luego, llamamos a la función y almacenamos el resultado en la variable resultado. */

/*dentor del log imprimimos resultado en vez de suma
igual se podría imprimir con console.log(suma(5, 3))
Atte. Antonio Salcido */

//Funcion que muestra un mensaje en la consola
function saludar(nombre){
    console.log("Hola," + nombre + "!")
}
//Llamamos a a funcion saludar a alguien 
saludar("Gustavo Leal"); //imprime el saludo

/**
 * La funcioon saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la funcion no devuelve un valor explicablemente con return, realiza una accion (mostrar un mensaje) cuando se llama.
 */

//Hoisting
/**
 * Es fundamental en el entendimiento de la forma en que se ejecuta nuestro código JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código.
 * Yo puedo invocar una funcion antes de siquiera declararla 
 */

console.log(miVariable); //No da error, pero imprime "undefined"
var miVariable = 10;
//Scope = Alcance, hace referencia al alcance de una variable en nuestro codigo de JS
/**
 * Global : Se puede utilizar o trabajar con una variable dentro de cualquier parte del codigo de JS.
 * Var : no es tan recomendable, por comportamiento de la variable en nuestro codigo de JS.
 * let : es preferible e incluso mas segura de utilizar porque ademas de funcionar de manera global, tambien puede ser utilizada de manera local
 * const : se refiere por su nombre tan intuitivo, a la palabra constante, estp quiere decir que su valor no puede ser reasignado.
 */


//Variable local (ej. promocion para una sola persona)
function funcionConVariableLocal() {
    var mensaje = "Esta es una variable local";
    console.log(mensajeLocal);
}
//funcionConVariableLocal ();
//var mensaje = "holis";
//console.log(mensaje);
/**
 * En este ejemplo, la variabe se declara dentro de la funcionConVariableLocal. Es una variable local porque solo es accesible dentro del ambito de esa funcion. Si intentamos acceder afuera de la funcion, obtendremos un error.
 */

//Variable Global (ej. no hay promocion, precio regular)
var mensajeGlobal = "Esta es una variable global"
function funcionConVariableGlobal () {
    console.log (mensajeGlobal);
}
funcionConVariableGlobal(); //la estamos llamando

/**En este ejemplo, la variable mensajeGlobal se declara fuera de cualquier función, lo que la convierte en una variable global. Esto significa que es accesible desde cualquier parte del código, tanto dentro como fuera de la función funcionConVariableGlobal. 
 * 
*/
//////////////////////////
////Funciones anonimas////
/////////////////////////

/**
 * Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarsecomo parametros en otras funciones.
 La diferencia principal de estas funciones es que se declaran sin un nombre
 */

//function () {
    //console.log("Hola vida"); //Funcion anonima
//}
const saludo = function () {
    console.log ("Hola vida");
}
saludo();


/////////////////////
//Funciones flecha//
///////////////////
/**
 * Una forma mas concisa de definir funciones anonimas. Se le llma flecha debido a su sintaxis que utiliza (=>)
 * Bascicamente se trata de reemplazar la palabra funtion y aniadir nuestra funcion flcecha antes de abrir nuestras llaves
 */

const resta = (a,b) => a - b;
/**
 * Esta funcion flecha es una forma mas corta de :
 * const resta = funcio (a,b){
 * return a- b:
 * }
 */
console.log (resta (5,3));




    










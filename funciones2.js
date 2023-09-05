//Funciones
//Programa para hacer limonada 
function exprimirLimones(cantidad) {
    console.log ("Exprimiendo " + cantidad + " limones.");
    let jugoExtraido = cantidad *10; //Considerando obtener 10ml de jugo por cada limon 
    console.log ("Se obtuvo " + jugoExtraido +"ml de jugo de limon");
    return jugoExtraido; //return
}

//Funcion para mezclar el jugo de limon con agua y azucar 
function mezclarJugoDeLimon (cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar) {
    console.log ("Mezclando " + cantidadDeJugo + "ml de jugo de limon con " + cantidadDeAgua + "ml de agua y " + cantidadDeAzucar + "gr de azucar");
}
//Funcion para servir limonada
function servirLimonada () {
    console.log ("sirviendo la limonada en un vaso");
    vasoDeLimonada = true;
}

//Funcion principal que prepara mi limonada
function prepararLimonada (cantidadDeLimon) {
    let jugoDeLimon = exprimirLimones (cantidadDeLimon);
    mezclarJugoDeLimon(jugoDeLimon, 200, 5); //cantidad ficticia de jugo de limon, de agua y de azucar
    servirLimonada();
}

//Llamamos a la funcion principal para preparar limonada
var vasoDeLimonada = false;
prepararLimonada(7); //Llamado al programa
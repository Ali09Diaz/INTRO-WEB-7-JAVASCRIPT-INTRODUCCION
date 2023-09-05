//Tarea para el diente feliz 


console.log("Calculadora de material para moldes dentales 3D en Yeso\n") //titulo

const yeso = 0.5
const agua = 0.25
const cantidadMoldes = 2


moldes(cantidadMoldes) //llamndo la funcion moldes
arregloDeMezclaYeso(yeso,cantidadMoldes,agua)

function moldes(cantidad){
    console.log ("Para "+ cantidad + " moldes se necesitan los siguientes materiales")
    console.log ("Para cada molde se necesitan 0.5kg de yeso clase IV y 0.25lit de agua")
}


function arregloDeMezclaYeso(yeso,cantidad,agua){
    let cantidadYeso = yeso * cantidad 
    let cantidadAgua = agua * cantidad
    console.log("Se necesita mezclar " + cantidadYeso + " kg de yeso y "  + cantidadAgua + " lit de agua")
}



//Aqui otra forma de hacer la operacion y escritura
/*const mezclaNecesaria = (yeso, agua, cantidad) => {
    let cantidadYeso = yeso * cantidad
    let cantidadAgua = agua * cantidad
    console.log(`La cantidad de yeso necesario es ${cantidadYeso} kg y ${cantidadAgua} litros`)
}

mezclaNecesaria(yeso,agua,cantidadMoldes)
*/
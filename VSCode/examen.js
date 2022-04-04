//Sumatoria Bajo Importe
/*function sumatoriaBajoImporte(importes){//importes de tipo array
    let suma = 0;
    for (let i = 0; i < importes.length; i++){
        if(importes[i] > 0 && importes[i] <= 1000){
            suma = suma + importes[i];
        }
    }
    return suma;
}

//Entradas para el cine
function asientosDisponibles(arrayAsientos, asiento){//Array de asientos disponibles y el asiento
    let longArray = 0;//
    let array = arrayAsientos;//[15, 28, 44, 45, 70]
    longArray = arrayAsientos.length;// es un 5
    respueta = " ";
    //la variable asiento ingresa con valor 15
    
    for(let i = 0; i < longArray; i++){
        if(array.indexOf(asiento) === -1){
            respuesta = "Lo sentimos, el asiento número " + asiento + " está ocupado, pero aún quedan " + longArray + " asientos disponibles";
        }
        else
            respuesta = "Felicitaciones, el asiento número " + asiento + " está disponible";
    }

    return respuesta;
}

console.log(asientosDisponibles([28, 15, 44, 45, 70],15));
//console.log(asientosDisponibles([16, 28, 44, 45, 15],15));
//console.log(asientosDisponibles([15, 28, 44, 45, 70],50));
//console.log(asientosDisponibles([3, 15, 18, 25],25));
//console.log(asientosDisponibles([3, 15, 18, 25],78));*/

//Control de pasajeros
/*function reporteDePasajeros(cantEstaciones){
    let pasajeros = 200;
    let reportes = [];

    //Que vamos a recorrer? > Desde la estacion 0 hasta cantEstaciones
    for(let estacion = 0; estacion <= cantEstaciones; estacion++){
        //Condiciones? > Si, se suben distintas cantidades de pasajeros segun la estacion
        if(estacion === 5){
            pasajeros = pasajeros + 120 - 80;
        }
        else if(estacion !== 0){
            pasajeros = pasajeros + 50 - 30;
        }

        reportes.push("En la estación "+ estacion +" hay "+ pasajeros + " pasajeros arriba del tren");
    }

    return reportes;
}

console.log(reporteDePasajeros(5));*/


function laClaveSecreta(conjCaracteres){//recibe por parametro conjunto de caracteres
    let invertir = "";
    for(let i = conjCaracteres.length - 1; i >= 0; i--){//Recorro el arreglo de caracteres de mayor a menor
        if(conjCaracteres[i] !== "*"){// comparo que al recorrer, la posicion i no sea * y voy asignando el arreglo invertido
            invertir = invertir + conjCaracteres[i];
        }
        else{//si la posicion recorrida es *, reemplazo el * por " " para ordenar el mensaje
            invertir = invertir.replace("*", " ");
        }
    }
    return invertir;
}

console.log(laClaveSecreta([ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] ));
console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"])); 
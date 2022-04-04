/*¡Hola Mundo desde Digital House!
let saludo = "¡Hola Mundo desde Colombia!"
console.log(saludo);*/

/*if (true) {
    var nombre = "Pablo";
}

console.log(nombre);*/

/*if (true) {
    let nombre = "Pablo";
}

console.log(nombre);*/

/*let edad;
let peso;*/

/*let diaDeSemana = "Domingo";
if(diaDeSemana == "Domingo"){
    console.log ("¡Hoy es día de descanso!");
}*/

/*let nombre = "Pablo";
let apellido = "Mieles";
let nombreCompleto = (nombre + " " + apellido);
console.log(nombreCompleto);*/

//let meGUstaElHelado = true;

/*let unNumeroChico = 5;
let unNumeroGrande = 8;
let esMenor = unNumeroChico < unNumeroGrande;
let esMayor = unNumeroChico > unNumeroGrande;
console.log(esMenor);
console.log(esMayor);*/

/*function perimetro(radio){
    return 3.14 * radio * 2;
}

function area(radio){
    return 3.14 * radio ** 2;
}

console.log (perimetro(4));

console.log (area(4));*/

/*function filosofoHipster(profesion, nacionalidad, cantKm){
    if((nacionalidad === "Argentina") && (profesion === "Músico") && (cantKm > 2)){
       return true;
       else {
            false;
       } 
    }
}*/

/*function filosofoHipster(profesion, nacionalidad, cantKm){
    return((nacionalidad === "Argentina") && (profesion === "Músico") && (cantKm > 2));
}

console.log (filosofoHipster("Músico","Argentina",2));*/

/*function sumar(numero1, numero2) {
    return numero1 + numero2;
}

function tripleDeLaSuma(numero3, numero4) {
    let resultadoDeSuma = sumar(numero3, numero4);
    return triple(resultadoDeSuma);
}*/

/*function esNumeroDeLaSuerte (numero){
    return (numero > 0) && (numero % 2 === 0 || numero % 3 === 0) && (numero != 15);
}

console.log (esNumeroDeLaSuerte(-6));*/

/*function trasladar(unArray, otroArray){
    let elemento = unArray.pop();
    otroArray.push(elemento);
}
console.log(unArray);
console.log(otroArray);*/

/*for(let vuelta = 1; vuelta <= 10; vuelta ++){
    console.log("Estamos dando la vuelta numero: " + vuelta);
}
console.log("Despues del for");

for(let vuelta = 10; vuelta >= 0; vuelta --){
    console.log("Estamos dando la vuelta numero: " + vuelta);
}

console.log("Despues del for");
for(let vuelta = 10; vuelta >= 0; vuelta -= 2){
    console.log("Estamos dando la vuelta numero: " + vuelta);
}
console.log("Despues del for");*/

/*function sumatoria(numeros){
    return numeros[0] + numeros[1] + numeros[2] + numeros[3]; 
}
console.log(sumatoria([25,35,50,100]));

function sumatoria(numeros){
    let suma = 0;
    suma = suma + numeros[0];
    suma = suma + numeros[1];
    suma = suma + numeros[2];
    suma = suma + numeros[3];
    return numeros[0] + numeros[1] + numeros[2] + numeros[3]; 
}
console.log(sumatoria([25,35,50,100]));*/

/*function sumatoria(numeros){
    let suma = 0;
    for (let indice = 0; indice < numeros.length; indice ++){
        suma = suma + numeros[indice];
    }
    return suma;
}
console.log(sumatoria([25,35,50,100,200,500]));*/

/*function sumatoriaPar(numeros){
    let acumulador = 0;
    for (let i = 0; i < numeros.length; i ++){
        if(numeros[i] % 2 === 0){
            acumulador = acumulador + numeros[i];
        }
        console.log(i,numeros);
    }
    return acumulador;
}*/

/*Probemos qué tan claro quedó: Escribí una función longitudNombreCompleto que tome un nombre y un apellido como parametro y devuelva 
su longitud total, contando un espacio extra para separar a ambos.*/

/*function longitudNombreCompleto(nombre, apellido){
    let longitud = nombre.length(nombre,apellido);
    return longitud;
}

console.log(longitud);*/

/*console.log("biblioteca".length);*/

/*function longitudNombreCompleto(nombre, apellido){
    let longNombre = nombre.length;
    let longApellido = apellido.length;
    return longNombre + longApellido + 1;
}

console.log("Longitud es " + longitudNombreCompleto("juan", "perez"));*/

/*function escribirCartelito(titulo, nombre, apellido){
    let resultado = titulo + " " + nombre + " " + apellido;
    return resultado;
}

console.log(escribirCartelito("Dra.","Ana","Pérez"));*/

/*function sePoneLaOlla(diaDeSemana){
    if(diaDeSemana === "Domingo"){
        return ("¡Pongamos la olla, hoy se comen pastas!");
    }
    else
        return ("Mejor lo dejamos para el domingo");
}

console.log(sePoneLaOlla("Martes"));*/

/*function elMayor(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else
        return num2;
}

console.log(elMayor(4,10));*/

/*function signo(numero){
    if(numero > 0){
        return 1;
    }
    else if (numero === 0) {
        return 0;
    }
    else
        return -1;
}
        

console.log(signo(-5));*/


/*function esNumeroDeLaSuerte (numero){
    return (numero > 0) && (numero % 2 === 0 || numero % 3 === 0) && (numero != 15);
}*/

/*function puedoIrAlBanco(diaDeLaSemana, horaActual){
    return ((diaDeLaSemana != "Sábado") && (horaActual >= 10 && horaActual <= 15) && (diaDeLaSemana != "Domingo") && (horaActual >= 10 && horaActual <= 15))
}

console.log(puedoIrAlBanco("Sábado",11));*/

/*function pagoConTarjeta(seCobraInteres, cuotasTarjeta, efectivoDisponible) {
    return !seCobraInteres  && cuotasTarjeta >=3  || efectivoDisponible < 100;
 }

console.log (pagoConTarjeta(true, 6,320));
console.log (pagoConTarjeta(true, 8,80));
console.log (pagoConTarjeta(true, 2,215));
console.log (pagoConTarjeta(true, 1,32));*/

/*function esNumeroDeLaSuerte (numero){
    return (numero > 0) && (numero % 2 === 0 || numero % 3 === 0) && (numero != 15);
}*/

/*function estaEnEdad(edad,genero){
    return (edad > 60) && (genero === "F") || (edad > 65) && (genero === "M");
}

function tieneSuficientesAportes(aniosAportes){
    return aniosAportes > 30;
}

function puedeJubilarse(edad, genero, aniosAportes){
    return estaEnEdad(edad,genero) && tieneSuficientesAportes(aniosAportes);
}

console.log (puedeJubilarse(62, 'F', 30));*/

/*function tieneLaAltura(altura,vieneConCompania){
    return (altura > 1.2) && (vieneConCompania === true) || (altura > 1.5) && (vieneConCompania === false);
}

function tieneAfeccion(respuesta){
    return respuesta = false;
}

function puedeSubirse(alturaPersona, vieneConCompania, tieneAfeccionCardiaca){
    return tieneLaAltura(alturaPersona,vieneConCompania) && tieneAfeccion(tieneAfeccionCardiaca); 
}*/


/*function puedeSubirse (alturaPersona,vieneConCompania,tieneAfeccionCardiaca){
    return alturaPersona >= 1.5 && tieneAfeccionCardiaca == false || alturaPersona >= 1.2 && alturaPersona < 1.5 && vieneConCompania == true && tieneAfeccionCardiaca == false
}

console.log (puedeSubirse(1.5, false, false));*/

/*function medallaSegunPuesto(puesto){
    if(puesto === 1){
        return "Oro";
    }
    else if(puesto === 2){
        return "Plata";
    }
    else if(puesto === 3){
        return "Bronce";
    }
    else
        return "Seguí participando"
}

console.log (medallaSegunPuesto(2));*/

/*let seriesFavoritasDeAna = ["Game of Thrones", "Breaking Bad", "House of Cards"];
let seriesFavoritasDeHector = ["En Terapia", "Recordando el Show de Alejandro Molina"];
let saludo1 = ["hola","mundo!"];
let saludo2 = ["hola","hola!"];

console.log (seriesFavoritasDeAna);
console.log (seriesFavoritasDeHector);
console.log (saludo1);
console.log (saludo2);*/

/*for ( let i = 0 ; i < 4; i++ ){ 
    console.log ("¡Hola!");
}*/

/*function imprimirAzul4 (){
    for ( let i = 0 ; i < 4; i++ ){ 
        console.log("Azul");
    }  
}*/

/*let numerosDeLoteria = [2, 11, 17, 32, 36, 39];
let tiradasDelDado = [1, 6, 6, 2, 2, 4];
let salioCara = [false, false, true, false];
let listaDeListasDeNumeros = [[1, 6], [6, 2, 2, 4]];

console.log (numerosDeLoteria);
console.log (tiradasDelDado);
console.log (salioCara);
console.log (listaDeListasDeNumeros);*/

/*let unArrayVacio = [];*/

/*let miArray = ["A", "la", "grande", "le", "puse", "cuca"];
let posicion = miArray.indexOf("grande"); //devuelve 2
let diasLaborales = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
let unDia = diasLaborales.indexOf("Lunes"); //devuelve 0

console.log (diasLaborales.indexOf("Osvaldo"));*/

/*function contiene (array, numero){
    if(array.indexOf(numero) >= 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(contiene([1, 6, 7, 6], 7));*/

/*let variable = [1, 6, 7, 6];

console.log (variable[0]);*/


/*function medallaSegunPuesto(puesto){
    if(puesto === 1){
        return "Oro";
    }
    else if(puesto === 2){
        return "Plata";
    }
    else if(puesto === 3){
        return "Bronce";
    }
    else
        return "Seguí participando"
}

console.log (medallaSegunPuesto(1));*/

/*function imprimir5veces5(){
    for(i = 0; i < 5; i++){
        console.log(5);
    }
}

console.log (imprimir5veces5());*/

/*function pasitoAPasito(){
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
}*/

/*function pasandoPorI (){
    for ( let i = 0 ; i <= 4; i++ ){
        console.log ("acá i tiene el valor de " + i);}
}

console.log (pasandoPorI());*/

/*function pasandoPorLosPares() {
    for (let i=0; i<=6; i++) {
        if (i % 2 === 0) {
            console.log("acá i tiene el valor de " + i);
        }
    }
}

console.log(pasandoPorLosPares());*/

/*function repetirXVecesAlgo( cantidadDeVeces ){ 
    for( let i = 0 ; i < cantidadDeVeces ; i++ ){ 
        // Acá adentro escribo las instrucciones que quiero repetir
    }
}*/

/*function imprimirAzul(equis){
    for(i = 0; i < equis; i++){
        console.log("Azul");
    }
}

console.log(imprimirAzul(3));*/

/*let totalCalorias = 0; // Acá inicializo la variable totalCalorias con un valor de 0 (cero)

for( let i = 0 ; i < 5 ; i++ ){ 
       totalCalorias = totalCalorias + 300;  // Acá la variable, como ya esta declarada por fuera del for, puede ser modificada durante las iteraciones y no se "reinicia"
}

console.log(totalCalorias); // La variable totalCalorias acá ya existe y nos devuelve el valor total que buscábamos.*/

/*function sumar5MonedasDe25Centavos(){
    return moneda;    
}
    let moneda = 0;
    for (let i = 0; i < 5; i++) {
        moneda = moneda + 0.25;
    }

    console.log (moneda);*/

/*let cantidadEmpanadas = 3;
let totalCalorias = 0;

for( let i = 0 ; i < cantidadEmpanadas ; i++ ){ 
        totalCalorias = totalCalorias + 300;
}

console.log(totalCalorias);*/ 

/*function caloriasDeEmpanadas(cantidadDeEmpanadas) {
    let totalCalorias = 0;

    for( let i = 0 ; i < cantidadEmpanadas ; i++ ){ 
               totalCalorias = totalCalorias + 300;
           }
           console.log(totalCalorias); 
}

function caloriasDeEmpanadas(cantidadDeEmpanadas) {
    let totalCalorias = 0;

    for( let i = 0 ; i < cantidadEmpanadas ; i++ ){ 
               totalCalorias = totalCalorias + 300;
           }

           return totalCalorias; 
}*/

/*function sumarMonedasDe25(cantidadDeMonedas){
    let sumatoriaMonedas = 0;
    
    for (let i = 0; i < cantidadDeMonedas; i++){
        sumatoriaMonedas = sumatoriaMonedas + 0.25;
    }

    return sumatoriaMonedas;
}

console.log (sumarMonedasDe25(1));*/

/*function sumaDeLosParesDel0Al(x){
    let sumaPares = 0;

    for (let i = 0; i <= x; i++){
        if(i % 2 === 0){
            sumaPares = sumaPares + i;
        }
    }

    return sumaPares;
}

console.log (sumaDeLosParesDel0Al(10));*/

/*function sumatoriaHasta(x){
    acumulador = 0;
    for(let i = 0; i < x; i++){
        acumulador = acumulador + i;
    }

    return acumulador;
}

console.log(sumatoriaHasta(4));*/

/*function caloriasDeTrote(vueltas){
    let calorias = 5;
    for(let i = 1; i < vueltas; i++){
        calorias = calorias * 5;
    }

    return calorias;
}

console.log(caloriasDeTrote(2));*/

/*var gananciasUltimoSemestre = [50, -12, 1000, 300, 200, 0];

function sumatoriaGananciasSemestre(unSemestre) {
    return unSemestre[0] + unSemestre[1] +
        unSemestre[2] + unSemestre[3] +
        unSemestre[4] + unSemestre[5];
}

//En Enero la empresa ganó $80, en Febrero, $453, en Marzo $1000
var gananciasPrimerTrimestre = [80, 453, 1000];*/

/*function gananciaTotal0(unPeriodo) {
    let sumatoria = 0;
    return sumatoria;
}

function gananciaTotal1(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    return sumatoria;
}

function gananciaTotal2(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    sumatoria = sumatoria + unPeriodo[1];
    return sumatoria;
}

function gananciaTotal3(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    sumatoria = sumatoria + unPeriodo[1];
    sumatoria = sumatoria + unPeriodo[2];
    return sumatoria;
}

function gananciaTotal4(unPeriodo) {
    let sumatoria = 0;
    sumatoria = sumatoria + unPeriodo[0];
    sumatoria = sumatoria + unPeriodo[1];
    sumatoria = sumatoria + unPeriodo[2];
    sumatoria = sumatoria + unPeriodo[3];
    return sumatoria;
}*/

/*function gananciaTotal(unPeriodo) {
    let sumatoria = 0;
    for (let i = 0; i < unPeriodo.length; i++) {
        let mes = unPeriodo[i];
        sumatoria = sumatoria + mes;
    }
    return sumatoria;
}

function cantidadDeMesesConGanancia(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length;i++) {
      if (unPeriodo[i] > 0){
          cantidad = cantidad + 1;
      }
    }
    return cantidad;
}

console.log (cantidadDeMesesConGanancia([10, -10, 2, 100]));*/

/*function saldosDeMesesConGanancia(saldos){
    let saldosPositivos = [];

    for(let i = 0; i < saldos.length; i++){
        if(saldos[i] > 0){
            saldosPositivos.push(saldos[i]);
        }
    }

    return saldosPositivos;
}

console.log (saldosDeMesesConGanancia([100, 20, 0, -10, 10])
[100, 20, 10]);*/

/*function cantidadDeMesesConPerdida(unPeriodo) {
    let cantidad = 0;
    for (let i = 0; i < unPeriodo.length;i++) {
      if (unPeriodo[i] < 0){
          cantidad = cantidad + 1;
      }
    }
    return cantidad;
}

console.log (cantidadDeMesesConPerdida([100, 20, 0, -10, 10])
[100, 20, 10]);*/

/*function sumatoriaBajoImporte(importes){//importes de tipo array
    let suma = 0;
    for (let i = 0; i < importes.length; i++){
        if(importes[i] > 0 && importes[i] <= 1000){
            suma = suma + importes[i];
        }
    }
    return suma;
}

console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));*/

/*function asientosDisponibles(conjuntoAsientosDisponibles, asiento){//Array de asientos disponibles y el asiento
    if(conjuntoAsientosDisponibles.indexOf(asiento)){
        console.log("Felicitaciones, el asiento número " + asiento + "está disponible");
    }
    else
        console.log("Lo sentimos, el asiento número " + asiento + " está ocupado, pero aún quedan " + conjuntoAsientosDisponibles.length + " asientos disponibles");
}

console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));*/

/*function asientosDisponibles(conjuntoAsientosDisponibles, asiento){//Array de asientos disponibles y el asiento
    if(conjuntoAsientosDisponibles.indexOf(asiento)){
        console.log("Lo sentimos, el asiento número " + asiento + " está ocupado, pero aún quedan " + conjuntoAsientosDisponibles.length + " asientos disponibles");
    }
    else
        console.log("Felicitaciones, el asiento número " + asiento + " está disponible");
}

console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));
console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));
console.log(asientosDisponibles([3, 15, 18, 25], 25));*/

/*function asientosDisponibles(conjuntoAsientosDisponibles, asiento){//Array de asientos disponibles y el asiento
    let respuesta = [];
    
    for(let i = 0; i < conjuntoAsientosDisponibles.length; i++){
        if(conjuntoAsientosDisponibles.indexOf(i)){
            respuesta = "Felicitaciones, el asiento número " + asiento + " está disponible";
        }
        else
            respuesta = "Lo sentimos, el asiento número " + asiento + " está ocupado, pero aún quedan " + conjuntoAsientosDisponibles.length + " asientos disponibles";
    }

    return respuesta;
}

console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));
console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));
console.log(asientosDisponibles([3, 15, 18, 25], 25));
console.log(asientosDisponibles([3, 15, 18, 25], 78));*/

/*function asientosDisponibles(conjuntoAsientosDisponibles, asiento){//Array de asientos disponibles y el asiento
    let respuesta = [];
    
    for(let i = 0; i < conjuntoAsientosDisponibles.length; i++){
        if((conjuntoAsientosDisponibles.indexOf(i) === -1) || (conjuntoAsientosDisponibles.indexOf(i) === asiento)){
            respuesta = "Felicitaciones, el asiento número " + asiento + " está disponible";
        }
        else if(conjuntoAsientosDisponibles.indexOf(i) != asiento){
            respuesta = "Lo sentimos, el asiento número " + asiento + " está ocupado, pero aún quedan " + conjuntoAsientosDisponibles.length + " asientos disponibles";
        }
    }

    return respuesta;
}*/

//console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));
//console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));
//console.log(asientosDisponibles([3, 15, 18, 25], 25));
//console.log(asientosDisponibles([3, 15, 18, 25], 18));
//console.log(asientosDisponibles([3, 15, 18, 25], 78));

/*function reporteDePasajeros(cantEstaciones){
    let pasajeros = 200;
    
    for(let i = 0; i < cantEstaciones; i++){
        if(i = 4){
            pasajeros = pasajeros - 80 + 120;
            console.log("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
        }
        else
            pasajeros = pasajeros + 50 - 30;
            console.log("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
    }

    return pasajeros;
}

console.log(reporteDePasajeros(1));*/

/*function asientosDisponibles(arrayAsientos, asiento){//asiento tiene valor de 15
    let longArray = 0;//
    let array = arrayAsientos;//[15, 28, 44, 45, 70]
    longArray = arrayAsientos.length;// es un 5

    for(let i = 0; i<longArray; i++){
        //console.log(array.indexOf(asiento));//estoy buscando el numero 15
        if(array.indexOf(asiento) === -1){
            console.log("si entra al if es porque asiento no esta disponible");
        }
        else
            console.log("esto quieres decir que el asiento " + asiento + " SI esta disponible");
    }
    console.log("La variable arrayAsientos tiene " + longArray + " posiciones");
}


console.log(asientosDisponibles([28, 15, 44, 45, 70],15));
//console.log(asientosDisponibles([16, 28, 44, 45, 15],15));
//console.log(asientosDisponibles([15, 28, 44, 45, 70],50));
//console.log(asientosDisponibles([3, 15, 18, 25],25));
//console.log(asientosDisponibles([3, 15, 18, 25],78));

/*let array = [28, 15, 44, 45, 70];
let asiento = 15;
console.log (array.indexOf(asiento));*/// esta funcion me devuelve 1, que es la posicion en la que se
// encuentra el 15 */

/*function asientosDisponibles(arrayAsientos, asiento){//Array de asientos disponibles y el asiento
    let longArray = 0;//
    let array = arrayAsientos;//[15, 28, 44, 45, 70]
    longArray = arrayAsientos.length;// es un 5
    //la variable asiento ingresa con valor 15
    
    for(let i = 0; i < longArray; i++){
        if(array.indexOf(asiento) === -1){
            console.log("Lo sentimos, el asiento número " + asiento + " está ocupado, pero aún quedan " + longArray + " asientos disponibles");
        }
        else
            console.log("Felicitaciones, el asiento número " + asiento + " está disponible");
    }
}*/
/*let arrayEstaciones = [1,2,3,4,5,6,7,8,9,10];//Arreglo vacio de estaciones que va a recorrer el tren
let longArray = arrayEstaciones.length;
let acumulador = 1;
for (let i = 0; i < longArray; i++){
    arrayEstaciones[i] = acumulador;
    acumulador = acumulador + 1;
}

console.log(arrayEstaciones);

//Control de pasajeros
function reporteDePasajeros(cantEstaciones){//cantEstaciones es la cantidad de estaciones que avanzó el tren
    let arrayEstaciones = [0,1,2,3,4];//Arreglo de estaciones que va a recorrer el tren
    let arrayRespuesta = [" "];
    let pasajeros = 200;//cantidad de pasajeros que salen de la terminal
    let longArray = arrayEstaciones.length;

    for (let i = 0; i <= longArray; i++){//recorremos el arreglo de estaciones hasta el ultimo
        
        if(arrayEstaciones[i] === 0){//El tren avanza 1 estacion con los 200 pasajeros iniciales
            pasajeros = 200;
            console.log ("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
            let arrayRespuesta = arrayEstaciones[i]; //Al array le asigna [0] en la posicion 0
        }
        else if((arrayEstaciones[i] >= 1) && (arrayEstaciones[i] < 4)){
            pasajeros = pasajeros + 50 - 20;
            console.log ("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
            let arrayRespuesta = arrayEstaciones[i]; //Al array le asigno [i] en la posicion i.
        }
        else if(arrayEstaciones[i] = 5){
            pasajeros = pasajeros + 120 - 80;
            console.log ("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
            let arrayRespuesta 
        }
    }
    //return console.log("Salieron los " + pasajeros + " pasajeros de la terminal y el tren solo avanzó " + cantEstaciones + " estaciones.");
    //return arrayRespuesta;//retorn [1,2,3,4,5]

}

console.log(reporteDePasajeros(3));*/

/*function naipes(palo){
    let baraja = [];
    for(let numerada = 1; numerada <= 12; numerada++ ){
        if(numerada !== 8 && numerada !== 9){
            baraja.push (numerada + " de " + palo);
        }
    }
    return baraja;
}

console.log(naipes("espadas"));*/

/*function alturaArbolUtopico(cantCiclos){
    let altura = 0;

    for(let ciclo = 0; ciclo <= cantCiclos; ciclo++){//Que vamos a recorrer? > Recorrer los ciclos desde el 1 hasta cantCiclos
        if(ciclo % 2 === 0){//tenemos condiciones? > Si, tenemos que detectar la paridad
            //Estamos en verano
            altura = altura + 1;
        }
        else{
            //Estamos en primavera
            altura = altura * 2;
        }
    }

    return altura;
}

console.log(alturaArbolUtopico(0));*/

/*function masMenos(arrayNumeros){
    let positivos = 0;
    let ceros = 0;
    let negativos = 0;

    for(i = 0; i < arrayNumeros.length; i++){
        //tenemos condicion? > Si, hay 3 casos
        if(arrayNumeros[i] > 0){
            //encontramos un positivo
            positivos = positivos + 1;
        }
        else if(arrayNumeros[i] === 0){
            //encontramos un cero
            ceros = ceros + 1;
        }
        else{
            negativos = negativos + 1;
        }
    }

    //Acá se cuantos numeros hay de cada numero
    let resultado = [
        positivos / arrayNumeros.length,
        ceros / arrayNumeros.length,
        negativos / arrayNumeros.length
    ];

    return resultado;
}

console.log(masMenos([1,2,0,-2,-1,0]));*/

/*console.log("Probando NodeJS");*/

/*let fs = require('fs');

let moment = require('moment');

let datos = fs.readFileSync(__dirname + '/prueba.txt', 'utf-8');

console.log(datos);

console.log(moment().format('MMM Do YYYY'));*/

/*
function anterior(numeroA){
    return numeroA - 1;
}

function triple(numeroB){
    return numeroB * 3;
}

function anteriorDelTriple(numeroC){
    return anterior(numeroC) * triple(numeroC);
}

console.log(anteriorDelTriple(3));*/

let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  
  estudiantes.push({nombre: 'Juan', promedio: 5, curso: 'iOS'})
  estudiantes.push({nombre: 'Miguel', promedio: 2, curso: 'Android'});
  console.log(estudiantes);
  
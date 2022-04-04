// let doble = a => a * 2;

// let triple = b => b * 3;

// let aplicarCallback = (a, operacion) => operacion(a);

// aplicarCallBack(2, doble); // 4
// aplicarCallBack(4, triple); // 12

// let suma = (a, b) => a + b;

// let resta = (a, b) => a - b;

// let multiplicacion = (a, b) => a * b;

// let division = (a, b) => a / b;

// let calculadora = (a, b, operacion) =>  operacion(a, b);

// console.log(calculadora(18, 3, suma));
// console.log(calculadora(18, 3, resta));
// console.log(calculadora(18, 3, multiplicacion));
// console.log(calculadora(18, 3, division));

// function agregarHttp(url) {
//     return ('http://' + url);
// }

// function procesar(array, funcion){
//     let arraycompleto = [];
//     for (let i = 0; i <= array.length; i++){
//         arraycompleto = arraycompleto.array[0];
//     }
//     return arraycompleto;
// }

// let array = ['www.google.com','www.yahoo.com' ];
// console.log(procesar(array,agregarHttp))

// function agregarHttp(url) {
//     return ('http://' + url);
// }

// function agregarHttp(url){
//     let vector = url.split();
//     vector.unshift('http://');
//     let vector_dos = vector.toString();
//     let vector_tres = vector_dos.replace(',','');
//     return vector_tres;
// }

// function procesar( vector, callback){
//     let vector_nuevo = [];
//    for (let i=0; i<= vector.length-1; i++){
//        vector_nuevo[i] = callback(vector[i]);
//    }
//   return vector_nuevo;
// }

// console.log(procesar(['www.google.com', 'www.facebook.com','www.yahoo.com'],agregarHttp))
// console.log(agregarHttp('www.google.com'));

// let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
//   console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
//   let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
//   console.log(largoDeElmentos); // imprime [ 14, 13 ]

// let notas = [10, 4, 5, 8, 9, 2, 7];

// let notasHastaEl100 = notas.map(function(numero){
//     return numero * 10;
// });

// console.log(notasHastaEl100);

// let notasAprobadas = notas.filter(function(numero){
//     return numero >= 7;
// });

// console.log(notasAprobadas);

// let sumaNotas = notas.reduce(function(estado, numero){
//     return estado + numero;
// });

// console.log(sumaNotas);

// notas.forEach(function(valor, indice){
//     console.log("En la posicion " + indice + " tengo el valor " + valor);
// });

// Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio.
// Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. Deberemos guardarlos en las variables
// aprobados y desaprobados respectivamente.

// let estudiantes = [
//     {nombre: 'John', promedio: 8.5, aprobado: true},
//     {nombre: 'Jane', promedio: 7, aprobado: true},
//     {nombre: 'June', promedio: 3, aprobado: false},
// ];

// let aprobados = estudiantes.filter(function(arrayEstudiantes){//arrayEstudiantes {nombre: 'John', promedio: 8.5, aprobado: true}
//     return arrayEstudiantes.aprobado === true; 
// });

// let desaprobados = estudiantes.filter(function(arrayEstudiantes){//arrayEstudiantes {nombre: 'John', promedio: 8.5, aprobado: true}
//     return arrayEstudiantes.aprobado === false; 
// });
// console.log(aprobados);
// console.log(desaprobados);

// Hagamos lío...

// Nos dejaron una lista con los horarios de partida de algunos aviones. Esta lista se reproduce directamente en las pantallas del aeropuerto y,
// a modo de travesura, queremos adelantar una hora cada partida. Nuestro trabajo será utilizar el método map para poder lograrlo y almacenar la lista
// en una variable nueva llamada horariosAtrasados.

// let horariosPartida = [12, 14, 18, 21];

// let horariosAtrasados = horariosPartida.map(function(hora){//hora es la variable donde se va a almacenar la hora que recorre el arreglo horariosPartida
//     return hora - 1;
// });

// console.log(horariosAtrasados);

// reduce()
// Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.
// Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.

// let vueltas = [5, 8, 12, 3, 22]

// let totalVueltas = vueltas.reduce(function(estado, vueltaDada){
//     return estado + vueltaDada;
// });

// console.log(totalVueltas);

// forEach
// Para este ejercicio tenemos el array listaDeSupermercado. Nuestro trabajo será mostrar cada ítem de esa lista por consola utilizando un foreach.

// let listaDeSuperMercado = [
//     'Bife de chorizo', 
//     'Coca Cola', 
//     'Bananas', 
//     'Lechuga', 
//     'Chimichurri', 
//     'Lata de tomates', 
//     'Arvejas', 
//     'Cereales', 
//     'Pechuga de pollo', 
//     'Leche'
// ];

// listaDeSuperMercado.forEach(function(valor, indice){
//     console.log(valor);
// });

//OBJETO DATE

// let fechaActual = new Date();

// let anio = fechaActual.getFullYear();
// let mes = fechaActual.getMonth();
// let dia = fechaActual.getDate();
// let meses = ["Enero", "Febrero", "Marzo", "Abril"];

// console.log(fechaActual.getFullYear());
// console.log(fechaActual.getMonth());
// console.log(fechaActual.getDay());
// console.log(fechaActual.getDate());
// console.log("Hoy es el " + dia + " de " + meses[mes] + " de " + anio);

// En este ejercicio ya vamos a tener disponible la fecha en la variable fecha y, utilizándola, debemos imprimir el siguiente mensaje:

// "Hoy es el día XX del mes YY del año ZZZZ", donde XX es el número del día, YY es el número del mes y ZZZZ es el número del año. 

// Ejemplo de cómo podría verse una fecha con este formato:

// "Hoy es el día 0 del mes 4 del año 2019"

// Funciones de Date que nos van a ayudar:

// getDate()
// getMonth()
// getFullYear()

// let fecha = new Date();
// let dia = fecha.getDate();
// let mes = fecha.getMonth();
// let anio = fecha.getFullYear();
// console.log("Día: " + fecha.getDate());
// console.log('Hoy es el día '+ dia + ' del mes ' + (mes + 1) + ' del año ' + anio);

// let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia'];

// let [,bariloche ,,china,grecia] = destinosDelMundo;

// console.log(destinosDelMundo);
// console.log(bariloche);
// console.log(china);

// let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
// let { marca,  color} = auto;
// console.log(auto);
// console.log(marca);
// console.log(color);

// let peliculasAccion = ["End Game", "Iron Man 3", "Capitan America"];
// let peliculasComedia = ["Mi Pobre Angelito", "¿Que paso ayer?"];
// let peliculas1 = [peliculasAccion,peliculasComedia];
// let peliculas2 = [...peliculasAccion, ...peliculasComedia];
// console.log(peliculas1);
// console.log(peliculas2);

// let generoComedias = {
//     nombreGenero : 'Comedia',
//     popularidad : 3
// };

// let miPobreAngelito = {
//     nombre : "Mi pobre angelito",
//     duracion : 120,
//     ...generoComedias
// };

// let quePasoAyer = {
//     nombre : "¿Que paso ayer?",
//     duracion : 110,
//     ...generoComedias
// };
// console.log(miPobreAngelito);
// console.log(quePasoAyer);

// function peliculasVistas(...nombresDePeliculas){
//     for(let i = 0; i < nombresDePeliculas.length; i++){
//         console.log("La persona ya vió " + nombresDePeliculas[i]);
//     }
// }

// peliculasVistas("End Game", "Iron Man 3", "Mi pobre angelito", "¿Que paso ayer?");

// let autos = [{
//     marca : 'Ford',
//     modelo : 'Fiesta',
//     precio : 150000,
//     km : 200,
//     color : 'Azul',
//     cuotas : 12,
//     anio : 2019,
//     patente : 'APL123',
//     vendido : false},{
//     marca : 'Toyota',
//     modelo : 'Corolla',
//     precio : 100000,
//     km : 0,
//     color : 'Blanco',
//     cuotas : 14,
//     anio : 2019,
//     patente : 'JJK116',
//     vendido : false}
// ]

// module.exports = autos;

// console.log(autos);
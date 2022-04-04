/*let frase = 'Breaking bad rules!';

console.log(frase.slice(-10));
frase.slice(-10);
frase.slice(13);

console.log(frase);*/

/*function dominio(paramDominio){
    //let objetoLiteral = paramDominio;
    let datosConvertidos = paramDominio;
    const dom = "http://www.";
    let unificar = dom + datosConvertidos;
    return unificar = JSON.stringify(unificar);
}*/

// function dominio(paramDominio){
//     let datosConvertidos = JSON.stringify(paramDominio);
//     const dom = 'http://www.'
//     let respuesta = JSON.stringify(dom + paramDominio);
//     return respuesta;
// }

// console.log(dominio("digitalhouse.com.ar"));
// console.log(dominio("9gag.com"));

// function dominio(texto){
//     let vector =  texto.split();
//      vector.unshift('http://www.')
//     let vector_dos = vector.toString();
//     return vector_dos.replace(',','');
// }

// console.log(dominio('digitalhouse.com.ar'));

/*let texto = ' ';

console.log (texto.length);

/*function reemplazoFastFast(text, searchWord, replaceWord){
    let frase = text;
    return frase.replace(searchWord,replaceWord);
}

console.log(reemplazoFastFast('Este texto es mala onda','mala','buena'));*/

/*function menciona(texto, palabra){
    let find = texto;
    if(find.indexOf(palabra) === -1){
        return false;
    }else{
        return true;
    }
}

console.log(menciona('Existen muchos lenguajes de programación y JavaScript es uno de ellos','programación'));*/

/*Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', deberemos recortarla para poder obtener 
el nombre 'Carli' en una nueva variable llamada licenciada.*/

/*let frase = 'Hola!, soy Carli';
let licenciada = frase.slice(11);
licenciada = licenciada.split(' ');

console.log(licenciada);*/

// let deportista = {
// 	nombre: "Aimar",
//     energia: 100,
//     experiencia: 10,
//     entrenarHoras: function(cantHoras){
//         this.energia = deportista.energia - (cantHoras * 5);
//         this.experiencia = deportista.experiencia + (cantHoras * 2);
//     }
// };

// console.log("==Antes de comenzar entrenamiento==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);
// console.log("==ENTRENANDO==");
// deportista.entrenarHoras(5);
// console.log("==FIN ENTRENAMIENTO==");
// console.log("Deportista energia: "+deportista.energia);
// console.log("Deportista experiencia: "+deportista.experiencia);

//Arrow functions

// let laMitad = numero => numero / 2;

// console.log(laMitad(8));

// let dividir = (numA, numB) => numA / numB;

// console.log(dividir(20, 4));


// let tengoQueTrabajar = dia => {
//     if(dia === 'Sábado' || dia === 'Domingo'){
//         return 'No tienes que trabajar';
//     }else{
//         return 'Si, Pablo, tienes que ir a trabajar';
//     }
// }

// console.log(tengoQueTrabajar('Sábado'));

// Función convencional 

// function sumar(n1,n2) {
//     return n1 + n2
//   }
  
// // Arrow function

// let sumar = (n1,n2) => n1 + n2

// function dameCinco() {
//     return [1,2,3,4,5];
// }

// function multiplicarPorDos() {
//   return 123 * 2 ;
// }

// function mostrarNombre() {
//   return "Mi nombre es Hernán";
// }

// let dameCinco = () => [1,2,3,4,5];


// let multiplicarPorDos = () => {
//   let a = 123;
//   return a * 2;
// }

// let mostrarNombre = () => "Mi nombre es Hernán";

// console.log(dameCinco());
// console.log(multiplicarPorDos());
// console.log(mostrarNombre());

// function saludar(nombre) {
//     return 'Hola, ' + nombre + '!';
// }

// let saludar = nombre => 'Hola, ' + nombre + '!';

// function saludar(nombre, apellido) {
//     return 'Hola, ' + nombre + ' ' +  apellido + '!';
// }

// let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' + apellido + '!';

// console.log(saludar('Pablo', 'Mieles'));

// if ternario

// let fruta = 'Naranja';

// let resultado = fruta == 'Manzana'?'Buenísimo, me gustan las manzanas':'Ufa, quería manzana';

// console.log(resultado);

// // Switch

// let semaforo = 'Ninguna';

// switch(semaforo){
//     case 'Verde':
//         console.log('Puedo cruzar');
//         break;
//     case 'Amarillo':
//         console.log('Precaución');
//         break;
//     case 'Rojo':
//         console.log('No cruces, hay que esperar');
//         break;
//     default:
//         console.log('no funciona el sémaforo');
// }

// let dia = 'jueves'
// function finDeSemana (dia) {	
// 	if (dia == 'viernes') {
//     	console.log('buen finde')
// 	} else if (dia == 'lunes') {
//     	console.log('buena semana')
// 	} else {
//     	console.log('buen dia')
// 	}
// }

// function finDeSemana(dia){
//         switch (dia) {
//             case 'viernes':
//             console.log('buen finde');
//             break;
//             case 'lunes':
//             console.log('buena semana');
//             break;
//             default:
//             console.log('buen dia');
//         }
// }

// function tengoClases(dia) {
// 	switch (dia) {
// 		case 'lunes':
// 		case 'miércoles':
// 		case 'viernes':
// 		console.log('tenés clases');
// 		break;

// 		default:
// 		console.log('no tenés clases');
// 	}
// }


// let bicicletaA = {
//     rodado: 18,
//     marca: "Mountain Bike"
// }
// let bicicletaB = {
//     rodado: 24,
//     marca: "Aurora"
// }

// let bicicletaConRodadoGrande = (this.rodado > this.rodado) ? bicicletaA:bicicletaB;

// console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

// function loro(texto){
//     for(let i = 1; i <= 5; i++){
//         console.log(texto);
//     }    
// }

function noParesDeContarImparesHasta(numX){
    let contar = 0;
    for(let i = 0; i <= numX; i++){
        if(i & 2 !== 0){
            contar = contar + 1;
        }
    }
    return(contar);
}
console.log(noParesDeContarImparesHasta(4))


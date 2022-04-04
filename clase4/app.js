/*console.log("Hola soy el entry point");

let alumno = 'Pablo Mieles';

const apellido = "Mieles";

console.log(alumno);
console.log(apellido);*/

/*const lista = [1, 2, 3];

console.log(lista);
console.log(lista.length);

lista.push(4);
lista.push('5');

console.log(lista);
console.log(lista.length);*/

/*const pi = 3.14;

const curso = 'FS';

const mayorEdad = true;

//tipo de dato objeto
const auto = {
    color: 'rojo',
    precio: 500000,
    puertas: 5,
};

const autos = [{
    color: 'verde',
    precio: 700000,
    puertas: 3,
},    
{
    color: 'amarillo',
    precio: 1500000,
    puertas: 3,
},
{
    color: 'rojo',
    precio: 500000,
    puertas: 5,
}];

console.log(autos);
console.log(autos[0]);
console.log(autos[1].precio);*/

console.log("Hola soy el entry point");

const sumar = require('./sumar');
const restar = require('./restar');
const dividir = require('./dividir');
const multiplicar = require('./multiplicar');

console.log(sumar(2,5));
console.log(restar(2,5));
console.log(dividir(10,2));
console.log(multiplicar(10,0));
console.log(multiplicar(10,3));
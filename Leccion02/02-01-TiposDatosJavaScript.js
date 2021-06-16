/**
 * Ejemplo de tipos de datos en JavaScript
 */
//Tipo de dato string
var nombre = "Carlos";
console.log(typeof nombre);

nombre = 10.58;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero);

//Tipo de dato objeto
var objeto = {
  nombre: "Juan",
  apellido: "Pérez",
  telefono: "55448844",
};
console.log(typeof objeto);

//Tipo de dato booleano (true, false)
var bandera = false;
console.log(bandera);

//Tipo de dato función
function miFuncion() {}
console.log(typeof miFuncion);

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una función
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(typeof Persona);

//Tipo undefined
var x;
console.log(x);

x = undefined;
console.log(typeof x);

//null = ausencia de valor
var y = null;
console.log(typeof y);

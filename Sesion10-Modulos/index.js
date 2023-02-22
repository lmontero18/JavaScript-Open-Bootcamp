// Importar y exportar modulos

//1. CommonJS - require
const moduloMatematicas = require("../Sesion10-Modulos/modules/matematicas.js")
console.log(moduloMatematicas);

const fact = moduloMatematicas.factorial(5)
console.log(fact);
const sum = moduloMatematicas.suma(12, 90);
console.log(sum);
const multi = moduloMatematicas.multiplicar(2,2)
console.log(multi);


//2. Import ES6 - Import
const { factorial, suma } = require("./modules/matematicas")

const facto = moduloMatematicas.factorial(5)
console.log(facto);
const sumo = moduloMatematicas.suma(12, 90);
console.log(sumo);
const multio = moduloMatematicas.multiplicar(2,2)
console.log(multio);



// console.log(module);



import * as matematicas from './modulos/controller.js';
import chalk from 'chalk';
//El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)

console.log(matematicas.suma(1,2));
console.log(matematicas.multiplicacion(4,5));

//Chalk
console.log(chalk.green("Hola mundo con chalk!"));



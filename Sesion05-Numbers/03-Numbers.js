// Operador .valueOf() - obtener valores numericos a partir de literales
let a =  2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);

console.log(b.valueOf());
console.log(1);

let str = new String("Hola soy un string")
console.log(str);
console.log(str.valueOf());


//NaN - Ifinity

let n = Number('adios');
console.log(n); //NaN
console.log(isNaN(n)); //true;

let numerador = 19; 
let divisor = 0;
let divisor2 = null;

console.log(numerador / divisor); //Infinity ? 
console.log(numerador / divisor2); //Infinity

//Convertir valores string a number

let numero = '5.89';
let numero2 = 17.2;

console.log(typeof numero);
console.log(numero + numero2); // Error de concepto

console.log(Number(numero) + numero2);

console.log(parseInt(numero)); //5
console.log(parseFloat(numero)); // 5.89

let numero3 = 4;

console.log(parseInt(numero3));
console.log(parseFloat(numero3));


//Numeros hex
let numHex = '0x3a5b7';
console.log(parseInt(numHex));





//Obtener valores maximo y minimo
let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);
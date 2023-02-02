// Principales op aritmeticas
let a = 3.5;
let b = 4.8;

//Suma (+)
console.log(a + b);

//Resta (-)
console.log(a - b);

//Multiplicacion
console.log(a * b);

//Division
console.log(a / b);




//Representacion de los numeros en cadenas de texto
console.log(typeof a); //number

//Redondeo numeros decimales
let c = 3.3;
let d = c*3;
console.log(d); //9.899999999999999

let e = 1839.123123123123;
let f = 2312131131233123;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toFixed(x) - Limitar el numero de decimales al valor "x"
console.log(d.toFixed(0)); //10

// .toPrecise(x) - 
console.log(e.toPrecision(4));
console.log(f.toPrecision(7));




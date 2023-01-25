// declaracion de variables

var variable;
let variableLet;

const constante = "Hola soy una constante";
console.log(constante);
// constante = "adios"; //Nos da un error

var a = 1;
console.log(a);

a = 4;
console.log(a);

let b = 3;
console.log(b);

b = 5;
console.log(b);


//Diferencias entre let y var

//var afecta a todo el codigo, let solo en el bloque en donde esta declarado


var variable ="Hola soy una variable var"

for (let i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable"
}

console.log(variable)

let varlet="Hola soy una variable LET"

for (let i = 0; i < 3; i++) {
    let varlet = "Soy la segunda variable LET"
}

console.log(varlet)

//Type of
var num = 4;

console.log(typeof num)

num = "hola soy num";

console.log( typeof num)

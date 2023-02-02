let input = "Leo";
let db = "leo";


//toLowerCase() - toUpperCase()
//console.log(input.toLowerCase === db.toLowerCase);

//Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena. "; 
let str_2 = "Hola soy la segunda cadena";

console.log(str_1.concat(str_2));


let str_3 = "Hola buenas! "

console.log(str_3.length);
//trim();
console.log(str_3.trim().length);


//obtener caracter en cierta posicion

let str_4 = "String4"; // ["S","t","r","i","n","g","4"];

console.log(str_4.charAt(2));
console.log(str_4[2]);


//Obtener la pos de una palabra dentro de una cadena de chars

let str_5 = "Hola soy Luis y me gusta el surf. Mi nombre es Luis apellido Montero";

console.log(str_5.indexOf("Luis")); //Primera palabra
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Luis")); //Ultima palabra




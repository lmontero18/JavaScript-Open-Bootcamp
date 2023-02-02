// Metodos con strings

//Obtener longitud de un string
let str = "Hola soy un string";

console.log(str.length); //18 chars

//Obtener partes de cadenas de caracteres
//slice() substring() substr()

let slice_str = str.slice(0, 10);
console.log(slice_str); // hola soy u

let substring_str = str.substring(0,10);
console.log(substring_str); // hola soy u

let substr_str = str.substr(0,10);
console.log(substr_str); //Normalmente esto no se usa! solo slice, substring.


//Reemplazar contenido de una cadena de texto
let cadena = "Hola soy Luis";
console.log(cadena);
console.log(cadena.replace('Luis', 'Gorka'));

let textLargo = "Lorem ipsum dolor sit amet, Lorem adipiscing elit. Suspendisse tempus Lorem massa, eu consequat eros tempor nec. Ut quis sem.";
textLargo.replace('Lorem', 'cinco'); // remplaza las palabras!

console.log(textLargo.replace(/Lorem/g, 'cinco'));






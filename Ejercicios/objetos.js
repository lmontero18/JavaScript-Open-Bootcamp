// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = { 
    nombre: "Luis",
    apellido: "Montero",
    edad: 19,
    altura: 177,
    isDev: true
}
// - Una variable que obtenga tu edad a partir del objeto anterior
let edadObjeto = datosPersonales.edad;
console.log("Mi edad es:",edadObjeto);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const MejorAmigo1 = {
    nombre: "Luis",
    apellido: "Hidalgo",
    edad: 18,
    altura: 165,
    isDev: false
}
const MejorAmigo2 = {
    nombre: "Pamela",
    apellido: "Villalobos",
    edad: 20,
    altura: 155,
    isDev: false
}

const arrayObj = [ MejorAmigo1,MejorAmigo2, datosPersonales];
console.log(arrayObj);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const arrayEdad = arrayObj.sort((a, b) => a.edad - b.edad);
console.log(arrayEdad);
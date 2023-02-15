//Objetos en javascript
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzales",
    isDev: true,
    libroFav: "el alquimista",
    "4-Juegos": [1, 2, 3, 4]
}

//Acceder a los valores de las propiedades
console.log(obj["4-Juegos"]);
console.log(obj.nombre, obj.apellido);

const prop = "isDev";
console.log(obj[prop]);

//Replicar objeto

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Julian";

console.log(obj2.nombre);
console.log(obj.nombre);//cuidao!!!

//Mismo espacio en memoria por ende se cambian los dos aunque sea una copia

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);

// Con valores primitivos no pasa lo del valor en memoria!!! solo en los objetos


const obj3 = { ...obj}
console.log(obj3.nombre);

obj3.nombre = "Luis";//nuevo valor

console.log(obj3.nombre);
console.log(obj2.nombre);


//Como ordenar listas de objetos en funcion de una propiedad
const listaPeliculas = [
    {titulo: "Lo que el viento se llevo", year: 1939},
    {titulo: "Titanic", year: 1997},
    {titulo: "Moana", year: 2016},
    {titulo: "El efecto mariposa", year: 2004},
    {titulo: "TED", year: 2012}
]

console.log(listaPeliculas);

//ordenar .sort() muta el valor original del array

listaPeliculas.sort((a, b) => a.year - b.year); //year menor que para ordenarla ascendentemente
console.log(listaPeliculas);
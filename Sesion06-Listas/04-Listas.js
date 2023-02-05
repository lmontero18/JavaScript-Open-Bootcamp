//Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined];

//forma antigua, poco eficiente
for (let index = 0; index < array.length; index++) {
    console.log(array[index]); 
}

//Forma ES6 (mas eficiente) .forEach()
let suma = 0;
console.log(arrayNums =[1,2,3]);

arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
})
console.log(suma);

// Busqueda de una  valor dentro de una lista .find();
// Quiero encontrar el elemento 90
const variable = array.find(valor => {
    if( valor === 90){
        return true;
    }
});

console.log(variable);

//Buscar edad de miguel
const listaObjetos = [
    {nombre: "Luis", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaia", edad: 29}
]

//Bien pero se puede simplificar
const objeto = listaObjetos.find(o => {
    if(o.nombre === "Miguel"){
        return true;
    }
})

console.log(objeto.edad);

//Simplificacion 
const objeto1 = listaObjetos.find(o => o.nombre === "Miguel");
console.log(objeto1.edad);

//Otra manera de hacerlo
const {edad} = listaObjetos.find(o => o.nombre === "Miguel");
console.log(edad);
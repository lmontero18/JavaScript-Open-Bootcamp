//Como ordenar arrays sort() => es la forma mas eficiente; Modifica el array original!
const array = [2, 5, 4, 6, 6, 10];
console.log(array);

array.sort((a,b) => {
    if (a < b){
        return -1;
    } else {
        return +1;
    }
})

console.log(array);

// Ordenar unicamente arrays numericos

const arrayNumerico = [23,123,4,45,76,234,789,2];

arrayNumerico.sort((a, b) => a - b);
console.log(arrayNumerico);


//Ordenar array de objetos
const arrObj = [
    {nombre: "Luis", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaia", edad: 29}
]; 


arrObj.sort((a, b) => a.edad < b.edad);


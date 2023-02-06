//.every();
const array = [43, 5, 76, 5, 3, 4, 52, 34, 10, -3123];

const resultado = array.every(valor => valor > 0);
console.log(resultado);









//Comprar listas
const arr = [1,2,3,4];
const arr2 = [1,2,3,4];
const arr3 = [1,2,3,6];

console.log(arr === arr2);


const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res;
}

console.log(compararArrays(arr, arr2));
console.log(compararArrays(arr, arr3));
    

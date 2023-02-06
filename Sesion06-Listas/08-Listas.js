// .some()

const arr = [1, 2, 3, 4, 5, 6, -1];

const res = arr.some(valor => valor < 100);
console.log(res);

const existe = arr.some(valor => valor === 4);
console.log(existe);

const arrObj = [
    {nombre: "Luis", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaia", edad: 29}
]; 

const existeObj = arrObj.some(valor => valor.nombre === "Maria");
console.log(existeObj);


//Como obtener una lista a partir de un objeto iterable
const str = "Hola soy Luis";
console.log(str[0]); 

const ar_str = Array.from(str);
console.log(ar_str);

const set = new Set([2,3, "hola", 4])
const ar_Set = Array.from(set);

console.log(ar_Set);

const keys = arr.keys();
console.log(keys);

const arr_keys = arr.from(keys)
console.log(arr_keys);


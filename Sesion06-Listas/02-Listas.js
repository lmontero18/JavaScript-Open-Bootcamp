//concatenar dos listas .concat(lista2)
const lista1 = ["Hola", 2, false, null];
const lista2 = ["Adios", 8, true, undefined];

console.log(lista1.concat(lista2));
console.log(lista1);
console.log(lista2);

const lista3 = lista1.concat(lista2);

//Como unir dos listas con el factor de propagacion
console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);

//ERROR! MAl ENTENDIDO DEL FACTOR DE PROPAGACION ...
const lista5 = [lista1, lista2];
console.log(lista5);



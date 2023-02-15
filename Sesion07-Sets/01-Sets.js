// Sets o conjuntos

const lista = [1,2,3,4,5,6,1,2,4];
const miSet = new Set(lista);

console.log(miSet);
console.log(lista);

// .add()

miSet.add(9);
console.log(miSet);
miSet.add(1);
console.log(miSet);

// .delete()

miSet.delete(9)
console.log(miSet);

// .clear()
// miSet.clear();
// console.lomiSetg();

// .has()
console.log(miSet.has(4));

// .size
console.log(miSet.size);

//Iteracion

miSet.forEach(valor => {
   console.log(valor); 
});

// objeto iterator
const it_miSet = miSet.values();
console.log(it_miSet);

//array
const arr_miSet = [...miSet];
console.log(arr_miSet);

//Como trabajar con listas
let var1 = 45;
let array = [1,"Hola",false,{id : 5},null,undefined, var1];

console.log(array);

//Acceder a los valores de un array a travez de su posicicion

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);


//Metodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => mutan el valor de nuestro array
//Valores al final => .push();

array.push("final");
console.log(array);

//Valores al principio => unshift()

array.unshift("Inicio");
console.log(array);

//Metodos para eliminar valores en nuestros arrays
//.pop() .shift() => mutan el valor del array 

const array2 = [1,4,"hola",false];
//Valores al final => .pop();
array2.pop();
console.log(array2);

//Valores al principio => .shift();
array2.shift();
console.log(array2);

//Metodo para eliminar, modificar o add valores en nuestro array
//.splice(x,y,z)
const array3 = [1,2,3,4,5,6];

//eliminar valores (indice, valores a eliminar)
array3.splice(2, 1);
console.log(array3);

//add valores .splice(indice, 0, valores)
array3.splice(2, 0, "Hola", 9);
console.log(array3);

//modificar valores splice(indice, 1, valores)
array3.splice(2, 1, 10)
console.log(array3);
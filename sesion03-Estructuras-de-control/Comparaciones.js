//Comparaciones

//Igualdad

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

// == solo compara el valor
// === compara el valor y el tipo

if (a == b ){
    console.log("a es igual a b - Debil")
}

if(a === b){
    console.log("a es igual a b - Fuerte")
}

//Desigualdad

let c = 4;
let d = "4";

//no iguales

if(c != d){
    console.log("c es diferente a d - Debil")
}

if(c !== d){
    console.log("c es diferente a d - Fuerte")
}




//mayores

let max = 10;
let min = 5;

if( max > min){
    console.log("max es mayor que min")
}

if( max >= 10){
    console.log("max es mayor o igual que min")
}



//menores
if(min < max){
    console.log("min es menor que max")
}
if(min <= max){
    console.log("min es menor  o igual que max") 
}







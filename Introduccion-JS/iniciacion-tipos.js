//Tipos primitivos
//number
4;

//string
"Hola mundo";
'Hola mundo';

//bolean
true;
false;

// nulo y undefined
null;
undefined; //valor no asignado en memoria

// null, undefined, false, 0 ==> todas son falsy

console.log(null == undefined) //no son del mismo tipo
console.log(null == false) //no son del mismo tipo
console.log(null == 0) //no son del mismo tipo



if(null){
    console.log("cumple");
} else {
    console.log("no cumple");
}


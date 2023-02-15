//Funciones, que son, como se declaran
const nom = "Luis"


saludar(nom)

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}


////
let nombre_2 = "Juan";

despedir(nombre_2);

function despedir(nombre){
    nombre = "Diego";
    console.log(`Adios ${nombre}`);
}


////
let persona = {nombre: "Juan", apellido: "Gonzales"}
saludarPersona(persona)
console.log(persona);

function saludarPersona(objeto){
    objeto.apellido = "Montero";
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludar()


////
//Valor por defecto || Parametros por defecto
function imprimeNumero(numero = 0){
    console.log(numero);
}

imprimeNumero();

////
function imprimir(...Parametros){
    console.log(Parametros);
}

imprimir(1,2,3,4,5,6,7,89,)


////
function suma(...nums){
    return nums.reduce((a,b) => a + b);
    
}

const s = suma(1,2,3,4);
console.log(s);


// 
let variable = "Hola";


function multi(num1 = 0 , num2 = 0){ 
    console.log(variable);
    let variableInterna = "Adios" //!! no se puede acceder desde afuera
    return num1 * num2;

}

console.log(multi(2,2));


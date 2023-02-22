function suma( a, b){
    return a + b;
}

function multiplicar (a, b){
    return a * b;
}

function factorial(a){
    let factorial = 1;
    for (let i = 1; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}
//Haciendo publica las funciones
module.exports = {
    suma,
    multiplicar,
    factorial
}

export function suma( a, b){
    return a + b;
}

export function multiplicar (a, b){
    return a * b;
}

export function factorial(a){
    let factorial = 1;
    for (let i = 1; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

export const nombre = "matematicas";

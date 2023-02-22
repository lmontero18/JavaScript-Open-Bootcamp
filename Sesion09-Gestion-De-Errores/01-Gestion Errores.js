const miFuncion = val => { 
    if (typeof val === Number){
        return 2 * val;
    } 
    throw new Error("El valor debe ser de tipo numero!")
}
const numero = 8;
// console.log(miFuncion("ala"));

try{

    const doble = miFuncion(2);
    console.log(doble);
    
} catch (e) { 

    console.log("ERROR!");
    console.error(e);
} finally {
    console.log("Esto se ejecuta tanto si hay o no ERROR!");
}


// Internal Error, SyntaxError, TypeError, RangeError and ReferenceError
// MDN Web docs, Errors Javascript


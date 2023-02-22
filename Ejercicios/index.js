const logger = require("../Ejercicios/FuncionError");

function miFuncion(val){
    if( val <= 10){
        return val;
    }
    throw new Error("El valor ingresado es mayor que 10!!!")
}

try{
    const valor = miFuncion(11);
    console.log(valor);

} catch (e){
    logger.error("ERROR")
}

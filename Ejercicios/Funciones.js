// - Una función sin parámetros que devuelva siempre "true"

function alwaysTrue(){
    return true;
}

alwaysTrue();


// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
// const tiempo = setTimeout(retraso, 5000)

function retraso() { 
    console.log("Hola soy una promesa");
    return;
}

// - Una función generadora de índices pares automáticos

function* generaId(){
    let ipar = 0;

    while(ipar < 10){
        ipar++

        if(ipar % 2 === 0){
            return ipar
        } else {
            ipar++
        }
        yield ipar
    }
    
}

const gen = generaId();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
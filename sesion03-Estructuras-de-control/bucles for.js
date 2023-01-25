//Bucles en js

//for

for(let i = 0; i < 10; i++){

    console.log(i)
}
let lista = [1,4,6,2,3,7,10,12];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

//for of
for(let valor of lista){
    console.log(valor)
}

//for each
lista.forEach(valor => {
    console.log(valor)
})

//for in

let persona = { 
    nombre : "luis",
    apellido : "montero",
    edad : 19,
    isDev : true
}

let prop = "edad";
console.log(persona[prop])



for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad])
}


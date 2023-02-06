//Metodo avanzados
// .map() .filter() .reduce()

const array = ["San sebastian", "Madrid", "Barcelona", "Alicante", "Bilbao"];

//Metodo map
const newArray = array.map((valor, indice) => `${indice + 1} - ${valor}`);
console.log(newArray);


//Metodo filter
const arrObj = [
    {nombre: "Luis", edad: 35},
    {nombre: "Gorka", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Lucia", edad: 3},
    {nombre: "Amaia", edad: 29}
]
//Valido pero se puede simplificar 
//Obtener personas mayores que 30
const personasMayores = arrObj.filter(objeto => {
    if (objeto.edad > 30){
        return true;
    } else {
        return false; 
    }
})
//filtra las personas que coincidan
console.log(personasMayores);

//Simplificacion
const personasMayoresS = arrObj.filter(objeto => objeto.edad > 30)
console.log(personasMayoresS);

//Datos de todas las personas excepto del de Miguel :(
const nuevaLista = arrObj.filter(objeto => objeto.nombre !== "Miguel");
console.log(nuevaLista);

//Reduce();
const valores = [1,2,3,4,5]; 

//sumar los valores con reduce();

const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
    console.log("Valores: ");
    console.log(acumulado);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return acumulado + cur;
});

console.log(suma);
//Trabajando con fechas

const fecha = new Date();
console.log(fecha);// Fecha de hoy

//Atencion los meses inician desde 0 = enero 11= diciembre
const fecha2 = new Date(1987, 10, 20);
console.log(fecha2);

const fecha3 = new Date(-1000000000000000);// milisegundos
console.log(fecha3);


const fecha4 = new Date("October 13, 1979 12:15:15")
console.log(fecha4);

const fecha5 = new Date(1987, 10, 20);



//Comparar fechas
//Ver si una fecha es posterior a otra

console.log(fecha < fecha2);//Es posterior = True/False


//.getTime() para comparar fechas
console.log(fecha2.getTime() === fecha5.getTime());


//Obtener dia, mes y anyo de una fecha
console.log(fecha2.getDate());//Dia 20
console.log(fecha2.getMonth()+1);
console.log(fecha2.getFullYear());

//Mostrar fecha en string
console.log(fecha2);
console.log(fecha2.toLocaleDateString());
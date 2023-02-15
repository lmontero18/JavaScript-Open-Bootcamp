// - La fecha de hoy
const fecha = new Date();
console.log(fecha.toDateString());

// - La fecha de tu nacimiento
const fechaNacimiento = new Date("October 18 2003");
console.log(fechaNacimiento);

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparacion = (fecha.getTime() > fechaNacimiento.getTime())
console.log(comparacion);

// - Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDay();
console.log(diaNacimiento); 

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth()+1;
console.log(mesNacimiento);

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anyoNacimiento = (fechaNacimiento.getFullYear());
console.log(fechaNacimiento);
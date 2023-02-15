// - Un nuevo Set con los nombres de tu familia
const familia = ["Alfredo",  "Lola", "Rafael","Flor"];
const familiaSet = new Set(familia);
console.log(familiaSet);

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
console.log(familiaSet.add("Luis"));

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
console.log(familiaSet.add("JavaScript :D"));
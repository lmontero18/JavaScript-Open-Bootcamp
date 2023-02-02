//Metodos de cadenas de texto

let textoLargo= "Lorem ipsum dolor sit amet, Lorem adipiscing elit. Suspendisse tempus Lorem massa, eu consequat eros tempor nec. Ut quis sem."

console.log(textoLargo.match(/Lorem/g)); //output = ['Lorem', 'Lorem', 'Lorem'];

//Busca la palabra
console.log(textoLargo.includes("Lorem"));

//saber si texto empieza con palabra
console.log(textoLargo.startsWith("Lorem"));


//saber si texto termina con palabra
 console.log(textoLargo.endsWith("sem."));


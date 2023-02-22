const f = document.getElementById('formulario');
const getNombre = document.getElementById('nombre');
console.log(f);

f.addEventListener('submit', evento =>{
    console.log(f);
    evento.preventDefault();
})



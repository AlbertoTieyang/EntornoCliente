const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');
let boton = document.getElementById("boton");

padre.addEventListener('click', () => {
    alert('Padre clicado');
});
hijo.addEventListener('click', () => {
    alert('Hijo clicado');
    
});
boton.addEventListener("click", function(){
    alert("boton pulsado");
})
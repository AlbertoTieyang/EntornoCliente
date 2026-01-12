let boton = document.getElementById("boton");
function funcion (){
boton.className = "negro";
}

boton.addEventListener("click",function() {
    alert("has hecho clic");
});

boton.addEventListener("click", (objEvento) => {
    console.log(objEvento);
})

addEventListener("click", (posicion) => {
    console.log(posicion.screenX, posicion.screenY);
});


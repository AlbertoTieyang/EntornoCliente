let contador = 0;

let boton = document.getElementById("boton");
let contadorTitulo = document.getElementById("titulo");

boton.addEventListener("click", function(){
    contador++;
    contadorTitulo.innerHTML = "se ha tocado el boton " + contador;
});

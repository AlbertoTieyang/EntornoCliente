let contador = 0;

let boton = document.getElementById("boton");
let contadorTitulo = document.getElementById("titulo");


boton.addEventListener("click", function(){
    if (contador >= 10) {
        contadorTitulo.innerHTML = "has pulsado demasiado";
        boton.ariaDisabled = true;
    }
    contador++;
    contadorTitulo.innerHTML = "se ha tocado el boton " + contador;
});

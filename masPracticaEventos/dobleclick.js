const botones = document.querySelectorAll("input");
botones.forEach(boton => {
    boton.addEventListener("click", function() {
        console.log(boton.value);
    })
    boton.addEventListener("dblclick", function(){
        console.log(boton.value + " se ha pulsado dos veces");
    })
});
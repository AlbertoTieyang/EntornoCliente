
const botones = document.querySelectorAll("input");
botones.forEach(boton => {
    boton.addEventListener("click", function() {
        console.log(boton.value);
    })
});
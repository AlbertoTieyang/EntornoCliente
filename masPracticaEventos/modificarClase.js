let eliminar = document.getElementById("eliminar")
let añadir = document.getElementById("añadir")

eliminar.addEventListener("click", function() {
    añadir.classList.remove("fondo")
})

añadir.addEventListener("click", function() {
    añadir.classList = "fondo"
})
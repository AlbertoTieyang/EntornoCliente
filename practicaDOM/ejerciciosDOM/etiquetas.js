let palabra = prompt("Introduce la etiqueta que quieres buscar");
const contador = document.getElementsByTagName(palabra);
for (let item of contador) {
    console.log(item);
}
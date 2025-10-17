let nombres = ["alberto", "gomez", "palacios"];
let pedido = prompt("introduce un nombre a buscar");
if (nombres.includes(pedido)) {
    alert("El nombre si que está");
}else {
    alert("El nombre no se encuentra en el array");
}
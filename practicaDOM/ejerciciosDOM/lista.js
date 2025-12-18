let producto = prompt("escribe el producto que se quiere añadir");
let posicion;
do {
    posicion = prompt("Escribe principio o final dependiendo del lugar al que se quiere añadir");
}while (posicion != "final" || posicion != "inicio")
let poner = document.createElement("li");
poner.textContent = producto;
    if (posicion == "final") {
        listaCompra.prepend(li);
    }else if (posicion == "inicio") {
        listaCompra.append(li);
    }
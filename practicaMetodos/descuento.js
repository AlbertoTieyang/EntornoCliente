let descuento = Number(prompt("Introduce el descuento"));
const precios = [20, 45, 10, 30];
let rebaja = descuento * 0.01

for (let i = 0; i < precios.length; i++) {
    precios[i] = precios[i] - (precios[i]*rebaja);
}

alert(precios);
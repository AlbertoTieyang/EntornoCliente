let numero = Number(prompt("Introduce un número de 4 dígitos para ver si es un número mágico"));


let ultimaCifra = numero%10; // resto del numero entre 10

let penultimaCifra = numero%100 //resto de la división entre 100
penultimaCifra = penultimaCifra * 0.1; // Lo multiplico por 0.1 para tener la segunda cifra
penultimaCifra = penultimaCifra.toFixed(0); // Hago que no se enseñen decimales


let segundaCifra = numero * 0.01; // divido el número entre 100
segundaCifra = segundaCifra%10 //hago su resto
segundaCifra = segundaCifra.toFixed(0) //le quito los decimales 

let primeraCifra = numero * 0.001; // hago que el primer número se quede solo en la parte entera
primeraCifra = primeraCifra.toFixed(0) // le quito los decimales 

let suma = primeraCifra + ultimaCifra;
let medio = segundaCifra + penultimaCifra;
alert(primeraCifra);
alert(segundaCifra);
alert(penultimaCifra);
alert(ultimaCifra);
if (suma = medio) {
    alert("El número es mágico");
}else {
    alert("El número no es mágico");
}
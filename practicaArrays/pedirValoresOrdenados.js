let tamaño = Number(prompt("¿Cuántos número desea introducir?"));
const numeros= [];
let aux;
const numerosOrdenados = [];
for (let i = 0; i < tamaño; i++ ) {
    numeros[i] = Number(prompt("Introduce el número " + i));
}
for (let i = 0; i < tamaño; i++) {
    for (let j = 0; j < i; j++) {
        if (numeros[i] < numeros[j]) {
            aux = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = aux;   
        }
    }
}
alert(numeros);



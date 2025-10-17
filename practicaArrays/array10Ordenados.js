const numeros= [10, 5, 89, 11, 32, 1, 42, 43, 9, 21];
let aux;
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        if (numeros[i] < numeros[j]) {
            aux = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = aux;   
        }
    }
}
alert(numeros);

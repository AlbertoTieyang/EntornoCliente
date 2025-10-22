let numero1; 
let numero2;
let numero3;
const conjunto1 = new Set([1, 2, 3, 4, 5]);
const conjunto2 = new Set([6, 7, 8, 9, 1]);
const conjunto3 = new Set([10, 2, 3, 4, 5,]);

const duplicados = new Set();
const noDuplicados = new Set();
/* do {

    numero1 = Number(prompt("Introduce un numero para el conjunto 1. 0 para finalizar "));
    conjunto1.add(numero1);

}while (numero1 != 0)  

do {

    numero2 = Number(prompt("Introduce un numero para el conjunto 2. 0 para finalizar "));
    conjunto2.add(numero2);

}while (numero2 != 0)  

do {

    numero3 = Number(prompt("Introduce un numero para el conjunto 3. 0 para finalizar "));
    conjunto3.add(numero3);

}while (numero3 != 0)   */

for (const numero of conjunto1) {
    if (conjunto2.has(numero)) {
        duplicados.add(numero);
    }else if (conjunto3.has(numero)) {
        duplicados.add(numero);
    }else {
        noDuplicados.add(numero);
    }
}

for(const numero of conjunto2) {
    if (conjunto3.has(numero)) {
        duplicados.add(numero);
    }else {
        noDuplicados.add(numero);
    }
}

for (const numero of duplicados) {
    if (noDuplicados.has(numero)) {
        noDuplicados.delete(numero);
    }
}

console.log(noDuplicados);
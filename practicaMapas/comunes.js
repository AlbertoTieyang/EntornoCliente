const setA = new Set([1,2,3,4]);
const setB = new Set([3,4,5,6]);

const numeroComprobar = [];
for (const numero of setA) {
    numeroComprobar.push(numero);
}

const comunes = numeroComprobar.filter(numero => setB.has(numero));
console.log(comunes)
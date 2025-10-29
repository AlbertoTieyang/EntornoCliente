const array = [3, 8, 2, 1];
const invertido = [];
for (let i = 0; i < array.length; i++) {
    invertido.unshift(array[i]);
}

console.log(invertido);
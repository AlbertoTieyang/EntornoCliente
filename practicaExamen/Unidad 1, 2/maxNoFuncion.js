const array = [2, 9, 8, 1];
let max = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
    }
}
console.log(max);
const numeros = [1, 2, 3, 7, 8]
function sumar (array) {
if (array.length == 0) return 0;
return array[0]+sumar(array.slice(1));
}

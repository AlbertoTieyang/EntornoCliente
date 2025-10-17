let suma = 0;
let media = 0;

let number = Number(prompt("Introduce la cantidad de número que se desea introducir: "));

for (let i = 0; i < number; i++) {
    let n = Number(prompt("Introduce el número"));
    suma += n;
}
media = suma / number;
alert("La media es " + media);
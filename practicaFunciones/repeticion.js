const numeros = [];
let numero;
let buscar;
let veces;

do{
    numero = Number(prompt("Introduce un número, si quiere salir escriba 0"));
    numeros.push(numero);
}while (numero != 0);

buscar = Number(prompt("Introduce el número que se quiere buscar"));
for (let i = 0; i < numeros.length; i++) {
    if (numeros.includes(buscar)) {
        veces++;
    }
}
if (veces == 0) {
    alert("El número " + buscar + " no se encuentra en el array");
}else {
    alert("El número " + buscar + " se encuentra en el array " + veces + " veces");
}
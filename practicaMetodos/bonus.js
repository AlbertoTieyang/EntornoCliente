const numeros = [];
let numero;

do{
    numero = Number(prompt("Introduce un número, si quiere salir escriba 0"));
    numeros.push(numero);
}while (numero != 0);

const ordenados = numeros.sort(function(a, b){return a-b});
alert("La longitud del array es " + (numeros.length - 1) + " y son " + ordenados + ", ") ;
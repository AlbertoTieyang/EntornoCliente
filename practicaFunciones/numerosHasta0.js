const numeros = [];
let numero;

do{

    numero = Number(prompt("Introduce un número, si quiere salir escriba 0"));
    numeros.push(numero);

}while (numero != 0);

alert("La longitud del array es " + (numeros.length - 1));
const numeros = [15];
let numero;
let temporal;
do{

    numero = Number(prompt("Introduce un número, si quiere salir escriba 0"));
    numeros.push(numero);

}while (numero != 0);

if (numeros.includes(5)) {
    alert("El array si incluye un 5");
}else {
    alert("El array no incluye un 5");
}

let numero;
let suma = 0;
do  {
    numero = Number(prompt("Introduce el número para decir si es perfecto"));
}while ((numero < 0 ));
for (let i = 1; i < numero; i++) {
    if (numero%i == 0) {
        suma += i;
    }
}
if (suma == numero) {
    console.log("el número " + numero + " si es perfecto");
}else {
    console.log("el número " + numero + " no es perfecto")
}
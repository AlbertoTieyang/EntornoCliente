// 1. 
alert("Ejercicio 1");
const numeros = [1, 8, 9, 10, 20, 30, 9, 11];
const noRepetidos = [];
for (let i = 0; i < numeros.length; i++) {
    noRepetidos.push(numeros[i]);
    for (let j = 0; j < i; j++) {
        if (noRepetidos[i] == numeros[j]) {
            noRepetidos.pop(numeros[j]);
        }
    }
}
alert("la lista con repetidos es " +numeros + " y la lista limpia es: " +noRepetidos);

// 2. 
alert("Ejercicio 2");
 const introducidos = [];
let introducido = 0;
do {
    introducido = Number(prompt("Introduce un número entero y positivo. 0 para finalizar"))
    introducidos.push(introducido);
}while (introducido != 0);
let suma = 0;
for (let i = 0; i < introducidos.length; i++) {
    if (introducidos[i]%2 == 0) {
        suma += introducidos[i];
    }
}
alert("la suma de los números pares es: " + suma);

// 3.
alert("Ejercicio 3");
let numero = Number(prompt("introduce un número para ver su tabla de multiplicar"));
const tabla = [];
for (let i = 1; i < 11; i++) {
    tabla.push(numero*i);
}
alert(tabla); 

// 4.
alert("Ejercicio 4");
let factorial; 
let sumaFactorial = 1;
do {
    factorial =  Number(prompt("introduce un número para hacer su factorial"));
    if (factorial <= 0) {
    alert("no se puede hacer el facorial de un número negativo o 0")
    }
}while (factorial <= 0);

for (let i = 1; i <= factorial; i++) {
    sumaFactorial *= i;
}
alert("El factorial de " + factorial + " es " + sumaFactorial);

//5. 
alert("Ejercicio 5");
let numeroTeclado = prompt("Introduce un numero entero y te digo cuantos dígitos tiene");
alert("El número " + numeroTeclado + " tiene " + numeroTeclado.length + " dígitos");
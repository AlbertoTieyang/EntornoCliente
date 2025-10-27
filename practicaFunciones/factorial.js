function factorial (numero) {
    let suma = 1;
    for (let i = 1; i <= numero; i++) {
        suma *= i;
    } 
    return suma;
}

console.log(factorial(10));
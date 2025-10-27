function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero%i == 0) {
            return false
        }
    }
    return true;
}

let primo = esPrimo(7);
if (primo) {
    console.log("es primo");
}else {
    console.log("no es primo");
}
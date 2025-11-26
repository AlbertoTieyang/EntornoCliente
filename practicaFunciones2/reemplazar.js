function reemplazar (frase) {
    const palabras = frase.split(' ');
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] == "perro") {
            palabras[i] = "gato";
        }
    }
    return palabras;
}

let frase = "el perro come un hueso";
console.log(reemplazar(frase));
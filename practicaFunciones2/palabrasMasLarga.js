function buscarPalabraMasLarga (palabra) {
    const palabras = palabra.split(' ');
    let larga = palabras[0];
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > larga.length ) {
            larga = palabras[i];
        }
    }
    console.log(larga);
    return larga;
}

let frase = "Uno dos tres PalabraLarga";
buscarPalabraMasLarga(frase);

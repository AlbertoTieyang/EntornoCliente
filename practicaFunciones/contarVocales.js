function contarVocales (palabra) {
    let contadorA = 0;
    let contadorE = 0;
    let contadorI = 0;
    let contadorO = 0;
    let contadorU = 0;
    let letras = palabra.split('');
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] == "a" || letras[i] == "A") {
            contadorA++;
        }else if (letras[i] == "e" || letras[i] == "E") {
            contadorE++;
        }else if (letras[i] == "i" || letras[i] == "I") {
            contadorI++;
        }else if (letras[i] == "o" || letras[i] == "O") {
            contadorO++;
        }else if (letras[i] == "u" || letras[i] == "U") {
            contadorU++;
        }
    }

    console.log("Hay " + contadorA + " a, " + contadorE + " e, " + contadorI + " i, " + contadorO + " o y " + contadorU + " u" );
}

let prueba = (contarVocales("hola"));
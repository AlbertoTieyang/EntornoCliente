function contarPalindromos(palabras) {
    const palindromos = [];
    for (let i = 0; i < palabras.length; i++) {
        const letras = palabras[i].split('');
        const letraInvertidas = letras.reverse();
        const palabraInvertida = letraInvertidas.join('');
        if (palabraInvertida === palabras[i]) {
            palindromos.push(palabras[i]);
        }
    }
    return palindromos;
}

const palabras = ["oso", "agua", "ana", "perro", "reconocer"];
const palabrasPrueba = contarPalindromos(palabras);
console.log(palabrasPrueba);

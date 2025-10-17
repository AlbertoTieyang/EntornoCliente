const notas = [0.1, 9.7, 5.4, 4.9, 7.9, 2.8];
const aprobados = [];
let veces = 0;
let mediaTotal = 0;
let mediaAprobados = 0;
for (let i = 0; i < notas.length; i++){
    if (notas[i] > 4.9) {
        aprobados[veces] = notas[i];
        mediaAprobados += aprobados[veces];
        veces++;
    }
    mediaTotal += notas[i];
}
mediaTotal = mediaTotal/notas.length;
mediaAprobados = mediaAprobados/aprobados.length;

alert("La media general es de: " + mediaTotal + " y la media de aprobados es de: " + mediaAprobados);
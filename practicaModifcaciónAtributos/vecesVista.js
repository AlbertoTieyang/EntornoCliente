// nombre de la cookie que se quiere crear
let visitas = "visitas";

// pillo todas las cookies y las meto en un array, dividido por ;
let cookies = document.cookie.split("; ");
// inicializo el contador
let contador = 0;
// inicio un bucle para buscar la cookie que quiero, con el primer split, separa cada cookie
for (let i = 0; i < cookies.length; i++) {
    // con este split, separo el nombre y valor de cada cookie
    let parts = cookies[i].split("=");
    if (parts[0] === visitas) { // tengo el nombre de la cookie
        contador = parts[1]; // el valor de la cookie
        break;
    }
}

contador++;
alert("Esta es tu visita número " + contador);
document.cookie = visitas + "=" + contador + "; max-age=" + (60 * 60 * 24 * 30);
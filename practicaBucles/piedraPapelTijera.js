
let usuario;
let respuesta;

function getRamdonInt(max) {
    return Math.floor(Math.random() * max);

}

do{
    let eleccion = getRamdonInt(2);
    console.log(eleccion);
    usuario = prompt("Elige: piedra/papel/tijera");
    if (eleccion == 0) {
         // piedra 
        if (usuario == "piedra") {
            respuesta = prompt("Has empatado contra piedra. ¿Jugar de nuevo? (si/no)" );
        }else if (usuario == "papel") {
            respuesta = prompt("Has perdido contra piedra. ¿Jugar de nuevo? (si/no)" );
        }else if (usuario == "tijera") {
            respuesta = prompt("Has ganado contra piedra. ¿Jugar de nuevo? (si/no)" );
        }else {
            alert("Eleccion no válida, elige piedra/papel/tijera");
        }
    }else if (eleccion == 1) {
        //papel
        if (usuario == "piedra") {
            respuesta = prompt("Has perdido contra papel. ¿Jugar de nuevo? (si/no)" );
        }else if (usuario == "papel") {
            respuesta = prompt("Has empatado contra papel. ¿Jugar de nuevo? (si/no)" );
        }else if (usuario == "tijera") {
            respuesta = prompt("Has ganado contra papel. ¿Jugar de nuevo? (si/no)" );
        }else {
            alert("Eleccion no válida, elige piedra/papel/tijera");
        }
    }else {
        //tijera
        if (usuario == "piedra") {
            respuesta = prompt("Has ganado contra tijera. ¿Jugar de nuevo? (si/no)" );
        }else if (usuario == "papel") {
            respuesta = prompt("Has perdido contra tijera. ¿Jugar de nuevo? (si/no)" );
        }else if (usuario == "tijera") {
            respuesta = prompt("Has empatado contra tijera. ¿Jugar de nuevo? (si/no)" );
        }else {
            alert("Eleccion no válida, elige piedra/papel/tijera");
        }
    }
}while(respuesta != "no");
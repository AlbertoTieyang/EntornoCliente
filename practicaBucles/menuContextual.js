let respuesta;
do {
    respuesta = prompt("Elige una opción: Continuar/Salir");
    if (respuesta == "continuar") {
        alert("Continuando");
    }
    else if (respuesta != "contiuar" && respuesta != "salir") {
        alert("Opcion no válida");
    }

}while (respuesta != "salir");
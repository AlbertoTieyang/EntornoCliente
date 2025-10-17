let respuesta;
do {
    let nombre = prompt("¿Cómo te llamas?");
    console.log("El/la usuario/a se llama " + nombre);
    respuesta = prompt("¿Quieres continuar? (si/no)");
    if(respuesta == "si") {
        let estudio = prompt("¿Qué estás estudiando?");
        estudio = prompt("¿Por qué estás estudiando " + estudio + "?");
        console.log("El usuario/a " + nombre + " está estudiando " + estudio);
        respuesta = prompt("Qué interesante. ¿Quieres continuar? (si/no)");
        if(respuesta == "si") {
            let deporte = prompt("¿Juegas algún deporte? (si/no)");
            if (deporte == "no") {
                deporte = prompt("Alguna vez pensaste en hacer alguno? (si/no)");
                    if(deporte == "no") {
                        alert("Está bien. Se han acabado las preguntas");
                        respuesta = "no";
                    }
            }else  {
                deporte = prompt("¿Cuál?");
                alert("Muy buen deporte. Se han acabado las preguntas. Adiós");
                respuesta = "no";
            }
        } else {
            alert("Adios");
            respuesta = "no";
        }
    }else {
        alert("Adiós");
        respuesta = "no";
    }
}while (respuesta != "no");
let origen = prompt("Introduce la unidad: hora, segundo, minuto");
let destino = prompt("Introduce la unidad a la que quiere convertir");

if (origen == "hora") {
    let hora = Number(prompt("introduce la hora en horas"));
    if (destino == "hora"){
        alert("La hora ya está en horas");
    }else if (destino == "dias") {
        if(hora < 24) {
            alert("no es suficiente tiempo para un día")
        }else {
            hora = Math.floor(hora/24);
        }
        
    }else if (destino == "minuto") {
        hora = hora*60;
        alert(hora + " horas son " + hora + " en minutos");
    }else if (destino == "segundo") {
        hora = hora*60*60;
        alert(hora + " horas son " + hora + " en segundos");
    }
}else if (origen == "minuto") {
    let hora = Number(prompt("introduce la hora en minutos"));
    if (destino == "día") {
        if (hora < 60 ) {
            alert ("no son suficientes minutos para completar una hora");
        }else {
            hora = Math.floor(hora/60);
            if (hora < 24) {
                alert("no son sufientes minutos para un completar un día");
            }
        }
    }else if (destino == "hora" ) {
        if (hora < 60) {
            alert("no son sufientes minutos para hacer una hora");
        }else {
            
        }
    }
}
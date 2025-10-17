let nombre1 = prompt("Introduce un nombre");
let nombre2 = prompt("Introduce otro nombre");
let nombre3 = prompt("Introduce el último nombre");

if(nombre1 == nombre2) {
    alert("El nombre " + nombre1 + " se repite");
}else if (nombre2 == nombre3) { 
    alert("El nombre " + nombre2 + " se repite "); 
} else if ( nombre1 = nombre3 ){
    elert("El nombre " +nombre3+ "se repite");
}else if  (nombre1 == nombre2 == nombre3) {
    alert("Todos los nombre son iguales");
}else {
    alert("No se repite ningún nombre");
}

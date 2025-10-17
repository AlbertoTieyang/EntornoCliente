function getRamdonInt(max) {
    return Math.floor(Math.random() * max);

}

let number = getRamdonInt(100);
let introducido = Number(prompt("Introduce un número ")); 
do {
    if (number != introducido) {
        if (introducido < number){
            introducido = Number(prompt("El número es más grande"));
        }else {
            introducido = Number(prompt("El número es más bajo"));
        }
    }
}while (number != introducido);
alert("el número es " + number);
// Esto es un comentario hecho desde casa
// otro comentario
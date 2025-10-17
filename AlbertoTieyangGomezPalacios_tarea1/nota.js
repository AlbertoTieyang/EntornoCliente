let number = Number(prompt("Introduce tu nota"));
if (number >= 9) {
    alert("La nota es sobresaliente");
} else if (9<number<=7) {
    alert("La nota es notable");
} else if (7 < number <=6) {
    alert("La nota es bien");
} else if (number == 5) {
    alert("La nota es suficiente");
}else {
    alert("La nota es insuficiente");
}
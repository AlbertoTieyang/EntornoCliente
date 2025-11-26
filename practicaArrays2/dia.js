let fecha = new Date();
let dia = fecha.getDay();
const mes = fecha.toLocaleDateString('es-ES', { month: 'long' });
let diaMes = fecha.getDate();
let anyo = fecha.getFullYear();
switch (dia) {
    case 1:
        dia = "lunes";
        break;
    case 2:
        dia = "martes";
        break;
    case 3:
        dia = "miercoles";
        break;

    case 4:
        dia = "jueves";
        break;

    case 5:
        dia = "viernes";
        break;

    case 6:
        dia = "sabado";
        break;

    case 7:
        dia = "domingo";
        break;


}

console.log("Buenos días, hoy es " + dia + " " +diaMes + " de " + mes + " de " + anyo + ".");
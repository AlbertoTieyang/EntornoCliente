function calcularSemana () {
    let anyo = 2006;
    let mes = 6;
    let dia = 20;
    const fecha = new Date();
    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábaod", "Domingo"];

    var year = fecha.getFullYear() - anyo;
    var n1 = Math.trunc((13*(mes + 1))/5);
    var n2 = Math.trunc(anyo % 1000);
    var n3 = Math.trunc(anyo/1000);

    let day1 = Math.trunc(dia + n1 + n2 + (n2/4) + (n3/4) + 5 * n3);
    let day2 = Math.trunc(day1%7);
    const diaSemana = dias[day2];
}
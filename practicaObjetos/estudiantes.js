class Estudiante {
    constructor(nombre, nota) {
        this.nombre = nombre;
        this.nota = nota;
    }

    media () {
        let suma = 0;
        for (let i = 0; i < this.nota.length ; i++ ) {
            suma += this.nota[i];
        }
        let media = suma/this.nota.length;
        console.log(media);
    }
}
estudiante1 = new Estudiante("alberto", [7, 8, 9]);
estudiante1.media();
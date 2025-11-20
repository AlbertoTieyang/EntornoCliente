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
        return media;
    }

    aprobado (...estudiante) {
        const aprobados = [];
        for (let i = 0; i < estudiante.length; i++) {
            let nota = estudiante[i].media();
            if (nota >= 5) {
                aprobados.push(estudiante[i]);
            }
        }
        console.log(aprobados);
        return aprobados;
    }

    buscarPorNombre (nombre, ...estudiante) {
        let persona;
        for (let i = 0; i < estudiante.length; i++) {
            if (estudiante[i].nombre == nombre) {
                persona = estudiante[i];
            }
        }
        console.log(persona);
        return persona;
    }

    actualizarNota (nombre, nuevaNota) {
        let persona = this.buscarPorNombre(nombre);
        persona.nota = nuevaNota;
    }
}
let estudiante1 = new Estudiante("alberto", [7, 8, 9]);
let estudiante2 = new Estudiante("gomez", [3,4,2]);
let estudiante3 = new Estudiante("palacios", [3,4,2]);
let grupo = new Estudiante();
estudiante1.media();
grupo.aprobado(estudiante1, estudiante2, estudiante3);
grupo.buscarPorNombre("alberto", [estudiante1, estudiante2, estudiante3]);

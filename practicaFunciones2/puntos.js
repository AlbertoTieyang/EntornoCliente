class Punto {
    constructor (ejeX, ejeY) {
        this.ejeX = ejeX;
        this.ejeY = ejeY;
    }
}

function distancia (puntoA, puntoB) {
    let distancia = Math.sqrt((((puntoB.ejeX - puntoA.ejeX)**2) +((puntoB.ejeY - puntoA.ejeY)**2)));
    console.log(distancia);
    return distancia;
}

const puntoA = new Punto(4, 6);
const puntoB = new Punto(1, 2);

distancia(puntoA, puntoB);
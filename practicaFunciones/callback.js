function callbackPrueba (numero, callback) {
    if (numero > 10) {
        callback();
    }else {
        console.log("no tienes más de 10 años");
    }
}

function saludar() {
    console.log("hola, tienes más de 10 años");
}

let comprobar = callbackPrueba(9, saludar);
console.log(comprobar);
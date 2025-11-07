
function suma (...numero) {
    let sumatorio = 0;
    for (let i = 0; i < numero.length; i++) {
     sumatorio += numero[i];
    }
    return sumatorio;
}

let sumaPrueba = suma(1,2,3,4,5);
console.log(sumaPrueba);
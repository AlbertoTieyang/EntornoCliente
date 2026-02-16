const numero = prompt("introduce un numero")

const promesa = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        resolve("han pasado " + numero);
    }, numero * 1000);
})

promesa.then ((resultado) => {
    alert(resultado);
}).catch((error) => {
    console.log("no se ha hecho");
})

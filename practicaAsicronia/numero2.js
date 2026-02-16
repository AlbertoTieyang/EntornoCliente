function doblarNumero(numero) {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> {
            resolve("el numero" + numero + " multiplicado por dos da " + numero*2);
        }, 1);
    });
}

doblarNumero(2).then((result) => {
    alert(result);
}).catch((error)=> {
    alert("fallo");
});
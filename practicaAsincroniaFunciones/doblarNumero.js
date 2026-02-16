function doblar(numero) {
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            if (numero < 0) {
                reject("introduce solo numeros positivos");
            }else {
                resolve(numero*2); 
            }
        }, 1000);
    });
}

async function run() {
    let resultado = await doblar(5);
    resultado = await doblar(resultado);
    console.log(resultado);
}

run();
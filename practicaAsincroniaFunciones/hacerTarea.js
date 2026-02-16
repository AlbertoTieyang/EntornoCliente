function hacerTarea() {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Tarea completada`),1 * 1000);
    });
}

async function run() {
    let mensaje = await
    hacerTarea();
    console.log(mensaje);
}

run();
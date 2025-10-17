const listaCompra = ["pan", "mantequilla", "leche", "champú"];
let opcion;
do {
    opcion = Number(prompt("1. Añadir a artículo, 2. Eliminar artículo, 3. Eliminar todo, 4. Enseñar lista, 5. salir"));
    if (opcion == 1) {
        let nuevo = prompt("Introduce el nombre del artículo que se va a añadir");
        if (listaCompra.includes(nuevo)) {
            alert("el artículo ya está en la lista de compra");
        }else {
            let donde = Number(prompt("1. si lo quiere añadir al principio, 2. si lo quiere añadir al final"));
            if (donde == 1) {
                listaCompra.unshift(nuevo);
                listaCompra.forEach(artiuculo => {
                console.log(artiuculo);
            });
            }else if (donde == 2) {
                listaCompra.push(nuevo);
                listaCompra.forEach(artiuculo => {
                console.log(artiuculo);
            });
            }
            
        }

    }else if(opcion == 2) {
        let elimina = prompt("Introduce el artículo que se quiere eliminar");
        if (listaCompra.includes(elimina)) {
            const index = listaCompra.indexOf(elimina);
            listaCompra.splice(index, 1);
            console.log("Artículo eliminado correctamente");   
        }else {
            alert("El artículo no está en la lista")
            listaCompra.forEach(artiuculo => {
                console.log(artiuculo);
            });
        }

    }else if (opcion == 3) {
        for(let i = 0; i < listaCompra.length; i++) {
            listaCompra.shift();
        }
        alert("la lista se ha vaciado");
        listaCompra.forEach (artiuculo => {
            console.log(artiuculo);
        });

    }else if (opcion == 4) {
        listaCompra.forEach (artiuculo => {
            console.log(artiuculo);
        });

    }else if (opcion == 5) {
        alert("Saliendo");

    }else {
        alert("No es una opcion válida");
    }
}while (opcion != 5);
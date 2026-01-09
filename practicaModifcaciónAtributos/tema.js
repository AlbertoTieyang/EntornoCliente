let nombre = prompt("Introduce el nombre de usuario");
let body = document.querySelector("body");
let p = document.querySelectorAll("p");

let valor = localStorage.getItem(nombre);


if (!valor) {
    let tema = prompt("¿Quieres poner el tema en oscuro? (Si/No)");

    if (tema === "Si") {
        localStorage.setItem(nombre, "oscuro");
        body.className = "oscuro";
        p.forEach(element => {
            element.className = "blanco";
        });

    } else {
        localStorage.setItem(nombre, "claro");
        body.className = "claro";
        p.forEach(element => {
            element.className = "negro";
        });

    }
}

else {
    if (valor === "oscuro") {
        body.className = "oscuro";
        p.forEach(element => {
            element.className = "blanco";
        });

    } else {
        body.className = "claro";
        p.forEach(element => {
            element.className = "negro";
        });

    }

    let tema = prompt("¿Mantener tema? (Si/No)");

    if (tema === "No") {
        if (valor === "claro") {
            localStorage.setItem(nombre, "oscuro");
            body.className = "oscuro";
            p.forEach(element => {
                element.className = "blanco";
            });
            
        } else {
            localStorage.setItem(nombre, "claro");
            body.className = "claro";
            p.forEach(element => {
                element.className = "negro";
            });

        }
    }
}


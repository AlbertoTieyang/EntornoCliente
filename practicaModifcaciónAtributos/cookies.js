let nombre = prompt("Introduce el nombre de usuario");
let body = document.querySelector("body");
let p = document.querySelectorAll("p");

let cookies = document.cookie.split("; ");
let valor = null;
for (let i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split("=");
    if (parts[0] === nombre) {
        valor = parts[1];
        break;
    }
}

if (!valor) {
    let tema = prompt("¿Quieres poner el tema en oscuro? (Si/No)");
    if (tema === "Si") {
        document.cookie = nombre + "=oscuro; max-age=" + 60*60*24*365;
        body.className = "oscuro";
        p.forEach(element => {
            element.className = "blanco";
        });
    } else {
        document.cookie = nombre + "=claro; max-age=" + 60*60*24*365;
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
            document.cookie = nombre + "=oscuro; max-age=" + 60*60*24*365;
            body.className = "oscuro";
            p.forEach(element => {
                element.className = "blanco";
            });
        } else {
            document.cookie = nombre + "=claro; max-age=" + 60*60*24*365;
            body.className = "claro";
            p.forEach(element => {
                element.className = "negro";
            });
        }
    }
}

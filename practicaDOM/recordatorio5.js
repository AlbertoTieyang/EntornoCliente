
let segundos = setInterval(() => {
        let seguir = confirm("¿continuar?");
        alert("5 segundos");

        if (!seguir) {
            clearInterval(segundos);
        }
}, 5000);


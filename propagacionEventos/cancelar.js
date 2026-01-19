const padre = document.getElementById('padre');
const hijo = document.getElementById('hijo');
const enlace = document.getElementById('enlace');

let primeraVez = true;

padre.addEventListener('click', () => {
    alert('Padre clicado');
});

hijo.addEventListener('click', () => {
    alert('Hijo clicado');
});

enlace.addEventListener('click', function (event) {
    if (!primeraVez) {
        event.preventDefault();
        event.stopPropagation();
        enlace.textContent = "La redirección ha sido cancelada";
        enlace.style.color = "red";
        alert("Redirección cancelada");
    } else {
        primeraVez = false;
    }
});

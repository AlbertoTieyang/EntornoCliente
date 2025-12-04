let usuario = localStorage.getItem("usuario");
if (!usuario) {
    usuario = prompt("como te llamas?");
    if (usuario) {
        localStorage.setItem("usuario", usuario);
    }else {
        usuario = "invitado";
    }
}
alert(`¡Hola, ${usuario}!`);
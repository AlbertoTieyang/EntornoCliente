const registrados = [];
const iniciados = ["alberto", "gomez"];
const contrasenaInicio = [];
const contrasenaRegistro = [];
const contrasenaTotal = [];
let correo;

do{
    let menu = Number(prompt("Escriba 1 si quiere iniciar sesión, escriba 2 si quiere registrase y escriba 3 si quiere salir"));
    if (menu == 1) {
        correo = prompt("Introduce tu correo: ");
        contrasenaInicio = prompt("Introduce tu constreña: ");
        iniciados.push(correo);
    }else if (menu == 2) {
        correo = prompt("Introduce tu correo: ");
        for (let i = 0; i < iniciados.length; i++) {
            if (iniciados[i] == correo) {
                alert("el correo ya está registrado");
            } 
        }
        contrasenaRegistro = prompt("Introduce tu contraseña: ");
        registrados.push(correo);
    }
    
}while (menu != 3);

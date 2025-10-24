const correos = new Map([
    ["alberto@gmail.com", "alberto"],
    ["gomez@gmail.com", "gomez"]
])

let opcion;
do {
    opcion = Number(prompt("1. Inicia sesion, 2. registrase, 3. Salir"));
    if (opcion == 1) {
        let correo = prompt("Introduce el correo");
        let contrasena = prompt("Introduce la contraseña");
        if (correos.has(correo)) {
            let contrasenaVerificar = correos.get(correo)
            if (contrasenaVerificar == contrasena) {
                alert("se ha iniciado sesion correctamente");
            }else {
                alert("el correo o la contraseña está mal");
            }
        }else {
            alert("el correo o la contraseña está mal");
        }
    } else if (opcion == 2) {
        let correo = prompt("Introduce el correo a registrar");
        let contrasena = prompt("Introduce la contraseña");
        if (correos.has(correo)) {
            alert("El correo ya está registrado");
        }else {
            correos.set(correo, contrasena);
            alert("el correo se ha registrado")
        }
    } else if (opcion == 3) {
        alert("saliendo");
    } else {
        alert("No es una opción, inserte otro número")
    }
}while (opcion != 3)

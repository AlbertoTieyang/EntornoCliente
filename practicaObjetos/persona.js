class Persona {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    //Ejercicio 2
    saludar() {
        console.log('hola, soy '  + this.nombre)
        
    }

    cumpleAno() {
        return console.log(this.edad += 1);
    }
    //Fin de ejercicio 2
    
}
const persona = new Persona ("alberto", 19, "Madrid");
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ciudad);

persona.edad = 20;

console.log(persona["nombre"]);
console.log(persona["edad"]);
console.log(persona["ciudad"]);

persona.saludar();
persona.cumpleAno();

//Ejercicio 3
console.log(persona);
delete persona.ciudad;
console.log(persona);


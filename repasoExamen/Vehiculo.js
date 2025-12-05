class Vehiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descripcion() {
        let texto = "El vehículo es de la marca " + this.modelo 
        + ", modelo " + this.modelo + " y lanzado en el año " + this.ano;
        return texto;
    }

    edad() {
        const anyo = new Date();
        let edad = anyo.getFullYear() - this.ano;
        return edad;
    }
}
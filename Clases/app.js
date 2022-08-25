class Usuario {
    constructor(nombre = "", apellido = "", libros = [{}], mascotas = [""]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(String) {
        this.mascotas.push(String);
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombre = "", autor = "") {
        this.libros.push({ nombre: nombre, autor: autor });
    }
    getBookNames() {
        return this.libros.map(e => e.nombre);
    }
}

let User = new Usuario("Alon", "Mag", [{ nombre: "El mundo de Sofia", autor: "Jostein Gaarden" }], ["pepa", "pupi"]);

console.log(User.getFullName());
User.addMascota("lola");
console.log(User.countMascotas());
User.addBook("El mundo como yo lo veo", "Albert Einstein");
console.log(User.getBookNames());
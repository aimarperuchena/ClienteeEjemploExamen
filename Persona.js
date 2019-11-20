class Persona {
    constructor(nombre, apellido, edad, subnormal) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

    }

    setNombre(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    setApellido(apellido) {
        this.apellido = apellido;
    }
    getApellido() {
        return this.apellido;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getEdad() {
        return this.edad;
    }


    getAnosVida() {
        return 100 - edad;
    }
}
export { Persona };
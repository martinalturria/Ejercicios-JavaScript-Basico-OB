class Estudiante {
    constructor(nombre){
        this.nombre = nombre;
        this.asignaturas = ['JavaScript', 'HTML', 'CSS'];
    }

    obtenDatos(){
        return {nombre: this.nombre, asignaturas: this.asignaturas};
    }
}

const estudiante = new Estudiante('Martin');

console.log(estudiante.obtenDatos());
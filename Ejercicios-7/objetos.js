const datosPersonales = {
    nombre: 'Martin',
    apellido: 'Alturria',
    edad: 35,
    altura: 1.75,
    eresDesarrollador: true
}

let edad = datosPersonales.edad;

const listaAmigos = [{ ...datosPersonales,},
    {nombre: 'Maria',
    apellido: 'Maidana',
    edad: 31,
    altura: 1.60,
    eresDesarrollador: false,},
    {nombre: 'Jesica',
    apellido: 'Bogino',
    edad: 35,
    altura: 1.70,
    eresDesarrollador: false
}];

const listaOrdenada = listaAmigos.sort((a, b) => b.edad - a.edad)
const listaCompras = ['leche', 'shampoo', 'jabon', 'coca', 'galletitas'];
listaCompras.push('Aceite de Girasol');
listaCompras.pop();

const pelisFavoritas = [
    {titulo: "Gladiador", director: "Martin", fecha: 1987},
    {titulo: "Rapido y Furioso 10", director: "Marcos", fecha: 2023},
    {titulo: "Locura de Amor en las Vegas", director: "Jorge", fecha: 2007}
];

const listaNuevasPelis = pelisFavoritas.filter( peli => peli.fecha >= 2010);
const listaDirectores = pelisFavoritas.map( objeto => objeto.director);
const listaTitulos = pelisFavoritas.map(objeto => objeto.titulo);

const listaDirectoresTitulos = listaDirectores.concat(listaTitulos);
const listaDireTitu = [...listaDirectores, ...listaTitulos];



console.log(listaDireTitu);
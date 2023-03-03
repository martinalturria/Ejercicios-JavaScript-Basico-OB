const fechaHoy = new Date();
const fechaNacimiento = new Date(1987, 11, 15);
const comparaFechas = fechaHoy > fechaNacimiento;

const diaNacimiento = fechaNacimiento.getDate();
const mesNacimiento = fechaNacimiento.getMonth() + 1;
const añoNacimiento = fechaNacimiento.getFullYear();
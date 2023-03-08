const nombre = "Martin";
const apellido = "Alturria";

const objeto = {
    nombre,
    apellido
}

// sessionStorage.setItem("persona", JSON.stringify(objeto));
// localStorage.setItem("persona", JSON.stringify(objeto));

const now = new Date();

// document.cookie = `persona=${JSON.stringify(objeto)};expires=${new Date(now.getTime() + 2 * 60000)}`;

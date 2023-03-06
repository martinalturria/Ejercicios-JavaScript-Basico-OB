import * as log from "./logger/index.js";

function mostrarError() {
    throw new Error("Error personalizado dentro la funcion");
}

try {
    mostrarError();
} catch (e) {
    log.logger.error("error", e.toString());
}

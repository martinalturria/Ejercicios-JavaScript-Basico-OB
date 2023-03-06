const winston = require("winston");

const logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
});

function showError() {
    throw new Error("showError function");
}

function mostrarError() {
    throw new Error("Error personalizado dentro la funcion");
}

try {
    mostrarError();
} catch (e) {
    logger.error("error", e.toString());
}

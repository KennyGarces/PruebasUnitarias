//Funcion para validar un Email
function validarEmail(email) {
    const parametroValidacion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,6}$/;
    return parametroValidacion.test(email);
}

// Exporta la función para que pueda ser probada con Jest
module.exports = validarEmail;



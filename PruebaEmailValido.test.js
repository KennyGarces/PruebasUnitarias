//Kenny Garces
// Importa la función validarEmail que se desea probar.
const validarEmail = require('./validarEmail');

// Bloque de pruebas para el tema "Validar Email - Email válido".
describe('Validar Email - Email válido', () => {
    // Define una prueba dentro del bloque de pruebas con test().
    test('Devuelve true si el Email es válido', () => {
        // Establece un Email válido que cumple con el parametro.
        const emailValido = 'kenny.garces@unac.edu.co';
        
        // Utiliza la función expect() para crear una expectativa de lo que debería suceder.
        // Aquí se espera que la función validarEmail retorne true para el correo electrónico válido.
        expect(validarEmail(emailValido)).toBeTruthy();
    });
});

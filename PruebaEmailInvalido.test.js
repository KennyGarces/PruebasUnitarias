//Kenny Garces
// Importa la función validarEmail que se desea probar.
const validarEmail = require('./validarEmail');


//Bloque de pruebas para el tema "Validar Email - Email inválido".
describe('Validar Email - Email inválido', () => {
    // Define una prueba dentro del bloque de pruebas con test().
    test('Devuelve false si el Email no es válido', () => {
        // Establece un Email inválido que no cumple con el parametro.
        const emailInvalido = 'k.alejogmail.com';
        
        // Utiliza la función expect() para crear una expectativa de lo que debería suceder.
        // Aquí se espera que la función validarEmail retorne false para el correo electrónico inválido.
        expect(validarEmail(emailInvalido)).toBeFalsy();
    });
});

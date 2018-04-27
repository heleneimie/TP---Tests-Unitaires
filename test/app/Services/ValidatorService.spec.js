const assert = require('assert')

const ValidatorService = require('../../../app/Services/ValidatorService')

// Rédiger les tests en mockant les différentes méthodes de la classe Email
describe('ValidatorService', () => {

    describe('#validateEmail', () => {

        it("Doit retourner un email valide", () => {
            // Arrange
            const email_id = 1;

            // Mock de la fonction validateEmail
            const email = {
                validateEmail(param) {
                    assert.equal(param, email_id);

                    return [
                        'Email'
                    ]
                }
            };

            const validatorService = new ValidatorService(email);

            // Act
            const result = validatorService.validateEmail(email_id)

            // Assert
            assert.equal(result[0], 'Email');
        });
    });
});
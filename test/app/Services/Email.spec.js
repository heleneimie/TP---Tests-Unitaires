const assert = require('assert')

const Email = require('../../../app/Services/Email')

describe('Email', () => {

    describe('#mail', () => {

        let mailValidator;

        beforeEach(() => {
            mailValidator = new Email();
        });

        it('Vérifie le cas nominal (john.doe@test.com)', () => {

            // Arrange (définition du contexte)
            const email = 'john.doe@test.com';

            // Act (exécution de la méthode de l'application)
            const result = mailValidator.mail(email);

            // Assert (teste si le résultat est vrai)
            assert.equal(result, true);
        });

        it("Vérifie un jeu de données d'adresses emails invalides", () => {

            // Arrange
            const invalidEmails = [
                'john.doedomain.tld',
                'john.doe@domain',
                'john.doe@domain.t',
                '@domain.tld',
                'john@.tld',
                '@toto.fr'
            ];

            // Act
            invalidEmails.forEach(email => {
                const result = mailValidator.mail(email);

                // Assert
                assert.equal(result, false);

            });
        });
    });
});
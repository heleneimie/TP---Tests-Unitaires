const Email = require('./Email')

class ValidatorService {

    constructor(email) {
        this._email = email // = new Email()
    }

    /**
     * Doit retourner un email valide
     * @param email_id
     * @returns {Email}
     */
    validateEmail(email_id) {

        return this._email.validateEmail(email_id);
    }
}

module.exports = ValidatorService
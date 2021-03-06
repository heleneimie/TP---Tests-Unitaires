class Email {

    /**
     * Permet la validation d'une adresse email
     *
     * @param email
     * @returns {boolean}
     */
    mail(email) {
        return this._valid(email, /[a-z.]+@[a-z]+\.[a-z]{2,}/)
    }


    /**
     * Permet la validation d'une valeur par rapport une regex
     *
     * @param value
     * @param regex
     * @returns {*}
     * @private
     */
    _valid(value, regex) {
        return regex.test(value)
    }
}

module.exports = Email;

class Validator {
    isValidDate(date) {
        const regEx = new RegExp(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)
        return regEx.test(date)
    }

    isValidNumber(id) {
        const regEx = new RegExp(/^[0-9]*$/)
        return regEx.test(id)
    }
}

module.exports = new Validator()
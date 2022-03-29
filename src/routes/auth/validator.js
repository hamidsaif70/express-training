const expressValidator = require('express-validator')
const check = expressValidator.check

module.exports = new class {
    register(){
        return[
            check('email').isEmail()
                .withMessage('email in not valid'),
            check('password').not()
                .isEmpty()
                .withMessage('password cant be empty')
        ]
    }
    login(){
        return[
            check('email')
                .isEmail()
                .withMessage('email invalid'),
            check('password')
                .not().isEmpty()
                .withMessage('password is required')
        ]
    }
}
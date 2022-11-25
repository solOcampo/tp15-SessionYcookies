const {check} = require('express-validator')

module.exports = [
    check('name').trim()
    .notEmpty().withMessage('Debe ingresar su nombre'),

    check('color').notEmpty().withMessage('Debe seleccionar un color'),

    check('email').trim()
    .notEmpty().withMessage('Debe ingresar su email').bail()
    .isEmail().withMessage('Debe ingresar su email correctamente'),

    check('edad').trim()
    .notEmpty().withMessage('Debe ingresar su edad').bail()
    .isNumeric().withMessage('Solo se admiten numeros')
]
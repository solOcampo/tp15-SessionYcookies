const express = require('express')
const router = express.Router()

const { register, login, store, destroy } = require('../controllers/userController')
const registerValidator = require('../validations/registerValidation')

router.get('/register',register)
router.post('/register',registerValidator,store)

router.post('/user/destroy',destroy)

router.get('/login',login)


module.exports = router
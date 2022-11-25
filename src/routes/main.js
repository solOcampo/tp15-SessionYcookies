const express = require('express')
const router = express.Router()
const {home,about,languages} = require('../controllers/mainController')

router.get('/',home)

router.get('/languages/:id',languages)

router.get('/about',about)


module.exports = router
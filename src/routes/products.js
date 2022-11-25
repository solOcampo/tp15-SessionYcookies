const express = require('express')
const router = express.Router()
const {products,detail} = require('../controllers/productsController')

router.get('/',products)

router.get('/detail/:id',detail)


module.exports = router
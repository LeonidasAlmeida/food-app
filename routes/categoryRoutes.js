const express = require('express')
const { createCatController } = require('../controllers/categoryController')
const router  = express.Router()
//all routers

//PUT | CRETE CATEGORY
router.put('/create-category', createCatController)

module.exports = router
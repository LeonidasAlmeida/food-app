const express = require('express')
const { createCatController, getAllCategoryController } = require('../controllers/categoryController')
const router  = express.Router()
//all routers

//PUT | CRETE CATEGORY
router.put('/create-category', createCatController)
router.get('/get-all-category',getAllCategoryController)
module.exports = router
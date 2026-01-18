const express = require('express')
const { createCatController, getAllCategoryController, updateCategoryController, deleteCategoryController } = require('../controllers/categoryController')
const router  = express.Router()
//all routers

//PUT | CRETE CATEGORY
router.put('/create-category', createCatController)
//GET | GET ALL CATEGORIES
router.get('/get-all-category', getAllCategoryController)
//POST | UPDATE CATEGORIES
router.post('/update-category/:id', updateCategoryController)
//DELETE | DELETE CATEGORY
router.delete('/delete-category/:id', deleteCategoryController)
module.exports = router
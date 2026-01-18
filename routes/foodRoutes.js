const express = require('express')
const { createFoodController } = require('../controllers/foodController')
const router = express.Router()

router.post('/create-food', createFoodController)

module.exports = router
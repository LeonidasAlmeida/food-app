const express = require('express')
const { createFoodController, getAllFoodController,getFoodController, getFoodRestauranteController } = require('../controllers/foodController')
const router = express.Router()

//POST | CREATE FOOD
router.post('/create-food', createFoodController)
//GET | GET ALL FOODS
router.get('/get-all-foods',getAllFoodController)
//POST | POST one FOODS
router.post('/get-one-food/:id', getFoodController)
//POST | POST restaurante FOODS
router.post('/get-restaurante-food/:id', getFoodRestauranteController)
module.exports = router
const express = require('express')
const { createRestauranteController,getAllRestauranteController, getRestauranteByIdController } = require('../controllers/restaurantController')
const router = express.Router()

//POST | CREATE NEW RESTAURANTE
router.post('/new-restaurante', createRestauranteController)
//POST | get ALL REGISTER
router.get('/get-all', getAllRestauranteController)
//POST | get ONE REGISTER
router.post('/get-data/:id', getRestauranteByIdController)

module.exports = router
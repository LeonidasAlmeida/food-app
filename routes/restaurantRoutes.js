const express = require('express')
const { createRestauranteController,getAllRestauranteController, getRestauranteByIdController, deleteRestauranteController } = require('../controllers/restaurantController')
const router = express.Router()

//POST | CREATE NEW RESTAURANTE
router.post('/new-restaurante', createRestauranteController)
//POST | get ALL REGISTER
router.get('/get-all', getAllRestauranteController)
//POST | get ONE REGISTER
router.post('/get-data/:id', getRestauranteByIdController)
//DELETE | REMOVE RESTAURANTE
router.delete('/delete-restaurante/:id', deleteRestauranteController)

module.exports = router
const express = require('express')
const { getUserController, updateUserController } = require('../controllers/userController')
const router = express.Router()
router.get('/get-user', getUserController)
router.put('/update-user', updateUserController)
module.exports = router
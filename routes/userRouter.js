const express = require('express')
const { getUserController } = require('../controllers/userController')
const router = express.Router()
router.get('/get-user', getUserController)

module.exports = router
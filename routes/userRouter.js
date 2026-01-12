const express = require('express')
const { getUserController } = require('../controllers/userController')
const router = express.Router()
router.get('/getUser', getUserController)

module.exports = router
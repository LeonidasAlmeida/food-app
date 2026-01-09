const express = require('express')
const { testUserController } = require('../controllers/testController')
const router = express.Router()

//methods GET,PUT,DELETE
router.get('/test-users', testUserController)

module.exports = router
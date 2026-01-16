const express = require('express')
const { 
    getUserController, 
    updateUserController,
    resetPasswordController,
    updatePasswordController
     } = require('../controllers/userController')

const router = express.Router()
// GET | USER
router.get('/get-user', getUserController)
// PUT | UPDATE USER
router.put('/update-user', updateUserController)
// POST | RESET
router.post('/reset-password',resetPasswordController)
// POST | UPDATE PASSWORD
router.post('/update-password',updatePasswordController)
module.exports = router
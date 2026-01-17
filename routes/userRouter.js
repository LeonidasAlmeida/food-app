const express = require('express')
const { 
    getUserController, 
    updateUserController,
    resetPasswordController,
    updatePasswordController,
    deleteUserController
     } = require('../controllers/userController')

const router = express.Router()
// GET | USER
router.get('/get-user', getUserController)
// PUT | UPDATE USER
router.put('/update-user', updateUserController)
// POST | RESET
router.post('/reset-password', resetPasswordController)
// POST | UPDATE PASSWORD
router.post('/update-password', updatePasswordController)
// DELETE | DELETE USER OR PERFIL
router.delete('/delete-user/:id', deleteUserController)

module.exports = router
const express = require('express')
const perroControllerRoute = require('../Controllers/perroController')
const router = express.Router()

router.get('/perros', perroControllerRoute.mostrar)
router.get('/perrosDisponibles', perroControllerRoute.disponible)
router.post('/perros', perroControllerRoute.agregar)



module.exports = router

const express = require('express')
const adopcionControllerRoute = require('../Controllers/adopcionesController')
const router = express.Router()

router.get('/adopcion', adopcionControllerRoute.mostrar)
router.post('/adopcion', adopcionControllerRoute.agregar)



module.exports = router

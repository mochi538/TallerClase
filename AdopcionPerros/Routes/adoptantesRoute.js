const express = require('express')
const adoptanteControllerRoute = require('../Controllers/adoptanteController')
const router = express.Router()

router.get('/adoptante', adoptanteControllerRoute.mostrar)
router.post('/adoptante', adoptanteControllerRoute.agregar)



module.exports = router

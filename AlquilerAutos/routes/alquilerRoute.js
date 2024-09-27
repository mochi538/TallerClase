const express = require('express')
const route = express.Router()
const alquilerRouteController = require('../controller/alquilerController')

route.get('/alquiler', alquilerRouteController.visualizar)
route.post('/alquiler', alquilerRouteController.agregar)



module.exports= route
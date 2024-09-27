const express = require('express')
const route = express.Router()
const autosRouteController = require('../controller/autosController')

route.get('/autos', autosRouteController.visualizar)
route.get('/autosDisponibles', autosRouteController.disponible)
route.post('/autos', autosRouteController.agregar)



module.exports= route
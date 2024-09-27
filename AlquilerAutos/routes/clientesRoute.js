const express = require('express')
const route = express.Router()
const clienteRouteController = require('../controller/clienteController')

route.get('/cliente', clienteRouteController.visualizar)
route.post('/cliente', clienteRouteController.agregar)



module.exports= route
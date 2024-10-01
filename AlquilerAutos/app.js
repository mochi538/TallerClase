const express = require('express')
const app = express()
require('dotenv').config()

const clienteRoute = require('./routes/clientesRoute')
const autoRoute = require('./routes/autosRuote')
const alquilerRoute = require('./routes/alquilerRoute')



const port = process.env.PORT || 4004

app.use(express.json())
app.use('/api', clienteRoute, autoRoute,alquilerRoute)


app.listen(port, ()=>{
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
})
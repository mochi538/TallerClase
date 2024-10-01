const express = require('express')
const app = express()
const port = process.env.PORT || 4005
require('dotenv').config();

const perrosRouter = require('./Routes/perroRoute')
const adoptanteRouter = require('./Routes/adoptantesRoute')
const adopcionRouter = require('./Routes/adopcionesRoute')

const conexionDB = require('./Config/db')
conexionDB()

app.use(express.json())

app.use('/api', perrosRouter)
app.use('/api', adoptanteRouter)
app.use('/api', adopcionRouter)

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
})

/* {
    "nombre":"Snow",
    "raza":"Husky",
    "edad": 1,
    "tamano":100,
    "estado":"no disponible"
} */
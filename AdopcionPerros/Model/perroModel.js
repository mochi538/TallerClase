const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    tamano: {
        type: Number,
        required: true
    },
    estado: {
        type: String,
        enum:["disponible", "adoptado"],
        required: true
    }
})

const Perro = mongoose.model('perros', schema)

module.exports = Perro
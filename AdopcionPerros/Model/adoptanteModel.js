const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    }
})

const Adoptante = mongoose.model('adoptantes', schema)

module.exports = Adoptante
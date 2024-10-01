const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    perro: {
        type: Object,
        required: true
    },
    adoptante: {
        type: Object,

        required: true
    },
    fechaAdopcion: {
        type: Date,
        required: true
    }
})

const Adopcion = mongoose.model('adopcion', schema)

module.exports = Adopcion
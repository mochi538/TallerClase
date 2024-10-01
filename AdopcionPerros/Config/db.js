const mongoose = require('mongoose')
const DATABASE = process.env.DATABASE
const conexionDB = async () => {
    try {
        mongoose.connect(DATABASE)
        console.log("Base de datos conectada correctamente")
        
    } catch(e) {
        console.log("Error X_X")
    }
}

module.exports = conexionDB;
const Adopcion = require('../Model/adopcionesModel')

exports.mostrar = async(req, res) => {
    try {
        const consulta = await Adopcion.find()
        res.json({consulta})
    } catch (e) {
        return res.status(500).json({ mensaje: "Error desde el método mostrar"})
    }
}

exports.agregar = async(req, res) => {
    try {
        const { perro, adoptante, fechaAdopcion} = req.body;
        const newAdopcion = new Adopcion({ perro, adoptante, fechaAdopcion})
        await newAdopcion.save();
        res.json({mensaje: newAdopcion})
    } catch(e) {
        res.status(500).json({mensaje: "Error desde el método agregar"})
    }
}

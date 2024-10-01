const Adoptante = require('../Model/adoptanteModel')

exports.mostrar = async(req, res) => {
    try {
        const consulta = await Adoptante.find()
        res.json({consulta})
    } catch (e) {
        return res.status(500).json({ mensaje: "Error desde el método mostrar"})
    }
}

exports.agregar = async(req, res) => {
    try {
        const { nombre, correo, direccion} = req.body;
        const newAdoptante = new Adoptante({ nombre, correo, direccion})
        await newAdoptante.save();
        res.json({mensaje: newAdoptante})
    } catch(e) {
        res.status(500).json({mensaje: "Error desde el método agregar"})
    }
}

const Perro = require('../Model/perroModel')

exports.mostrar = async(req, res) => {
    try {
        const consulta = await Perro.find()
        res.json({consulta})
    } catch (e) {
        return res.status(500).json({ mensaje: "Error desde el método mostrar"})
    }
}

exports.agregar = async(req, res) => {
    try {
        const { nombre, raza, edad, tamano, estado} = req.body;
        const newDog = new Perro({ nombre, raza, edad, tamano, estado })
        await newDog.save();
        res.json({mensaje: newDate})
    } catch(e) {
        res.status(500).json({mensaje: "Error desde el método agregar"})
    }
}

exports.disponible = async( req, res) => {
    try {
        const consulta = await Perro.find()
        let listaDisponibles = []
        for (i = 0; i < consulta.length; i++) {
            if(consulta[i].estado === "disponible") {
                listaDisponibles.push(consulta[i])
            }
        }
        res.json({listaDisponibles})

    }
     catch (e) {
        return res.status(500).json({ mensajito: "Error desde el método disponible"})
    }
}


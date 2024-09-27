const {Alquiler} = require('../models')

exports.visualizar = async(req, res)=>{
    try{
        const consulta = await Alquiler.findAll()
        res.json({consulta})
    }
    catch(e){
        console.json({mjs:"Error desde el médoto visualizar en el controlador de alquiler"})
    }
}

exports.agregar = async(req,res)=>{
    const {marca,modelo,año,estado}=req.body;
    try{
        const alquiler = await Alquiler.create({marca,modelo,año,estado});
        res.json({mjs: alquiler})

    }
    catch(e){
        console.json({mjs:"Error desde el médoto agregar en el controlador de alquiler"})

    }
}
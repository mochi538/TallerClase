const {Cliente} = require('../models')

exports.visualizar = async(req, res)=>{
    try{
        const consulta = await Cliente.findAll()
        res.json({consulta})
    }
    catch(e){
        console.json({mjs:"Error desde el médoto visualizar en el controlador de cliente"})
    }
}

exports.agregar = async(req,res)=>{
    const {nombre,correo,numLicencia}=req.body;
    try{
        const cliente = await Cliente.create({nombre,correo,numLicencia});
        res.json({mjs: cliente})

    }
    catch(e){
        console.json({mjs:"Error desde el médoto agregar en el controlador de cliente"})

    }
}
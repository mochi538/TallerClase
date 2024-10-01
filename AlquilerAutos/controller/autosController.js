const {Autos} = require('../models')


exports.visualizar = async(req, res)=>{
    try{
        const consulta = await Autos.findAll()
        res.json({consulta})
    }
    catch(e){
        res.json({mjs:"Error desde el médoto visualizar en el controlador de autos"+ e})
    }
}

exports.agregar = async(req,res)=>{
    const {marca,modelo,año,estado}=req.body;
    try{
        const autos = await Autos.create({marca,modelo,año,estado});
        res.json({mjs: autos})

    }
    catch(e){
        res.json({mjs:"Error desde el médoto agregar en el controlador de autos"})

    }
}

exports.disponible = async(req, res)=>{
    try{
        const consulta = await Autos.findAll({
            where:{
                estado:"disponible"
            }
        })
        if (consulta.length > 0){
            res.json({consulta})
        }
        else{
            console.log("No hay autos disponibles")
        }
    }
    catch(e){
        res.json({mjs:"Error desde el médoto disponible en el controlador de autos"})

    }
}
var Model = require('../models/juegoModel');

module.exports = {
    show:function(req,res){
        Model.find({})
        .then(function(data){
            res.json(data);
        })
        .catch((err)=>{
            console.error(err);
        });
    },
    create:function(req,res){
        var ob = new Model;
        ob._id = req.body._id,
        ob.img = req.body.img,
        ob.titulo = req.body.titulo,
        ob.descripcion = req.body.descripcion
        ob.precio = req.body.precio
        ob.categoria = req.body.categoria

        ob.save()
        .then(function(ob){
            res.json(ob);
        })
        .catch((err)=>{
            console.error(err);
        });
    }
}
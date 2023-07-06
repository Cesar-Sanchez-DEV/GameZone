var Model = require('../models/comentarioModel');

module.exports = {
    show: function(req,res){
        Model.find({},{})
        .then(function(posts){
            res.json(posts);
        })
        .catch((err) => {
            console.error(err);
        });
    },
    create:function(req,res){
        var comment = new Model;
        comment._id = req.body._id;
        comment.img = req.body.img;
        comment.autor = req.body.author;
        comment.descripcion = req.body.descripcion;
        comment.fecha = req.body.fecha;
        comment.juego = req.body.juego;

        comment.save()
        .then(function(comment){
            res.json(comment);
        })
        .catch((err)=>{
            console.error(err);
        });
    }
}
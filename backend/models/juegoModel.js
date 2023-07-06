var mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/gamezone")

var modelSchema = new Schema({
    _id:{ type: Number},
    img : { type:String },
    titulo : { type:String },
    descripcion : { type: String },
    precio : {type: String},
    categoria: {type: String}
});

var model = mongoose.model('Juegos',modelSchema);
module.exports = model;

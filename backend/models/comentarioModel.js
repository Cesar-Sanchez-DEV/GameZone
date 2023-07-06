var mongoose = require('mongoose');
Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/gamezone")

var modelSchema = new Schema({
    _id:{ type: Number},
    img:{type: String},
    autor:{ type: String},
    descripcion : { type:String },
    fecha : {type:Date,default: Date.now},
    juego:{type: String}
});

var model = mongoose.model('Comentarios',modelSchema);
module.exports = model;

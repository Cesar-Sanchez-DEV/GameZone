var express = require('express')
var app = express();
var juegosRouter = require('./routes/juegos');
var comentariosRouter = require('./routes/comentarios');
const mongoose = require('mongoose');
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors({
  origin: '*'
}));

app.use('/juegos', juegosRouter);
app.use('/comentarios', comentariosRouter);

app.listen(port, (req, res)=>{
  console.log("Aplicacion corriendo con normalidad")
})
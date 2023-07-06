var express = require('express')
var router = express.Router();
var controller = require('../controller/juegoController')

router.get('/listar', (req, res)=>{
    controller.show(req, res)
});
router.post('/create', function(req, res){
    controller.create(req, res);
});
module.exports = router;
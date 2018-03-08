var express = require('express');
var router = express.Router();
var controller = require('../controllers/usuario.js');

router.get('/', controller.getAllUsuarios);
router.get('/:id', controller.getUsuario);
router.post('/', controller.addUsuario);
router.put('/:id', controller.editUsuario);
router.delete('/:id', controller.delUsuario);

module.exports = router;

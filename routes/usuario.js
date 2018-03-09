const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuario.js');

router.get('/', controller.getAllUsuarios);
router.get('/:id', controller.getUsuario);
router.post('/', controller.addUsuario);
router.put('/:id', controller.editUsuario);
router.delete('/:id', controller.delUsuario);

module.exports = router;

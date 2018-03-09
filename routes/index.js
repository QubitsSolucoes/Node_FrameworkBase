var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.js');

router.post('/', controller.post);

module.exports = router;

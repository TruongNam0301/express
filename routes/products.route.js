const express = require('express');
var router = express.Router();
var productsController = require('../controllers/product.controller');

router.get('/',productsController.show);

module.exports = router;
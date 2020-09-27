const express = require('express');
var router = express.Router();
var productsController = require('../controllers/product.controller');

router.get('/',productsController.show);
router.get('/:id',productsController.showDetailProduct)
module.exports = router;
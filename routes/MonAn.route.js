const express = require('express');
var router = express.Router();
var productsController = require('../controllers/MonAn.controller');

router.get('/list',productsController.show);
router.get('/:id',productsController.showDetailProduct)
router.get('/',productsController.ShowList);
module.exports = router;
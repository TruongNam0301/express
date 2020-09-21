const express = require('express');
var router = express.Router();
var cartController = require('../controllers/cart.controller');

router.get('/add/:productId',cartController.addToCart);
router.get('/',cartController.showCart);
router.post('/deleteCart',cartController.deleteCart);
router.post('/updateCart',cartController.updateCart);
module.exports = router;
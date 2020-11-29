const express = require('express');
var router = express.Router();
var HoaDonController = require('../controllers/HoaDon.controller');

router.get('/create', HoaDonController.CreateBill);

module.exports = router;
const express = require('express');
var router = express.Router();
var LoaiMAController = require('../controllers/LoaiMA.controller');

router.get('/',LoaiMAController.ShowList);

module.exports = router;
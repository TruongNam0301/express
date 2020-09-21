const express = require('express');
const multer = require('multer');
var router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleWare = require('../middlewares/auth.middleware');

var upload = multer({ dest: './public/images/avatar/' });

router.get('/', userController.index);

router.get('/search', userController.search);

router.get('/create', userController.create);

router.get('/:id', userController.user)

router.post('/create',upload.single('avatar'), userController.postCreate);

module.exports = router;
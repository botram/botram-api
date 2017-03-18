var express = require('express');
var router = express.Router();
const controllers = require('../controllers/food')
const requestController = require('../controllers/request')
const multer = require('multer');
const path = require('path');

/* GET users listing. */
router.get('/food', controllers.read);
router.post('/food', multer({ dest: './imageMulter/' }).single('picture'), controllers.create);
router.put('/food', controllers.update)

router.post('/request', requestController.create);
router.get('/request', requestController.read);
router.put('/request', requestController.update);


module.exports = router;

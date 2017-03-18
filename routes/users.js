var express = require('express');
var router = express.Router();
const controllers = require('../controllers/food')
const requestController = require('../controllers/request')
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, 'botram-food' + '-' + Date.now() + '.' + file.mimetype.split('/')[2])
  }
})

/* GET users listing. */
router.get('/food', controllers.read);
router.post('/food', multer({ storage: storage }).single('food-picture'), controllers.create);
router.put('/food', controllers.update)
router.get('/food/:food', controllers.browse)


router.get('/request', requestController.read);
router.post('/request', requestController.create);
router.put('/request', requestController.update);


module.exports = router;

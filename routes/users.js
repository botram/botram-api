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
    cb(null, 'botram-food' + '-' + Date.now() + '.' + file.mimetype.split('/')[1])
  }
})


/* GET users listing. */

router.get('/food', controllers.read)
router.get('/food/:food', multer({ storage: storage }).single('food-picture'),controllers.browse)
router.post('/food', controllers.create);
router.put('/food', controllers.update)
router.delete('/food', controllers.delete)

router.post('/request', requestController.create)
router.get('/request', requestController.read)
router.put('/request', requestController.update)
router.delete('/request',requestController.delete)




module.exports = router;

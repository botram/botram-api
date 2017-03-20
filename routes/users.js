var express = require('express');
var router = express.Router();
const controllers = require('../controllers/food')
const requestController = require('../controllers/request')
const userController = require('../controllers/user');
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/')
  },
  filename: function (req, file, cb) {
    cb(null, 'botram' + '-' + Date.now() + '.' + file.mimetype.split('/')[1])
  }
})

/* GET users listing. */
router.get('/food', controllers.read);
router.post('/food', multer({ storage: storage }).single('picture'), controllers.create);
router.put('/food', controllers.update)

router.post('/request', requestController.create);
router.get('/request', requestController.read);
router.put('/request', requestController.update);

router.get('/', userController.list);
router.get('/:id', userController.show);
router.post('/', multer({ storage: storage }).single('picture'), userController.create);
router.put('/:id', userController.update);
router.put('/:id/favbysearch', userController.favBySearch);
router.put('/:id/addrating', userController.addRating);
router.delete('/:id', userController.remove);


module.exports = router;

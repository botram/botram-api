var express = require('express');
var router = express.Router();
const controllers = require('../controllers/food')
const requestController = require('../controllers/request')
const userController = require('../controllers/user');
// const multer = require('multer');

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './public/images/')
//   },
//   filename: function (req, file, cb) {
// console.log("masuk");
//     cb(null, 'botram-food' + '-' + Date.now() + '.' + file.mimetype.split('/')[1])
//   }
// })
// , multer({ storage: storage }).single('picture')
// KALAU upload file S3 sudah berhasil , di uncomment , dan dipasang sebagai middleware di end point POST /users/food


/* GET users listing. */
router.get('/food', controllers.read);
router.post('/food', controllers.create);
router.put('/food', controllers.update)
router.delete('/food', controllers.delete)
router.get('/food/:food', controllers.browse);

router.post('/request', requestController.create)
router.get('/request', requestController.read)
router.put('/request', requestController.update)
router.delete('/request',requestController.delete)


router.get('/', userController.list);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.put('/:id/favbysearch', userController.favBySearch);
router.put('/:id/addrating', userController.addRating);



module.exports = router;

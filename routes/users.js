var express = require('express');
var router = express.Router();
const controllers = require('../controllers/food')
const requestController = require('../controllers/request')
const userController = require('../controllers/user');



/* GET users listing. */
router.get('/food', controllers.read);
router.post('/food', controllers.create);
router.put('/food', controllers.update)
router.delete('/food', controllers.delete)
router.get('/food/:food', controllers.browse);

router.post('/request', requestController.create)
router.get('/request', requestController.read)
router.put('/request', requestController.update)
router.put('/request',requestController.reject)


router.get('/', userController.list);
router.get('/:id', userController.show);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.put('/:id/favbysearch', userController.favBySearch);
router.put('/:id/addrating', userController.addRating);



module.exports = router;

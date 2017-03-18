var express = require('express');
var router = express.Router();
const controllers = require('../controllers/food')
const requestController = require('../controllers/request')

/* GET users listing. */
router.get('/food', controllers.read);
router.post('/food', controllers.create);
router.put('/food', controllers.update)
router.get('/food/:food', controllers.browse)


router.get('/request', requestController.read);
router.post('/request', requestController.create);
router.put('/request', requestController.update);


module.exports = router;

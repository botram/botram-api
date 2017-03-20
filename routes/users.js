var express = require('express');
var router = express.Router();
const controllers = require('../controllers/food')
const requestController = require('../controllers/request')

/* GET users listing. */
router.get('/food', controllers.read)
router.post('/food', controllers.create)
router.put('/food', controllers.update)
router.delete('/food', controllers.delete)

router.post('/request', requestController.create)
router.get('/request', requestController.read)
router.put('/request', requestController.update)
router.delete('/request',requestController.delete)



module.exports = router;

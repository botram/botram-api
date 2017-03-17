var express = require('express');
var router = express.Router();
const controllers = require('../controllers/food')

/* GET users listing. */
router.get('/food', controllers.read);
router.post('/food', controllers.create);

module.exports = router;

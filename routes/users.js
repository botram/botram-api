var express = require('express');
var router = express.Router();
const controllers = require('../controllers/food')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/food', controllers.create);

module.exports = router;

var express = require('express');
var router = express.Router();
const controllers = require('../controllers/food')
const requestController = require('../controllers/request')
const userController = require('../controllers/user');

const jwt = require('jsonwebtoken');
const cektoken = (req,res,next) => {
  if(!req.header('token')) {
    res.send('Unauthorized')
  } else {
    let verified = jwt.verify(req.header('token'), 'secret', (err,decoded) => {
      if(err){
        res.send('Unauthorized')
      } else {
        next()
      }
    })
  }
}


/* GET users listing. */
router.get('/food',cektoken, controllers.read);
router.get('/food/:id', cektoken, controllers.foodDetail)
router.get('/food/byuser/:iduser', cektoken, controllers.foodbyUser)
router.post('/food',cektoken, controllers.create);
router.put('/food',cektoken, controllers.update)
router.put('/food/edit',cektoken, controllers.edit)
router.delete('/food',cektoken, controllers.delete)
router.get('/food/byfood/:food',cektoken, controllers.browse);

// ini hanya untuk ngetes travisnya berjalan dengan baik, boleh dihapus kapan saja
router.get('/santestravis',function(req,res,next){
  console.log("hanya untuk testing travis");
});


router.post('/request',cektoken, requestController.create)
router.get('/request',cektoken, requestController.read)
router.put('/request',cektoken, requestController.update)
router.put('/request/reject',cektoken, requestController.reject)



router.get('/',cektoken, userController.list);
router.get('/:id',cektoken, userController.show);
router.post('/', userController.create);
router.put('/:id',cektoken, userController.update);
router.put('/:id/favbysearch',cektoken, userController.favBySearch);
router.put('/:id/addrating',cektoken, userController.addRating);
router.get('/:id/favourite',cektoken, userController.favourite);



module.exports = router;

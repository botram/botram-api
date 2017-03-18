const model = require('../models/food')
const multer = require('multer');

module.exports = {

    create : function(req,res){
      console.log("masuk");
      console.log(req.file);
        let tags = req.body.food_tags.split(" ")
        let food = {

          food_title: req.body.food_title,
          food_pic : req.body.food_pic,
          food_price: req.body.food_price,
          food_qty:  req.body.food_qty,
          food_tags :tags,
          food_desc : req.body.food_desc,
          status : 1
        }
        model.create(food)
        .then(function(data){
          if(data) {
            res.json({success : data})
            console.log(req.file)
          }
        })
        .catch(function(err){
          if(err) res.json({err : err})
        })
    },
    read : function (req,res){

      let food = {
        status : 1
      }
      model.find(food)
      .then(function(data){
        if(data) res.json({success : data})
      })
      .catch(function(err){
        if(err) res.json({err : err})
      })
    },

    update : function (req,res){

      let food = {
        _id : req.body._foodId
      }

      Model.findOne(food)
      .then(function(data){
        if(data){
          data.status = 1
          data.save()
          res.json({success : data})
        }
      })
      .catch(function(err){
        if(err) res.json({err : err})
      })
    }

}

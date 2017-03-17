const model = require('../models/food')

module.exports = {

    create : function(req,res){

        let tags = req.body.food_tags.split(" ")

        let food = {
          _userId: req.body._userid,
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
          if(data) res.json({success : data})
        })
        .catch(function(err){
          if(err) res.json({err : err})
        })
    },
    read : function (req,res){

      model.find()
      .then(function(data){
        if(data) res.json({success : data})
      })
      .catch(function(err){
        if(err) res.json({err : err})
      })
    }




}

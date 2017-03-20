const model = require('../models/food')

module.exports = {

    create : function(req,res){

      //DISINI BUTUH ID USER
        let tags = req.body.food_tags.split(" ")
        tags = tags.map(tag => tag.toLowerCase())
        let food_date = new Date()
        let food = {
          food_title: req.body.food_title,
          food_pic : req.file.filename,
          food_price: req.body.food_price,
          food_qty:  req.body.food_qty,
          food_tags :tags,
          food_desc : req.body.food_desc,
          status : 1,
          food_date : food_date.toDateString()
        }
        model.create(food)
        .then(function(data){
          if(data) {
            res.json({success : data})
          }
        })
        .catch(function(err){
          if(err) res.json({err : err})
        })
    },
    read : function (req,res){

      let food_date = new Date()

      let food = {
        food_date : food_date.toDateString(),
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
      let qty = req.body.food_qty
      let date = new Date()

      model.findOne(food)
      .then(function(data){
        if(data){
          data.status = 1
          data.food_qty = qty
          data.food_date = date.toDateString()
          data.save()
          res.json({success : data})
        }
      })
      .catch(function(err){
        if(err) res.json({err : err})
      })
    },

    delete : function (req,res){
      let food = {
        _id : req.body._foodId
      }
      Model.findByIdAndRemove(food)
      .then(function(data){
        if(data) res.json({success : "Data Deleted"})
      })
      .catch(function(err){
        if(err) res.json({err : err})
      })

    },

      browse : function(req,res){

      var regex = new RegExp(req.params.food, "i")

      let food = {
       food_title : regex
      }
      let tag = {
        food_tags : {$in: [regex]}
      }

      model.find({
        $or:[food,tag]
      })
      .then(function(item){
        if(item) res.json({ success : item})
      }).catch(function(err){

        if(err) res.json({err : err})
      })

  }
}

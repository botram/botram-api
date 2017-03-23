const model = require('../models/food')

module.exports = {

    create : function(req,res){

        let tags = req.body.food_tags.split(" ")
        tags = tags.map(tag => tag.toLowerCase())
        let food_date = new Date()

        let food = {
          food_title: req.body.food_title,
          food_pic : req.body.food_pic,
          food_price: req.body.food_price,
          food_qty:  req.body.food_qty,
          food_tags :tags,
          food_desc : req.body.food_desc,
          status : 1,
          food_date : food_date.toDateString(),
          _userId : req.body._userId
        }
        model.create(food)
        .then(function(data){
          if(data) {
            res.json(data)
          }
        })
        .catch(function(err){
          if(err) res.json({err : err})
        })
    },

    read : (req,res) => {
      model.getAllSorted((err,data) => {
        res.json(data)
      })
    },


    foodDetail : function (req,res){

      let food = {
        _id: req.params.id
      }
      model.findOne(food).populate('_userId')
      .then(function(data){
        if(data) res.json(data)
      })
      .catch(function(err){
        if(err) res.json({err : err})
      })
    },

    foodbyUser : function (req,res){

      let food = {
        _userId: req.params.iduser
      }
      model.find(food).populate('_userId')
      .then(function(data){
        if(data) res.json(data)
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
          res.json(data)
        }
      })
      .catch(function(err){
        if(err) res.json({err : err})
      })
    },

    edit : function (req,res){

      let food = {
        _id : req.body._foodId
      }
       let food_pic = req.body.food_pic

      model.findOne(food)
      .then(function(data){
        if(data){
          data.food_pic = food_pic
          data.save()
          res.json(data)
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
      model.findByIdAndRemove(food)
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
      }).populate('_userId')
      .then(function(item){
        if(item) res.json({
          success : item
        })
      }).catch(function(err){

        if(err) res.json({
          err : err
        })
      })

  }
}

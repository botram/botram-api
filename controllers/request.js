const Model = require('../models/request')
const Food = require('../models/food')

module.exports = {

    create : function(req,res){
        let food = {
          _id : req.body._foodId
        }
        let request = {

          request_notes : req.body.request_notes,
          request_qty   : req.body.request_qty,
          status : 0
        }
        Model.create(request)
        .then(function(data){
          if(data){
            Food.findOne(food)
            .then(function(item){
              item._requestId.push(data._id)
              item.save()
              res.json({success : item})
            })
            .catch(function(err){
              if(err) res.json({err : err})
            })
          }
        })
        .catch(function(err){
          if(err) res.json({err : err})
        })
    },
    read : function (req,res){

      Model.find()
      .then(function(data){
        if(data) res.json({success : data})
      })
      .catch(function(err){
        if(err) res.json({err : err})
      })
    },
    update : function (req,res){

      let request = {
        _id : req.body._requestId
      }

      Model.findOne(request)
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

var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a schema
var foodSchema = new Schema({
  _userId: { type: Schema.Types.ObjectId, ref :'User' },
  food_title: { type: String, required: true },
  food_pic : String,
  food_price: { type: String,required: true},
  food_qty:  Schema.Types.Mixed,
  food_tags :[String],
  food_desc : String,
  _requestId : { type: Schema.Types.ObjectId, ref :'Request' },
  status : Number
})

// the schema is useless so far
// we need to create a model using it
var Food = mongoose.model('Food', foodSchema)

// make this available to our users in our Node applications
module.exports = Food

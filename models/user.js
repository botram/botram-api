var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a schema
var userSchema = new Schema({
  user_phone: { type: String, required: true },
  user_address: { type: String, required: true },
  user_profile_pic: { type: String,required: true},
  user_rating:  Schema.Types.Mixed,
  user_favourite :[String],
  facebook:{
    id: String,
    token: String,
    email: String,
    name: String
  }
})

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema)

// make this available to our users in our Node applications
module.exports = User

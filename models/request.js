var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a schema
var requestSchema = new Schema({
  _userId: { type: Schema.Types.ObjectId, ref :'User' },
  request_notes : String,
  request_qty   : Number,
  status : Number
})

// the schema is useless so far
// we need to create a model using it
var Request = mongoose.model('Request', requestSchema)

// make this available to our users in our Node applications
module.exports = Request

const mongoose = require('mongoose')
const validate = require('mongoose-validator')
const Schema = mongoose.Schema

// create a schema
const foodSchema = new Schema({
  _userId    : { type: Schema.Types.ObjectId, ref :'user' },
  food_title : { type: String, required: [true, 'Judul makanan harus diisi'] },
  food_pic   : { type: String, required: [true, 'Foto makanan tidak ada ! contoh: food.jpg'] },
  food_price : {
    type: Number,
    validate: {
          validator: function(v) {
            if(typeof(v) === "string") return false
          },
          message: 'Harga makanan harus berupa angka !'
        },
          required   :  [ true, 'harga makanan harus diisi']
  },
  food_qty   :   {
    type: Number,
    validate: {
          validator: function(v) {
            if(typeof(v) === "string") return false
          },
          message: 'Porsi makanan harus berupa angka ! contoh : 1 porsi, 2 porsi'
        },
  required   :  [ true, 'harga makanan harus diisi']
  },
  food_tags  :  [String],
  food_desc  :  { type: String, required: [true, 'Deskripsi makanan harus diisi'] },
  _requestId :  [{ type: Schema.Types.ObjectId, ref :'Request' }],
  status : Number,
  food_date : String
})

// the schema is useless so far
// we need to create a model using it
const Food = mongoose.model('Food', foodSchema)

// make this available to our users in our Node applications
module.exports = Food

var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var findOrCreate = require('mongoose-findorcreate')

var userSchema = new Schema({
	'name' : String,
	'email' : String,
	'phone' : String,
	'address' : String,
	'pic' : String,
	'rating' : Array,
	'fav' : Array,
	'city' : String,
	'id_fb': String
},{
	'timestamps' : true
});
userSchema.plugin(findOrCreate);


module.exports = mongoose.model('user', userSchema)

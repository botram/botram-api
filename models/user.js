var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'name' : String,
	'email' : String,
	'phone' : String,
	'address' : String,
	'pic' : String,
	'rating' : Number,
	'rated':Array,
	'fav' : Array,
	'city' : String,
	'id_fb': String
},{
	'timestamps' : true
});

module.exports = mongoose.model('user', userSchema);

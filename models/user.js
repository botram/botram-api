var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	'name' : String,
	'email' : String,
	'phone' : String,
	'address' : String,
	'pic' : String,
	'rating' : Array,
	'fav' : Array,
	'city' : String
},{
	'timestamps' : true
});

module.exports = mongoose.model('user', userSchema);

// require things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create leaders schema
var leaderSchema = new Schema({
	name: {
        type: String,
        required: true,
        unique: true,
    },
    designation: {
        type: String,
        required: true
    },
	image: {
		type: String
	},
	abbr: {
		type: String
	},
	description: {
		type: String,
		required: true,
		default: ''
	}
});

// create model for this schema
var Leaders = mongoose.model('Leader', leaderSchema);

// make this available to other node apps
module.exports = Leaders;
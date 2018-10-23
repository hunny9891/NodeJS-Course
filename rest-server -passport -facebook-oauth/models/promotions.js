// require things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;

// create promotions schema
var promotionSchema = new Schema({
	name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
	image: {
		type: String
	},
	category: {
		type: String
	},
	label: {
		type: String,
		required: true,
		default: ''
	},
	price: {
		type: Currency
	}
});

// create model for this schema
var Promotions = mongoose.model('Promotion', promotionSchema);

// make this available to other node apps
module.exports = Promotions;
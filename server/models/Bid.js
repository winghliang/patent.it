var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BidSchema = mongoose.Schema({
	_invention: {type: Schema.Types.ObjectId, ref: 'Invention'},
	_prosecutor: {type: Schema.Types.ObjectId, ref: 'Prosecutor'},
	bid_amount: Number,
	created_date: {type: Date, default: new Date},
	accepted: {type: Boolean, default: false}
});

mongoose.model('Bid', BidSchema);
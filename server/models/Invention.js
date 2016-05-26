var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InventionSchema = mongoose.Schema({
	_inventor: {type: Schema.Types.ObjectId, ref: 'Inventor'},
	title: {type: String, required: true},
	description: String,
	technologies: [String],
	created_date: {type: Date, default: new Date},
	bids: [{type: Schema.Types.ObjectId, ref: 'Bid'}],
	accepted: {type: Boolean, default: false},
	completed: {type: Boolean, default: false}
});

mongoose.model('Invention', InventionSchema);
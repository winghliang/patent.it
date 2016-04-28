var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = mongoose.Schema({
	_inventor: {type: Schema.Types.ObjectId, ref: 'Inventor'}, 
	_prosecutor: {type: Schema.Types.ObjectId, ref: 'Prosecutor'},
	title: {type: String, required: true},
	created_date: {type: Date, default: new Date},
	bids: [{type: Schema.Types.ObjectId, ref: 'Invention', quote: Number}],
	technology: [{type: Schema.Types.ObjectId, ref: 'Technology'}]
});

mongoose.model('Project', ProjectSchema);
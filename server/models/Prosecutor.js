var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProsecutorSchema = mongoose.Schema({
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	date_joined: {type: Date, default: new Date},
	licensed_states: [{type: String, required: true}],
	licensed_since: {type: Number, required: true},
	rating: Number,
	technologies: [{type: Schema.Types.ObjectId, ref: 'Technology'}],
	bids: [{type: Schema.Types.ObjectId, ref: 'Project'}],
	projects: [{type: Schema.Types.ObjectId, ref: 'Project'}] 
});

mongoose.model('Prosecutor', ProsecutorSchema);
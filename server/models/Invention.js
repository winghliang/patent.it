var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InventionSchema = mongoose.Schema({
	title: {type: String, required: true},
	description: String,
	created_date: {type: Date, default: new Date}
});

mongoose.model('Invention', InventionSchema);
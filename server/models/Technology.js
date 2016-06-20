var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var TechnologySchema = mongoose.Schema({
	field: {type: String, required: true}
});

mongoose.model('Tech_area', TechnologySchema);
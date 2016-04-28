var mongoose = require('mongoose');

// var Schema = mongoose.Schema;

var TechnologySchema = mongoose.Schema({
	name: {type: String, required: true}
});

mongoose.model('Technology', TechnologySchema);
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var ProsecutorSchema = mongoose.Schema({
	email: String,
	password: String, 
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	date_joined: {type: Date, default: new Date},
	// licensed_states: [{type: String, required: true}],
	// licensed_since: {type: Number, required: true},
	// rating: Number,
	// technologies: [{type: Schema.Types.ObjectId, ref: 'Technology'}],
	// bids: [{type: Schema.Types.ObjectId, ref: 'Project'}],
	// projects: [{type: Schema.Types.ObjectId, ref: 'Project'}] 
});

// methods
// generating a hash
ProsecutorSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
ProsecutorSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Prosecutor', ProsecutorSchema);
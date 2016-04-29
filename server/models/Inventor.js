var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var InventorSchema = mongoose.Schema({
	email: String,
	password: String, 
	first_name: {type: String, required: true},
	last_name: {type: String, required: true},
	date_joined: {type: Date, default: new Date},
	// projects: [{type: Schema.Types.ObjectId, ref: 'Project'}	
});

// methods ======================
// generating a hash
InventorSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
InventorSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('Inventor', InventorSchema);
var mongoose = require('mongoose');
var Inventor = mongoose.model('Inventor');

module.exports = {
	login: function(req, res, passport){
		console.log('in inventors controller login:', req.body);
		console.log(passport);
		passport.authenticate('local-login', {
			successRedirect : '/', // redirect to the secure profile section
        	failureRedirect : '/', // redirect back to the signup page if there is an error
        	failureFlash : true // allow flash messages		
		})
	},
}
var mongoose = require('mongoose');
var Inventor = mongoose.model('Inventor');

module.exports = {

	index: function(req, res){
		Inventor.find({}, function(err, results){
			if (err){
				console.log('error finding all inventors');
			} else {
				res.json(results);
			}			
		});
	}
}
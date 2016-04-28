var mongoose = require('mongoose');

var Product = mongoose.model('Product');

module.exports = {

	index: function(req, res){
		Product.find({}, function(err, output){
			if (err) {
				console.log('error finding products')
			} else {
				res.json(output);
			}
		})
	},

	create: function(req, res){		
		var product = new Product({product_name: req.body.product_name, quantity_remaining: req.body.initial_quantity, description: req.body.description, image_url: req.body.image_url });
		console.log(product);
		product.save(function(err){
			if (err){
				console.log('error saving product to database')
			} else {
				Product.find({}, function(err, results){
					if (err) {
						console.log('error finding products after saving')
					} else {
						res.json(results);
					}
				})
			}
		})
	}

}
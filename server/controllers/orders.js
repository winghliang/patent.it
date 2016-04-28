var mongoose = require('mongoose');

var Order = mongoose.model('Order');

var Product = mongoose.model('Product');

module.exports = {

	index: function(req, res){
		Order.find({}, function(err, output){
			if (err) {
				console.log('error finding orders')
			} else {
				res.json(output);
			}
		})
	},

	create: function(req, res){
		var errors = {};
		errors.messages = [];
		errors.validationError = false;

		if ( !req.body.customer_name || !req.body.product ) {
			errors.validationError = true;
			if (!req.body.customer_name) {
				errors.messages.push('Name cannot be blank');
			};
			if ( !req.body.product ) {
				errors.messages.push('Product cannot be blank');
			}
			res.json(errors);
		}
		else {
			var order = new Order({customer_name: req.body.customer_name, quantity: req.body.quantity, product_name: req.body.product});

			order.save(function(err){
				if (err){
					errors.messages.push('Error saving order to database');
					errors.validationError = true;
					res.json(errors)
				} 
				else {
					Product.find({ product_name: req.body.product }, function(err, output){
						if (err) {
							console.log('Error finding product while attempting to save to database');
							errors.messages.push('Error saving order to database');
							errors.validationError = true;
							res.json(errors);
						} else {
							var product_to_update = output;
							var updated_quantity = product_to_update[0].quantity_remaining - req.body.quantity;
							Product.update( { product_name: req.body.product }, { quantity_remaining: updated_quantity}, function(err){
								if (err){
									console.log ('error updating quantity');
									errors.messages.push('Error saving order to database');
									errors.validationError = true;
									res.json(errors)
								} else {
									console.log('quantity updated.')
								}
							})
						}
					});

					Order.find({}, function(err, results){
						if (err) {
							console.log('error finding orders after saving')
						} else {
							console.log('added order.  database of order now contains:', results)
							res.json(results)
						}
					})
				}
			})

		}
	}

}
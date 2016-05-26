var mongoose = require('mongoose');
var Prosecutor = mongoose.model('Prosecutor');
var Invention = mongoose.model('Invention');
var Bid = mongoose.model('Bid');

module.exports = {

	get_inventions: function(req, res){
		Invention.find({}, function(err, inventions){
			if (err){
				console.log('error getting all inventions');
			} else {
				res.json(inventions)
			}
		})
	},

	place_bid: function(req, res){
		Invention.findOne( { _id: req.params.id }, function(err, invention){
			if (err){
				console.log("Error finding invention while attempting to place bid")
			} else {
				var bid = new Bid ({
					bid_amount: req.body.amount					
				})

				bid._prosecutor = req.session.passport.user;
				bid._invention = req.params.id;

				console.log("invention", invention)

				bid.save(function(err){
					invention.bids.push(bid);
					invention.save(function(err, output){
						if (err) {
							console.log("Error while attempting to save bid in invention.")
						} else {
							console.log("Succesfully saved bid to invention:", output)

							Prosecutor.findOne( {_id: req.session.passport.user}, function(err, prosecutor){
								if (err) {
									console.log("Error finding prosecutor while attempting to save bid")
								} else {
									prosecutor.bids.push(bid);
									prosecutor.save(function(err, output){
										if (err){
											console.log("Error while attempting to save bid in prosecutor.")
										} else {
											console.log("Succesfully saved bid to prosecutor:", output)
											res.json("You have successfully placed a bid.  Your bid is now awaiting acceptance.")
										}
									})
								}
							})
						}
					})
				})

			}						
		})
	},


}
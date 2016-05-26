var mongoose = require('mongoose');
var Inventor = mongoose.model('Inventor');
var TechArea = mongoose.model('Tech_area');
var Invention = mongoose.model('Invention');

module.exports = {

	get: function(req, res){
		Inventor.findOne({_id: req.session.passport.user})
		.populate( {path: 'posts', populate: {path: 'bids'} })
		.exec(function(err, inventor){
			res.json(inventor);
		})
	},

	tech_areas: function(req, res){
		TechArea.find({}, function(err, results){
			if (err){
				console.log('error finding all tech areas');
			} else {
				res.json(results)
			}
		})
	},

	add_invention: function(req, res){
		Inventor.findOne({_id: req.session.passport.user}, function(err, inventor){
			var invention = new Invention( {
				title: req.body.title,
				technologies: req.body.tech_areas,
				description: req.body.description 
			});
			
			invention._inventor = inventor._id;

			invention.save(function(err){
				inventor.posts.push(invention);
				inventor.save(function(err, output){
					if (err){
						console.log('Error in associations')
					} else {
						res.json('Thank you for your post.  Your post is now open for bidding.');
					}
				})
			})			
		})
	},

	get_post: function(req, res){
		Invention.find({ _id: req.params.id })
		.populate('bids')
		.exec(function(err, post){
			res.json(post);
		})

		// Invention.find( { _id: req.params.id }, function(err, post){
		// 	if (err){
		// 		console.log('error getting post')
		// 	} else {
		// 		res.json(post);
		// 	}
		// })
	},

	delete_post: function(req, res){
		Inventor.findOne({ _id: req.session.passport.user }, function(err, inventor){
			if (err){
				console.log('Error finding user while attempting to delete post.')
			} else {
				console.log('in delete!!!')
				for (post in inventor.posts) {
					if (inventor.posts[post] == req.params.id) {
						console.log("deleting post id:", (inventor.posts[post]), "= params:", req.params.id, "position:", post);
						inventor.posts.splice(post, 1);
						console.log("inventor.posts is:", inventor.posts)
						inventor.save(function(err){
							if (err){
								console.log("Error deleting invention from inventor's posts array.")
							}
						})
					}
				}
			}
		})

		Invention.remove( { _id: req.params.id }, function(err){
			if (err){
				console.log('Error deleting post')
			} else {
				res.json("Your post has been deleted.");
			}
		})
	},

	update_post: function(req, res){
		console.log("in update. params is:", req.params.id, "body is:", req.body)
		Invention.findOneAndUpdate( { _id: req.params.id }, { title: req.body.title, description: req.body.description}, function(err){
			if (err){
				console.log('Error deleting post')
			} else {
				res.json("Your post has been updated.");
			}
		})
	}

}
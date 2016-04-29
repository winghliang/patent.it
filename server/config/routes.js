var inventors = require('../controllers/inventors.js');

module.exports = function(app, passport){

	app.get('/inventor', function(req, res){
		res.render('inventor_loginReg', {message: req.flash('loginMessage')});
	})

	app.post('/inventorLogin', passport.authenticate('inventor-local-login', {
		successRedirect : '/', 
        failureRedirect : '/inventor', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages		
	})) 

	app.post('/inventorReg', passport.authenticate('inventor-local-reg', {
		successRedirect : '/', 
        failureRedirect : '/inventor', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages		
	})) 

	// app.get('/customers', function(req, res){
	// 	customers.index(req, res);
	// })

	// app.post('/customers', function(req, res){
	// 	customers.create(req, res);
	// })

	// app.post('/customers/destroy', function(req, res){
	// 	customers.destroy(req, res);
	// })

	// app.get('/orders', function(req, res){
	// 	orders.index(req, res);
	// })

	// app.post('/orders', function(req, res){
	// 	orders.create(req, res);
	// })

	// app.get('/products', function(req, res){
	// 	products.index(req, res);
	// })

	// app.post('/products', function(req, res){
	// 	products.create(req, res);
	// })

}
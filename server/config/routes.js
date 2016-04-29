var inventors = require('../controllers/inventors.js');

module.exports = function(app, passport){

	app.get('/inventor', function(req, res){
		res.render('inventor_loginReg', {message: req.flash('loginMessage')});
	})

	app.get('/inventor_home', function(req, res){
		res.render('inventor_home');
	})

	app.post('/inventorLogin', passport.authenticate('inventor-local-login', {
		successRedirect : '/inventor_home', 
        failureRedirect : '/inventor', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages		
	})) 

	app.post('/inventorReg', passport.authenticate('inventor-local-reg', {
		successRedirect : '/inventor_home', 
        failureRedirect : '/inventor', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages		
	}))

	app.get('/inventors', function(req, res){
		inventors.index(req, res);
	}) 

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
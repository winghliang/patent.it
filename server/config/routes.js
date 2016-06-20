var inventors = require('../controllers/inventors.js');

var prosecutors = require('../controllers/prosecutors.js')

module.exports = function(app, passport){


	//Inventor login and registration 

	app.get('/inventorLoginReg', function(req, res){
		res.render('inventor_loginReg', {message: req.flash('loginMessage')});
	})

	app.get('/inventor_home', isLoggedIn, function(req, res){
		console.log(req.user)
		res.render('inventor_home', { user: req.user });
	})

	app.post('/inventorLogin', passport.authenticate('inventor-local-login', {
		successRedirect : '/inventor_home', 
        failureRedirect : '/inventorLoginReg', 
        failureFlash : true 	
	})) 

	app.post('/inventorReg', passport.authenticate('inventor-local-reg', {
		successRedirect : '/inventor_home', 
        failureRedirect : '/inventorLoginReg', 
        failureFlash : true 		
	}))

	app.get('/inventor', function(req, res){
		inventors.get(req, res);
	})

	//Prosecutor login and registration
	app.get('/prosecutor_home', isLoggedIn, function(req, res){
		console.log('user is:', req.user)
		res.render('prosecutor_home', { user: req.user });
	})

	app.post('/prosecutorLogin', passport.authenticate('prosecutor-local-login', {
		successRedirect : '/prosecutor_home', 
        failureRedirect : '/prosecutorLoginReg', 
        failureFlash : true 	
	})) 

	app.post('/prosecutorReg', passport.authenticate('prosecutor-local-reg', {
		successRedirect : '/prosecutor_home', 
        failureRedirect : '/prosecutorLoginReg', 
        failureFlash : true 		
	}))


	app.get('/prosecutorLoginReg', function(req, res){
		res.render('prosecutor_loginReg', {message: req.flash('loginMessage')});
	})

	//checking whether user is logged in
	function isLoggedIn(req, res, next) {
	    // if user is authenticated in the session, proceed 
	    console.log(req.isAuthenticated());
	    if (req.isAuthenticated())
	        return next();
	    // if not, redirect to home page
	    console.log('not authenticated in isLoggedIn')
	    res.redirect('/');
	} 

	//Logging out
	app.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})

	//Inventor routes
	app.get('/tech_areas', function(req, res){
		inventors.tech_areas(req, res);
	})

	app.post('/invention/create', function(req, res){
		inventors.add_invention(req, res);
	})

	app.post('/post/delete/:id', function(req, res){		
		inventors.delete_post(req, res);
	})

	app.post('/post/update/:id', function(req, res){		
		inventors.update_post(req, res);
	})

	app.post('/accept_bid', function(req, res){
		inventors.accept_bid(req, res);
	})

	//Prosecutor routes
	app.get('/inventions', function(req, res){
		console.log("in prosecutor routes")
		prosecutors.get_inventions(req, res);
	})

	app.post('/bid/:id', function(req, res){
		prosecutors.place_bid(req, res);
	})

	app.get('/bids', function(req, res){
		console.log("in get prosecutor's bids")
		prosecutors.get_bids(req, res);
	})


	//Routes used by both inventors and prosecutors
	app.get('/post/:id', function(req, res){		
		inventors.get_post(req, res);
	})

}
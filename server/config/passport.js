// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');

var Inventor = require('../models/Inventor');

// expose this function to our app using module.exports
module.exports = function(passport) {

    // For persistent login sessions
    // serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
        // console.log('session:', req.session)
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        Inventor.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('inventor-local-reg', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // 
    },
    function(req, email, password, done) { 

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick(function() {

            //need to check if passwords match // 

            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            Inventor.findOne({ 'email' :  email }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);

                if (req.body.password != req.body.confirm_password) {
                    return done(null, false, req.flash('loginMessage', 'Passwords do not match.'));
                }

                // check to see if theres already a user with that email
                if (user) {
                    return done(null, false, req.flash('loginMessage', 'That email is already registered.'));
 
                } else {

                    console.log('info entered is:', req.body)
                    // if there is no user with that email
                    // create the user
                    var newInventor = new Inventor();

                    // set the user's local credentials
                    newInventor.email = email;
                    newInventor.password = newInventor.generateHash(password);
                    newInventor.first_name = req.body.first_name;
                    newInventor.last_name = req.body.last_name;

                    // save the user
                    newInventor.save(function(err) {
                        console.log('adding inventor to database')
                        console.log('done is:', done)
                        if (err)
                            throw err;
                        return done(null, newInventor);
                    });
                }

            });    

        });

    }));

    passport.use('inventor-local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        Inventor.findOne({ 'email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err){
                console.log('error');
                return done(err);
            }

            // if no user is found, return the message
            if (!user){
                return done(null, false, req.flash('loginMessage', 'Invalid email or password. Please try again.')); // req.flash is the way to set flashdata using connect-flash
            }

            // if the user is found but the password is wrong
            if (!user.validPassword(password)){
                console.log('incorrect password');
                return done(null, false, req.flash('loginMessage', 'Invalid email or password. Please try again.')); // create the loginMessage and save it to session as flashdata
            }

            // all is well, return successful user
            console.log('all is well with login')
            return done(null, user);
        });

    }));

};
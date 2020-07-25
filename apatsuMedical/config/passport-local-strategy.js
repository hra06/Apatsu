const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const MedUser = require('./../../models/medReg');


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'tinNum'
    },
    function(tinNum, shopPass, done){
        // find a user and establish the identity
        MedUser.findOne({tinNum: tinNum}, function(err, medUser)  {
            if (err){
                console.log('Error in finding medUser --> Passport');
                return done(err);
            }

            if (!medUser || medUser.shopPass != shopPass){
                console.log('Invalid MedUsername/shopPass');
                return done(null, false);
            }

            return done(null, medUser);
        });
    }


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(medUser, done){
    done(null, medUser.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    MedUser.findById(id, function(err, medUser){
        if(err){
            console.log('Error in finding MedUser --> Passport');
            return done(err);
        }

        return done(null, medUser);
    });
});


// Check if user is authenitcated or not
passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    // if the user is not signed in
    return res.redirect('/log-in');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.medUser = req.medUser;
    }
    else{
        res.locals.medUser = null;
    }
    next();
}

module.exports = passport;
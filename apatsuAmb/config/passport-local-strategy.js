// const passport = require('passport');

// const LocalStrategy = require('passport-local').Strategy;

// const MedUser = require('./../models/medReg');


// // authentication using passport
// passport.use(new LocalStrategy({
//         usernameField: 'email'
//     },
//     function(email, password, done){
//         // find a user and establish the identity

//         // console.log('Harsh Agarwal')
//         MedUser.findOne({email: email}, function(err, medUser)  {
//             if (err){
//                 console.log('Error in finding medUser --> Passport');
//                 return done(err);
//             }

//             if (!medUser || medUser.password != password){
//                 console.log('Invalid MedUsername/shopPass');
//                 return done(null, false);
//             }
//             // console.log(medUser)
//             return done(null, medUser);
//         });
//     }


// ));


// // serializing the user to decide which key is to be kept in the cookies
// passport.serializeUser(function(medUser, done){
//     done(null, medUser.id);
// });



// // deserializing the user from the key in the cookies
// passport.deserializeUser(function(id, done){
//     MedUser.findById(id, function(err, medUser){
//         if(err){
//             console.log('Error in finding MedUser --> Passport');
//             return done(err);
//         }

//         return done(null, medUser);
//     });
// });


// // Check if user is authenitcated or not
// passport.checkAuthentication = function(req,res,next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     // if the user is not signed in
//     return res.redirect('/log-in');
// }

// passport.setAuthenticatedUser = function(req,res,next){
//     if(req.isAuthenticated()){
//         // console.log(req.medUser)
//         res.locals.medUser = req.medUser;
//         // console.log(req.medUser)
//     }
//     else{
//         // console.log('not set')
//         res.locals.medUser = null;
//     }
//     next();
// }

// module.exports = passport;




const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('./../../models/ambReg');


// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done){
        // find a user and establish the identity
        User.findOne({email: email}, function(err, user)  {
            if (err){
                console.log('Error in finding user --> Passport');
                return done(err);
            }

            if (!user || user.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }

            return done(null, user);
        });
    }


));


// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});



// deserializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        return done(null, user);
    });
});


// Check if user is authenitcated or not
passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    // if the user is not signed in
    return res.redirect('/login');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    else{
        res.locals.user = null;
    }
    next();
}

module.exports = passport;
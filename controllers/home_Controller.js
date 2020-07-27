// Render the home/main page
const SuperAdmin = require('./../apatsSuperAdmin/models/superAdmin')

module.exports.home = function(req,res){
    // console.log(req);
    return res.render('index',{title:'Home'});
}

// Render the team Page
module.exports.team = function(req,res){
    return res.render('contact',{title:'Team'})
}

// Join Us Page
module.exports.joinUs = function(req,res){
    return res.render('join',{title:'Join Team'})
}

//Rendering the service page
module.exports.services = function(req,res){
    return res.render('services',{title:'Services'})
} 

// Render the SignUp Page
module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('login',{title:'Sign-In'})
}

// Render the SignUp Page
module.exports.logup = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('logup',{title:'Sign-Up'})
}

// Super Admin
// module.exports.sa = function(req,res){
//     SuperAdmin.create(req.body, function(err, superAdmin){
//         if(err){ console.log('error in creating the user while sigingUp'); return}

//         return res.redirect('/log-in')
//     })
// }
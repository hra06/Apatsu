// Render the home/main page
module.exports.home = function(req,res){
    // console.log(req);
    return res.render('index',{title:'Home'});
}

// Render the team Page
module.exports.team = function(req,res){
    return res.render('contact',{title:'Team'})
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
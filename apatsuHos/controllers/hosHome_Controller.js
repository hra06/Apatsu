// Render the home/main page
module.exports.home = function(req,res){
    return res.render('index',{title:'Hospitals'});
}

// Render the SignUp Page
module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('login',{title:'LogIn | Hospitals'})
}
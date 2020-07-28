// Render the home/main page
module.exports.home = function(req,res){
    return res.render('index',{title:'Shop | Medical'});
}

// Render the SignUp Page
module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('login',{title:'LogIn | Medical'})
}
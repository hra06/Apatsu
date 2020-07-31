// Render the home/main page
module.exports.home = function(req,res){
    return res.render('index',{title:'Super Admin'});
}


module.exports.login = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }

    return res.render('login',{title:'LogIn | Super Admin'})
}

module.exports.fof = function(req,res){
    return res.render('404')
}
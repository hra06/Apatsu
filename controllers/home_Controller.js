module.exports.home = function(req,res){
    // console.log(req);
    return res.render('index',{title:'Home'});
}

module.exports.team = function(req,res){
    return res.render('contact',{title:'Team'})
}

module.exports.login = function(req,res){
    return res.render('login',{title:'Sign-In'})
}
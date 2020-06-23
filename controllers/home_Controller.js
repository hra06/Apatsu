module.exports.home = function(req,res){
    // console.log(req);
    return res.render('index.ejs',{title:'Home'});
}

module.exports.team = function(req,res){
    return res.render('contact.ejs',{title:'Team'})
}
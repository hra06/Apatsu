module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.stores = function(req,res){
    if(res.locals.user.approved == 'no'){
        return res.render('notApproved',{title:'Medical stores'})
    }
    else{
        return res.send('Stores Open for Service')
    }
}


module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}
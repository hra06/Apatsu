module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}

module.exports.ambulance = function(req,res){
    if(res.locals.user.approved == 'no'){
        return res.render('notApproved',{title:'Medical Ambulance'})
    }
    else{
        return res.send('Ambulance Open for Service')
    }
}
const e = require("express");

module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}

module.exports.bookings = function(req,res){
    if(res.locals.user.approved == 'no'){
        return res.render('notApproved',{title:'Hospital'})
    }else{
        return res.send('Hospital Open for Service')
    }
}
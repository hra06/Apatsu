const User = require('../models/user');


module.exports.create = function(req,res){
    if(req.body.password != req.body.confirmPassword){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){ console.log('error in finding the user while sigingUp'); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){ console.log('error in creating the user while sigingUp'); return}

                return res.redirect('/log-in')
            })
        }else{
            return res.redirect('back');
        }
    });

}
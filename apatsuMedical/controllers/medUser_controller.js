const MedUser = require('../models/medUser');


// module.exports.create = function(req,res){
//     if(req.body.password != req.body.confirmPassword){
//         return res.redirect('back');
//     }

//     MedUser.findOne({email: req.body.email}, function(err, medUser){
//         if(err){ console.log('error in finding the medUser while sigingUp'); return}

//         if(!medUser){
//             MedUser.create(req.body, function(err, medUser){
//                 if(err){ console.log('error in creating the medUser while sigingUp'); return}

//                 return res.redirect('/log-in')
//             })
//         }else{
//             return res.redirect('back');
//         }
//     });

// }

module.exports.profile = function(req,res){
    return res.render('dash',{
        title:'Profile'
    })
}


module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}
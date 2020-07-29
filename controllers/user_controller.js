const User = require('../models/user');
const Ambulances = require('./../models/ambulance');
const Hospitals = require('./../models/hospital');
const Medicine = require('./../models/medicines');


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


module.exports.profile =async function(req,res){
    try {
        let ambulances = await Ambulances.find({user : req.user._id});
        let hospitals = await Hospitals.find({user : req.user._id});
        let medicines = await Medicine.find({user :  req.user._id});

        let objArray = []
        for(let i = 0; i< (ambulances.length + hospitals.length + medicines.length) ; i++){
            if(i<ambulances.length){
                objArray[i] = ambulances[i];
            }else if(i<(ambulances.length + hospitals.length)){
                objArray[i] = hospitals[i-ambulances.length];
            }else{
                objArray[i] = medicines[i-ambulances.length-hospitals.length]
            }
        }
        console.log(objArray)

        return res.render('dash',{
            title:'Profile',
            objArray:objArray
        })
    } catch (err) {
        
    }
}


module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}
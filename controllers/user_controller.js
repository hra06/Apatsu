const User = require('../models/user');
const Ambulances = require('./../models/ambulance');
const Hospitals = require('./../models/hospital');
const Medicine = require('./../models/medicines');
const AmbReg = require('./../models/ambReg');
const HosReg = require('./../models/hosReg');
const MedReg = require('./../models/medReg');


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
        console.log(objArray.length)
        objArray = objArray.sort()

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

module.exports.ambulance =async function(req,res){
    try{
        let ambulance =await Ambulances.findById(req.params.id)

        if(ambulance.sellerId != undefined){
            let ambReg = await AmbReg.findById(ambulance.sellerId);
            
            return res.send(ambReg);
        }

        return res.send(ambulance)
    }catch(err){
        console.log(err)
        console.log('Harsh is inside user controller of user in ambulance err')
        return res.redirect('back')
    }
}

module.exports.hospital =async function(req,res){
    try{
        let hospital =await Hospitals.findById(req.params.id)
        if(hospital.sellerId != undefined){
            let hosReg = await HosReg.findById(hospital.sellerId);
            
            return res.send(hosReg);
        }
        
        return res.send(hospital)
    }catch(err){
        console.log(err)
        console.log('Harsh is inside user controller of user in hospital err')
        return res.redirect('back')
    }
}

module.exports.medicine =async function(req,res){
    try{
        let medicine =await Medicine.findById(req.params.id)
        if(medicine.sellerId != undefined){
            let medReg = await MedReg.findById(medicine.sellerId);
            
            return res.send(medReg);
        }
        
        return res.send(medicine)
    }catch(err){
        console.log(err)
        console.log('Harsh is inside user controller of user in medicine err')
        return res.redirect('back')
    }
}
const User = require('../models/user');
const Ambulances = require('./../models/ambulance');
const Hospitals = require('./../models/hospital');
const Medicine = require('./../models/medicines');
const AmbReg = require('./../models/ambReg');
const HosReg = require('./../models/hosReg');
const MedReg = require('./../models/medReg');
const Ambulance = require('./../models/ambulance');


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
    req.flash('success','Logged in Successfully');
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    req.flash('success','You have logged out');
    return res.redirect('/');
}

module.exports.ambulance =async function(req,res){
    try{
        let ambulance =await Ambulances.findById(req.params.id)
        console.log(ambulance.sellerId)
        if(ambulance.sellerId != undefined){
            var ambReg = await AmbReg.findById(ambulance.sellerId);
        }
        console.log(ambReg)

        return res.render('orderAmbulance',{
            title : 'Ambulance Booking',
            order : ambulance,
            ambReg : ambReg
        })
    }catch(err){
        console.log(err)
        console.log('Harsh is inside user controller of user in ambulance err')
        // return res.redirect('back')
    }
}

module.exports.hospital =async function(req,res){
    try{
        let hospital =await Hospitals.findById(req.params.id)
        let hosReg = undefined
        if(hospital.sellerId != undefined){
            hosReg = await HosReg.findById(hospital.sellerId);
        }
        console.log(hosReg)
        return res.render('orderHos',{
            title : 'Bed Booking',
            order : hospital,
            hosReg : hosReg
        });
    }catch(err){
        console.log(err)
        console.log('Harsh is inside user controller of user in hospital err')
        return res.redirect('back')
    }
}

module.exports.medicine =async function(req,res){
    try{
        let medicine =await Medicine.findById(req.params.id)
        let medReg = undefined
        if(medicine.sellerId != undefined){
            medReg = await MedReg.findById(medicine.sellerId);            
        }
        
        return res.render('orderMedicine',{
            title : 'Booked Medicine',
            order : medicine,
            medReg : medReg
        })
    }catch(err){
        console.log(err)
        console.log('Harsh is inside user controller of user in medicine err')
        return res.redirect('back')
    }
}


module.exports.statusH =async function(req,res){
    try {
        let hospital = await Hospitals.findByIdAndUpdate(req.params.id , {
            orderStatus : 'Completed'
        });

        return res.redirect('back')
    } catch (err) {
        console.log('Harsh is inside statusH of usercontoller')
        return res.redirect('back')
    }
}

module.exports.statusA =async function(req,res){
    try {
        let ambulance = await Ambulances.findByIdAndUpdate(req.params.id , {
            orderStatus : 'Completed'
        });

        let ambReg = await AmbReg.findByIdAndUpdate(ambulance.sellerId,{
            currentStatus : 'waiting'
        })

        
            console.log('Harsh was here')
            console.log(ambReg)
            return res.redirect('back')
        
    } catch (err) {
        console.log('Harsh is inside statusaAof usercontoller')
        console.log(err)
        return res.redirect('back')
    }
}

module.exports.statusM =async function(req,res){
    try {
        let medicine = await Medicine.findByIdAndUpdate(req.params.id , {
            orderStatus : 'Completed'
        });

        return res.redirect('back')
    } catch (err) {
        console.log('Harsh is inside statusaAof usercontoller')
        return res.redirect('back')
    }
}
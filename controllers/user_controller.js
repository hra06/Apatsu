const User = require('../models/user');
const Ambulances = require('./../models/ambulance');
const Hospitals = require('./../models/hospital');
const Medicine = require('./../models/medicines');
const AmbReg = require('./../models/ambReg');
const HosReg = require('./../models/hosReg');
const MedReg = require('./../models/medReg');
const validator = require('validator');


module.exports.create = function(req,res){
    if(!validator.isEmail(req.body.email)){
        req.flash('error','Please Enter a valid Email Address');
        return res.redirect('back')
    }
    if(req.body.password.length < 6 || req.body.password.length >12){
        req.flash('error','Password must be length of 6 to 12 characters long')
        return res.redirect('back')
    }
    if(req.body.password != req.body.confirmPassword){
        req.flash('error','Password does not match with confirm Password');
        return res.redirect('back');
    }
    
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('error in finding the user while sigingUp');
            req.flash('error','error in signing up');
            return res.render('404')
        }

        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    req.flash('error','error in signing up');
                    console.log('error in creating the user while sigingUp');
                    return res.redirect('/404');
                }

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
        console.log(err);
        console.log('user userCont profile err');
        req.flash('error','error in profile page->try again');
        return res.redirect('/404');
    }
}


module.exports.createSession = function(req,res){
    console.log(req.body)
    if(!validator.isEmail(req.body.email)){
        req.flash('error','Please Enter a valid Email Address');
        return res.redirect('back')
    }
    if(req.body.password.length < 6 || req.body.password.length >12){
        req.flash('error','Password must be length of 6 to 12 characters long')
        return res.redirect('back')
    }
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
        req.flash('error','try again');
        return res.redirect('/404');
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
        console.log('Harsh is inside user controller of user in hospital err');
        req.flash('error','try again');
        return res.redirect('/404');
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
        console.log('Harsh is inside user controller of user in medicine err');
        req.flash('error','try again');
        return res.redirect('/404');
    }
}


module.exports.statusH =async function(req,res){
    try {
        let hospital = await Hospitals.findByIdAndUpdate(req.params.id , {
            orderStatus : 'Completed'
        });

        req.flash('success', 'Completed')
        return res.redirect('back')
    } catch (err) {
        console.log('Harsh is inside statusH of usercontoller');
        req.flash('error','try again');
        return res.redirect('/404');
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

            req.flash('success', 'Completed')
            console.log('Harsh was here')
            console.log(ambReg)
            return res.redirect('back');
        
    } catch (err) {
        console.log('Harsh is inside statusaAof usercontoller')
        console.log(err);
        req.flash('error','try again');
        return res.redirect('/404');
    }
}

module.exports.statusM =async function(req,res){
    try {
        let medicine = await Medicine.findByIdAndUpdate(req.params.id , {
            orderStatus : 'Completed'
        });

        req.flash('success', 'Completed')
        return res.redirect('back')
    } catch (err) {
        console.log('Harsh is inside statusaAof usercontoller')
        req.flash('error','try again');
        return res.redirect('/404');
    }
}
const Medicine = require('../models/medicines');
const Ambulance = require('../models/ambulance')

module.exports.medicine = function(req,res){
    return res.render('medicine',{title:'Medicines'})
}

module.exports.ambulance = function(req,res){
    return res.render('ambulance',{title:'Ambulance'})
}


module.exports.checkup = function(req,res){
    return res.render('checkup',{title:'Checkup'})
}


module.exports.hospital = function(req,res){
    return res.render('hospitals',{title:'Hospital'})
}

module.exports.medicineOrder = function(req,res){
    Medicine.create(req.body, function(err,medicine){
        if(err){
            console.log('error in ordering the medicine');
        }
        
        return res.redirect('/')
    })
}


module.exports.ambulanceCall = function(req,res){
    Ambulance.create(req.body, function(err,ambulance){
        if(err){
            console.log('Error in Calling the Ambulance');
        }
        // console.log(req.body)
        
        return res.redirect('/')
    })
}
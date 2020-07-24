const Medicine = require('../models/medicines');

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
const Medicine = require('../models/medicines');
const Ambulance = require('../models/ambulance');
const Hospital = require('./../models/hospital');

module.exports.medicine = function(req,res){
    return res.render('medicine',{title:'Medicines'});
}

module.exports.ambulance = function(req,res){
    return res.render('ambulance',{title:'Ambulance'});
}


module.exports.checkup = function(req,res){
    return res.render('checkup',{title:'Checkup'});
}


module.exports.hospital = function(req,res){
    return res.render('hospitals',{title:'Hospital'})
}

module.exports.medicineOrder = function(req,res){
    req.body.model = 'Medicines';
    req.body.requestApproved = 'no';
    req.body.user = req.user.id;
    req.body.orderStatus = 'Waiting';
    Medicine.create(req.body, function(err,medicine){
        if(err){
            console.log('error in ordering the medicine');
            return res.redirect('back');
        }
        
        return res.redirect('/')
    });
}


module.exports.ambulanceCall = function(req,res){
    req.body.model = 'Ambulance';
    req.body.requestApproved = 'no';
    req.body.user = req.user.id;
    req.body.orderStatus = 'Waiting';
    Ambulance.create(req.body, function(err,ambulance){
        if(err){
            console.log('Error in Calling the Ambulance');
            console.log(err);
            return res.redirect('back');
        }
        // console.log(req.body)
        
        return res.redirect('/')
    });
}


module.exports.bookBed = function(req,res){
    req.body.model = 'Hospital'
    req.body.requestApproved = 'no';
    req.body.user = req.user._id;
    req.body.orderStatus = 'Waiting';
    // req.body.sellerId = null;
    Hospital.create(req.body, function(err,hospital){
        if(err){
            console.log('Error in Booking the bed in Hospital');
            return res.redirect('back')
        }
        // console.log(req.body)
        
        return res.redirect('/')
    });
}
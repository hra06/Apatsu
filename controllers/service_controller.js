const Medicine = require('../models/medicines');
const Ambulance = require('../models/ambulance');
const Hospital = require('./../models/hospital');
const AmbReg = require('./../models/ambReg');
const HosReg = require('./../models/hosReg');
const MedReg = require('./../models/medReg');

module.exports.medicalStores =function(req, res){
    MedReg.find({approved:'yes'},function(err,medReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController MedicalStores')
            console.log(err)
            return res.redirect('back')
        }

        console.log('Harsh is inside ServiceController MedicaleList')
        console.log(medReg);
        
        return res.render('medStores',{
            title:'Medical Stores',
            medStores :medReg,
            ambulances : undefined,
            hospitals: undefined
        })
    })
}

module.exports.medicine = function(req,res){
    return res.render('medicine',{title:'Medicines'});
}

module.exports.ambulanceList = function(req,res){
    AmbReg.find({approved:'yes'},function(err,ambReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController AmbulanceList')
            console.log(err)
            return res.redirect('back')
        }

        console.log('Harsh is inside ServiceController AmbulanceList')
        console.log(ambReg);
        
        return res.render('ambStore',{
            title:'Ambulances',
            ambulances :ambReg,
            hospitals: undefined,
            medStores : undefined
        })
    })
}


module.exports.hospitals = function(req,res){
    HosReg.find({approved:'yes'},function(err,hosReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController Hospitals')
            console.log(err)
            return res.redirect('back')
        }

        console.log('Harsh is inside ServiceController HospitalList')
        console.log(hosReg);
        
        return res.render('hosStore',{
            title:'Ambulances',
            hospitals :hosReg,
            ambulances : undefined
        })
    })
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

// Searh Queries @ form Pincode

// Search for Medical Stores
module.exports.medicalPincode =function(req, res){
    req.body.approved = 'yes';
    console.log(req.body);
    MedReg.find(req.body,function(err,medReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController Medical Search Pincode')
            console.log(err)
            return res.redirect('back')
        }

        console.log('Harsh is inside  not in err ServiceController Medical Search Pincode')
        console.log(medReg);
        
        return res.render('medStores',{
            title:'Medical Stores',
            medStores :medReg,
            ambulances : undefined,
            hospitals: undefined
        })
    })
}

// Search for Ambulances
module.exports.ambulanceListPincode = function(req,res){
    req.body.approved = 'yes';
    console.log(req.body);

    AmbReg.find(req.body,function(err,ambReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController AmbulanceList Search Pincode')
            console.log(err)
            return res.redirect('back')
        }

        console.log('Harsh is inside ServiceController AmbulanceList Search Pincode')
        console.log(ambReg);
        
        return res.render('ambStore',{
            title:'Ambulances',
            ambulances :ambReg,
            hospitals: undefined,
            medStores : undefined
        })
    })
}

// Search Hospitals at Pincode
module.exports.hospitalsPincode = function(req,res){
    req.body.approved = 'yes';
    console.log(req.body);

    HosReg.find(req.body,function(err,hosReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController Hospitals Search Pincode')
            console.log(err)
            return res.redirect('back')
        }

        console.log('Harsh is inside ServiceController HospitalList Search Pincode')
        console.log(hosReg);
        
        return res.render('hosStore',{
            title:'Ambulances',
            hospitals :hosReg,
            ambulances : undefined
        })
    })
}

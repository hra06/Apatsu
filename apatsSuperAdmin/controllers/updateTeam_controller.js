const MedReg = require('../../models/medReg');
const HosReg = require('../../models/hosReg');
const AmbReg = require('../../models/ambReg');
const SuperAdmin = require('../models/superAdmin');



// Approve Store
module.exports.approveStore = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Approve store');
            return res.redirect('back');
        }

        MedReg.findByIdAndUpdate(req.params.id,{approved:'yes'},function(err,medReg){
            if(err){
                console.log('Not Approved the Medical Store');
                return res.redirect('back');
            }

            console.log('Store added to Forces');
            return res.redirect('back')
        });
    });   
}

// Cancel Store
module.exports.cancelStore = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Cancel store');
            return res.redirect('back');
        }

        MedReg.findByIdAndUpdate(req.params.id,{approved:'no'},function(err,medReg){
            if(err){
                console.log('Not canceled the Medical Store');
                return res.redirect('back');
            }

            console.log('Store removed from Forces');
            return res.redirect('back')
        });
    });   
}



// Approve Hospital
module.exports.approveHospital = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Approve Hospital');
            return res.redirect('back');
        }

        HosReg.findByIdAndUpdate(req.params.id,{approved:'yes'},function(err,hosReg){
            if(err){
                console.log('Not Approved the Hospital');
                return res.redirect('back');
            }

            console.log('Hospital added to Forces');
            return res.redirect('back')
        });
    });   
}

// Cancel Hospital
module.exports.cancelHospital = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Cancel Hospital');
            return res.redirect('back');
        }

        HosReg.findByIdAndUpdate(req.params.id,{approved:'no'},function(err,hosReg){
            if(err){
                console.log('Not canceled the Hospital');
                return res.redirect('back');
            }

            console.log('Hospital removed from Forces');
            return res.redirect('back')
        });
    });   
}



// Approve Ambulance
module.exports.approveAmbulance = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Approve Ambulance');
            return res.redirect('back');
        }

        AmbReg.findByIdAndUpdate(req.params.id,{approved:'yes'},function(err,ambReg){
            if(err){
                console.log('Not Approved the Ambulance');
                return res.redirect('back');
            }

            console.log('Ambulance added to Forces');
            return res.redirect('back')
        });
    });   
}

// Cancel Ambulance
module.exports.cancelAmbulance = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Cancel Ambulance');
            return res.redirect('back');
        }

        AmbReg.findByIdAndUpdate(req.params.id,{approved:'no'},function(err,ambReg){
            if(err){
                console.log('Not canceled the Ambulance');
                return res.redirect('back');
            }

            console.log('Ambulance removed from Forces');
            return res.redirect('back')
        });
    });   
}
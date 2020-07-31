const MedReg = require('../../models/medReg');
const HosReg = require('../../models/hosReg');
const AmbReg = require('../../models/ambReg');
const SuperAdmin = require('../models/superAdmin');



// Approve Store
module.exports.approveStore = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Approve store');
            req.flash('error','Try Again!');
            return res.redirect('/404');
        }

        MedReg.findByIdAndUpdate(req.params.id,{approved:'yes'},function(err,medReg){
            if(err){
                console.log('Not Approved the Medical Store');
                req.flash('error','Try Again!');
                return res.redirect('/404');
            }

            console.log('Store added to Forces');
            req.flash('success','Store added to forces');
            return res.redirect('back')
        });
    });   
}

// Cancel Store
module.exports.cancelStore = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Cancel store');
            req.flash('error','Try Again!');
            return res.redirect('/404');
        }

        MedReg.findByIdAndUpdate(req.params.id,{approved:'no'},function(err,medReg){
            if(err){
                console.log('Not canceled the Medical Store');
                req.flash('error','Try Again!');
                return res.redirect('/404');
            }

            console.log('Store removed from Forces');
            req.flash('success','Store added to forces');
            return res.redirect('back')
        });
    });   
}



// Approve Hospital
module.exports.approveHospital = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Approve Hospital');
            req.flash('error','Try Again!');
            return res.redirect('/404');
        }

        HosReg.findByIdAndUpdate(req.params.id,{approved:'yes'},function(err,hosReg){
            if(err){
                console.log('Not Approved the Hospital');
                req.flash('error','Try Again!');
                return res.redirect('/404');
            }

            console.log('Hospital added to Forces');
            req.flash('success','Hospital added to forces');
            return res.redirect('back')
        });
    });   
}

// Cancel Hospital
module.exports.cancelHospital = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Cancel Hospital');
            req.flash('error','Try Again!');
            return res.redirect('/404');
        }

        HosReg.findByIdAndUpdate(req.params.id,{approved:'no'},function(err,hosReg){
            if(err){
                console.log('Not canceled the Hospital');
                req.flash('error','Try Again!');
                return res.redirect('/404');
            }

            console.log('Hospital removed from Forces');
            req.flash('success','Hospital removed form forces');
            return res.redirect('back')
        });
    });   
}



// Approve Ambulance
module.exports.approveAmbulance = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Approve Ambulance');
            req.flash('error','Try Again!');
            return res.redirect('/404');
        }

        AmbReg.findByIdAndUpdate(req.params.id,{approved:'yes'},function(err,ambReg){
            if(err){
                console.log('Not Approved the Ambulance');
                req.flash('error','Try Again!');
                return res.redirect('/404');
            }

            console.log('Ambulance added to Forces');
            req.flash('success','Ambulance added to Forces');
            return res.redirect('back');
        });
    });   
}

// Cancel Ambulance
module.exports.cancelAmbulance = function(req,res){
    SuperAdmin.findById(req.user.id ,function(err,superAdmin){
        if(err){
            console.log('error in Finding the super Admin --> Cancel Ambulance');
            req.flash('error','Try Again!');
            return res.redirect('/404');
        }

        AmbReg.findByIdAndUpdate(req.params.id,{approved:'no'},function(err,ambReg){
            if(err){
                console.log('Not canceled the Ambulance');
                req.flash('error','Try Again!');
                return res.redirect('/404');
            }

            console.log('Ambulance removed from Forces');
            req.flash('success','Ambulance removed form forces');
            return res.redirect('back')
        });
    });   
}
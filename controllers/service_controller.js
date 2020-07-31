const Medicine = require('../models/medicines');
const Ambulance = require('../models/ambulance');
const Hospital = require('./../models/hospital');
const AmbReg = require('./../models/ambReg');
const HosReg = require('./../models/hosReg');
const MedReg = require('./../models/medReg');
const validator = require('validator');

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


// Medicine Form
module.exports.medicine = function(req,res){
    return res.render('medicine',{
        title:'Medicines',
        pincode : '',
        data : ''
    });
}

// Ambulance form
module.exports.ambulance = function(req,res){
    return res.render('ambulance',{
        title:'Ambulance',
        pincode : '',
        data : ''
    });
}

// Self CheckUp
// module.exports.checkup = function(req,res){
//     return res.render('checkup',{title:'Checkup'});
// }

// Hospital Form
module.exports.hospital = function(req,res){
    let id = req.params.id
    return res.render('hospitals',{
        title:'Hospital',
        id : req.params.id
    })
}

// Submit Form
module.exports.medicineOrder = function(req,res){
    if(req.body.patientAge.length > 2 || !validator.isNumeric(req.body.patientAge)){
        req.flash('error','Really! Age')
        return res.redirect('back');
    }
    if(req.body.patientMobile.length != 10 || !validator.isNumeric(req.body.patientMobile)){
        req.flash('error','Phone No. must be 10 digits long and numeric')
        return res.redirect('back');
    }
    if(!validator.isEmail(req.body.patientEmail)){
        req.flash('error','Enter the valid Email Address')
        return res.redirect('back');
    }
    if(req.body.patientPincode.length != 6 || !validator.isNumeric(req.body.patientPincode)){
        req.flash('error','Error Please fill again')
        return res.redirect('back');
    }

    req.body.model = 'Medicines';
    req.body.requestApproved = 'no';
    req.body.user = req.user.id;
    req.body.orderStatus = 'Waiting';
    Medicine.create(req.body, function(err,medicine){
        if(err){
            console.log('error in ordering the medicine');
            req.flash('error','try again');
            return res.redirect('/404');
        }
        
        return res.redirect('/')
    });
}

// Submit Form
module.exports.ambulanceCall = function(req,res){
    if(req.body.patientAge.length > 2 || !validator.isNumeric(req.body.patientAge)){
        req.flash('error','Really! Age')
        return res.redirect('back');
    }
    if(req.body.patientMob.length != 10 || !validator.isNumeric(req.body.patientMob)){
        req.flash('error','Phone No. must be 10 digits long and numeric')
        return res.redirect('back');
    }
    if(!validator.isEmail(req.body.patientEmail)){
        req.flash('error','Enter the valid Email Address')
        return res.redirect('back');
    }
    if(req.body.patientPincode.length != 6 || !validator.isNumeric(req.body.patientPincode)){
        req.flash('error','Error Please fill again')
        return res.redirect('back');
    }

    req.body.model = 'Ambulance';
    req.body.requestApproved = 'no';
    req.body.user = req.user.id;
    req.body.orderStatus = 'Waiting';
    Ambulance.create(req.body, function(err,ambulance){
        if(err){
            console.log('Error in Calling the Ambulance');
            console.log(err);
            req.flash('error','try again');
            return res.redirect('/404');
        }
        // console.log(req.body)
        
        return res.redirect('/')
    });
}

// Submit Bed
module.exports.bookBed = function(req,res){
    if(req.body.patientAge.length > 2 || !validator.isNumeric(req.body.patientAge)){
        req.flash('error','Really! Age')
        return res.redirect('back');
    }
    if(req.body.patientMob.length != 10 || !validator.isNumeric(req.body.patientMob)){
        req.flash('error','Phone No. must be 10 digits long and numeric')
        return res.redirect('back');
    }
    if(!validator.isEmail(req.body.patientEmail)){
        req.flash('error','Enter the valid Email Address')
        return res.redirect('back');
    }
    if(req.body.patientPincode.length != 6 || !validator.isNumeric(req.body.patientPincode)){
        req.flash('error','Pincode must be 6 digits long and numeric')
        return res.redirect('back');
    }

    req.body.model = 'Hospital'
    req.body.requestApproved = 'no';
    req.body.user = req.user._id;
    req.body.orderStatus = 'Waiting';
    // req.body.sellerId = null;
    Hospital.create(req.body, function(err,hospital){
        if(err){
            console.log('Error in Booking the bed in Hospital');
            req.flash('error','try again');
            return res.redirect('/404');
        }
        // console.log(req.body)
        
        return res.redirect('/')
    });
}

// Searh Queries @ form Pincode

// Search for Medical Stores
module.exports.medicalPincode =function(req, res){
    console.log(req.body.shopPincode)
    if(!validator.isNumeric(req.body.shopPincode)){
        req.flash('error','Enter a Numeric value')
        return res.redirect('back')
    }
    if(req.body.shopPincode.length != 6){
        req.flash('error','Enter a 6 digit numeber');
        return res.redirect('back')
    }

    req.body.approved = 'yes';
    console.log(req.body);
    MedReg.find(req.body,function(err,medReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController Medical Search Pincode');
            console.log(err);
            req.flash('error','try again');
            return res.redirect('/404');
        }

        if(medReg == undefined || medReg == ''){
            req.flash('success','No Stores Avaliabe at this Pincode')
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
    console.log(req.body.ambPincode);

    if(!validator.isNumeric(req.body.ambPincode)){
        req.flash('error','Enter a Numeric value')
        return res.redirect('back')
    }
    if(req.body.ambPincode.length != 6){
        req.flash('error','Enter a 6 digit numeber');
        return res.redirect('back')
    }


    req.body.approved = 'yes';
    console.log(req.body);

    AmbReg.find(req.body,function(err,ambReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController AmbulanceList Search Pincode')
            console.log(err)
            req.flash('error','try again');
            return res.redirect('/404');
        }

        if(ambReg == undefined || ambReg == ''){
            req.flash('success','No Stores Avaliabe at this Pincode')
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
    console.log(req.body.hosPincode);
    
    if(!validator.isNumeric(req.body.hosPincode)){
        req.flash('error','Enter a Numeric value')
        return res.redirect('back')
    }
    if(req.body.hosPincode.length != 6){
        req.flash('error','Enter a 6 digit numeber');
        return res.redirect('back')
    }

    req.body.approved = 'yes';
    console.log(req.body);

    HosReg.find(req.body,function(err,hosReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController Hospitals Search Pincode')
            console.log(err)
            req.flash('error','try again');
            return res.redirect('/404');
        }


        if(hosReg == undefined || hosReg == ''){
            req.flash('success','No Stores Avaliabe at this Pincode')
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

module.exports.viewMedStore = function(req,res){
    MedReg.findById(req.params.id,function(err,medReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController view med store ')
            console.log(err)
            req.flash('error','try again');
            return res.redirect('/404');
        }

        console.log('Harsh is inside  not in err ServiceController Medical view med store')
        console.log(medReg);
        
        return res.render('store',{
            title:'Medical Store',
            store :medReg
        })
    })
}

module.exports.viewHospital = function(req,res){
    HosReg.findById(req.params.id,function(err,hosReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController view hospital')
            console.log(err)
            req.flash('error','try again');
            return res.redirect('/404');
        }

        console.log('Harsh is inside  not in err ServiceController Medical view hospital')
        console.log(hosReg);
        
        return res.render('hosPage',{
            title:'Hospital',
            hospital :hosReg
        })
    })
}

// viewAmbulance
module.exports.viewAmbulance = function(req,res){
    AmbReg.findById(req.params.id,function(err,ambReg){
        
        if(err){
            console.log('Harsh is Inside User serviceController view Ambulance')
            console.log(err)
            req.flash('error','try again');
            return res.redirect('/404');
        }

        console.log('Harsh is inside  not in err ServiceController view hospital')
        console.log(ambReg);
        
        return res.render('ambPage',{
            title:'Ambulance',
            ambulance :ambReg
        })
    })
}

// Search Pincode for Ambulance form
module.exports.formAmbulance = function(req,res){
    console.log(req.body)
    AmbReg.findOne(req.body,function(err,ambReg){
        if(err){
            console.log("harsh is searching for an ambulanceBook @ pincode form")
            console.log(err);
            req.flash('error','try again');
            return res.redirect('/404')
        }

        if(ambReg == null){
            console.log('Not found any Ambulance in your Pincode')
            return res.render('ambulance',{
                title:'Ambulance',
                pincode : '',
                data : 'There is not any ambulance at current Pincode'
            });
        }else{
            console.log('You can Fill the ambulance form now');
            return res.render('ambulance',{
                title:'Ambulance',
                pincode :req.body.ambPincode,
                data : ''
            });
        }
    })
}

// Search Pincode for Medicines form
module.exports.formMedicine = function(req,res){
    console.log(req.body.shopPincode)
    if(!validator.isNumeric(req.body.shopPincode)){
        req.flash('error','Enter a Numeric value')
        return res.redirect('back')
    }
    if(req.body.shopPincode.length != 6){
        req.flash('error','Enter a 6 digit numeber');
        return res.redirect('back')
    }
    MedReg.findOne(req.body,function(err,medReg){
        if(err){
            console.log("harsh is searching for an fromedine @ pincode form")
            console.log(err);
            req.flash('error','try again');
            return res.redirect('/404')
        }

        if(medReg == null){
            console.log('Not found any Medicine Order in your Pincode')
            return res.render('medicine',{
                title:'Medicines',
                pincode : '',
                data : 'There is not any Medical Store at your current Pincode'
            });
        }else{
            console.log('You can Fill the ambulance form now');
            return res.render('medicine',{
                title:'Medicines',
                pincode :req.body.shopPincode,
                data : ''
            });
        }
    });
}
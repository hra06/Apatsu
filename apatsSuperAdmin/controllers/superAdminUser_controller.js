const MedReg = require('./../../models/medReg');
const AmbReg = require('./../../models/ambReg');
const HosReg = require('./../../models/hosReg');

// Session Creation & Deletion
module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}

// Store Requests
module.exports.stores = async function(req,res){
    try{
        let notAppStores = await MedReg.find({approved :'no'})
        .sort('-createdAt');

        return res.render('stores',{
            title:'Approve Medical Stores',
            notAppStores :notAppStores,
            appStores:''
        })

    }catch(err){
        console.log('Error Super Admin Stores');
        console.log(err)
    }    
}

module.exports.cancelStores = async function(req,res){
    try{
        let appStores = await MedReg.find({approved :'yes'})
        .sort('-createdAt');

        // console.log(appStores)

        return res.render('stores',{
            title:'Cancel Medical Stores',
            notAppStores :'',
            appStores:appStores
        })

    }catch(err){
        console.log('Error Super Admin Cancel Stores');
        console.log(err)
    }    
}

// Ambulance Request
module.exports.ambulances = async function(req,res){
    try{
        let notAppAmb = await AmbReg.find({approved :'no'})
        .sort('-createdAt');


        console.log(notAppAmb)

        return res.render('ambulances',{
            title:'Approve Ambulances',
            notAppAmb :notAppAmb,
            appAmb:''
        })

    }catch(err){
        console.log('Error Super Admin ambulances');
        console.log(err)
    }    
}

module.exports.cancelAmbulances = async function(req,res){
    try{
        let appAmb = await AmbReg.find({approved :'yes'})
        .sort('-createdAt');

        console.log(appAmb)
        // console.log('appAmb Harsh as Super Admin')

        return res.render('ambulances',{
            title:'Cancel Ambulances',
            notAppAmb :'',
            appAmb:appAmb
        })

    }catch(err){
        console.log('Error Super Admin Cancel Ambulances');
        console.log(err)
    }    
}

// Hospitals Request
module.exports.hospitals = async function(req,res){
    try{
        let notAppHos = await HosReg.find({approved :'no'})
        .sort('-createdAt');


        console.log(notAppHos)

        return res.render('hospitals',{
            title:'Approve Hospitals',
            notAppHos :notAppHos,
            appHos:''
        })

    }catch(err){
        console.log('Error Super Admin hospitals');
        console.log(err)
    }    
}

module.exports.cancelHospitals = async function(req,res){
    try{
        let appHos = await HosReg.find({approved :'yes'})
        .sort('-createdAt');

        console.log(appHos)
        console.log('appAmb Harsh as Super Admin')

        return res.render('hospitals',{
            title:'Cancel Ambulances',
            notAppHos :'',
            appHos:appHos
        })

    }catch(err){
        console.log('Error Super Admin Cancel Hospitals');
        console.log(err)
    }    
}

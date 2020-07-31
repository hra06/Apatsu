const MedReg = require('../models/medReg');
const AmbReg = require('../models/ambReg');
const HosReg = require('../models/hosReg');


// laod medical reg page
module.exports.medReg = function(req,res){
    return res.render('medReg',{title:'Medical Shop Reg'})
}


// Fill for medical shop reg
module.exports.createMed = function(req,res){
    req.body.approved = 'no'
    console.log(req.body)
    if(req.body.password != req.body.cnfrmPass){
        console.log('Password does not match with confirm Password');
        return res.redirect('back');
    }else{
        MedReg.findOne({email:req.body.email }, function(err, medReg){
            if(err){
                console.log('error in finding the Medical Shop while signingUp');
                console.log(err)
                return res.redirect('back');
            }

            if(!medReg){
                MedReg.create(req.body, function(err,medReg){
                    if(err){
                        console.log('error in Creating the medical shop while signingUp');
                        console.log(err)
                        return res.redirect('back');
                    }
                    return res.redirect('/');
                });
            }else{
                return res.redirect('back');
            }
        });
    }
}

// Load the ambulance reg page
module.exports.ambReg = function(req,res){
    return res.render('ambReg',{ title: 'Join Ambulance'})
}

// Fill for Ambulance reg
module.exports.createAmb = function(req,res){
    req.body.approved = 'no'
    req.body.currentStatus = 'waiting'
    console.log(req.body)
    if(req.body.password != req.body.cnfrmPass){
        console.log('Password does not match with confirm Password');
        return res.redirect('back');
    }else{
        // console.log('Passord matches')
        AmbReg.findOne({email:req.body.email}, function(err, ambReg){
            if(err){
                console.log('error in finding the Medical Shop while signingUp');
                return;
            }

            if(!ambReg){
                AmbReg.create(req.body, function(err,ambReg){
                    if(err){
                        console.log(err);
                        return;
                    }
                    return res.redirect('/');
                });
            }else{
                return res.redirect('back');
            }
        });
    }
}

// laod Hospital Reg page
module.exports.hosReg = function(req,res){
    console.log('Harsh')
    return res.render('hosReg',{title:'Hospital Reg'})
}


// Fill for Hospital reg
module.exports.createHos = function(req,res){
    req.body.approved = 'no'
    console.log(req.body)
    if(req.body.password != req.body.cnfrmPass){
        console.log('Password does not match with confirm Password');
        return res.redirect('back');
    }else{
        // console.log('Passord matches')
        HosReg.findOne({email:req.body.email}, function(err, hosReg){
            if(err){
                console.log('error in finding the Medical Shop while signingUp');
                return;
            }

            if(!hosReg){
                HosReg.create(req.body, function(err,hosReg){
                    if(err){
                        console.log(err);
                        return;
                    }
                    return res.redirect('/');
                });
            }else{
                return res.redirect('back');
            }
        });
    }
}
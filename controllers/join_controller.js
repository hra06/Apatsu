const Medicine = require('../models/medicines');
const Ambulance = require('../models/ambulance');
const MedReg = require('../models/medReg');

module.exports.medReg = function(req,res){
    return res.render('medReg',{title:'Medical Shop Reg'})
}

module.exports.createMed = function(req,res){
    req.body.approved = 'no'
    console.log(req.body)
    if(req.body.shopPass != req.body.cnfrmPass){
        console.log('Password does not match with confirm Password');
        return res.redirect('back');
    }else{
        MedReg.findOne({tinNum:req.body.tinNum }, function(err, medReg){
            if(err){
                console.log('error in finding the Medical Shop while signingUp');
                return;
            }

            if(!medReg){
                MedReg.create(req.body, function(err,medReg){
                    if(err){
                        console.log('error in Creating the medical shop while signingUp');
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

// module.exports.ambulance = function(req,res){
//     return res.render('ambulance',{title:'Ambulance'})
// }


// module.exports.checkup = function(req,res){
//     return res.render('checkup',{title:'Checkup'})
// }


// module.exports.hospital = function(req,res){
//     return res.render('hospitals',{title:'Hospital'})
// }

// module.exports.medicineOrder = function(req,res){
//     Medicine.create(req.body, function(err,medicine){
//         if(err){
//             console.log('error in ordering the medicine');
//         }
        
//         return res.redirect('/')
//     })
// }


// module.exports.ambulanceCall = function(req,res){
//     Ambulance.create(req.body, function(err,ambulance){
//         if(err){
//             console.log('Error in Calling the Ambulance');
//         }
//         // console.log(req.body)
        
//         return res.redirect('/')
//     })
// }
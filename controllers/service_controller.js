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
    return res.render('hospital',{title:'Hospital'})
}
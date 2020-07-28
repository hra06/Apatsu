const Ambulances = require('./../../models/ambulance');

module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    return res.redirect('/');
}

// Open Booking Page
module.exports.ambulance =async function(req,res){
    if(res.locals.user.approved == 'no'){
        return res.render('notApproved',{title:'Medical Ambulance'})
    }
    else{
        try{
            let myBooking = await Ambulances.find({patientPincode:req.user.ambPincode,requestApproved:'no'});
            console.log('Harsh ambulance Details ambUser Controller')
            
            return res.render('ambu',{
                title:'Book Ambulance',
                myAmb: myBooking
            });
        }catch{
            console.log('ambulance Catch Err Block in ambUser Controller')
            console.log(err)
            return res.redirect('back');
        }
    }
}

// Open Particular Booking
module.exports.order = async function(req,res){
    try{
        let order = await Ambulances.findById(req.params.id);
        // console.log(order)
        return res.render('orderAmbulance',{
            title: 'Order Details',
            order: order
        })
    }catch{
        console.log('in ambUser Controller in order Catch');
        console.log(err)
        return res.redirect('back')
    }
}

// Book Your Ambulance
// Accept Order
module.exports.accept =async function(req,res){
    try{
        let ambulances = await Ambulances.findByIdAndUpdate(req.params.id, {
            sellerId: req.user.id,
            requestApproved:'Yes',
            orderStatus : 'Confirmed'
        });
        
        return res.redirect('back');
        
    }catch{
        console.log('In ambUser Controller in accept Catch')
        console.log(err)
        return res.redirect('back');
    }
}
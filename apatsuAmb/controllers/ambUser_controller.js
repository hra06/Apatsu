const Ambulances = require('./../../models/ambulance');
const AmbReg = require('./../../models/ambReg')

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
        return res.render('notApproved',{title:'Medical Ambulance',status :'notApproved'})
    }else if(req.user.currentStatus == 'booked'){
        return res.render('notApproved',{title:'Medical Ambulance' , status :'booked'})
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
        console.log('Inside if of open particular booking')
        if(order.sellerId == req.user.id || order.sellerId == undefined){
            return res.render('orderAmbulance',{
                title: 'Order Details',
                order: order
            })
        }else{
            return res.redirect('/');
        }
        
    }catch{
        console.log('in ambUser Controller in order Catch');
        console.log(err)
        return res.redirect('/')
    }
}

// Book Your Ambulance
// Accept Order
module.exports.accept =async function(req,res){
    try{
        if(req.user.currentStatus == 'booked'){
            console.log('Finish Previous booking to accept new Booking')
            return res.redirect('/');
        }else{
            let ambulances = await Ambulances.findByIdAndUpdate(req.params.id, {
                sellerId: req.user.id,
                requestApproved:'Yes',
                orderStatus : 'Confirmed'
            });
            
            let ambReg = await AmbReg.findByIdAndUpdate(req.user._id,{
                currentStatus : 'booked'
            })
        
            return res.redirect('back');
        }
        
    }catch{
        console.log('In ambUser Controller in accept Catch')
        console.log(err)
        return res.redirect('back');
    }
}

// Current Booking
module.exports.currentBooking =async function(req,res){
    try{
        let order = await Ambulances.findOne({sellerId:req.user.id,orderStatus:'Confirmed'});
        console.log('Harsh is Inside of Current Booking try block')
        console.log(order);

        return res.render('orderAmbulance',{            
            order: order,
            title: 'Current Booking'
        })
    }catch{
        console.log('In ambUser Controller in currentBooking Catch')
        console.log(err)
        return res.redirect('back');
    }
}

// Open Previous Booking Page
module.exports.previousBookings =async function(req,res){
    try{
        let myBooking = await Ambulances.find({sellerId:req.user.id,orderStatus:'Completed'});
        console.log('Harsh previousBookings Details ambUser Controller')
        console.log(myBooking)
        
        return res.render('ambu',{
            title:'Previous Bookings',
            myAmb: myBooking
        });
    }catch{
        console.log('previousBookings Catch Err Block in ambUser Controller')
        console.log(err)
        return res.redirect('back');
    }
}
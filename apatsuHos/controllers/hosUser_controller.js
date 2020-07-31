const Hospitals = require('./../../models/hospital')

module.exports.createSession = function(req,res){
    req.flash('success','Logged In successfully');
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout();
    req.flash('success','Logged Out successfully');
    return res.redirect('/');
}

//  Create New Bookings
module.exports.bookings =async function(req,res){
    if(res.locals.user.approved == 'no'){
        return res.render('notApproved',{title:'Hospital'})
    }else{
        try{
            let hosBook = await Hospitals.find({patientPincode:req.user.hosPincode,requestApproved:'no'});
            console.log('Harsh bookings Details hosUser Controller')
            
            console.log(hosBook)

            return res.render('hospital',{
                title:'New Bookings',
                hosBook: hosBook
            });
        }catch{
            console.log('bookings Catch Err Block in hosUser Controller')
            console.log(err)
            return res.redirect('back');
        }
    }
}

// Open Particular Booking
module.exports.order = async function(req,res){
    try{
        let order = await Hospitals.findById(req.params.id);
        
        // console.log(order.sellerId);
        // console.log(order.user)
        // console.log(req.user.id)

        if(order.sellerId == req.user.id || order.sellerId == undefined){
            console.log('Harsh is inside if of open particular booking of Hospital')
            return res.render('bookHos',{
                title: 'Order Details',
                order: order
            })
        }else{
            console.log('inside else of order hosUser Controller')
            return res.redirect('/');
        }
        
    }catch{
        console.log('in hosUser Controller in order Catch');
        console.log(err)
        return res.redirect('/')
    }
}

// Book Your Hospitals
// Accept Order
module.exports.accept =async function(req,res){
    try{
        let find = await Hospitals.findById(req.params.id);
        if(find.requestApproved == 'no'){
            let accept = await Hospitals.findByIdAndUpdate(req.params.id, {
                sellerId: req.user.id,
                requestApproved:'Yes',
                orderStatus : 'Confirmed'
            });
        }
        
        return res.redirect('back');
        
    }catch{
        console.log('In hosUser Controller in accept Catch')
        console.log(err)
        return res.redirect('back');
    }
}

// Confirmed Bookings Page 
module.exports.confirmedBookings =async function(req,res){
    try{
        let confirmedOrder = await Hospitals.find({sellerId:req.user.id,orderStatus:'Confirmed'});
        // console.log(confirmedOrder)
        console.log('Harsh confirmedBookings Details hosUser Controller')
        return res.render('hospital',{
            title:'Confirmed Orders',
            hosBook: confirmedOrder
        });
    }catch{
        console.log('confirmedBookings Catch Err Block in hosUser Controller')
        console.log(err)
        return res.redirect('back');
    }
}

// Previous Bookings Page 
module.exports.previousBookings =async function(req,res){
    try{
        let previousBookings = await Hospitals.find({sellerId:req.user.id,orderStatus:'Completed'});
        
        // console.log(previousBookings)
        console.log('Harsh previousBookings Details hosUser Controller')

        return res.render('hospital',{
            title:'Confirmed Orders',
            hosBook: previousBookings
        });

    }catch{

        console.log('previousBookings Catch Err Block in hosUser Controller')
        console.log(err)

        return res.redirect('back');
        
    }
}
const Medicines = require('./../../models/medicines');
const validator = require('validator');

// use passport as a middleware to authenticate
module.exports.createSession = function(req,res){
    req.flash('success','Logged in Successfully');
    return res.redirect('/');
}

// Destroy Session
module.exports.destroySession = function(req,res){
    req.logout();
    req.flash('success','Logged Out Successfully');
    return res.redirect('/');
}

// Open Shop Page
module.exports.shop =async function(req,res){
    if(res.locals.user.approved == 'no'){
        return res.render('notApproved',{title:'Medical Shop'})
    }
    else{
        try{
            let shopOrder = await Medicines.find({patientPincode:req.user.shopPincode,requestApproved:'no'});
            console.log('Harsh Shop Details Med User Controller')
            
            return res.render('shop',{
                title:'My Shop',
                myShop: shopOrder
            });
        }catch{
            console.log('Shop Catch Err Block in medUser Controller')
            console.log(err);
            req.flash('error','Try Again');
            return res.redirect('/404');
        }
    }
}

// Confirmed Order Page 
module.exports.confirmed =async function(req,res){
    try{
        let confirmedOrder = await Medicines.find({sellerId:req.user.id,orderStatus:'Confirmed'});
        // console.log(confirmedOrder)
        console.log('Harsh Shop Details Med User Controller')
        return res.render('shop',{
            title:'Confirmed Orders',
            myShop: confirmedOrder
        });
    }catch{
        console.log('Shop Catch Err Block in medUser Controller')
        console.log(err);
        req.flash('error','Try Again');
        return res.redirect('/404');
    }
}

// Open the Particular Page
module.exports.order = async function(req,res){
    try{
        let order = await Medicines.findById(req.params.id);
        // console.log(order)
        return res.render('orderMedicine',{
            title: 'Order Details',
            order: order
        })
    }catch{
        console.log('in MedUser Controller in order Catch');
        console.log(err);
        req.flash('error','Try Again');
        return res.redirect('/404');
    }
}

// Accept Order
module.exports.accept =async function(req,res){
    try{
        let medicines = await Medicines.findByIdAndUpdate(req.params.id, {
            sellerId: req.user.id,
            requestApproved:'Yes',
            orderStatus : 'Confirmed'
        });
        
        return res.redirect('back');
        
    }catch{
        console.log('In Medium Controller in accept Catch')
        console.log(err);
        req.flash('error','Try Again');
        return res.redirect('/404');
    }
}

// Dispatched Order Page
module.exports.dispatched =async function(req,res){
    try{
        let dispatchedOrder = await Medicines.find({sellerId:req.user.id,orderStatus:'Dispatched'});
        console.log('Harsh Shop Details Med User Controller')
        return res.render('shop',{
            title:'Dispatched Orders',
            myShop: dispatchedOrder
        });
    }catch{
        console.log('dispatch Catch Err Block in medUser Controller')
        console.log(err);
        req.flash('error','Try Again');
        return res.redirect('/404');
    }
}

// Dispatch The Order
module.exports.dispatch = async function(req,res){

    if(req.body.dispatch.length != 10 || !validator.isNumber(req.body.dispatch)){
        req.flash('error','Type a Real Phone No.');
        return res.redirect('back');
    }

    try{
        let medicines = await Medicines.findByIdAndUpdate(req.params.id, {
            dispatchPh : req.body.dispatchPh,
            orderStatus : 'Dispatched'
        });

        req.flash('success','Order successfully dispatched');
        return res.redirect('back')
    }catch{
        console.log('In Dispatch Med USer Controller');
        console.log(err);
        req.flash('error','Try Again');
        return res.redirect('/404');
    }
}

// delivered Orders Page
module.exports.delivered =async function(req,res){
    try{
        let deliveredOrder = await Medicines.find({sellerId:req.user.id,orderStatus:'Completed'});
        console.log('Harsh Shop Details Med User Controller')
        return res.render('shop',{
            title:'Delivered Orders',
            myShop: deliveredOrder
        });
    }catch{
        console.log('delivered Catch Err Block in medUser Controller')
        console.log(err);
        req.flash('error','Try Again');
        return res.redirect('/404');
    }
}
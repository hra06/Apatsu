const mongoose = require('mongoose');

const ambRegSchema = new mongoose.Schema({
    ambNum:{
        type:String,
        required:true,
    },
    ambOwnerName:{
        type:String,
        required: true
    },
    ambPhone:{
        type:Number,
        required:true,
        // unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    ownerPhone:{
        type:Number,
        required: true,
        // unique:true
    },
    driverPhone:{
        type: Number,
        required: true,
        // unique:true
    },
    driverLicense:{
        type:String,
        required:true,
        // unique:true
    },
    ambAddress:{
        type:String,
        required: true
    },
    ambPincode:{
        type: Number,
        required: true
    },
    approved:{
        type:String,
        required:true
    },
    currentStatus:{
        type:String,
        required:true
    }
},{
    timestamps: true
});


const AmbReg = mongoose.model('AmbReg',ambRegSchema);

module.exports = AmbReg;
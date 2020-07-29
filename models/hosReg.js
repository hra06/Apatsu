const mongoose = require('mongoose');

const hosRegSchema = new mongoose.Schema({
    hosName:{
        type:String,
        required: true
    },
    hosLicense:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    hosOwner:{
        type:String,
        required:true,
        // unique:true
    },
    hosPhone:{
        type: Number,
        required: true,
        unique:true
    },
    managerName:{
        type:String,
        required: true,
        // unique:true
    },
    managerPhone:{
        type: Number,
        required: true,
        // unique:true
    },
    hosSpeciality:{
        type:String,
        required:true,
        // unique:true
    },
    hosAddress:{
        type:String,
        required: true
    },
    hosPincode:{
        type: Number,
        required: true
    },
    approved:{
        type:String,
        required:true
    }
},{
    timestamps: true
});


const HosReg = mongoose.model('HosReg',hosRegSchema);

module.exports = HosReg;
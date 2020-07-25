const mongoose = require('mongoose');

const medRegSchema = new mongoose.Schema({
    shopName:{
        type:String,
        required:true,
    },
    ownerName:{
        type:String,
        required: true
    },
    shopPhone:{
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
    onwerPhone:{
        type:Number,
        required: true,
        // unique:true
    },
    tinNum:{
        type: Number,
        required: true,
        // unique:true
    },
    regNo:{
        type:Number,
        required:true,
        // unique:true
    },
    shopAddress:{
        type:String,
        required: true
    },
    shopPincode:{
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


const MedReg = mongoose.model('MedReg',medRegSchema);

module.exports = MedReg;
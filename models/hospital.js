const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema({
    patinentName:{
        type:String,
        required:true,
    },
    patientAge:{
        type:Number,
        required: true
    },
    patientSex:{
        type: String,
        required: true
    },
    patientMob:{
        type:Number,
        required:true,
    },
    patientEmail:{
        type:String,
        required: true
    },
    patientAddress:{
        type: String,
        required: true
    },
    patientPincode:{
        type:Number,
        required:true,
    },
    requestApproved:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    orderStatus:{
        type:String,
        required:true
    },
    sellerId:{
        type: mongoose.Schema.Types.ObjectId
    }
},{
    timestamps: true
});


const Hospital = mongoose.model('Hospital',hospitalSchema);

module.exports = Hospital;
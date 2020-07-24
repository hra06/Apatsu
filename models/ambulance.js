const mongoose = require('mongoose');

const ambulanceSchema = new mongoose.Schema({
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
    patientHospital:{
        type:String,
        required: true
    },
    patientHospitalPincode:{
        type: Number,
        required: true
    }
},{
    timestamps: true
});


const Ambulance = mongoose.model('Ambulance',ambulanceSchema);

module.exports = Ambulance;
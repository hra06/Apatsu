const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({    
    model:{
        type:String,
        required:true
    },
    patientName:{
        type: String,
        required: true
    },
    patientEmail:{
        type:String,
        required:true,
        unique:true
    },
    patientAge:{
        type:Number,
        required:true,
    },
    patientGender:{
        type:String,
        required:true,
    },
    patientAddress:{
        type:String,
        required:true,
    },
    patientPincode:{
        type:Number,
        required:true,
    },
    patientMobile:{
        type:Number,
        required:true,
    },
    patientMedicine1:{
        type:String,
        required:true,        
    },
    quantity1:{
        type:Number,
        required:true, 
    },
    patientMedicine2:{
        type:String       
    },
    quantity2:{
        type:Number
    },
    patientMedicine3:{
        type:String       
    },
    quantity3:{
        type:Number
    },
    patientMedicine4:{
        type:String       
    },
    quantity4:{
        type:Number
    },
    patientMedicine5:{
        type:String       
    },
    quantity5:{
        type:Number
    },
    patientMedicine6:{
        type:String       
    },
    quantity6:{
        type:Number
    },
    patientMedicine7:{
        type:String       
    },
    quantity7:{
        type:Number
    },
    patientMedicine8:{
        type:String       
    },
    quantity8:{
        type:Number
    },
    patientMedicine9:{
        type:String       
    },
    quantity9:{
        type:Number
    },
    patientMedicine10:{
        type:String       
    },
    quantity10:{
        type:Number
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
        type: mongoose.Schema.Types.ObjectId,
    },
    dispatchPh:{
        type:Number
    }  
},{
    timestamps: true
});


const Medicine = mongoose.model('Medicine',medicineSchema);

module.exports = Medicine;
const mongoose = require('mongoose');

const superAdminSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamps: true
});


const SuperAdmin = mongoose.model('SuperAdmin',superAdminSchema);

module.exports = SuperAdmin;
const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    }
})

const Register = new mongoose.model("IdPass", loginSchema);

module.exports = Register;
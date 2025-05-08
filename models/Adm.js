const mongoose = require('mongoose');

const AdmSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    cpf:{
        type:String,
        default: "",
    },
    email:{
        type:String,
        unique:false,
    },
    password:{
        type:String,
    },
    codigo:{
        type:String,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Adm", AdmSchema);
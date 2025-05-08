const mongoose = require('mongoose');

const CoopSchema = new mongoose.Schema({
    nome:{
        type:String,
        default: ""
    },
    cnpj:{
        type:String,
        default: ""
    },
    zap:{
        type:String,
        default: ""
    },
    email:{
        type:String,
        default: ""
    },
    senha:{
        type:String,
        default: ""
    },
    sobre:{
        type:String,
        default: ""
    },
    horario:{
        type:String,
        default: ""
    },
    type:{
        type:String,
        default: "coop"
    },
    profilePic:{
        type:String,
        default: "uploads/user.png"
    },
    
},
    {timestamps: true}
);

module.exports = mongoose.model("Coop", CoopSchema);
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
    ende_bairro:{
        type:String,
        default: ""
    },
    ende_cidade:{
        type:String,
        default: ""
    },
    ende_estado:{
        type:String,
        default: ""
    },
    ende_rua:{
        type:String,
        default: ""
    },
    ende_numero_casa:{
        type:String,
        default: ""
    },
    profilePic:{
        type:String,
        default: "uploads/user.png"
    },
    whatsapp: {
        type:String,
        default: "",
    },
    cart_id: {
        type:String,
        default: null,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
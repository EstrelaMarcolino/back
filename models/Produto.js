const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    nome:{
        type:String,
    },
    idcoop:{
        type:String,
    },
    desc:{
        type:String,
    },
    
    precoatual:{
        type:String,
    },
    precoanterior:{
        type:String,
    },
    
    profilePic:{
        type:String,
        default: "https://cdn-icons-png.flaticon.com/512/74/74472.png"
    },
    
},
    {timestamps: true}
);

module.exports = mongoose.model("Produto", ProdutoSchema);
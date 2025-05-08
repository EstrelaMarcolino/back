const mongoose = require('mongoose');

const CompraSchema = new mongoose.Schema({
    idproduto:{
        type:String,
    },
    produtoNome:{
        type:String,
        default: "" 
    },
    produtoImagem:{
        type:String,
        default: "" 
    },
    iduser:{
        type:String,
    },
    idcoop:{
        type:String,
    },
    valor:{
        type:String,
        default: "R $00,00" 
    },
    
    valortotal:{
        type:String,
        default: "R $00,00" 
    },
    quantidade:{
        type: Number,
        default: 1 
    },
    estado:{
        type:String,
        default: "pago" 
        //pago
        //recebido
    },
    
},
    {timestamps: true}
);

module.exports = mongoose.model("Compra", CompraSchema);
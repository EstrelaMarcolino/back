const mongoose = require('mongoose');

const PedidoSchema = new mongoose.Schema({
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
    telefone:{
        type:String,
    },
    modelo_id:{
        type:String,
    },
    modelo_pic:{
        type:String,
    },
    modelo_name:{
        type:String,
    },
    modelo_preco:{
        type:String,
    },
    modelo_agencia:{
        type:String,
    },
    modelo_caract:{
        type:String,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Pedido", PedidoSchema);
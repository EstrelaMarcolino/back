const mongoose = require('mongoose');

const AdmSchema = new mongoose.Schema({
    cart_name:{
        type:String,
    },
    username:{
        type:String,
        unique:false,
    },
    userid:{
        type:String,
    },
    item_modelo:{
        type:[Object],
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Adm", AdmSchema);
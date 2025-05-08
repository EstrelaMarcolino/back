const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    fname:{
        type:String,
        default: ""
    },
    coopid:{
        type:String,
        default: ""
    },
    emailCard:{
        type:String,
        default: ""
    },
    ncard:{
        type:Number,
    },
    cvc:{
        type:String,
    },
    validade:{
        type:String,
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Card", CardSchema);
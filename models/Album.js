const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    username:{
        type:String,
    },
    user_id:{
        type:String,
        default: "",
    },
    item_pic:{
        type:[String],
    },
},
    {timestamps: true}
);

module.exports = mongoose.model("Album", AlbumSchema);
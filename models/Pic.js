const mongoose = require('mongoose')

const PicSchema = new mongoose.Schema({
    name:{type:String, require: true},
    src:{type:String, require: true}
})

module.exports = mongoose.model("Pic", PicSchema)
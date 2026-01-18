const mongoose = require('mongoose')
const categorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Category title is required"]
    },
    imageUrl:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyhjI0AlX9w1GdGREFaihMYvu11aO_96iCBQ&s"
    }
},{timestamps:true})

module.exports = mongoose.model("Category",categorySchema)
const mongoose = require('mongoose')
const foodSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Food title is required']
    },
    description:{
        type:String,
        required:[true,'Food descriptions is required']
    },
    price:{
        type:Number,
        required:[true,'Food price is required']
    },
    imageUrl:{
        type:String,
        default:'https://static.vecteezy.com/system/resources/previews/000/964/198/non_2x/fast-food-meal-set-vector.jpg'
    },
    foodTags:{
        type:String
    },
    category:{
        type:String
    },
    code:{
        type:String
    },
    isAvailabe:{
        type:Boolean,
        default:true
    },
    restaurante:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'restaurantes'
    },
    rating:{
        type:Number,
        default:5,min:1,max:5
    },
    ratingCount:{
        type:String
    }
},{timestamps:true});

module.exports = mongoose.model("Foods",foodSchema)
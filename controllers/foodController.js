const foodModel = require("../models/foodModel")

const createFoodController = async (req,res)=>{
    try {
        //get data from user food
        const {
            title,
            description,
            price,
            imageUrl,
            foodTags,
            category,
            code,
            isAvailabe,
            restaurante,
            rating,
            ratingCount
        } = req.body
        //validation
        if(!title || !description || !restaurante) res.status(500).send({success:false,message:'Error to validate title description or restaurante into Food controller'})
        //Create new food
        const newFood = new foodModel({
            title,
            description,
            price,
            imageUrl,
            foodTags,
            category,
            code,
            isAvailabe,
            restaurante,
            rating,
            ratingCount
        })
        //save into table food
        await newFood.save()
        //response success
        res.status(201).send({success:true,message:'success to create food',newFood})
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error into API create Food'})
    }
}

module.exports ={createFoodController}
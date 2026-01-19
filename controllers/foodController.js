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

const getAllFoodController = async (req, res)=>{
    try {
        //get all foods
        const getAllFoods = await foodModel.find({})
        //validations
        if(!getAllFoods)res.status(500).send({success:false,message:'Error to get all foods'})
        res.status(200).send({success:true,getAllFoods})
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error into API get ALL foods'})
    }
}

const getFoodController = async (req, res)=>{
    try {
        const {id} = req.params
          if(!id)res.status(500).send({success:false,message:'Error to get id food'})
        //get  foods
        const getFood = await foodModel.findById({_id:id})
        //validations
        if(!getFood)res.status(500).send({success:false,message:'Error to get one food'})
        res.status(200).send({success:true,getFood})

    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error into API GET  Food'})
    }
}

const getFoodRestauranteController = async (req, res)=>{
    try {
        const {id} = req.params
          if(!id)res.status(400).send({success:false,message:'Error to get id restaurante food'})
        //get  foods
        const getFood = await foodModel.find({restaurante: id})
        //validations
        if(!getFood)res.status(500).send({success:false,message:'Error to get one restaurante food'})

        res.status(200).send({success:true,getFood})

    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error into API GET restaurante Food'})
    }
}
module.exports ={createFoodController, getAllFoodController, getFoodController,getFoodRestauranteController }
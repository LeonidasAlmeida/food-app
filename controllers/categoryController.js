const categoryModel = require("../models/categoryModel")

const createCatController = async (req,res)=>{
    try {
        //get data from user
        const {title, imageUrl} = req.body
        //validations
        if(!title)res.status(500).send({success:false,message:'Error to get data from category'})
        //create new category
        const newCategory = new categoryModel({title,imageUrl})
        //save data
        await newCategory.save()
        //success 
        res.status(200).send({success:true,message:'Category Category with Success !'})
        } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error in to API Create Category'})
    }
}

module.exports = { createCatController }
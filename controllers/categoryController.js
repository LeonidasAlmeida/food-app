const categoryModel = require("../models/categoryModel")

//create Category Controller
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
//get all Category Controller
const getAllCategoryController = async (req, res) =>{
    try {
        const categories = await categoryModel.find({})
        if(!categories)res.status(500).send({success:false,message:'Error to get all categories'})
        res.status(200).send({success:true,categoryCount:categories.length,categories})
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error into API get All'})
    }
}
//update category
const updateCategoryController = async (req, res)=>{
    try {
        //get data from category
        const {id} = req.params
        const {title,imageUrl} = req.body
        //validations
        if(!id) res.status(500).send({success:false,message:'Error to get ID category'})
        //update categories
        const updateCategory = await categoryModel.findByIdAndUpdate(id,{title,imageUrl},{new:true})
        if(!updateCategory)res.status(500).send({success:false,message:'Error to update category'})
        res.status(200).send({success:true,message:'Update Category with success !'})

    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error into API Update Category'})
    }
}
//delete category   
const deleteCategoryController = async (req,res)=>{
    try {
        //get data from user for delete category
        const {id} = req.params
        //validations
        if(!id) res.status(500).send({success:false,message:'Error into get id category'})
        // get category with id
        const category = await categoryModel.findById(id)
        //validations
        if(!category) res.status(500).send({success:false,message:'Error to find category by ID '})
        //delete category
        await categoryModel.findByIdAndDelete(id)
        //response data
        res.status(200).send({success:true,message:'Category delete with successfuly'})
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error into delete API category'})
    }
}
module.exports = { createCatController,getAllCategoryController, updateCategoryController ,deleteCategoryController}
const mongoose = require('mongoose')
const resturantModel = require('../models/resturantModel')

//Create new Restaurante
const createRestauranteController = async(req, res)=>{
    try {
        //get data form user
       const {
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords
                } = req.body
        //validations
        if(!title || !coords) res.status(500).send({success:false, message:'Title or Coords is not provide'})
        //create a new restaurante
        const newRestaurante = new resturantModel({
            title,
            imageUrl,
            foods,
            time,
            pickup,
            delivery,
            isOpen,
            logoUrl,
            rating,
            ratingCount,
            code,
            coords
                })
        //save in to database
        await newRestaurante.save()
        //success message
        res.status(200).send({success:true,message:'New restaurante create with success!'})
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false, message:'Error in API Create restaurante'})
    }
}
//get all registers
const getAllRestauranteController = async (req, res) =>{
    try {
        //get
        const restaurantes = await resturantModel.find({})
        //validations
        if(! restaurantes ) res.status(500).send({success:false, message:'Error to get all'})
        //get all
        res.status(200).send({success:true,totalCount:restaurantes.length,restaurantes})
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error in API get All '})
    }
}
//get one register
const getRestauranteByIdController = async (req, res)=>{
    try {
        const restauranteID = req.params.id
        //validations
        if(!restauranteID ) res.status(404).send({success:false, message:'Error recive parameters'})
        //get data
        const restaurante = await resturantModel.findById(restauranteID)
        //validations  id search
         if(!restauranteID ) res.status(404).send({success:false, message:'Error to get data'})
         res.status(200).send({success:true,restaurante})
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error to API get data By ID'
        })
    }
}
// delete restaurante
const deleteRestauranteController = async (req, res)=>{
    try {
        //get data from user
        const restauranteId = req.params.id
        if(!restauranteId)res.status(404).send({success:false,message:'Error to get Params'})
        //delete register
        await resturantModel.findByIdAndDelete(restauranteId)
        //success response
        res.status(200).send({success:true,message:'Registe delete with sucessfuly '})
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error in to API delete restaurante'})
    }
}

module.exports = { 
    createRestauranteController, 
    getRestauranteByIdController, 
    getAllRestauranteController,
    deleteRestauranteController
}
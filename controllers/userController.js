const userModel = require("../models/userModel")

//get data
const getUserController = async (req, res)=>{
    try {
        //find user
        const user = await userModel.findById({_id: req.body.id})
        //validations
        if(!user) res.status(404).send({success:false,message:'Error to find User'})
        //hinde password
        user.password = undefined
        //resp
        res.status(200).send({success:true,message:'Successfuly to get data',user})
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in API'
        })
    }
}

//update data
const updateUserController = async (req, res)=>{
 try {
    //find user
    const user = await userModel.findById({_id: req.body.id})
    //validations
    if (!user) res.status(404).send({success:false,message:'Error to Find user'})
    //update
    const {userName,address,phone} = req.body
    //validation input
    if(userName)user.userName = userName
    if(address)user.address = address
    if(phone)user.phone = phone
    //save user
    await user.save()
    res.status(200).send({success:true,message:'Update complete'})

 } catch (error) {
    console.log(error)
    res.status(500).send({success:false,message:'API Error update Controller'})
 }
}

module.exports = { getUserController, updateUserController }
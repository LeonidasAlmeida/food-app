const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')
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
//reset password
const resetPasswordController = async (req, res)=>{
    try {
        const { email, newPassword, answer } = req.body
        if(!email || !newPassword || !answer){
            return res.status(500).send({
                success:false,
                message:'Error to authenticate reset password controller'
            })
        }
        //
        const user = await userModel.findOne({ email,answer})
        if( !user ){
            return res.status(500).send({
                success:false,
                message:'Error to find user'
            })
        }
        //shashing password
         //criptography of data
            var salt = bcrypt.genSaltSync(10)
            const hashedPassWord = await bcrypt.hash(newPassword, salt) 
            user.password = hashedPassWord
            await user.save()
        res.status(200).send({success:true,message:'reset was complete'})
    } catch (error) {
        console.log(error)
        res.status(500).send({success:false,message:'Error to API reset password'})
    }
}
//update password
const updatePasswordController = async(req, res) =>{
    try {
        //find user 
        const user = await userModel.findById({_id:req.body.id})
        //validation
        if(!user) res.status(404).send({success:false,message:'Error to validation user'})
        //get data from user
        const {oldPassword,newPassword} = req.body
        //validation
        if(!oldPassword || !newPassword)res.status(500).send({success:false,message:'Error to validation fields '})
        //compare password
        const isMatch = await bcrypt.compare(oldPassword, user.password)
        //validation
        if(!isMatch) res.status(500).send({success:false,message:'Invalid Old password'})
        //hasing Password
          //criptography of data
        var salt = bcrypt.genSaltSync(10)
        const hashedPassWord = await bcrypt.hash(newPassword, salt) 
        
        user.password =  hashedPassWord
        await user.save()
        res.status(200).send({success:true,message:'Update complete'})
    } catch (error) {
        console.log(error)
        rs.status(500).send({success:false,message:'Error in API'})
    }
}
module.exports = { getUserController, updateUserController, resetPasswordController,updatePasswordController}
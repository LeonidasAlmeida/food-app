const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const registerController = async (req,res)=>{

    try {
    //reading data
    const {userName,email,password,phone,address} = req.body
    //validation
    if(!userName || !email || !password || !phone || !address){
        return res.status(500).send({
            success:false,
            message:"Please registe all field"
        })
    }
    //check user
    const existing = await userModel.findOne({email})
    if(existing){
        return res.status(500).send({
            success:false,
            message:"Email already existe"
        })
    }

    //criptography of data
    var salt = bcrypt.genSaltSync(10)
    const hashedPassWord = await bcrypt.hash(password, salt) 

    //create new user
    const user = await userModel.create({
        userName,
        email,
        password:hashedPassWord,
        phone,
        address
    })
    res.status(201).send({
        success:true,
        message:"create successfully",
        user
    })
  
} catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:"Error in Register API"
        
    })
}
}


//controller login
const loginController = async (req, res)=>{
 try {
    //reading data
    const {email,password} = req.body
    //validation
    if(!email || !password){
        return res.status(500).send({
            success:false,
            message:"provide login or email "
        })
    }
    //validation os user, just email is verify
    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).send({
            success:false,
            message:"login or password is incorrect"
        })
    }
    //Recursos de descryptography
    //check user password | compare password
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
         res.status(500).send({
        success:false,
        message:"Invalid Credentials"
      })
    }
    const token = JWT.sign({id:user._id}, process.env.JWT_SECRET,{
        expiresIn:"7d"
    })
    res.status(200).send({
        success:true,
        message:"Success login",
        token,
        user
    })
 } catch (error) {
    console.log(error)
    res.status(500).send({
        success:false,
        message:"Error in API Login"
    })
 }
}

module.exports = {registerController, loginController}
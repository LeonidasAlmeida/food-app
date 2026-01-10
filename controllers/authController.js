const userModel = require("../models/userModel")

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
    //create new user
    const user = await userModel.create({userName,email,password,phone,address})
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
module.exports = {registerController}
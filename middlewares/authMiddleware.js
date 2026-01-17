const JWT = require('jsonwebtoken')
const authMiddleware = async (req,res,next)=>{
    try {
        const token = req.headers["authorization"].split(" ")[1]
        JWT.verify(token, process.env.JWT_SECRET,(error, decode)=>{
            if(error){
                return res.status(401).send({
                    success:false,
                    message:'Un-Authorize User'
                })
            }else{
                req.user = decode
                next()
            }
            
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in API'
        })
    }
}


module.exports = authMiddleware
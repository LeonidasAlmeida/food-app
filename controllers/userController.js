const getUserControlle = async (req, res)=>{
    try {
        res.status(200).send({
            success:true,
            message:'Get user data'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in API'
        })
    }
}

module.exports = { getUserController }
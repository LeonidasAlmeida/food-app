const mongoose = require('mongoose')
const colors = require('colors')
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected To Database ${mongoose.connection.host}`.white.bgGreen)
    } catch (error) {
       console.log("DB Error ".white.bgYellow) 
       console.log("\n",error) 
    }
}
module.exports = connectDB
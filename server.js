const express = require("express")
const colors = require('colors')
const dotenv = require('dotenv');
const morgan = require("morgan");
const cors = require('cors');

//rest object
const app = express();

//midleware
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
//configuration of dotenv
dotenv.config()

//route
//URL => http://localhost:8080
app.use('/api/v1/test', require('./routes/testRoute'))

app.get("/", (req, res)=>{
    return res
    .status(200)
    .send("<h1> Welcome to food Server APP </h1>")
});

//PORT
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
    console.log("Server Running".white.bgMagenta)
});
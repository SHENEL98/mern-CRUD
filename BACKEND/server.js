const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const app = express(); 
require("dotenv").config();

mongoose.set('strictQuery', true);

const PORT = process.env.PORT || 8070; 

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {

    useNewUrlParser: true, 
    
    useUnifiedTopology: true 
    
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });
 

const studentRouter = require("./routes/students.js");

app.use("/student",studentRouter);



app.listen(PORT,()=>{
    console.log(`Server is up and running on port no ${PORT}`)
})







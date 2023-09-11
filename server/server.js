const express=require('express');
const cors= require("cors");
const app=express();
require("dotenv").config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors({credentials:true,origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
require("./config/mongoose.config");
require('./routes/player.route')(app);
require('./routes/user.route')(app); 

const port=process.env.PORT
app.listen(port,()=>console.log("Server connected on port: ",port));

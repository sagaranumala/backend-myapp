const express=require('express');
const dotenv=require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors= require('cors');


const port=process.env.PORT || 3001
const {db_url}=require("./config/db")
const app=express();
connectDB();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/', require('./routes1/router'))
app.use(errorHandler)

app.listen(port,()=>console.log("server...."));
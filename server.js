
const express = require("express")
const mongoose = require("mongoose")
import mongoose from "mongoose";
const app = express()

//routes

app.get('/',(req,res)=>{
    res.send('hii sample')
})

app.listen(3000,()=>{
    console.log("node running");
})

mongoose.connect()






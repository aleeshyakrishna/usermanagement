// console.log("hii");
const express = require("express")
const app = express()

//routes
app.get('/',(req,res)=>{
    res.send('hii sample')
})

app.listen(3000,()=>{
    console.log("node running");
})

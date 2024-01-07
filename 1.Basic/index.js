const express = require("express")
require('dotenv').config()
const app = express()




app.get('/',(req,res)=>{
    res.send("Hello Express");
})

app.get('/nik',(req,res)=>{
    res.send("This is the Basic Server Created By Nikhil Kumar Yadav")
})


app.listen(process.env.PORT,()=>{
    console.log(`Example app Listening on port ${process.env.PORT}`)
})
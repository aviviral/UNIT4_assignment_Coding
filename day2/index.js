const express = require('express')

const book = require('./book.json')

const app = express();

app.get("",function(req,res){
    res.send("hello")
})

app.get("/books",function(req,res){
    res.send({book})
})

app.listen(5000,()=>{
    console.log("listening on PORT 5000")
})
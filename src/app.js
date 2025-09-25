const express = require("express");

const {AdminAuth}=require("./middleware/auth.js");
const app=express();

//genereal way ro hande error
app.get("/userdata",(req,res)=>{
    try{
        throw new Error("xyzssdfhjf");
        res.send("userdata sent");
        
    }catch(err){
        res.status(500).send("Something went wrong");

    }
})

//how to handle error using express.always write just above app.listen
app.use("/",(err,req,res,next)=>{
    if(err){
        res.status(500).send("Something went wrong");
    }
})
app.listen(7777,()=>{
    console.log("server is running on 7777");
    
});
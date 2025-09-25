const express = require("express");

const {AdminAuth}=require("./middleware/auth.js");
const app=express();

app.use("/admin",AdminAuth);

app.use("/user",AdminAuth,(req,res)=>{  //or, we can create a UserAuth same as admin
    res.send("user is verified");
});

app.get("/admin/data",(req,res)=>{
    res.send("Data has been sent");
});

app.listen(7777,()=>{
    console.log("server is running on 7777");
    
});
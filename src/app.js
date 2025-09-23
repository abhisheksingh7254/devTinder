const express =require("express");
const app=express();

app.use("/about",(req,res)=>{
    res.send("This is about")
});
app.use("/contact",(req,res)=>{
    res.send("This is contact")
});
app.use("/",(req,res)=>{
    res.send("This is server")
});

app.listen(7777,()=>{
    console.log("Server is listening on 7777");
    
});
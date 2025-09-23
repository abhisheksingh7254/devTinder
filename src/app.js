const express =require("express");
const app=express();


//this is get call,we will use specific http method same from now,not app.use
app.get("/contact",(req,res)=>{
    res.send("This is a get request for contact")
})
//This will respond speificaly to post request,also take oder in measure for omplete the post request,if app.use is above this,it wont work
app.post("/contact",(req,res)=>{
    res.send("This is a post to contact")
});

//this will respond to all the HTTP method call.
app.use("/",(req,res)=>{
    res.send("This is server")
});

app.listen(7777,()=>{
    console.log("Server is listening on 7777");
    
});
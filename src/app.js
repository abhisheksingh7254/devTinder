const express = require("express");
const {connectDB}= require("./config/database");
const app = express();

connectDB().then(()=>{
    console.log("Database is connected");
    app.listen(7777, () => {
      console.log("server is running on 7777");
    });
    
}).catch((err)=>{
    console.error("Databse cant be connected");
});

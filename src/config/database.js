const mongoose=require("mongoose");

const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://abhisheksingh7254:<password>@cluster0.5iusrp4.mongodb.net/devTinder");

}
module.exports={connectDB};

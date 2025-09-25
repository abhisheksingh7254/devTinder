const mongoose=require("mongoose");

const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://abhisheksingh7254:mongodb%402016@cluster0.5iusrp4.mongodb.net/");

}
module.exports={connectDB};
const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

//signup API
app.post("/signup", async (req, res) => {
  const users = new User({
    firstName: "Abhishek",
    lastName: "Singh",
    emailID: "abhishek@123",
    password: "abhishek123",
  });
  try {
    await users.save();
    res.send("Data is added to dabase");
  } catch (error) {
    res.status(400).send("Something went wrong:" + error.message);
  }
});

connectDB()
  .then(() => {
    console.log("database is connected");
    app.listen(7777, () => {
      console.log("server is live on port 7777");
    });
  })
  .catch((err) => {
    console.error("Something went wrong,can't connect to database");
  });

const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

app.use(express.json());
//signup API
app.post("/signup", async (req, res) => {
  console.log(req.body);
  
  const users = new User(req.body);
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

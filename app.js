const express = require("express");
const app = express();
const port = 2000;
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");

//anytime we call the app, it uses body parser
app.use(bodyParser.json());

//import routes
const postsRoute = require("./routes/posts");
const { parseTwoDigitYear } = require("moment");

//middleware(you can have multiple middleware)
app.use("/posts", postsRoute);

//routes
app.get("/", (req, res) => {
  res.send("We are on home!");
});

//connect to DB
mongoose.connect(process.env.DB_Connection, () => {
  console.log("connected to mongoDB!");
});

//getting the server to listen on port
app.listen(port, () => {
  console.log(`running app on port ${port}`);
});

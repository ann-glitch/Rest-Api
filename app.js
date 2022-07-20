const express = require("express");
const app = express();
const port = 2000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//import routes
const postsRoute = require("./routes/posts");
const { parseTwoDigitYear } = require("moment");

//middlewares
app.use(bodyParser.json());
app.use("/posts", postsRoute);
app.use(cors());

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

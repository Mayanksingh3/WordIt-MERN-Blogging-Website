const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/posts", require("./routes/postRoutes"));
app.use("/user", require("./routes/authRoute"));

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.mongoDB_URI || process.env.mongoDB_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("Error Occured " + err);
  });

app.listen(PORT, () => {
  console.log("Server is Running on port " + PORT);
});

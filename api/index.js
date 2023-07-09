const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");

dotenv.config();
app.use(express.json());

// database connection
mongoose.connect(process.env.CONNECT_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log("Database Connected"))
  .catch((err) => {
    console.log(err);
  });


// Multer setup

// Routes
app.use("/api/auth", authRoute);
app.use("api/user", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", categoryRoute);

// app start
app.listen("5000", () => {
  console.log("Backend is now running");
});
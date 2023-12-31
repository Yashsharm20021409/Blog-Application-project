const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");
var cors = require('cors')
const multer = require("multer");
const path = require("path");


app.use(cors())
dotenv.config();
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

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
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/category", categoryRoute);

// app start
app.listen("5000", () => {
  console.log("Backend is now running");
});
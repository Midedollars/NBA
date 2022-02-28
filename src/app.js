const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config();

// extracting PORT from dotenv
const { PORT, DATABASE_URI } = process.env;

// extracting information from the body
app.use(express.json());
app.use(morgan("dev"));



const noteRouter = require("./routes/note.route");

// base endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is the version of Note API",
  });
});

// The base endpoint 
app.use("/api/v1", noteRouter);

// Database and Server connection
app.listen(PORT, async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log(`Database Is Not Connected`);
  }
  console.log(`The app is listening on PORT ${PORT}`);
});
// config/database.js
const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://keerthikamk04:keerthi25@cluster25.5annt.mongodb.net/ecommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log("MongoDB connection failed", error);
  });
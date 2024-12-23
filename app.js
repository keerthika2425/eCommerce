// app.js
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/database");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/products", productRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

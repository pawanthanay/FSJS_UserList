require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db")
const userRoutes = require("./routes/userRoutes");
const app = express();


// app.get("/", (req, res) => {
//     res.send("Hello  Pawan Thanay");
// });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();
app.use("/", userRoutes);  // prev its was get - its an error

module.exports = app
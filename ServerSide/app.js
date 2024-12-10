// const express = require("express");
// const path = require("path");
// const collection = require("./Config");
// const bcrypt = require('bcrypt');

// const app = express();
// // convert data into json format
// app.use(express.json());
// // Static file
// app.use(express.static("public"));

// app.use(express.urlencoded({ extended: false }));
// //use EJS as the view engine
// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//     res.render("login");
// });

// app.get("/signup", (req, res) => {
//     res.render("signup");
// });

// // Register User
// app.post("/signup", async (req, res) => {

//     const data = {
//         name: req.body.username,
//         password: req.body.password
//     }

//     // Check if the username already exists in the database
//     const existingUser = await collection.findOne({ name: data.name });

//     if (existingUser) {
//         res.send('User already exists. Please choose a different username.');
//     } else {
//         // Hash the password using bcrypt
//         const saltRounds = 10; // Number of salt rounds for bcrypt
//         const hashedPassword = await bcrypt.hash(data.password, saltRounds);

//         data.password = hashedPassword; // Replace the original password with the hashed one

//         const userdata = await collection.insertMany(data);
//         console.log(userdata);
//     }

// });

// // Login user
// app.post("/login", async (req, res) => {
//     try {
//         const check = await collection.findOne({ name: req.body.username });
//         if (!check) {
//             res.send("User name cannot found")
//         }
//         // Compare the hashed password from the database with the plaintext password
//         const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
//         if (!isPasswordMatch) {
//             res.send("wrong Password");
//         }
//         else {
//             res.render("home");
//         }
//     }
//     catch {
//         res.send("wrong Details");
//     }
// });

// Define Port for Application

// App.js
const express = require("express");
const app = express(); // Define app here
const path = require("path");
const userRoute = require("./route/userRoute");
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/user", userRoute);

// Your remaining code...
module.exports = app;

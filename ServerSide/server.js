const express = require("express");
const app = require("./app");
const connectToMongoDB = require("./config/database");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

connectToMongoDB()
  .then((db) => {
    console.log("Database connected...");

    const server = app.listen(PORT, () => {
      console.log(`Server is running at port ${PORT}`);
    });

    process.on("unhandledRejection", (err) => {
      console.log(`Error: ${err.stack}`);
      console.log(`Server is shutting down due to unhandledRejection`);
      server.close();
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process if there's an error connecting to MongoDB
  });

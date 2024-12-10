const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config(); // Load environment variables from .env file

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://fyp_db:amir123@cluster0.nktb4di.mongodb.net/"; // Change if your MongoDB server is running on a different port or host
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("test");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

module.exports = connectToMongoDB; // Export the connectToMongoDB function

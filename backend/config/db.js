// MongoDB connection (official "mongodb" driver - the only package we use).
const { MongoClient } = require("mongodb");
const config = require("./config");

const client = new MongoClient(config.MONGO_URL);
let db = null;

// Connect once when the server starts
async function connectDB() {
  await client.connect();
  db = client.db(config.DB_NAME);
  console.log("MongoDB connected");
  return db;
}

// Use this anywhere to get the database
function getDb() {
  if (!db) throw new Error("Database is not connected");
  return db;
}

module.exports = { connectDB, getDb, client };
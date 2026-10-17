// Online Quiz backend - Node.js built-in http module (no Express) + MongoDB.
const http = require("http");
const config = require("./config/config");
const { connectDB, getDb } = require("./config/db");
const { handleRequest } = require("./routes");
const { sendJson } = require("./utils/http");

const server = http.createServer(async (req, res) => {
  try {
    await handleRequest(req, res);
  } catch (err) {
    if (err.message === "Invalid JSON") {
      return sendJson(res, 400, { message: "Invalid data" });
    }
    if (err instanceof URIError) {
      return sendJson(res, 400, { message: "Invalid address" });
    }
    console.log("Error:", err.message);
    sendJson(res, 500, { message: "Server error" });
  }
});

// Connect to MongoDB first, then start the server
async function start() {
  await connectDB();

  const count = await getDb().collection("questions").countDocuments();
  console.log(`Questions in database: ${count}`);
  if (count === 0) {
    console.log("No questions found. Run: npm run seed");
  }

  server.listen(config.PORT, () => {
    console.log(`Server running on http://localhost:${config.PORT}`);
  });
}

start().catch((err) => {
  console.log("MongoDB connection error:", err.message);
});
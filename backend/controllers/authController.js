const { getDb } = require("../config/db");
const { readBody, sendJson } = require("../utils/http");
const { hashPassword, checkPassword, createToken } = require("../utils/security");

// POST /api/auth/register
async function register(req, res) {
  const { name, email, password } = await readBody(req);

  if (!name || !email || !password) {
    return sendJson(res, 400, { message: "Please fill all details" });
  }

  const cleanName = String(name).trim();
  const cleanEmail = String(email).trim().toLowerCase();
  const users = getDb().collection("users");

  const exists = await users.findOne({ email: cleanEmail });
  if (exists) {
    return sendJson(res, 400, { message: "Account already exists" });
  }

  const result = await users.insertOne({
    name: cleanName,
    email: cleanEmail,
    password: hashPassword(String(password)),
  });

  sendJson(res, 200, {
    token: createToken(result.insertedId.toString()),
    name: cleanName,
  });
}

// POST /api/auth/login
async function login(req, res) {
  const { email, password } = await readBody(req);
  const cleanEmail = String(email || "").trim().toLowerCase();

  const user = await getDb().collection("users").findOne({ email: cleanEmail });

  if (!user || !checkPassword(String(password || ""), user.password)) {
    return sendJson(res, 400, { message: "Wrong email or password" });
  }

  sendJson(res, 200, {
    token: createToken(user._id.toString()),
    name: user.name,
  });
}

module.exports = { register, login };
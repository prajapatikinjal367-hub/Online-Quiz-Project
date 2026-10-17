// Password hashing and login tokens using only Node's built-in "crypto" module.
const crypto = require("crypto");
const config = require("../config/config");

// ---------- Passwords ----------
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`; // saved as "salt:hash"
}

function checkPassword(password, stored) {
  const [salt, hash] = String(stored).split(":");
  if (!salt || !hash) return false; // unknown password format
  const test = crypto.scryptSync(password, salt, 64);
  return crypto.timingSafeEqual(Buffer.from(hash, "hex"), test);
}

// ---------- Login token (JWT style: header.payload.signature) ----------
function toBase64Url(text) {
  return Buffer.from(text).toString("base64url");
}

function sign(data) {
  return crypto
    .createHmac("sha256", config.JWT_SECRET)
    .update(data)
    .digest("base64url");
}

function createToken(userId) {
  const header = toBase64Url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const payload = toBase64Url(
    JSON.stringify({ id: userId, exp: Date.now() + config.TOKEN_LIFETIME })
  );
  const signature = sign(`${header}.${payload}`);
  return `${header}.${payload}.${signature}`;
}

// Returns the user id if the token is valid, otherwise null.
function verifyToken(token) {
  try {
    const [header, payload, signature] = token.split(".");
    if (!header || !payload || !signature) return null;

    const expected = sign(`${header}.${payload}`);
    const a = Buffer.from(signature);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;

    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (data.exp < Date.now()) return null; // expired

    return data.id;
  } catch (err) {
    return null;
  }
}

module.exports = { hashPassword, checkPassword, createToken, verifyToken };
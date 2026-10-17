const { verifyToken } = require("../utils/security");
const { sendJson } = require("../utils/http");

// Checks the "Authorization: Bearer <token>" header.
// Returns the user id if the token is valid.
// Otherwise it sends a 401 reply and returns null.
function authenticate(req, res) {
  const header = req.headers.authorization || "";
  const token = header.split(" ")[1];
  const userId = token ? verifyToken(token) : null;

  if (!userId) {
    sendJson(res, 401, { message: "Please login first" });
    return null;
  }
  return userId;
}

module.exports = { authenticate };
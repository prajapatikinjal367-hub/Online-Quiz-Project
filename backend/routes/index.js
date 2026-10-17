// All routes of the API. Each route says: method, address, who can use it, what to run.
const { sendJson, sendText, sendNoContent } = require("../utils/http");
const { authenticate } = require("../middleware/auth");
const { register, login } = require("../controllers/authController");
const {
  getQuestions,
  submitQuiz,
  myResults,
} = require("../controllers/quizController");

const routes = [
  // Open to everyone
  { method: "POST", path: "/api/auth/register", handler: register },
  { method: "POST", path: "/api/auth/login", handler: login },

  // Login required
  { method: "GET", path: "/api/quiz/questions/:topic", handler: getQuestions, protected: true },
  { method: "POST", path: "/api/quiz/submit", handler: submitQuiz, protected: true },
  { method: "GET", path: "/api/quiz/my-results", handler: myResults, protected: true },
];

// Turn "/api/quiz/questions/:topic" into a pattern we can match
routes.forEach((route) => {
  route.keys = [];
  const pattern = route.path.replace(/:([a-zA-Z]+)/g, (_, key) => {
    route.keys.push(key);
    return "([^/]+)";
  });
  route.regex = new RegExp(`^${pattern}$`);
});

// Find the matching route and run it
async function handleRequest(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const method = req.method;

  // Browser sends this first (CORS pre-check)
  if (method === "OPTIONS") return sendNoContent(res);

  // Test route
  if (method === "GET" && url.pathname === "/") {
    return sendText(res, 200, "Quiz API is running");
  }

  for (const route of routes) {
    if (route.method !== method) continue;

    const match = url.pathname.match(route.regex);
    if (!match) continue;

    const params = {};
    route.keys.forEach((key, i) => {
      params[key] = decodeURIComponent(match[i + 1]);
    });

    let userId = null;
    if (route.protected) {
      userId = authenticate(req, res);
      if (!userId) return; // 401 already sent
    }

    return route.handler(req, res, { params, userId });
  }

  sendJson(res, 404, { message: "Not found" });
}

module.exports = { handleRequest };
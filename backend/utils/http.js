// Small helpers for sending and reading HTTP data (instead of Express).

// Lets the React app (port 5173) talk to this server (port 5000)
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json", ...corsHeaders });
  res.end(JSON.stringify(data));
}

function sendText(res, status, text) {
  res.writeHead(status, { "Content-Type": "text/plain", ...corsHeaders });
  res.end(text);
}

// Reply for the browser's CORS pre-check request
function sendNoContent(res) {
  res.writeHead(204, corsHeaders);
  res.end();
}

// Read and parse the JSON body of a request
function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1e6) {
        req.destroy();
        reject(new Error("Body too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

module.exports = { sendJson, sendText, sendNoContent, readBody };
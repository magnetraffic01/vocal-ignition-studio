const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const DIR = path.join(__dirname, "dist");

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = http.createServer((req, res) => {
  let filePath = path.join(DIR, req.url === "/" ? "index.html" : req.url);

  if (!fs.existsSync(filePath)) {
    filePath = path.join(DIR, "index.html");
  }

  const ext = path.extname(filePath);
  const contentType = MIME[ext] || "application/octet-stream";

  try {
    const content = fs.readFileSync(filePath);
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  } catch (e) {
    res.writeHead(500);
    res.end("Error");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});

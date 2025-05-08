import http from "http";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

const mimeTypes = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".ico": "image/x-icon" };

const server = http.createServer(async (req, res) => {
  // Suppress favicon 404 by returning 204 No Content
  if (req.url === '/favicon.ico') {
    res.writeHead(204);
    return res.end();
  }

  const reqPath = req.url === "/" ? "/index.html" : req.url;
  const filePath = path.join(__dirname, reqPath);
  const ext = path.extname(filePath).toLowerCase();

  try {
    const content = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": mimeTypes[ext] || "application/octet-stream" });
    res.end(content);
  } catch {
    res.writeHead(404);
    res.end("File not found");
  }
});

server.listen(8888, () => {
  console.log("Server running at http://localhost:8888/");
});
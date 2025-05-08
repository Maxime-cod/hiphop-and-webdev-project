// node-server.mjs
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, resolve } from "node:path";

const host = "localhost";
const port = 8888;

const server = createServer(async (req, res) => {
  try {
    // For the root URL, serve index.html
    let filePath = req.url === "/" ? "./index.html" : "." + req.url;
    filePath = resolve(filePath);
    const content = await readFile(filePath);
    
    // Determine content type based on file extension.
    const ext = extname(filePath);
    let contentType = "text/plain";
    if (ext === ".js" || ext === ".mjs") {
      contentType = "text/javascript";
    } else if (ext === ".html") {
      contentType = "text/html";
    }
    
    res.setHeader("Content-Type", contentType);
    res.writeHead(200);
    res.end(content);
  } catch (err) {
    res.writeHead(404);
    res.end("404 Not Found: " + req.url);
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

import { createServer } from "node:http";
import { readFileSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";

const host = "localhost";
const port = 8888;

const contents = {
  "/": readFileSync("./index.html"),
  "/alarm.mjs": readFileSync("./alarm.mjs"),
  // Serve the HipHop client from the node_modules folder.
  "/hiphop-client.mjs": readFileSync("../node_modules/@hop/hiphop/hiphop-client.mjs"),
  "/beep.mp3": readFileSync("./beep.mp3")
};

// Also preload any HipHop library files.
const libPath = "../node_modules/@hop/hiphop/lib";
try {
  for (let file of readdirSync(libPath)) {
    if (file.match(/\.m?js$/)) {
      contents["/lib/" + file] = readFileSync(join(libPath, file));
    }
  }
} catch (e) {
  console.error("Error reading HipHop lib files:", e);
}

function getContentType(url) {
  // Special-case the root URL.
  if (url === "/") return "text/html";
  
  const ext = extname(url).toLowerCase();
  switch (ext) {
    case ".html": return "text/html";
    case ".js":
    case ".mjs": return "text/javascript";
    case ".css": return "text/css";
    case ".mp3": return "audio/mpeg";
    default: return "application/octet-stream";
  }
}

const handler = (req, res) => {
  const url = req.url;
  const content = contents[url];
  if (content) {
    res.setHeader("Content-Type", getContentType(url));
    res.writeHead(200);
    res.end(content);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
};

const server = createServer(handler);
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

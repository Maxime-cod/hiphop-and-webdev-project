import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve } from 'node:path';

const host = 'localhost';
const port = 8888;

createServer(async (req, res) => {
  try {
    const url = req.url === '/' ? '/index.html' : req.url;
    const file = resolve('.' + url);
    const data = await readFile(file);
    const type = extname(file);
    const mime = { '.html':'text/html', '.js':'text/javascript' };
    res.writeHead(200, { 'Content-Type': mime[type] || 'text/plain' });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}`)
);
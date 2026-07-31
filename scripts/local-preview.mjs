import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";
import worker from "../dist/server/index.js";

const root = join(process.cwd(), "dist", "client");
const types = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
};

function assetPath(pathname) {
  const path = normalize(join(root, decodeURIComponent(pathname)));
  return path.startsWith(root) ? path : null;
}

function serveFile(path, response) {
  response.writeHead(200, {
    "Content-Type": types[extname(path).toLowerCase()] ?? "application/octet-stream",
    "Content-Length": statSync(path).size,
  });
  createReadStream(path).pipe(response);
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", "http://localhost:3000");
  const path = assetPath(url.pathname);
  if (path && existsSync(path) && statSync(path).isFile()) {
    serveFile(path, response);
    return;
  }

  const result = await worker.fetch(
    new Request(url, { method: request.method, headers: request.headers }),
    {
      ASSETS: {
        fetch(assetRequest) {
          const asset = assetPath(new URL(assetRequest.url).pathname);
          if (!asset || !existsSync(asset) || !statSync(asset).isFile()) {
            return new Response("Not found", { status: 404 });
          }
          return new Response(createReadStream(asset), {
            headers: { "Content-Type": types[extname(asset).toLowerCase()] ?? "application/octet-stream" },
          });
        },
      },
    },
    { waitUntil() {}, passThroughOnException() {} },
  );

  response.writeHead(result.status, Object.fromEntries(result.headers));
  if (result.body) {
    for await (const chunk of result.body) response.write(chunk);
  }
  response.end();
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Portfolio preview: http://localhost:3000");
});

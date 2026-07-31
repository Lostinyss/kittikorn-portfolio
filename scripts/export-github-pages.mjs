import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import worker from "../dist/server/index.js";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "kittikorn-portfolio";
const basePath = `/${repository}`;
const clientRoot = join(process.cwd(), "dist", "client");

const response = await worker.fetch(
  new Request("http://localhost/", { headers: { accept: "text/html" } }),
  { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
  { waitUntil() {}, passThroughOnException() {} },
);

if (!response.ok) {
  throw new Error(`Unable to render portfolio: ${response.status}`);
}

let html = await response.text();
html = html
  .replaceAll('href="/', `href="${basePath}/`)
  .replaceAll('src="/', `src="${basePath}/`);

await writeFile(join(clientRoot, "index.html"), html, "utf8");
await writeFile(join(clientRoot, "404.html"), html, "utf8");

const manifest = JSON.parse(await readFile(join(clientRoot, ".vite", "manifest.json"), "utf8"));
const cssFiles = new Set(
  Object.values(manifest).flatMap((entry) => entry.css ?? []).filter(Boolean),
);

for (const cssFile of cssFiles) {
  const cssPath = join(clientRoot, cssFile);
  const css = await readFile(cssPath, "utf8");
  await writeFile(cssPath, css.replaceAll("url(/", `url(${basePath}/`), "utf8");
}

console.log(`GitHub Pages files exported with base path ${basePath}`);

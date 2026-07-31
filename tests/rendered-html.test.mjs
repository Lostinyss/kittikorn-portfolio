import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the completed portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>กิตติกร มานิมนต์ — Portfolio<\/title>/);
  assert.match(html, /Pinminder/);
  assert.match(html, /Pak Chong Pocket/);
  assert.match(html, /TrashTrack/);
  assert.match(html, /TECHNICAL SKILLS/);
  assert.match(html, /CERTIFICATES/);
  assert.match(html, /ผลงานที่ผ่านมา/);
  assert.match(html, /มหาวิทยาลัยกรุงเทพ วิทยาเขตรังสิต/);
  assert.match(html, /github\.com\/Lostinyss/);
  assert.doesNotMatch(html, /download[^>]*resume|download[^>]*transcript/i);
});

test("includes responsive project media and certificate previews", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /pinminder-demo\.mp4/);
  assert.match(html, /pak-chong-pocket-demo\.mp4/);
  assert.match(html, /trashtrack-demo\.mp4/);
  assert.match(html, /certificate-1\.png/);
  assert.match(html, /certificate-2\.png/);
  assert.match(html, /certificate-3\.png/);
});

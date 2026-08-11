import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";

const output = new URL("./dist/", import.meta.url);
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const file of ["index.html", "styles.css", "app.js"]) {
  await cp(new URL(`./${file}`, import.meta.url), new URL(`./dist/${file}`, import.meta.url));
}

await mkdir(new URL("./dist/assets/", import.meta.url), { recursive: true });
await cp(new URL("./assets/hero-friends-circle.jpg", import.meta.url), new URL("./dist/assets/hero-friends-circle.jpg", import.meta.url));
await cp(new URL("./.openai/", import.meta.url), new URL("./dist/.openai/", import.meta.url), { recursive: true });

const [html, css, javascript, hero] = await Promise.all([
  readFile(new URL("./index.html", import.meta.url), "utf8"),
  readFile(new URL("./styles.css", import.meta.url), "utf8"),
  readFile(new URL("./app.js", import.meta.url), "utf8"),
  readFile(new URL("./assets/hero-friends-circle.jpg", import.meta.url))
]);

const worker = `
const files = {
  "/": [${JSON.stringify(html)}, "text/html; charset=utf-8", "no-cache"],
  "/index.html": [${JSON.stringify(html)}, "text/html; charset=utf-8", "no-cache"],
  "/styles.css": [${JSON.stringify(css)}, "text/css; charset=utf-8", "public, max-age=3600"],
  "/app.js": [${JSON.stringify(javascript)}, "text/javascript; charset=utf-8", "public, max-age=3600"]
};
const heroBase64 = ${JSON.stringify(hero.toString("base64"))};
let heroBytes;
function getHero() {
  if (!heroBytes) {
    const binary = atob(heroBase64);
    heroBytes = Uint8Array.from(binary, character => character.charCodeAt(0));
  }
  return heroBytes;
}
export default {
  async fetch(request) {
    const path = new URL(request.url).pathname;
    let body;
    let type;
    let cache;
    if (path === "/assets/hero-friends-circle.jpg") {
      body = getHero();
      type = "image/jpeg";
      cache = "public, max-age=31536000, immutable";
    } else if (files[path]) {
      [body, type, cache] = files[path];
    } else {
      return new Response("Not found", { status: 404 });
    }
    return new Response(request.method === "HEAD" ? null : body, {
      headers: { "content-type": type, "cache-control": cache }
    });
  }
};
`;
await mkdir(new URL("./dist/server/", import.meta.url), { recursive: true });
await writeFile(new URL("./dist/server/index.js", import.meta.url), worker);
console.log("Static site built in dist/");

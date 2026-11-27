// Uploads every blog/course image referenced in <inDir>/{blogs,courses}.json to Cloudinary and writes
// <outDir>/{blogs,courses}.json where each image is { src: <cloudinary url>, width, height, blurDataURL }.
//  - signed uploads (CLOUDINARY_* keys from .env, never printed); folder stella-college/content/<blogs|courses>
//  - re-runnable: finished uploads are kept in <outDir>/cloudinary-map.json and skipped next time
// Usage: node scripts/content/cloudinary.mjs <inDir> <outDir>
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import os from "node:os";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const [inDir, outDir] = process.argv.slice(2).map((p) => path.resolve(p));
if (!inDir || !outDir) throw new Error("usage: cloudinary.mjs <inDir> <outDir>");

const env = Object.fromEntries(
  fs
    .readFileSync(".env", "utf8")
    .split(/\r?\n/)
    .filter((l) => l.includes("=") && !l.trim().startsWith("#"))
    .map((l) => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim().replace(/^["']|["']$/g, "")]),
);
const cloud = env.CLOUDINARY_CLOUD_NAME || env.CLOUD_NAME;
const key = env.CLOUDINARY_API_KEY;
const secret = env.CLOUDINARY_API_SECRET;
if (!cloud || !key || !secret) throw new Error("Missing Cloudinary credentials in .env");

const PUBLIC = path.resolve("public");
fs.mkdirSync(outDir, { recursive: true });
const mapFile = path.join(outDir, "cloudinary-map.json");
const map = fs.existsSync(mapFile) ? JSON.parse(fs.readFileSync(mapFile, "utf8")) : {};
const saveMap = () => fs.writeFileSync(mapFile, JSON.stringify(map, null, 2));

const slug = (s) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");

function upload(file, folder, publicId) {
  const timestamp = Math.floor(Date.now() / 1000);
  const params = { folder, overwrite: "true", public_id: publicId, timestamp };
  const toSign = Object.keys(params).sort().map((k) => `${k}=${params[k]}`).join("&");
  const signature = createHash("sha1").update(toSign + secret).digest("hex");
  const args = ["-sS", "--max-time", "300", "-X", "POST", `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
    "-F", `file=@${file}`, "-F", `api_key=${key}`, "-F", `signature=${signature}`];
  for (const [k, v] of Object.entries(params)) args.push("-F", `${k}=${v}`);
  return new Promise((resolve) => {
    const p = spawn("curl", args);
    let out = "";
    p.stdout.on("data", (d) => (out += d));
    p.on("close", () => {
      try { resolve(JSON.parse(out)); } catch { resolve({ error: { message: out.slice(0, 200) || "no response" } }); }
    });
  });
}

// Tiny blurred preview shown while the real image loads
async function blur(file) {
  const buf = await sharp(file).resize(12, 12, { fit: "inside" }).webp({ quality: 40 }).toBuffer();
  return `data:image/webp;base64,${buf.toString("base64")}`;
}

const data = {
  blogs: JSON.parse(fs.readFileSync(path.join(inDir, "blogs.json"), "utf8")),
  courses: JSON.parse(fs.readFileSync(path.join(inDir, "courses.json"), "utf8")),
};

// collect unique local images
const jobs = new Map(); // localSrc -> kind
const walk = (v, kind) => {
  if (Array.isArray(v)) return v.forEach((x) => walk(x, kind));
  if (v && typeof v === "object") {
    if (typeof v.src === "string" && "width" in v && v.src.startsWith("/")) { if (!jobs.has(v.src)) jobs.set(v.src, kind); return; }
    Object.values(v).forEach((x) => walk(x, kind));
  }
};
walk(data.blogs, "blogs");
walk(data.courses, "courses");

const todo = [...jobs].filter(([src]) => !map[src]);
console.log(`images=${jobs.size} already=${jobs.size - todo.length} toUpload=${todo.length}`);
let failed = 0;
const CONCURRENCY = 6;
for (let i = 0; i < todo.length; i += CONCURRENCY) {
  await Promise.all(
    todo.slice(i, i + CONCURRENCY).map(async ([src, kind]) => {
      const rel = decodeURI(src).slice(1);
      const file = path.join(PUBLIC, rel);
      const parsed = path.parse(rel);
      const publicId = slug(`${path.basename(parsed.dir)}-${parsed.name}`);
      // curl -F treats , and ; in the path specially, so upload from a temp copy with a safe name
      const safe = path.join(os.tmpdir(), `cld-${publicId}${parsed.ext}`);
      fs.copyFileSync(file, safe);
      const res = await upload(safe, `stella-college/content/${kind}`, publicId);
      fs.rmSync(safe, { force: true });
      if (res.error || !res.secure_url) {
        failed++;
        console.log(`FAIL ${rel}: ${res.error?.message}`);
        return;
      }
      map[src] = { url: res.secure_url, public_id: res.public_id, width: res.width, height: res.height, blurDataURL: await blur(file) };
      console.log(`OK ${res.public_id} (${Math.round(res.bytes / 1024)}KB)`);
    }),
  );
  saveMap();
}
if (failed) {
  console.log(`${failed} failed — re-run to retry; JSON not written`);
  process.exit(1);
}

const swap = (v) => {
  if (Array.isArray(v)) return v.map(swap);
  if (v && typeof v === "object") {
    if (typeof v.src === "string" && map[v.src]) {
      const m = map[v.src];
      return { src: m.url, width: m.width, height: m.height, blurDataURL: m.blurDataURL };
    }
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, swap(x)]));
  }
  return v;
};
fs.writeFileSync(path.join(outDir, "blogs.json"), JSON.stringify(swap(data.blogs), null, 2));
fs.writeFileSync(path.join(outDir, "courses.json"), JSON.stringify(swap(data.courses), null, 2));
console.log(`wrote ${outDir}`);

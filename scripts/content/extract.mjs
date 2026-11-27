// Extracts blogs + courses from the original TS data files into plain JSON (no DB access).
//  - every image import becomes { src, width, height } pointing at the same file under public/
//  - output: <outDir>/blogs.json and <outDir>/courses.json (array order = original order, kept as `order`)
// Usage: node scripts/content/extract.mjs <outDir>
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const sharp = require("sharp");

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const outDir = path.resolve(process.argv[2] || "content-backup/export");
const PUBLIC = path.join(ROOT, "public");

function resolveImport(spec, fromFile) {
  // tsconfig: @/assets/* -> public/assets/*, @/* -> src/*
  if (spec.startsWith("@/assets/")) return path.join(ROOT, "public", spec.slice(2));
  if (spec.startsWith("@/")) return path.join(ROOT, "src", spec.slice(2));
  return path.resolve(path.dirname(fromFile), spec);
}

const imageCache = new Map();
async function toAsset(absPath, kind) {
  if (imageCache.has(absPath)) return imageCache.get(absPath);
  if (!fs.existsSync(absPath)) throw new Error(`missing image ${absPath}`);
  if (!absPath.startsWith(PUBLIC + path.sep)) throw new Error('image not under public/: ' + absPath);
  const meta = await sharp(absPath).metadata();
  const asset = {
    // the files already live in public/, so the URL is just their public path (URI-encoded for spaces etc.)
    src: encodeURI('/' + path.relative(PUBLIC, absPath).split(path.sep).join('/')),
    width: meta.width,
    height: meta.height,
  };
  imageCache.set(absPath, asset);
  return asset;
}

// Load a TS data module, replacing image imports with markers we resolve afterwards
function loadModule(relFile) {
  const file = path.join(ROOT, relFile);
  let src = fs.readFileSync(file, "utf8");
  src = src.replace(
    /^\s*import\s+(\w+)\s+from\s+["']([^"']+\.(?:png|jpe?g|webp|gif|svg))["'];?/gim,
    (_m, name, spec) => `const ${name} = { __img: ${JSON.stringify(resolveImport(spec, file))} };`,
  );
  const js = ts.transpileModule(src, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, jsx: ts.JsxEmit.React },
  }).outputText;
  const mod = { exports: {} };
  const fakeRequire = (id) => {
    if (id === "next/image") return {};
    throw new Error(`unexpected require ${id} in ${relFile}`);
  };
  new Function("require", "module", "exports", js)(fakeRequire, mod, mod.exports);
  return mod.exports;
}

async function resolveImages(value, kind) {
  if (Array.isArray(value)) return Promise.all(value.map((v) => resolveImages(v, kind)));
  if (value && typeof value === "object") {
    if (typeof value.__img === "string") return toAsset(value.__img, kind);
    const out = {};
    for (const [k, v] of Object.entries(value)) out[k] = await resolveImages(v, kind);
    return out;
  }
  return value;
}

const blogMod = loadModule("src/data/home-data/BlogDataEditor.tsx");
const courseMod = loadModule("src/data/home-data/coursedataeditor.ts");

const blogs = await resolveImages(blogMod.blog_detail_data.blog_list, "blogs");
const courses = await resolveImages(courseMod.course_detail_data.course_list, "courses");

blogs.forEach((b, i) => (b.order = i));
courses.forEach((c, i) => (c.order = i));

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "blogs.json"), JSON.stringify(blogs, null, 2));
fs.writeFileSync(path.join(outDir, "courses.json"), JSON.stringify(courses, null, 2));
console.log(`blogs=${blogs.length} courses=${courses.length} images=${imageCache.size} -> ${outDir}`);

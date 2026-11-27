// Seeds MongoDB (MONGODB_URI from .env) with blogs + courses from the exported JSON.
//  - before writing, dumps whatever is already in the two collections to <jsonDir>/db-before-seed-<timestamp>/
//  - upserts by blogId / courseId (safe to re-run; nothing outside these two collections is touched)
// Usage: node scripts/content/seed.mjs <jsonDir>
import fs from "node:fs";
import path from "node:path";
import { MongoClient } from "mongodb";

const jsonDir = path.resolve(process.argv[2] || "content-backup/export");
const env = fs.readFileSync(".env", "utf8");
const uri = env.match(/^MONGODB_URI=(.*)$/m)?.[1]?.trim().replace(/^['"]|['"]$/g, "");
if (!uri) throw new Error("MONGODB_URI missing in .env");

const sets = [
  { collection: "blogs", key: "blogId", file: "blogs.json" },
  { collection: "courses", key: "courseId", file: "courses.json" },
];

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const backupDir = path.join(jsonDir, `db-before-seed-${new Date().toISOString().replace(/[:.]/g, "-")}`);
fs.mkdirSync(backupDir, { recursive: true });

for (const { collection, key, file } of sets) {
  const col = db.collection(collection);
  const existing = await col.find({}).toArray();
  fs.writeFileSync(path.join(backupDir, file), JSON.stringify(existing, null, 2));

  const docs = JSON.parse(fs.readFileSync(path.join(jsonDir, file), "utf8"));
  await col.createIndex({ [key]: 1 }, { unique: true });
  await col.createIndex({ order: 1 });
  const now = new Date();
  const res = await col.bulkWrite(
    docs.map((doc) => ({
      replaceOne: { filter: { [key]: doc[key] }, replacement: { ...doc, updatedAt: now }, upsert: true },
    })),
  );
  console.log(
    `${collection}: before=${existing.length} upserted=${res.upsertedCount} replaced=${res.modifiedCount} now=${await col.countDocuments()}`,
  );
}
console.log(`pre-seed DB snapshot -> ${backupDir}`);
await client.close();

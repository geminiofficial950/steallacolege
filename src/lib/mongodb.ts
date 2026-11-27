import { MongoClient, type Db } from "mongodb";

// One shared client per server process (kept on globalThis so dev hot-reloads don't open new pools)
const globalForMongo = globalThis as unknown as { __mongoClient?: Promise<MongoClient> };

function getClient(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI is not set");
  }
  if (!globalForMongo.__mongoClient) {
    globalForMongo.__mongoClient = new MongoClient(uri).connect().catch((error) => {
      // don't keep a failed connection around; the next request retries
      globalForMongo.__mongoClient = undefined;
      throw error;
    });
  }
  return globalForMongo.__mongoClient;
}

export async function getDb(): Promise<Db> {
  return (await getClient()).db();
}

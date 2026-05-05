import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

// ✅ Create a global cached connection (prevents multiple connections)
const globalForMongo = globalThis;

const client =
  globalForMongo._mongoClient ||
  new MongoClient(process.env.MONGO_URI);

if (!globalForMongo._mongoClient) {
  globalForMongo._mongoClient = client;
}

// ❗ DO NOT use top-level await here
// connection will be handled lazily by adapter

const db = client.db("qurbani-haat");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },

  baseURL:
    process.env.NEXT_PUBLIC_APP_URL ||
    "http://localhost:3000",
});
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const globalForMongo = globalThis;

const client =
  globalForMongo._mongoClient ||
  new MongoClient(process.env.MONGO_URI);

if (!globalForMongo._mongoClient) {
  globalForMongo._mongoClient = client;
}

const db = client.db("qurbani-haat");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),

  secret: process.env.BETTER_AUTH_SECRET, // ✅ Was missing!

  baseURL: process.env.BETTER_AUTH_URL,   // ✅ Use correct env var

  trustedOrigins: [                        // ✅ Was missing!
    "https://qurbani-haat-seven.vercel.app",
    "https://qurbani-haat-git-main-tanjirmahbub07-6178s-projects.vercel.app",
    "http://localhost:3000",
  ],

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
  },
});
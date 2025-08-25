import { MongoClient } from "mongodb";
// import { env } from "./env.js";

// export const dbClient = new MongoClient(env.MONGODB_URI)
export const dbClient = new MongoClient("mongodb://127.0.0.1")


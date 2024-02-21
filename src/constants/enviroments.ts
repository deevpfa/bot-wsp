import { readFileSync } from "fs";
// import { Algorithm } from "jsonwebtoken";
import { join } from "path";

export const api_url = process.env.NEXT_PUBLIC_API_URL;

export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/fulldata";

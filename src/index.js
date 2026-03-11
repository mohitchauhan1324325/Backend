import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]); // <<-- MUST run before anything that triggers DNS

import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

connectDB();
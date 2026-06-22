import dotenv from "dotenv";
import cluster from "cluster";
import os from "os";
import app from "./app";
import { connectDB } from "./app/config/db";

dotenv.config();

// For Vercel serverless: export app directly
export default app;

// Start a long-running server everywhere EXCEPT Vercel serverless.
// Vercel sets process.env.VERCEL automatically; VPS/local do not.
const startServer = async () => {
  try {
    await connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server worker ${process.pid} running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

// How many worker processes to fork. A single Node process uses only one CPU
// core, so under concurrent load the event loop (large JSON (de)serialization
// + gzip) becomes the bottleneck. Forking N workers spreads that across cores.
//
// Default: number of CPU cores, capped at 4. Override with WEB_CONCURRENCY.
// IMPORTANT: total MongoDB connections = workerCount × DB_MAX_POOL_SIZE.
// On free/shared Atlas keep this modest (e.g. WEB_CONCURRENCY=2).
const getWorkerCount = (): number => {
  const fromEnv = Number(process.env.WEB_CONCURRENCY);
  if (fromEnv > 0) return fromEnv;
  return Math.min(os.cpus().length || 1, 4);
};

if (!process.env.VERCEL) {
  const workerCount = getWorkerCount();

  if (workerCount > 1 && cluster.isPrimary) {
    console.log(`Primary ${process.pid} is forking ${workerCount} workers`);
    for (let i = 0; i < workerCount; i++) {
      cluster.fork();
    }
    // Keep capacity up: if a worker crashes, replace it.
    cluster.on("exit", (worker, code, signal) => {
      console.error(`Worker ${worker.process.pid} died (${signal || code}) — restarting`);
      cluster.fork();
    });
  } else {
    // Single-core box, WEB_CONCURRENCY=1, or this is a forked worker.
    startServer();
  }
}

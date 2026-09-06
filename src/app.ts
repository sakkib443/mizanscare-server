import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import compression from "compression";
import path from "path";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import { ensureDbConnection } from "./app/config/db";
import { serveFromGridFS } from "./app/config/gridfsStorage";

const app: Application = express();

// middleware
// gzip every response. Exam question sets are large, repetitive JSON
// (passages, options, instructions) and compress ~5-10x, so this is the
// single biggest win for module-load time and bandwidth under load.
app.use(compression());
app.use(express.json());
// Allow the browser to call the API from every URL the frontend is served on. The Origin
// header never has a trailing slash, so these entries must not either. The cors package
// checks the request origin against this array, and with a global app.use it also answers
// the OPTIONS preflight automatically — so JWTs in the Authorization header pass through.
app.use(cors({
  origin: [
    "https://ieltsmock.mizanscare.com",                       // current production frontend
    "https://mizansieltsmock.ftitbd.com",                     // old domain (kept in case its DNS returns)
    "https://glws1ui9irabnywfi9r3mndi.169.58.25.54.sslip.io", // direct Coolify URL (fallback)
    "http://localhost:3000",                                  // local development
    process.env.FRONTEND_URL,                                 // extra override via env, no code change needed
  ].filter(Boolean) as string[],
  credentials: true,
}));

// Serve locally uploaded files (e.g. videos uploaded via Design > Videos > Local)
// NOTE: On read-only / serverless platforms (e.g. Vercel) local writes won't persist,
// in which case admins should use Cloudinary or YouTube source instead.
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// Ensure DB connection before processing requests (for Vercel serverless)
app.use(async (req: Request, res: Response, next: NextFunction) => {
  try {
    await ensureDbConnection();
    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Database connection failed" });
  }
});

// Anything under /uploads the disk could not answer is looked up in GridFS,
// where every upload also keeps a durable copy. This is what makes uploaded
// audio survive a redeploy without a persistent volume — the file is streamed
// from MongoDB and restored to disk for next time. Mounted after the DB
// middleware above so the connection is ready; disk hits never get this far.
app.use("/uploads", serveFromGridFS);

// API routes
app.use("/api", router);

// Health check route
app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Mizan's Care IELTS API is running!",
    version: "1.0.0",
  });
});

// Global error handler
app.use(globalErrorHandler);

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;

import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";

/**
 * Durable copy of every locally uploaded file, kept in MongoDB GridFS.
 *
 * The app container's disk is ephemeral: on Coolify a redeploy recreates it and
 * anything under uploads/ is gone, which would leave the database pointing at
 * URLs that 404 mid-exam. A persistent volume would fix that, but it has to be
 * added through the Coolify UI. MongoDB already lives outside the container and
 * survives redeploys, so each upload is written there as well.
 *
 * Disk stays the fast path: express.static serves anything present. This module
 * only steps in for a file the disk has lost, streams it out of MongoDB, and
 * restores it to disk in the background so the next request is served normally.
 */

const BUCKET = "uploads";

const bucket = (): InstanceType<typeof mongoose.mongo.GridFSBucket> | null => {
    const db = mongoose.connection?.db;
    if (!db || mongoose.connection.readyState !== 1) return null;
    return new mongoose.mongo.GridFSBucket(db, { bucketName: BUCKET });
};

/**
 * Store a durable copy under the file's relative path ("uploads/audio/x.mp3").
 * Best-effort by design: the disk write has already succeeded by the time this
 * runs, so a GridFS hiccup must not fail the upload the admin is waiting on.
 */
export const saveToGridFS = async (
    relativePath: string,
    buffer: Buffer,
    contentType?: string
): Promise<boolean> => {
    const gfs = bucket();
    if (!gfs) return false;

    try {
        // Drop an older copy at the same path so re-uploads do not pile up.
        const existing = await gfs.find({ filename: relativePath }).toArray();
        for (const old of existing) {
            await gfs.delete(old._id).catch(() => undefined);
        }

        await new Promise<void>((resolve, reject) => {
            const stream = gfs.openUploadStream(relativePath, {
                metadata: { contentType: contentType || "application/octet-stream" },
            });
            stream.on("error", reject);
            stream.on("finish", () => resolve());
            stream.end(buffer);
        });

        return true;
    } catch {
        return false;
    }
};

/** Remove the durable copy. Used when a file is deleted through the admin panel. */
export const deleteFromGridFS = async (relativePath: string): Promise<void> => {
    const gfs = bucket();
    if (!gfs) return;

    try {
        const files = await gfs.find({ filename: relativePath }).toArray();
        for (const f of files) {
            await gfs.delete(f._id).catch(() => undefined);
        }
    } catch {
        // Nothing to do — the disk copy is already gone either way.
    }
};

// Paths currently being copied back to disk, so N simultaneous misses on the
// same file trigger one restore instead of N.
const restoring = new Set<string>();

const restoreToDisk = (relativePath: string, fileId: mongoose.Types.ObjectId) => {
    if (restoring.has(relativePath)) return;
    restoring.add(relativePath);

    const gfs = bucket();
    if (!gfs) {
        restoring.delete(relativePath);
        return;
    }

    const target = path.join(process.cwd(), relativePath);
    // Write to a temp name first: a half-written file must never be visible to
    // express.static, which would serve a truncated audio track.
    const temp = `${target}.restoring`;

    fs.promises
        .mkdir(path.dirname(target), { recursive: true })
        .then(
            () =>
                new Promise<void>((resolve, reject) => {
                    const read = gfs.openDownloadStream(fileId);
                    const write = fs.createWriteStream(temp);
                    read.on("error", reject);
                    write.on("error", reject);
                    write.on("finish", () => resolve());
                    read.pipe(write);
                })
        )
        .then(() => fs.promises.rename(temp, target))
        .catch(() => fs.promises.unlink(temp).catch(() => undefined))
        .finally(() => restoring.delete(relativePath));
};

/**
 * Express fallback for /uploads/* — mounted after express.static, so it only
 * sees requests the disk could not answer. Supports Range requests because
 * browsers seek within audio and video.
 */
export const serveFromGridFS = async (req: Request, res: Response, next: NextFunction) => {
    const gfs = bucket();
    if (!gfs) return next();

    // req.path here is relative to the /uploads mount, e.g. "/audio/x.mp3".
    const relativePath = path.posix.join("uploads", decodeURIComponent(req.path).replace(/^\/+/, ""));

    try {
        const [file] = await gfs.find({ filename: relativePath }).limit(1).toArray();
        if (!file) return next();

        const contentType = (file.metadata as { contentType?: string })?.contentType
            || "application/octet-stream";
        const total = file.length;

        res.setHeader("Accept-Ranges", "bytes");
        res.setHeader("Content-Type", contentType);

        const range = req.headers.range;
        const match = range ? /^bytes=(\d*)-(\d*)$/.exec(range.trim()) : null;

        if (match) {
            // An open-ended "bytes=500-" means "to the end"; "bytes=-500" means
            // the last 500 bytes.
            const hasStart = match[1] !== "";
            const hasEnd = match[2] !== "";
            let start = hasStart ? parseInt(match[1], 10) : 0;
            let end = hasEnd ? parseInt(match[2], 10) : total - 1;

            if (!hasStart && hasEnd) {
                start = Math.max(total - parseInt(match[2], 10), 0);
                end = total - 1;
            }

            if (start >= total || start > end) {
                res.setHeader("Content-Range", `bytes */${total}`);
                return res.status(416).end();
            }
            end = Math.min(end, total - 1);

            res.status(206);
            res.setHeader("Content-Range", `bytes ${start}-${end}/${total}`);
            res.setHeader("Content-Length", String(end - start + 1));
            // GridFS treats `end` as exclusive, HTTP as inclusive.
            gfs.openDownloadStream(file._id, { start, end: end + 1 }).pipe(res);
        } else {
            res.status(200);
            res.setHeader("Content-Length", String(total));
            gfs.openDownloadStream(file._id).pipe(res);
        }

        // Put it back on disk so the next request skips MongoDB entirely.
        restoreToDisk(relativePath, file._id as mongoose.Types.ObjectId);
    } catch {
        next();
    }
};

import fs from "fs";
import path from "path";

/**
 * Local disk storage — the VPS/Coolify alternative to Cloudinary.
 *
 * Files are written under `<cwd>/uploads/<folder>/` and served by the
 * `app.use("/uploads", express.static(...))` route already present in app.ts.
 * On Coolify that directory MUST be a persistent volume mounted at
 * /app/uploads, otherwise every redeploy wipes it.
 *
 * NOTE ON ABSOLUTE URLs: the listening exam page assigns media straight to the
 * element (`audioRef.current.src = audioUrl`, `<img src={imageUrl}>`) without
 * prefixing an API base, so a relative "/uploads/..." path would resolve
 * against the FRONTEND origin and 404. Everything here therefore returns a
 * fully-qualified URL built from PUBLIC_BASE_URL, which keeps the exam page
 * untouched and lets old Cloudinary URLs and new local ones coexist.
 */

// Where files live on disk. Kept in one place so the delete path can verify
// that a resolved file really sits inside it.
const uploadsRoot = () => path.join(process.cwd(), "uploads");

// Local publicIds are "uploads/<folder>/<filename>". Cloudinary's look like
// "ielts/audio/xyz", so the prefix tells the two apart with no ambiguity.
export const isLocalPublicId = (publicId: string): boolean =>
    publicId.replace(/^\/+/, "").startsWith("uploads/");

/**
 * "local" routes new uploads to disk; "cloudinary" keeps the old path.
 * Local is the default because the Cloudinary account now refuses uploads
 * ("cloud_name is disabled"), so falling back to it would only fail.
 */
export const storageDriver = (): string =>
    (process.env.STORAGE_DRIVER || "local").toLowerCase();

export const isLocalStorage = (): boolean => storageDriver() === "local";

/**
 * The origin new file URLs are built from. PUBLIC_BASE_URL wins when it is set;
 * otherwise the caller passes the origin the upload request itself arrived on,
 * which IS this server's public address — so the common case needs no config.
 * Only when both are missing do we refuse, because a relative URL would resolve
 * against the frontend and 404 in the middle of an exam.
 */
const publicBaseUrl = (fallback?: string): string => {
    const fromEnv = (process.env.PUBLIC_BASE_URL || "").trim().replace(/\/+$/, "");
    if (fromEnv) return fromEnv;

    const derived = (fallback || "").trim().replace(/\/+$/, "");
    if (derived) return derived;

    throw new Error(
        "Cannot determine this server's public URL. Set PUBLIC_BASE_URL " +
        "(e.g. https://api.example.com) and try again."
    );
};

/**
 * Write a buffer to `uploads/<folder>/` and return its public URL.
 * Mirrors the shape uploadToCloudinary returns so callers stay identical.
 */
export const saveToLocalDisk = async (
    buffer: Buffer,
    folder: string,
    originalName: string,
    baseUrlFallback?: string
): Promise<{ url: string; publicId: string; duration?: number }> => {
    const base = publicBaseUrl(baseUrlFallback); // validated before touching the disk

    const safeFolder = folder.replace(/[^a-zA-Z0-9._-]/g, "_");
    const dir = path.join(uploadsRoot(), safeFolder);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    // Timestamp + random suffix so two uploads of the same filename never collide
    // across the four cluster workers.
    const safeName = path.basename(originalName || "file").replace(/[^a-zA-Z0-9._-]/g, "_");
    const filename = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}_${safeName}`;

    await fs.promises.writeFile(path.join(dir, filename), buffer);

    const relative = `uploads/${safeFolder}/${filename}`;
    return {
        url: `${base}/${relative}`,
        publicId: relative,
        // Cloudinary probes duration during upload; on disk we do not, and no
        // caller currently reads it (the admin form has its own duration field).
        duration: undefined,
    };
};

/** Delete a locally stored file. Ignores an already-missing file. */
export const deleteFromLocalDisk = async (publicId: string): Promise<void> => {
    const cleaned = publicId.replace(/^\/+/, "").replace(/^uploads\//, "");
    const target = path.resolve(uploadsRoot(), cleaned);

    // Refuse anything that escapes the uploads directory via ".." or an
    // absolute path — the id reaches us from a request parameter.
    const root = path.resolve(uploadsRoot());
    if (target !== root && !target.startsWith(root + path.sep)) {
        throw new Error("Invalid file path");
    }

    if (fs.existsSync(target)) {
        await fs.promises.unlink(target);
    }
};

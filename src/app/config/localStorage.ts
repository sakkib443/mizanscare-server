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

/** "local" routes new uploads to disk; anything else keeps the Cloudinary path. */
export const storageDriver = (): string =>
    (process.env.STORAGE_DRIVER || "cloudinary").toLowerCase();

export const isLocalStorage = (): boolean => storageDriver() === "local";

const publicBaseUrl = (): string => {
    const base = (process.env.PUBLIC_BASE_URL || "").trim().replace(/\/+$/, "");
    if (!base) {
        // Fail loudly here rather than saving a relative URL that would only
        // break later, in the exam, with no obvious cause.
        throw new Error(
            "PUBLIC_BASE_URL is not set. Local storage needs it to build a full file URL " +
            "(e.g. https://api.example.com). Set it, or switch STORAGE_DRIVER back to cloudinary."
        );
    }
    return base;
};

/**
 * Write a buffer to `uploads/<folder>/` and return its public URL.
 * Mirrors the shape uploadToCloudinary returns so callers stay identical.
 */
export const saveToLocalDisk = async (
    buffer: Buffer,
    folder: string,
    originalName: string
): Promise<{ url: string; publicId: string; duration?: number }> => {
    const base = publicBaseUrl(); // validated before touching the disk

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

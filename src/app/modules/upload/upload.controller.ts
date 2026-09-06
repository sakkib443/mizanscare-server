import { Request, Response } from "express";
import { uploadToCloudinary, deleteFromCloudinary } from "../../config/cloudinary";
import {
    saveToLocalDisk,
    deleteFromLocalDisk,
    isLocalPublicId,
    isLocalStorage,
} from "../../config/localStorage";

/**
 * Where a NEW upload goes is decided by STORAGE_DRIVER:
 *   unset or "local" → the VPS disk under uploads/, served via /uploads
 *   "cloudinary"     → Cloudinary, exactly as before
 *
 * Local is the default so a fresh deploy needs no environment variable at all.
 * Files already on Cloudinary are untouched either way: their absolute URLs are
 * stored in the database and nothing here rewrites them. Setting the variable to
 * "cloudinary" restores the old behaviour with no code change.
 */
const storeFile = async (
    req: Request,
    file: Express.Multer.File,
    folder: string,
    resourceType: "image" | "video" | "raw"
): Promise<{ url: string; publicId: string; duration?: number }> => {
    if (isLocalStorage()) {
        return saveToLocalDisk(file.buffer, folder, file.originalname, requestOrigin(req));
    }
    return uploadToCloudinary(file.buffer, folder, resourceType);
};

/**
 * The public origin this request came in on, e.g. "https://api.example.com".
 * Saved file URLs must be absolute (see localStorage.ts), and the upload
 * request already arrives at this server's public address — so reading it off
 * the request saves the operator from configuring PUBLIC_BASE_URL at all.
 * Behind Coolify's proxy the real scheme and host are in the X-Forwarded-*
 * headers; req.protocol alone would report plain http.
 */
const requestOrigin = (req: Request): string => {
    const first = (value?: string) => (value || "").split(",")[0].trim();

    const proto = first(req.headers["x-forwarded-proto"] as string) || req.protocol || "https";
    const host = first(req.headers["x-forwarded-host"] as string) || req.get("host") || "";

    return host ? `${proto}://${host}` : "";
};

// Upload audio file
const uploadAudio = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No audio file provided",
            });
        }

        const result = await storeFile(
            req,
            req.file,
            "audio",
            "video" // Cloudinary uses "video" type for audio
        );

        res.status(200).json({
            success: true,
            message: "Audio uploaded successfully",
            data: {
                url: result.url,
                publicId: result.publicId,
                duration: result.duration,
                filename: req.file.originalname,
                size: req.file.size,
            },
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to upload audio",
        });
    }
};

// Upload image file
const uploadImage = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No image file provided",
            });
        }

        const result = await storeFile(
            req,
            req.file,
            "images",
            "image"
        );

        res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            data: {
                url: result.url,
                publicId: result.publicId,
                filename: req.file.originalname,
                size: req.file.size,
            },
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to upload image",
        });
    }
};

// Delete file
const deleteFile = async (req: Request, res: Response) => {
    try {
        const { publicId } = req.params;
        const resourceType = (req.query.type as "image" | "video") || "video";

        // The id itself says where the file lives, so old Cloudinary ids keep
        // deleting from Cloudinary even while STORAGE_DRIVER is "local".
        if (isLocalPublicId(publicId)) {
            await deleteFromLocalDisk(publicId);
        } else {
            await deleteFromCloudinary(publicId, resourceType);
        }

        res.status(200).json({
            success: true,
            message: "File deleted successfully",
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to delete file",
        });
    }
};// Upload video file (speaking recording)
const uploadVideo = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No video file provided",
            });
        }

        const result = await storeFile(
            req,
            req.file,
            "speaking-recordings",
            "video"
        );

        res.status(200).json({
            success: true,
            message: "Video uploaded successfully",
            data: {
                url: result.url,
                publicId: result.publicId,
                duration: result.duration,
                filename: req.file.originalname,
                size: req.file.size,
            },
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to upload video",
        });
    }
};

export const UploadController = {
    uploadAudio,
    uploadImage,
    uploadVideo,
    deleteFile,
};

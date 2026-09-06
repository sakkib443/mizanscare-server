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
 *   "local"      → the VPS disk under uploads/, served via /uploads (Coolify volume)
 *   anything else → Cloudinary, exactly as before
 *
 * Files already on Cloudinary are untouched either way: their absolute URLs are
 * stored in the database and nothing here rewrites them. Flipping the env var
 * back to "cloudinary" restores the old behaviour with no code change.
 */
const storeFile = async (
    file: Express.Multer.File,
    folder: string,
    resourceType: "image" | "video" | "raw"
): Promise<{ url: string; publicId: string; duration?: number }> => {
    if (isLocalStorage()) {
        return saveToLocalDisk(file.buffer, folder, file.originalname);
    }
    return uploadToCloudinary(file.buffer, folder, resourceType);
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

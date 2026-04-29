import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { SiteContentService } from "./siteContent.service";

// ===== PUBLIC =====

const getByKey = async (req: Request, res: Response) => {
    try {
        const item = await SiteContentService.getByKey(req.params.key);
        if (!item) {
            return res.status(404).json({ success: false, message: "Content not found" });
        }
        res.json({ success: true, data: item });
    } catch (e: any) {
        res.status(500).json({ success: false, message: e.message });
    }
};

const getBulk = async (req: Request, res: Response) => {
    try {
        const keysParam = (req.query.keys as string) || "";
        const keys = keysParam.split(",").map((s) => s.trim()).filter(Boolean);
        if (!keys.length) {
            return res.json({ success: true, data: [] });
        }
        const items = await SiteContentService.getByKeys(keys);
        res.json({ success: true, data: items });
    } catch (e: any) {
        res.status(500).json({ success: false, message: e.message });
    }
};

const getByCategory = async (req: Request, res: Response) => {
    try {
        const items = await SiteContentService.getByCategory(req.params.category);
        res.json({ success: true, data: items });
    } catch (e: any) {
        res.status(500).json({ success: false, message: e.message });
    }
};

// ===== ADMIN =====

const getAll = async (req: Request, res: Response) => {
    try {
        const items = await SiteContentService.getAll();
        res.json({ success: true, data: items });
    } catch (e: any) {
        res.status(500).json({ success: false, message: e.message });
    }
};

const updateByKey = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user?._id || (req as any).user?.id;

        const existing = await SiteContentService.getByKey(req.params.key);
        if (!existing) {
            return res.status(404).json({ success: false, message: "Content not found" });
        }

        // If switching from cloudinary to another source, clean up old cloudinary file
        if (
            existing.videoSource === "cloudinary" &&
            existing.videoPublicId &&
            req.body.videoSource &&
            req.body.videoSource !== "cloudinary"
        ) {
            await SiteContentService.removeCloudinaryVideo(existing.videoPublicId);
            req.body.videoPublicId = "";
        }

        const updated = await SiteContentService.updateByKey(
            req.params.key,
            req.body,
            userId
        );
        res.json({ success: true, message: "Content updated", data: updated });
    } catch (e: any) {
        res.status(500).json({ success: false, message: e.message });
    }
};

// Upload to Cloudinary, then update the entry with returned URL/publicId
const uploadCloudinaryVideo = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No video file provided" });
        }
        const userId = (req as any).user?._id || (req as any).user?.id;
        const key = req.params.key;

        const existing = await SiteContentService.getByKey(key);
        if (!existing) {
            return res.status(404).json({ success: false, message: "Content not found" });
        }

        // Remove previous Cloudinary file if any
        if (existing.videoSource === "cloudinary" && existing.videoPublicId) {
            await SiteContentService.removeCloudinaryVideo(existing.videoPublicId);
        }

        const { url, publicId } = await SiteContentService.uploadVideoToCloudinary(req.file.buffer);

        const updated = await SiteContentService.updateByKey(
            key,
            {
                videoSource: "cloudinary",
                videoUrl: url,
                videoPublicId: publicId,
            },
            userId
        );

        res.json({ success: true, message: "Video uploaded to Cloudinary", data: updated });
    } catch (e: any) {
        res.status(500).json({ success: false, message: e.message || "Upload failed" });
    }
};

// Save uploaded file to local server (uploads/videos/), serve via Express static
const uploadLocalVideo = async (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No video file provided" });
        }
        const userId = (req as any).user?._id || (req as any).user?.id;
        const key = req.params.key;

        const existing = await SiteContentService.getByKey(key);
        if (!existing) {
            return res.status(404).json({ success: false, message: "Content not found" });
        }

        // Ensure upload dir exists
        const uploadDir = path.join(process.cwd(), "uploads", "videos");
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Remove previous local file if any (path stored in videoUrl like "/uploads/videos/xxx.mp4")
        if (existing.videoSource === "local" && existing.videoUrl) {
            const oldFile = path.join(process.cwd(), existing.videoUrl.replace(/^\//, ""));
            if (fs.existsSync(oldFile)) {
                try { fs.unlinkSync(oldFile); } catch { /* ignore */ }
            }
        }

        // If old source was cloudinary, remove it too
        if (existing.videoSource === "cloudinary" && existing.videoPublicId) {
            await SiteContentService.removeCloudinaryVideo(existing.videoPublicId);
        }

        // Save new file with timestamped name
        const safeName = req.file.originalname.replace(/[^a-zA-Z0-9._-]/g, "_");
        const filename = `${key.replace(/[^a-zA-Z0-9._-]/g, "_")}_${Date.now()}_${safeName}`;
        const fullPath = path.join(uploadDir, filename);
        fs.writeFileSync(fullPath, req.file.buffer);

        const publicPath = `/uploads/videos/${filename}`;

        const updated = await SiteContentService.updateByKey(
            key,
            {
                videoSource: "local",
                videoUrl: publicPath,
                videoPublicId: "",
            },
            userId
        );

        res.json({ success: true, message: "Video uploaded locally", data: updated });
    } catch (e: any) {
        res.status(500).json({ success: false, message: e.message || "Upload failed" });
    }
};

export const SiteContentController = {
    // public
    getByKey,
    getBulk,
    getByCategory,
    // admin
    getAll,
    updateByKey,
    uploadCloudinaryVideo,
    uploadLocalVideo,
};

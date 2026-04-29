import { Document, Types } from "mongoose";

export type SiteContentType = "video" | "text";
export type VideoSource = "cloudinary" | "local" | "youtube";
export type SiteContentCategory = "video" | "homepage_text";

export interface ISiteContent extends Document {
    contentKey: string;
    contentType: SiteContentType;
    category: SiteContentCategory;
    label: string;
    description?: string;

    // For videos
    videoSource?: VideoSource;
    videoUrl?: string;
    videoPublicId?: string; // Cloudinary public_id (for deletion)

    // For texts
    textValue?: string;

    updatedBy?: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
}

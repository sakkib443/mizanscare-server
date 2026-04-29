import { Schema, model } from "mongoose";
import { ISiteContent } from "./siteContent.interface";

const SiteContentSchema = new Schema<ISiteContent>(
    {
        contentKey: { type: String, required: true, unique: true, trim: true },
        contentType: { type: String, enum: ["video", "text"], required: true },
        category: { type: String, enum: ["video", "homepage_text"], required: true },
        label: { type: String, required: true },
        description: { type: String, default: "" },

        // Video fields
        videoSource: { type: String, enum: ["cloudinary", "local", "youtube"], default: undefined },
        videoUrl: { type: String, default: "" },
        videoPublicId: { type: String, default: "" },

        // Text field
        textValue: { type: String, default: "" },

        updatedBy: { type: Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

export const SiteContent = model<ISiteContent>("SiteContent", SiteContentSchema);

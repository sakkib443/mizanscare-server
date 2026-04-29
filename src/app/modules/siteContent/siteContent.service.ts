import { SiteContent } from "./siteContent.model";
import { ISiteContent } from "./siteContent.interface";
import { uploadToCloudinary, deleteFromCloudinary } from "../../config/cloudinary";

const getAll = async () => {
    return SiteContent.find({}).sort({ category: 1, contentKey: 1 }).lean();
};

const getByKey = async (key: string) => {
    return SiteContent.findOne({ contentKey: key }).lean();
};

const getByKeys = async (keys: string[]) => {
    return SiteContent.find({ contentKey: { $in: keys } }).lean();
};

const getByCategory = async (category: string) => {
    return SiteContent.find({ category }).sort({ contentKey: 1 }).lean();
};

const updateByKey = async (
    key: string,
    payload: Partial<ISiteContent>,
    updatedBy?: any
) => {
    const update: any = { ...payload };
    if (updatedBy) update.updatedBy = updatedBy;
    return SiteContent.findOneAndUpdate(
        { contentKey: key },
        { $set: update },
        { new: true, upsert: false }
    );
};

const uploadVideoToCloudinary = async (
    buffer: Buffer
): Promise<{ url: string; publicId: string }> => {
    const result = await uploadToCloudinary(buffer, "site-videos", "video");
    return { url: result.url, publicId: result.publicId };
};

const removeCloudinaryVideo = async (publicId: string) => {
    if (!publicId) return;
    try {
        await deleteFromCloudinary(publicId, "video");
    } catch (e) {
        // ignore delete errors so updates still work
    }
};

export const SiteContentService = {
    getAll,
    getByKey,
    getByKeys,
    getByCategory,
    updateByKey,
    uploadVideoToCloudinary,
    removeCloudinaryVideo,
};

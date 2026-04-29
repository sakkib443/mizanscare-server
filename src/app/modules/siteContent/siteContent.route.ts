import { Router } from "express";
import { SiteContentController } from "./siteContent.controller";
import { auth, authorize } from "../../middlewares/auth";
import { upload } from "../../config/cloudinary";

const router = Router();

// ============ PUBLIC ROUTES ============
// Bulk fetch by keys: /api/site-content/bulk?keys=video.exam_general,text.hero_title
router.get("/bulk", SiteContentController.getBulk);
// Get all in a category: /api/site-content/category/video
router.get("/category/:category", SiteContentController.getByCategory);
// Get single by key
router.get("/key/:key", SiteContentController.getByKey);

// ============ ADMIN ROUTES ============
router.get("/", auth, authorize("admin", "mentor"), SiteContentController.getAll);
router.put("/key/:key", auth, authorize("admin", "mentor"), SiteContentController.updateByKey);

// Upload endpoints (file expected as 'video' field)
router.post(
    "/upload-cloudinary/:key",
    auth,
    authorize("admin", "mentor"),
    upload.single("video"),
    SiteContentController.uploadCloudinaryVideo
);
router.post(
    "/upload-local/:key",
    auth,
    authorize("admin", "mentor"),
    upload.single("video"),
    SiteContentController.uploadLocalVideo
);

export const SiteContentRoutes = router;

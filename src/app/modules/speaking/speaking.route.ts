import { Router } from "express";
import { SpeakingController } from "./speaking.controller";
import { auth, authorize } from "../../middlewares/auth";

const router = Router();

// ============ PUBLIC ROUTES (For Exam) ============

// Get speaking test for exam
router.get(
    "/exam/:testNumber",
    SpeakingController.getSpeakingTestForExam
);

// ============ ADMIN ROUTES ============

// Get statistics
router.get(
    "/statistics",
    auth,
    authorize("admin", "mentor"),
    SpeakingController.getStatistics
);

// Get test summary for dropdown
router.get(
    "/summary",
    auth,
    authorize("admin", "mentor"),
    SpeakingController.getTestSummary
);

// Create new speaking test
router.post(
    "/",
    auth,
    authorize("admin", "mentor"),
    SpeakingController.createSpeakingTest
);

// Get all speaking tests
router.get(
    "/",
    auth,
    authorize("admin", "mentor"),
    SpeakingController.getAllSpeakingTests
);

// Get speaking test by ID
router.get(
    "/:id",
    auth,
    authorize("admin", "mentor"),
    SpeakingController.getSpeakingTestById
);

// Update speaking test
router.patch(
    "/:id",
    auth,
    authorize("admin", "mentor"),
    SpeakingController.updateSpeakingTest
);

// Toggle active status
router.patch(
    "/:id/toggle-active",
    auth,
    authorize("admin", "mentor"),
    SpeakingController.toggleActive
);

// Delete speaking test
router.delete(
    "/:id",
    auth,
    authorize("admin", "mentor"),
    SpeakingController.deleteSpeakingTest
);

export const SpeakingRoutes = router;

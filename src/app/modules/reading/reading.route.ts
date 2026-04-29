import { Router } from "express";
import { ReadingController } from "./reading.controller";
import { auth, authorize } from "../../middlewares/auth";

const router = Router();

// ============ PUBLIC ROUTES (For Exam) ============

// Get reading test for exam (without answers)
router.get(
    "/exam/:testNumber",
    ReadingController.getReadingTestForExam
);

// Grade reading answers
router.post(
    "/grade",
    ReadingController.gradeReadingAnswers
);

// ============ ADMIN ROUTES ============

// Get statistics
router.get(
    "/statistics",
    auth,
    authorize("admin", "mentor"),
    ReadingController.getStatistics
);

// Get test summary for dropdown
router.get(
    "/summary",
    auth,
    authorize("admin", "mentor"),
    ReadingController.getTestSummary
);

// Create new reading test
router.post(
    "/",
    auth,
    authorize("admin", "mentor"),
    ReadingController.createReadingTest
);

// Get all reading tests
router.get(
    "/",
    auth,
    authorize("admin", "mentor"),
    ReadingController.getAllReadingTests
);

// Get reading test by ID
router.get(
    "/:id",
    auth,
    authorize("admin", "mentor"),
    ReadingController.getReadingTestById
);

// Update reading test
router.patch(
    "/:id",
    auth,
    authorize("admin", "mentor"),
    ReadingController.updateReadingTest
);

// Toggle active status
router.patch(
    "/:id/toggle-active",
    auth,
    authorize("admin", "mentor"),
    ReadingController.toggleActive
);

// Delete reading test
router.delete(
    "/:id",
    auth,
    authorize("admin", "mentor"),
    ReadingController.deleteReadingTest
);

export const ReadingRoutes = router;

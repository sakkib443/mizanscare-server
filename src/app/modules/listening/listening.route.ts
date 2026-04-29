import { Router } from "express";
import { ListeningController } from "./listening.controller";
import { auth, authorize } from "../../middlewares/auth";

const router = Router();

// ============ PUBLIC ROUTES (For Exam) ============

// Get listening test for exam (without answers)
router.get(
    "/exam/:testNumber",
    ListeningController.getListeningTestForExam
);

// Grade listening answers
router.post(
    "/grade",
    ListeningController.gradeListeningAnswers
);

// ============ ADMIN ROUTES ============

// Get statistics
router.get(
    "/statistics",
    auth,
    authorize("admin", "mentor"),
    ListeningController.getStatistics
);

// Get test summary for dropdown
router.get(
    "/summary",
    auth,
    authorize("admin", "mentor"),
    ListeningController.getTestSummary
);

// Create new listening test
router.post(
    "/",
    auth,
    authorize("admin", "mentor"),
    ListeningController.createListeningTest
);

// Get all listening tests
router.get(
    "/",
    auth,
    authorize("admin", "mentor"),
    ListeningController.getAllListeningTests
);

// Get listening test by ID
router.get(
    "/:id",
    auth,
    authorize("admin", "mentor"),
    ListeningController.getListeningTestById
);

// Update listening test
router.patch(
    "/:id",
    auth,
    authorize("admin", "mentor"),
    ListeningController.updateListeningTest
);

// Toggle active status
router.patch(
    "/:id/toggle-active",
    auth,
    authorize("admin", "mentor"),
    ListeningController.toggleActive
);

// Delete listening test
router.delete(
    "/:id",
    auth,
    authorize("admin", "mentor"),
    ListeningController.deleteListeningTest
);

export const ListeningRoutes = router;

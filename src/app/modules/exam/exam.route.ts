import { Router } from "express";
import { ExamController } from "./exam.controller";
import { auth, authorize } from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { createExamValidation, updateExamValidation } from "./exam.validation";

const router = Router();

// Public routes
router.get("/", ExamController.getAllExams);
router.get("/:examId", ExamController.getExamById);

// Admin only routes
router.post(
    "/",
    auth,
    authorize("admin", "mentor"),
    validateRequest(createExamValidation),
    ExamController.createExam
);

router.put(
    "/:examId",
    auth,
    authorize("admin", "mentor"),
    validateRequest(updateExamValidation),
    ExamController.updateExam
);

router.delete(
    "/:examId",
    auth,
    authorize("admin", "mentor"),
    ExamController.deleteExam
);

export const ExamRoutes = router;

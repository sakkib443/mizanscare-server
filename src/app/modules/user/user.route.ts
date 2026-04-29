import { Router } from "express";
import { UserController } from "./user.controller";
import { auth, authorize } from "../../middlewares/auth";

const router = Router();

// All user management routes require admin (any admin has full access)
router.get("/", auth, authorize("admin"), UserController.getAllUsers);
router.post("/", auth, authorize("admin"), UserController.createUser);
router.delete("/:id", auth, authorize("admin"), UserController.deleteUser);
router.patch("/:id/role", auth, authorize("admin"), UserController.updateRole);

export const UserRoutes = router;

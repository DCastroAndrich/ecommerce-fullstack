import express from "express";
import UserController from "../controllers/user.controller.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../auth/jwt.auth.js";

const router = express.Router();

class UserRouter {
  constructor() {
    this.controller = new UserController();
  }

  start() {
    router.put("/:id", verifyTokenAndAuthorization, this.controller.updateUser);
    router.delete(
      "/:id",
      verifyTokenAndAuthorization,
      this.controller.deleteUser
    );
    router.get("/find/:id", verifyTokenAndAdmin, this.controller.getUser);
    router.get("/", verifyTokenAndAdmin, this.controller.getAllUsers);
    router.get("/stats", verifyTokenAndAdmin, this.controller.getUsersStats);

    return router;
  }
}

export default UserRouter;

import express from "express";

import UserController from "../controllers/user.controller.js";

const router = express.Router();

class AuthRouter {
  constructor() {
    this.controller = new UserController();
  }

  start() {
    router.post("/register/", this.controller.saveUser);
    return router;
  }
}

export default AuthRouter;

import express from "express";
import CartController from "../controllers/cart.controller.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../auth/jwt.auth.js";

const router = express.Router();

class CartRouter {
  constructor() {
    this.controller = new CartController();
  }

  start() {
    router.post("/", verifyToken, this.controller.saveCart);
    router.put("/:id", verifyTokenAndAuthorization, this.controller.updateCart);
    router.delete("/:id", verifyTokenAndAuthorization, this.controller.deleteCart);
    router.get("/find/:userId", verifyTokenAndAuthorization, this.controller.getCart);
    router.get("/", verifyTokenAndAdmin, this.controller.getAllCarts);

    return router;
  }
}

export default CartRouter;

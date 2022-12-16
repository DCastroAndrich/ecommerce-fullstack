import express from "express";
import OrderController from "../controllers/order.controller.js";
import {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} from "../auth/jwt.auth.js";

const router = express.Router();

class OrderRouter {
  constructor() {
    this.controller = new OrderController();
  }

  start() {
    router.post("/", verifyToken, this.controller.saveOrder);
    router.put("/:id", verifyTokenAndAdmin, this.controller.updateOrder);
    router.delete("/:id", verifyTokenAndAdmin, this.controller.deleteOrder);
    router.get(
      "/find/:id",
      verifyTokenAndAuthorization,
      this.controller.getOrder
    );
    router.get("/", verifyTokenAndAdmin, this.controller.getAllOrders);
    router.get("/income", verifyTokenAndAdmin, this.controller.getStatsOrders);

    return router;
  }
}

export default OrderRouter;
